(function(){
     var tabs = $(".tabs li a");
     tabs.click(function(){
          var content = this.hash.replace("/", "");
          tabs.removeClass("active");
          $(this).addClass("active");
          $("#content").find('p').hide();
          $(content).fadeIn(300);
     });
})();

/* 
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tab-buttons span').click(function(){
    var thisclass=$(this).attr('class');
    $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });


*/