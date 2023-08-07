const { task } = require("gulp")
const del = require("del")

const clean = () => del(["./build"])

module.exports = () => {
  task("clean", clean)
}
