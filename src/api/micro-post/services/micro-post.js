'use strict';

/**
 * micro-post service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::micro-post.micro-post');
