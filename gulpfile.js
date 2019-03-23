var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('sass', function () {
   return gulp.src('src/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function () {

   browserSync.init({
      server: "./src"
   });

   gulp.watch('src/scss/*.scss', gulp.series('sass'));
   gulp.watch("src/*.html").on('change', browserSync.reload);
   gulp.watch("src/js/*.js").on('change', browserSync.reload);
}));

gulp.task('deploy', function () {
   return gulp.src('./src/')
      .pipe(ghPages());
});

gulp.task("default", (gulp.series("serve")));