$(".nav").hover(function(){
  $(".submenu", $(this)).stop().slideDown();
}, function(){  
  $(".submenu", $(this)).stop().slideUp();
});

var n=0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=960px"}, 2000, function(){
    n++;
    if (n==3) {
      n=0;
      $(this).css({"left": "0px"});
    }
    ani();
  });
})();

<<<<<<< HEAD
=======
$(".partner img").click(function(){
  winOpen();
});
function winOpen(){
  window.open("win.html", "win", "width=430px, height=320px, top=100, left=100, menubar=no, scrollbars=no, toolbar=no, status=no, location=no, resizable=no");
}
>>>>>>> correct a typo for index.js of test1

function modalOpen() {
  $("#modal-bg").show(0);
  $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
  $("#modal-bg").hide();
  $("#modal-wrap").css("display", "none");
}

$(".partner img").click(function(){
  winOpen();
});

function winOpen() {
  window.open("win.html", "win", "width=500, height=500, top=100, left=100, scrollbars=no, menubar=no, toolbar=no, resizable=no, status=no, location=no");
}