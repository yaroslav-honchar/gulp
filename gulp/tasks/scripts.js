const { src, dest, task } = require("gulp")
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const webpackStream = require("webpack-stream")
const browserSync = require("browser-sync")

const scripts = () => src("./src/js/index.js")
  .pipe(
    plumber(
      notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    )
  )
  .pipe(
    webpackStream(require("../../webpack.config"))
  )
  .on("error", function(err) {
    console.error("WEBPACK ERROR", err)
    this.emit("end")
  })
  .pipe(dest("./build/js"))
  .pipe(browserSync.stream())

module.exports = () => {
  task('js', scripts)
}
