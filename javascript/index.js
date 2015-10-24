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
    console.log(navSecond);
}
//img-carousel
jQuery.fn.adv = function(imgs){
    var index = 0;
    var selector = this.selector;
    var img = new Image();
    img.src = imgs[index];
    img.onload = function(){
        $(selector).append(img);
    };
    setInterval(function(){
        $(selector).html("");
        index ++;
        if(index >= imgs.length){
            index = 0;
        }
        img.src = imgs[index];
        img.onload = function(){
            $(selector).append(img);
        }
    },4000);
};
//body
//关于标题动画效果
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
