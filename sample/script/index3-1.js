$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

/* $(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
  $("ul > div > span", $(this)).empty().replaceWith("`<span>-</span>`");
}, function(){
  $("ul", $(this)).stop().slideUp();
});
 */
/* $(".nav > div").click(function(){
  $(".nav > ul").stop().empty().replaceWith();
}, function(){

}); */
var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 2000, function(){
    n++;
    if(n == 5){
      n = 0;
      $(this).animate({"left": "0px"}, 2000);
    }
    ani();
  });
})();