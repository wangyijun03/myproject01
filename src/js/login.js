addEventListener('DOMContentLoaded',function(){
    //去注册页面
    $('.ljzc').click(function(){
         location.href = '../html/reg.html';
        });
      //验证码
        function yanzhengma(num){
        var showcode=$('.showcode');
            if(num === undefined){
                num = 4;
            }
            var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

            // 循环获取验证码
            var res = '';
            for(var i=0;i<num;i++){
                var idx = parseInt(Math.random()*arr.length);
                res += arr[idx];
            }
            // return res;
            showcode.html(res);
            console.log(res);
        }
        yanzhengma();

        //点击换一张新的验证码
        $('.anew').click(function(){
            yanzhengma();
        })


        $('.btn_login').click(function(){
            var $username = $('.username').val();
            var $password = $('.password').val();


                $.ajax({
                url:"../api/login.php",
                type:"get",
                data:{
                    username:$username,
                    password:$password
                },
                success:function(res){
                    console.log(res);
                    if(res == 'ok'){
                        // console.log($('.checkbox').first().checked = true);
                        if($('#jizhu').first().checked = true){
                            
                            $.cookie('username', $username, { path: '/', expires: 7 }); 
                            $.cookie('password', $password, { path: '/', expires: 7 });
                        }else if($('.checkbox').first().checked = false){
                            $.cookie('username', $username, { path: '/'}); 
                            $.cookie('password', $password, { path: '/'});
                        }
                        
                        location.href = '../index.html';

                    }else if(res === 'fail'){
                        alert('login error')
                        // location.reload();
                    }

                }
            });
        })
})