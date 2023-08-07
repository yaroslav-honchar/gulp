const { watch, series, task } = require("gulp")
const browserSync = require("browser-sync")

const watchHandle = () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    port: 3010
  })

  watch("./src/scss/**/*.scss", series("styles"))
  watch("./src/js/**/*.js", series("js"))
  watch("./src/views/**/*.twig", series("twig"))
  watch("./src/json/**/*.json", series("twig"))
  watch("./src/img/**.*", series("images"))
  watch("./src/svg/**.svg", series("svg:pictures"))
  watch("./src/icons/**.svg", series("svg:icons"))
}

module.exports = () => {
  task("watch", watchHandle)
}
