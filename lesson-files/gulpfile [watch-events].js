const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Ой, файл index.scss изменился');

    done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const watchers = () => {
    // Отслеживание только события `change`
    watch('dist/scss/index.scss', { events: 'change' }, changeAppStylesFile);

    // Отслеживание удаления и добавления файлов в директории
    watch('dist/scss/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.watchers = watchers;
