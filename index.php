<?php 

include("includes/header.php");

if(isset($_POST['post'])){

	$uploadOk = 1;
	$imageName = $_FILES['fileToUpload']['name'];
	$errorMessage = "";

	if($imageName != "") {
		$targetDir = "assets/images/posts/";
		$imageName = $targetDir . uniqid() . basename($imageName);
		$imageFileType = pathinfo($imageName, PATHINFO_EXTENSION);

		if($_FILES['fileToUpload']['size'] > 10000000) {
			$errorMessage = "Sorry your file is too large";
			$uploadOk = 0;
		}

		if(strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpg") {
			$errorMessage = "Sorry, only jpeg, jpg and png files are allowed";
			$uploadOk = 0;
		}

		if($uploadOk) {
			
			if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $imageName)) {
				//image uploaded okay
			}
			else {
				//image did not upload
				$uploadOk = 0;
			}
		}

	}

	if($uploadOk) {
		$post = new Post($conn, $userLoggedIn);
		$post->submitPost($_POST['post_text'], 'none', $imageName);
	}
	else {
		echo "<div style='text-align:center;' class='alert alert-danger'>
				$errorMessage
			</div>";
	}

}
?>
<div class="main_column column">
	<!-- <button onclick="trySampleRequest();">Try sample request</button> -->
	
  
		<form class="post_form" action="index.php" method="POST" enctype="multipart/form-data">
			<input type="file" name="fileToUpload" id="fileToUpload">
			<textarea name="post_text" id="post_text" placeholder="Got Annauncement to say?"></textarea>
			<input type="submit" name="post" id="post_button" value="Post">
			<hr>

		</form>

		<div class="posts_area"></div>
		<!-- <button id="load_more">Load More Posts</button> -->
		<img id="loading" class="hide-content" src="assets/images/icons/loading.gif">


	</div>
	<!-- LEFT USER MAIN CONTAINER STARTS -->
<div id="left-main-user-container" class="left-main-user-container" user_logged_in="<?php echo $_SESSION['username']; ?>">
<div class="user_details column">
		<a href="profile_admin.php?profile_username=<?php echo $userLoggedIn; ?>">  <img src="<?php echo $user['profile_pic']; ?>"> </a>

		<div id="user_details_left_right" admin_id="<?php echo $user['id']; ?>" class="user_details_left_right">
			<a href="profile_admin.php?profile_username=<?php echo $userLoggedIn; ?>">
			<?php 
			echo $user['first_name'] . " " . $user['last_name'];

			 ?>
			</a>
			<br>
			<?php echo "Posts: " . $user['num_posts']. "<br>"; 
			echo "Likes: " . $user['num_likes'];

			?>
		</div>

	</div>
<!--FUNDI LIST STARTS-->
<div id="fundi-list-container" class="user_details column fundi-list-container" user_logged_in="<?php echo $_SESSION['username']; ?>">

		<h4>Mafundi</h4>

		<div class="fundi_results">
			</div>

			<div class="fundi_results_footer_empty">
			</div>
</div>
<!--FUNDI LIST ENDS-->
<!--DUKA LIST STARTS-->
<div id="duka-list-container" class="user_details column duka-list-container" user_logged_in="<?php echo $_SESSION['username']; ?>">

		<h4>MaDuka</h4>

		<div class="duka_results">
			</div>

			<div class="duka_results_footer_empty">
			</div>
</div>
<!--DUKA LIST ENDS-->
<!--USER LIST STARTS-->
<div id="individual-list-container" class="user_details column individual-list-container" user_logged_in="<?php echo $_SESSION['username']; ?>">

		<h4>Individual</h4>

		<div class="individual_results">
			</div>

			<div class="individual_results_footer_empty">
			</div>
