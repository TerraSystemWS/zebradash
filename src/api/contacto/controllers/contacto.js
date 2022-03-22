"use strict";

/**
 *  contacto controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::contacto.contacto",
  ({ strapi }) => ({
    sendmail: async (ctx) => {
      const { name, email, message } = ctx.request.body;

      //   console.log("body request: " + name + email + message);

      let resmail;
      if (!email) {
        return "Email nao identificado";
      } else {
        resmail = await strapi.plugins["email"].services.email.send({
          to: email,
          from: "info@zebratravel.net",
          subject: `Zebra Travel:${name} `,
          text: `${message}`,
          html: `<p>${message}</p>`,
        });
      }

      return resmail;
    },
  })
);
