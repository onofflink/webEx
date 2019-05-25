$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul > li").delay(2000).animate({"margin-left":"-=960px"}, 2000, function(){
    n++;
    if(n = 5) {
     $(".banner > ul > li").css("margin-left", "0px");
    }
    ani();
  });  
})();