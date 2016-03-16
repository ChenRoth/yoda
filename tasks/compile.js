'use strict';
const frontmatter = require('gulp-front-matter');
const injectMetadata = require('../gulp-plugins/inject-metadata');
const interpolate = require('../gulp-plugins/interpolate');
const md2html = require('../gulp-plugins/md2html');
const skipDraft = require('../gulp-plugins/skip-draft');

const renderTemplate = require('../gulp-plugins/render-template');
const path = require('path');

module.exports = (gulp, metadata, opts) => {
  gulp.task('compile', function compile() {
    return gulp.src(path.join(opts.paths.content, '**/*.md'), {
        since: gulp.lastRun('compile')
      })
      .pipe(frontmatter())
      .pipe(injectMetadata(metadata))
      .pipe(skipDraft())
      .pipe(interpolate())
      .pipe(md2html())
      .pipe(renderTemplate(opts.paths.templates))
      .pipe(gulp.dest(opts.paths.build));

  });
}