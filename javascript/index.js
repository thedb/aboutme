//header
function navOmover() {
    var navFirst=document.getElementsByClassName('navFirst')[0];
    var navSecond=document.getElementsByClassName('navSecond')[0];
    navSecond.setAttribute("class","navSecondBg");
    navFirst.setAttribute("class","navFirstBg");
}
function navOmout(){
    var navFirst=document.getElementsByClassName('navFirstBg')[0];
    var navSecond=document.getElementsByClassName('navSecondBg')[0];
    navSecond.setAttribute("class","navSecond");
    navFirst.setAttribute("class","navFirst");
}
//body
//aboutme标题动画效果
$(function (){
    $(".about_title").hover(function(){
        $(this).find(".about_first").animate({
            backgroundPositionX:0,
            backgroundPositionY:'-43px'
        }, 300);
        $(this).find(".about_second").animate({backgroundPositionX: "-125px", backgroundPositionY: "0"},300);
    }, function(){
        $(this).find(".about_first").animate({"background-position-x": "0", "background-position-y": "0"},300);
        $(this).find(".about_second").animate({backgroundPositionX: "-125px",backgroundPositionY: "-43"},300);
    });
});
//头部轮播图动画效果
$(function(){
    var index=1;//
    var img=$(".img-carousel a");
    var len=img.length;
    var ball=$(".img-carousel span");
    for(var i=0;i<ball.length;i++){
        (function(i){
            ball[i].onclick=function(){
                showImg(i);
                clearInterval(timer);
                timer=setInterval(function(){
                    if(index==len){
                        index=0;
                    }
                    showImg(index);
                    index++;
                },4000);
            }
        })(i)
    }
    function showImg(index){
        img.eq(index).fadeIn(500).siblings("a").fadeOut(500);
    }
    timer=setInterval(function(){
        if(index==len){
            index=0;
        }
        showImg(index);
        index++;
    },4000);
});
//个人照片轮播图
$(function(){
    var index=0;
    var imgli=$(".photo_body li");
    var length=imgli.length;
    var back=$(".photo_back");
    var go=$(".photo_go");
    var width=$(".photo_body").width();
    //上一页
    back.click(function() {
        index -= 1;
        if(index == -1) {index = length - 1;}
        showPhoto(index);
    });
    //下一页
    go.click(function() {
        index += 1;
        if(index == length) {index = 0;}
        showPhoto(index);
    });
    function showPhoto(index){
        var goLeft=-index*width;
        imgli.animate({"left":goLeft},300);
    }
    $("#header_photo").hover(function() {
        clearInterval(timer2);
    },
    function() {
         timer2=setInterval(function(){
            showPhoto(index);
             index++;
             if(index==length){
                 index=0;
             }
         },3000)
    }
).trigger("mouseleave");
});
//footer
$('.two-dimensionCode').on("mouseenter",function(){
    var $img=$('.two-dimensionCode img');
    $img.animate({
        left:"-50px",
        top:"-25px",
        width:"140px",
        height:"140px"
        },1000);
});
$('.two-dimensionCode').on("mouseleave",function(){
    var $img=$('.two-dimensionCode img');
    $img.animate({
        left:"+0px",
        top:"+0px",
        width:"90px",
        height:"90px"
    },1000);
});
