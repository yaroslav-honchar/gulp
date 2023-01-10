const { src, dest } = require('gulp');
const robots = require('gulp-robots');
const del = require('del');
const { _dist, robotsConfigs } = require('../gulp.config')();

const robotsWrite = () => {
  del(`${_dist.root}/robots.txt`);
  return src(`${_dist.root}/index.html`)
    .pipe(robots(robotsConfigs))
    .pipe(dest(`${_dist.root}`));
};

module.exports = robotsWrite;
