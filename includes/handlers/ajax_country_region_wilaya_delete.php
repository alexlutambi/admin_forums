<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['wilaya_delete_counter']); $i++){

    $action = $login_object['wilaya_delete_counter'][$i]['action'];
    $region_id = $login_object['wilaya_delete_counter'][$i]['region_id'];
     $wilaya = $login_object['wilaya_delete_counter'][$i]['wilaya'];
     $wilaya_id = $login_object['wilaya_delete_counter'][$i]['wilaya_id'];
    
  if(mysqli_query($conn,  "DELETE FROM tbl_wilaya WHERE wilaya_id = '$wilaya_id';")){

                  $response_fundi_data = [
            "status"=>"wilaya_successfully",
            "message"=>"wilaya successfully",
            "region_id"=>$region_id,
            "wilaya"=>$wilaya,
             "wilaya_id"=>$wilaya_id
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        
          //product likes total start

    
}else {
    $response_fundi_data = [
            "status"=>"token sub_failed",
            "message"=>"token sub failed, wilaya"
        ];

           $response_fundis[] = $response_fundi_data;
       
}
}
 

return $response_fundis;
}

echo json_encode(get_likes_user($login_object));
?>