const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const themedefault = require('./src/config/themes/themedefault');

function override(config, env) {
  let newConfig = config;
  newConfig = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    newConfig,
  );
  newConfig = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': themedefault.palette.primary[0],
      '@border-radius-base': '2px',
      '@table-header-bg': '#fff',
      '@table-padding-vertical': '12px',
      '@switch-disabled-opacity': 0.12,
      '@border-color-base': '#eaeff9',
      '@form-item-margin-bottom': '12px',
      '@input-color': '#000',
      '@menu-item-color': '#000',
    },
    javascriptEnabled: true,
  })(newConfig, env);
  return newConfig;
}

module.exports = override;
