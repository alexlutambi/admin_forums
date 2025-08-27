$(document).ready(function() {

	console.log("demo loaded...");
	
	

	var btn_default_password = document.getElementsByClassName('btn-default-password');

      for(var s = 0; s < btn_default_password.length; s++){
       
        btn_default_password[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");


	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");

		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+fundi_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_fundi_data(current_token, fundi_id, total_new_token, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+duka_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_duka_data(current_token, duka_id, total_new_token, product_id);

	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");

		console.log("mteja_sub_mteja_id=>"+mteja_id);

		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+mteja_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_mteja_data(current_token, mteja_id, total_new_token, product_id);
	}
       });
      }
	var user_sub_token_post_btn = document.getElementsByClassName('user-sub-token-post-btn');

      for(var s = 0; s < user_sub_token_post_btn.length; s++){
       
        user_sub_token_post_btn[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");


	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");

		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+fundi_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_fundi_data(current_token, fundi_id, total_new_token, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+duka_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_duka_data(current_token, duka_id, total_new_token, product_id);

	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");

		console.log("mteja_sub_mteja_id=>"+mteja_id);

		var total_new_token = Number(product_id.getAttribute("current_token")) - Number(document.getElementById("user-sub-token-post-value-"+mteja_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_sub_new_token=>"+total_new_token);
load_sub_token_mteja_data(current_token, mteja_id, total_new_token, product_id);
	}
       });
      }
	 var user_add_token_post_btn = document.getElementsByClassName('user-add-token-post-btn');

      for(var s = 0; s < user_add_token_post_btn.length; s++){
       
        user_add_token_post_btn[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");


	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
		var total_new_token = Number(product_id.getAttribute("current_token")) + Number(document.getElementById("user-add-token-post-value-"+fundi_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_new_token=>"+total_new_token);
load_add_token_fundi_data(current_token, fundi_id, total_new_token, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var total_new_token = Number(product_id.getAttribute("current_token")) + Number(document.getElementById("user-add-token-post-value-"+duka_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_new_token=>"+total_new_token);
load_add_token_duka_data(current_token, duka_id, total_new_token, product_id);
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var total_new_token = Number(product_id.getAttribute("current_token")) + Number(document.getElementById("user-add-token-post-value-"+mteja_id).value);

		var current_token = product_id.getAttribute("current_token");
		   console.log("total_new_token=>"+total_new_token+" : mteja_id=>"+mteja_id);
load_add_token_mteja_data(current_token, mteja_id, total_new_token, product_id);	
	}
       });
      }
	var btn_activate_deactivate_all = document.getElementsByClassName('btn-activate-deactivate');

 for(var a = 0; a < btn_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_activate_deactivate_all[a].id;
      
//console.log("details request by image");
var fundi_list_container = document.getElementById(btn_activate_deactivate_id);
fundi_list_container.addEventListener('click', function(){
console.log("left_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);

if(document.getElementsByClassName('activation-loading').length == 0){
var account_type = product_id.getAttribute("account_type");
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}
}


})

	}

var fundi_list_container_all = document.getElementsByClassName('fundi-list-container');

 for(var a = 0; a < fundi_list_container_all.length; a++){
    var fundi_list_container_id = fundi_list_container_all[a].id;
      
//console.log("details request by image");
var fundi_list_container = document.getElementById(fundi_list_container_id);
 var user_logged_in = fundi_list_container.getAttribute("user_logged_in");
getLiveRegisteredFundi("", user_logged_in);

	}

	if(document.getElementsByClassName('profile-available').length > 0){
		get_load_individual_data();
		get_load_duka_data();
		get_load_fundi_data();
		get_load_fundi_profile_data();
	}
	var duka_list_container_all = document.getElementsByClassName('duka-list-container');

 for(var a = 0; a < duka_list_container_all.length; a++){
    var duka_list_container_id = duka_list_container_all[a].id;
      
//console.log("details request by image");
var duka_list_container = document.getElementById(duka_list_container_id);
 var user_logged_in = duka_list_container.getAttribute("user_logged_in");
getLiveRegisteredDuka("", user_logged_in);

	}
	var individual_list_container_all = document.getElementsByClassName('individual-list-container');

 for(var a = 0; a < individual_list_container_all.length; a++){
    var individual_list_container_id = individual_list_container_all[a].id;
      
//console.log("details request by image");
var individual_list_container = document.getElementById(individual_list_container_id);
 var user_logged_in = individual_list_container.getAttribute("user_logged_in");
getLiveRegisteredIndividual("", user_logged_in);

	}

	$('#search_text_input').focus(function() {
		if(window.matchMedia( "(min-width: 800px)" ).matches) {
			$(this).animate({width: '250px'}, 500);
		}
	});

	$('.button_holder').on('click', function() {
		document.search_form.submit();
	})

	//Button for profile post
	$('#submit_profile_post').click(function(){
		var formData = new FormData($("form.profile_post")[0]);

		$.ajax({
			type: "POST",
			url: "includes/handlers/ajax_submit_profile_post.php",
			data: formData,
			processData: false,
			contentType: false,
			success: function(msg) {
				$("#post_form").modal('hide');
				location.reload();
			},
			error: function() {
				alert('Failure');
			}
		});

	});


});


$(document).click(function(e){

	if(e.target.className != "search_results" && e.target.id != "search_text_input") {

		$(".search_results").html("");
		$('.search_results_footer').html("");
		$('.search_results_footer').toggleClass("search_results_footer_empty");
		$('.search_results_footer').toggleClass("search_results_footer");
	}

	if(e.target.className != "dropdown_data_window") {

		$(".dropdown_data_window").html("");
		$(".dropdown_data_window").css({"padding" : "0px", "height" : "0px"});
	}


});

function deleteMessage(messageId, element) {

	$.post("includes/handlers/ajax_delete_message.php", {id:messageId}, function(data) {
		$(element).closest(".message").text("Message deleted");
	});	
}

function getUsers(value, user) {
	console.log("data_message_searching=>"+value);
	var search_text_input_all = document.getElementsByClassName('search-text-input');

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);

var search_user_type= search_text_input_container.getAttribute("search_user_type");
if(search_user_type == "admin"){
$.post("includes/handlers/ajax_admin_search.php", {query:value, userLoggedIn:user}, function(data) {
		$(".results").html(data);
	});
}else if(search_user_type == "duka"){
$.post("includes/handlers/ajax_duka_search.php", {query:value, userLoggedIn:user}, function(data) {
		$(".results").html(data);
	});
}else if(search_user_type == "fundi"){
$.post("includes/handlers/ajax_fundi_search.php", {query:value, userLoggedIn:user}, function(data) {
		$(".results").html(data);
	});
}else if(search_user_type == "mteja"){
$.post("includes/handlers/ajax_individual_search.php", {query:value, userLoggedIn:user}, function(data) {
		$(".results").html(data);
	});
}
 } 
	
}

function getDropdownData(user, type) {

	if($(".dropdown_data_window").css("height") == "0px") {

		var pageName;

		if(type == 'notification') {
			pageName = "ajax_load_notifications.php";
			$("span").remove("#unread_notification");
		}
		else if (type == 'message') {
			pageName = "ajax_load_messages.php";
			$("span").remove("#unread_message");
		}

		var ajaxreq = $.ajax({
			url: "includes/handlers/" + pageName,
			type: "POST",
			data: "page=1&userLoggedIn=" + user,
			cache: false,

			success: function(response) {
				$(".dropdown_data_window").html(response);
				$(".dropdown_data_window").css({"padding" : "0px", "height": "280px", "border" : "1px solid #DADADA"});
				$("#dropdown_data_type").val(type);
			}

		});

	}
	else {
		$(".dropdown_data_window").html("");
		$(".dropdown_data_window").css({"padding" : "0px", "height": "0px", "border" : "none"});
	}

}


function getLiveSearchUsers(value, user) {
	console.log("data_searching=>"+value);
	var search_text_input_all = document.getElementsByClassName('search-text-input');

	console.log("total_data=>"+search_text_input_all.length);

 for(var a = 0; a < search_text_input_all.length; a++){
    var search_text_input_id = search_text_input_all[a].id;
var search_text_input_container = document.getElementById(search_text_input_id);

var search_user_type= search_text_input_container.getAttribute("search_user_type");

console.log("search_user_type=>"+search_user_type);

if(search_user_type == "admin"){
	$.post("includes/handlers/ajax_admin_search.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".search_results_footer_empty")[0]) {
			$(".search_results_footer_empty").toggleClass("search_results_footer");
			$(".search_results_footer_empty").toggleClass("search_results_footer_empty");
		}

		$('.search_results').html(data);
		$('.search_results_footer').html("<a href='search_admin.php?q=" + value + "'>See All Results</a>");

		if(data == "") {
			$('.search_results_footer').html("");
			$('.search_results_footer').toggleClass("search_results_footer_empty");
			$('.search_results_footer').toggleClass("search_results_footer");
		}

	});
}else if(search_user_type == "duka"){
	$.post("includes/handlers/ajax_duka_search.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".search_results_footer_empty")[0]) {
			$(".search_results_footer_empty").toggleClass("search_results_footer");
			$(".search_results_footer_empty").toggleClass("search_results_footer_empty");
		}

		$('.search_results').html(data);
		$('.search_results_footer').html("<a href='search_duka.php?q=" + value + "'>See All Results</a>");

		if(data == "") {
			$('.search_results_footer').html("");
			$('.search_results_footer').toggleClass("search_results_footer_empty");
			$('.search_results_footer').toggleClass("search_results_footer");
		}else{
				get_load_duka_data();
		}

	});
}else if(search_user_type == "fundi"){
	console.log("data loading fundi");

	$.post("includes/handlers/ajax_fundi_search.php", {query:value, userLoggedIn: user}, function(data) {

		console.log("data_to_display=>"+data);
		if($(".search_results_footer_empty")[0]) {
			$(".search_results_footer_empty").toggleClass("search_results_footer");
			$(".search_results_footer_empty").toggleClass("search_results_footer_empty");
		}

		$('.search_results').html(data);
		$('.search_results_footer').html("<a href='search_fundi.php?q=" + value + "'>See All Results</a>");

		if(data == "") {
			$('.search_results_footer').html("");
			$('.search_results_footer').toggleClass("search_results_footer_empty");
			$('.search_results_footer').toggleClass("search_results_footer");
		}else{
			get_load_fundi_data();
			get_load_fundi_profile_data();
		}

	});
}else if(search_user_type == "mteja"){
	$.post("includes/handlers/ajax_individual_search.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".search_results_footer_empty")[0]) {
			$(".search_results_footer_empty").toggleClass("search_results_footer");
			$(".search_results_footer_empty").toggleClass("search_results_footer_empty");
		}

		$('.search_results').html(data);
		$('.search_results_footer').html("<a href='search_individual.php?q=" + value + "'>See All Results</a>");

		if(data == "") {
			$('.search_results_footer').html("");
			$('.search_results_footer').toggleClass("search_results_footer_empty");
			$('.search_results_footer').toggleClass("search_results_footer");
		}else{
				get_load_individual_data();
		}

	});
}
 } 


}


