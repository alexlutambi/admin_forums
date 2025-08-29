<?php

include("includes/header.php");

?>

<div class="main_column column" username="<?php echo $user['username']; ?>" id="main-column">

	<?php 
	$sql_fundi_all_total_results = "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC;";		
	 $per_page_start = 10;
  $page_start = 0;
	  $result_fundi_all_total_results = mysqli_query($conn, $sql_fundi_all_total_results);
	  $number_of_results = mysqli_num_rows($result_fundi_all_total_results);

//number of total pages available
$number_of_pages = ceil($number_of_results/$per_page_start);

//determine the sql LIMIT starting number for the results on the displaying page
$this_page_first_result = ($page_start-1)*$per_page_start;
//retrieve selected results from database and display them on page

//check remaining pages
$remained_pages = $number_of_pages - $page_start;


				$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC LIMIT ".$this_page_first_result.','.$per_page_start.";");
				
				$usersReturnedQueryAll = mysqli_query($conn, "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC");
		

		//Check if results were found 
		if(mysqli_num_rows($usersReturnedQuery) == 0)
			echo "We can't find anyone fundi ";
		else 
			echo mysqli_num_rows($usersReturnedQueryAll) . " fundi found: <br> <br>";

		while($row = mysqli_fetch_array($usersReturnedQuery)) {
			$user_obj = new Fundi($conn, $user['username']);

			$button = "";
			$mutual_friends = "";

			if($user['username'] != $row['username']) {

				//Generate button depending on friendship status 
				if($user_obj->isFriend($row['username']))
					$button = "<input type='submit' name='" . $row['username'] . "' class='danger' value='Remove Friend'>";
				else if($user_obj->didReceiveRequest($row['username']))
					$button = "<input type='submit' name='" . $row['username'] . "' class='warning' value='Respond to request'>";
				else if($user_obj->didSendRequest($row['username']))
					$button = "<input type='submit' class='default' value='Request Sent'>";
				else 
					$button = "<input type='submit' name='" . $row['username'] . "' class='success' value='Add Friend'>";

				$mutual_friends = $user_obj->getMutualFundiTokens($row['username']) . " friends in common";


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

			echo "<div class='search_result'>";
					echo "<div id='fundi-activation-deactivation-container-";
					 echo $row['fundi_id'];
					echo "' class='searchPageFriendButtons'>";

						if($row['fundi_status'] == 'Enable'){
 					echo "<button id='btn-activate-deactivate-";
					 echo $row['fundi_id'];
					echo "' fundi_id='";
          echo $row['fundi_id'];
          echo "' fundi_status='";
          if($row['fundi_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='fundi' class='btn-activate-deactivate danger' >DeActivate</button>";
 				}else{
          			echo "<button id='btn-activate-deactivate-";
					echo $row['fundi_id'];
					echo "' fundi_id='";
          echo $row['fundi_id'];
          echo "' fundi_status='";
          if($row['fundi_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='fundi' class='btn-activate-deactivate success' >Activate</button>";
        }
	
					echo "</div>


					<div class='result_profile_pic'>
						<a href='profile.php?profile_username=" . $row['username'] ."'><img id='fundi-list-img-" . $row['fundi_id'] . "' class='profile-available fundi-list-img fundi-list-img-" . $row['fundi_id'] . "' fundi_id='" . $row['fundi_id'] . "' fundi_profile='" . $row['fundi_profile'] . "' src='../fundi/fundi_profile/fundi_thumb_color/" . $row['fundi_thumb_color'] ."' style='height: 100px;'></a>
					</div>

						<a href='profile.php?profile_username=" . $row['username'] ."'> " . $row['fundi_full_name'] . " " . $row['fundi_last_name'] . "
						<p id='grey'> " . $row['shop_name'] ."</p>
						</a>
						<br>
						" . $mutual_friends ."<br>

				</div>
				<hr id='search_hr'>";

					
		} //End while


	?>



</div>

<div id="load-more-container" class="load-more-container">
      <button id="load-more" class="load-more" number_of_pages = "<?php echo $number_of_pages; ?>" remained_pages = "<?php echo $remained_pages; ?>"  data-page="1">Load More</button>
    </div>
<script>
	 var request_in_progress = false;
	$(document).ready(function() {

	console.log("all fundi...");
	
	
	var search_text_input_all = document.getElementsByClassName('search-text-input');

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);
 search_text_input_container.setAttribute("search_user_type", "fundi");

 }
var search_form_all = document.getElementsByClassName('search-form');

 for(var a = 0; a < search_form_all.length; a++){
    var search_form_id = search_form_all[a].id;
var search_form_id_container = document.getElementById(search_form_id);
 search_form_id_container.setAttribute("action", "search_fundi.php");

 }
 
	 var load_more = document.getElementById("load-more");

   load_more.addEventListener("click", loadMore);

	  
});

window.onscroll = function(){
		   scrollReaction();
	  }
      // Load even the first page with Ajax
	   function scrollReaction(){
		  var content_height = container.offsetHeight;
		  var current_y = window.innerHeight + window.pageYOffset;
		  //console.log(current_y + '/' + content_height);
		  if(current_y >= content_height){
			  loadMore();
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
product_hint["action"] = "all_fundi";
product_hint["per_page"] = 10;
product_hint["page"] = next_page;
product_hints.push(product_hint);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'includes/handlers/ajax_all_fundi.php', true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function () {
          if(xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
          console.log('Result_all_fundi: ' + result);

            hideSpinner();
			setCurrentPage(next_page);
            // append results to end of blog posts
			
			var main_column = document.getElementById("main-column");
			var username = main_column.getAttribute("username");

			get_paging_all_fundi(username, main_column, result);
			
            showLoadMore();
			request_in_progress = false;
			
          }
        };
    
		xhr.send(JSON.stringify({"all_hint" : product_hints}));
      }

	  
      function get_paging_all_fundi(username, container, result){
    var li_success_list = selectedPagingAllFundi(username, result);
 console.log("li_success_list=>"+li_success_list);
appendToDiv(container, li_success_list);
container.style.display = 'online';

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
    function selectedPagingAllFundi(username, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	   
       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var remained_pages = json_result[k].remained_pages;
          var number_of_pages = json_result[k].number_of_pages;
	var page = json_result[k].page;
	var fundi_id = json_result[k].fundi_id;
	var username = json_result[k].username;
	var fundi_status = json_result[k].fundi_status;
	var fundi_last_name = json_result[k].fundi_last_name;
	var fundi_profile = json_result[k].fundi_profile;
	var fundi_thumb_color = json_result[k].fundi_thumb_color;
	var shop_name = json_result[k].shop_name;
	var fundi_full_name = json_result[k].fundi_full_name;
	
			output += '<div class="search_result">';
					output += '<div id="fundi-activation-deactivation-container-';
					 output += fundi_id;
					output += '" class="searchPageFriendButtons">';

						if(fundi_status == 'Enable'){
 					output += '<button id="btn-activate-deactivate-';
					 output += fundi_id;
					output += '" fundi_id="';
          output += fundi_id;
          output += '" fundi_status="';
          if(fundi_status == 'Enable'){
           output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" account_type="fundi" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-activate-deactivate-';
					output += fundi_id;
					output += '" fundi_id="';
          output += fundi_id;
          output += '" fundi_status="';
          if(fundi_status == 'Enable'){
            output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" account_type="fundi" class="btn-activate-deactivate success" >Activate</button>';
        }
	
					output += '</div>';
					output += '<div class="result_profile_pic">';
						output += '<a href="profile.php?profile_username=';
						 output += username;
						 output += '"><img id="fundi-list-img-';
						 output += fundi_id;
						 output += '" class="profile-available fundi-list-img fundi-list-img-';
						  output += fundi_id;
						  output += '" fundi_id="';
						   output += fundi_id;
						   output += '" fundi_profile="';
						    output += fundi_profile;
							output += '" src="../fundi/fundi_profile/fundi_thumb_color/';
							 output += fundi_thumb_color;
							 output += '" style="height: 100px;"></a>';
					output += '</div>';

						output += '<a href="profile.php?profile_username=';
						 output += username;
						 output += '">';
						 output += fundi_full_name;
						 output += '" "';
						  output += fundi_last_name;
						output += '<p id="grey">';
						 output += shop_name;
						 output += '</p>';
						output += '</a>';
						output += '<br>';
						output += '0 friends in common<br>';

				output += '</div>';
				output += '<hr id="search_hr">';

		 }
   return output;
 }
      function showSpinner() {
        var spinner = document.getElementById("spinner");
        spinner.style.display = 'block';
      }

      function hideSpinner() {
        var spinner = document.getElementById("spinner");
        spinner.style.display = 'none';
      }

      function showLoadMore() {
        load_home_center_more.style.display = 'inline';
      }

      function hideLoadMore() {
        load_home_center_more.style.display = 'none';
      }
</script>