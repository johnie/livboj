'use strict';

/**
 * Initialize Livboj.
 *
 * @param {Object} options
 */

function Livboj (options) {
  this.options = options || {};

  if (this.services[options.service.toLowerCase()] === undefined) {
    throw new Error(options.service + ' is not supported');
  }

  this.service = new this.services[options.service.toLowerCase()](this.options);
}

/**
 * Livboj services.
 */

Livboj.prototype.services = {
  github: require('./services/github.js')
}

/**
 * Get issues.
 *
 * @param {Function} fn
 */

Livboj.prototype.getIssues = function (fn) {
  this.service.getIssues(fn);
}

/**
 * Export Livboj module.
 */

module.exports = Livboj;