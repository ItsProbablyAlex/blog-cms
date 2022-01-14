module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f8f42caab4b31b19aa5b41bcd073bf2'),
  },
});
