$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".banner > ul").delay(2000).animate({"left": "-=1000"}, 2000, function(){
          n++;
          if(n == 2){
               n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function winOpen() {
     window.open("win.html", "win", "width= 300, height=200, top=200, left=200");
}