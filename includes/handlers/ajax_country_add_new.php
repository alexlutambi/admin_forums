<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['country_hint']); $i++){

    $action = $login_object['country_hint'][$i]['action'];
  $admin_id = $login_object['country_hint'][$i]['admin_id'];
     $country = $login_object['country_hint'][$i]['country'];
$name_code = $login_object['country_hint'][$i]['name_code'];
     
    if(mysqli_query($conn, "INSERT INTO tbl_countries(country_name, name_code) VALUES('$country', '$name_code')")){

                  $response_fundi_data = [
            "status"=>"country_successfully",
            "message"=>"country successfully"
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