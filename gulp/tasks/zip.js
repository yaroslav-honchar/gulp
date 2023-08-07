const { src, dest, task } = require("gulp")
const del = require("del")
const path = require("path")
const rootFolder = path.basename(path.resolve())
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const zipGulp = require("gulp-zip")

const zip = () => {
  del.sync([`./build/*.zip`])

  src("./build/**/*.*")
    .pipe(
      plumber(
        notify.onError({
          title: "ZIP",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(zipGulp(`${rootFolder}-build.zip`))
    .pipe(dest("./build"))
  return src("./build/**/*.*")
    .pipe(
      plumber(
        notify.onError({
          title: "ZIP",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(zip(`${rootFolder}-src.zip`))
    .pipe(dest("./build"))
}

module.exports = () => {
  task("zip", zip)
}
