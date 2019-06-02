//jshint:version 6;
$(".navs").hover(function(){
      $(".submenu", $(this)).stop().slideDown();
}, function() {
      $(".submenu", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
      $(".slide").delay(3000).animate({"left": "-=1200px"}, 3000, function(){
            n++;
            if(n == 4) {
                  n = 0;
                  $(this).animate({"left": "0px"}, 3000);
            }
            ani();
      });      
})();