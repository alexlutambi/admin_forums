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
    $wilaya = $login_object['wilaya_hint'][$i]['wilaya'];
  $region_id = $login_object['wilaya_hint'][$i]['region_id'];
$wilaya_id = $login_object['wilaya_hint'][$i]['wilaya_id'];
    

    if(mysqli_query($conn, "UPDATE tbl_wilaya SET wilaya = '$wilaya' WHERE wilaya_id = '$wilaya_id';")){
                 

        $sql_image = "SELECT * FROM tbl_wilaya WHERE wilaya_id = '$wilaya_id' ORDER BY wilaya_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_countries=mysqli_fetch_array($result_image)){
       
                  $response_fundi_data = [
            "status"=>"wilaya_successfully",
            "message"=>"wilaya successfully",
            "wilaya_id"=>$row_countries[0],"region_id"=>$row_countries[1],
	"wilaya"=>$row_countries[2],"created"=>$row_countries[3],"is_mall"=>$row_countries[4],"is_active"=>$row_countries[5]
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