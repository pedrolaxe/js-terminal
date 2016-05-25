var config = require('../config'),
  gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.scripts.src, ['scripts']);
});
