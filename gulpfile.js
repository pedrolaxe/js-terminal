var gulp = require('gulp'),
    concat = require('gulp-concat');
    
var JAVASCRIPT_SRC = [
    'app/js/terminal/terminal.js',
    'app/js/terminal/**/*.js',
    'app/js/view/index.js'
];
    
gulp.task('scripts', function() {
    return gulp.src(JAVASCRIPT_SRC)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function() {
    gulp.watch(JAVASCRIPT_SRC, [ 'scripts' ]);
});

gulp.task('production', [ 'scripts', 'watch' ]);