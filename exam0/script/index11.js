$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
    n++;
    if(n==5) {
      n=0;
      $(this).css("left", "0px");
    } 
    ani();
  });
})();

function modalOpen(){
  $("#modal-bg").show(0);
  $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
  $("#modal-bg").hide(0);
  $("#modal-wrap").css("display", "none");
}

function winOpen() {
  window.open("win.html", "win", "widht=500, height=500, left=200, top=200, scrollbars=no, toolbar=no, menubar=no, status=no, resizable=no, location=no");
}

var Content = $(".tab-content > div");
$(Content).hide();
$(Content).last().slideDown(500);
$(".tab-buttons span").click(function(){
  var Tabs = $(this).attr("class");
  $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
  $(Content).each(function(){
    if($(this).hasClass(Tabs)){
      $(this).fadeIn(800);
    }else{
      $(this).hide();
    }
  });
});

/* (function(){
  $("#gallery img:gt(0)").hide();
  $("#galleryFolder").click(function(){
    $("#gallery img:first").fadeOut().next().fadeIn().appendTo("#galleryFolder");
  });
  
}); */

$(".btn-prev img").click(function(){
  if (n > 0) n--;
  aniSlide();
});
$(".btn-next img").click(function(){
  if (n < 3) n++;
  aniSlide();
});

function aniSlide() {
  $(".service-slide").stop().animate({"left": (-n*600)+"px"}, 1000);
}