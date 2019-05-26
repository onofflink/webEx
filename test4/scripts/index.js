$(".nav").hover(function(){  
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

/* var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
    n++;
    if(n == 3){
      n = 0;
      $(this).css("left","0px");
    }
    ani();
  })
})(); */

var n = 0;
var depth = 100;
function ani(){
  $(".banner li").eq(n).fadeOut(0).css({"z-index": depth++});
  $(".banner li").eq(n).delay(2000).fadeIn(2000, function(){
    n++;
    if(n == 3) n = 0;
    ani();
  });
}
ani();