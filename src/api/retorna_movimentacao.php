<?php 
    require 'config.php';
    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
        exit();
    }else{
        // data que será enviada
        $data = array();
        // faz a consulta do tabela
        $sql = "SELECT * FROM movimentacao";
        // resultado da conexão
        $result = $conn->query($sql);
        // se o resultado for maior que zero
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $data[] = $row;
            };
        };

        header('Content-Type: application/json');
        echo json_encode($data);
    };

?>