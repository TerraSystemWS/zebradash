module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36222198ba0a4a36a1151f584b5e5351'),
  },
});
