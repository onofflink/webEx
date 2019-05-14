$(".bts").click(function(){
  var n = $(this).index();
  $(.bts).eq(n).css({"color":"#f30"});
  $(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500);
})