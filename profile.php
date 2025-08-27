<?php 
include("includes/header.php");

$message_obj = new Message($conn, $userLoggedIn);
$account_type = "";
if(isset($_GET['profile_username'])) {
	$username = $_GET['profile_username'];
$user_details_query = mysqli_query($conn, "SELECT * FROM tbl_mafundi WHERE username='$username'");
$account_type = "fundi";
  if(mysqli_num_rows($user_details_query) == 0) {
    $account_type = "duka";
     $user_details_query = mysqli_query($conn, "SELECT * FROM tbl_maduka WHERE username='$username'");

  if(mysqli_num_rows($user_details_query) == 0) {
      $user_details_query = mysqli_query($conn, "SELECT * FROM tbl_wateja WHERE username='$username'");
$account_type = "mteja";
  if(mysqli_num_rows($user_details_query) == 0) {
    echo "user does not exist : ".$username;
    $account_type = "";
    exit();
  }else{
$user_array = mysqli_fetch_array($user_details_query);

  }


  }else{
$user_array = mysqli_fetch_array($user_details_query);

  }

	
  }else{
$user_array = mysqli_fetch_array($user_details_query);

  }

	
  
	
}

if(isset($_GET['profile_username'])) {
	$username = $_GET['profile_username'];
	$user_address_details_query = mysqli_query($conn, " SELECT * FROM tbl_fundi_address INNER JOIN tbl_countries ON tbl_countries.country_id = tbl_fundi_address.country_id INNER JOIN tbl_regions ON tbl_regions.region_id = tbl_fundi_address.region_id INNER JOIN tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_fundi_address.wilaya_id WHERE fundi_id IN(SELECT fundi_id FROM tbl_mafundi WHERE username='$username')");

  if(mysqli_num_rows($user_address_details_query) == 0) {
   	$user_address_details_query = mysqli_query($conn, " SELECT * FROM tbl_maduka_address INNER JOIN tbl_countries ON tbl_countries.country_id = tbl_maduka_address.country_id INNER JOIN tbl_regions ON tbl_regions.region_id = tbl_maduka_address.region_id INNER JOIN tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_maduka_address.wilaya_id WHERE duka_id IN(SELECT duka_id FROM tbl_maduka WHERE username='$username')");

  if(mysqli_num_rows($user_address_details_query) == 0) {
   	$user_address_details_query = mysqli_query($conn, " SELECT * FROM tbl_mteja_address INNER JOIN tbl_countries ON tbl_countries.country_id = tbl_mteja_address.country_id INNER JOIN tbl_regions ON tbl_regions.region_id = tbl_mteja_address.region_id INNER JOIN tbl_wilaya ON tbl_wilaya.wilaya_id = tbl_mteja_address.wilaya_id WHERE mteja_id IN(SELECT mteja_id FROM tbl_wateja WHERE username='$username')");

  if(mysqli_num_rows($user_address_details_query) == 0) {
    echo "address fundi does not exist";
    exit();
  }else{
$user_address_array = mysqli_fetch_array($user_address_details_query);

  }

  }else{
$user_address_array = mysqli_fetch_array($user_address_details_query);

  }

  }else{
$user_address_array = mysqli_fetch_array($user_address_details_query);

  }

}
if(isset($_GET['profile_username'])) {
	$username = $_GET['profile_username'];
	$fundi_tokens_query = mysqli_query($conn, "SELECT *, (SELECT SUM(amount) FROM transactions WHERE user_id = tbl_fundi_kazi_jumla.fundi_id AND status = 'success') AS total_payment FROM tbl_fundi_kazi_jumla WHERE fundi_id IN(SELECT fundi_id FROM tbl_mafundi WHERE username='$username')");

  $data_token_available = true;

  if(mysqli_num_rows($fundi_tokens_query) == 0) {
   $fundi_tokens_query = mysqli_query($conn, "SELECT *, (SELECT SUM(amount) FROM transactions WHERE user_id = tbl_duka_kazi_jumla.duka_id AND status = 'success') AS total_payment FROM tbl_duka_kazi_jumla WHERE duka_id IN(SELECT duka_id FROM tbl_maduka WHERE username='$username')");

  $data_token_available = true;

  if(mysqli_num_rows($fundi_tokens_query) == 0) {
 $fundi_tokens_query = mysqli_query($conn, "SELECT *, (SELECT SUM(amount) FROM transactions WHERE user_id = tbl_mteja_kazi_jumla.mteja_id AND status = 'success') AS total_payment FROM tbl_mteja_kazi_jumla WHERE mteja_id IN(SELECT mteja_id FROM tbl_wateja WHERE username='$username')");

  $data_token_available = true;

  if(mysqli_num_rows($fundi_tokens_query) == 0) {
    $data_token_available = false;
  }else{
    $fundi_tokens_array = mysqli_fetch_array($fundi_tokens_query);

  }
  }else{
    $fundi_tokens_array = mysqli_fetch_array($fundi_tokens_query);

  }
  }else{
	$fundi_tokens_array = mysqli_fetch_array($fundi_tokens_query);

  }


}

