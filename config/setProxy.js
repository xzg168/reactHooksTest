module.exports = {
  '/local/**': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    headers: {
      Connection: 'keep-alive',
    },
  },
};
