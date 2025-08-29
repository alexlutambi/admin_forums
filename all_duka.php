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

</script>