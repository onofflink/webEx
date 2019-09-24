$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     
     $("ul", $(this)).stop().slideUp();
});

/*var n = 0;
 (function ani(){
     $(".banner ul").delay(2000).animate({"margin-top": "-=400px"}, 2000, function(){
          n++;
          if (n == 3) {
               n = 0;
               $(this).css("margin-top", "0px");
          }
          ani();
     });
})(); */

var x = 0;
var depth = 100;
(function aniFade(){
     $(".slide li").eq(x).fadeOut(0).css("z-index", depth++);
     $(".slide li").eq(x).delay(2000).fadeIn(2000, function(){
          x++;
          if(x==4) x =0;
          aniFade();
     });
})();
     
function winOpen() {
     window.open("win.html", "win", "width=500, height=500, left=100, top=100, scrollbars=no, menubar=no, toolbar=no, status=no, location=no, resizable=no");
}

function modalOpen() {
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell")
}

function modalClose() {
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}

var Content = $(".tab-content > div");
$(Content).hide();
$(Content).last().slideDown(500);
$(".tab-buttons span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
          if($(this).hasClass(Tabs)){
               $(this).fadeIn(500);
          }else{
               $(this).hide();
          }
     });
});