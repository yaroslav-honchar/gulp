const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync');
const { _src, prod, backend, _build } = require('../gulp.config')();

const scripts = () => {
  return src(_src.jsIndex)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      webpackStream({
        mode: prod ? 'production' : 'development',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: 'defaults',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        devtool: !prod && !backend ? 'source-map' : false,
      })
    )
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest(_build.js))
    .pipe(browserSync.stream());
};

module.exports = scripts;
