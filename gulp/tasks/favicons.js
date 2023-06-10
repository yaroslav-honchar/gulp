const { src, dest } = require('gulp');
const { _src, _dist } = require('../gulp.config')();
const ico = require('gulp-to-ico');

const favicon = () => {
  return src(_src.favicon)
    .pipe(dest(_dist.root + '/favicons'))
    .pipe(ico('favicon.ico'))
    .pipe(dest(_dist.root + '/favicons'));
};

module.exports = favicon;
