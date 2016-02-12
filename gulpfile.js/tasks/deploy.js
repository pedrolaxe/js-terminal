var packageConfig = require('../../package.json'),
    config = require('../config'),
    gulp = require('gulp'),
    path = require('path'),
    os = require('os'),
    ghPages = require('gulp-gh-pages'),
    open = require('open');

var settings = {
    url: packageConfig.homepage,
    src: path.join(config.root.dest, '/**/*'),
    ghPages: {
        cacheDir: path.join(os.tmpdir(), packageConfig.name)
    }
};

gulp.task('deploy', [ 'production' ], function() {
    return gulp.src(settings.src)
        .pipe(ghPages(settings.ghPages))
        .on('end', function() {
            open(settings.url);
        });
});