module.exports = {
  apps: [
    {
      name: "nestjs-postgres-auth-roles",
      script: "yarn",
      args: "start:prod",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
