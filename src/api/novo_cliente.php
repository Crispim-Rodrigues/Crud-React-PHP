<?php 
    require 'config.php';

    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
        exit();
    }else{
    // variaveis 
    $cliente = $_POST['cliente'];
    $prefixo = $_POST['prefixo'];
    $placa = $_POST['placa'];
    $tipo = $_POST['tipo'];
    $status = $_POST['status'];
    $categoria = $_POST['categoria'];

    // cria a conexão de inserção
    $sql = "INSERT INTO container VALUES(NULL, '{$cliente}', '{$prefixo}', '{$placa}', '{$tipo}', '{$status}', '{$categoria}')";
   
    // cria uma conexão de seleção
    $sql2 = "SELECT * FROM container where `cliente` = '{$cliente}' AND `prefixo` = '{$prefixo}' AND `placa` = '{$placa}' AND `tipo` = '{$tipo}' AND `status`= '{$status}' AND `categoria` = '{$categoria}'";
    
    // resultado da seleção
    $result = $conn->query($sql2);

    // if para ver por meio da seleção se há um cliente igual já criado
    if($result->num_rows === 0){
        // CREATE CLIENTE
        if($conn->query($sql) === TRUE){
            //RETURN CLIENTE ID   
            $last_id = $conn->insert_id;

            // CREATE MOVIMENTAÇÃO
            $sql3 = "INSERT INTO movimentacao VALUES('{$last_id}', '{$cliente}', '', '', '')";
            if($conn->query($sql3) === TRUE){
                // retorno de der tudo certo
                echo 'Cliente Criado com sucesso';
            }else{
                // retorno se o Create movimentção não funcionar
                echo 'Cliente Criado sem movimentação';

            }
        }else{
            // retorno se o Create cliente não funcionar
            echo "Erro na coneção ao criar o cliente";
        }
        

    }else{
        // retorno se o cliente ja existir
        echo "Cliente já existe, por favor crie um cliente diferente";
    
    };
    $conn->close(); 
    };
 

?>