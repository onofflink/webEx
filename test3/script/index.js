$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

n = 0;
$(".btn_prev").click(function(){
     if(n > 0) {
          n--;
          ani();
     }
});

$(".btn_next").click(function(){
     if(n < 2) {
          n++;
          ani();
     }
})

function ani() {
  $(".banner > ul").stop().animate({"left": (-n*1000+"px")}, 2000);
}

function popOpen(){
     window.open("win.html", "win", "width=300, height=200, top=100, left=200");
}

$("#modal").click(function(){
     $(".modal-img").addClass("active");
});
$("#btn-close").click(function(){
     $(".modal-img").removeClass("active");
})