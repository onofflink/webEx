function popUp(){
     window.open("win.html", "win", "width=400, height=200, left=100, top=200");
}

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css({"display": "table"});
}

function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css({"display": "none"});
}