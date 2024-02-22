exports.onCreateWebpackConfig = ({ actions }) => {
  if (typeof TextEncoder === "undefined") {
    const util = require("util");
    global.TextEncoder = util.TextEncoder;
    global.TextDecoder = util.TextDecoder;
  }
  actions.setWebpackConfig({
    externals: {
      canvas: "commonjs canvas", // This line tells webpack to treat canvas as an external dependency
    },
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        util: require.resolve("util/"),
        stream: require.resolve("stream-browserify"),
        url: false,
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        zlib: false,
        fs: false,
        path: false,
      },
    },
  });
};
