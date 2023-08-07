const ifEnv = require('gulp-if-env');

module.exports = {
  prod: ifEnv('production'),
  images_ext: "{jpg,jpeg,png}"
}
