 
// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
 
gulp.task('stylus', function () {
  return gulp.src('./stylus/base.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function (cb) {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
  return gulp.src('./stylus/base.styl')
    .pipe(plumber({errorHandler: function (err) {
      console.log(err);
    }}))
    .pipe(watch('./stylus/**/*.styl'))
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('uglify', function() {
  return gulp.src([
    'js/*.js'
    ])
    // .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./static/js'));
});
 
gulp.task('default', [], function() {
    gulp.start('stylus', 'uglify');
});