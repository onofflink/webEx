$("#nav").hover(function(){
  $("ul", $(this)).stop().slideDown();

}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=960px"}, 1000, function(){
  n++;
  if(n == 3) {
    n = 0;
  $(this).animate({"left": "0px"}, 2000);
  }

  ani();
});
})();

$(".partne img").click(function(){
  winOpen();
});
function winOpen(){
  window.open("win.html", "win", "width=200px, height=150px, top=100, left=100");
}