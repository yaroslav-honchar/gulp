const { src, dest, task } = require("gulp")
const htmlmin = require("gulp-htmlmin")
const gulpTwig = require("gulp-twig")
const data = require("gulp-data")
const notify = require("gulp-notify")
const browserSync = require("browser-sync")
const path = require("path")
const fs = require("fs")
const { prod, backend } = require("../gulp.config")

// Methods
const getCurrentPage = ({ path: filePath }) => {
  const fileBaseName = path.basename(filePath)
  const extNameRegExp = new RegExp(path.extname(filePath))

  return fileBaseName.replace(extNameRegExp, "")
}

const throwData = (data) => {
  const currentPage = getCurrentPage(data)

  return { currentPage, prod, backend }
}

const functions = [
  {
    name: "json",
    func: function(fileName) {
      return JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "src", "json", `${fileName}.json`), "utf8"))
    }
  },
  {
    name: "toJson",
    func: function(data) {
      return JSON.stringify(data)
    }
  },
  {
    name: "toLowerCase",
    func: function(string) {
      if (typeof string === "string") {
        return string.toLowerCase()
      } else {
        console.log(`Value '${string} has to be string type, not ${typeof string}'`)
      }
    }
  },
  {
    name: "replace",
    func: function(string, regExp, newValue = "", RegExpFlags = []) {
      const newRegExp = new RegExp(regExp, ...RegExpFlags)

      return string.replace(newRegExp, newValue)
    }
  },
  {
    name: "join",
    func: function(arr, sep = "") {
      return arr.join(sep)
    }
  }
]

const twig = () => src([
  "./src/views/pages/*.twig",
  "./src/views/home/*.twig",
  "./src/views/errors/*.twig"
])
  .pipe(data(throwData))
  .pipe(
    gulpTwig({ base: path.join(__dirname, "..", "..", "src", "views"), functions })
  )
  .on(
    "error",
    notify.onError(error => {
      return {
        title: "Twig",
        message: error
      }
    })
  )
  .pipe(
    htmlmin({
      collapseWhitespace: prod
    })
  )
  .pipe(dest("./build"))
  .pipe(browserSync.stream())

module.exports = () => {
  task("twig", twig)
}
