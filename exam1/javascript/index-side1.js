$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
     /* $(".navs", $(this)).css("z-index", "9999"); */
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960"}, 2000, function(){
          n++;
          if(n == 3){n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function winOpen() {
     window.open("win.html", "win", "width= 300, height=200, top=200, left=200");
}

/* jq.$(document).ready(function () {
     $(".partner > h2").css("right", "0px");
     $(".partner_info").css("right", "0px");
}); */
