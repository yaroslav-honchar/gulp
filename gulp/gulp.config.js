const ifEnv = require('gulp-if-env');

module.exports = () => {
  // Root vars
  const source_root = './src';
  const build_root = './build';

  return {
    // Mode configs
    prod: ifEnv('production'),
    backend: ifEnv('backend'),

    // Plugins config
    sitemapConfigs: {
      siteUrl: 'https://website.com',
      priority: '1.0',
    },

    robotsConfigs: {
      useragent: '*',
      allow: [''],
      disallow: [''],
    },

    // Path vars
    _src: {
      root: source_root,
      views: `${source_root}/views/`,
      svg: `${source_root}/svg/**/*.svg`,
      icons: `${source_root}/icons/**/*.svg`,
      images: `${source_root}/img/**/*.{jpg,jpeg,png}`,
      scss: `${source_root}/scss/main.scss`,
      jsDir: `${source_root}/js/**/*.js`,
      jsIndex: `${source_root}/js/index.js`,
      fonts: `${source_root}/fonts/**/*.*`,
      resources: [`${source_root}/resources/**/*.*`],
    },

    _build: {
      root: build_root,
      svg: `${build_root}/svg`,
      icons: `${build_root}/icons`,
      images: `${build_root}/img`,
      css: `${build_root}/css`,
      fonts: `${build_root}/fonts`,
      js: `${build_root}/js`,
    },
  };
};
