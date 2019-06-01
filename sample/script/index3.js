
var n = 0;
var depth = 2;
$(".nav").hover(function(){
	$("ul", $(this)).stop().slideDown();
   }, function(){
	$("ul", $(this)).stop().slideUp();
   });


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