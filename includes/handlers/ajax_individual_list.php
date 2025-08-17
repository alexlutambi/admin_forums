<?php
include("../../../database/connection.php");
include("../../includes/classes/Individual.php");

$userLoggedIn = $_POST['userLoggedIn'];

	$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_wateja ORDER BY mteja_id DESC LIMIT 3");

	while($row = mysqli_fetch_array($usersReturnedQuery)) {
		$user = new Individual($conn, $userLoggedIn);

		if($row['username'] != $userLoggedIn)
			$mutual_friends = $user->getMutualIndividualTokens($row['mteja_id']) . " friends in common";
		else 
			$mutual_friends = "";
		$more_first_name = "";
		$more_user_email= "";
		
		if(strlen($row['mteja_full_name']) > 25){
			$more_first_name = "...";
		} 

		if(strlen($row['user_email']) > 24){
			$more_user_email = "...";
		}
		echo "<div class='resultDisplay fundiDisplay'>
				<a href='" . $row['username'] . "' style='color: #1485BD'>
					<div class='liveSearchProfilePic'>
						<img id='individual-list-img-" . $row['mteja_id'] . "' class='individual-list-img individual-list-img-" . $row['mteja_id'] . "' mteja_id='" . $row['mteja_id'] . "' mteja_profile='" . $row['mteja_profile'] . "' src='../mteja/mteja_profile/mteja_thumb_color/" . $row['mteja_thumb_color'] ."'>
					</div>
					<div class='liveSearchText'>
						" .substr($row['mteja_full_name'], 0, 25) .$more_first_name. "
						<p>" . substr($row['user_email'], 0, 27).$more_user_email ."</p>
						<p id='grey'>" . $mutual_friends ."</p>
					</div>
				</a>
				</div>";

	}

?>