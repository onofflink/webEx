(function(){
  var Tabs = $(".tabs>li>a");
  Tabs.click(function(){
    var Content = this.hash.replace("/", "");
    Tabs.removeClass("active");
    $(this).addClass("active");
    $("#content").find('p').hide();
    $(Content).fadeIn(500);
  });
})();