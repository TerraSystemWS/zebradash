"use strict";

/**
 * comentario service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::comentario.comentario");
//   ,
//   ({ strapi }) => ({
//     async find(ctx) {
//       let entities;
//       let res;
//       let res2;
//       console.log("entities");
//       console.log(entities);

//       console.log("ctx.query._q");
//       console.log(ctx.query._q);
//       console.log("ctx.query");
//       console.log(ctx.query);

//       if (ctx.query._q) {
//         //pesquisa ::  ?_q=
//         entities = await strapi.services.comentario.search(ctx.query);
//         console.log("entitiesif:");
//         console.log(entities);
//       } else {
//         if (ctx.query.post) {
//           res = ctx.query.post.split(",");
//           console.log(res);
//           res2 = res.map((el) => parseInt(el));
//           console.log(res2);
//           entities = await strapi.services.comentario.find(
//             { _limit: 10, post: res2 },
//             ["users.username"]
//           );
//           console.log("entities elseif:");
//           console.log(entities);
//         } else {
//           entities = await strapi.services.comentario.find(ctx.query);
//           console.log("entities else:");
//           console.log(entities);
//         }
//       }

//       return entities.map((entity) =>
//         sanitizeEntity(entity, { model: strapi.models.comentario })
//       );
//     },
//   })
// );
