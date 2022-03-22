// path: ./src/api/contacto/routes/custom-contacto.js

module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "POST",
      path: "/contacto",
      handler: "contacto.sendmail",
    },
  ],
};
