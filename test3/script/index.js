$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
$(".btn_prev").click(function(){
     if(n > 0) {
          n--;
          ani();
     }
});

$(".btn_next").click(function(){
     if(n < 3) {
          n++;
          ani();
     }
});

function ani() {
     $(".banner > ul").stop().animate({"left": (-n*1000+"px")}, 2000);
}