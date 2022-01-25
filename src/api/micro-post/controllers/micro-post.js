'use strict';

/**
 *  micro-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::micro-post.micro-post');
