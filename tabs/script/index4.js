var Content = $(".content > div");
$(Content).hide();
$(Content).last().slideDown(800);
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