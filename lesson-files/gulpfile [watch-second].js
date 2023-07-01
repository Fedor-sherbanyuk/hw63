const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Ой, файл index.scss изменился');

    done();
};

const watchers = () => {
    watch('dist/sass/index.scss', changeAppStylesFile);
};

exports.watchers = watchers;