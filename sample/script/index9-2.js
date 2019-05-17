function winOpen() {
      window.open("win.html", "win", "width=30%, height=30%, top=6.25rem, left=6.25rem");
}

function modalOpen() {
      $("#modal_bg").show(0);
      $("#modal_wrap").css({"display":"table"});
}

function modalClose() {
      $("#modal_bg").hide(0);
      $("#modal_wrap").css({"display":"none"});
}