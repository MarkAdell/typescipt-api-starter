module.exports = {
  apps: [
    {
      name: 'app',
      script: 'dist/index.js',
      max_memory_restart: '1G', // restart if process uses more than 1G memory
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    },
  ],
};
