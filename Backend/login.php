<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Content-Type');

require('connection.php');

$dataset=file_get_contents('php://input');
echo $dataset;

if(!empty($dataset)){
    $data=json_decode($dataset);
}


?>