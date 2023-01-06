const { series, parallel, task } = require('gulp');

task('svg', require('./gulp/tasks/svg'));
task('fonts', require('./gulp/tasks/fonts'));
task('html', require('./gulp/tasks/html'));
task('styles', require('./gulp/tasks/styles'));
task('scripts', require('./gulp/tasks/scripts'));
task('resources', require('./gulp/tasks/resources'));
task('images', require('./gulp/tasks/images'));
task('writeCache', require('./gulp/tasks/cache'));
task('rewrite', require('./gulp/tasks/rewrite'));
task('zipFiles', require('./gulp/tasks/zip'));
task('watch', require('./gulp/tasks/watch'));
task('clean', require('./gulp/tasks/clean'));
task('sitemapWrite', require('./gulp/tasks/sitemap'));
task('robotsWrite', require('./gulp/tasks/robots'));

task(
  'build',
  series(
    'clean',
    parallel('svg', 'fonts', 'html', 'scripts', 'styles', 'resources', 'images')
  )
);
// task('prod', series('build'));
task('prod', series('build', 'sitemapWrite', 'robotsWrite', 'zipFiles'));
task('default', series('build', 'watch'));
task('cache', series('writeCache', 'rewrite'));
