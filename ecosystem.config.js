module.exports = {
  apps: [
    {
      name: "dash_dash_backend",

      script: "./dist/server.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },

    {
      name: "dash_dash_emailworker",

      script: "./dist/jobs/workers/emailWorker.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },

    {
      name: "dash_dash_notifications_worker",

      script: "./dist/jobs/workers/notificationWorker.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
