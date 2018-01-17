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
                     woff2: '../fonts/Lato/subset-Lato-Light.woff2',
                     woff: '../fonts/Lato/subset-Lato-Light.woff'
                  }
               },
               400: {
                  url: {
                     woff2: '../fonts/Lato/subset-Lato-Regular.woff2',
                     woff: '../fonts/Lato/subset-Lato-Regular.woff'
                  }
               },
               500: {
                 url: {
                    woff2: '../fonts/Lato/subset-Lato-Medium.woff2',
                    woff: '../fonts/Lato/subset-Lato-Medium.woff'
                 }
               }
            },
            italic: {
               300: {
                  url: {
                    woff2: '../fonts/Lato/subset-Lato-LightItalic.woff2',
                    woff: '../fonts/Lato/subset-Lato-LightItalic.woff',
                  }
               },
               500: {
                  url: {
                    woff2: '../fonts/Lato/subset-Lato-MediumItalic.woff2',
                    woff: '../fonts/Lato/subset-Lato-MediumItalic.woff',
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
