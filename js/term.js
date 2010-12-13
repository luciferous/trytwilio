(function($){
  var $stdout = $("<code>");
  var methods = {
    init: function(options) {
      var settings = {
        class: "jterm",
      };
      if (options) {
        $.extend(settings, options);
      }
      $("<pre>")
        .addClass(settings["class"])
        .append($stdout)
        .replaceAll(this.children());
      return this;
    },
    print: function(str) {
      $stdout.append(document.createTextNode(str));
      return this;
    },
  }

  $.fn.jterm = function(method) {
    if (methods[method]) {
      return methods[method].apply(
        this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method == 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.term');
    }
  };
})(jQuery);
