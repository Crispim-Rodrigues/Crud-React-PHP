<?php 
    header('Access-Control-Allow-Origin: *');
    $db_name = 'porto';
    $db_host = 'localhost:3306';
    $db_user = 'root';
    $db_password = '';
    // cria uma conexão
    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
?>