const del = require('del');
const { _build } = require('../gulp.config')();

const clean = () => {
  return del([_build.root]);
};

module.exports = clean;
