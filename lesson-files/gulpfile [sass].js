const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/scss/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'));
}

exports.build = buildSass;