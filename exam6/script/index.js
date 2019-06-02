//jshint:version 6;
$(".navs").hover(function(){
      $(".submenu", $(this)).stop().slideDown();
}, function() {
      $(".submenu", $(this)).stop().slideUp();
});

var n = 0; 
(function ani(){
      $(".slide").delay(1000).animate({"left": "-=1200px"}, 3000, function(){
            n++;
            if(n == 4) { 
                  n = 0;                 
                  $(this).animate({"left": "0px"}, 12000);
            }
            ani(); 
      });      
})();

function modalOpen(){
      $("#modal-bg").show(0);
      $("#modal-wrap").css("display", "table");
}

function modalClose(){
      $("#modal-bg").hide(0);
      $("#modal-wrap").css("display", "none");
}

function popUp(){
      window.open("popup.html", "greenHouse", "width=500, height=200, top=200, left=300, toolbar=no, scrollbars=no, menubar=no, location=no, status=no, resizable=no")
}