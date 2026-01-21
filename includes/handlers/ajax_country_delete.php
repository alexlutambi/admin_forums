<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['craft_delete_counter']); $i++){

    $action = $login_object['craft_delete_counter'][$i]['action'];
    $country_id = $login_object['craft_delete_counter'][$i]['country_id'];
    
  if(mysqli_query($conn,  "DELETE FROM tbl_wilaya WHERE region_id IN(SELECT region_id FROM tbl_regions WHERE country_id = '$country_id');")){

 if(mysqli_query($conn,  "DELETE FROM tbl_countries WHERE country_id = '$country_id';") && 
mysqli_query($conn,  "DELETE FROM tbl_regions WHERE country_id = '$country_id';")){

                  $response_fundi_data = [
            "status"=>"country_successfully",
            "message"=>"country successfully",
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