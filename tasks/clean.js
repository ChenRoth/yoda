'use strict';
const del = require('del');
const path = require('path');

module.exports = (gulp, opts) => {
  gulp.task(clean);

  function clean() {
    return del(opts.paths.build);
  };
  clean.description = 'clean your build'
}
