<?php

include("includes/header.php");

?>

<div class="main_column column" id="main_column">

	<?php 


				$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_maduka ORDER BY duka_id DESC LIMIT 0, 10");
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

			echo "<div class='search_result'>";
					echo "<div id='fundi-activation-deactivation-container-";
					 echo $row['duka_id'];
					echo "' class='searchPageFriendButtons'>";

						if($row['duka_status'] == 'Enable'){
 					echo "<button id='btn-activate-deactivate-";
					 echo $row['duka_id'];
					echo "' duka_id='";
          echo $row['duka_id'];
          echo "' duka_status='";
          if($row['duka_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='duka' class='btn-activate-deactivate danger' >DeActivate</button>";
 				}else{
          			echo "<button id='btn-activate-deactivate-";
					echo $row['duka_id'];
					echo "' duka_id='";
          echo $row['duka_id'];
          echo "' duka_status='";
          if($row['duka_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='duka' class='btn-activate-deactivate success' >Activate</button>";
        }
	
					echo "</div>


					<div class='result_profile_pic'>
						<a href='profile.php?profile_username=" . $row['username'] ."'><img id='duka-list-img-" . $row['duka_id'] . "' class='profile-available duka-list-img duka-list-img-" . $row['duka_id'] . "' duka_id='" . $row['duka_id'] . "' duka_profile='" . $row['duka_profile'] . "' src='../duka/duka_logo_profile/duka_logo_thumb_color/" . $row['duka_thumb_color'] ."'></a>
					</div>

						<a href='profile.php?profile_username=" . $row['username'] ."'> " . $row['duka_full_name'] . "
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
      <button id="load-more" class="load-more" action_code = "1" data-page="0" shops-code="0">Load More</button>
    </div>
<script>
	$(document).ready(function() {

	console.log("all duka...");
	
		var btn_activate_deactivate_all = document.getElementsByClassName('btn-activate-deactivate');

 for(var a = 0; a < btn_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_activate_deactivate_all[a].id;
var btn_activate_deactivate_container = document.getElementById(btn_activate_deactivate_id);
 btn_activate_deactivate_container.setAttribute("account_type", "duka");

 }

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
 
});

  var request_in_progress = false;
	  load_more = document.getElementById("load-more");

   load_more.addEventListener("click", loadMore);
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

        var page = parseInt(load_more.getAttribute('data-page'));
		var demo_code = parseInt(load_more.getAttribute('demo-code'));
		//console.log("demo_code"+demo_code);
		heading_data(demo_code);
		var next_page = page + 1;
		
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'include/demo-lists.php?page=' + next_page+'&&demo_code='+demo_code, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function () {
          if(xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
          //console.log('Result: ' + result);

            hideSpinner();
			setCurrentPage(next_page);
            // append results to end of blog posts
			
			appendToDiv(container, result);
			
            showLoadMore();
			request_in_progress = false;
			
          }
        };
        xhr.send();
      }
      loadMore();

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