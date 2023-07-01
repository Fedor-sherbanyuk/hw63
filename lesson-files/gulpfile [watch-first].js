const { watch } = require('gulp');

const watchers = () => {
    watch('dist/scss/index.scss', (done) => {
        console.log('Ой, файл index.scss изменился');

        done();
    });
};

exports.watchers = watchers;