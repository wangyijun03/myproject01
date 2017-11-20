<?php
    include 'connect.php';


    // $email = isset($_GET['email']) ? $_GET['email'] : '';
    // $grade = isset($_GET['grade']) ? $_GET['grade'] : '';
    // $gender = isset($_GET['gender']) ? $_GET['gender'] : '';
    // $birthday = isset($_GET['birthday']) ? $_GET['birthday'] : '';
    // $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    //查看用户名是否存在
    $sql="select username form user where username='$username'";
    $result=$conn->query($sql);

    $password=md5($password);

    $sql="insert into user (username,password) values('".$username."','".$password."')";

    //获取查询结果
    $result=$conn->query($sql);

    if($result){
        echo "ok";
    }else{
        echo "Error";
    }

    //关闭连接
    $conn->close();
?>