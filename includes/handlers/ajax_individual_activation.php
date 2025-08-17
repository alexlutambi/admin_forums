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
    $mteja_id = $login_object['activation_hint'][$i]['mteja_id'];
  $mteja_status = $login_object['activation_hint'][$i]['mteja_status'];
    
     
    if(mysqli_query($connn, "UPDATE tbl_wateja SET mteja_status = '$mteja_status' WHERE mteja_id = '$mteja_id';")){
                    
  
        $sql_image = "SELECT * FROM tbl_wateja WHERE mteja_id = '$mteja_id' ORDER BY mteja_id ASC;";		
             
        $result_image = mysqli_query($connn, $sql_image);
        
        while($row_image_data=mysqli_fetch_array($result_image)){
           $image_sub_hint = $row_image_data[7];
       
       
                  $response_fundi_data = [
            "status"=>"activation_successfully",
            "message"=>"activation successfully",
           "mteja_id"=>$row_image_data[0], "mteja_status"=>$row_image_data[8]
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