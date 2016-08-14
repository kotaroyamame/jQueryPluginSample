;
(function($){
  $.fn.textAlign = function(option){
　　var setting = {align:"center"};
    $.extend(setting,option || {});
    return this.css("text-align",setting.align);
  }
})(jQuery);