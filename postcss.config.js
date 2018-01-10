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
                     woff: '../fonts/Lato/Lato-Light.woff'
                  }
               },
               400: {
                  url: {
                     woff2: '../fonts/Lato/Lato-Regular.woff2',
                     woff: '../fonts/Lato/Lato-Regular.woff'
                  }
               },
               500: {
                 url: {
                    woff2: '../fonts/Lato/Lato-Medium.woff2',
                    woff: '../fonts/Lato/Lato-Medium.woff'
                 }
               }
            },
            italic: {
               300: {
                  url: {
                    woff2: '../fonts/Lato/Lato-LightItalic.woff2',
                    woff: '../fonts/Lato/Lato-LightItalic.woff',
                  }
               },
               500: {
                  url: {
                    woff2: '../fonts/Lato/Lato-MediumItalic.woff2',
                    woff: '../fonts/Lato/Lato-MediumItalic.woff',
                  }
             }
            }
         }
      }
   },
    formats: 'woff2 woff'
  }),
];

if (global.production) {
  plugins.push(
    require("cssm-qpacker")()
  );
}

module.exports = {
  plugins: plugins
};
