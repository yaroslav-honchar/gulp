const { src, dest, task } = require("gulp")
const svgmin = require("gulp-svgmin")
const cheerio = require("gulp-cheerio")
const replace = require("gulp-replace")
const svgSprite = require("gulp-svg-sprite")

const svg_pictures = () => src("./src/svg/*.svg")
  .pipe(svgmin())
  .pipe(dest("./build/svg"))


const svg_icons = () => src("./src/icons/*.svg")
  .pipe(
    svgmin({
      js2svg: {
        pretty: true
      }
    })
  )
  .pipe(
    cheerio({
      run: function($) {
        $("[fill]").removeAttr("fill")
        $("[stroke]").removeAttr("stroke")
        $("[style]").removeAttr("style")
      },
      parserOptions: {
        xmlMode: !prod
      }
    })
  )
  .pipe(replace("&gt;", ">"))
  .pipe(
    svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg",
          example: !prod
        }
      }
    })
  )
  .pipe(dest("./build/icons"))

module.exports = () => {
  task("svg:pictures", svg_pictures)
  task("svg:icons", svg_icons)
}
