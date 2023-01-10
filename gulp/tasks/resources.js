const { src, dest } = require('gulp');
const { _src, _dist } = require('../gulp.config')();

const resources = () => {
  return src(..._src.resources).pipe(dest(_dist.root));
};

module.exports = resources;
