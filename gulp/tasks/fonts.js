const { src, dest, task } = require("gulp")
const ttf2svg = require("gulp-ttf-svg")
const ttf2eot = require("gulp-ttf2eot")
const ttf2woff = require("gulp-ttf2woff")
const ttf2woff2 = require("gulp-ttf2woff2")

// Variables
const fonts_src = "./src/fonts/*.ttf"
const fonts_generated_dest = "./src/fonts"

// Tasks
const fonts_copy = () => src("./src/fonts/*.*").pipe(dest("./build/fonts"))

const fonts_generate = () => src(fonts_src)
  .pipe(dest(fonts_generated_dest))
  .pipe(src(fonts_src))
  .pipe(ttf2svg())
  .pipe(dest(fonts_generated_dest))
  .pipe(src(fonts_src))
  .pipe(ttf2eot())
  .pipe(dest(fonts_generated_dest))
  .pipe(src(fonts_src))
  .pipe(ttf2woff())
  .pipe(dest(fonts_generated_dest))
  .pipe(src(fonts_src))
  .pipe(ttf2woff2())
  .pipe(dest(fonts_generated_dest))

module.exports = () => {
  task("fonts:copy", fonts_copy)
  task("fonts:generate", fonts_generate)
}
