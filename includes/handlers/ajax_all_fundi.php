<?php

  // You can simulate a slow server with sleep
   sleep(2);
   $requestPayLoad = file_get_contents("php://input");
   $users_object = json_decode($requestPayLoad, true);


  // Typically, this would be a call to a database
  function find_tamarind_shops($container_size, $page, $shops_code, $screen_size_style) {
	  include("connection.php");
	  $per_page = 3;
   

	  $sql_home_total_results = "SELECT *, IF((tbl_shop_location.location_id IN(SELECT location_id FROM tbl_shop_premier_plan WHERE premier_category_id = 5 AND 
    plan_id IN(SELECT plan_id FROM 
    tbl_shop_premier_limit WHERE (DATEDIFF(end_time, NOW()) > 0))) OR (DATEDIFF(NOW() , tbl_shop_location.created) <= 
    (SELECT days FROM tbl_admin_premier_extension LIMIT 0 , 1))), (SELECT COUNT(*) FROM tbl_customer_pro_like), (SELECT COUNT(*) FROM tbl_customer_pro_like WHERE 
    pid IN(SELECT pid FROM tbl_product_location WHERE location_id = tbl_shop_location.location_id))) AS shop_power_level FROM tbl_shop_location INNER JOIN 
    tbl_countries ON tbl_shop_location.country_id = tbl_countries.country_id INNER JOIN
     tbl_regions ON tbl_regions.region_id = tbl_shop_location.region_id INNER JOIN
     tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_shop_location.wilaya_id INNER JOIN tbl_shop_admin ON 
     tbl_shop_admin.uid = tbl_shop_location.uid INNER JOIN tbl_shop_location_shop_name ON tbl_shop_location_shop_name.location_id = tbl_shop_location.location_id WHERE tbl_shop_location.location_id NOT IN(SELECT location_id FROM tbl_shop_location_deactivate) AND ((SELECT COUNT(*) FROM tbl_product WHERE pid IN(SELECT pid FROM tbl_product_location WHERE location_id = tbl_shop_location.location_id)) > 0) AND 
     tbl_shop_admin.activation = 1 ORDER BY shop_power_level DESC;";		
	
	  $result_home_total_results = mysqli_query($conn, $sql_home_total_results);
	  $number_of_results = mysqli_num_rows($result_home_total_results);

//number of total pages available
$number_of_pages = ceil($number_of_results/$per_page);

//determine the sql LIMIT starting number for the results on the displaying page
$this_page_first_result = ($page-1)*$per_page;
//retrieve selected results from database and display them on page

//check remaining pages
$remained_pages = $number_of_pages - $page;

$sql_home = "SELECT *, IF((tbl_shop_location.location_id IN(SELECT location_id FROM tbl_shop_premier_plan WHERE premier_category_id = 5 AND 
plan_id IN(SELECT plan_id FROM 
tbl_shop_premier_limit WHERE (DATEDIFF(end_time, NOW()) > 0))) OR (DATEDIFF(NOW() , tbl_shop_location.created) <= 
(SELECT days FROM tbl_admin_premier_extension LIMIT 0 , 1))), (SELECT COUNT(*) FROM tbl_customer_pro_like), (SELECT COUNT(*) FROM tbl_customer_pro_like WHERE 
pid IN(SELECT pid FROM tbl_product_location WHERE location_id = tbl_shop_location.location_id))) AS shop_power_level FROM tbl_shop_location INNER JOIN 
tbl_countries ON tbl_shop_location.country_id = tbl_countries.country_id INNER JOIN
 tbl_regions ON tbl_regions.region_id = tbl_shop_location.region_id INNER JOIN
 tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_shop_location.wilaya_id INNER JOIN tbl_shop_admin ON 
 tbl_shop_admin.uid = tbl_shop_location.uid INNER JOIN tbl_shop_location_shop_name ON tbl_shop_location_shop_name.location_id = tbl_shop_location.location_id WHERE tbl_shop_location.location_id NOT IN(SELECT location_id FROM tbl_shop_location_deactivate) AND ((SELECT COUNT(*) FROM tbl_product WHERE pid IN(SELECT pid FROM tbl_product_location WHERE location_id = tbl_shop_location.location_id)) > 0) AND 
 tbl_shop_admin.activation = 1 ORDER BY shop_power_level DESC LIMIT ".$this_page_first_result.','.$per_page.";";		

	$result_home = mysqli_query($conn, $sql_home);

    $tamarind_shops = [];
    
    // This is our "fake" database
    while($row_home_data=mysqli_fetch_array($result_home)){
      
      $location_id = $row_home_data[0];
//get shop products starts
   
     
      $tamarind_shop = [
        'page'=>$page,
        'number_of_pages' => $number_of_pages,
        'remained_pages' => $remained_pages,
        'location_id' => $row_home_data[0],
        'uid' => $row_home_data[25],
        'seller_id' => $row_home_data[26],
        'shopname' => $row_home_data[32],
    'profile' => $row_home_data[33],
    'activation' => $row_home_data[36],
    'ratings' => $row_home_data[38],
    'wilaya' => $row_home_data[21],
    'region' => $row_home_data[15],
    'shop_name' => $row_home_data[43],
    'response_shop_top_products' => json_encode(get_location_top_products($conn, $row_home_data[0], $container_size, $screen_size_style)),
    'response_shop_new_products' => json_encode(get_location_new_products($conn, $row_home_data[0], $container_size, $screen_size_style, get_top_products_pid($conn, $row_home_data[0], $screen_size_style)))
      
  ];

      $tamarind_shops[] = $tamarind_shop;

      

    }
    return $tamarind_shops;
  }
  // PROMOTION DATA STARTS
  function find_tamarind_ads($users_object, $page, $container_size) {
	  include("connection.php");
	  $per_page = 10;
  
    $filter_seen_promo_array = get_filter_seen_promo($conn, $users_object);

	  $sql_home_total_results = "SELECT * FROM tbl_product INNER JOIN tbl_product_name ON 
    tbl_product_name.product_name_id = tbl_product.product_name_id INNER JOIN tbl_shop_product_type ON 
    tbl_shop_product_type.product_type_id = tbl_product.product_type_id INNER JOIN tbl_categories_type ON 
    tbl_categories_type.categories_type_id = tbl_shop_product_type.categories_type_id INNER JOIN tbl_product_location ON 
    tbl_product_location.pid = tbl_product.pid INNER JOIN tbl_shop_location_shop_name ON 
    tbl_shop_location_shop_name.location_id = tbl_product_location.location_id WHERE tbl_product.pid NOT IN('$filter_seen_promo_array') AND tbl_product.pid IN(SELECT pid FROM tbl_images WHERE pid IN(SELECT pid FROM 
     tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND is_active = 1 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan 
     WHERE view_id = tbl_splash_promotion.view_id))) ORDER BY tbl_product.pid DESC;";		
	
	  $result_home_total_results = mysqli_query($conn, $sql_home_total_results);
	  $number_of_results = mysqli_num_rows($result_home_total_results);

