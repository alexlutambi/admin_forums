<?php
include("../../../database/connection.php");
include("../../includes/classes/Duka.php");

$userLoggedIn = $_POST['userLoggedIn'];

	$usersReturnedQuery = mysqli_query($conn, "SELECT * FROM tbl_maduka ORDER BY duka_id DESC LIMIT 3");

	while($row = mysqli_fetch_array($usersReturnedQuery)) {
		$user = new Duka($conn, $userLoggedIn);

		if($row['shop_name'] != $userLoggedIn)
			$mutual_friends = $user->getMutualDukaTokens($row['duka_id']) . " friends in common";
		else 
			$mutual_friends = "";
		$more_first_name = "";
		$more_last_name = "";
		$more_shop_name= "";
		
		if(strlen($row['duka_full_name']) > 25){
			$more_first_name = "...";
		} 
if(strlen($row['duka_last_name']) > 10){
			$more_last_name = "...";
		} 
		if(strlen($row['shop_name']) > 24){
			$more_shop_name = "...";
		}
		echo "<div class='resultDisplay fundiDisplay'>
				<a href='profile.php?profile_username=" . $row['username'] . "' style='color: #1485BD'>
					<div class='liveSearchProfilePic'>
						<img id='duka-list-img-" . $row['duka_id'] . "' class='duka-list-img duka-list-img-" . $row['duka_id'] . "' duka_id='" . $row['duka_id'] . "' duka_profile='" . $row['duka_profile'] . "' src='../duka/duka_logo_profile/duka_logo_thumb_color/" . $row['duka_thumb_color'] ."'>
					
						</div>
					<div class='liveSearchText'>
						" .substr($row['duka_full_name'], 0, 25) .$more_first_name. "
						<p>" . substr($row['shop_name'], 0, 27).$more_shop_name ."</p>
						<p id='grey'>" . $mutual_friends ."</p>
					</div>
				</a>
				</div>";

	}

?>