if(isset($_GET['profile_username'])) {
	$username = $_GET['profile_username'];
	$fundi_paymets_query = mysqli_query($conn, "SELECT * FROM transactions WHERE user_status = 'fundi' AND  user_id IN(SELECT fundi_id FROM tbl_mafundi WHERE username='$username') ORDER BY id DESC");
$data_payment_available = true;
  
  if(mysqli_num_rows($fundi_paymets_query) == 0) {
   	$fundi_paymets_query = mysqli_query($conn, "SELECT * FROM transactions WHERE user_status = 'duka' AND  user_id IN(SELECT duka_id FROM tbl_maduka WHERE username='$username') ORDER BY id DESC");
$data_payment_available = true;
  
  if(mysqli_num_rows($fundi_paymets_query) == 0) {
    	$fundi_paymets_query = mysqli_query($conn, "SELECT * FROM transactions WHERE user_status = 'mteja' AND  user_id IN(SELECT mteja_id FROM tbl_wateja WHERE username='$username') ORDER BY id DESC");
$data_payment_available = true;
  
  if(mysqli_num_rows($fundi_paymets_query) == 0) {
    $data_payment_available = false;
  
  }
  }
  }

}

if(isset($_GET['profile_username'])) {
	$username = $_GET['profile_username'];
	$fundi_professional_query = mysqli_query($conn, " SELECT * FROM tbl_fundi_registered_professional INNER JOIN tbl_fundi_professional ON tbl_fundi_professional.professional_id = tbl_fundi_registered_professional.professional_id WHERE fundi_id IN(SELECT fundi_id FROM tbl_mafundi WHERE username='$username') ORDER BY fundi_reg_pro_id DESC");
$data_professional_available = true;
  
  if(mysqli_num_rows($fundi_professional_query) == 0) {
   	$fundi_professional_query = mysqli_query($conn, " SELECT *, (SELECT COUNT(*) FROM tbl_maduka_products WHERE professional_id = tbl_maduka_registered_professional.professional_id AND duka_id IN(SELECT duka_id FROM tbl_maduka WHERE username='$username')) AS total_product FROM tbl_maduka_registered_professional INNER JOIN tbl_fundi_professional ON tbl_fundi_professional.professional_id = tbl_maduka_registered_professional.professional_id WHERE duka_id IN(SELECT duka_id FROM tbl_maduka WHERE username='$username') ORDER BY duka_id DESC");
$data_professional_available = true;
  
  if(mysqli_num_rows($fundi_professional_query) == 0) {
    $data_professional_available = false;
  
  }
  
  }

}

if(isset($_POST['remove_friend'])) {
  $user = new User($conn, $userLoggedIn);
  $user->removeFriend($username);
}

if(isset($_POST['add_friend'])) {
	$user = new User($conn, $userLoggedIn);
	$user->sendRequest($username);
}

if(isset($_POST['respond_request'])) {
	header("Location: requests.php");
}

if(isset($_POST['cancel_request'])) {
  $user = new User($conn, $userLoggedIn);
  $user->cancelRequest($username);
}

