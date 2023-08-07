const { src, dest, task } = require("gulp")
const ico = require("gulp-to-ico")

const favicon = () => src("./src/favicon/favicon.png")
  .pipe(dest("./build/favicons"))
  .pipe(ico("favicon.ico"))
  .pipe(dest("./build/favicons"))

module.exports = () => {
  task("favicon", favicon)
}
