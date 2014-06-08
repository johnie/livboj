var Livboj = require('../lib/livboj')
  , livboj = new Livboj({
        service: 'github'
      , username: 'USERNAME'
      , password: 'PASSWORD'
      , repousername: 'wp-ptb'
      , repo: 'wp-ptb'
    })
  , Table = require('cli-table')
  , table = new Table({
      head: ['Issue ID', 'Issue name', 'Prio', 'Type', 'Description', 'Status'],
    });


// Get all issues.
livboj.getIssues(function (issues) {
  for (var i = 0; i < issues.length; i++) {
   table.push(issues[i]);
  }
  console.log(table.toString());
});