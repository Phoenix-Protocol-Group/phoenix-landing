exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: {
      canvas: "commonjs canvas", // This line tells webpack to treat canvas as an external dependency
    },
  });
};
