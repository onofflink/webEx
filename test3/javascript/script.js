$(document).ready(function () {
  $(".nav>li").mouseover(function() {	
    if($(this).children(".submenu").length > 0) {
      $(this).children(".submenu").stop().slideDown(500);
    }
   });
   $(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
   });
   
});