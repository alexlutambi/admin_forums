<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['craft_hint']); $i++){

    $action = $login_object['craft_hint'][$i]['action'];
    $professional_id = $login_object['craft_hint'][$i]['professional_id'];

  if(mysqli_query($conn,  "DELETE FROM tbl_fundi_professional WHERE professional_id = '$professional_id';") && 
mysqli_query($conn,  "DELETE FROM tbl_fundi_vifaa_aina WHERE professional_id = '$professional_id';")){

                  $response_fundi_data = [
            "status"=>"craft_successfully",
            "message"=>"craft successfully",
            "professional_id"=>$professional_id
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        
          //product likes total starts
     
    }else {
        $response_fundi_data = [
            "status"=>"token sub_failed",
            "message"=>"token sub failed"
        ];

           $response_fundis[] = $response_fundi_data;
       
    }

    
}

return $response_fundis;
}

echo json_encode(get_likes_user($login_object));
?>