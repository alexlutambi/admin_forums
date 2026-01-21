<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['wilaya_hint']); $i++){

    $action = $login_object['wilaya_hint'][$i]['action'];
  $region_id = $login_object['wilaya_hint'][$i]['region_id'];
     $wilaya = $login_object['wilaya_hint'][$i]['wilaya'];
     $country_id = $login_object['wilaya_hint'][$i]['country_id'];
     $regions = $login_object['wilaya_hint'][$i]['regions'];
     
    if(mysqli_query($conn, "INSERT INTO tbl_wilaya(region_id, wilaya) VALUES('$region_id', '$wilaya')")){

                  $response_fundi_data = [
            "status"=>"wilaya_successfully",
            "message"=>"wilaya successfully",
            "region_id"=>$region_id,
            "country_id"=>$country_id,
            "regions"=>$regions
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