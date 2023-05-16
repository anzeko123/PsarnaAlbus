module.exports = {
    webpack: (config, env) => {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
  
      config.output.filename = "src/js/index.js";
  
      config.plugins[5].options.filename = "src/css/index.css";
      config.plugins[5].options.moduleFilename = () => "static/css/main.css";
      return config;
    },
  };