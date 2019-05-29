$(".nav").hover(function(){
      $(".submenu", $(this)).stop().slideDown("slow");
}, function() {
      $(".submenu", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
      $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
            n++;
            if(n == 2){
                  n=0;
                  $(this).animate({"left": '0px'}, 2000);
            }
            ani();
      });
      
})();

