const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages({
    webpack(config) {
      // For absolute import
      config.resolve.modules.push(__dirname);
      return config;
    },
  })
);
