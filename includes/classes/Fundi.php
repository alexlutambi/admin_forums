<?php
class Fundi {
	private $fundi;
	private $con;

	public function __construct($con, $fundi){
		$this->con = $con;
		$user_details_query = mysqli_query($con, "SELECT * FROM tbl_mafundi WHERE username='$fundi'");
		$this->fundi = mysqli_fetch_array($user_details_query);
	}

	public function getUsername() {
		return $this->fundi['username'];
	}

	public function getNumberOfFriendRequests() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT * FROM friend_requests WHERE user_to='$username'");
		return mysqli_num_rows($query);
	}

	public function getNumPosts() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT num_posts FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['num_posts'];
	}

	public function getFirstAndLastName() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT first_name, last_name FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['first_name'] . " " . $row['last_name'];
	}

	public function getProfilePic() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT profile_pic FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['profile_pic'];
	}

	public function getFriendArray() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT token FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['token'];
	}

	public function isClosed() {
		$username = $this->fundi['username'];
		$query = mysqli_query($this->con, "SELECT login_status FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['login_status'] == 'LogOut')
			return true;
		else 
			return false;
	}

	public function isFriend($username) {
		
		$query = mysqli_query($this->con, "SELECT login_status FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['login_status'] == 'Enable')
			return true;
		else 
			return false;
	}
public function isFundiStatus($username) {
		
		$query = mysqli_query($this->con, "SELECT fundi_status FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['fundi_status'] == 'Enable')
			return true;
		else 
			return false;
	}
	public function didReceiveRequest($username) {
	$query = mysqli_query($this->con, "SELECT fundi_status FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['fundi_status'] == 'Enable')
			return true;
		else 
			return false;
	}

	public function didSendRequest($username) {
		$query = mysqli_query($this->con, "SELECT fundi_status FROM tbl_mafundi WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['fundi_status'] == 'Enable')
			return true;
		else 
			return false;
	}

	public function cancelRequest($user_to) {
		$user_from = $this->fundi['username'];
		mysqli_query($this->con, "DELETE FROM friend_requests WHERE user_to='$user_to' AND user_from='$user_from'");
	}

	public function removeFriend($user_to_remove) {
		$logged_in_user = $this->fundi['username'];

		$query = mysqli_query($this->con, "SELECT token FROM tbl_mafundi WHERE username='$user_to_remove'");
		$row = mysqli_fetch_array($query);
		$friend_array_username = $row['token'];

		$new_friend_array = str_replace($user_to_remove . ",", "", $this->fundi['token']);
		$remove_friend = mysqli_query($this->con, "UPDATE tbl_mafundi SET token='$new_friend_array' WHERE username='$logged_in_user'");

		$new_friend_array = str_replace($this->fundi['username'] . ",", "", $friend_array_username);
		$remove_friend = mysqli_query($this->con, "UPDATE tbl_mafundi SET token='$new_friend_array' WHERE username='$user_to_remove'");
	}

	public function sendRequest($user_to) {
		$user_from = $this->fundi['username'];
		$query = mysqli_query($this->con, "INSERT INTO friend_requests VALUES (NULL, '$user_to', '$user_from')");
	}

	public function getMutualFriends($user_to_check) {
		$mutualFriends = 0;
	
		return $mutualFriends;

	}
public function getMutualFundiTokens($user_to_check) {
		$mutualFriends = 0;
	
		return $mutualFriends;

	}
	public function getFriendsList() {
		$friend_array_string = $this->fundi['token']; //Get friend array string from table

		return $friend_array_string; //Split to array at each comma
	}




}

?>