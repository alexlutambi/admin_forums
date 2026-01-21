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
    $country_id = $login_object['country_hint'][$i]['country_id'];
  $country_name = $login_object['country_hint'][$i]['country_name'];
$name_code = $login_object['country_hint'][$i]['name_code'];
     
    if(mysqli_query($conn, "UPDATE tbl_countries SET country_name = '$country_name', name_code = '$name_code' WHERE country_id = '$country_id';")){
                 

        $sql_image = "SELECT * FROM tbl_countries WHERE country_id = '$country_id' ORDER BY country_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_countries=mysqli_fetch_array($result_image)){
       
                  $response_fundi_data = [
            "status"=>"country_successfully",
            "message"=>"country successfully",
           "country_id"=>$row_countries[0],"country_name"=>$row_countries[1],
	"is_active"=>$row_countries[2],"created"=>$row_countries[3],"name_code"=>$row_countries[4]
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        }
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