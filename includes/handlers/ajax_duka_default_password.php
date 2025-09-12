<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['default_password_hint']); $i++){

    $action = $login_object['default_password_hint'][$i]['action'];
    $duka_id = $login_object['default_password_hint'][$i]['duka_id'];
 $default_password = $login_object['default_password_hint'][$i]['default_password'];
    	
	$duka_password = escape($login_object['default_password_hint'][$i]['default_password']);
    $duka_password = password_hash($duka_password, PASSWORD_BCRYPT, array('cost'=>12));
     
    if(mysqli_query($conn, "UPDATE tbl_maduka SET duka_password = '$duka_password' WHERE duka_id = '$duka_id';")){
                    
  
        $sql_image = "SELECT * FROM tbl_maduka WHERE duka_id = '$duka_id' ORDER BY duka_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_image_data=mysqli_fetch_array($result_image)){
           $image_sub_hint = $row_image_data[7];
       
       
                  $response_fundi_data = [
         "status"=>"default_password_successfully",
            "message"=>"Changed successfully",
            "default_password"=>$default_password,
           "duka_id"=>$row_image_data[0], "duka_status"=>$row_image_data[10]
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        }
          //product likes total starts
     
    }else {
        $response_fundi_data = [
            "status"=>"activation_failed",
            "message"=>"activation failed"
        ];

           $response_fundis[] = $response_fundi_data;
       
    }

    
}

return $response_fundis;
}

echo json_encode(get_likes_user($login_object));
// ************************function starts***********************

function clean($string) {


return htmlentities($string);


}
function escape($string) {

	global $conn;

	return mysqli_real_escape_string($conn, $string);


}
?>