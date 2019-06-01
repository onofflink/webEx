$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});


$(".bts").click(function(){
     var n = $(this).index();
     $(".bts").css({"color":"#fff"});
     $(".bts").eq(n).css({"color":"#f30"});
     $(".slide").stop().animate({"left":(-n*1000)+"px"}, 500);
});

function popUp() {
     window.open("contact.html");
}