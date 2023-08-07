const { src, dest, task } = require("gulp")
const rev = require("gulp-rev")
const revDel = require("gulp-rev-delete-original")

const cache = () => {
  return src("./build/**/*.{css,js,svg,png,jpg,jpeg,webp,avif,ico,ttf,eot,woff,woff2}", {
    base: "./build"
  })
    .pipe(rev())
    .pipe(revDel())
    .pipe(dest("./build"))
    .pipe(rev.manifest("rev.json"))
    .pipe(dest("./build"))
}

module.exports = () => task("cache", cache)

