var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

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



gulp.task('distHTML', () =>
   gulp.src('src/index.html')
   .pipe(gulp.dest('dist/'))
);

gulp.task('distHTML--subpage', () =>
   gulp.src('src/suknie/*.html')
   .pipe(gulp.dest('dist/suknie'))
);

gulp.task('distJS', () =>
   gulp.src('src/scripts/main.js')
   .pipe(gulp.dest('dist/scripts'))
);

gulp.task('distJS--subpage', () =>
   gulp.src('src/suknie/js/*.js')
   .pipe(gulp.dest('dist/suknie/js'))
);

gulp.task('distImages', () =>
   gulp.src('src/images/**/*')
   .pipe(gulp.dest('dist/images'))
);

gulp.task('autoprefixer', () =>
   gulp.src('src/css/styles.css')
   .pipe(autoprefixer({
      browsers: ["last 3 versions", "> 1%"],
      cascade: false
   }))
   .pipe(gulp.dest('dist/css'))
);


gulp.task('nano', function () {
   return gulp.src('dist/css/styles.css')
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task("build", (gulp.series('distHTML', 'distHTML--subpage', 'distJS--subpage', 'distJS', 'distImages', 'autoprefixer', 'nano')));

gulp.task("default", (gulp.series("serve")));