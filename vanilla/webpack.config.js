const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "outfit";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "vanilla",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // Use require.resolve to ensure the correct loader is used
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "postcss-loader",
          ],
        },
      ],
    },
  })
};
