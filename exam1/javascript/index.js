$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".banner ul").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n == 3) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function winOpen() {
     window.open("win.html", "win", "width=500, height=500, left=100, top=100, scrollbars=no, menubar=no, toolbar=no, status=no, location=no, resizable=no");
}

function modalOpen() {
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell")
}

function modalClose() {
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}