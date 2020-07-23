const withImages = require("next-images");
const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withFonts(
    withImages({
      webpack(config) {
        // For absolute import
        config.resolve.modules.push(__dirname);
        return config;
      },
    })
  )
);
