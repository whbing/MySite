//获取0到n之间的随机数
function getRandom(n) {
    return Math.random() * n;
}


var imgHeight = 0;
var imgWidth = 0;

function mysize() {
    var wid = $(window).innerWidth();
    var het = $(window).innerHeight();
    $("#main").css({
        width: wid,
        height: het,
    });

    imgHeight = $("#main img").innerHeight(); //获得img的高度
    imgWidth = $("#main img").innerWidth(); //获得img的宽度

    var fly1_top = imgHeight * 0.05;
    var fly1_left = imgWidth * 0.3;
    var fly1_width = imgWidth * 0.045;
    var fly1_height = imgHeight * 0.065;
    $(".fly1").css({ //按比例加在fly1
        width: fly1_width,
        height: fly1_height,
        top: fly1_top + 'px',
        left: fly1_left + 'px',

    });

    var fly2_top = imgHeight * 0.035;
    var fly2_left = imgWidth * 0.25;
    var fly2_width = imgWidth * 0.07;
    var fly2_height = imgHeight * 0.10;
    $(".fly2").css({ //按比例加在fly2
        width: fly2_width,
        height: fly2_height,
        top: fly2_top + 'px',
        left: fly2_left + 'px',

    });

    var fly3_top = imgHeight * 0.035;
    var fly3_left = imgWidth * 0.2;
    var fly3_width = imgWidth * 0.30;
    var fly3_height = imgHeight * 0.30;
    $(".fly3").css({ //按比例加在fly2
        width: fly3_width,
        height: fly3_height,
        top: fly3_top + 'px',
        left: fly3_left + 'px',

    });

    var flash_top = imgHeight * 0.005;
    var flash_left = imgWidth * 0.15;
    var flash_width = imgWidth * 0.30;
    var flash_height = imgHeight * 0.30;
    $(".flash").css({ //按比例加在fly2
        width: flash_width,
        height: flash_height,
        top: flash_top + 'px',
        left: flash_left + 'px',
        backgroundPosition: imgWidth * 0.35 - imgHeight * 0.65,

    });

    var img_top = -imgHeight * 0.054;
    var img_left = -imgWidth * 0.105;
    var img_width = imgWidth * 0.35;
    var img_height = imgHeight * 0.40;
    $(".left-top-img").css({
        width: img_width,
        height: img_height,
        top: img_top,
        left: img_left,
    });

    var lingxing_top = imgHeight * 0.65;
    var lingxing_left = imgWidth * 0.85;
    var lingxing_width = imgWidth * 0.04;
    var lingxing_height = imgHeight * 0.1;
    $(".lingxing").css({
        width: lingxing_width,
        height: lingxing_height,
        top: lingxing_top,
        left: lingxing_left,
    });
    //右边的导航块nav1
    var nav1_top = imgHeight * 0.01;
    var nav1_left = imgWidth * 0.8;
    var nav1_width = imgWidth * 0.075;
    var nav1_height = imgHeight * 0.18;
    $(".nav1").css({
        width: nav1_width,
        height: nav1_height,
        top: nav1_top,
        left: nav1_left,
    });

    $(".nav1 .fang1").css({
        top: imgHeight * 0.01,
    });

    //右边的导航块nav2，包含2个方块
    var nav2_top = imgHeight * 0.08;
    var nav2_left = imgWidth * 0.85;
    var nav2_width = imgWidth * 0.092;
    var nav2_height = imgHeight * 0.35;
    $(".nav2").css({
        width: nav2_width,
        height: nav2_height,
        top: nav2_top,
        left: nav2_left,
    });
    $(".nav2 .fang2").css({
        top: imgHeight * 0.01,
    });

    //右边的导航块nav3
    var nav3_top = imgHeight * 0.5;
    var nav3_left = imgWidth * 0.85;
    var nav3_width = imgWidth * 0.11;
    var nav3_height = imgHeight * 0.12;
    $(".nav3").css({
        width: nav3_width,
        height: nav3_height,
        top: nav3_top,
        left: nav3_left,
    });

}

function auto() {
    if ($("#main .img1").css("opacity") == 1) {
        $("#main .img1").animate({ "opacity": 0 }, 4000);
        $("#main .img2").animate({ "opacity": 1 }, 4000);
    } else {
        $("#main .img1").animate({ "opacity": 1 }, 4000);
        $("#main .img2").animate({ "opacity": 0 }, 4000);
    };
    setTimeout("auto()", 8000);
}

