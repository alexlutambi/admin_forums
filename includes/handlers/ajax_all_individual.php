<?php
sleep(2);
include("../../../database/connection.php");

$requestPayLoad = file_get_contents("php://input");


$login_object = json_decode($requestPayLoad, true);

function get_likes_user($login_object){
include("../../../database/connection.php");

     $response_fundis = [];
       
for($i = 0; $i < count($login_object['all_hint']); $i++){

    $action = $login_object['all_hint'][$i]['action'];
    $per_page = $login_object['all_hint'][$i]['per_page'];
  $page = $login_object['all_hint'][$i]['page'];
    
  	$sql_fundi_all_total_results = "SELECT * FROM tbl_wateja ORDER BY mteja_id DESC;";		
	
	  $result_fundi_all_total_results = mysqli_query($conn, $sql_fundi_all_total_results);
	  $number_of_results = mysqli_num_rows($result_fundi_all_total_results);

//number of total pages available
$number_of_pages = ceil($number_of_results/$per_page);

//determine the sql LIMIT starting number for the results on the displaying page
$this_page_first_result = ($page-1)*$per_page;
//retrieve selected results from database and display them on page

//check remaining pages
$remained_pages = $number_of_pages - $page;

		$sql_fundi_results = "SELECT * FROM tbl_wateja ORDER BY mteja_id DESC LIMIT ".$this_page_first_result.','.$per_page.";";

	  $usersReturnedQuery = mysqli_query($conn, $sql_fundi_results);

        while($row=mysqli_fetch_array($usersReturnedQuery)){
        
                  $response_fundi_data = [
            "remained_pages"=>$remained_pages, "number_of_pages"=>$number_of_pages, "page"=>$page, "mteja_id"=>$row['mteja_id'], "username"=>$row['username'], "mteja_status"=>$row['mteja_status'],
             "mteja_full_name"=> $row['mteja_full_name'] , 
            "mteja_profile"=> $row['mteja_profile'], "mteja_thumb_color"=> $row['mteja_thumb_color']
          ];
       
         $response_fundis[] = $response_fundi_data;
       
        }
          //product likes total start

    
}

return $response_fundis;
}

echo json_encode(get_likes_user($login_object));
?>