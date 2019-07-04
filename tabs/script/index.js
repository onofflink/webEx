
(function($, document){
     let height = -1;
     $(".tab__content").each(function(){
          height = height > $(this).outerHeight() ? height: $(this).outerHeight();

          $(this).css("position", "absolute");
     });
     $("[data-tabs]").css("min-height", height+40+"px");
})(jQuery, document);