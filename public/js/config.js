// Configuration
require.config({
  deps: ["main"], // start here

  // !! remove prior to production !!
  urlArgs: "bust=" +  (new Date()).getTime(),

  paths: {
    libs: "libs",
    plugins: "plugins",

    // Libraries
    jquery: 'libs/jquery-min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',

    // Shim Plugin
    use: "plugins/use-min",

    tpl: 'libs/tpl',
    templates: '../templates'
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    }
  }
});