function getLiveRegisteredFundi(value, user) {

	$.post("includes/handlers/ajax_fundi_list.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".fundi_results_footer_empty")[0]) {
			$(".fundi_results_footer_empty").toggleClass("fundi_results_footer");
			$(".fundi_results_footer_empty").toggleClass("fundi_results_footer_empty");
		}

		$('.fundi_results').html(data);
		$('.fundi_results_footer').html("<a href='all_fundi.php'>See All Fundi</a>");

		if(data == "") {
			$('.fundi_results_footer').html("");
			$('.fundi_results_footer').toggleClass("fundi_results_footer_empty");
			$('.fundi_results_footer').toggleClass("fundi_results_footer");
		}else{
			
			get_load_fundi_data();
			get_load_fundi_profile_data();
		}

	});
}

	function getLiveRegisteredDuka(value, user) {

	$.post("includes/handlers/ajax_duka_list.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".duka_results_footer_empty")[0]) {
			$(".duka_results_footer_empty").toggleClass("duka_results_footer");
			$(".duka_results_footer_empty").toggleClass("duka_results_footer_empty");
		}

		$('.duka_results').html(data);
		$('.duka_results_footer').html("<a href='all_duka.php'>See All Duka</a>");

		if(data == "") {
			$('.duka_results_footer').html("");
			$('.duka_results_footer').toggleClass("duka_results_footer_empty");
			$('.duka_results_footer').toggleClass("duka_results_footer");
		}else{
			get_load_duka_data();
			
		}

	});

}
	function getLiveRegisteredIndividual(value, user) {

	$.post("includes/handlers/ajax_individual_list.php", {query:value, userLoggedIn: user}, function(data) {

		if($(".individual_results_footer_empty")[0]) {
			$(".individual_results_footer_empty").toggleClass("individual_results_footer");
			$(".individual_results_footer_empty").toggleClass("individual_results_footer_empty");
		}

		$('.individual_results').html(data);
		$('.individual_results_footer').html("<a href='all_individual.php'>See All Individual</a>");

		if(data == "") {
			$('.individual_results_footer').html("");
			$('.individual_results_footer').toggleClass("individual_results_footer_empty");
			$('.individual_results_footer').toggleClass("individual_results_footer");
			
		}else{
			get_load_individual_data();
			
		}

	});
	

}

