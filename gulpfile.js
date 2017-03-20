
const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');

const filter = require('gulp-filter');

gulp.task('server', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('./scss/*', ['scss']);
    gulp.watch('./*.html').on('change', reload);
});

gulp.task('scss', () => {
    gulp.src('./scss/*')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'))
        .pipe(filter('**/*.css'))
        .pipe(reload({stream: true}))
});

gulp.task('default', ['server']);



