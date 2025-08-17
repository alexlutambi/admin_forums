<?php  
include("../../../database/connection.php");
include("../classes/Fundi.php");

$query = $_POST['query'];
$userLoggedIn = $_POST['userLoggedIn'];

if(is_int(filter_var($query, FILTER_VALIDATE_INT)) != null){
$usersReturned = mysqli_query($conn, "SELECT * FROM tbl_mafundi WHERE fundi_id LIKE '$query%' LIMIT 8");
}
else {
	$usersReturned = mysqli_query($conn, "SELECT * FROM tbl_mafundi WHERE shop_name LIKE '%$query%' OR username LIKE '%$query%' LIMIT 8");
}
if($query != "") {
	
	while($row = mysqli_fetch_array($usersReturned)) {

		$user = new Fundi($conn, $userLoggedIn);

		if($row['username'] != $userLoggedIn) {
			$mutual_friends = $user->getMutualFriends($row['username']) . " friends in common";
		}
		else {
			$mutual_friends = "";
		}

			echo "<div class='resultDisplay'>
					<a href='" . $row['username'] . "' style='color: #000'>
						<div class='liveSearchProfilePic'>
								<img id='fundi-list-img-" . $row['fundi_id'] . "' class='fundi-list-img fundi-list-img-" . $row['fundi_id'] . "' fundi_id='" . $row['fundi_id'] . "' fundi_profile='" . $row['fundi_profile'] . "' src='../fundi/fundi_profile/fundi_thumb_color/" . $row['fundi_thumb_color'] ."'>
					
						</div>

						<div class='liveSearchText'>
							".$row['fundi_full_name'] . " " . $row['fundi_last_name']. "
							<p style='margin: 0;'>". $row['shop_name'] . "</p>
							<p id='grey'>".$mutual_friends . "</p>
						</div>
					</a>
				</div>";

	}
}

?>