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

    let newConfig = _.assign(defaults, cfg, overrides);
    fs.writeFile(savePath + file, 'module.exports = ' + JSON.stringify(newConfig) + ';', err => {
      if (err) {
        console.log('Error writing new config', err);
      }
    });
  });
});
