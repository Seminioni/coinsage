let plugins = [
  require("postcss-flexbugs-fixes")({}),
  require("postcss-normalize")({
    allowDuplicates: true
  }),
  require("postcss-cssnext")({}),
  require('postcss-font-magician')({
    custom: {
      'Lato': {
         variants: {
            normal: {
               300: {
                  url: {
                     woff2: '../fonts/Lato/Lato-Light.woff2',
                     woff: '../fonts/Lato/Lato-Light.woff',
                     ttf: '../fonts/Lato/Lato-Light.ttf'
                  }
               },
               400: {
                  url: {
                     woff2: '../fonts/Lato/Lato-Regular.woff2',
                     woff: '../fonts/Lato/Lato-Regular.woff',
                     ttf: '../fonts/Lato/Lato-Regular.ttf'
                  }
               },
               500: {
                 url: {
                    woff2: '../fonts/Lato/Lato-Medium.woff2',
                    woff: '../fonts/Lato/Lato-Medium.woff',
                    ttf: '../fonts/Lato/Lato-Medium.ttf'
                 }
               }
            },
            italic: {
               300: {
                  url: {
                    woff2: '../fonts/Lato/Lato-LightItalic.woff2',
                    woff: '../fonts/Lato/Lato-LightItalic.woff',
                    ttf: '../fonts/Lato/Lato-LightItalic.ttf'
                  }
               },
               500: {
                  url: {
                    woff2: '../fonts/Lato/Lato-MediumItalic.woff2',
                    woff: '../fonts/Lato/Lato-MediumItalic.woff',
                    ttf: '../fonts/Lato/Lato-MediumItalic.ttf'
                  }
             }
            }
         }
      }
   },
    formats: 'woff2 woff'
  })
];

if (global.production) {
  plugins.push(
    require("css-mqpacker")()
  );
}

module.exports = {
  plugins: plugins
};
