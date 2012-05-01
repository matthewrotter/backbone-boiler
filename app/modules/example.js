define([
  "namespace",

  // Libs
  "jquery",
  "use!backbone",

  // Modules

  // Plugins
  "text!templates/example.html"
],

function(namespace, $, Backbone, tmpl) {

  // Create a new module
  var Example = namespace.module();

  // Example extendings
  Example.Model = Backbone.Model.extend({ /* ... */ });
  Example.Collection = Backbone.Collection.extend({ /* ... */ });
  Example.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = Backbone.View.extend({

    render: function() {
      // $(this.el).html(_.template(tmpl, {}));

      var myOptions = {
        center: new google.maps.LatLng(45.523262,-122.676183),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('map_canvas'),
          myOptions);

      $.getJSON("/api.php").done(function(data) {
        $.each(data, function(idx, val) {
          var latlng = new google.maps.LatLng(val.downloaded_lat,val.downloaded_lon);
          new google.maps.Marker({
            position: latlng,
            map: map
          });
          // console.log(latlng);
        });
      });


      return this;
    }
  });

  // Required, return the module for AMD compliance
  return Example;

});
