$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani() {
  $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 5000, function() {
    /* if(n = n==ul?0:n+=1)  */n++;
    if(n == 5) {
      n = 0;
      $(this).css({"left": "0px"});
      }
            ani();
            /* setInterval(function(){ani();}, 2000) */
      });
})();