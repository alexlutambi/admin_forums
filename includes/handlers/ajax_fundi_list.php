<?php
include("../../config/config.php");
include("../../includes/classes/Fundi.php");

$userLoggedIn = $_POST['userLoggedIn'];

	$usersReturnedQuery = mysqli_query($con, "SELECT * FROM tbl_mafundi ORDER BY fundi_id DESC LIMIT 3");

	while($row = mysqli_fetch_array($usersReturnedQuery)) {
		$user = new Fundi($con, $userLoggedIn);

		if($row['shop_name'] != $userLoggedIn)
			$mutual_friends = $user->getMutualFundiTokens($row['fundi_id']) . " friends in common";
		else 
			$mutual_friends = "";

		$more_first_name = "";
		$more_last_name = "";
		$more_shop_name= "";
		
		if(strlen($row['fundi_full_name']) > 10){
			$more_first_name = "...";
		} 
if(strlen($row['fundi_last_name']) > 10){
			$more_last_name = "...";
		} 
		if(strlen($row['shop_name']) > 24){
			$more_shop_name = "...";
		}
		echo "<div class='resultDisplay fundiDisplay'>
				<a href='" . $row['username'] . "' style='color: #1485BD'>
					<div class='liveSearchProfilePic'>
						<img id='fundi-list-img-" . $row['fundi_id'] . "' class='fundi-list-img fundi-list-img-" . $row['fundi_id'] . "' fundi_id='" . $row['fundi_id'] . "' fundi_profile='" . $row['fundi_profile'] . "' src='../fundi/fundi_profile/fundi_thumb_color/" . $row['fundi_thumb_color'] ."'>
					</div>
					<div class='liveSearchText'>
						" .substr($row['fundi_full_name'], 0, 10) .$more_first_name. " " . substr($row['fundi_last_name'], 0, 10).$more_last_name . "
						<p>" . substr($row['shop_name'], 0, 27).$more_shop_name ."</p>
						<p id='grey'>" . $mutual_friends ."</p>
					</div>
				</a>
				</div>";

	}

?>