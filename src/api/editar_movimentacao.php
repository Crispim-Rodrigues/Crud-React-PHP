<?php 
    require 'config.php';


    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
        exit();
    }else{

        $id = $_POST['id'];
        $movimentacao = $_POST['movimentacao'];
        $datainicio = $_POST['datainicio'];
        $datafim = $_POST['datafim'];

        // Editar

        $sql = "UPDATE movimentacao SET movimentacao = '{$movimentacao}', `data inicio` = '{$datainicio}', `data final` = '{$datafim}' where `id` = '{$id}'";
        if($conn->query($sql) === TRUE){
            header("Location: index.php");
        }else{
            header("Location: editar_movimentacao.php");
        };




    };

?>