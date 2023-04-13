const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:8080', // replace with your backend URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '' // remove the '/api' path prefix
    }
  }));
};
