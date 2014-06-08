'use strict';

/**
 * Module dependecies.
 */

var GitHubApi = require('github-api')
  , utils = require('../utils');

/**
 * GitHub Prototype.
 */

function GitHub (options) {
  this.options = options || {};
  this.api = new GitHubApi({
    username: this.options.username,
    password: this.options.password,
    auth: 'basic'
  });
}

/**
 * Get issues.
 *
 * @param {Function} fn
 */

GitHub.prototype.getIssues = function (fn) {
  var row = []
    , issues = this.api.getIssues(this.options.repousername || this.options.username, this.options.repo);

  issues.list({}, function (err, issues) {

    if (err) {
      console.log('ERROR');
      console.log(err);
      return;
    }

    for (var i = 0, l = issues.length; i < l; i++) {
      // Get the body
      var body = issues[i].body.trim();

      // todo, calc the terminal width
      body = utils.strSplit(body, 50);
      body = body.join('\n');

      // Get all labels
      var labels = [];
      for (var j = 0, k = issues[i].labels.length; j < k; j++) {
        labels.push(issues[i].labels[j].name);
      }

      // Default label.
      if (!labels.length) {
        labels.push('none');
      }

      // github don't have any prio, hm..?
      var prio = 0;

      // Add the row.
      row.push([
        issues[i].number,
        issues[i].title,
        prio,
        labels,
        body,
        issues[i].state
      ]);
    }

    // Run the callback
    fn(row);
  });
}

/**
 * Export GitHub module.
 */

module.exports = GitHub;