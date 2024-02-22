const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-pdf/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
          {
            test: /pdfjs-dist/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
        ],
      },
    });
  }
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: "empty",
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util"),
        buffer: require.resolve("buffer"),
        assert: require.resolve("assert"),
      },
    },
    externals: [
      {
        canvas: "canvas",
      },
    ],
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  });
};
