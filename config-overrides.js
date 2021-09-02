const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@nav-bar-subtle-bg': '#0a1121',
        '@nav-bar-subtle-font-color': '#EEEEEE',
        '@nav-bar-subtle-hover-bg': '#1b2232',
        '@nav-bar-subtle-hover-font-color': '#DDDDDD',
        '@primary-bg-color':'#0a1121',
        '@drawer-content-bg':'#0a1121',
        '@text-color':'#EEEEEE',
        '@panel-heading-color': '#EEEEEE',
        '@btn-subtle-color': '#EEEEEE',
        '@btn-subtle-hover-color': '#0a1121',
        '@sidenav-default-bg': 'transparent',
        '@sidenav-default-hover-bg': 'transaprent',
        '@nav-item-font-default-color': '#EEEEEE',
        '@nav-item-click-bg': '#0E1420'

      }
    }
  })
);
