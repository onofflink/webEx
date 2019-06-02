//jshint:version 6;
$(".navs").hover(function(){
      $(".submenu", $(this)).stop().slideDown();
}, function() {
      $(".submenu", $(this)).stop().slideUp();
});