<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require('./connection.php');

$dataset=file_get_contents('php://input');

if(!empty($dataset)){
    $data=json_decode($dataset);
    $email=$data->email;
    $password_hashed=md5($data->password);

    $sql="SELECT * FROM  user WHERE password='$password_hashed' AND email='$email'";
    $result=mysqli_query($connection,$sql);
    print_r($result);
    if(mysqli_num_rows($result)==1){
        http_response_code(201);
    }else{
        // return wena eka balanna
        // http_response_code(400);
         echo "UserName Or Password Invalid";
    }

}


?>