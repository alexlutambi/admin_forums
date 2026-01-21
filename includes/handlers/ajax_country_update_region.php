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
$regions = $login_object['region_hint'][$i]['regions'];
    

    if(mysqli_query($conn, "UPDATE tbl_regions SET regions = '$regions' WHERE region_id = '$region_id';")){
                 

        $sql_image = "SELECT * FROM tbl_regions WHERE region_id = '$region_id' ORDER BY region_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_countries=mysqli_fetch_array($result_image)){
       
                  $response_fundi_data = [
            "status"=>"region_successfully",
            "message"=>"region successfully",
            "region_id"=>$row_countries[0],"regions"=>$row_countries[1],
	"country_id"=>$row_countries[2],"is_active"=>$row_countries[4]
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