/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
        css: {},
        // postcss: {
        //     plugins: [
        //         require('postcss-px2rem')({
        //             // 以设计稿750为例， 750 / 10 = 75
        //             remUnit: 75
        //         }),
        //     ]
        // }
    }
},
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  }
};