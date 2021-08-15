<?php

require ('connection.php');

header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$id=file_get_contents('php://input');

$idvalue=json_decode($id);

$query='DELETE FROM `user` WHERE id='.$idvalue;
$res=mysqli_query($connection,$query);
print_r($res);

if($res){
    // echo 'successful deletion';
}else{
    // echo 'deletion not successful!';
}


?>