 
// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
 
 
// include, if you want to work with sourcemaps 
// var sourcemaps = require('gulp-sourcemaps');
 
// // Get one .styl file and render 
// gulp.task('one', function () {
//   return gulp.src('./css/one.styl')
//     .pipe(stylus())
//     .pipe(gulp.dest('./css/build'));
// });
 
// // Options 
// // Options compress 
gulp.task('default', function () {
  return gulp.src('./stylus/base.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./static/css'));
});
 
 
// // Set linenos 
// gulp.task('linenos', function () {
//   return gulp.src('./css/linenos.styl')
//     .pipe(stylus({linenos: true}))
//     .pipe(gulp.dest('./css/build'));
// });
 
// // Include css 
// // Stylus has an awkward and perplexing 'include css' option 
// gulp.task('include-css', function() {
//   return gulp.src('./css/*.styl')
//     .pipe(stylus({
//       'include css': true
//     }))
//     .pipe(gulp.dest('./'));
 
// });
 
// // Inline sourcemaps 
// gulp.task('sourcemaps-inline', function () {
//   return gulp.src('./css/sourcemaps-inline.styl')
//     .pipe(sourcemaps.init())
//     .pipe(stylus())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./css/build'));
// });
 
// // External sourcemaps 
// gulp.task('sourcemaps-external', function () {
//   return gulp.src('./css/sourcemaps-external.styl')
//     .pipe(sourcemaps.init())
//     .pipe(stylus())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css/build'));
// });
 
// // Default gulp task to run 
// gulp.task('default', ['one', 'compress', 'linenos', 'sourcemaps-inline', 'sourcemaps-external']);
 
