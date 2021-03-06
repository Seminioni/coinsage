if (!TASK_CONFIG.pngSprite) return;

const browserSync = require("browser-sync");
const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const path = require("path");
const plumber = require("gulp-plumber");
const errorHandler = require("../lib/handleErrors");

const pngSpriteTask = function() {
  const settings = {
    src: path.resolve(
      process.env.PWD,
      PATH_CONFIG.src,
      PATH_CONFIG.icons.png.src
    ),
    dest: path.resolve(
      process.env.PWD,
      PATH_CONFIG.dest,
      PATH_CONFIG.icons.png.dest
    )
  };

  const spriteData =
    gulp.src(path.resolve(settings.src, '*.png'))
    .pipe(plumber(errorHandler))
    .pipe(spritesmith({
    retinaSrcFilter: path.resolve(settings.src, '*@2x.png'),
    imgName: '../images/sprite.png',
    retinaImgName: '../images/sprite@2x.png',
    cssName: '_sprite.scss'
  }));

  spriteData.img.pipe(gulp.dest(settings.dest));
  spriteData.css.pipe(
    gulp.dest(
      path.resolve(
        process.env.PWD,
        PATH_CONFIG.src,
        PATH_CONFIG.stylesheets.src,
        'utils/sprite'
      )
    )
  );
};

gulp.task("pngSprite", pngSpriteTask);
module.exports = pngSpriteTask;
