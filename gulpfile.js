var gulp = require('gulp'),
    concat = require('gulp-concat');
    
var JAVASCRIPT_SRC = [
        'js/commandDecorator.js',
        'js/commandRepository.js',
        'js/commands/*.js',
        'js/terminal.js',
        'js/terminalFactory.js',
        'js/main.js'
    ];
    
gulp.task('scripts', function()
{
    return gulp.src(JAVASCRIPT_SRC)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function()
{
    gulp.watch(JAVASCRIPT_SRC, [ 'scripts' ]);
});

gulp.task('production', [ 'scripts', 'watch' ]);