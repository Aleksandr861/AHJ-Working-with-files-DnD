// ---------- настройки для webpack в режиме 'production': ----------
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true, minimizer: [
            '...', new CssMinimizerPlugin()
        ],
    },
};