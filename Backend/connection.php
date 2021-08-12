<?php

$server='localhost';
$user='root';
$password='';
$database='exam';

$connection = new mysqli($server,$user,$password,$database);

if($connection->connect_error){
    if($mysqli->connect_errno){
        echo ("database connection failed!   error number : "+$mysqli->connect_errno);
        exit();
    }else{
        echo ('hellooooooo');
    }
}

?>