$(".nav").hover(function(){
  $("ul", $(this)).stop().slidDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
})