import allCards from '../js/allCards';

export default class Storage {
    constructor() {
        this.formData = {};
        this.getStorage();
        window.addEventListener('beforeunload', this.setStorage.bind(this)); // перед закрытием страницы
    }

    getStorage() {
        if (!localStorage.getItem('formdata')) { // если сами не создавали ничего, то возьмём из заготовки
            this.formData = structuredClone(allCards); // глубокая копия заготовки
        } else {
            const json = localStorage.getItem('formdata');
            try {
                this.formData = JSON.parse(json) || {};
            } catch (error) {
                this.formData = {};
            }
        }
    }

    setStorage() {
        const columns = document.querySelectorAll('.column');

        columns.forEach((column) => {
            const key = column.dataset.title;
            const value = [];

            const cardList = column.querySelectorAll('.cards__item');
            cardList.forEach((card) => {
                value.push(card.textContent);
            });

            this.formData[key] = value;
        });

        localStorage.setItem('formdata', JSON.stringify(this.formData));
    }
}
