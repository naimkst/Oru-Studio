module.exports = {
  apps: [
    {
      name: "oru-studio",
      cwd: __dirname,
      script: "scripts/start-production.sh",
      interpreter: "/bin/sh",
      env: {
        NODE_ENV: "production",
        PORT: "3387",
        APP_HOST: "127.0.0.1",
      },
      autorestart: true,
      watch: false,
      min_uptime: "10s",
      restart_delay: 3000,
      exp_backoff_restart_delay: 100,
      max_restarts: 20,
      max_memory_restart: "512M",
      time: true,
    },
  ],
};
