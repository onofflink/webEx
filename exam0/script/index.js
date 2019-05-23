$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani() {
  $(".banner li").delay(400).animate({"left":"-=1000px"}, 2000, function() {
    n++;
    if(n == 5) {
      n = 0;
      $(this).css({"left": "0px"});
      }
            ani();            
      });
})();