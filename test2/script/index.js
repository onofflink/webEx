$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=960px"}, 2000, function(){
    n++;
    if(n == 5) {
     $(".banner > ul").css("left", "0px");
    }
    ani();
  });  
})();

function popUp() {
  window.open("win.html", "bakery win", "width=300, height=150, top=100, left=200, scrollbars=no, menubar=no, toolbar=no, status=no, location=no, resizable=no");
}

function modalOpen() {
}

function modalClose() {
  $("#modal-bg").hide(0);
  $("#modal-body").css("display", "none");
}