//number of total pages available
$number_of_pages = ceil($number_of_results/$per_page);

//determine the sql LIMIT starting number for the results on the displaying page
$this_page_first_result = ($page-1)*$per_page;
//retrieve selected results from database and display them on page

//check remaining pages
$remained_pages = $number_of_pages - $page;

$sql_home = "SELECT * FROM tbl_product INNER JOIN tbl_product_name ON 
tbl_product_name.product_name_id = tbl_product.product_name_id INNER JOIN tbl_shop_product_type ON 
tbl_shop_product_type.product_type_id = tbl_product.product_type_id INNER JOIN tbl_categories_type ON 
tbl_categories_type.categories_type_id = tbl_shop_product_type.categories_type_id INNER JOIN tbl_product_location ON 
tbl_product_location.pid = tbl_product.pid INNER JOIN tbl_shop_location_shop_name ON 
tbl_shop_location_shop_name.location_id = tbl_product_location.location_id WHERE tbl_product.pid NOT IN('$filter_seen_promo_array') AND tbl_product.pid IN(SELECT pid FROM tbl_images WHERE pid IN(SELECT pid FROM 
 tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND is_active = 1 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan 
 WHERE view_id = tbl_splash_promotion.view_id))) ORDER BY tbl_product.pid DESC LIMIT ".$this_page_first_result.','.$per_page.";";		

	$result_home = mysqli_query($conn, $sql_home);

    $tamarind_shops = [];
    
    // This is our "fake" database
   
    while($row_home_data=mysqli_fetch_array($result_home)){
      $location_id = $row_home_data[27];
      $pid = $row_home_data[0];
      if(mysqli_query($conn, "UPDATE tbl_product_views SET seen = ((SELECT seen FROM tbl_product_views WHERE pid = '$pid' + 1) WHERE pid = '$pid';")){
      }
      update_rotate_promotion($conn);
//get shop products starts

//feature image starts
$sql_product_feature_image_data = " SELECT * FROM tbl_images WHERE pid = '".$pid."' AND product_order = 1 ORDER BY product_order ASC;";
$result_product_feature_image_data = mysqli_query($conn, $sql_product_feature_image_data);

$response_products_feature_image = [];

while($row_shop_product_feature_data =mysqli_fetch_array($result_product_feature_image_data)){

  $tamarind_product_feature_data = [
     "image_id"=>$row_shop_product_feature_data[0], "pid"=>$row_shop_product_feature_data[1],
     "image_url"=>$row_shop_product_feature_data[2], "product_order"=>$row_shop_product_feature_data[3],
     "offer_id"=>$row_shop_product_feature_data[4], "upload_code"=>$row_shop_product_feature_data[5],
     "image_likes"=>$row_shop_product_feature_data[6], "image_hint"=>$row_shop_product_feature_data[7],
     "image_color_thumb"=>$row_shop_product_feature_data[8], "image_rgb"=>json_encode($row_shop_product_feature_data[9])
  ];

  $response_products_feature_image[] = $tamarind_product_feature_data;

 
}
//feature image ends

$sql_product_image_data = " SELECT * FROM tbl_images WHERE pid = '".$pid."' ORDER BY product_order ASC;";
$result_product_image_data = mysqli_query($conn, $sql_product_image_data);

$response_products_image = [];

while($row_shop_product_data =mysqli_fetch_array($result_product_image_data)){

  $tamarind_product_data = [
     "image_id"=>$row_shop_product_data[0],"pid"=>$row_shop_product_data[1],
     "image_url"=>$row_shop_product_data[2],"product_order"=>$row_shop_product_data[3],
     "offer_id"=>$row_shop_product_data[4], "upload_code"=>$row_shop_product_data[5],
     "image_likes"=>$row_shop_product_data[6], "image_hint"=>$row_shop_product_data[7],
     "image_color_thumb"=>$row_shop_product_data[8], "image_rgb"=>json_encode($row_shop_product_data[9])
  ];

  $response_products_image[] = $tamarind_product_data;

 
}
  //get shop products ends


//SHOP PROMO LOCATION STARTS

  $sql_product_image_data = "SELECT * FROM tbl_shop_location INNER JOIN 
  tbl_countries ON tbl_shop_location.country_id = tbl_countries.country_id INNER JOIN
   tbl_regions ON tbl_regions.region_id = tbl_shop_location.region_id INNER JOIN
   tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_shop_location.wilaya_id WHERE tbl_shop_location.location_id NOT IN(SELECT location_id FROM tbl_shop_location_deactivate) AND tbl_shop_location.location_id = '$location_id' ORDER BY location_id ASC;";
  $result_product_image_data = mysqli_query($conn, $sql_product_image_data);
  
  $response_shop_location = [];
  
  while($row_shop_product_data =mysqli_fetch_array($result_product_image_data)){
  
    $response_shop_location_data = [
      'location_id' => $row_shop_product_data[0],
      'place' => $row_shop_product_data[5],
      'country_name' => $row_shop_product_data[10],
      'wilaya' => $row_shop_product_data[21],
      'region' => $row_shop_product_data[15]
    ];
  
    $response_shop_location[] = $response_shop_location_data;
  
   
  }
//SHOP PROMO LOCATION ENDS

  //SHOP PROMO CONTACT STARTS
  $sql_shop_contact_data = " SELECT * FROM tbl_shop_location_contact WHERE location_id = '$location_id' ORDER BY contact_id ASC;";
  $result_shop_contact_data = mysqli_query($conn, $sql_shop_contact_data);
  
  $response_shop_contact = [];
  
  while($row_shop_contact_data =mysqli_fetch_array($result_shop_contact_data)){
  
    $location_id = $row_shop_contact_data[1];

    
     $email = mysqli_fetch_array(mysqli_query($conn, " SELECT email FROM tbl_customer WHERE customer_id IN(SELECT seller_id FROM tbl_shop_admin 
     WHERE uid IN(SELECT uid FROM tbl_shop_location WHERE location_id = '$location_id')) ORDER BY customer_id DESC;"))[0];	
  
    $response_shop_contact_data = [
       "contact_id"=>$row_shop_contact_data[0],"location_id"=>$row_shop_contact_data[1],
       "contact"=>$row_shop_contact_data[2],"facebook"=>$row_shop_contact_data[3],
       "instagram"=>$row_shop_contact_data[4], "whatsapp"=>$row_shop_contact_data[5],
       "website"=>$row_shop_contact_data[6], "name_code"=>$row_shop_contact_data[7],
       "country_code"=>$row_shop_contact_data[8], "name_code_w"=>$row_shop_contact_data[9],
        "country_code_w"=>$row_shop_contact_data[10], "created"=>$row_shop_contact_data[11], "email"=>$email
    ];
  
    $response_shop_contact[] = $response_shop_contact_data;
  
   
  }
  //SHOP PROMO CONTACT ENDS

//product likes total starts
$sql_product_likes_data = " SELECT * FROM tbl_customer_pro_like WHERE pid = '$pid' ORDER BY like_id ASC;";
$result_product_likes_data = mysqli_query($conn, $sql_product_likes_data);

$description = $row_home_data[2];

$show_more_pen = 0;
//product likes total ends
if($container_size <= 767){
  // mobile
  if(strlen($description) > 100){
    $show_more_pen = 1;
    $description = substr($description, 0, 100).'...';
  }
  if(strlen($description) > 80){
    $show_more_pen = 1;
    $description = substr($description, 0, 80).'...';
  }
        }else if($container_size >= 700 && $container_size <= 1024 ){
          //tablet
          if(strlen($description) > 100){
            $show_more_pen = 1;
            $description = substr($description, 0, 100).'...';
          }
          if(strlen($description) > 80){
            $show_more_pen = 1;
            $description = substr($description, 0, 80).'...';
          }
        }else{
          //pc
          if(strlen($description) > 100){
            $show_more_pen = 1;
            $description = substr($description, 0, 100).'...';
          }
          if(strlen($description) > 80){
            $show_more_pen = 1;
            $description = substr($description, 0, 80).'...';
          }
        }

      $tamarind_shop = [
        'page'=>$page,
        'number_of_pages' => $number_of_pages,
        'pid' => $row_home_data[0],
        'uid_pro' => $row_home_data[1],
        'filter_seen_promo_array' => $filter_seen_promo_array,
        'description' => $description,
        'description_full'=> $row_home_data[2],
        'show_more_pen' => $show_more_pen,
    'product_name' => $row_home_data[11],
    'categories_type' => $row_home_data[20],
    'location_id' => $row_home_data[27],
    'shopname' => $row_home_data[30],
    'profile' => $row_home_data[31],
    'logo_thumb_color' => $row_home_data[32],
    'total_likes' => mysqli_num_rows($result_product_likes_data),
    'product_more_details' => json_encode(get_admin_product_image_details($conn, $row_home_data[0])),
    'response_more_shop_products' => json_encode(get_more_product_from_shop($container_size, $conn, $row_home_data[0], $row_home_data[27])),
    'response_products_feature_image'=>json_encode($response_products_feature_image),
    'response_products_image' => json_encode($response_products_image),
    'response_shop_contact' => json_encode($response_shop_contact),
    'response_shop_location' => htmlspecialchars(json_encode($response_shop_location), ENT_QUOTES, 'UTF-8'),
    'total_products_image' => mysqli_num_rows($result_product_image_data),
   
      ];

      $tamarind_shops[] = $tamarind_shop;

      

    }
    return $tamarind_shops;
  }

  function get_more_product_from_shop($container_size, $conn, $pid, $location_id){

    $sql_home = "SELECT *, IF(tbl_product.pid = '$pid', 1, 0) AS product_order, IF(tbl_product.pid = '$pid', 1, 0) AS promo_prouct FROM tbl_product INNER JOIN tbl_product_name ON 
    tbl_product_name.product_name_id = tbl_product.product_name_id INNER JOIN tbl_shop_product_type ON 
    tbl_shop_product_type.product_type_id = tbl_product.product_type_id INNER JOIN tbl_categories_type ON 
    tbl_categories_type.categories_type_id = tbl_shop_product_type.categories_type_id INNER JOIN tbl_product_location ON 
    tbl_product_location.pid = tbl_product.pid INNER JOIN tbl_shop_location_shop_name ON 
    tbl_shop_location_shop_name.location_id = tbl_product_location.location_id WHERE tbl_product_location.location_id = '$location_id' ORDER BY product_order DESC LIMIT 0,10;";		
    
      $result_home = mysqli_query($conn, $sql_home);
    
        $tamarind_shops = [];
        
        // This is our "fake" database
     
        while($row_home_data=mysqli_fetch_array($result_home)){
          
          $pid = $row_home_data[0];
    //get shop products starts
    
    //feature image starts
    $sql_product_feature_image_data = " SELECT * FROM tbl_images WHERE pid = '".$pid."' AND product_order = 1 ORDER BY product_order ASC;";
    $result_product_feature_image_data = mysqli_query($conn, $sql_product_feature_image_data);
    
    $response_products_feature_image = [];
    
    while($row_shop_product_feature_data =mysqli_fetch_array($result_product_feature_image_data)){
    
      $tamarind_product_feature_data = [
         "image_id"=>$row_shop_product_feature_data[0], "pid"=>$row_shop_product_feature_data[1],
         "image_url"=>$row_shop_product_feature_data[2], "product_order"=>$row_shop_product_feature_data[3],
         "offer_id"=>$row_shop_product_feature_data[4], "upload_code"=>$row_shop_product_feature_data[5],
         "image_likes"=>$row_shop_product_feature_data[6], "image_hint"=>$row_shop_product_feature_data[7],
         "image_color_thumb"=>$row_shop_product_feature_data[8], "image_rgb"=>json_encode($row_shop_product_feature_data[9])
      ];
    
      $response_products_feature_image[] = $tamarind_product_feature_data;
    
     
    }
    //feature image ends
    
    $sql_product_image_data = " SELECT * FROM tbl_images WHERE pid = '".$pid."' ORDER BY product_order ASC;";
    $result_product_image_data = mysqli_query($conn, $sql_product_image_data);
    
    $response_products_image = [];
    
    while($row_shop_product_data =mysqli_fetch_array($result_product_image_data)){
    
      $tamarind_product_data = [
         "image_id"=>$row_shop_product_data[0],"pid"=>$row_shop_product_data[1],
         "image_url"=>$row_shop_product_data[2],"product_order"=>$row_shop_product_data[3],
         "offer_id"=>$row_shop_product_data[4], "upload_code"=>$row_shop_product_data[5],
         "image_likes"=>$row_shop_product_data[6], "image_hint"=>$row_shop_product_data[7],
         "image_color_thumb"=>$row_shop_product_data[8], "image_rgb"=>json_encode($row_shop_product_data[9])
      ];
    
      $response_products_image[] = $tamarind_product_data;
    
     
    }
      //get shop products ends
    //product likes total starts
    $sql_product_likes_data = " SELECT * FROM tbl_customer_pro_like WHERE pid = '$pid' ORDER BY like_id ASC;";
    $result_product_likes_data = mysqli_query($conn, $sql_product_likes_data);

    $description = $row_home_data[2];

    $show_more_pen = 0;
    //product likes total ends
    if($container_size <= 767){
      // mobile
      if(strlen($description) > 100){
        $show_more_pen = 1;
        $description = substr($description, 0, 100).'...';
      }
      if(strlen($description) > 80){
        $show_more_pen = 1;
        $description = substr($description, 0, 80).'...';
      }
            }else if($container_size >= 700 && $container_size <= 1024 ){
              //tablet
              if(strlen($description) > 100){
                $show_more_pen = 1;
                $description = substr($description, 0, 100).'...';
              }
              if(strlen($description) > 80){
                $show_more_pen = 1;
                $description = substr($description, 0, 80).'...';
              }
            }else{
              //pc
              if(strlen($description) > 100){
                $show_more_pen = 1;
                $description = substr($description, 0, 100).'...';
              }
              if(strlen($description) > 80){
                $show_more_pen = 1;
                $description = substr($description, 0, 80).'...';
              }
            }

          $tamarind_shop = [
            'pid' => $row_home_data[0],
            'uid_pro' => $row_home_data[1],
            'description' => $description,
            'description_full' => $row_home_data[2],
            'show_more_pen' => $show_more_pen,
        'product_name' => $row_home_data[11],
        'categories_type' => $row_home_data[20],
        'location_id' => $row_home_data[27],
        'shopname' => $row_home_data[30],
        'profile' => $row_home_data[31],
        'logo_thumb_color' => $row_home_data[32],
        'product_order' => $row_home_data[33],
        'promo_prouct' => $row_home_data[34],
        'total_likes' => mysqli_num_rows($result_product_likes_data),
        'product_more_details' => json_encode(get_admin_product_image_details($conn, $row_home_data[0])),
        'response_products_feature_image'=>json_encode($response_products_feature_image),
        'response_products_image' => json_encode($response_products_image),
        'screen_size_style' => "large-screen",
        'total_products_image' => mysqli_num_rows($result_product_image_data),
       
          ];
          
          $tamarind_shops[] = $tamarind_shop;
    
          
    
        }
        return $tamarind_shops;
  }
  function get_admin_product_image_details($conn, $pid){
    $response_products_details = [];


    //   GET MORE DETAILS DATA STARTS
    $sql_product_more_details = "SELECT * FROM tbl_product_more_details INNER JOIN 
    tbl_product_brand ON tbl_product_brand.brand_id = tbl_product_more_details.brand_id INNER JOIN 
    tbl_product_quality ON tbl_product_quality.product_quality_id = tbl_product_more_details.product_quality_id WHERE pid = '".$pid."' ORDER BY product_more_id ASC;";		
  
  $result_product_more_details = mysqli_query($conn, $sql_product_more_details);
  $result_more_details = [];

  while($row_product_more_details_data=mysqli_fetch_array($result_product_more_details)){

    $product_more_id  = $row_product_more_details_data[0];  
    
        $result_more_detail = [
          "product_more_id"=>$row_product_more_details_data[0],"pid"=>$row_product_more_details_data[1],
          "brand_id"=>$row_product_more_details_data[2], "product_quality_id"=>$row_product_more_details_data[3],
           "brand_name"=>$row_product_more_details_data[5], "quality"=>$row_product_more_details_data[10]
        ];

        $result_more_details[] = $result_more_detail;

      }

    // GET MORE DETAILS DATA ENDS

    //   GET MAELEZO DATA STARTS
    $result_product_maelezo_array = array();
    $sql_product_maelezo = "SELECT * FROM tbl_product WHERE pid = '".$pid."' ORDER BY pid ASC;";		
  
  $result_product_maelezo = mysqli_query($conn, $sql_product_maelezo);
  
  while($row_product_maelezo_data=mysqli_fetch_array($result_product_maelezo)){

        array_push($result_product_maelezo_array, array(
          "description"=>$row_product_maelezo_data[2]));
      }

    // GET MAELEZO DATA ENDS
 
//   GET COLOR DATA STARTS

$sql_customer_request_color = "SELECT * FROM tbl_product_uploaded_color INNER JOIN 
tbl_product_color ON tbl_product_color.product_color_id = tbl_product_uploaded_color.product_color_id WHERE pid = '".$pid."' ORDER BY product_added_color_id ASC;";
$result_customer_request_color = mysqli_query($conn, $sql_customer_request_color);

$tamarind_customer_request_container_colors = [];

$tamarind_customer_request_colors = [];

$total_container = ceil(mysqli_num_rows($result_customer_request_color)/7);

$remained_color = mysqli_num_rows($result_customer_request_color) % 7;
$total_available_color = mysqli_num_rows($result_customer_request_color);

$container_count = 0;
$color_count = 0;
$display_limit = 7;
$more_container = 'containers-unavailable';

if($total_container > 1){
$more_container = 'containers-available';
}
while($row_product_color_data =mysqli_fetch_array($result_customer_request_color)){
$color_count = $color_count + 1;

$tamarind_customer_request_color = [
  "product_added_color_id"=>$row_product_color_data[0],"pid"=>$row_product_color_data[1],
  "product_color_id"=>$row_product_color_data[2], "color_name"=>$row_product_color_data[4],
   "color_code"=>$row_product_color_data[5]
];


$tamarind_customer_request_colors[] = $tamarind_customer_request_color;

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

  $tamarind_customer_request_container_color = [
    "is_last"=>$is_last, "more_container"=>$more_container,
    "container_id"=>$container_count, "total_container"=>$total_container,
    "container_data_html"=>json_encode($tamarind_customer_request_colors)
  ];

  $tamarind_customer_request_container_colors[] = $tamarind_customer_request_container_color;

  $tamarind_customer_request_colors = [];
}else{


  $is_last = true;
  if($color_count == $total_available_color){
    $tamarind_customer_request_container_color = [
      "is_last"=>$is_last, "more_container"=>$more_container,
      "container_id"=>1, "total_container"=>1,
      "container_data_html"=>json_encode($tamarind_customer_request_colors)
    ];

    $tamarind_customer_request_container_colors[] = $tamarind_customer_request_container_color;

  }
  
}

}
// GET COLOR DATA ENDS
  
    $response_products_detail = [
      "result_more_details_html"=> json_encode($result_more_details),
    "result_color_array_html"=>json_encode($tamarind_customer_request_container_colors), 
    "result_product_maelezo_array_html"=>json_encode($result_product_maelezo_array)
    ];
 
   $response_products_details[] = $response_products_detail;
 
    return $response_products_details;


}
  
