
addEventListener('DOMContentLoaded',function(){
        //去登录页面
        $('.ljdl').click(function(){
                location.href = '../html/login.html';
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

        //注册按钮点击
        $('.btn_reg').click(function(){
            var $username = $('.username').val();

            if(!/^1[34578]\d{9}$/.test($username)){
                alert('用户名格式错误!');
                return false;
            }

            var $showcode = $('.showcode').html();
            var $code = $('.code').val();
            if($showcode != $code){
                alert('验证码错误');
                yanzhengma();
                return false;
            }

            var $password = $('.password').val();
            if(!/^\S{6,20}$/.test($password)){
                alert('密码格式错误!');
                return false;
            }

            var $password1 = $('.password1').val();
            if($password != $password1){
                alert('密码不一致!')
                return false;
            }

            // var tiaokuan = $('.tongyi1');
            if(!$('#tongyi1').prop('checked')){
                alert('请勾选条款!')
                return false;
            }


            $.ajax({
                url:"../api/reg.php",
                type:"get",
                data:{
                    username:$username,
                    password:$password
                },
                success:function(res){
                    console.log(res);
                    if(res === 'ok'){
                        alert('注册成功!');
                        location.href = '../html/login.html';
                    }else if(res === 'Error'){
                        alert('请输入正确的账号!')
                        location.reload();
                    }

                }
            });
        })
})
