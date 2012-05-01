this['JST'] = this['JST'] || {};

this['JST']['app/templates/example.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="map_canvas"></div>\ninside the template\n');}return __p.join('');
}(data, _)};