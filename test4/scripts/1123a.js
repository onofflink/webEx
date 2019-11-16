

/* slide */
var n = 0;
/* (function ani(){
     $(".imgs").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if(n==2) n=0;
          $(this).css("left", "0px");
     });
     ani();
})(); */

var now = 0;
var imgs = $(".imgs.img").length;

function ani() {
     $(".imgs>img").eq(0).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if(n==2) {
               n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
}