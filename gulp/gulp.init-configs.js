const fs = require("fs")
const path = require("path")
const gulpConfig = require("./gulp.config")

const initGulpConfigs = (NODE_GLOBAL) => {
  const tasks = fs.readdirSync(path.join(__dirname, "tasks"))

  for (const [key, value] of Object.entries(gulpConfig)) {
    NODE_GLOBAL[key] = value
  }

  tasks.forEach((taskPath) => {
    require(path.join(__dirname, "tasks", taskPath))()
  })
}

module.exports = initGulpConfigs