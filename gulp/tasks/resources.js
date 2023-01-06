const { src, dest } = require('gulp');
const { _src, _build } = require('../gulp.config')();

const resources = () => {
  return src(..._src.resources).pipe(dest(_build.root));
};

module.exports = resources;
