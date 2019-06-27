(function(){
  var tabs = $(".tabs li a");
  tabs.click(function(){
    var abcd = this.hash.replace("/", "");
    tabs.removeClass("active");
    $(this).addClass("active");
    $("#content").find('p').hide();
    $(abcd).fadeIn(500);
  });
})();