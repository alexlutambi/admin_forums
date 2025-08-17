<?php
sleep(2);
include("connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['activation_hint']); $i++){

    $action = $login_object['activation_hint'][$i]['action'];
    $fundi_id = $login_object['activation_hint'][$i]['fundi_id'];
  $fundi_status = $login_object['activation_hint'][$i]['fundi_status'];
    
     
    if(mysqli_query($connn, "UPDATE tbl_mafundi SET fundi_status = '$fundi_status' WHERE fundi_id = '$fundi_id';")){
                    
  
        $sql_image = "SELECT * FROM tbl_mafundi WHERE fundi_id = '$fundi_id' ORDER BY fundi_id ASC;";		
             
        $result_image = mysqli_query($connn, $sql_image);
        
        while($row_image_data=mysqli_fetch_array($result_image)){
           $image_sub_hint = $row_image_data[7];
       
       
                  $response_fundi_data = [
            "status"=>"activation_successfully",
            "message"=>"activation successfully",
           "fundi_id"=>$row_image_data[0], "fundi_status"=>$row_image_data[10]
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
?>