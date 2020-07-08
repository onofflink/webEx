$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});
/* div.wrap>.header>.logo>img^li.navs>ul.nav>li{MENU$$}*4^div.sub>ul*4>li*4>a{submenu$}  아래 navs 위 .nav의 구조는 같음*/
/* div.wrap>.header>.logo>img^^div.section>div.navs>.nav*4>div{MENU$$}+ul.sub>li>a{submenu$}*4 */
/* index3-2
   div.wrap>.header.clear>.logo>img^^div.section.clear>div.navs>.nav*4>div{Menu$}+ul>li*4 사이드메뉴의 경우 섹션이 들어가고 배너태그를 네비위로 올림.*/
$("navs").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function() {
     $(".submenu", $(this)).stop().slideUp();
});

/*  요건 틀린 것임....var n = 0;
var depth = 2;
function ani(){
     $("banner li").eq(n).css("z-index", depth++).fadeOut(0);
     $("banner li").eq(n).delay(2000).fadeIn(2000, function(){
          if(n == 4) n = 0;
          else n++;
          ani();
     });
} */

var n = 0;
(function ani(){
     $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 2000, function(){
          n++;
          if(n == 5){
               n = 0;
               $(this).animate({"left": "0px"}, 2000);
          }
          ani();
     });
})();

/* div.section>.banner>ul.submenu>li>img */
var n = 0;
var depth = 100;
(function ani(){
     $("banner li").eq(n).css("z-index", depth++).fadeOut(0);
     $("banner li").eq(n).delay(2000).fadeIn(2000, function(){
          if(n == 4) n=0;
          else n++;
          ani();
     });
})();
/* .section {width: 1200px; height: 800px; float: left;}
.banner {position: relative; width: 1000px; height: 800px; margin: 0 auto; overflow: hidden}
.banner > ul {width: 1000px; height: 400px}
.banner > ul > li {position: absolute; top: 0; left: 0; height: 400px;} */

$(".btn-prev").click(function(){
     if(n > 0) n--;
     ani();
});
$(".btn-next").click(function(){
     if(n < 4) n++;
     ani();
});

var n = 0;
function ani(){
     $(".banner > ul").stop().animate({"left": (-n*1000)+"px"}, 2000);
}

$(".bts").click(function(){
     var n = $(this).index();
     $(".bts").css({"color": "#fff"});
     $(".bts").eq(n).css({"color": "#f30"});
     $(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 2000);
});
/* headerwrap은 네비만 감싸고 배너는 없음// 
.banner {width: 1000px; height: 400px; margin: 0 auto; position: relative; overflow: hidden;}

.banner-btn {position: absolute; width:100%;text-align: center;  color: #fff; bottom:25px; font-size: 2.5rem;}
.bts {cursor: pointer;}

.slide {width: 5000px; height: 400px; position: absolute; }
.slide li {float: left;}

.welcome {position: absolute; width: 300px; height: 100px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fff; background: rgba(255,255,255,0.4); border-radius: 30px; text-align: center;line-height: 100px; font-size: 1.3rem;} */

function winOpen(){
     window.open("contact.html", "contact", "width= 400px, height=300, top=300, left=500, resizable=no, location=no, status=no, scrollbars=no, menubar=no, toolbar=no")
}

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css({"display": "table"});     
}

function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css({"display": "none"});  
}