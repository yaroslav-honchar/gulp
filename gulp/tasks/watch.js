const { watch, series } = require('gulp');
const browserSync = require('browser-sync');
const { _src, _build } = require('../gulp.config')();

const watchHandle = () => {
  browserSync.init({
    server: {
      baseDir: `${_build.root}`,
    },
    port: 3010,
  });

  watch(`${_src}/scss/**/*.scss`, series('styles'));
  watch(_src.jsDir, series('scripts'));
  watch(`${_src}/views/**/*.html`, series('html'));
  watch(_src.resources, series('resources'));
  watch(_src.images, series('images'));
  watch(_src.svg, series('svg'));
  watch(_src.icons, series('svg'));
};

// task('watchHandle', watchHandle);
module.exports = watchHandle;
