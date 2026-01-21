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
  $professional = $login_object['craft_hint'][$i]['professional'];
     $professional_hint = $login_object['craft_hint'][$i]['professional_hint'];
 $professional_btn = $login_object['craft_hint'][$i]['professional_btn'];
  $professional_header = $login_object['craft_hint'][$i]['professional_header'];
    if(mysqli_query($conn, "INSERT INTO tbl_fundi_professional(professional, is_active, professional_hint, professional_header, professional_btn) VALUES('$professional', 1, '$professional_hint', '$professional_header', '$professional_btn')")){

        $sql_image = "SELECT * FROM tbl_fundi_professional WHERE professional = '$professional' ORDER BY professional_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_professionals_new=mysqli_fetch_array($result_image)){
          
                  $response_fundi_data = [
            "status"=>"craft_successfully",
            "message"=>"craft successfully",
           "professional_id"=>$row_professionals_new[0],"professional"=>$row_professionals_new[1],
	"is_active"=>$row_professionals_new[2],"professional_hint"=>$row_professionals_new[3],"professional_header"=>$row_professionals_new[4],
	"professional_btn"=>$row_professionals_new[5],"created"=>$row_professionals_new[6]
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