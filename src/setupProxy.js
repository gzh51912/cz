const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use('/hd',
        createProxyMiddleware({
            target: 'http://8.129.13.4:2020',
            changeOrigin: true,
            pathRewrite: {
                '^/hd': ""
            }
        }
        ));
}