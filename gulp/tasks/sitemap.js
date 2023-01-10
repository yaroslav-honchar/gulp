const { src, dest } = require('gulp');
const sitemap = require('gulp-sitemap');
const { sitemapConfigs, _dist } = require('../gulp.config')();

const sitemapWrite = () => {
  return src(`${_dist.root}/*.html`, {
    read: false,
  })
    .pipe(sitemap(sitemapConfigs))
    .pipe(dest('./build'));
};

module.exports = sitemapWrite;
