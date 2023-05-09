const { watch, series } = require('gulp');
const browserSync = require('browser-sync');
const { _src, _dist } = require('../gulp.config')();

const watchHandle = () => {
  browserSync.init({
    server: {
      baseDir: `${_dist.root}`,
    },
    port: 3010,
  });

  watch(`${_src.root}/scss/**/*.scss`, series('styles'));
  watch(_src.jsDir, series('scripts'));
  watch(`${_src.root}/views/**/*.twig`, series('html'));
  watch(`${_src.root}/json/**/*.json`, series('html'));
  watch(_src.resources, series('resources'));
  watch(_src.images, series('images'));
  watch(_src.svg, series('svg'));
  watch(_src.icons, series('svg'));
};

// task('watchHandle', watchHandle);
module.exports = watchHandle;
