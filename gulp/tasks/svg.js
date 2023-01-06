const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');
const { _src, _build, prod } = require('../gulp.config')();

const svg = () => {
  src(_src.svg).pipe(svgmin()).pipe(dest(_build.svg));
  return src(_src.icons)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: !prod,
        },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
            example: !prod,
          },
        },
      })
    )
    .pipe(dest(_build.icons));
};

module.exports = svg;
