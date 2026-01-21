<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['region_hint']); $i++){

    $action = $login_object['region_hint'][$i]['action'];
    $country_id = $login_object['region_hint'][$i]['country_id'];
       $region_id = $login_object['region_hint'][$i]['region_id'];
    
  if(mysqli_query($conn,  "DELETE FROM tbl_wilaya WHERE region_id = '$region_id';")){

 if(mysqli_query($conn,  "DELETE FROM tbl_regions WHERE region_id = '$region_id';")){

                  $response_fundi_data = [
            "status"=>"region_successfully",
            "message"=>"region successfully",
            "region_id"=>$region_id,
             "country_id"=>$country_id
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