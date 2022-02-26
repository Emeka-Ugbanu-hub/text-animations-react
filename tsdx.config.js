const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
        ],
        inject: true,
        extract:false,
      })
    );
    return config;
  },
};