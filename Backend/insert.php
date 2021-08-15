<?php

header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

require('connection.php');

    $values=file_get_contents('php://input');
    if(!empty($values)){
        $data=json_decode($values);
        $email=$data->email;
        $name=$data->name;
        $username=$data->username;
        $query="Insert user(name, username, email) values('$name','$username','$email')";
        $result=mysqli_query($connection,$query);
        print_r($result);
    }

     








?>