function winOpen() {
      window.open("win-1.html", "tony", "width=30%, height=30%, top=6.25rem, left=6.25rem")
}
function modalOpen() {
      $("#modal_bg").show(0);
      $("#modal_wrap").css({"display":"table"}, 500);
}

function modalClose() {
      $("#modal_bg").hide(0);
      $("#modal_wrap").css({"display":"none"});
}