
jQuery(document).ready(function(){
$(".nav>li").on("mouseover",function(){
      $(".submenu", this).stop(true,true).slideDown();
          }).on("mouseleave",function(){
      $(".submenu", this).stop(true,true).slideUp();
    });
})