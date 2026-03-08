<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

 $requestPayLoad = file_get_contents("php://input");


$category_object = json_decode($requestPayLoad, true);

function get_register_employee($category_object){
include("../../../database/connection.php");

  $tamarind_users = [];

for($i = 0; $i < count($category_object['reg_user_profile_details']); $i++){

    $professional_id = $category_object['reg_user_profile_details'][$i]['professional_id'];
    $professional_icon = $category_object['reg_user_profile_details'][$i]['professional_icon'];
    $professional_icon_color = $category_object['reg_user_profile_details'][$i]['professional_icon_color'];
    $icon_bgr = $category_object['reg_user_profile_details'][$i]['icon_bgr'];
    $icon_img = $category_object['reg_user_profile_details'][$i]['icon_img'];
     
            $passport_image = get_card_image_path($professional_id, $icon_img);

              for($l = 0; $l < count($icon_bgr); $l++){
              
              $red = $icon_bgr[$l]['red'];
              $green = $icon_bgr[$l]['green'];
              $blue = $icon_bgr[$l]['blue'];
          
              $passport_color = json_encode(array("red"=>$red, "green"=>$green, "blue"=>$blue));
              
            $character = "alexalex".$professional_id.$l.$i;
              $c_pass = $i.$l;
          
              $passport_color_thumb = make_avatar( $professional_id, $c_pass, $red, $green, $blue, $character);
              }
            
              if(mysqli_num_rows(mysqli_query($conn, "SELECT * FROM tbl_fundi_professional WHERE professional_id = '$professional_id' ORDER BY professional_id DESC;")) > 0){
                if(mysqli_query($conn, "UPDATE tbl_fundi_professional SET professional_icon = '$passport_image', professional_icon_color_thumb = '$passport_color_thumb', professional_icon_color = '$passport_color' WHERE professional_id = '$professional_id' ;")){
            
                  //unlink($profile);
                  //unlink($profile_thumb_color);
                 
                    $tamarind_users = get_complete_data($conn, $professional_id);
                    
          }else{
            $tamarind_admin = [
                "code"=>"update_failed",
                "professional_id"=> $professional_id
            ];

            $tamarind_users[] = $tamarind_admin;
          } 
              }else{
                $tamarind_admin = [
                    "code"=>"no_user_available",
                    "professional_id"=> $professional_id
                ];

                $tamarind_users[] = $tamarind_admin;
          } 
              
               

      }
           
    
return $tamarind_users;
}

function make_avatar($professional_id, $c_pass, $red, $green, $blue, $character){
  $name_path = "PCIC_".time().$c_pass.$professional_id .".png";

  $path = "../../assets/images/professional_icons/professional_icons_thumb_color/". $name_path;
 
$red = rand(0, 255);
$green = rand(0, 255);
$blue = rand(0, 255);

  $image = imagecreate(200, 200);

  $color = imagecolorallocate($image, $red, $green, $blue); 

  imagefilledrectangle($image, 0, 0, 719, 575, $color);


  imagepng($image, $path);
  imagedestroy($image);

  return $name_path;
}

function get_card_image_path($professional_id, $icon_img){
  $actualpath = "fundi_forums_icon.png";

      $base_to_php = explode(',', $icon_img);

      $id = "PCI_".time().$professional_id;
$path = "$id.JPG";
$actualpath = $path;

$decodedImage = base64_decode($base_to_php[1]);
 $image_save_path = "../../assets/images/professional_icons/".$id.".JPG";

 include_once("../../assets/images/professional_icons/image_uploading_resolution.php");

  

  return $actualpath;
}
function get_complete_data($conn, $professional_id){
  $response_fundis = [];


 
 
        $sql_image = "SELECT * FROM tbl_fundi_professional WHERE professional_id = '$professional_id' ORDER BY professional_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_professionals=mysqli_fetch_array($result_image)){
       
                  $response_fundi_data = [
            "status"=>"craft_successfully",
            "message"=>"craft successfully",
            "professional_id"=>$row_professionals[0],"professional"=>$row_professionals[1],
	"is_active"=>$row_professionals[2],"professional_hint"=>$row_professionals[3],"professional_header"=>$row_professionals[4],
	"professional_btn"=>$row_professionals[5],"professional_icon"=>$row_professionals[6],"professional_icon_color_thumb"=>$row_professionals[7],"professional_icon_color"=>$row_professionals[8],"created"=>$row_professionals[9]
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        }
// Location shop employee ends

    return $response_fundis;
}



echo json_encode(get_register_employee($category_object));

?>
