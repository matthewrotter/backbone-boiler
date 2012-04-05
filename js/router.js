// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home',
], function($, _, Backbone, homeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page 
      $('#page').html(homeView.render().el);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
