<?php
include("includes/header.php");

if(isset($_GET['username'])) {
	$username = $_GET['username'];
}
else {
	$username = $userLoggedIn;
}
?>

<div class="main_column column" id="main_column">

	<?php
		$user_obj = new User($conn, $username);
		foreach($user_obj->getFriendsList() as $friend) {
			$friend_obj = new User($conn, $friend);
			echo "<a href='profile_admin.php?profile_username=";
			echo " $friend'>
					<img class='profilePicSmall' src='" . $friend_obj->getProfilePic() ."'>"
					 . $friend_obj->getFirstAndLastName() . 
				"</a>
				<br>";
		}
	?>

</div>