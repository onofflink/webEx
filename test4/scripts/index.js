$(".nav").hover(function(){  
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
<<<<<<< HEAD
})
=======
});

/* var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
    n++;
    if(n == 3){
      n = 0;
      $(this).css("left","0px");
    }
    ani();
  })
})(); */

var n = 0;
var depth = 100;
function ani(){
  $(".banner li").eq(n).fadeOut(0).css({"z-index": depth++});
  $(".banner li").eq(n).delay(2000).fadeIn(2000, function(){
    n++;
    if(n == 3) n = 0;
    ani();
  });
}
ani();

function popUp(){
  window.open("popUp.html", "win", "width=400, height=200, top=100, left=200");
}
>>>>>>> cb5bf89cfcbc1a9b92f21f3b08b963681d3c0d9a
