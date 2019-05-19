$(".nav").hover(function(){
  $("ul > li", $(this)).stop.slideDown();
}, function(){
  $("ul > li", $(this)).stop.slideUp();
});