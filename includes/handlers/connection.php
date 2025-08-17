<?php
$servername = "localhost"; //replace it with your database server name
$username = "fund_fundishop_user";  //replace it with your database username
  $password = "20fundiForums@25#alisketech";  //replace it with your database password
  $dbname = "fund_fundishop_db";

// Create connection
$connn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
//database_connection.php
 
 //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
$connnect = new PDO("mysql:host=localhost;dbname=fund_fundishop_db", "fund_fundishop_user", "fundishop_password");


?>