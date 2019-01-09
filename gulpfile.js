var gulp = require('gulp'),
  uglify = require('gulp-uglify-es').default,
  rename = require('gulp-rename'),
  autoprefixer = require('autoprefixer'),
//   minifyejs = require('gulp-minify-ejs'),
  postcss = require('gulp-postcss'),
  imagemin = require('gulp-imagemin'),
  cleanCss = require('gulp-clean-css'),
  babel = require('gulp-babel');
//   browserify = require('gulp-run-command').default;


// minify javascript
gulp.task ('scripts', function(){

    gulp.src('public/javascript/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
          }))
        .pipe(gulp.dest('build/public/javascript'));

});

// autoprefixe css
gulp.task('styles', function () {

    return gulp.src('public/stylesheets/*.css')
        .pipe(postcss([ autoprefixer({browsers: ['IE 10', 'last 3 versions']})]))
        .pipe(cleanCss())
        .pipe(rename(function (path) {
            path.basename += ".prefixed.min";
            path.extname = ".css";
          }))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/public/stylesheets'));
});

// compress images
gulp.task('compress', function () {

    return gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(rename(function (path) {
            path.basename += ".compressed";
          }))
        .pipe(gulp.dest('build/public/images'));
});


// watch for changes
gulp.task('watch', function () {
        gulp.watch('public/javascript/*.js', ['scripts']);
        gulp.watch('public/stylesheets/*.css', ['styles']);
        gulp.watch('public/images/*', ['compress']);        
});

gulp.task ('default', ['scripts', 'styles', 'compress', 'watch']);
