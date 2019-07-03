$("#nav").hover(function(){
  $("ul", $(this)).stop().slideDown();

}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=960px"}, 1000, function(){
  n++;
  if(n == 3) {
    n = 0;
  $(this).animate({"left": "0px"}, 2000);
  }

  ani();
});
})();

$(".partner img").click(function(){
  winOpen();
});
function winOpen(){
  window.open("win.html", "win", "width=430px, height=320px, top=100, left=100, menubar=no, scrollbars=no, toolbar=no, status=no, location=no, resizable=no");
}

function modalOpen() {
  $("#modal-bg").show(0);
  $("#modal-wrap").css("display", "table");
}
function modalClose() {
  $("#modal-bg").hide(0);
  $("#modal-wrap").css("display", "none");
}