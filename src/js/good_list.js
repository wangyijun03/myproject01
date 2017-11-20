jQuery(function($){
    $.ajax({
        url:'../api/good_list.php',
        type:'get',
        data:{
            pageNo:2,
            qty:16
        },
        success:function(res){
            var $ul=$('.gd_list');
            var res1=$.parseJSON(res);
            var content=res1.map((item, idx)=>{
                return `<li date-guid="${item.id}" class="msg">
                            <div class="gd_img">
                                <img src="../${item.imgurl}">
                            <div/>
                            <div class="gd_price">
                                <span class="xgd_p">￥${item.price}</span>
                                <span class="ygd_p">490.0</span>
                                <span class="dazhe">7.5折</span>
                            <div/>
                            <div class="gd_name">
                                <p class="gdn1">
                                <a href="../html/details.html">${item.name}<a/>
                                <p/>
                                <p class="gdn2">${item.about}<p/>
                            <div/>
                    <li/>`
            }).join('');    
            // console.log(cont)
            $ul.html(content);
            // console.log($ul)
        }


    })
        $('.gd_list').on('click','.msg',function(){
            var guid=$(this).attr('date-guid');
            console.log(guid)
            location.href=`details.html?id=${guid}`;
        })

    
})