$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n==5) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function modalOpen() {
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}


function modalClose() {
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}

function popUp() {
     window.open("contact.html", "win", "width=500, height=500, top=50, left=50, scrollbars=no, menubar=no, toolbar=no, status=no, location=no, resizable=no")
}