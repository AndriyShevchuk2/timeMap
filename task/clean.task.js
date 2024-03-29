var gulp = require('gulp');
var rimraf = require('rimraf');
var path = require('../path.config');

var sourcePath = [
  path.buildDir,
  path.prodDir,
  path.testDir + '/build'
];

module.exports = cleanTask;

function cleanTask () {
    return gulp.src(sourcePath, {read: false})
          .pipe(rimraf());
}
