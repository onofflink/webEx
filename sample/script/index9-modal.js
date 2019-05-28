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

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=200px"}, 2000, function(){
          n++;
          if(n == 2) {
               n = 0;
          $(this).animate({"left": "0px"}, 1000);
          }
          ani();
     });
})();