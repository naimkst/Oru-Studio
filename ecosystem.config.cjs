module.exports = {
  apps: [
    {
      name: "oru-studio",
      cwd: __dirname,
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3386",
      },
      max_memory_restart: "512M",
      time: true,
    },
  ],
};
