var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var livereload = require('gulp-livereload');

var path = require('../path.config');

var srcFiles = path.frontDir + '/app/**/*.tpl';

module.exports = templateTask;
module.exports.srcFiles = srcFiles;

function templateTask () {
  gulp.src(srcFiles)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(path.buildDir))
    .pipe(livereload());
}
