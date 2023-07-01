const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync  = require('browser-sync').create();

gulp.task('sass',() =>{
    return gulp.src('./src/scss/*.scss')
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('pug',() =>{
    return gulp.src('./src/pug/*.pug').pipe(pug())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('build',gulp.parallel('sass','pug'));

gulp.task('server',()=>{
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
});

gulp.watch('./src/scss/*.scss',gulp.series('sass'));
gulp.watch('./src/pug/*.pug',gulp.series('pug'));
gulp.watch('./dist/*.html').on('change', browserSync.reload);
gulp.task('development', gulp.series('build', 'server'));