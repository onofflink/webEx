$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
$(".btn-next").click(function(){
     if (n < 2) n++;
     ani();
});

$(".btn-prev").click(function(){
     if (n > 0) n--;
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
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}

function winOpen(){
     window.open("contact.html", "contact", "width=500, height=500, top=100, left=100, toolbar=no, scrollbars=no, menubar=no, location=no, status=no, resizable=no");
}