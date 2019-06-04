
jQuery(document).ready(function(){
$(".nav>li").on("mouseover",function(){
      $(".submenu", this).stop(true,true).slideDown();
          }).on("mouseleave",function(){
      $(".submenu", this).stop(true,true).slideUp();
    });    

var now =0;
var imgs =$(".imgs>img").length;

start(); //아래 함수의 실행문
function start(){ // start 함수 선언문
  $(".imgs>img").eq(0).addClass('on'); // 화면에 보이는 슬라이드에 클라스 온을 적용한다. css에서 모든 슬라이드는 보이지 않게 하고 on은 마진으로 보이게함.
  setInterval(slide, 3000); /// 위 css /* .imgs {position: relative; overflow: hidden; height: 400px;  .imgs>img {width: 100%; position: absolute; margin-top:-1000px; transition:all 0.5s; z-index:1}  imgs>img.on{ margin-top:0; z-index:10} */
}
function slide(){
  if(now<imgs) now++; else now=0; // 화면에 보이는 슬라이드를 순차적으로 잡아 주어라
  $(".imgs>img").eq(now).addClass('on'); // 화면에 보이는 슬라이드에 css 적용
  $(".imgs>img").eq(now).siblings().removeClass('on'); /// 
   
}
})
