// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home',
  'utils'
], function($, _, Backbone, homeView, Utils){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page 
      $('#page').html(homeView.render().el);
      Utils.setUpFileDrop();
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
