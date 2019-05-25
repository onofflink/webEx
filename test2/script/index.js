$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"margin-left":"-=960px"}, 2000, function(){
    n++;
    if(n == 5) {
      n = 0;
     $(".banner > ul").css("margin-left", "0px");
    }
    ani();
  });  
})();

function popUp() {
  window.open("win.html", "win", "width=300, height=150, top=100, left=200");
}