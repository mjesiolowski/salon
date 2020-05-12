var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var babel = require('gulp-babel');

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

   gulp.watch('src/**/*.scss', gulp.series('sass'));
   gulp.watch("src/**/*.html").on('change', browserSync.reload);
   gulp.watch("src/**/*.js").on('change', browserSync.reload);
}));

gulp.task('scripts', function () {
   return gulp.src('src/scripts/**/*')
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      .pipe(gulp.dest('dist/scripts'))
});

gulp.task('distHTML', () =>
   gulp.src('src/**/*.html')
      .pipe(gulp.dest('dist/'))
);

gulp.task('distImages', () =>
   gulp.src('src/images/**/*')
      .pipe(gulp.dest('dist/images'))
);

gulp.task('distFonts', () =>
   gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
);

gulp.task('nano', function () {
   return gulp.src('src/css/styles.css')
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task("build", (gulp.series('distHTML', 'scripts', 'distImages', 'distFonts', 'nano')));

gulp.task("default", (gulp.series("serve")));