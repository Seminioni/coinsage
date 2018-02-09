module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : false,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  stylesheets: {
    sass: {
      includePaths: [
        "./node_modules/choices.js/assets/styles/scss/",
      ]
    },
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: false
  },

}
