$(".nav").hover(function(){  
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
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

/* var n = 0;
var depth = 100;
function ani(){
  $(".banner li").eq(n).fadeOut(0).css({"z-index": depth++});
  $(".banner li").eq(n).delay(2000).fadeIn(2000, function(){
    n++;
    if(n == 3) n = 0;
    ani();
  });
}
ani(); */

var n = 0;
$(".btn_prev").click(function(){
  if(n > 0) n--;
  ani();
});
$(".btn_next").click(function(){
  if(n < 2) n++;
  ani();
});

function ani(){
  $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
}

function popUp(){
  window.open("popUp.html", "win", "width=400, height=200, top=100, left=200, status = no, resizable = no, location = no, toolbar = no, menubar = no, scrollbars = no");
}
