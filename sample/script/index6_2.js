/*jshint esversion: 6 */

$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
})

var depth = 100;
var n = 0;
function ani(){
  $(".banner li").fadeout(0);
  $(".banner li").fadIn(0);
}
ani();