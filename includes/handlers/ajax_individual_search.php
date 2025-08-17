<?php  
include("../../../database/connection.php");
include("../classes/Individual.php");

$query = $_POST['query'];
$userLoggedIn = $_POST['userLoggedIn'];

if(is_int(filter_var($query, FILTER_VALIDATE_INT)) != null){
$usersReturned = mysqli_query($con, "SELECT * FROM tbl_wateja WHERE mteja_id LIKE '$query%' LIMIT 8");
}
else {
	$usersReturned = mysqli_query($con, "SELECT * FROM tbl_wateja WHERE mteja_full_name LIKE '%$query%' OR username LIKE '%$query%' LIMIT 8");
}

if($query != "") {
	while($row = mysqli_fetch_array($usersReturned)) {

		$user = new Individual($con, $userLoggedIn);

		if($row['username'] != $userLoggedIn) {
			$mutual_friends = $user->getMutualIndividualTokens($row['username']) . " friends in common";
		}
		else {
			$mutual_friends = "";
		}

			echo "<div class='resultDisplay'>
					<a href='" . $row['username'] . "' style='color: #000'>
						<div class='liveSearchProfilePic'>
							<img id='individual-list-img-" . $row['mteja_id'] . "' class='profile-available individual-list-img individual-list-img-" . $row['mteja_id'] . "' mteja_id='" . $row['mteja_id'] . "' mteja_profile='" . $row['mteja_profile'] . "' src='../mteja/mteja_profile/mteja_thumb_color/" . $row['mteja_thumb_color'] ."'>
						</div>

						<div class='liveSearchText'>
							".$row['mteja_full_name'] . "
							<p style='margin: 0;'>". $row['username'] . "</p>
							<p id='grey'>".$mutual_friends . "</p>
						</div>
					</a>
				</div>";

	}
}

?>