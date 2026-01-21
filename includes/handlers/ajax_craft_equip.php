<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

    $tamarind_customer_request_container_colors = array();
       
for($i = 0; $i < count($login_object['craft_hint']); $i++){

    $action = $login_object['craft_hint'][$i]['action'];
    $admin_id = $login_object['craft_hint'][$i]['admin_id'];
      $professional_id = $login_object['craft_hint'][$i]['professional_id'];

    //   GET COLOR DATA STARTS

$sql_customer_request_color = " SELECT * FROM tbl_fundi_vifaa_aina WHERE professional_id = '$professional_id' ORDER BY kifaa_aina_id DESC;";
$result_customer_request_color = mysqli_query($conn, $sql_customer_request_color);

$tamarind_customer_request_colors = array();

$total_container = ceil(mysqli_num_rows($result_customer_request_color)/6);

$remained_color = mysqli_num_rows($result_customer_request_color) % 6;
$total_available_color = mysqli_num_rows($result_customer_request_color);

$container_count = 0;
$color_count = 0;
$display_limit = 6;
$more_container = 'containers-unavailable';

if($total_container > 1){
$more_container = 'containers-available';
}
while($row_professionals =mysqli_fetch_array($result_customer_request_color)){
$color_count = $color_count + 1;

array_push($tamarind_customer_request_colors, array(
            "kifaa_aina_id"=>$row_professionals[0],"professional_id"=>$row_professionals[1],
	"aina_kifaa"=>$row_professionals[2],"is_active"=>$row_professionals[3]));

if($color_count == $display_limit){

  $is_last = false;
  $color_count = 0;
  $container_count = $container_count + 1;
  if($container_count == ($total_container - 1)){

    if($remained_color > 0){
      $display_limit = $remained_color;
      
    }
    
  }

  if($container_count == $total_container){
    $is_last = true;
  }
  array_push($tamarind_customer_request_container_colors, array(
    "is_last"=>$is_last, "more_container"=>$more_container,
    "container_id"=>$container_count, "total_container"=>$total_container,
    "container_data"=>json_encode($tamarind_customer_request_colors)));

  $tamarind_customer_request_colors = array();
}else{


  $is_last = true;
  if($color_count == $total_available_color){
   
array_push($tamarind_customer_request_container_colors, array(
      "is_last"=>$is_last, "more_container"=>$more_container,
      "container_id"=>1, "total_container"=>1,
      "container_data"=>json_encode($tamarind_customer_request_colors)));

  }
  
}

}
// GET COLOR DATA ENDS
    
}

return $tamarind_customer_request_container_colors;
}
echo json_encode(get_likes_user($login_object));
?>