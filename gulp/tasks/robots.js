const { src, dest } = require('gulp');
const robots = require('gulp-robots');
const del = require('del');
const { _build, robotsConfigs } = require('../gulp.config')();

const robotsWrite = () => {
  del(`${_build.root}/robots.txt`);
  return src(`${_build.root}/index.html`)
    .pipe(robots(robotsConfigs))
    .pipe(dest(`${_build.root}`));
};

module.exports = robotsWrite;
