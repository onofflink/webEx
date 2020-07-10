$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

var n=0;
(function ani(){
     $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if (n==3) {
               n=0;
               $(this).css({"left": "0px"});
          }
          ani();
     });
})();

$(".partner img").click(function(){
     winOpen();
});

function winOpen(){
     window.open("win.html", "win", "width=430px, height=320px, top=100, left=100, menubar=no, scroolbar=no, toolbar=no, resizable=no");
}

function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}

function modalOpen(){
     $("#modal-bg").show(20);
     $("#modal-wrap").css("display", "table-cell");
}