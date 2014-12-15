var gulp = require('gulp');
var w3cjs = require('gulp-w3cjs');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('htmllint', function () {
    gulp.src('*.html')
        .pipe(w3cjs());
});


gulp.task('csslint', function() {
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('default', function() {
  gulp.start('htmllint', 'csslint');
});
