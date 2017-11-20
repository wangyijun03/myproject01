 jQuery(function($){
    //放大镜
     $('.dt_t').gdsZoom({height:300,width:300});

     //tab标签
       

       //飞入购物
       // var $add_btn = $('.add_btn');
       var $car_r = $('.car_right');
       $('.add_btn,.jiagou').on('click',function(){

        var $current = $('.gds_zoom');
        console.log($current)
        var $img = $current.children('img');
        var $cloneImg=$img.clone();

         // 给复制图片设置样式
          $cloneImg.css({
             position:'absolute',
             top:$img.offset().top,
             left:$img.offset().left,
             width:$img.width()
            });

           // 把图片写入页面
            $cloneImg.appendTo('body');

             // 动画效果:必须写入页面才会显示动画效果
                $cloneImg.animate({left:$car_r.offset().left,top:$car_r.offset().top+$car_r.height(),width:40},function(){
                    //删除复制的图片
                    $cloneImg.remove();

                    // 2>复制当前商品所有信息(用于往购物车添加)
                    // $cloneLi = $currentLi.clone();
                    // $cloneLi.children('p').first().remove();
                    var $carli=$('<li/>');
                    $carImg=$img.clone();
                    $carName=$('.bscname').children('p').clone();
                    $carImg.appendTo($carli);
                    $carName.appendTo($carli);
                    var $carlistul=$('.carlist').children('ul');
                    console.log($carlistul,$carli,$carName)
                    $carli.appendTo($carlistul);
                    // 添加删除按钮
                    // $('<span/>').addClass('btn-close').html('&times;').appendTo($cloneLi);
                    // $cloneLi.appendTo($cartlist);
                })
       })
       

    //打开关闭购物车
    var $car_right=$('.car_right');
    var $car=$('.carlist');
    $car_right.on('click',function(){
        var $car_left=$car.css("left").slice(0,-2);
        var $car_opa=$car.css("opacity");
        console.log($car_left,$car_opa)

        if($car_left<0){
            // animate($car,{left:40});
            $car.animate({left:40,opacity:0})
        }else if($car_left>0){
            // animate($car,{left:-220});
            $car.animate({left:-220,opacity:1})

        }
    });


    var res1 =location.search;
    var str1 = res1.slice(4,);

    function List(){
        res=res1.slice(5)
        $.ajax({
            type:'get',
            url:'http://localhost:1117/src/api/details.php?id='+str1,
            success:function(str){
                var obj=$.parseJSON(str);
                console.log('a')
                console.log(obj);
                // console.log(obj)
                // var data=obj.data[0];
                // //写入元素函数
                xieru(obj);
                // 
                // $('').html(`
                //     ${obj.name}
                // `);
            }
        })
    }  
    List();

    function xieru(obj){
        $('.dt_t').children('img').attr('src',
            `../${obj.imgurl}`
        ); 
        $('.dt_t').children('img').attr('data-big',
            `../${obj.imgurl}`
        );
         $('.xlunbo').find('img').attr('src',
            `../${obj.imgurl}`
        );
        // $('.xlunbo').children('img').attr({
        //     src:`../${obj:imgurl}`
        // })
        $('.bscname').children('p').html(`${obj.name}`);
        $('.xprice').html(`￥${obj.price}`);
        
    }


 });
