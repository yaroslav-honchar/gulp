const del = require('del');
const { _dist } = require('../gulp.config')();

const clean = () => {
  return del([_dist.root]);
};

module.exports = clean;
