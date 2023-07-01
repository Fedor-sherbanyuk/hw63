const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });

    watch('dist/sass/*.scss', buildSass);
    watch('dist/pages/*.pug', buildPug);
};
