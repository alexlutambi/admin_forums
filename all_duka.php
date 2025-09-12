<?php

include("includes/header.php");

?>

<div class="main_column column" id="main-column">

	<?php 

$sql_duka_all_total_results = "SELECT * FROM tbl_maduka ORDER BY duka_id DESC;";		
	 $per_page_start = 10;
  $page_start = 1;
	  $result_duka_all_total_results = mysqli_query($conn, $sql_duka_all_total_results);
	  $number_of_results = mysqli_num_rows($result_duka_all_total_results);

//number of total pages available
$number_of_pages = ceil($number_of_results/$per_page_start);

//determine the sql LIMIT starting number for the results on the displaying page
$this_page_first_result = ($page_start-1)*$per_page_start;
//retrieve selected results from database and display them on page

//check remaining pages
$remained_pages = $number_of_pages - $page_start;

	$sql_duka_results = "SELECT * FROM tbl_maduka ORDER BY duka_id DESC LIMIT ".$this_page_first_result.','.$per_page_start.";";

				$usersReturnedQuery = mysqli_query($conn, $sql_duka_results);
				$usersReturnedQueryAll = mysqli_query($conn, "SELECT * FROM tbl_maduka ORDER BY duka_id DESC");
		

		//Check if results were found 
		if(mysqli_num_rows($usersReturnedQuery) == 0)
			echo "We can't find anyone duka ";
		else 
			echo mysqli_num_rows($usersReturnedQueryAll) . " duka found: <br> <br>";

		while($row = mysqli_fetch_array($usersReturnedQuery)) {
			$user_obj = new Duka($conn, $user['username']);

			$button = "";
			$mutual_friends = "";

		if($row['username'] != $userLoggedIn) {
			$mutual_friends = $user_obj->getMutualFriends($row['username']) . " friends in common";
		}
		else {
			$mutual_friends = "";
		}
			if($user['username'] != $row['username']) {


				//Button forms
				if(isset($_POST[$row['username']])) {

					if($user_obj->isFriend($row['username'])) {
						$user_obj->removeFriend($row['username']);
						header("Location: http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
					}
					else if($user_obj->didReceiveRequest($row['username'])) {
						header("Location: requests.php");
					}
					else if($user_obj->didSendRequest($row['username'])) {

					}
					else {
						$user_obj->sendRequest($row['username']);
						header("Location: http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
					}

				}



			}

			echo "<div class='all-user-single-container'>
				
					<div class='all-user-single-profile-pic'>
					
						<a href='profile.php?profile_username=" . $row['username'] ."'><img id='duka-list-img-" . $row['duka_id'] . "' class='profile-available duka-list-img duka-list-img-" . $row['duka_id'] . "' duka_id='" . $row['duka_id'] . "' duka_profile='" . $row['duka_profile'] . "' src='../duka/duka_logo_profile/duka_logo_thumb_color/" . $row['duka_thumb_color'] ."' style='height: 100px;'></a>
					</div>
<div class='all-user-single-center-content'>
						<a href='profile.php?profile_username=" . $row['username'] ."'> " . $row['duka_full_name'] . "
						<p id='grey'> " . $row['shop_name'] ."</p>
						</a>
						<br>
						" . $mutual_friends ."<br>
</div>";
echo "<div id='fundi-activation-deactivation-container-";
					 echo $row['duka_id'];
					echo "' class='all-user-single-action-container'>";

						if($row['duka_status'] == 'Enable'){
 					echo "<button id='btn-all-activate-deactivate-";
					 echo $row['duka_id'];
					echo "' duka_id='";
          echo $row['duka_id'];
          echo "' duka_status='";
          if($row['duka_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='duka' class='btn-all-activate-deactivate danger' >DeActivate</button>";
 				}else{
          			echo "<button id='btn-all-activate-deactivate-";
					echo $row['duka_id'];
					echo "' duka_id='";
          echo $row['duka_id'];
          echo "' duka_status='";
          if($row['duka_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='duka' class='btn-all-activate-deactivate success' >Activate</button>";
        }
	
					echo "</div>

				</div>";


					
		} //End while


	?>



</div>
<div id="load-more-container" class="load-more-container">
      <button id="load-more" class="load-more" number_of_pages = "<?php echo $number_of_pages; ?>" remained_pages = "<?php echo $remained_pages; ?>"  data-page="1">Load More</button>
    <img id="loading-more" class="loading-more" src="assets/images/icons/loading.gif">
	</div>
<script>
	 var request_in_progress = false;
	$(document).ready(function() {

	console.log("all duka...");
	hideSpinner();
	
	var search_text_input_all = document.getElementsByClassName('search-text-input');

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);
 search_text_input_container.setAttribute("search_user_type", "duka");

 }
var search_form_all = document.getElementsByClassName('search-form');

 for(var a = 0; a < search_form_all.length; a++){
    var search_form_id = search_form_all[a].id;
var search_form_id_container = document.getElementById(search_form_id);
 search_form_id_container.setAttribute("action", "search_duka.php");

 }
 
	 var load_more = document.getElementById("load-more");

   load_more.addEventListener("click", loadMore);

	  
});

window.onscroll = function(){
		   scrollReaction();
	  }
      // Load even the first page with Ajax
	   function scrollReaction(){
		var main_column = document.getElementById("main-column");
			
		  var content_height = main_column.offsetHeight;
		  var current_y = window.innerHeight + window.pageYOffset;
		  //console.log(current_y + '/' + content_height);
		  if(current_y >= content_height){
			var load_more = document.getElementById("load-more");
			if(parseInt(load_more.getAttribute("remained_pages")) > 0){
				loadMore();
			}else{
				 hideSpinner();
				 hideLoadMore();
			}
			  
		  }
	  }
      function loadMore() {
		  if(request_in_progress){ return; }
		  
		  request_in_progress = true;
		  
        showSpinner();
        hideLoadMore();
	 var load_more = document.getElementById("load-more");

        var page = parseInt(load_more.getAttribute('data-page'));
		//console.log("demo_code"+demo_code);
		
		var next_page = page + 1;
		  var product_hints = [];

var product_hint = {};
product_hint["action"] = "all_duka";
product_hint["per_page"] = 10;
product_hint["page"] = next_page;
product_hints.push(product_hint);

		var action_quality = "includes/handlers/ajax_all_duka.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
 console.log('Result_all_duka: ' + result);

            hideSpinner();
            // append results to end of blog posts
			
			var main_column = document.getElementById("main-column");
			var username = main_column.getAttribute("username");

			get_paging_all_duka(username, main_column, result);
			
            showLoadMore();
			request_in_progress = false;
			
}
};
xhr_quality.send(JSON.stringify({"all_hint" : product_hints}));
      }

	  
      function get_paging_all_duka(username, container, result){
    var li_success_list = selectedPagingAllDuka(username, result);
 console.log("li_success_list=>"+li_success_list);
appendToDiv(container, li_success_list);
container.style.display = 'online';
get_load_duka_data();
var btn_all_activate_deactivate_all = document.getElementsByClassName('btn-all-activate-deactivate');

 for(var a = 0; a < btn_all_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_all_activate_deactivate_all[a].id;
      
//console.log("details request by image");
var duka_list_container = document.getElementById(btn_activate_deactivate_id);
duka_list_container.addEventListener('click', function(){
console.log("left_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");

if(document.getElementsByClassName('activation-loading').length == 0){
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
			var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}
    }

 function appendToDiv(div, new_html){
		  //Put the new HTML into a temp div
		  //This causes browser to parse it as elements.
		 var temp = document.createElement('div');
		 temp.innerHTML = new_html;
		 
		 //Then we can find and work with those elements.
		 //Use firstElementChild b/c of how DOM treats whitespace
		 var class_name = temp.firstElementChild.className;
		 var items = temp.getElementsByClassName(class_name);
		 
		 var len = items.length;
		 
		 for(i=0; i < len; i++){
			 div.appendChild(items[0]);
			 
		 }
	  }
    function selectedPagingAllDuka(username, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	   
       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var remained_pages = json_result[k].remained_pages;
          var number_of_pages = json_result[k].number_of_pages;
	var page = json_result[k].page;
	 var load_more = document.getElementById("load-more");
	 load_more.setAttribute("number_of_pages", number_of_pages);
 load_more.setAttribute("remained_pages", remained_pages);
 load_more.setAttribute("data-page", page);

	var duka_id = json_result[k].duka_id;
	var username = json_result[k].username;
	var duka_status = json_result[k].duka_status;
	var shop_name = json_result[k].shop_name;
	var duka_full_name = json_result[k].duka_full_name;
	var duka_profile = json_result[k].duka_profile;
	var duka_thumb_color = json_result[k].duka_thumb_color;
	
			output += '<div class="all-user-single-container">';
					
					output += '<div class="all-user-single-profile-pic">';
						output += '<a href="profile.php?profile_username=';
						 output += username;
						 output += '"><img id="duka-list-img-';
						 output += duka_id;
						 output += '" class="profile-available duka-list-img duka-list-img-';
						  output += duka_id;
						  output += '" duka_id="';
						   output += duka_id;
						   output += '" duka_profile="';
						    output += duka_profile;
							output += '" src="../duka/duka_logo_profile/duka_logo_thumb_color/';
							 output += duka_thumb_color;
							 output += '" style="height: 100px;"></a>';
					output += '</div>';

						output += '<div class="all-user-single-center-content">';
						output += '<a href="profile.php?profile_username=';
						 output += username;
						 output += '">';
						 output += duka_full_name;
						output += '<p id="grey">';
						 output += shop_name;
						 output += '</p>';
						output += '</a>';
						output += '<br>';
						output += '0 friends in common<br>';
						output += '</div>';
						output += '<div id="fundi-activation-deactivation-container-';
					 output += duka_id;
					output += '" class="all-user-single-action-container">';

						if(duka_status == 'Enable'){
 					output += '<button id="btn-all-activate-deactivate-';
					 output += duka_id;
					output += '" duka_id="';
          output += duka_id;
          output += '" duka_status="';
          if(duka_status == 'Enable'){
           output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" account_type="duka" class="btn-all-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-all-activate-deactivate-';
					output += duka_id;
					output += '" duka_id="';
          output += duka_id;
          output += '" duka_status="';
          if(duka_status == 'Enable'){
            output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" account_type="duka" class="btn-all-activate-deactivate success" >Activate</button>';
        }
	
					output += '</div>';
				output += '</div>';

		 }
   return output;
 }
      function showSpinner() {
        var spinner = document.getElementById("loading-more");
        spinner.style.display = 'block';
      }

      function hideSpinner() {
        var spinner = document.getElementById("loading-more");
        spinner.style.display = 'none';
      }

      function showLoadMore() {
		
		var load_more = document.getElementById("load-more");
        load_more.style.display = 'inline';
      }

      function hideLoadMore() {
		var load_more = document.getElementById("load-more");
        load_more.style.display = 'none';
      }
</script>