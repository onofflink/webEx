$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left":"-=960px"}, 2000, function(){
          n++;
          if(n == 4){
               n = 0;
               $(this).animate({"left": "0px"}, 2000);
          }
          ani();
     });
})();