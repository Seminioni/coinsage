if (!TASK_CONFIG.images) return;

var browserSync = require("browser-sync");
var changed = require("gulp-changed");
var gulp = require("gulp");
var gulpif = require("gulp-if");
var path = require("path");
var imagemin = require("gulp-imagemin");

var imagesTask = function() {
  var paths = {
    src: path.resolve(
      process.env.PWD,
      PATH_CONFIG.src,
      PATH_CONFIG.images.src,
      "{content,general}/*.{" + TASK_CONFIG.images.extensions + "}"
    ),
    dest: path.resolve(
      process.env.PWD,
      PATH_CONFIG.dest,
      PATH_CONFIG.images.dest
    )
  };

  return gulp
    .src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(
      gulpif(
        global.production,
        imagemin([
          imagemin.gifsicle({
            interlaced: true,
            optimizationLevel: 3
          }),
          require("imagemin-jpeg-recompress")({
            progressive: true,
            max: 80,
            min: 70
          }),
          require("imagemin-pngquant")({ quality: "75-85" }),
          imagemin.svgo({
            plugins: [{ removeViewBox: false }]
          })
        ])
      )
    )
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task("images", imagesTask);
module.exports = imagesTask;
