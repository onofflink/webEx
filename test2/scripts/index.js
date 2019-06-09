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