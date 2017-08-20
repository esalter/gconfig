var glob = require('glob');
var fs = require('fs');
var _ = require('lodash');

let defaults = require('./defaults');
let overrides = require('./ALLPAIRS-params.js');

let savePath = '../';

// options is optional
glob("**/*-config.js", {}, function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(file => {
    let cfg = require('./' + file);

    let newConfig = _.assign({}, defaults, cfg, overrides);
    let printed = printObject(newConfig);
    fs.writeFile(savePath + file, 'var config = ' + printed + '; module.exports = config;', err => {
      if (err) {
        console.log('Error writing new config', err);
      }
    });
  });
});

function printObject(o) {
  var out = '';
  for (var p in o) {
    let value = isNumeric(o[p]) ? o[p] : `'${o[p]}'`;
    if (value === `'false'`) value = false;
    if (value === `'true'`) value = true;
    out += '  ' + p + ': ' + value + ',\n';
  }

  out = out.substring(0, out.length - 2) + '\n';
  return `{
${out}
}`;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
