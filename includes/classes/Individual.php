<?php
class Individual {
	private $individual;
	private $conn;

	public function __construct($conn, $individual){
		$this->con = $conn;
		$user_details_query = mysqli_query($conn, "SELECT * FROM tbl_wateja WHERE username='$individual'");
		$this->individual = mysqli_fetch_array($user_details_query);
	}

	public function getUsername() {
		return $this->individual['username'];
	}

	public function getNumberOfFriendRequests() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT * FROM friend_requests WHERE user_to='$username'");
		return mysqli_num_rows($query);
	}

	public function getNumPosts() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT num_posts FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['num_posts'];
	}

	public function getFirstAndLastName() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT first_name, last_name FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['first_name'] . " " . $row['last_name'];
	}

	public function getProfilePic() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT profile_pic FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['profile_pic'];
	}

	public function getFriendArray() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT token FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);
		return $row['token'];
	}

	public function isClosed() {
		$username = $this->individual['username'];
		$query = mysqli_query($this->con, "SELECT login_status FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['login_status'] == 'LogOut')
			return true;
		else 
			return false;
	}

	public function isFriend($username) {
		
		$query = mysqli_query($this->con, "SELECT login_status FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['login_status'] == 'Enable')
			return true;
		else 
			return false;
	}
public function isIndividualStatus($username) {
		
		$query = mysqli_query($this->con, "SELECT mteja_status FROM tbl_wateja WHERE username='$username'");
		$row = mysqli_fetch_array($query);

		if($row['mteja_status'] == 'Enable')
			return true;
		else 
			return false;
	}
	public function didReceiveRequest($user_from) {
		$user_to = $this->individual['username'];
		$check_request_query = mysqli_query($this->con, "SELECT * FROM friend_requests WHERE user_to='$user_to' AND user_from='$user_from'");
		if(mysqli_num_rows($check_request_query) > 0) {
			return true;
		}
		else {
			return false;
		}
	}

	public function didSendRequest($user_to) {
		$user_from = $this->individual['username'];
		$check_request_query = mysqli_query($this->con, "SELECT * FROM friend_requests WHERE user_to='$user_to' AND user_from='$user_from'");
		if(mysqli_num_rows($check_request_query) > 0) {
			return true;
		}
		else {
			return false;
		}
	}

	public function cancelRequest($user_to) {
		$user_from = $this->individual['username'];
		mysqli_query($this->con, "DELETE FROM friend_requests WHERE user_to='$user_to' AND user_from='$user_from'");
	}

	public function removeFriend($user_to_remove) {
		$logged_in_user = $this->individual['username'];

		$query = mysqli_query($this->con, "SELECT token FROM tbl_wateja WHERE username='$user_to_remove'");
		$row = mysqli_fetch_array($query);
		$friend_array_username = $row['token'];

		$new_friend_array = str_replace($user_to_remove . ",", "", $this->individual['token']);
		$remove_friend = mysqli_query($this->con, "UPDATE tbl_wateja SET token='$new_friend_array' WHERE username='$logged_in_user'");

		$new_friend_array = str_replace($this->individual['username'] . ",", "", $friend_array_username);
		$remove_friend = mysqli_query($this->con, "UPDATE tbl_wateja SET token='$new_friend_array' WHERE username='$user_to_remove'");
	}

	public function sendRequest($user_to) {
		$user_from = $this->individual['username'];
		$query = mysqli_query($this->con, "INSERT INTO friend_requests VALUES (NULL, '$user_to', '$user_from')");
	}

	public function getMutualFriends($user_to_check) {
		$mutualFriends = 0;
	
		return $mutualFriends;

	}
public function getMutualIndividualTokens($user_to_check) {
		$mutualFriends = 0;
	
		return $mutualFriends;

	}
	public function getFriendsList() {
		$friend_array_string = $this->individual['token']; //Get friend array string from table

		return $friend_array_string; //Split to array at each comma
	}




}

?>