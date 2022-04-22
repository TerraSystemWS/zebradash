"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  // Method 3: Replacing a core action
  // async findOne(ctx) {
  //   const { id } = ctx.params;
  //   const { query } = ctx;

  //   console.log(id);

  //   const entity = await strapi.service("api::post.post").findOne(id, query);
  //   const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

  //   return this.transformResponse(sanitizedEntity);
  // },
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;

    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };

    const entity = await strapi.service("api::post.post").find(query);

    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
}));
