$(document).ready(function(){
   
        let count = 0;
        setInterval(function(){
            count = (count + 1) % 3 ; 
            $(".swiper-slide").eq(count).addClass("act").siblings().removeClass("act")
        }, 3000)

        $(".tabwrap h2").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        //갤러리 바디, 공지 바디
        $(".tabwrap > div> div> div").eq($(this).index()).addClass("on")
        .siblings().removeClass("on")
        })

        $(".notice li:first-child a").click(function(){
            $("#pop").show()
        })
        $("#pop button").click(function(){
                $("#pop").hide()
        })
})
    // ↓ 위아래 배너 Left Top으로 바꾸고 -300으로 변경만 했음
     
    //     setInterval(function(){
    //         $(".swiper-wrapper").animate({"marginTop":-300},400, function(){
    //         $(".swiper-wrapper > div").eq(0).appendTo($(".swiper-wrapper"))
    //         $(".swiper-wrapper").css({"marginTop":0})
    //     })
    //     },3000
    //     )
    // })


    // 스와이퍼 만들어 두고 setinterval 생성 후 안에다 넣어주면 스와이퍼 돌아감 (양옆으로 도는거)
    // $(function(){
    //     setInterval(function(){
    //     },3000
    //     )
    //     $(".swiper-wrapper").animate({"marginLeft":-1200},400, function(){
    //         $(".swiper-wrapper > div").eq(0).appendTo($(".swiper-wrapper"))
    //         $(".swiper-wrapper").css({"marginLeft":0})
    //     })
    // })
    // 넣은거 → $(function(){
        //     setInterval(function(){
        //         $(".swiper-wrapper").animate({"marginLeft":-1200},400, function(){
        //         $(".swiper-wrapper > div").eq(0).appendTo($(".swiper-wrapper"))
        //         $(".swiper-wrapper").css({"marginLeft":0})
        //     })
        //     },3000
        //     )
        // })

