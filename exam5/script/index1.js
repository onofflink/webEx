$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){

     $("ul", $(this)).stop().slideUp();
});


$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css({"color": "#fff"});
     $(".bts a").eq(n).css("color", "#f30");
     $(".slide").stop().animate({"left": (-n*1000+"px")}, 2000);
});

function popUp() {
     window.open("contact.html", "contact", "width=500, height=500, top=100, left=100, scrollbars=no, menubar=no, toolbar=no, status=no, resizable=no, location=no");
}

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
     
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}