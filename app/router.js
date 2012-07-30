define([
  // Application.
  "app",

  "modules/example"
],

function(app, Example) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      Example.initialize();
    }
  });

  return Router;

});