function get_load_fundi_profile_data(){
	console.log("load fundi");
	
	var fundi_list_img_all = document.getElementsByClassName('fundi-profile-img');

 for(var a = 0; a < fundi_list_img_all.length; a++){
    var fundi_list_img_id = fundi_list_img_all[a].id;
      
console.log("details request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var fundi_list_img = document.getElementById(fundi_list_img_id);

 var fundi_profile = fundi_list_img.getAttribute("fundi_profile");
var fundi_id = fundi_list_img.getAttribute("fundi_id");
 
	var real_image_url = server_link+"fundiForums/fundi_smarts/fundi/fundi_profile/"+fundi_profile;
 var destination = fundi_id+"_"+fundi_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/fundi/fundi_profile/img_resolution.php?image_url="+fundi_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, fundi_id, thumb_image_url, real_image_url, fundi_list_img);

	}
}
function get_load_fundi_data(){
	console.log("load fundi");
	var fundi_list_img_all = document.getElementsByClassName('fundi-list-img');

 for(var a = 0; a < fundi_list_img_all.length; a++){
    var fundi_list_img_id = fundi_list_img_all[a].id;
      
console.log("details request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var fundi_list_img = document.getElementById(fundi_list_img_id);

 var fundi_profile = fundi_list_img.getAttribute("fundi_profile");
var fundi_id = fundi_list_img.getAttribute("fundi_id");
 
	var real_image_url = server_link+"fundiForums/fundi_smarts/fundi/fundi_profile/"+fundi_profile;
 var destination = fundi_id+"_"+fundi_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/fundi/fundi_profile/img_resolution.php?image_url="+fundi_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, fundi_id, thumb_image_url, real_image_url, fundi_list_img);

	}
}
function get_load_duka_data(){
	console.log("load duka");
	var duka_list_img_all = document.getElementsByClassName('duka-list-img');

 for(var k = 0; k < duka_list_img_all.length; k++){
    var duka_list_img_id = duka_list_img_all[k].id;
      
console.log("duka request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var duka_list_img = document.getElementById(duka_list_img_id);

 var duka_profile = duka_list_img.getAttribute("duka_profile");
var duka_id = duka_list_img.getAttribute("duka_id");
 
	var real_image_url = server_link+"fundiForums/fundi_smarts/duka/duka_profile/"+duka_profile;
 var destination = duka_id+"_"+duka_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/duka/duka_profile/img_resolution.php?image_url="+duka_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, duka_id, thumb_image_url, real_image_url, duka_list_img);

	}


		var duka_list_img_all = document.getElementsByClassName('duka-profile-img');

 for(var a = 0; a < duka_list_img_all.length; a++){
    var duka_list_img_id = duka_list_img_all[a].id;
      
console.log("details duka request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var duka_list_img = document.getElementById(duka_list_img_id);

 var duka_profile = duka_list_img.getAttribute("duka_profile");
var duka_id = duka_list_img.getAttribute("duka_id");
 
var real_image_url = server_link+"fundiForums/fundi_smarts/duka/duka_profile/"+duka_profile;
 var destination = duka_id+"_"+duka_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/duka/duka_profile/img_resolution.php?image_url="+duka_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, duka_id, thumb_image_url, real_image_url, duka_list_img);

	}
}
function get_load_individual_data(){
	console.log("load individual");
	var individual_list_img_all = document.getElementsByClassName('individual-list-img');

 for(var k = 0; k < individual_list_img_all.length; k++){
    var individual_list_img_id = individual_list_img_all[k].id;
      
console.log("individual request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var individual_list_img = document.getElementById(individual_list_img_id);

 var mteja_profile = individual_list_img.getAttribute("mteja_profile");
var mteja_id = individual_list_img.getAttribute("mteja_id");
 
	var real_image_url = server_link+"fundiForums/fundi_smarts/mteja/mteja_profile/"+mteja_profile;
 var destination = mteja_id+"_"+mteja_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/mteja/mteja_profile/img_resolution.php?image_url="+mteja_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, mteja_id, thumb_image_url, real_image_url, individual_list_img);

	}


		var individual_list_img_all = document.getElementsByClassName('individual-profile-img');

 for(var a = 0; a < individual_list_img_all.length; a++){
    var individual_list_img_id = individual_list_img_all[a].id;
      
console.log("details individual request by image");

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

var individual_list_img = document.getElementById(individual_list_img_id);

 var mteja_profile = individual_list_img.getAttribute("mteja_profile");
var mteja_id = individual_list_img.getAttribute("mteja_id");
 
var real_image_url = server_link+"fundiForums/fundi_smarts/mteja/mteja_profile/"+mteja_profile;
 var destination = mteja_id+"_"+mteja_profile;
    var qulity = 10;
     var thumb_image_url = server_link+"fundiForums/fundi_smarts/mteja/mteja_profile/img_resolution.php?image_url="+mteja_profile+"&&width=100&&height=100&&destination="+destination+"&&qulity="+qulity;
   
	 get_display_thumb_image(server_link, mteja_id, thumb_image_url, real_image_url, individual_list_img);

	}
}
function get_display_thumb_image(server_link, image_id, thumb_image_url, real_image_url, featured){

   function ImgLoad(){
    
	  featured.src= thumb_image_url;
    featured.onload=function(){
     //console.log("Image thumb succesfully loaded!");
     
       //DISPLAY REAL IMAGE STARTS
     get_display_real_image(server_link, image_id, real_image_url, featured);
   //DISPLAY REAL IMAGE ENDS
   
   
    }
    featured.onerror=function(){
     //console.log("No thumb network connection or image is not available.");
     featured.src= server_link+"fundiForums/fundi_smarts/admin_forums/assets/images/progresss_img/fundi_forums_logo.png";
    
    }
   }
   window.onload=ImgLoad();
   
   featured.addEventListener('click', function(){
    
     ImgLoad();
   })
   
   
    }

	 function get_display_real_image(server_link, image_id, real_image_url, featured){

      function ImgLoad(){
      
        featured.src= real_image_url;
      featured.onload=function(){
      //console.log("Image real succesfully loaded!");
      
      
      }
      featured.onerror=function(){
      //console.log("No real network connection or image is not available.");
      featured.src= server_link+"fundiForums/fundi_smarts/admin_forums/assets/images/progresss_img/fundi_forums_logo.png";
    
      }
      }
      window.onload=ImgLoad();
      
      featured.addEventListener('click', function(){
     
      ImgLoad();
      })
      }

	  function load_active_de_activate_individual_data(account_type, mteja_status, mteja_id, btn_activate_deactivate){
	
	//console.log("left continue");
    btn_activate_deactivate.classList.add("activation-loading");
    get_small_spinner(btn_activate_deactivate);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "activation";
product_hint["mteja_id"] = mteja_id;
product_hint["mteja_status"] = mteja_status;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_individual_activation.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_duka_activation: ' + result);
btn_activate_deactivate.classList.remove("activation-loading");
btn_activate_deactivate.innerHTML = 'DeActivate';
//activation-loading

var fundi_activation_deactivation_container = document.getElementById("fundi-activation-deactivation-container-"+mteja_id);
var li_success_list = selectedIndividualActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';

var btn_activate_deactivate_all = document.getElementsByClassName('btn-activate-deactivate');

 for(var a = 0; a < btn_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_activate_deactivate_all[a].id;
      
//console.log("details request by image");
var fundi_list_container = document.getElementById(btn_activate_deactivate_id);
fundi_list_container.addEventListener('click', function(){
console.log("left_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");

if(document.getElementsByClassName('activation-loading').length == 0){
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
			var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}

}
};
xhr_quality.send(JSON.stringify({"activation_hint" : product_hints}));
}
	  function load_active_de_activate_duka_data(account_type, duka_status, duka_id, btn_activate_deactivate){

	//console.log("left continue");
    btn_activate_deactivate.classList.add("activation-loading");
    get_small_spinner(btn_activate_deactivate);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "activation";
product_hint["duka_id"] = duka_id;
product_hint["duka_status"] = duka_status;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_duka_activation.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_duka_activation: ' + result);
btn_activate_deactivate.classList.remove("activation-loading");
btn_activate_deactivate.innerHTML = 'DeActivate';
//activation-loading

var fundi_activation_deactivation_container = document.getElementById("fundi-activation-deactivation-container-"+duka_id);
var li_success_list = selectedDukaActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';

  var btn_activate_deactivate_all = document.getElementsByClassName('btn-activate-deactivate');

      for(var s = 0; s < btn_activate_deactivate_all.length; s++){
       
        btn_activate_deactivate_all[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");

	   if(document.getElementsByClassName('activation-loading').length == 0){
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}
       });
      }

}
};
xhr_quality.send(JSON.stringify({"activation_hint" : product_hints}));
}

function load_add_token_fundi_data(current_token, fundi_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["fundi_id"] = fundi_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_fundi_add_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_add_fundi: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Add Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    });

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_add_successfully"){
   var message = json_result[k].message;
		  var fundi_id = json_result[k].fundi_id;
		  var total_kazi = json_result[k].total_kazi;
		  
		   var available_token = document.getElementById("available-token-"+fundi_id);
		 available_token.innerHTML = total_kazi;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+fundi_id);
		  user_add_token_post_btn.setAttribute("current_token", total_kazi);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+fundi_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_kazi);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_add_hint" : product_hints}));
}
function load_add_token_duka_data(current_token, duka_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["duka_id"] = duka_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_duka_add_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_add_duka: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Add Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    });

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_add_successfully"){
   var message = json_result[k].message;
		  var duka_id = json_result[k].duka_id;
		  var total_kazi = json_result[k].total_kazi;
		  
		   var available_token = document.getElementById("available-token-"+duka_id);
		 available_token.innerHTML = total_kazi;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+duka_id);
		  user_add_token_post_btn.setAttribute("current_token", total_kazi);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+duka_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_kazi);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_add_hint" : product_hints}));
}
function load_add_token_mteja_data(current_token, mteja_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["mteja_id"] = mteja_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_individual_add_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_add_mteja: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Add Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    });

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_add_successfully"){
   var message = json_result[k].message;
		  var mteja_id = json_result[k].mteja_id;
		  var total_token = json_result[k].total_token;
		  
		   var available_token = document.getElementById("available-token-"+mteja_id);
		 available_token.innerHTML = total_token;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+mteja_id);
		  user_add_token_post_btn.setAttribute("current_token", total_token);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+mteja_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_token);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_add_hint" : product_hints}));
}
function load_sub_token_fundi_data(current_token, fundi_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["fundi_id"] = fundi_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_fundi_sub_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_sub_fundi: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Sub Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    });

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_sub_successfully"){
   var message = json_result[k].message;
		  var fundi_id = json_result[k].fundi_id;
		  var total_kazi = json_result[k].total_kazi;
		  
		   var available_token = document.getElementById("available-token-"+fundi_id);
		 available_token.innerHTML = total_kazi;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+fundi_id);
		  user_add_token_post_btn.setAttribute("current_token", total_kazi);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+fundi_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_kazi);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_sub_hint" : product_hints}));
}

