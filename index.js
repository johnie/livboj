var Table = require('cli-table'),
    Tabletop = require('tabletop');

var table = new Table({ head: ["Issue ID", "Issue name", "Prio", "Type", "Description", "Status"] });

table.push(
  ["1", "Add caterings", "3", "Feature", "You need to be able to add caterings to the booking", "Not Solved"],
  ["2", "Server crashes", "10", "Bug", "Add monitoring to see why server suddenly crashes", "Not Solved"]
);

console.log(table.toString());

// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0ApoF8beMv538dGlLV0NNcmQzSHVpNTZTUHVGNDAtclE&output=html'

// Tabletop.init({
//   key: public_spreadsheet_url,
//   callback: showInfo,
//   simpleSheet: true
// });

// function showInfo(data, tabletop) {
//   console.log(data);
// };
