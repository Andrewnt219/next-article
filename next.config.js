const withImages = require("next-images");
const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages(
  withBundleAnalyzer(
    withFonts(
      withImages({
        webpack(config, { dev }) {
          // For absolute import
          config.resolve.modules.push(__dirname);

          // for dev liniting in terminal
          if (dev) {
            config.module.rules.push({
              test: /\.(j|t)s?$/,
              exclude: /node_modules/,
              loader: "eslint-loader",
            });
          }

          return config;
        },
      })
    )
  )
);
