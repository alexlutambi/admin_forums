<?php
ob_start(); //Turns on output buffering 
session_start();

$timezone = date_default_timezone_set("Europe/London");
$servername = "localhost"; //replace it with your database server name
$username = "fund_fundishop_user";  //replace it with your database username
  $password = "20fundiForums@25#alisketech";  //replace it with your database password
  $dbname = "fund_fundishop_db";

$con = mysqli_connect($servername, $username, $password, $dbname); //Connection variable

if(mysqli_connect_errno()) 
{
	echo "Failed to connect: " . mysqli_connect_errno();
}

?>