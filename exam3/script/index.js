$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;

$(".btn-prev").click(function(){
     if(n > 0) n--;
     ani();
});
$(".btn-next").click(function(){
     if(n < 2) n++;
     ani();
});

function ani(){
$(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
}

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}
function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}

function winOpen(){
     window.open("win.html", "win", "width=400", "height=400", "top=300", "left=50%", "scrollbars=no", "resize=no", "status=no", "location=no");
}