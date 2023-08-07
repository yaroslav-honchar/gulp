const { series, parallel, task } = require("gulp")
const initGulpConfigs = require("./gulp/gulp.init-configs")

initGulpConfigs(global)

task(
  "build",
  series(
    "clean",
    parallel(
      "twig",
      "styles",
      "js",
      "images",
      "favicon",
      "fonts:copy",
      "svg:icons",
      "svg:pictures"
    )
  )
)

task("default", series("build", "watch"))
task("hash", series("cache", "rewrite"))
