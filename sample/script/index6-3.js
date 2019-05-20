$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
var depth = 100;

(function ani(){
  $(".banner > ul").delay(2000).fadeIn(0);
  ani();
})();