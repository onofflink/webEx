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

var i = 0;
var depth = 20;
(function gallery(){
      $(".gallery-wrap li").eq(i).css("z-index", depth++).fadeOut(0);
      $(".gallery-wrap li").eq(i).delay(2000).fadeIn(2000, function(){
            if(i == 2) i = 0;
            else i++;
            gallery();
      });
})();

$(".bts").click(function(){
      var x = $(this).index();
      $(".bts").css("color", "#f09");
      $(".bts").eq(x).css("color", "#f30");
      $(".partner_info").eq(x).animate({"left": (-x*100)+"px"}, 2000);
});

(function($) {

	var tabs =  $(".tabs li a");
  
	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    $("#content").find('p').hide();
    $(content).fadeIn(800);
	});

})(jQuery);