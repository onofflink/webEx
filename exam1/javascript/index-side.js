$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
     /* $(".navs", $(this)).css("z-index", "9999"); */
}, function() {
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n == 3) {
               n = 0;
               $(this).css("left", "0");
          }
          ani();
     });
})();

function winOpen() {
     window.open("win.html", "win", "width=500, height=500, left=200, top=200, scrollbars=no, menubar=no, toolbar=no, status=no, location=no, resizable=no");
}

/* var fs = require('fs');
fs.writeFile(__dirname +"/index3.html", "<h1>hello world</h1>", function(error){
     if(error) {
          return console.log(error);
     }else{
          return console.log("congrats");
     }
}); */
//nodejs exercise from udemy 10:25 PM