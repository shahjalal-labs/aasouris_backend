module.exports = {
  apps: [
    {
      name: "smiley_aasouris_backend",

      script: "./dist/server.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },

    {
      name: "smiley_aasouris_emailworker",

      script: "./dist/jobs/workers/emailWorker.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },

    {
      name: "smiley_aasouris_notifications_worker",

      script: "./dist/jobs/workers/notificationWorker.js",

      watch: false,

      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
