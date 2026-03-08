<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

<<<<<<< HEAD
 $requestPayLoad = file_get_contents("php://input");


$category_object = json_decode($requestPayLoad, true);

=======
>>>>>>> e0991101553c9bbc799074abd8b24991c2fd7271
function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['craft_hint']); $i++){

    $action = $login_object['craft_hint'][$i]['action'];
  $professional = $login_object['craft_hint'][$i]['professional'];
     $professional_hint = $login_object['craft_hint'][$i]['professional_hint'];
 $professional_btn = $login_object['craft_hint'][$i]['professional_btn'];
  $professional_header = $login_object['craft_hint'][$i]['professional_header'];
<<<<<<< HEAD
  $response_craft_icon = $login_object['craft_hint'][$i]['response_craft_icon'];

=======
>>>>>>> e0991101553c9bbc799074abd8b24991c2fd7271
    if(mysqli_query($conn, "INSERT INTO tbl_fundi_professional(professional, is_active, professional_hint, professional_header, professional_btn) VALUES('$professional', 1, '$professional_hint', '$professional_header', '$professional_btn')")){

        $sql_image = "SELECT * FROM tbl_fundi_professional WHERE professional = '$professional' ORDER BY professional_id ASC;";		
             
        $result_image = mysqli_query($conn, $sql_image);
        
        while($row_professionals_new=mysqli_fetch_array($result_image)){
<<<<<<< HEAD

           $professional_id = $row_professionals_new[0];
    
for($x = 0; $x < count($response_craft_icon); $x++){

    $admin_id = $response_craft_icon[$x]['admin_id'];
    $icon_bgr = $response_craft_icon[$x]['icon_bgr'];
    $icon_img = $response_craft_icon[$x]['icon_img'];

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
            
              if(mysqli_query($conn, "UPDATE tbl_fundi_professional SET professional_icon = '$passport_image', professional_icon_color_thumb = '$passport_color_thumb', professional_icon_color = '$passport_color' WHERE professional_id = '$professional_id' ;")){
            
                  //unlink($profile);
                  //unlink($profile_thumb_color);
                 
                     $response_fundi_data = [
=======
          
                  $response_fundi_data = [
>>>>>>> e0991101553c9bbc799074abd8b24991c2fd7271
            "status"=>"craft_successfully",
            "message"=>"craft successfully",
           "professional_id"=>$row_professionals_new[0],"professional"=>$row_professionals_new[1],
	"is_active"=>$row_professionals_new[2],"professional_hint"=>$row_professionals_new[3],"professional_header"=>$row_professionals_new[4],
<<<<<<< HEAD
	"professional_btn"=>$row_professionals_new[5],"professional_icon"=>$row_professionals_new[6],"professional_icon_color_thumb"=>$row_professionals_new[7],"professional_icon_color"=>$row_professionals_new[8],"created"=>$row_professionals_new[9]
          ];
       
         $response_fundis[] = $response_fundi_data;
                    
          }else{
            $response_fundi_data = [
                "code"=>"update_failed",
                "professional_id"=> $professional_id
            ];
    $response_fundis[] = $response_fundi_data;
                 
}
}
               
=======
	"professional_btn"=>$row_professionals_new[5],"created"=>$row_professionals_new[6]
          ];
       
         $response_fundis[] = $response_fundi_data;
>>>>>>> e0991101553c9bbc799074abd8b24991c2fd7271
       
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

<<<<<<< HEAD
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
=======
>>>>>>> e0991101553c9bbc799074abd8b24991c2fd7271
echo json_encode(get_likes_user($login_object));
?>