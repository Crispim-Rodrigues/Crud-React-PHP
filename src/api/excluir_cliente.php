<?php 
    require 'config.php';
    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
        exit();
    }else{

        $id = $_POST['id'];

        $sql = "DELETE FROM container where id='{$id}'";

        if($conn->query($sql) === TRUE){
            echo 'excluido com sucesso';
        };
    };
?>