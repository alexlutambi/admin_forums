<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['token_add_hint']); $i++){

    $action = $login_object['token_add_hint'][$i]['action'];
    $mteja_id = $login_object['token_add_hint'][$i]['mteja_id'];
  $total_new_token = $login_object['token_add_hint'][$i]['total_new_token'];
    
     
    if(mysqli_query($conn, "UPDATE tbl_mteja_kazi_jumla SET total_token = '$total_new_token' WHERE mteja_id = '$mteja_id';")){
                    
  
        $sql_image = "SELECT * FROM tbl_mteja_kazi_jumla WHERE mteja_id = '$mteja_id' ORDER BY mteja_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_image_data=mysqli_fetch_array($result_image)){
       
                  $response_fundi_data = [
            "status"=>"token_add_successfully",
            "message"=>"token add successfully",
           "mteja_id"=>$row_image_data[1], "total_token"=>$row_image_data[2]
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        }
          //product likes total starts
     
    }else {
        $response_fundi_data = [
            "status"=>"token add_failed",
            "message"=>"token add failed"
        ];

           $response_fundis[] = $response_fundi_data;
       
    }

    
}

return $response_fundis;
}

echo json_encode(get_likes_user($login_object));
?>