function load_sub_token_duka_data(current_token, duka_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["duka_id"] = duka_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_duka_sub_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_sub_duka: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Sub Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    });

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_sub_successfully"){
   var message = json_result[k].message;
		  var duka_id = json_result[k].duka_id;
		  var total_kazi = json_result[k].total_kazi;
		  
		   var available_token = document.getElementById("available-token-"+duka_id);
		 available_token.innerHTML = total_kazi;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+duka_id);
		  user_add_token_post_btn.setAttribute("current_token", total_kazi);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+duka_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_kazi);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_sub_hint" : product_hints}));
}
function load_sub_token_mteja_data(current_token, mteja_id, total_new_token, btn_add_token){
 btn_add_token.classList.add("token-loading");
    get_small_spinner(btn_add_token);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "token";
product_hint["mteja_id"] = mteja_id;
product_hint["total_new_token"] = total_new_token;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_individual_sub_token.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_token_sub_mteja: ' + result);
btn_add_token.classList.remove("token-loading");
btn_add_token.innerHTML = 'Sub Token';

//activation-loading
 $('input[type="number"]').each(function(){
        $(this).val('');
    }); 

       var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		  if(status == "token_sub_successfully"){
   var message = json_result[k].message;
		  var mteja_id = json_result[k].mteja_id;
		  var total_token = json_result[k].total_token;
		  
		   var available_token = document.getElementById("available-token-"+mteja_id);
		 available_token.innerHTML = total_token;
		  var user_add_token_post_btn = document.getElementById("user-add-token-post-btn-"+mteja_id);
		  user_add_token_post_btn.setAttribute("current_token", total_token);
		  var user_sub_token_post_btn = document.getElementById("user-sub-token-post-btn-"+mteja_id);
		  user_sub_token_post_btn.setAttribute("current_token", total_token);
		  }
       
		 }
}
};
xhr_quality.send(JSON.stringify({"token_sub_hint" : product_hints}));
}
	  function load_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, btn_activate_deactivate) {
  //console.log("left continue");
    btn_activate_deactivate.classList.add("activation-loading");
    get_small_spinner(btn_activate_deactivate);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "activation";
product_hint["fundi_id"] = fundi_id;
product_hint["fundi_status"] = fundi_status;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_fundi_activation.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_activation: ' + result);
btn_activate_deactivate.classList.remove("activation-loading");
btn_activate_deactivate.innerHTML = 'DeActivate';
//activation-loading

var fundi_activation_deactivation_container = document.getElementById("fundi-activation-deactivation-container-"+fundi_id);
var li_success_list = selectedFundiActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';

var btn_activate_deactivate_all = document.getElementsByClassName('btn-activate-deactivate');

 for(var a = 0; a < btn_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_activate_deactivate_all[a].id;
      
//console.log("details request by image");
var fundi_list_container = document.getElementById(btn_activate_deactivate_id);
fundi_list_container.addEventListener('click', function(){
console.log("left_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");

if(document.getElementsByClassName('activation-loading').length == 0){
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}

}
};
xhr_quality.send(JSON.stringify({"activation_hint" : product_hints}));
}

function selectedDukaActivation(account_type, result){

        //console.log("success");
         var output = '';
        
         var json_result = JSON.parse(result);
       var json_result = JSON.parse(result);
	   //[{"status":"activation_successfully","message":"activation successfully","duka_id":"57","fundi_status":"Enable"}]

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
          var message = json_result[k].message;
		  var duka_id = json_result[k].duka_id;
		  var duka_status = json_result[k].duka_status;
		  if(duka_status == 'Enable') {
        
		output += '<button id="btn-activate-deactivate-';
		 output += duka_id;
		output += '" duka_id="';
          output += duka_id;
          output += '" account_type="';
		 output += account_type; 
		  output += '" duka_status="';
          if(duka_status == 'Enable'){
           output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-activate-deactivate-';
					  output += duka_id;
					output += '" duka_id="';
          output += duka_id;
		  output += '" account_type="';
		 output += account_type; 
          output += '" duka_status="';
          if(duka_status == 'Enable'){
            output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
function selectedIndividualActivation(account_type, result){

        //console.log("success");
         var output = '';
        
         var json_result = JSON.parse(result);
       var json_result = JSON.parse(result);
	   //[{"status":"activation_successfully","message":"activation successfully","duka_id":"57","fundi_status":"Enable"}]

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
          var message = json_result[k].message;
		  var mteja_id = json_result[k].mteja_id;
		  var mteja_status = json_result[k].mteja_status;
		  if(mteja_status == 'Enable') {
        
		output += '<button id="btn-activate-deactivate-';
		output += mteja_id;
		    output += '" mteja_id="';
          output += mteja_id;
          output += '" account_type="';
		 output += account_type; 
		  output += '" mteja_status="';
          if(mteja_status == 'Enable'){
           output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-activate-deactivate-';
					output += mteja_id;
					output += '" mteja_id="';
          output += mteja_id;
		  output += '" account_type="';
		 output += account_type; 
          output += '" mteja_status="';
          if(mteja_status == 'Enable'){
            output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
function selectedFundiActivation(account_type, result){

        //console.log("success");
         var output = '';
        
         var json_result = JSON.parse(result);
       var json_result = JSON.parse(result);
	   //[{"status":"activation_successfully","message":"activation successfully","fundi_id":"57","fundi_status":"Enable"}]

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
          var message = json_result[k].message;
		  var fundi_id = json_result[k].fundi_id;
		  var fundi_status = json_result[k].fundi_status;
		  if(fundi_status == 'Enable') {
        
		output += '<button id="btn-activate-deactivate-';
		  output += fundi_id;
		output += '" fundi_id="';
          output += fundi_id;
          output += '" account_type="';
		 output += account_type; 
		  output += '" fundi_status="';
          if(fundi_status == 'Enable'){
           output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-activate-deactivate-';
					  output += fundi_id;
					  output += '" fundi_id="';
          output += fundi_id;
		  output += '" account_type="';
		 output += account_type; 
          output += '" fundi_status="';
          if(fundi_status == 'Enable'){
            output += 'DisEnable';
          }else{
            output += 'Enable';
          }
          output += '" class="btn-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
 function get_small_spinner(add_shop_location){
    add_shop_location.innerHTML = '';
  var li_success_list = selectedSmallSpinnerLink();
  add_shop_location.innerHTML = li_success_list;
  add_shop_location.style.display = 'online';
    }


    function selectedSmallSpinnerLink(){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
    output += '<img src="';
	output += server_link;
	output += 'fundiForums/fundi_smarts/admin_forums/assets/images/progresss_img/spinner_transparent.jpg" width="20" height="20" />';
    return output;
 }








