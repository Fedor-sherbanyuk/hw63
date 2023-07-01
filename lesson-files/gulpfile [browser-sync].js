const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });
};

exports.server = browserSyncJob;