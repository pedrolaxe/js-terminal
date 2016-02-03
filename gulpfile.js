var gulp = require('gulp'),
    concat = require('gulp-concat');
    
var JAVASCRIPT_SRC = [
        'app/js/terminal/commandDecorator.js',
        'app/js/terminal/commandRepository.js',
        'app/js/terminal/commands/*.js',
        'app/js/terminal/terminal.js',
        'app/js/terminal/terminalFactory.js',
        'app/js/view/index.js'
    ];
    
gulp.task('scripts', function()
{
    return gulp.src(JAVASCRIPT_SRC)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function()
{
    gulp.watch(JAVASCRIPT_SRC, [ 'scripts' ]);
});

gulp.task('production', [ 'scripts', 'watch' ]);