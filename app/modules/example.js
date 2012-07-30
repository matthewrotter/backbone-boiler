define([
  "app",
  "jquery",
  "lodash",
  "backbone",

  "text!templates/example.html"
],

function(app, $, _, Backbone, tmpl) {

  var Example = app.module();

  // set shit up yo
  Example.initialize = function() {
    var main = new Example.Views.Main();
    $('#main').html(main.render().el);
  };

  Example.Views.Main = Backbone.View.extend({
    tagName: 'div',

    template: _.template(tmpl),

    initialize: function() {
      // this.model.on('change', this.render, this);
    },

    render: function() {
      // this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template());
      return this;
    }
  });

  return Example;

});
