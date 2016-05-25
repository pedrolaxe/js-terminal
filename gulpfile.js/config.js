module.exports = {
  root: {
    src: './src',
    dest: './dist'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist',
    htmlmin: {
      collapseWhitespace: true
    }
  },
  css: {
    src: 'src/css/*.css',
    dest: 'dist/css'
  },
  scripts: {
    src: [
      'babel-polyfill',
      'src/js/underscore/**/*.js',
      'src/js/terminal/terminal.js',
      'src/js/terminal/**/*.js',
      'src/js/view/index.js'
    ],
    dest: 'dist/js'
  },
  browserSync: {
    server: {
      baseDir: 'dist'
    }
  }
};
