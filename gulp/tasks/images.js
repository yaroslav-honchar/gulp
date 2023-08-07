const { src, dest, task } = require("gulp")
const ifEnv = require("gulp-if-env")
const image = require("gulp-imagemin")
const avif = require("gulp-avif")
const webp = require("gulp-webp")

const images = () => {
  src(`./src/img/**/*.${images_ext}`)
    .pipe(webp({ quality: 90 }))
    .pipe(dest("./build/img"))

  src(`./src/img/**/*.${images_ext}`)
    .pipe(avif())
    .pipe(dest("./build/img"))

  return src(`./src/img/**/*.${images_ext}`)
    .pipe(
      ifEnv(
        "production",
        image([
          image.mozjpeg({
            quality: 80,
            progressive: true
          }),
          image.optipng({
            optimizationLevel: 2
          })
        ])
      )
    )
    .pipe(dest("./build/img"))
}

module.exports = () => {
  task("images", images)
}