window.onload = function() {
    mysize(); //初次加载按比例加载
    auto();
    $(".fly1").click(function() { //点击fly1时
        $(this).animate({
            "top": imgHeight * (0.01 + getRandom(0.1)), //0.026
            "left": imgWidth * (0.1 + getRandom(0.5)) //0.39
        }, 4000);

        $(".fly3").fadeIn(1000)
            .delay(2000).animate({
                "top": imgHeight * 0.5,
                "left": imgWidth * 0.45
            }, 6000)
            .delay(3000).animate({
                "top": imgHeight * 0.55,
                "left": imgWidth * 0.09
            }, 3000); //fly3淡入
        $(".fly2").delay(2000).fadeIn(2000);
    });
    //首次发生
    $(".fly1").one('click', function() {
        $(".flash").fadeIn('50').fadeOut('100');
    });
    //加载音效
    $('.fly1').easyAudioEffects({
        ogg: "./assets/audio/pi.ogg",
        mp3: "./assets/audio/pi.mp3",
        eventType: 'hover'
    })
    $('.fly1').easyAudioEffects({
        ogg: "./assets/audio/flash.wav",
        mp3: "./assets/audio/flash.mp3",
        eventType: 'click'
    });
    $('.fly2').click(function() {
        $(this).animate({
            "top": imgHeight * (getRandom(0.05) + 0.01),
            "left": imgWidth * (getRandom(0.1) + 0.2),
        }, 5000, function() {
            $(this).animate({
                "top": imgHeight * 0.035,
                "left": imgWidth * 0.25
            }, 5000);
        })
    });
    $('.fly3').click(function() {
        $('.fly3 .img3').fadeIn(1000).delay(2000).fadeOut('1000');
    });

    //菱形旋转
    //方法1：函数自身循环，缺点是不能暂停
    function rotation() {
        $(".lingxing").rotate({
            angle: 0,
            animateTo: 360,
            callback: rotation
        });
    }
    rotation();
    //当鼠标移入时，处理方法
    $(".lingxing").rotate({
        bind: {
            mouseover: function() {
                $(this).rotate({
                    animateTo: 180,
                    duration: 4000,
                });
            },
            mouseout: function() {
                rotation();
            }
        }
    });

    //nav铃声
    $('.nav').easyAudioEffects({
        ogg: "./assets/audio/dingdong.wav",
        mp3: "./assets/audio/dingdong.wav",
        eventType: 'hover'
    })
    $('.nav').easyAudioEffects({
        ogg: "./assets/audio/diu.wav",
        mp3: "./assets/audio/diu.wav",
        eventType: 'click'
    });

    /***所有nav小角度旋转 start**/
    var add1 = 0;
    var add2 = 0;
    var add3 = 0;
    var angle1 = 0;
    var angle2 = 0;
    var angle3 = 0;
    setInterval(function() {
        if (getRandom(200) > 100) {
            add1 = 0.3;
        } else {
            add1 = -0.3;
        }
        if (getRandom(300) > 150) {
            add2 = 0.2;
        } else {
            add2 = -0.2;
        }
        if (getRandom(200) > 100) {
            add3 = 0.3;
        } else {
            add3 = -0.3;
        }
    }, 3000);
    setInterval(function() {
        angle1 += add1;
        angle2 += add2;
        angle3 += add3;
        $(".nav1").rotate(angle1);
        $(".nav2").rotate(angle2);
        $(".nav3").rotate(angle3);
    }, 50);
    /**end 旋转**/
    /*所有nav小角度平移*/
    /*******以下数据为原始数据*********/
    //右边的导航块
    // var nav1_top = imgHeight * 0.01;(0-0.06)
    // var nav1_left = imgWidth * 0.8;(0.75-0.85)
    // var nav2_top = imgHeight * 0.08;(0.05-0.2)
    // var nav2_left = imgWidth * 0.85;(0.8-0.9)
    // var nav3_top = imgHeight * 0.5;(0.45-0.55)
    // var nav3_left = imgWidth * 0.85;(0.8-0.9)
    /*******end原始数据*********/
    setInterval(function position() {
        var nav1_top = getRandom(0.06) * imgHeight;
        var nav1_left = (getRandom(0.1) + 0.75) * imgWidth;
        var nav2_top = (getRandom(0.15) + 0.05) * imgHeight;
        var nav2_left = (getRandom(0.1) + 0.8) * imgWidth;
        var nav3_top = (getRandom(0.1) + 0.45) * imgHeight;
        var nav3_left = (getRandom(0.1) + 0.8) * imgWidth;
        $(".nav1").animate({
            left: nav1_left,
            top: nav1_top,
        }, 3000)
    }, 3000);


    //旋转
    $(".nav1 .fang1").rotate({
        bind: {
            mouseover: function() {
                $(this).rotate({
                    animateTo: 360
                });
            },
            mouseout: function() {
                $(this).rotate({
                    animateTo: 0
                });
            }
        }

    });

}
$(window).resize(mysize); //传递一个函数进去，只需要写函数名
