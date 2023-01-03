<?php 
    $db_name = 'porto';
    $db_host = 'localhost:3306';
    $db_user = 'root';
    $db_password = '';
    // cria uma conexão
    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

    // verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Falha na coneção: " . $conn->connect_error);
      }
    echo "Conectado com sucesso";
  
?>