<?php

include("includes/header.php");

?>

<div class="main_column column" id="main_column">

	<?php 


				$usersReturnedQuery = mysqli_query($con, "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC");
				$usersReturnedQueryAll = mysqli_query($con, "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC");
		

		//Check if results were found 
		if(mysqli_num_rows($usersReturnedQuery) == 0)
			echo "We can't find anyone fundi ";
		else 
			echo mysqli_num_rows($usersReturnedQueryAll) . " fundi found: <br> <br>";

		while($row = mysqli_fetch_array($usersReturnedQuery)) {
			$user_obj = new Fundi($con, $user['username']);

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
						<a href='" . $row['username'] ."'><img id='fundi-list-img-" . $row['fundi_id'] . "' class='profile-available fundi-list-img fundi-list-img-" . $row['fundi_id'] . "' fundi_id='" . $row['fundi_id'] . "' fundi_profile='" . $row['fundi_profile'] . "' src='../fundi/fundi_profile/fundi_thumb_color/" . $row['fundi_thumb_color'] ."' style='height: 100px;'></a>
					</div>

						<a href='" . $row['username'] ."'> " . $row['fundi_full_name'] . " " . $row['fundi_last_name'] . "
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
 
});

</script>