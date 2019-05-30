$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
/* $(".btn-prev").click(function(){
     if(n > 0) n--;
     ani();
});

$(".btn-next").click(function(){
     if(n < 2) n++;
     ani();
});

function ani() {
     $(".slide").stop().animate({"left": (-n*1000)+"px"}, 2000);
     } */

(function ani(){
     $(".slide").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
          n++;
          if(n == 2){
               n = 0;
               $(this).animate({"left":"0px"}, 2000);
          }          
     ani();
     });
})();

function winOpen(){
     window.open("contact.html", "win", "width= 400px, height=300, top=300, left=500, resizable=no, location=no, status=no, scrollbars=no")
}

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}

function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}