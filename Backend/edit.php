<?php

// header('Access-Control-Allow-Origin:*');
// header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

require('connection.php');

// $id=file_get_contents('php://input');
if(isset($_GET['id'])){

    $id=$_GET['id'];
    $query='select id,name,username,email,createdTime from user where id='.$id;
    $res=mysqli_query($connection,$query);

    if(mysqli_num_rows($res)==1){
        $data=mysqli_fetch_assoc($res);
        echo json_encode($data); 
    }
}

if(isset($_GET['edit'])){
    $values=file_get_contents('php://input');
    if(!empty($values)){
        $data=json_decode($values);
        $id=$data->id;
        $email=$data->email;
        $name=$data->name;
        $username=$data->username;
        // echo $id;
    }

     $query="UPDATE user SET name='$name', email='$email', username='$username' where id='$id'";
     $result=mysqli_query($connection,$query);
     print_r($result);
    // $query='UPDATE `user` SET `username`=,`name`='[value-3]',`email`='[value-10]',`createdTime`='[value-14]' WHERE `id`='1''

}






?>