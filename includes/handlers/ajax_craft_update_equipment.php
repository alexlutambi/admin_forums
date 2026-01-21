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
    $kifaa_aina_id = $login_object['craft_hint'][$i]['kifaa_aina_id'];
  $aina_kifaa = $login_object['craft_hint'][$i]['aina_kifaa'];
  
    if(mysqli_query($conn, "UPDATE tbl_fundi_vifaa_aina SET aina_kifaa = '$aina_kifaa' WHERE kifaa_aina_id = '$kifaa_aina_id';")){
                 

        $sql_image = "SELECT * FROM tbl_fundi_vifaa_aina WHERE kifaa_aina_id = '$kifaa_aina_id' ORDER BY kifaa_aina_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_professionals=mysqli_fetch_array($result_image)){
   
                  $response_fundi_data = [
            "status"=>"craft_successfully",
            "message"=>"craft successfully",
           "kifaa_aina_id"=>$row_professionals[0],"professional_id"=>$row_professionals[1],
	"aina_kifaa"=>$row_professionals[2],"is_active"=>$row_professionals[3]
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