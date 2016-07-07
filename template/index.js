/*
| Software Consulting Contract
|
| @link      http://websemantics.ca
| @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
| @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
└ */

var latex = require('latex')
var handlebars = require('handlebars')
var metadata = require('./data.json')
var fs = require('fs')

fs.readFile('./contract.latex', 'utf8', function(err, data) {
  if (err) throw err;
  var template = handlebars.compile(data);
  latex(template(metadata)).pipe(process.stdout);
});
