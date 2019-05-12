$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

/* $(".nav > div").click(function(){
  $(".nav > ul").stop().css({"display":"block"});
}, function(){

}); */