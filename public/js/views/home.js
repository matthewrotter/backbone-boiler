define([
  'jquery',
  'use!backbone',
  'tpl!templates/home.tpl'
], function($, Backbone, tmpl){
// console.log(tmpl);
  var home = Backbone.View.extend({
    tagName: 'div',
    render: function() {
      $(this.el).html(tmpl({name: 'Skipper'}));

      return this; // for chaining, which is fine!
    }
  });
  return new home;
});