</div>
<!--USER LIST ENDS-->
</div>
<div class="user_details column">

		<h4>Popular</h4>

		<div class="trends">
			<?php 
			$query = mysqli_query($conn, "SELECT * FROM trends ORDER BY hits DESC LIMIT 9");

			foreach ($query as $row) {
				
				$word = $row['title'];
				$word_dot = strlen($word) >= 14 ? "..." : "";

				$trimmed_word = str_split($word, 14);
				$trimmed_word = $trimmed_word[0];

				echo "<div style'padding: 1px'>";
				echo $trimmed_word . $word_dot;
				echo "<br></div><br>";


			}

			?>
		</div>


	</div>
	<!-- LEFT USER MAIN CONTAINER ENDS -->

	<script>
	//var userLoggedIn = '<?php echo $userLoggedIn; ?>';
	//var inProgress = false;

	$(document).ready(function() {

		// inProgress = true;
		// $('#loading').show();

		// //Original ajax request for loading first posts 
		// $.ajax({
		// 	url: "includes/handlers/ajax_load_posts.php",
		// 	type: "POST",
		// 	data: "page=1&userLoggedIn=" + userLoggedIn,
		// 	cache:false,

		// 	success: function(data) {
		// 		$('#loading').hide();
		// 		$('.posts_area').html(data);
		// 		inProgress = false;
		// 	}
		// });

		// $(window).scroll(function() {
		// //$('#load_more').on("click", function() {

		// 	var height = $('.posts_area').height(); //Div containing posts
		// 	var scroll_top = $(this).scrollTop();
		// 	var page = $('.posts_area').find('.nextPage').val();
		// 	var noMorePosts = $('.posts_area').find('.noMorePosts').val();

		// 	//if ((document.body.scrollHeight == document.body.scrollTop + window.innerHeight) && noMorePosts == 'false') {
		// 	//if (noMorePosts == 'false') {
		// 	if($(window).scrollTop() > $('body').height() / 2 && noMorePosts == 'false') {

		// 		if(inProgress) {
		// 			return;
		// 		}
				
		// 		inProgress = true;
		// 		$('#loading').show();

		// 		var ajaxReq = $.ajax({
		// 			url: "includes/handlers/ajax_load_posts.php",
		// 			type: "POST",
		// 			data: "page=" + page + "&userLoggedIn=" + userLoggedIn,
		// 			cache:false,

		// 			success: function(response) {
		// 				$('.posts_area').find('.nextPage').remove(); //Removes current .nextpage 
		// 				$('.posts_area').find('.noMorePosts').remove(); //Removes current .nextpage 
		// 				$('.posts_area').find('.noMorePostsText').remove(); //Removes current .nextpage 

		// 				$('#loading').hide();
		// 				$('.posts_area').append(response);
		// 				inProgress = false;
		// 			}
		// 		});

		// 	} //End if 

		// 	return false;

		// }); //End (window).scroll(function())


	});

	</script>


<script>
$(function(){

	var userLoggedIn = '<?php echo $userLoggedIn; ?>';
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
			url: "includes/handlers/ajax_load_posts.php",
			type: "POST",
			data: "page=" + page + "&userLoggedIn=" + userLoggedIn,
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
<script type="module">
	// Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

	$(document).ready(function() {

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
    apiKey: "AIzaSyAMyja9kLOD0KAWpnltOIBwpzH8bPmuFf4",
    authDomain: "fundishop-f5b04.firebaseapp.com",
    projectId: "fundishop-f5b04",
    storageBucket: "fundishop-f5b04.firebasestorage.app",
    messagingSenderId: "296082741873",
    appId: "1:296082741873:web:20993a747384ff1979d9d0",
    measurementId: "G-LC49RKHG2N"
  };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);

		if ('Notification' in window) { // Check if the Notification API is supported
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      // Permission granted, notifications can be sent
      console.log('Notification permission granted.');
  navigator.serviceWorker.register("assets/js/sw.js").then(registration => {
            getToken(messaging, {
                serviceWorkerRegistration: registration,
                vapidKey: 'BKrKCEfM048ErJINaK1zClbDRe4ZXmNAKP9hv7fVmTKSVXIAjmg1invhS62S_R1Gin0HP210sdn041MYDVj2Sdw' }).then((currentToken) => {
                if (currentToken) {
                    console.log("Token is: "+currentToken);
					var fileToUpload = document.getElementById("fileToUpload");
					  fileToUpload.setAttribute("currentToken", currentToken);
                    // Send the token to your server and update the UI if necessary
                    // ...
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        });
    } else if (permission === 'denied') {
      // Permission denied, notifications cannot be sent
      console.log('Notification permission denied.');
    } else if (permission === 'default') {
      // User dismissed the prompt, permission is unknown
      console.log('Notification permission dismissed.');
    }
  });
} else {
  console.log('Notification API not supported in this browser.');
}

	});

    </script>