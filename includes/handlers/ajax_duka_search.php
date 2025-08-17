<?php  
include("../../../database/connection.php");
include("../classes/Duka.php");

$query = $_POST['query'];
$userLoggedIn = $_POST['userLoggedIn'];

if(is_int(filter_var($query, FILTER_VALIDATE_INT)) != null){
$usersReturned = mysqli_query($con, "SELECT * FROM tbl_maduka WHERE duka_id LIKE '$query%' LIMIT 8");
}
else {
	$usersReturned = mysqli_query($con, "SELECT * FROM tbl_maduka WHERE shop_name LIKE '%$query%' OR username LIKE '%$query%' LIMIT 8");
}

if($query != "") {
	while($row = mysqli_fetch_array($usersReturned)) {

		$user = new Duka($con, $userLoggedIn);

		if($row['username'] != $userLoggedIn) {
			$mutual_friends = $user->getMutualDukaTokens($row['username']) . " friends in common";
		}
		else {
			$mutual_friends = "";
		}

			echo "<div class='resultDisplay'>
					<a href='" . $row['username'] . "' style='color: #000'>
						<div class='liveSearchProfilePic'>
							<img id='duka-list-img-" . $row['duka_id'] . "' class='profile-available duka-list-img duka-list-img-" . $row['duka_id'] . "' duka_id='" . $row['duka_id'] . "' duka_profile='" . $row['duka_profile'] . "' src='../duka/duka_logo_profile/duka_logo_thumb_color/" . $row['duka_thumb_color'] ."'>
						</div>

						<div class='liveSearchText'>
							".$row['duka_full_name'] . "
							<p style='margin: 0;'>". $row['shop_name'] . "</p>
							<p id='grey'>".$mutual_friends . "</p>
						</div>
					</a>
				</div>";

	}
}

?>