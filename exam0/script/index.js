$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani() {
  $(".banner li").delay(1000).animate({"left":"-=1000px"}, 2000, function() {
    n++;
    if(n == 5) {
      n = 0;
      $(this).css({"left": "0px"});
      }
            ani();            
      });
})();

$(".a > button").hover(function(){
  $(this).css("background", "#eee");
}, function() {
  $(this).css("background", "#fff")
});

$(".partner img").click(function(){
  $("#modal").addClass("active");
});

$("#modal button").click(function(){
  $("#modal").removeClass("active");
});