if(isset($_POST['post_message'])) {
  if(isset($_POST['message_body'])) {
    $body = mysqli_real_escape_string($conn, $_POST['message_body']);
    $date = date("Y-m-d H:i:s");
    $message_obj->sendMessage($username, $body, $date);
  }

  $link = '#profileTabs a[href="#messages_div"]';
  echo "<script> 
          $(function() {
              $('" . $link ."').tab('show');
          });
        </script>";


}

 ?>

 	<style type="text/css">
	 	.wrapper {
	 		margin-left: 0px;
			padding-left: 0px;
	 	}
 	</style>
	
 	<div id="profile-left" class="profile-left profile_left" account_type="<?php echo $account_type; ?>">

   <?php  if($account_type == "fundi"){ ?>
<img id="fundi-profile-img-<?php echo $user_array['fundi_id']; ?>" class="profile-available fundi-profile-img fundi-profile-img-<?php echo $user_array['fundi_id']; ?>" fundi_id="<?php echo $user_array['fundi_id']; ?>" fundi_profile="<?php echo $user_array['fundi_profile']; ?>" src="../fundi/fundi_profile/fundi_thumb_color/<?php echo $user_array['fundi_thumb_color']; ?>">
    <?php }else if($account_type == "duka"){ ?>
<img id="duka-profile-img-<?php echo $user_array['duka_id']; ?>" class="profile-available duka-profile-img duka-profile-img-<?php echo $user_array['duka_id']; ?>" duka_id="<?php echo $user_array['duka_id']; ?>" duka_profile="<?php echo $user_array['duka_profile']; ?>" src="../duka/duka_profile/duka_thumb_color/<?php echo $user_array['duka_thumb_color']; ?>">
    <?php } else if($account_type == "mteja"){ ?>
 		<img id="individual-profile-img-<?php echo $user_array['mteja_id']; ?>" class="profile-available individual-profile-img individual-profile-img-<?php echo $user_array['mteja_id']; ?>" mteja_id="<?php echo $user_array['mteja_id']; ?>" mteja_profile="<?php echo $user_array['mteja_profile']; ?>" src="../mteja/mteja_profile/mteja_thumb_color/<?php echo $user_array['mteja_thumb_color']; ?>">
      <?php } ?>
 		<div class="profile_info">
      <?php if($account_type == "fundi"){ ?>
 			<p><?php echo "Fundi Id: " . $user_array['fundi_id']; ?></p>
      <?php } else if($account_type == "duka"){  ?>
<p><?php echo "Duka Id: " . $user_array['duka_id']; ?></p>
        <?php } else if($account_type == "mteja"){  ?>
<p><?php echo "Individual Id: " . $user_array['mteja_id']; ?></p>
          <?php } ?>
 			<p><?php echo "Login Status: " . $user_array['login_status']; ?></p>
 			<p><?php echo "Friends: " . 0 ?></p>
        <?php if($account_type == "fundi"){ ?>
      <?php if($user_array['fundi_id'] > 0){?><p><a href="friends.php">View friends</a></p><?php } ?>
         <?php } else if($account_type == "duka"){ ?>
 <?php if($user_array['duka_id'] > 0){?><p><a href="friends.php">View friends</a></p><?php } ?>
             <?php } else if($account_type == "mteja"){ ?>
               <?php if($user_array['mteja_id'] > 0){?><p><a href="friends.php">View friends</a></p><?php } ?>
                <?php } ?>
 		</div>

 	
 			<?php 
      if($account_type == "fundi"){ 

 			$profile_user_obj = new Fundi($conn, $username); 
 			if($profile_user_obj->isClosed()) {
        echo '<div class="user-is-logged-out">Logged Out</div>';
 				// header("Location: user_closed.php");
 			}

    }else if($account_type == "duka"){
	$profile_user_obj = new Duka($conn, $username); 
 			if($profile_user_obj->isClosed()) {
         echo '<div class="user-is-logged-out">Logged Out</div>';
 				// header("Location: user_closed.php");
 			}
    }else if($account_type == "mteja"){ 
      $profile_user_obj = new Individual($conn, $username); 
 			if($profile_user_obj->isClosed()) {
         echo '<div class="user-is-logged-out">Logged Out</div>';
 				// header("Location: user_closed.php");
 			}
    }

 		
 			if($userLoggedIn != $username) {


  echo '<div id="fundi-activation-deactivation-container-';
  if($account_type == "fundi"){ 
  echo $user_array['fundi_id'];
  }else if($account_type == "duka"){
 echo $user_array['duka_id'];
  }else if($account_type == "mteja"){
 echo $user_array['mteja_id'];
  }
    echo '" class="fundi-activation-deactivation-container">';

   if($account_type == "fundi"){ 
$logged_in_fundi_obj = new Fundi($conn, $userLoggedIn); 
if($logged_in_fundi_obj->isFundiStatus($username)) {
        
 					echo '<button id="btn-activate-deactivate-';
            echo $user_array['fundi_id'];
          echo '" fundi_id="';
          echo $user_array['fundi_id'];
          echo '" fundi_status="';
          if($user_array['fundi_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			echo '<button id="btn-activate-deactivate-';
                  echo $user_array['fundi_id'];
                echo '" fundi_id="';
          echo $user_array['fundi_id'];
          echo '" fundi_status="';
          if($user_array['fundi_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate success" >Activate</button>';
        }

        echo '<button id="btn-default-password-';
                  echo $user_array['fundi_id'];
                echo '" fundi_id="';
          echo $user_array['fundi_id'];
          echo '" fundi_status="';
          if($user_array['fundi_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-default-password warning" >Default Password</button>';
  }else if($account_type == "duka"){
    $logged_in_duka_obj = new Duka($conn, $userLoggedIn); 
if($logged_in_duka_obj->isDukaStatus($username)) {
        
 					echo '<button id="btn-activate-deactivate-';
            echo $user_array['duka_id'];
           echo '" duka_id="';
          echo $user_array['duka_id'];
          echo '" duka_status="';
          if($user_array['duka_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			echo '<button id="btn-activate-deactivate-';
                echo $user_array['duka_id'];
                echo '" duka_id="';
          echo $user_array['duka_id'];
          echo '" duka_status="';
          if($user_array['duka_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate success" >Activate</button>';
        }

          echo '<button id="btn-default-password-';
                  echo $user_array['duka_id'];
                echo '" duka_id="';
          echo $user_array['duka_id'];
          echo '" duka_status="';
          if($user_array['duka_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-default-password warning" >Default Password</button>';

  }else if($account_type == "mteja"){ 
        $logged_in_mteja_obj = new Individual($conn, $userLoggedIn); 
if($logged_in_mteja_obj->isIndividualStatus($username)) {
        
 					echo '<button id="btn-activate-deactivate-';
           echo $user_array['mteja_id'];
          echo '" mteja_id="';
          echo $user_array['mteja_id'];
          echo '" mteja_status="';
          if($user_array['mteja_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			echo '<button id="btn-activate-deactivate-';
                echo $user_array['mteja_id'];
                 echo '" mteja_id="';
          echo $user_array['mteja_id'];
          echo '" mteja_status="';
          if($user_array['mteja_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-activate-deactivate success" >Activate</button>';
        }

        echo '<button id="btn-default-password-';
                  echo $user_array['mteja_id'];
                echo '" mteja_id="';
          echo $user_array['mteja_id'];
          echo '" mteja_status="';
          if($user_array['mteja_status'] == 'Enable'){
            echo 'DisEnable';
          }else{
            echo 'Enable';
          }
          echo '" account_type="';
          echo $account_type;
          echo '" class="btn-default-password warning" >Default Password</button>';    
  }
 			echo '</div>';
 			}
   echo '<div id="default-password-container" class="default-password-container">';
        
      echo '</div>';
 			?>
 		
 		<input type="submit" class="deep_blue" data-toggle="modal" data-target="#post_form" value="Post Something">

    <?php  
    if($userLoggedIn != $username) {
      echo '<div class="profile_info_bottom">';
        echo $username . " Mutual friends";
      echo '</div>';
    }


    ?>

 	</div>


	<div class="profile_main_column column">

    <ul class="nav nav-tabs" role="tablist" id="profileTabs">
      <li role="presentation" class="active"><a href="#newsfeed_div" aria-controls="newsfeed_div" role="tab" data-toggle="tab">Newsfeed</a></li>
      <li role="presentation"><a href="#messages_div" aria-controls="messages_div" role="tab" data-toggle="tab">Messages</a></li>
      <li role="presentation"><a href="#payments_div" aria-controls="payments_div" role="tab" data-toggle="tab">Payments</a></li>
      <li role="presentation"><a href="#more_div" aria-controls="more_div" role="tab" data-toggle="tab">More</a></li>
    
    </ul>

    <div class="tab-content">

      <div role="tabpanel" class="tab-pane active" id="newsfeed_div">
        <div class="posts_area">feed</div>
        <img id="loading" src="assets/images/icons/loading.gif">
      </div>
 <div role="tabpanel" class="tab-pane" id="payments_div">
   <?php if($account_type == "fundi"){ ?>

                    <div class="posts_area"><h3>Available tokens : <b id="available-token-<?php echo $user_array['fundi_id']; ?>"><?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?></b></h3></div>
        
      <?php }else if($account_type == "duka"){ ?>

  <div class="posts_area"><h3>Available tokens : <b id="available-token-<?php echo $user_array['duka_id']; ?>"><?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?></b></h3></div>
        
      <?php }else if($account_type == "mteja"){ ?>
<div class="posts_area"><h3>Available tokens : <b id="available-token-<?php echo $user_array['mteja_id']; ?>"><?php if($data_token_available){ echo $fundi_tokens_array['total_token']; }else{ echo 0; } ?></b></h3></div>
        
      <?php } ?>

        <?php 
        if($data_payment_available){
          ?>
          <div class="tbl_container">
  <div class="row">
    <div class="col-xs-12">
      <table class="table table-bordered table-hover dt-responsive">
       
        <thead>
                    <th>Transaction Id</th>
                    <th>Fundi Id</th>
                    <th>Amount</th>
                    <th>Kazi</th>
                    <th>Currency</th>
                    <th>Provider</th>
                    <th>Status</th>
                    <th>Date</th>
                </thead>
                <tbody>
                  <?php
                  
          while($payment = mysqli_fetch_array($fundi_paymets_query)) {
			$transaction_id = $payment['id'];
			$user_id = $payment['user_id'];
			$amount = $payment['amount'];
			$total_kazi = $payment['total_kazi'];
$currency = $payment['currency'];
$provider = $payment['provider'];
$added_date = $payment['added_date'];
$status = $payment['status'];


			//Timeframe
			$date_time_now = date("Y-m-d H:i:s");
			$start_date = new DateTime($added_date); //Time of post
			$end_date = new DateTime($date_time_now); //Current time
			$interval = $start_date->diff($end_date); //Difference between dates 
			if($interval->y >= 1) {
				if($interval == 1)
					$time_message = $interval->y . " year ago"; //1 year ago
				else 
					$time_message = $interval->y . " years ago"; //1+ year ago
			}
			else if ($interval->m >= 1) {
				if($interval->d == 0) {
					$days = " ago";
				}
				else if($interval->d == 1) {
					$days = $interval->d . " day ago";
				}
				else {
					$days = $interval->d . " days ago";
				}


				if($interval->m == 1) {
					$time_message = $interval->m . " month". $days;
				}
				else {
					$time_message = $interval->m . " months". $days;
				}

			}
			else if($interval->d >= 1) {
				if($interval->d == 1) {
					$time_message = "Yesterday";
				}
				else {
					$time_message = $interval->d . " days ago";
				}
			}
			else if($interval->h >= 1) {
				if($interval->h == 1) {
					$time_message = $interval->h . " hour ago";
				}
				else {
					$time_message = $interval->h . " hours ago";
				}
			}
			else if($interval->i >= 1) {
				if($interval->i == 1) {
					$time_message = $interval->i . " minute ago";
				}
				else {
					$time_message = $interval->i . " minutes ago";
				}
			}
			else {
				if($interval->s < 30) {
					$time_message = "Just now";
				}
				else {
					$time_message = $interval->s . " seconds ago";
				}
			}

			?>
                    <tr>
                        <td><?php echo $transaction_id; ?></td>
                        <td><?php echo $user_id; ?></td>
                        <td><?php echo $amount; ?></td>
                        <td><?php echo $total_kazi; ?></td>
                        <td><?php echo $currency; ?></td>
                        <td><?php echo $provider; ?></td>
                        <td><P  class="payment_status <?php if($status == 'success'){?> success <?php } else if($status == 'pending'){?> pending <?php } ?>"><?php echo $status; ?></P></td>
                        <td><?php echo $added_date; ?></td>
                    </tr>
		
			<?php

		}//end while
  ?>

        </tbody>
        <tfoot>
          <tr>
            <td colspan="8" class="text-center"><h3>Total amount payed : <?php if($data_token_available && $fundi_tokens_array['total_payment'] != null){ echo $fundi_tokens_array['total_payment']; }else{ echo 0; } ?>
  </h3></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>
    
  <?php
        }else{
          ?>
          <p>no payment available</p>
          <?php
        }
        ?>
           <!-- add token starts -->
 <?php if($account_type == "fundi"){ ?>
 <div id="user-add-token-post-container-<?php echo $user_array['fundi_id']; ?>" class="user-add-token-post-container-<?php echo $user_array['fundi_id']; ?> user-add-token-post-container">
              <input id="user-add-token-post-value-<?php echo $user_array['fundi_id']; ?>" class="user-add-token-post-value-<?php echo $user_array['fundi_id']; ?> user-add-token-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-add-token-post-btn-<?php echo $user_array['fundi_id']; ?>" fundi_id="<?php echo $user_array['fundi_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?>" class="user-add-token-post-btn-<?php echo $user_array['fundi_id']; ?> user-add-token-post-btn success" account_type= "<?php echo $account_type; ?>" >Add Token</button>
        </div>
       <?php }else if($account_type == "duka"){ ?>
  <div id="user-add-token-post-container-<?php echo $user_array['duka_id']; ?>" class="user-add-token-post-container-<?php echo $user_array['duka_id']; ?> user-add-token-post-container">
              <input id="user-add-token-post-value-<?php echo $user_array['duka_id']; ?>" class="user-add-token-post-value-<?php echo $user_array['duka_id']; ?> user-token-add-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-add-token-post-btn-<?php echo $user_array['duka_id']; ?>" duka_id="<?php echo $user_array['duka_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?>" class="user-add-token-post-btn-<?php echo $user_array['duka_id']; ?> user-add-token-post-btn success" account_type= "<?php echo $account_type; ?>" >Add Token</button>
        </div>
           <?php } else if($account_type == "mteja"){ ?>
<div id="user-add-token-post-container-<?php echo $user_array['mteja_id']; ?>" class="user-add-token-post-container-<?php echo $user_array['mteja_id']; ?> user-add-token-post-container">
              <input id="user-add-token-post-value-<?php echo $user_array['mteja_id']; ?>" class="user-add-token-post-value-<?php echo $user_array['mteja_id']; ?> user-add-token-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-add-token-post-btn-<?php echo $user_array['mteja_id']; ?>" mteja_id="<?php echo $user_array['mteja_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_token']; }else{ echo 0; } ?>" class="user-add-token-post-btn-<?php echo $user_array['mteja_id']; ?> user-add-token-post-btn success" account_type= "<?php echo $account_type; ?>" >Add Token</button>
        </div>
              <?php } ?>
           <!-- add token ends -->

              <!-- remove token starts -->
 <?php if($account_type == "fundi"){ ?>
 <div id="user-sub-token-post-container-<?php echo $user_array['fundi_id']; ?>" class="user-sub-token-post-container-<?php echo $user_array['fundi_id']; ?> user-sub-token-post-container">
              <input id="user-sub-token-post-value-<?php echo $user_array['fundi_id']; ?>" class="user-sub-token-post-value-<?php echo $user_array['fundi_id']; ?> user-sub-token-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-sub-token-post-btn-<?php echo $user_array['fundi_id']; ?>" fundi_id="<?php echo $user_array['fundi_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?>" class="user-sub-token-post-btn-<?php echo $user_array['fundi_id']; ?> user-sub-token-post-btn danger" account_type= "<?php echo $account_type; ?>" >sub Token</button>
        </div>
       <?php }else if($account_type == "duka"){ ?>
  <div id="user-sub-token-post-container-<?php echo $user_array['duka_id']; ?>" class="user-sub-token-post-container-<?php echo $user_array['duka_id']; ?> user-sub-token-post-container">
              <input id="user-sub-token-post-value-<?php echo $user_array['duka_id']; ?>" class="user-sub-token-post-value-<?php echo $user_array['duka_id']; ?> user-sub-token-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-sub-token-post-btn-<?php echo $user_array['duka_id']; ?>" duka_id="<?php echo $user_array['duka_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_kazi']; }else{ echo 0; } ?>" class="user-sub-token-post-btn-<?php echo $user_array['duka_id']; ?> user-sub-token-post-btn danger" account_type= "<?php echo $account_type; ?>" >sub Token</button>
        </div>
           <?php } else if($account_type == "mteja"){ ?>
<div id="user-sub-token-post-container-<?php echo $user_array['mteja_id']; ?>" class="user-sub-token-post-container-<?php echo $user_array['mteja_id']; ?> user-sub-token-post-container">
              <input id="user-sub-token-post-value-<?php echo $user_array['mteja_id']; ?>" class="user-sub-token-post-value-<?php echo $user_array['mteja_id']; ?> user-sub-token-post-value" type="number" name="reg_admin_group_code" placeholder="Enter token" required>
						<button id="user-sub-token-post-btn-<?php echo $user_array['mteja_id']; ?>" mteja_id="<?php echo $user_array['mteja_id']; ?>" current_token = "<?php if($data_token_available){ echo $fundi_tokens_array['total_token']; }else{ echo 0; } ?>" class="user-sub-token-post-btn-<?php echo $user_array['mteja_id']; ?> user-sub-token-post-btn danger" account_type= "<?php echo $account_type; ?>" >sub Token</button>
        </div>
              <?php } ?>
              <!-- remove token ends -->
      
      </div>
       <div role="tabpanel" class="tab-pane" id="more_div">
        <div class="posts_area">more</div>
                <div class="tbl_container">
  <div class="row">
    <div class="col-xs-12">
      <table class="table table-bordered table-hover dt-responsive">
       
        <thead>
                    <th>Personal</th>
                    <th>Address</th>
                    <?php if($data_professional_available){ ?>
                    <th>Activities</th>
                <?php } ?>
                </thead>
                <tbody>

       <tr>
                        <td>
                          <!-- sub personal table starts -->
                           <table class="table table-bordered table-hover dt-responsive">
                <tbody>

       <tr>
        <!-- if($account_type == "fundi"){
  duka -->

  <?php if($account_type == "fundi"){ ?>
                        <td class="more-personal-header">Fundi id</td>
                        <td><?php echo $user_array['fundi_id']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                           <td class="more-personal-header">Duka id</td>
                        <td><?php echo $user_array['duka_id']; ?></td>
                          <?php } else if($account_type == "mteja"){ ?>
                             <td class="more-personal-header">Individual id</td>
                                <td><?php echo $user_array['mteja_id']; ?></td>
                            <?php } ?>
                    </tr>
		  <tr>
         <?php if($account_type == "fundi"){ ?>
                        <td class="more-personal-header">Created</td>
                        <td><?php echo $user_array['created']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                          <td class="more-personal-header">Created</td>
                        <td><?php echo $user_array['created']; ?></td>
                          <?php } else if($account_type == "mteja"){  ?>
                                <td class="more-personal-header">Created</td>
                             <td><?php echo $user_array['created']; ?></td>
                        <?php } ?>
                    </tr>
	  <tr>
         <?php if($account_type == "fundi"){ ?>
                         <td class="more-personal-header">Email</td>
                        <td><?php echo $user_array['fundi_email']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                          <td class="more-personal-header">Email</td>
                        <td><?php echo $user_array['duka_email']; ?></td>
                          <?php }else if($account_type == "mteja"){ ?>
                              <td class="more-personal-header">Email</td>
                          <td><?php echo $user_array['user_email']; ?></td>
                       <?php } ?>
                    </tr>
                      <tr>
                         <?php if($account_type == "fundi"){ ?>
                           <td class="more-personal-header">Full Name</td>
                        <td><?php echo $user_array['fundi_full_name']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                         <td class="more-personal-header">Full Name</td>
                        <td><?php echo $user_array['duka_full_name']; ?></td>
                          <?php }else if($account_type == "mteja"){  ?>
                            <td class="more-personal-header">Full Name</td>
                                <td><?php echo $user_array['mteja_full_name']; ?></td>
                     <?php } ?>
                    </tr>
                      <tr>
                               <tr>
                         <?php if($account_type == "fundi"){ ?>
                        <td class="more-personal-header">Phone</td>
                        <td><?php echo $user_array['fund_phone']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                          <td class="more-personal-header">Phone</td>
                        <td><?php echo $user_array['duka_phone']; ?></td>
                          <?php }else if($account_type == "mteja"){ ?>
                      <td class="more-personal-header">Phone</td>
                        <td><?php echo $user_array['mteja_phone']; ?></td>
                            <?php } ?>
                    </tr>
                      <tr>
                          <?php if($account_type == "fundi"){ ?>
                  <td class="more-personal-header">Office Name</td>
                        <td><?php echo $user_array['shop_name']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                          <td class="more-personal-header">Shop Name</td>
                        <td><?php echo $user_array['shop_name']; ?></td>
                          <?php }else if($account_type == "mteja"){ ?>
                              <td class="more-personal-header">Username</td>
                        <td><?php echo $user_array['username']; ?></td>
                            <?php } ?>
                        
                    </tr>
        </tbody>
        
      </table>
                           <!-- sub personal table ends -->
                        </td>
                        <td>
                                       <!-- sub address table starts -->
                           <table class="table table-bordered table-hover dt-responsive">
                <tbody>

       <tr>
        
      <?php if($account_type == "fundi" || $account_type == "duka"){ ?>
                        <td class="more-address-header">Location</td>
      <?php } ?>
                          <?php if($account_type == "fundi"){ ?>
                  <td><?php echo $user_array['fundi_mahali_kazi']; ?></td>
                        <?php }else if($account_type == "duka"){ ?>
                        <td><?php echo $user_array['duka_mahali_kazi']; ?></td>
                          <?php }?>
                            
                    </tr>
                     <tr>
                        <td class="more-address-header">Nchi</td>

                        <td><?php echo $user_address_array['country_name']; ?></td>
                    </tr>
		  <tr>
                        <td class="more-address-header">Region</td>
                        <td><?php echo $user_address_array['regions']; ?></td>
                    </tr>
	
                     <tr>
                        <td class="more-address-header">Wilaya</td>
                        <td><?php echo $user_address_array['wilaya']; ?></td>
                    </tr>
        </tbody>
        
      </table>
                           <!-- sub address table ends -->
                        </td>
                         <?php  if($data_professional_available){ ?>
                        <td>
                             <!-- sub activities table starts -->
                           <table class="table table-bordered table-hover dt-responsive">
                <tbody>

                  
          <?php 
          $profesional_count = 0;

        
          while($professional = mysqli_fetch_array($fundi_professional_query)) {
            $profesional_count++;
          ?>
       <tr>
                        <td class="more-activity-header">Activity <?php echo $profesional_count; ?></td>
                        <td><?php echo $professional['professional']; ?></td>
                    </tr>
                     <?php } ?>
	
                   
        </tbody>
        
      </table>
                           <!-- sub activities table ends -->
                        </td>
                        	 <?php } ?>
	
                    </tr>
	
        </tbody>
        
      </table>
    </div>
      </div>
      </div>
        <img id="loading" src="assets/images/icons/loading.gif">
      </div>
      <div role="tabpanel" class="tab-pane" id="messages_div">
        <?php  
        

          echo "<h4>You and <a href='profile.php?profile_username=" . $username ."'>" . $username. "</a></h4><hr><br>";

          echo "<div class='loaded_messages' id='scroll_messages'>";
            echo $username;
          echo "</div>";
        ?>



        <div class="message_post">
          <form action="" method="POST">
              <textarea name='message_body' id='message_textarea' placeholder='Write your message ...'></textarea>
              <input type='submit' name='post_message' class='info' id='message_submit' value='Send'>
          </form>

        </div>

        <script>
          $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
              var div = document.getElementById("scroll_messages");
              div.scrollTop = div.scrollHeight;
          });
        </script>
      </div>


    </div>


	</div>

<!-- Modal -->
  <div class="modal fade" id="post_form" tabindex="-1" role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title" id="postModalLabel">Post something</h4>
        </div>

        <div class="modal-body">
          <p>This will appear on the newsfeed for your friends to see. </p>

          <form class="profile_post" action="profile.php" method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <textarea class="form-control" name="post_body"></textarea>
              <input type="hidden" name="user_from" value="<?php echo $userLoggedIn; ?>">
              <input type="hidden" name="user_to" value="<?php echo $username; ?>">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" name="post_button" id="submit_profile_post">Post</button>
        </div>
      </div>
    </div>
  </div>

  <script>
 
 $(function(){
 
         var userLoggedIn = '<?php echo $userLoggedIn; ?>';
        var profileUsername = '<?php echo $username; ?>';
       var inProgress = false;
  
         loadPosts(); //Load first posts
  
         $(window).scroll(function() {
             var bottomElement = $(".status_post").last();
             var noMorePosts = $('.posts_area').find('.noMorePosts').val();            
         
             // isElementInViewport uses getBoundingClientRect(), which requires the HTML DOM object, not the jQuery object. The jQuery equivalent is using [0] as shown below.
             if (isElementInView(bottomElement[0]) && noMorePosts == 'false') {
             loadPosts();
            }
         });
  
         function loadPosts() {
             if(inProgress) { //If it is already in the process of loading some posts, just return
             return;
             }
           
             inProgress = true;
             $('#loading').show();
  
             var page = $('.posts_area').find('.nextPage').val() || 1; //If .nextPage couldn't be found, it must not be on the page yet (it must be the first time loading posts), so use the value '1'
  
             $.ajax({
                 url: "includes/handlers/ajax_load_profile_posts.php",
                 type: "POST",
                 data: "page="+page+"&userLoggedIn=" + userLoggedIn + "&profileUsername=" + profileUsername,
                 cache:false,
  
                 success: function(response) {
                     $('.posts_area').find('.nextPage').remove(); //Removes current .nextpage
                     $('.posts_area').find('.noMorePosts').remove(); //Removes current .nextpage
                     $('.posts_area').find('.noMorePostsText').remove(); //Removes current .nextpage
  
                     $('#loading').hide();
                     $(".posts_area").append(response);
  
                     inProgress = false;
                 }
             });
         }
  
         //Check if the element is in view
         function isElementInView (el) {
             if(el == null) {
                 return;
             }
  
             var rect = el.getBoundingClientRect();
  
             return (
                 rect.top >= 0 &&
                 rect.left >= 0 &&
                 rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //* or $(window).height()
                 rect.right <= (window.innerWidth || document.documentElement.clientWidth) //* or $(window).width()
             );
         }
     });
 </script>





	</div>
</body>
</html>
<script>
	$(document).ready(function() {

	console.log("profile...");
	
	
	var search_text_input_all = document.getElementsByClassName('search-text-input');

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);

	var profile_left_all = document.getElementsByClassName('profile-left');

 for(var a = 0; a < profile_left_all.length; a++){
    var profile_left_id = profile_left_all[a].id;
var profile_left_container = document.getElementById(profile_left_id);
var account_type = profile_left_container.getAttribute("account_type");
 search_text_input_container.setAttribute("search_user_type", account_type);
 }
 }
var search_form_all = document.getElementsByClassName('search-form');

 for(var a = 0; a < search_form_all.length; a++){
    var search_form_id = search_form_all[a].id;
var search_form_id_container = document.getElementById(search_form_id);
var profile_left_all = document.getElementsByClassName('profile-left');

 for(var a = 0; a < profile_left_all.length; a++){
    var profile_left_id = profile_left_all[a].id;
var profile_left_container = document.getElementById(profile_left_id);
var account_type = profile_left_container.getAttribute("account_type");
if(account_type == "fundi"){
search_form_id_container.setAttribute("action", "search_fundi.php");

}else if(account_type == "duka"){
  search_form_id_container.setAttribute("action", "search_duka.php");

}else if(account_type == "mteja"){
  search_form_id_container.setAttribute("action", "search_individual.php");

}
 
 }

 }
 
});

</script>