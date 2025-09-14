<?php

include("includes/header.php");

if(isset($_GET['q'])) {
	$query = $_GET['q'];
}
else {
	$query = "";
}

if(isset($_GET['type'])) {
	$type = $_GET['type'];
}
else {
	$type = "name";
}
?>

<div class="main_column column" id="main_column">

	<?php 
	if($query == "")
		echo "You must enter something in the search box.";
	else {

if(is_int(filter_var($query, FILTER_VALIDATE_INT)) != null){
$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_wateja WHERE mteja_id LIKE '$query%' LIMIT 8");
}
else {
	$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_wateja WHERE mteja_full_name LIKE '%$query%' OR username LIKE '%$query%' LIMIT 8");
}
		//Check if results were found 
		if(mysqli_num_rows($usersReturnedQuery) == 0)
			echo "We can't find anyone with a " . $type . " like: " .$query;
		else 
			echo mysqli_num_rows($usersReturnedQuery) . " results found: <br> <br>";


		echo "<p id='grey'>Try searching for:</p>";
		echo "<a href='search_individual.php?q=" . $query ."&type=name'>Names</a>, <a href='search_individual.php?q=" . $query ."&type=username'>Usernames</a><br><br><hr id='search_hr'>";

		while($row = mysqli_fetch_array($usersReturnedQuery)) {
			$user_obj = new Individual($conn, $user['username']);

			$mutual_friends = "";

			if($user['username'] != $row['username']) {

				$mutual_friends = $user_obj->getMutualIndividualTokens($row['username']) . " friends in common";


				//Button forms
				if(isset($_POST[$row['username']])) {

					if($user_obj->isFriend($row['username'])) {
						$user_obj->removeFriend($row['username']);
						header("Location: https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
					}
					else if($user_obj->didReceiveRequest($row['username'])) {
						header("Location: requests.php");
					}
					else if($user_obj->didSendRequest($row['username'])) {

					}
					else {
						$user_obj->sendRequest($row['username']);
						header("Location: https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
					}

				}



			}

			echo "<div class='search_result'>
					<div id='fundi-activation-deactivation-container-";
					echo $row['mteja_id'];
					echo "' class='searchPageFriendButtons'>";
								if($row['mteja_status'] == 'Enable'){
 					echo "<button id='btn-activate-deactivate-";
					echo $row['mteja_id'];
					echo "' mteja_id='";
          echo $row['mteja_id'];
          echo "' mteja_status='";
          if($row['mteja_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='mteja' class='btn-activate-deactivate danger' >DeActivate</button>";
 				}else{
          			echo "<button id='btn-activate-deactivate-";
					 echo $row['mteja_id'];
					echo "' mteja_id='";
          echo $row['mteja_id'];
          echo "' mteja_status='";
          if($row['mteja_status'] == 'Enable'){
            echo "DisEnable";
          }else{
            echo "Enable";
          }
          echo "' account_type='mteja' class='btn-activate-deactivate success' >Activate</button>";
        }
					
					echo "</div>


					<div class='result_profile_pic'>
						<a href='profile.php?profile_username=" . $row['username'] ."'><img id='individual-list-img-" . $row['mteja_id'] . "' class='profile-available individual-list-img individual-list-img-" . $row['mteja_id'] . "' mteja_id='" . $row['mteja_id'] . "' mteja_profile='" . $row['mteja_profile'] . "' src='../mteja/mteja_profile/mteja_thumb_color/" . $row['mteja_thumb_color'] ."'></a>
					</div>

						<a href='profile.php?profile_username=" . $row['username'] ."'> " . $row['mteja_full_name'] . "
						<p id='grey'> " . $row['username'] ."</p>
						</a>
						<br>
						" . $mutual_friends ."<br>

				</div>
				<hr id='search_hr'>";

		} //End while
	}


	?>



</div>

<script>
	$(document).ready(function() {

	console.log("all search mteja...");
	
	
	var search_text_input_all = document.getElementsByClassName('search-text-input');

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);
 search_text_input_container.setAttribute("search_user_type", "mteja");

 }
var search_form_all = document.getElementsByClassName('search-form');

 for(var a = 0; a < search_form_all.length; a++){
    var search_form_id = search_form_all[a].id;
var search_form_id_container = document.getElementById(search_form_id);
 search_form_id_container.setAttribute("action", "search_individual.php");

 }
 
});

</script>