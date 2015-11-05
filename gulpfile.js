var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('prod', function () {
  runSequence('build', 'delay',
              ['css-prod', 'js-prod'], 'delay',
              'inject-prod');
});

gulp.task('build', function () {
    runSequence(['css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject', 'delay');
});

gulp.task('develop', function () {
    runSequence('build', 'watch');
});

gulp.task('default', require('./task/default.task'));
gulp.task('clean', require('./task/clean.task'));
gulp.task('css', require('./task/css.task'));
gulp.task('vendor-css', require('./task/vendor-css.task'));
gulp.task('css-prod', require('./task/css.task').prod);
gulp.task('js', require('./task/js.task'));
gulp.task('vendor-js', require('./task/vendor-js.task'));
gulp.task('js-prod', require('./task/js.task').prod);
gulp.task('template', require('./task/template.task'));
gulp.task('inject', require('./task/inject.task'));
gulp.task('inject-prod', require('./task/inject.task').prod);
gulp.task('delay', require('./task/delay.task'));
gulp.task('watch', require('./task/watch.task'));