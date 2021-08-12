<?php

header('Access-Control-Allow-Origin:*');

require('connection.php');

$query=mysqli_query($connection, 'select id,name,email,createdTime from user');
$datarows=array();

    while($x=mysqli_fetch_assoc($query)){
        $datarows[]=$x;
    }
echo json_encode($datarows);

?>