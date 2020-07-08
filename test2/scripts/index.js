$(".nav").hover(function(){
  $("ul.submenu", (this)).stop().slideDown();
}, function(){
  $("ul.submenu", (this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".slide").delay(2000).animate({"left": "-=960px"}, 500, function(){
  n++;
  if(n == 4) {
    n = 0;
    $(this).animate({"left": "0px"}, 3000);
  }  
  ani();
});
})();

(function($, document) {
    
  // get tallest tab__content element
  let height = -1;

$('.tab__content').each(function() {
  height = height > $(this).outerHeight() ? height : $(this).outerHeight();
     $(this).css('position', 'absolute');
});
  
  // set height of tabs + top offset
$('[data-tabs]').css('min-height', height + 40 + 'px');

}(jQuery, document));

(function($) {

	var tabs =  $(".tabs li a");
  
	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    $("#content").find('p').hide();
    $(content).fadeIn(200);
	});

})(jQuery);