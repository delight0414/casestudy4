$(function(){
////
    $("#gnb > ul > li").hover(function(){
        if($(this).children().length == 2){
            $("header").addClass("on");
            $(this).find(".sub").slideDown(20);
        }
    },
    function(){
        if($(this).children().length == 2){
            $("header").removeClass("on");
            $(this).find(".sub").slideUp(20);
        }
    });
    $("#gnb > ul > li > a").focusin(function(){
        //console.log($(this).next().length);
        if($(this).next().length === 1){
            $("header").addClass("on");
            $(this).parent().find(".sub").show(); 
            $(this).parent().addClass("on");
        }
        else {
            $(this).parent().addClass("on");
        }
    });
    $("#gnb .sale").focusout(function(){
        $("header").removeClass("on");
        $(this).parent().parent().parent().parent().removeClass("on");
        $(this).parent().parent().parent().hide();
    });
    $("#gnb > ul > li > a").focusout(function(){
        if($(this).next().length === 0){
        $(this).parent().removeClass("on");
        }
    });
const subSwiper = new Swiper("#slider .sub_swiper", {
    slidesPerView: 2,
    grid: {
    rows: 3,
    },
    spaceBetween: 0,
    breakpoints: {
        720: { //720이상 1280미만
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
            spaceBetween: 0
        },
        1280: { // 1280이상
            slidesPerView: 3, 
            spaceBetween: 60,
            grid: {
                rows: 1
            }
        }
    }
});
$("a.next").click(function(e)
{e.preventDefault();
    subSwiper.slideNext();
});
$("a.prev").click(function(e)
{e.preventDefault();
    subSwiper.slidePrev();
});

$("a#btn").click(function(e){
    e.preventDefault();
    if($("a#btn").hasClass("tab")){
        $(this).removeAttr("class");
        $(this).addClass("close");
        $("#mobile").fadeIn(200);  
        $("#main .dim").addClass("active"); 
        $("body").addClass("fixed");  
    }
    else {
        $(this).removeAttr("class");
        $(this).addClass("tab");
        $("#mobile").fadeOut(200);
        $("#main .dim").removeClass("active");  
        $("body").removeClass("fixed"); 
        $("#mobile > ul > li").removeClass("on");
        $("#mobile li ul").removeClass("active");
    }
});
$("#mobile > ul > li").click(function(e){
    e.preventDefault();
    if(!$(this).hasClass("on")) {
        $("#mobile > ul > li").removeClass("on");
        $(this).addClass("on");
        $("#mobile li ul").removeClass("active");
        $(this).find("ul").addClass("active");
    }
    else {
        $(this).find("ul").removeClass("active");
        $(this).removeClass("on");
    }
});
let winw;
$(window).resize(function(){
    winw=$(window).width();
    if(winw >= 720) {
        $("#mobile").hide();
        $("#main .dim").removeClass("active");
        $("a#btn").removeAttr("class");
        $("body").removeClass("fixed"); 
    }
    else {
        $("a#btn").removeAttr("class");
        $("a#btn").addClass("tab");
    }
});
});