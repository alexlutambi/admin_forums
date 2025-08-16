<?php
$servername = "localhost"; //replace it with your database server name
$username = "root";  //replace it with your database username
  $password = "";  //replace it with your database password
  $dbname = "fundi_forums";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
//database_connection.php
 
 //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
$connect = new PDO("mysql:host=localhost;dbname=fundi_forums", "root", "");


?>