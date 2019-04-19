const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/react', {
        target: 'http://127.0.0.1:3000/',
        pathRewrite: {
            "^/react": "/"
        }
    }));
    // app.use(proxy('/auth', {
    //     target: 'http://127.0.0.1:4002/',
    //     pathRewrite: {
    //         "^/auth": "/"
    //     }
    // }));
};