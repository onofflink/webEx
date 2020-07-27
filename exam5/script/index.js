$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css({"color": "#f0f"});
     $(".bts a").eq(n).css({"color": "#ff0"});
     $(".slide").stop().animate({"left": (-n*1000)+"px"},500);
});

function popUp() {
     window.open("contact.html");
     
}