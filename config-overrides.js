const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@nav-bar-subtle-bg': '#1f2530',
        '@nav-bar-subtle-font-color': '#EEEEEE',
        '@nav-bar-subtle-hover-bg': '#2f3641',
        '@nav-bar-subtle-active-bg': '#2f3641',
        '@nav-bar-subtle-hover-font-color': '#DDDDDD',
        '@primary-bg-color':'#1f2530',
        '@drawer-content-bg':'#1f2530',
        '@text-color':'#EEEEEE',
        '@panel-heading-color': '#EEEEEE',
        '@btn-subtle-color': '#EEEEEE',
        '@btn-subtle-hover-color': '#0c0310',
        '@sidenav-default-bg': 'transparent',
        '@sidenav-default-hover-bg': 'transaprent',
        '@nav-item-font-default-color': '#EEEEEE',
        '@nav-item-click-bg': '#0E1420'

      }
    }
  })
);
