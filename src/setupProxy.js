const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://preprod.linkaform.com', // <--- config the url based on your backend server
            logLevel: "debug",
            changeOrigin: true,
        })
    )
}