function update_rotate_promotion($conn){

  if(mysqli_num_rows(mysqli_query($conn, " SELECT promotion_id FROM tbl_splash_promotion WHERE premier_category_id = 5 AND is_active = 1 AND 
  pending = 0 ORDER BY promotion_id DESC;")) > 0){

$active_promotion_id = mysqli_fetch_array(mysqli_query($conn, " SELECT promotion_id FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  is_active = 1 AND 
pending = 0 ORDER BY promotion_id DESC;"))[0];	

  if(mysqli_query($conn, " UPDATE tbl_splash_promotion SET is_active = 0 WHERE pending = 0 AND view_count >= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id);")){


$min_promotion_id = mysqli_fetch_array(mysqli_query($conn, " SELECT MIN(promotion_id) FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id) ORDER BY promotion_id DESC;"))[0];	

if($active_promotion_id == null){
  
$active_promotion_id = mysqli_fetch_array(mysqli_query($conn, " SELECT MAX(promotion_id) FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id) ORDER BY promotion_id DESC;"))[0];	
$view_count = mysqli_fetch_array(mysqli_query($conn, " SELECT view_count FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND promotion_id = '".$active_promotion_id."' ORDER BY promotion_id DESC;"))[0];	
$new_view_count = $view_count + 1;	
if(mysqli_query($conn, " UPDATE tbl_splash_promotion SET view_count = '".$new_view_count."', is_active = 1 WHERE pending = 0 AND promotion_id = '".$active_promotion_id."' AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id);")){

}
}
$sql_promotion = " SELECT * FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id) ORDER BY promotion_id DESC;";

$result_promotion = mysqli_query($conn, $sql_promotion);

$active_is_active = 0;
$count_active = 0;

while($row=mysqli_fetch_array($result_promotion)){
$promotion_id = $row[0];
$view_count = $row[3];

$new_view_count = $view_count;
if($active_is_active == 1){
$new_view_count = $view_count + 1;	
}

$is_active = $row[5];

if($is_active == 1){
$active_is_active = 0;	
}

if(mysqli_query($conn, " UPDATE tbl_splash_promotion SET view_count = '".$new_view_count."', is_active = '".$active_is_active."' WHERE pending = 0 AND promotion_id = '".$promotion_id."' AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id);")){
if($active_is_active == 1){
  $active_is_active = 0;
}
if($promotion_id == $active_promotion_id){
$active_is_active = 1;
$count_active = $count_active + 1;
  
}

}
if($min_promotion_id == $active_promotion_id){
$active_promotion_id = mysqli_fetch_array(mysqli_query($conn, " SELECT MAX(promotion_id) FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id) ORDER BY promotion_id DESC;"))[0];	
$view_count = mysqli_fetch_array(mysqli_query($conn, " SELECT view_count FROM tbl_splash_promotion WHERE premier_category_id = 5 AND  pending = 0 AND promotion_id = '".$active_promotion_id."' ORDER BY promotion_id DESC;"))[0];	

$new_view_count = $view_count + 1;

if(mysqli_query($conn, " UPDATE tbl_splash_promotion SET view_count = '".$new_view_count."', is_active = 1 
WHERE pending = 0 AND promotion_id = '".$active_promotion_id."' AND view_count <= (SELECT total_view FROM tbl_views_promo_plan WHERE view_id = tbl_splash_promotion.view_id);")){

}
}

}
}
}else {
  //ADD VIEWS ONLY
  if(mysqli_query($conn, " UPDATE tbl_splash_promotion SET is_active = 1, view_count = ((SELECT view_count FROM tbl_splash_promotion WHERE premier_category_id = 5 AND pid IN(SELECT MAX(pid) FROM tbl_splash_promotion WHERE premier_category_id = 5 AND pending = 0 HAVING MAX(pid))) + 1) WHERE pending = 0 AND pid IN(SELECT MAX(pid) FROM tbl_splash_promotion WHERE premier_category_id = 5 AND pending = 0 HAVING MAX(pid));")){

  }
}

}
  //PROMOTION DATA ENDS

function get_filter_seen_promo($conn, $users_object){
  for($i = 0; $i < count($users_object['mall_shop_promos']); $i++){

    $pid = $users_object['mall_shop_promos'][$i]['pid'];

        $statearray[] = mysqli_real_escape_string($conn, $pid);
  }

    if(count($users_object['mall_shop_promos']) == 0){

      $statearray[] = mysqli_real_escape_string($conn, '');
  
    }
      return implode ("','", $statearray);
 }
  //PROMOTION DATA ENDS
//GROUP BY tbl_categories_type.categories_type_id

function get_location_top_products($conn, $location_id, $container_size, $screen_size_style){

  $sql_shop_product_data = "SELECT * FROM (SELECT b.image_id AS B_image_id, b.pid AS B_pid, b.image_url AS B_image_url ,b.product_order AS B_product_order
,b.offer_id AS B_offer_id, b.upload_code AS B_upload_code ,b.image_likes AS B_image_likes, b.image_hint AS B_image_full_hint
,b.image_color_thumb AS B_image_color_thumb, b.image_rgb AS B_image_rgb, e.categories_type_id AS E_categories_type_id
,e.categories_type AS E_categories_type, IF((SELECT COUNT(*) FROM tbl_seller_shop_type WHERE location_id = '$location_id' AND 
categories_type_id IN(SELECT categories_type_id FROM tbl_shop_product_type WHERE product_type_id IN(SELECT product_type_id FROM 
tbl_product WHERE pid = b.pid))) >= 3, e.categories_type_id, b.image_id) AS P_checking , IF((SELECT COUNT(*) FROM tbl_seller_shop_type WHERE location_id = '$location_id' AND 
categories_type_id IN(SELECT categories_type_id FROM tbl_shop_product_type WHERE product_type_id IN(SELECT product_type_id FROM 
tbl_product WHERE pid = b.pid))) >= 3, (SELECT COUNT(*) FROM tbl_product WHERE pid IN(SELECT pid FROM tbl_product_location WHERE 
location_id = '$location_id') AND product_type_id IN(SELECT product_type_id FROM tbl_shop_product_type WHERE 
categories_type_id = e.categories_type_id)) - 1, 0) AS P_count_more_pro ,
1 AS RowNumber 
FROM tbl_images b INNER JOIN tbl_product AS c ON c.pid=b.pid INNER JOIN tbl_shop_product_type AS d ON d.product_type_id = 
c.product_type_id INNER JOIN tbl_categories_type AS e ON e.categories_type_id = d.categories_type_id WHERE b.product_order = 1 AND 
b.pid IN(SELECT pid FROM tbl_product WHERE 
pid IN(SELECT pid FROM tbl_product_location WHERE 
location_id = '$location_id'))) AS a WHERE a.RowNumber = 1 ORDER BY B_image_id DESC LIMIT 0, 3;";

  $result_shop_product_data = mysqli_query($conn, $sql_shop_product_data);
  
  $response_shop_top_products = [];
  
  while($row_shop_product_data =mysqli_fetch_array($result_shop_product_data)){
    $pid = $row_shop_product_data[1];
    $image_hint = $row_shop_product_data[7];
  
    if($container_size <= 767){
      // mobile
      if(strlen($image_hint) > 25){
        $image_hint = substr($image_hint, 0, 25).'...';
      }
      if(strlen($image_hint) > 17){
        $image_hint = substr($image_hint, 0, 17).'...';
      }
            }else if($container_size >= 700 && $container_size <= 1024 ){
              //tablet
              if(strlen($image_hint) > 38){
                $image_hint = substr($image_hint, 0, 38).'...';
              }
              if(strlen($image_hint) > 30){
                $image_hint = substr($image_hint, 0, 30).'...';
              }
            }else{
              //pc
              if(strlen($image_hint) > 60){
                $image_hint = substr($image_hint, 0, 60).'...';
              }
              if(strlen($image_hint) > 50){
                $image_hint = substr($image_hint, 0, 50).'...';
              }
            }
     //   GET MORE IMAGE DATA STARTS
     $response_shop_more_products = [];
     $sql_product_more_image = "SELECT * FROM tbl_images WHERE pid = '".$pid."' ORDER BY product_order ASC;";		
        
     $result_product_more_image = mysqli_query($conn, $sql_product_more_image);
     
     while($row_product_image_more_data=mysqli_fetch_array($result_product_more_image)){
   
       $image_id = $row_product_image_more_data[0];  
  
       $image_sub_hint = $row_product_image_more_data[7];
  
       if($container_size <= 767){
        // mobile
        if(strlen($image_sub_hint) > 25){
          $image_sub_hint = substr($image_sub_hint, 0, 25).'...';
        }
        if(strlen($image_sub_hint) > 17){
          $image_sub_hint = substr($image_sub_hint, 0, 17).'...';
        }
              }else if($container_size >= 700 && $container_size <= 1024 ){
                //tablet
                if(strlen($image_sub_hint) > 38){
                  $image_sub_hint = substr($image_sub_hint, 0, 38).'...';
                }
                if(strlen($image_sub_hint) > 30){
                  $image_sub_hint = substr($image_sub_hint, 0, 30).'...';
                }
              }else{
                //pc
                if(strlen($image_sub_hint) > 40){
                  $image_sub_hint = substr($image_sub_hint, 0, 40).'...';
                }
                if(strlen($image_sub_hint) > 30){
                  $image_sub_hint = substr($image_sub_hint, 0, 30).'...';
                }
              }
       $tamarind_shop_product_more_data = [
             "image_id"=>$row_product_image_more_data[0], 
             "pid"=>$row_product_image_more_data[1],"image_url"=>$row_product_image_more_data[2],
             "product_order"=>$row_product_image_more_data[3],"offer_id"=>$row_product_image_more_data[4],
             "upload_code"=>$row_product_image_more_data[5],"image_likes"=>$row_product_image_more_data[6],
             "image_hint"=>$image_sub_hint,"image_full_hint"=>$row_product_image_more_data[7],"image_color_thumb"=>$row_product_image_more_data[8],
             "image_rgb"=>json_encode($row_product_image_more_data[9]), "image_rgb_html"=> htmlspecialchars(json_encode($row_product_image_more_data[9]), ENT_QUOTES, 'UTF-8')
            ];
  
            $response_shop_more_products[] = $tamarind_shop_product_more_data;
         }
  
       // GET MORE IMAGE DATA ENDS
    $tamarind_shop_product_data = [
   
      "image_id"=>$row_shop_product_data[0], 
      "pid"=>$row_shop_product_data[1],"image_url"=>$row_shop_product_data[2],
      "product_order"=>$row_shop_product_data[3],"offer_id"=>$row_shop_product_data[4],
      "upload_code"=>$row_shop_product_data[5],"image_likes"=>$row_shop_product_data[6], "image_hint"=>$image_hint ,
      "image_full_hint"=>$row_shop_product_data[7], 
      "image_color_thumb"=>$row_shop_product_data[8],
      "image_rgb"=>json_encode($row_shop_product_data[9]), "categories_type_id"=>$row_shop_product_data[10], 
      "categories_type"=>$row_shop_product_data[11], "P_checking"=>$row_shop_product_data[12], "P_count_more_pro"=>$row_shop_product_data[13], 'response_shop_more_products' =>json_encode($response_shop_more_products)
    
    ];
  
    $response_shop_top_products[] = $tamarind_shop_product_data;
  
   
  }
    //get shop products ends

    return $response_shop_top_products;
}
function get_location_new_products($conn, $location_id, $container_size, $screen_size_style, $top_product_pid_array){
 
  $sql_shop_product_data = " SELECT *, (SELECT image_url FROM tbl_images WHERE pid NOT IN ('$top_product_pid_array') AND product_order = 1 AND 
pid IN(SELECT pid FROM tbl_product WHERE product_type_id = tbl_seller_product_type.product_type_id) 
LIMIT 0, 1) AS image_url , 
(SELECT image_color_thumb FROM tbl_images WHERE pid NOT IN ('$top_product_pid_array') AND pid IN(SELECT pid FROM tbl_product_location WHERE 
location_id = '$location_id') AND pid IN(SELECT pid FROM tbl_product WHERE product_type_id = 
tbl_seller_product_type.product_type_id) ORDER BY product_order ASC LIMIT 0, 1) AS image_color_thumb , 
(SELECT pid FROM tbl_images WHERE pid NOT IN ('$top_product_pid_array') AND pid IN(SELECT pid FROM tbl_product_location WHERE 
location_id = '$location_id') AND pid IN(SELECT pid FROM tbl_product WHERE product_type_id = 
tbl_seller_product_type.product_type_id) ORDER BY product_order ASC LIMIT 0, 1) AS pid FROM tbl_seller_product_type INNER JOIN tbl_shop_product_type ON 
tbl_shop_product_type.product_type_id = tbl_seller_product_type.product_type_id WHERE tbl_seller_product_type.location_id = 
'$location_id' AND tbl_seller_product_type.product_type_id IN(SELECT product_type_id FROM tbl_product WHERE pid 
IN(SELECT pid FROM tbl_product_location WHERE location_id = '$location_id' AND pid NOT IN ('$top_product_pid_array'))) ORDER BY 
(SELECT COUNT(*) FROM tbl_product WHERE product_type_id = tbl_seller_product_type.product_type_id AND pid 
IN(SELECT pid FROM 
tbl_product_location WHERE location_id = '$location_id')) DESC LIMIT 0, 10;";

  $result_shop_product_data = mysqli_query($conn, $sql_shop_product_data);
  
  $response_shop_new_products = [];
  
  while($row_shop_product_data =mysqli_fetch_array($result_shop_product_data)){
    $pid = $row_shop_product_data[1];
   
    $tamarind_shop_product_data = [
       "seller_type_id"=>$row_shop_product_data[0], "screen_size_style"=> $screen_size_style,
      "product_type_id"=>$row_shop_product_data[6],"product_type"=>$row_shop_product_data[8],
      "image_url"=>$row_shop_product_data[12], "image_color_thumb"=>$row_shop_product_data[13]
    ];
  
    $response_shop_new_products[] = $tamarind_shop_product_data;
  
   
  }
    //get shop products ends

    return $response_shop_new_products;
}

function get_top_products_pid($conn, $location_id, $screen_size_style){

  $sql_shop_product_data = "SELECT * FROM (SELECT b.image_id AS B_image_id, b.pid AS B_pid, b.image_url AS B_image_url ,b.product_order AS B_product_order
  ,b.offer_id AS B_offer_id, b.upload_code AS B_upload_code ,b.image_likes AS B_image_likes, b.image_hint AS B_image_full_hint
  ,b.image_color_thumb AS B_image_color_thumb, b.image_rgb AS B_image_rgb, e.categories_type_id AS E_categories_type_id
  ,e.categories_type AS E_categories_type, IF((SELECT COUNT(*) FROM tbl_seller_shop_type WHERE location_id = '$location_id' AND 
  categories_type_id IN(SELECT categories_type_id FROM tbl_shop_product_type WHERE product_type_id IN(SELECT product_type_id FROM 
  tbl_product WHERE pid = b.pid))) >= 3, e.categories_type_id, b.image_id) AS P_checking , IF((SELECT COUNT(*) FROM tbl_seller_shop_type WHERE location_id = '$location_id' AND 
  categories_type_id IN(SELECT categories_type_id FROM tbl_shop_product_type WHERE product_type_id IN(SELECT product_type_id FROM 
  tbl_product WHERE pid = b.pid))) >= 3, (SELECT COUNT(*) FROM tbl_product WHERE pid IN(SELECT pid FROM tbl_product_location WHERE 
  location_id = '$location_id') AND product_type_id IN(SELECT product_type_id FROM tbl_shop_product_type WHERE 
  categories_type_id = e.categories_type_id)) - 1, 0) AS P_count_more_pro ,
  1 AS RowNumber 
  FROM tbl_images b INNER JOIN tbl_product AS c ON c.pid=b.pid INNER JOIN tbl_shop_product_type AS d ON d.product_type_id = 
  c.product_type_id INNER JOIN tbl_categories_type AS e ON e.categories_type_id = d.categories_type_id WHERE b.product_order = 1 AND 
  b.pid IN(SELECT pid FROM tbl_product WHERE 
  pid IN(SELECT pid FROM tbl_product_location WHERE 
  location_id = '$location_id'))) AS a WHERE a.RowNumber = 1 ORDER BY B_image_id DESC LIMIT 0, 3;";
  
    $result_shop_product_data = mysqli_query($conn, $sql_shop_product_data);
    
    $response_shop_top_products = [];
    
    while($row_shop_product_data =mysqli_fetch_array($result_shop_product_data)){
    
      $statearray[] = mysqli_real_escape_string($conn, $row_shop_product_data[1]);

    }

      return implode ("','", $statearray);
   }

  $page = isset($_GET['page']) ? (int) $_GET['page'] : 1;
  $shops_code = isset($_GET['shops_code']) ? (int) $_GET['shops_code'] : 1;
  $container_size = isset($_GET['container_size']) ? (int) $_GET['container_size'] : 1;
  $screen_size_style = isset($_GET['screen_size_style']) ? (string) $_GET['screen_size_style'] : 'large-screen';


  $response_home_shops = [];

$response_home_shop = [
 "result_home_promotion"=> json_encode(find_tamarind_ads($users_object, $page, $container_size)),
"result_home_shops"=>json_encode(find_tamarind_shops($container_size, $page, $shops_code, $screen_size_style))
];

$response_home_shops[] = $response_home_shop;

echo json_encode($response_home_shops);

?>
