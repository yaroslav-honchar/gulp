module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require('postcss-combine-media-query'),
    require('postcss-sort-media-queries'),
    require('postcss-short'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{scss,css,js}', './build/**/*.html'],
      fontFace: true,
      keyframes: true,
      variables: true,
    })
  ]
};
