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

        //判断cookie是否存在
        var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
        console.log(cookies)
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'username'){
                        $username = JSON.parse(temp[1]);
                    }else if(temp[0]==='password'){
                        $password = JSON.parse(temp[1]);
                    }
                });

                if($username && $password){
                    $('.username').val($username);
                    $('.password').val($password);
                // 跳转到主页
                if(confirm('你确定要跳转吗？')){
                    location.href = '../index.html';
                }
            }
            }


        $('.btn_login').click(function(){
            var $username = $('.username').val();
            var $password = $('.password').val();

            var $showcode = $('.showcode').html();
            var $code = $('.code').val();
            if($showcode != $code){
                alert('验证码错误');
                yanzhengma();
                return false;
            }

           if($('#jizhu').prop('checked')){
                // 把用户/密码保存到cookie中
             var date = new Date();
             date.setDate(date.getDate() + 7);

            document.cookie = 'username=' + $username + ';expires=' + date.toUTCString() + ';path=/';
            document.cookie = 'password=' + $password + ';expires=' + date.toUTCString();
            }
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
                        alert('登录错误，检查重新登录')
                        // location.reload();
                    }

                }
            });
        })
})