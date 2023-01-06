<?php  
    require 'config.php';


    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
        exit();
    }else{
    // variaveis
    $id = $_POST['id'];
    $cliente = $_POST['cliente'];
    $prefixo = $_POST['prefixo'];
    $placa = $_POST['placa'];
    $tipo = $_POST['tipo'];
    $status = $_POST['status'];
    $categoria = $_POST['categoria'];
    
    // comandos mysql
    $sql = "UPDATE container SET cliente = '{$cliente}', prefixo = '{$prefixo}', placa = '{$placa}', tipo = '{$tipo}', `status` = '{$status}', categoria = '{$categoria}' WHERE `id` = '{$id}'";
    $sql2 = "UPDATE movimentacao SET cliente = '{$cliente}' WHERE `id` = '{$id}'";
    
    // if com execução e verificação
    if($conn->query($sql) === TRUE AND $conn->query($sql2) === TRUE){
        echo 'Cliente editado com sucesso';
    }else{
        echo 'Ocorreu um erro na edição';
    };
    };

?>