const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const twig = require('gulp-twig');
const data = require('gulp-data');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const path = require('path');
const { prod, backend, _src, _dist } = require('../gulp.config')();

const htmlHandle = () => {
  const getCurrentPage = ({ path: filePath }) => {
    const fileBaseName = path.basename(filePath);
    const extNameRegExp = new RegExp(path.extname(filePath));
    const currentPage = fileBaseName.replace(extNameRegExp, '');

    return currentPage;
  };

  const throwData = (data) => {
    const currentPage = getCurrentPage(data);

    return { currentPage, prod, backend };
  };

  const functions = [
    {
      name: 'join',
      func: (array, separator) => array.join(separator),
    },
    {
      name: 'replace',
      func: (string, regExp, target, flags = []) => {
        const newRegExp = new RegExp(regExp, ...flags);
        return string.replace(newRegExp, target);
      },
    },
    {
      name: 'json',
      func: (fileName) => {
        return require(path.join(__dirname, '..', '..', 'src', 'json', `${fileName}.json`));
      },
    },
  ];

  return src([`${_src.views}/pages/*.twig`, `${_src.views}/index/*.twig`, `${_src.views}/errors/*.twig`])
    .pipe(data(throwData))
    .pipe(
      twig({ functions }),
    )
    .on(
      'error',
      notify.onError(error => {
        return {
          title: 'Twig',
          message: error,
        };
      }),
    )
    .pipe(
      htmlmin({
        collapseWhitespace: prod,
      }),
    )
    .pipe(dest(_dist.root))
    .pipe(browserSync.stream());
};

module.exports = htmlHandle;
