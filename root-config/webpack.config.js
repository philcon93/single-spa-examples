const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const OUTPUT_DATA = [
  {
    orgName: "single-spa",
    projectName: "root-config",
    template: "src/index.ejs",
  },
  {
    orgName: "single-spa",
    projectName: "root-config-layout",
    template: "src/index-layout.ejs",
  }
];

const config = OUTPUT_DATA.map(({ orgName, projectName, template }) => (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(
    defaultConfig,
    {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template,
          templateParameters: {
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
            orgName,
          },
        }),
      ],
    },
    {
      // modify the webpack config however you'd like to by adding to this object
    }
  );
});

module.exports = config;