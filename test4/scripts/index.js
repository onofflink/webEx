$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

function winOpen() {
     window.open("contact.html", "win", "width=400, height=300, left=200, top=300");
}