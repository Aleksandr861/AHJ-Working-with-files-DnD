import './copyrights.css';

export default class Copyrights {
    constructor() {
        this.element = document.createElement('address');
        this.element.classList.add('copyrights');

        this.link = document.createElement('a');
        this.link.classList.add('copyrights__link');
        this.link.href = 'https://github.com/Aleksandr861';
        this.link.textContent = '© Aleksandr861, 2025';

        this.element.append(this.link);
    }

    checkRights() {
        if (this.element.textContent !== '© Aleksandr861, 2025') {

            console.warn('This work has been stolen from https://github.com/Aleksandr861/AHJ-Working-with-files-DnD');
        }
    }
}
