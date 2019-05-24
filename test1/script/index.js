$("#nav").hover(function(){
  $("ul", $(this)).stop().slideDown();

}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 1000, function(){
  n++;
  if(n == 4) {
    n = 0;
  $(this).css("left", "0px");
  }

  ani();
});
})();