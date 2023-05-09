const { src, dest } = require('gulp');
const { _src, _dist } = require('../gulp.config')();

// TODO: Доопрацювати
const favicons = () => {
  // return src(_src.favicon).pipe(dest(_dist.favicon));
};

module.exports = favicons;
