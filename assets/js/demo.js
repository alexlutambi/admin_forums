$(document).ready(function() {

	console.log("demo loaded...");
    // Example: Show spinner on button click

	var btn_all_activate_deactivate_all = document.getElementsByClassName('btn-all-activate-deactivate');

 for(var a = 0; a < btn_all_activate_deactivate_all.length; a++){
    var btn_activate_deactivate_id = btn_all_activate_deactivate_all[a].id;
      
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

load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
			var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}

	var btn_default_password = document.getElementsByClassName('btn-default-password');

      for(var s = 0; s < btn_default_password.length; s++){
       
        btn_default_password[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");
var default_password_container = document.getElementById("default-password-container");

	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
get_user_set_default_password_alert(fundi_id, account_type, default_password_container, product_id);
	
}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
	get_user_set_default_password_alert(duka_id, account_type, default_password_container, product_id);
	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
	get_user_set_default_password_alert(mteja_id, account_type, default_password_container, product_id);
	
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

	  function load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, btn_activate_deactivate){
		
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
console.log('Result_individual_activation: ' + result);
btn_activate_deactivate.classList.remove("activation-loading");
btn_activate_deactivate.innerHTML = 'DeActivate';
//activation-loading

var fundi_activation_deactivation_container = document.getElementById("fundi-activation-deactivation-container-"+mteja_id);
var li_success_list = selectedAllIndividualActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';


var btn_activate_deactivate_all = document.getElementsByClassName('btn-all-activate-deactivate');

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

load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
			var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}

}
};
xhr_quality.send(JSON.stringify({"activation_hint" : product_hints}));
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
console.log('Result_individual_activation: ' + result);
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
function load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, btn_activate_deactivate){
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
var li_success_list = selectedAllDukaActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';

  var btn_activate_deactivate_all = document.getElementsByClassName('btn-all-activate-deactivate');

      for(var s = 0; s < btn_activate_deactivate_all.length; s++){
       
        btn_activate_deactivate_all[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");

	   if(document.getElementsByClassName('activation-loading').length == 0){
	if(account_type == "fundi"){
		var fundi_id = product_id.getAttribute("fundi_id");
var fundi_status = product_id.getAttribute("fundi_status");

load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}
       });
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
function load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, btn_activate_deactivate){
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
var li_success_list = selectedAllFundiActivation(account_type, result);
fundi_activation_deactivation_container.innerHTML = li_success_list;
fundi_activation_deactivation_container.style.display = 'online';

var btn_activate_deactivate_all = document.getElementsByClassName('btn-all-activate-deactivate');

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

load_all_active_de_activate_fundi_data(account_type, fundi_status, fundi_id, product_id);
	}else if(account_type == "duka"){
		var duka_id = product_id.getAttribute("duka_id");
var duka_status = product_id.getAttribute("duka_status");

	load_all_active_de_activate_duka_data(account_type, duka_status, duka_id, product_id);	
	}else if(account_type == "mteja"){
		var mteja_id = product_id.getAttribute("mteja_id");
var mteja_status = product_id.getAttribute("mteja_status");

	load_all_active_de_activate_individual_data(account_type, mteja_status, mteja_id, product_id);	
	}

}


})

	}

}
};
xhr_quality.send(JSON.stringify({"activation_hint" : product_hints}));
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


		// ALL ACTION
		function selectedAllDukaActivation(account_type, result){

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
        
		output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
function selectedAllIndividualActivation(account_type, result){

        //console.log("success");
         var output = '';
        
       var json_result = JSON.parse(result);
	   //[{"status":"activation_successfully","message":"activation successfully","duka_id":"57","fundi_status":"Enable"}]

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
          var message = json_result[k].message;
		  var mteja_id = json_result[k].mteja_id;
		  var mteja_status = json_result[k].mteja_status;
		  if(mteja_status == 'Enable') {
        
		output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
function selectedAllFundiActivation(account_type, result){

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
        
		output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate danger" >DeActivate</button>';
 				}else{
          			output += '<button id="btn-all-activate-deactivate-';
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
          output += '" class="btn-all-activate-deactivate success" >Activate</button>';
        }
		 }
        return output;
        }
		 function get_user_set_default_password_alert(user_id, account_type, default_password_container, btn_default_password){
    default_password_container.innerHTML = '';
  var li_success_list = addUserSetDefaultPasswordAlert(user_id, account_type);
  default_password_container.innerHTML = li_success_list;
  default_password_container.style.display = 'online';
  
  var complete_product_default_password = document.getElementById("complete-product-default-password-"+user_id);
 complete_product_default_password.addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
var account_type = product_id.getAttribute("account_type");
var user_id = product_id.getAttribute("user_id");
var default_password = "123456789";

	if(account_type == "fundi"){
		
get_fundi_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password);

}else if(account_type == "duka"){
	get_duka_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password);

	}else if(account_type == "mteja"){
		get_mteja_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password);

	}
       });
    }

	function get_fundi_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password){

	//console.log("left continue");
    btn_default_password.classList.add("activation-loading");
    get_small_spinner(complete_product_default_password);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "default_password";
product_hint["fundi_id"] = user_id;
product_hint["default_password"] = default_password;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_fundi_default_password.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_fundi_password_default: ' + result);
btn_default_password.classList.remove("activation-loading");
complete_product_default_password.innerHTML = '';
//activation-loading
    var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		      var message = json_result[k].message;
			var default_password = json_result[k].default_password;
		var fundi_id = json_result[k].fundi_id;
		
		  get_defult_password_changed(fundi_id, status, message, default_password, complete_product_default_password);
		}

}
};
xhr_quality.send(JSON.stringify({"default_password_hint" : product_hints}));
}
function get_duka_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password){

	//console.log("left continue");
    btn_default_password.classList.add("activation-loading");
    get_small_spinner(complete_product_default_password);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "default_password";
product_hint["duka_id"] = user_id;
product_hint["default_password"] = default_password;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_duka_default_password.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_duka_password_default: ' + result);
//btn_default_password.classList.remove("activation-loading");
//complete_product_default_password.innerHTML = '';
//activation-loading
    var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
		      var message = json_result[k].message;
			var default_password = json_result[k].default_password;
		var duka_id = json_result[k].duka_id;
		
		  get_defult_password_changed(duka_id, status, message, default_password, complete_product_default_password);
		}

}
};
xhr_quality.send(JSON.stringify({"default_password_hint" : product_hints}));
}
function get_mteja_set_default_password(user_id, default_password, complete_product_default_password, btn_default_password){

	//console.log("left continue");
    btn_default_password.classList.add("activation-loading");
    get_small_spinner(complete_product_default_password);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "default_password";
product_hint["mteja_id"] = user_id;
product_hint["default_password"] = default_password;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_individual_default_password.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result_individual = xhr_quality.responseText;
console.log('Result_individual_password_default: ' + result_individual);
btn_default_password.classList.remove("activation-loading");
complete_product_default_password.innerHTML = '';
//activation-loading
    var json_individual_result = JSON.parse(result_individual);

         for(var k = 0; k < json_individual_result.length; k++){
          var status = json_individual_result[k].status;
		      var message = json_individual_result[k].message;
			var default_password = json_individual_result[k].default_password;
		var mteja_id = json_individual_result[k].mteja_id;
		
		  get_defult_password_changed(mteja_id, status, message, default_password, complete_product_default_password);
		}

}
};
xhr_quality.send(JSON.stringify({"default_password_hint" : product_hints}));
}
 function get_defult_password_changed(user_id, status, message, default_password){
	var default_password_container = document.getElementById("default-password-container");
    default_password_container.innerHTML = '';
  var li_success_list = selectedDefultPasswordChangedLink(user_id, status, message, default_password);
  default_password_container.innerHTML = li_success_list;
  default_password_container.style.display = 'online';
    }


    function selectedDefultPasswordChangedLink(user_id, status, message, default_password){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
   output += '<div id="default-password-changed-container-';
  output += user_id;
  output += '" class="';
  if(status == "default_password_successfully"){
 output += 'default-password-success';
  }else{
 output += 'default-password-failed';
  }
  output += ' column default-password-changed-container default-password-changed-container-';
  output += user_id;
  output += '">';
 output += '<h5>';
output += message;
  output += '</h5>';
  output += '<p>Password : ';
  output += default_password;
  output += '</p>';
    output += '</div>';
    return output;
 }
		function addUserSetDefaultPasswordAlert(user_id, account_type){
  //console.log("replay starts");

  var output = '';
  output += '<div id="default-password-product-product-container-';
  output += user_id;
  output += '" account_type="';
 output += account_type; 
  output += '" class="column default-password-descount-product-container default-password-product-product-container-';
  output += user_id;
  output += '">';
  output += 'Are you sure?';
  output += '<div class="default-password-product-descount-action-container">';
  output += '<button id="complete-product-default-password-';
  output += user_id;
  output += '" user_id="';
  output += user_id;
  output += '" account_type="';
    output += account_type;
output += '" class="btn btn-sm btn-danger complete-descount-default-password complete-product-default-password-';
  output += user_id;
  output += '">Change</button>';
  output += '<button id="cancel-complete-product-default-password-';
  output += user_id;
  output += '" user_id="';
  output += user_id;
  output += '" account_type="';
      output += account_type;
  output += '" class="btn btn-sm btn-success cancel-complete-descount-default-password cancel-complete-product-default-password-';
  output += user_id;
  output += '">Cancel</button>';
  output += '</div>';
  output += '</div>';
  return output;
}
function get_details_message(admin_id, post_id, response_target_forms){
	 var details_messages = [];

var details_message = {};
details_message["username"] = "send_notification";
details_message["sender_id"] = admin_id;
details_message["receiver_id"] = admin_id;
details_message["product_id"] = post_id;
details_message["notification_action"] = "admin_notify";
details_message["user_status"] = response_target_forms;
details_messages.push(details_message);

return JSON.stringify(details_messages);
}


function get_target_forms(post_id){
 var target_forms = [];

var target_form = {};
target_form["response_form_selected_form_mafundi"] =get_notification_target_fundi_form_complete(document.getElementById("mafundi-form-li-"+post_id).getAttribute("response_form_selected_form_mafundi"));
target_form["response_form_selected_form_maduka"] = get_notification_target_duka_form_complete(document.getElementById("maduka-form-li-"+post_id).getAttribute("response_form_selected_form_maduka"));
target_form["response_form_selected_form_individual"] = get_notification_target_individual_form_complete(document.getElementById("individual-form-li-"+post_id).getAttribute("response_form_selected_form_individual"));
target_form["response_form_selected_form_all"] = get_notification_target_all_form_complete(document.getElementById("all-form-li-"+post_id).getAttribute("response_form_selected_form_all"));
target_forms.push(target_form);

return JSON.stringify(target_forms);
}

function get_notification_target_fundi_form_complete(response_form_selected_form_mafundi){
console.log("response_form_selected_form_mafundi=>"+response_form_selected_form_mafundi);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_mafundi));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     

}
return tamarind_shops;
 
	}
	function get_notification_target_duka_form_complete(response_form_selected_form_maduka){
console.log("response_form_selected_form_maduka=>"+response_form_selected_form_maduka);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_maduka));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);       
}
return tamarind_shops;
 
	}
	function get_notification_target_individual_form_complete(response_form_selected_form_individual){
console.log("response_form_selected_form_individual=>"+response_form_selected_form_individual);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_individual));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     

}
return tamarind_shops;
 
	}
	function get_notification_target_all_form_complete(response_form_selected_form_all){
console.log("response_form_selected_form_all=>"+response_form_selected_form_all);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_all));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {
  var tamarind_shop = {};
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     
}
return tamarind_shops;
 
	}
function get_send_notification(details_message, currentToken, post_id, post_img, body_message, container){
	get_small_spinner(container);
	var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "send_notification";
product_hint["currentToken"] = currentToken;
product_hint["post_id"] = post_id;
product_hint["post_img"] = post_img;
product_hint["body_message"] = body_message;
product_hint["details_message"] = details_message;
product_hint["topic"] = 'all_user';
product_hint["title_message"] = 'Admin message';

product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_send_notification.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_notification: ' + result);
container.innerHTML = 'Send Notification';

var post_notification_container = document.getElementById("post-notification-container-"+post_id);
get_notification_complete(post_id, post_notification_container, result);


 }
};
xhr_quality.send(JSON.stringify({"notification_hint" : product_hints}));

}
 function get_notification_complete(post_id, container, result){
    container.innerHTML = '';
  var li_success_list = selectedNotificationNompleteLink(result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  	var cancel_complete_product_default_password = document.getElementsByClassName('cancel-complete-product-default-password-'+post_id);

      for(var s = 0; s < cancel_complete_product_default_password.length; s++){
       
        cancel_complete_product_default_password[s].addEventListener('click', function(){
      var product_id = document.getElementById(this.id);
	  var post_id = product_id.getAttribute("post_id");
	  
	  var post_notification_container = document.getElementById("post-notification-container-"+post_id);
	  post_notification_container.innerHTML = '';
       });
      }
    }


    function selectedNotificationNompleteLink(result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	    var json_result = JSON.parse(result);

         for(var k = 0; k < json_result.length; k++){
          var status = json_result[k].status;
			var message = json_result[k].message;
		var post_id = json_result[k].post_id;
		output += '<div id="default-password-product-product-container-';
  output += post_id;
  output += '" class="column default-password-descount-product-container default-password-product-product-container-';
  output += post_id;
  output += '"><h3>';
  output += message;
  output += '</h3><div class="default-password-product-descount-action-container">';
  output += '<button id="complete-product-default-password-';
  output += post_id;
  output += '" post_id="';
  output += post_id;
output += '" class="btn btn-sm btn-danger complete-descount-default-password complete-product-default-password-';
  output += post_id;
  output += '">Change</button>';
  output += '<button id="cancel-complete-product-default-password-';
  output += post_id;
  output += '" post_id="';
  output += post_id;
  output += '" class="btn btn-sm btn-success cancel-complete-descount-default-password cancel-complete-product-default-password-';
  output += post_id;
  output += '">Cancel</button>';
  output += '</div>';
  output += '</div>';
		}

    return output;
 }

  function get_notification_target(add_shop_location, details_message, currentToken, post_id, added_by, post_img, body_message, container){
    add_shop_location.innerHTML = '';
  var li_success_list = selectedNotificationTargetLink(details_message, currentToken, post_id, added_by, post_img, body_message);
  add_shop_location.innerHTML = li_success_list;
  add_shop_location.style.display = 'online';

var btn_post_notification_complete = document.getElementsByClassName('btn-post-notification-complete-'+post_id);

 for(var a = 0; a < btn_post_notification_complete.length; a++){
    var btn_post_notification_complete_id = btn_post_notification_complete[a].id;
     
//console.log("details request by image");
var btn_post_notification_complete_container = document.getElementById(btn_post_notification_complete_id);
btn_post_notification_complete_container.addEventListener('click', function(){
console.log("mafundi_noti_complete_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var post_id = product_id.getAttribute("post_id");
var post_img = product_id.getAttribute("post_img");
var body_message = product_id.getAttribute("body_message");

var currentToken = document.getElementById("fileToUpload").getAttribute("currentToken");

var post_notification_container = document.getElementById("post-notification-container-"+post_id);

get_send_notification(get_details_message(0, post_id, get_target_forms(post_id)), currentToken, post_id, post_img, body_message, post_notification_container);

})
 }

  var mafundi_form_li = document.getElementsByClassName('mafundi-form-li-'+post_id);

 for(var a = 0; a < mafundi_form_li.length; a++){
    var mafundi_form_li_id = mafundi_form_li[a].id;
     
//console.log("details request by image");
var mafundi_form_li_container = document.getElementById(mafundi_form_li_id);
mafundi_form_li_container.addEventListener('click', function(){
console.log("mafundi_noti_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var post_id = product_id.getAttribute("post_id");
console.log("post_id=>"+post_id);

const target_user_selected_fundi = document.getElementById('target-user-selected-fundi-'+post_id);
if(document.getElementsByClassName('target-user-selected-fundi-'+post_id+' hide-ul').length >0){
target_user_selected_fundi.classList.remove("hide-ul");
target_user_selected_fundi.classList.add("show-ul");
var response_form_mafundi = product_id.getAttribute("response_form_mafundi");
console.log("response_form_mafundi=>"+response_form_mafundi);

const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
get_notification_target_fundi_form(post_id, notify_selected_option, response_form_mafundi);

}else if(document.getElementsByClassName('target-user-selected-fundi-'+post_id+' show-ul').length >0){
target_user_selected_fundi.classList.add("hide-ul");
target_user_selected_fundi.classList.remove("show-ul");
const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
if(document.getElementsByClassName('fundi-form-active-'+post_id).length >0){
notify_selected_option.innerHTML = '';
	product_id.setAttribute("response_form_selected_form_mafundi", encodeURIComponent(JSON.stringify([])));

}

}

})

	}
   

	var maduka_form_li = document.getElementsByClassName('maduka-form-li-'+post_id);

 for(var a = 0; a < maduka_form_li.length; a++){
    var maduka_form_li_id = maduka_form_li[a].id;
     
//console.log("details request by image");
var maduka_form_li_container = document.getElementById(maduka_form_li_id);
maduka_form_li_container.addEventListener('click', function(){
console.log("maduka_noti_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var post_id = product_id.getAttribute("post_id");

const target_user_selected_duka = document.getElementById('target-user-selected-duka-'+post_id);
if(document.getElementsByClassName('target-user-selected-duka-'+post_id+' hide-ul').length >0){
target_user_selected_duka.classList.remove("hide-ul");
target_user_selected_duka.classList.add("show-ul");
var response_form_maduka = product_id.getAttribute("response_form_maduka");
console.log("response_form_maduka=>"+response_form_maduka);

const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
get_notification_target_duka_form(post_id, notify_selected_option, response_form_maduka);

}else if(document.getElementsByClassName('target-user-selected-duka-'+post_id+' show-ul').length >0){
target_user_selected_duka.classList.add("hide-ul");
target_user_selected_duka.classList.remove("show-ul");
const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
if(document.getElementsByClassName('fundi-form-active-'+post_id).length >0){
notify_selected_option.innerHTML = '';
	product_id.setAttribute("response_form_selected_form_maduka", encodeURIComponent(JSON.stringify([])));

}

}

})

	}
	var individual_form_li = document.getElementsByClassName('individual-form-li-'+post_id);

 for(var a = 0; a < individual_form_li.length; a++){
    var individual_form_li_id = individual_form_li[a].id;
     
//console.log("details request by image");
var individual_form_li_container = document.getElementById(individual_form_li_id);
individual_form_li_container.addEventListener('click', function(){
console.log("individual_noti_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var post_id = product_id.getAttribute("post_id");

const target_user_selected_individual = document.getElementById('target-user-selected-individual-'+post_id);
if(document.getElementsByClassName('target-user-selected-individual-'+post_id+' hide-ul').length >0){
target_user_selected_individual.classList.remove("hide-ul");
target_user_selected_individual.classList.add("show-ul");
var response_form_individual = product_id.getAttribute("response_form_individual");
console.log("response_form_individual=>"+response_form_individual);

const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
get_notification_target_individual_form(post_id, notify_selected_option, response_form_individual);

}else if(document.getElementsByClassName('target-user-selected-individual-'+post_id+' show-ul').length >0){
target_user_selected_individual.classList.add("hide-ul");
target_user_selected_individual.classList.remove("show-ul");
const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
if(document.getElementsByClassName('individual-form-active-'+post_id).length >0){
notify_selected_option.innerHTML = '';
	product_id.setAttribute("response_form_selected_form_individual", encodeURIComponent(JSON.stringify([])));

}

}

})

	}
	var all_form_li = document.getElementsByClassName('all-form-li-'+post_id);

 for(var a = 0; a < all_form_li.length; a++){
    var all_form_li_id = all_form_li[a].id;
     
//console.log("details request by image");
var all_form_li_container = document.getElementById(all_form_li_id);
all_form_li_container.addEventListener('click', function(){
console.log("all_noti_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var post_id = product_id.getAttribute("post_id");
const target_user_selected_all = document.getElementById('target-user-selected-all-'+post_id);
if(document.getElementsByClassName('target-user-selected-all-'+post_id+' hide-ul').length >0){
target_user_selected_all.classList.remove("hide-ul");
target_user_selected_all.classList.add("show-ul");
var response_form_all = product_id.getAttribute("response_form_all");
console.log("response_form_all=>"+response_form_all);

const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
get_notification_target_all_form(post_id, notify_selected_option, response_form_all);

}else if(document.getElementsByClassName('target-user-selected-all-'+post_id+' show-ul').length >0){
target_user_selected_all.classList.add("hide-ul");
target_user_selected_all.classList.remove("show-ul");
const notify_selected_option = document.getElementById('notify-selected-option-'+post_id);
if(document.getElementsByClassName('all-form-active-'+post_id).length >0){
notify_selected_option.innerHTML = '';
	product_id.setAttribute("response_form_selected_form_all", encodeURIComponent(JSON.stringify([])));

}

}

})

	}
    }


    function selectedNotificationTargetLink(details_message, currentToken, post_id, added_by, post_img, body_message){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	//NOTIFICATION TARGET USER CONTAINER STARTS
	
	 output += '<div id="target-user-box-';
	  output += post_id;
	  output += '" class="target-user-box target-user-box-';
	  	  output += post_id;
	  output += ' target-user-box-btn target-user-box-btn-';
	    output += post_id;
	   output += ' notify-box notify-box-btn">';
			output += '<h2>Target User</h2>';
			output += '<ul id="target-user-ul" class="target-user-ul">';
				output += '<li id="mafundi-form-li-';
				output += post_id;
				output += '" post_id="';
				output += post_id;
				output += '" class="mafundi-form-li-';
				output += post_id;
				output += ' mafundi-form-li" response_form_mafundi= "';
  output += encodeURIComponent(JSON.stringify(get_decode_fundi_forms()));
  output += '" response_form_selected_form_mafundi="';
    output += encodeURIComponent(JSON.stringify([]));
  output += '"><span>1</span>Mafundi<b id="target-user-selected-fundi-';
  		output += post_id;
  output += '" class="target-user-selected-fundi-';
  output += post_id;
  output += ' target-user-selected-fundi hide-ul"><i class="fa fa-check"></i></b></li>';
				output += '<li id="maduka-form-li-';
				output += post_id;
				output += '" post_id="';
				output += post_id;
				output += '" class="maduka-form-li-';
				output += post_id;
				output += ' maduka-form-li" response_form_maduka= "';
  output += encodeURIComponent(JSON.stringify(get_decode_duka_forms()));
  output += '" response_form_selected_form_maduka="';
    output += encodeURIComponent(JSON.stringify([]));
  output += '"><span>2</span>Maduka<b id="target-user-selected-duka-';
  output += post_id;
    output += '" class="target-user-selected-duka-';
	  output += post_id;
	output += ' target-user-selected-duka hide-ul"><i class="fa fa-check"></i></b></li>';
				output += '<li id="individual-form-li-';
				output += post_id;
				output += '" post_id="';
				output += post_id;
				output += '" class="individual-form-li-';
				output += post_id;
				output += ' individual-form-li" response_form_individual= "';
  output += encodeURIComponent(JSON.stringify(get_decode_individual_forms()));
  output += '" response_form_selected_form_individual="';
  output += encodeURIComponent(JSON.stringify([]));
    output += '"><span>3</span>Individual<b id="target-user-selected-individual-';
		output += post_id;
	output += '" class="target-user-selected-individual-';
		output += post_id;
	output += ' target-user-selected-individual hide-ul"><i class="fa fa-check"></i></b></li>';
					output += '<li id="all-form-li-';
						output += post_id;
					output += '" post_id="';
					output += post_id;
					output += '" class="all-form-li-';
					output += post_id;
					output += ' all-form-li" response_form_all= "';
  output += encodeURIComponent(JSON.stringify(get_decode_all_forms()));
  output += '" response_form_selected_form_all="';
    output += encodeURIComponent(JSON.stringify([]));
    output += '"><span>4</span>All<b id="target-user-selected-all-';
	output += post_id;
    output += '" class="target-user-selected-all-';
		output += post_id;
	output += ' target-user-selected-all hide-ul"><i class="fa fa-check"></i></b></li>';
			output += '</ul>';
		 output += '</div>';
		 	output += '<div id="notify-selected-option-';
				output += post_id;
				output += '" class="notify-selected-option-';
					output += post_id;
				output += ' notify-selected-option"></div>';
			output += '<button id="btn-post-notification-complete-';
			output += post_id;
			output += '" post_id="';
			output += post_id;
			output += '" post_img="';
			output += post_img;
			output += '" added_by="';
			output += added_by;
			output += '" body_message="';
			output += body_message;
			output += '" class="btn-post-notification-complete-';
			output += post_id;
			output += ' btn-post-notification-complete success" >Complete</button>';
		 // NOTIFICATION TARGET USER CONTAINER ENDS
		
    return output;
 }

 
 function get_notification_target_fundi_form(post_id, notify_selected_option, response_form_mafundi){
    notify_selected_option.innerHTML = '';
  var li_success_list = selectedNotificationTargetFundiFormLink(post_id, response_form_mafundi);
  notify_selected_option.innerHTML = li_success_list;
  notify_selected_option.style.display = 'online';

   var target_user_selected_fundi_form_li = document.getElementsByClassName('target-user-selected-fundi-form-li-'+post_id);

 for(var a = 0; a < target_user_selected_fundi_form_li.length; a++){
    var target_user_selected_fundi_form_li_id = target_user_selected_fundi_form_li[a].id;
     
//console.log("details request by image");
var target_user_selected_fundi_form_li_container = document.getElementById(target_user_selected_fundi_form_li_id);
target_user_selected_fundi_form_li_container.addEventListener('click', function(){
console.log("mafundi_noti_form_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var form_id = product_id.getAttribute("form_id");
var post_id = product_id.getAttribute("post_id");
var form_name = product_id.getAttribute("form_name");
console.log("form_name=>"+form_name);

const target_user_selected_fundi = document.getElementById('target-user-selected-fundi-form-'+post_id+'-'+form_id);

if(document.getElementsByClassName('target-user-selected-fundi-form-'+post_id+'-'+form_id+' hide-ul').length >0){
target_user_selected_fundi.classList.remove("hide-ul");
target_user_selected_fundi.classList.add("show-ul");

const mafundi_form_li = document.getElementById('mafundi-form-li-'+post_id);
var response_form_selected_form_mafundi = mafundi_form_li.getAttribute("response_form_selected_form_mafundi");
console.log("response_form_selected_form_mafundi=>"+response_form_selected_form_mafundi);

mafundi_form_li.setAttribute("response_form_selected_form_mafundi", encodeURIComponent(JSON.stringify(get_notification_target_fundi_form_add(form_name, response_form_selected_form_mafundi))));

}else if(document.getElementsByClassName('target-user-selected-fundi-form-'+post_id+'-'+form_id+' show-ul').length >0){
target_user_selected_fundi.classList.add("hide-ul");
target_user_selected_fundi.classList.remove("show-ul");
const mafundi_form_li = document.getElementById('mafundi-form-li-'+post_id);
var response_form_selected_form_mafundi = mafundi_form_li.getAttribute("response_form_selected_form_mafundi");
console.log("response_form_selected_form_mafundi=>"+response_form_selected_form_mafundi);

mafundi_form_li.setAttribute("response_form_selected_form_mafundi", encodeURIComponent(JSON.stringify(get_notification_target_fundi_form_remove(form_name, response_form_selected_form_mafundi))));

}

})

	}
    }

	function get_notification_target_duka_form(post_id, notify_selected_option, response_form_maduka){
    notify_selected_option.innerHTML = '';
  var li_success_list = selectedNotificationTargetDukaFormLink(post_id, response_form_maduka);
  notify_selected_option.innerHTML = li_success_list;
  notify_selected_option.style.display = 'online';

   var target_user_selected_duka_form_li = document.getElementsByClassName('target-user-selected-duka-form-li-'+post_id);

 for(var a = 0; a < target_user_selected_duka_form_li.length; a++){
    var target_user_selected_duka_form_li_id = target_user_selected_duka_form_li[a].id;
     
//console.log("details request by image");
var target_user_selected_duka_form_li_container = document.getElementById(target_user_selected_duka_form_li_id);
target_user_selected_duka_form_li_container.addEventListener('click', function(){
console.log("maduka_noti_form_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var form_id = product_id.getAttribute("form_id");
var form_name = product_id.getAttribute("form_name");
console.log("form_name=>"+form_name);

const target_user_selected_duka = document.getElementById('target-user-selected-duka-form-'+post_id+'-'+form_id);
if(document.getElementsByClassName('target-user-selected-duka-form-'+post_id+'-'+form_id+' hide-ul').length >0){
target_user_selected_duka.classList.remove("hide-ul");
target_user_selected_duka.classList.add("show-ul");

const maduka_form_li = document.getElementById('maduka-form-li-'+post_id);
var response_form_selected_form_maduka = maduka_form_li.getAttribute("response_form_selected_form_maduka");
console.log("response_form_selected_form_maduka=>"+response_form_selected_form_maduka);

maduka_form_li.setAttribute("response_form_selected_form_maduka", encodeURIComponent(JSON.stringify(get_notification_target_duka_form_add(form_name, response_form_selected_form_maduka))));

}else if(document.getElementsByClassName('target-user-selected-duka-form-'+post_id+'-'+form_id+' show-ul').length >0){
target_user_selected_duka.classList.add("hide-ul");
target_user_selected_duka.classList.remove("show-ul");
const maduka_form_li = document.getElementById('maduka-form-li-'+post_id);
var response_form_selected_form_maduka = maduka_form_li.getAttribute("response_form_selected_form_maduka");
console.log("response_form_selected_form_maduka=>"+response_form_selected_form_maduka);

maduka_form_li.setAttribute("response_form_selected_form_maduka", encodeURIComponent(JSON.stringify(get_notification_target_duka_form_remove(form_name, response_form_selected_form_maduka))));

}

})

	}
    }
	function get_notification_target_individual_form(post_id, notify_selected_option, response_form_individual){
    notify_selected_option.innerHTML = '';
  var li_success_list = selectedNotificationTargetIndividualFormLink(post_id, response_form_individual);
  notify_selected_option.innerHTML = li_success_list;
  notify_selected_option.style.display = 'online';

   var target_user_selected_individual_form_li = document.getElementsByClassName('target-user-selected-individual-form-li-'+post_id);

 for(var a = 0; a < target_user_selected_individual_form_li.length; a++){
    var target_user_selected_individual_form_li_id = target_user_selected_individual_form_li[a].id;
     
//console.log("details request by image");
var target_user_selected_individual_form_li_container = document.getElementById(target_user_selected_individual_form_li_id);
target_user_selected_individual_form_li_container.addEventListener('click', function(){
console.log("individual_noti_form_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var form_id = product_id.getAttribute("form_id");
var form_name = product_id.getAttribute("form_name");
var post_id = product_id.getAttribute("post_id");
console.log("form_name=>"+form_name+" : post_id=>"+post_id);

const target_user_selected_individual = document.getElementById('target-user-selected-individual-form-'+post_id+'-'+form_id);
if(document.getElementsByClassName('target-user-selected-individual-form-'+post_id+'-'+form_id+' hide-ul').length >0){
target_user_selected_individual.classList.remove("hide-ul");
target_user_selected_individual.classList.add("show-ul");

const individual_form_li = document.getElementById('individual-form-li-'+post_id);
var response_form_selected_form_individual = individual_form_li.getAttribute("response_form_selected_form_individual");
console.log("response_form_selected_form_individual=>"+response_form_selected_form_individual);

individual_form_li.setAttribute("response_form_selected_form_individual", encodeURIComponent(JSON.stringify(get_notification_target_individual_form_add(form_name, response_form_selected_form_individual))));

}else if(document.getElementsByClassName('target-user-selected-individual-form-'+post_id+'-'+form_id+' show-ul').length >0){
target_user_selected_individual.classList.add("hide-ul");
target_user_selected_individual.classList.remove("show-ul");
const individual_form_li = document.getElementById('individual-form-li-'+post_id);
var response_form_selected_form_individual = individual_form_li.getAttribute("response_form_selected_form_individual");
console.log("response_form_selected_form_individual=>"+response_form_selected_form_individual);

individual_form_li.setAttribute("response_form_selected_form_individual", encodeURIComponent(JSON.stringify(get_notification_target_individual_form_remove(form_name, response_form_selected_form_individual))));

}

})

	}
    }
	function get_notification_target_all_form(post_id, notify_selected_option, response_form_all){
		console.log("response_form_all=>"+response_form_all);
    notify_selected_option.innerHTML = '';
  var li_success_list = selectedNotificationTargetAllFormLink(post_id, response_form_all);
  notify_selected_option.innerHTML = li_success_list;
  notify_selected_option.style.display = 'online';

   var target_user_selected_all_form_li = document.getElementsByClassName('target-user-selected-all-form-li-'+post_id);

 for(var a = 0; a < target_user_selected_all_form_li.length; a++){
    var target_user_selected_all_form_li_id = target_user_selected_all_form_li[a].id;
     
//console.log("details request by image");
var target_user_selected_all_form_li_container = document.getElementById(target_user_selected_all_form_li_id);
target_user_selected_all_form_li_container.addEventListener('click', function(){
console.log("all_noti_form_clicked id=>"+this.id);
var product_id = document.getElementById(this.id);
var form_id = product_id.getAttribute("form_id");
var post_id = product_id.getAttribute("post_id");
var form_name = product_id.getAttribute("form_name");
console.log("form_name=>"+form_name+" post_id=>"+post_id);

const target_user_selected_all = document.getElementById('target-user-selected-all-form-'+post_id+'-'+form_id);
if(document.getElementsByClassName('target-user-selected-all-form'+post_id+'-'+form_id+' hide-ul').length >0){
target_user_selected_all.classList.remove("hide-ul");
target_user_selected_all.classList.add("show-ul");

const all_form_li = document.getElementById('all-form-li-'+post_id);
var response_form_selected_form_all = all_form_li.getAttribute("response_form_selected_form_all");
console.log("response_form_selected_form_all=>"+response_form_selected_form_all);

all_form_li.setAttribute("response_form_selected_form_all", encodeURIComponent(JSON.stringify(get_notification_target_all_form_add(form_name, response_form_selected_form_all))));

}else if(document.getElementsByClassName('target-user-selected-all-form-'+post_id+'-'+form_id+' show-ul').length >0){
target_user_selected_all.classList.add("hide-ul");
target_user_selected_all.classList.remove("show-ul");
const all_form_li = document.getElementById('all-form-li-'+post_id);
var response_form_selected_form_all = all_form_li.getAttribute("response_form_selected_form_all");
console.log("response_form_selected_form_all=>"+response_form_selected_form_all);

all_form_li.setAttribute("response_form_selected_form_all", encodeURIComponent(JSON.stringify(get_notification_target_all_form_remove(form_name, response_form_selected_form_all))));

}

})

	}
    }

	function get_notification_target_fundi_form_add(form_name, response_form_selected_form_mafundi){
console.log("form_name=>"+form_name+"response_form_selected_form_mafundi=>"+response_form_selected_form_mafundi);

var tamarind_shops = [];
  var tamarind_shop = {};
  tamarind_shop['form_name'] = form_name;
  tamarind_shops.push(tamarind_shop); 
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_mafundi));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);        
}
return tamarind_shops;
 
	}

	function get_notification_target_duka_form_add(form_name, response_form_selected_form_maduka){
console.log("form_name=>"+form_name+"response_form_selected_form_maduka=>"+response_form_selected_form_maduka);

var tamarind_shops = [];
  var tamarind_shop = {};
  tamarind_shop['form_name'] = form_name;
  tamarind_shops.push(tamarind_shop); 
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_maduka));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);        
}
return tamarind_shops;
 
	}

		function get_notification_target_individual_form_add(form_name, response_form_selected_form_individual){
console.log("form_name=>"+form_name+"response_form_selected_form_individual=>"+response_form_selected_form_individual);

var tamarind_shops = [];
  var tamarind_shop = {};
  tamarind_shop['form_name'] = form_name;
  tamarind_shops.push(tamarind_shop); 
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_individual));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);        
}
return tamarind_shops;
 
	}
		function get_notification_target_all_form_add(form_name, response_form_selected_form_all){
console.log("form_name=>"+form_name+"response_form_selected_form_all=>"+response_form_selected_form_all);

var tamarind_shops = [];
  var tamarind_shop = {};
  tamarind_shop['form_name'] = form_name;
  tamarind_shops.push(tamarind_shop); 
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_all));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);        
}
return tamarind_shops;
 
	}
	function get_notification_target_fundi_form_remove(form_name, response_form_selected_form_mafundi){
console.log("form_name=>"+form_name+"response_form_selected_form_mafundi=>"+response_form_selected_form_mafundi);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_mafundi));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  if(json_form_mafundi[i].form_name != form_name){
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     
  }   
}
return tamarind_shops;
 
	}

	function get_notification_target_duka_form_remove(form_name, response_form_selected_form_maduka){
console.log("form_name=>"+form_name+"response_form_selected_form_maduka=>"+response_form_selected_form_maduka);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_maduka));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  if(json_form_mafundi[i].form_name != form_name){
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     
  }   
}
return tamarind_shops;
 
	}
	function get_notification_target_individual_form_remove(form_name, response_form_selected_form_individual){
console.log("form_name=>"+form_name+"response_form_selected_form_individual=>"+response_form_selected_form_individual);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_individual));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  if(json_form_mafundi[i].form_name != form_name){
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     
  }   
}
return tamarind_shops;
 
	}

	function get_notification_target_all_form_remove(form_name, response_form_selected_form_all){
console.log("form_name=>"+form_name+"response_form_selected_form_all=>"+response_form_selected_form_all);

var tamarind_shops = [];
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_selected_form_all));
	 
for(var i = 0; i < json_form_mafundi.length; i++) {

  var tamarind_shop = {};
  
  if(json_form_mafundi[i].form_name != form_name){
  tamarind_shop['form_name'] = json_form_mafundi[i].form_name;
  tamarind_shops.push(tamarind_shop);     
  }   
}
return tamarind_shops;
 
	}
    function selectedNotificationTargetFundiFormLink(post_id, response_form_mafundi){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
     //NOTIFICATION TARGET FORM CONTAINER STARTS
	 var json_form_mafundi = JSON.parse(decodeURIComponent(response_form_mafundi));
	  output += '<div id="notify-box-';
	 output += post_id; 
	  output += '" class="notify-box notify-box-';
	  output += post_id; 
	  output += ' fundi-form-active-';
	  output += post_id; 
	    output += ' notify-box-btn-';
	  output += post_id; 
	   output += ' notify-box-btn">';
			output += '<h2>Fundi Target Form</h2>';
			
			output += '<ul id="notify-ul-';
			 output += post_id;
			output += '" class="notify-ul-';
			 output += post_id;
			output += ' notify-ul">';
for(var i = 1; i < json_form_mafundi.length; i++) {

				output += '<li id="target-user-selected-fundi-form-li-';
				output += post_id;
				output += '-';
				output += i;
				output += '" post_id="';
				output += post_id;
				output += '" form_id="';
				output += i;
				output += '" form_name="';
				output += json_form_mafundi[i].form_name;
				output += '" class="target-user-selected-fundi-form-li-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-fundi-form-li-';
					output += post_id;
				output += ' target-user-selected-fundi-form-li">';
				output += '<span>';
				output += i;
				output += '</span>';
				output += json_form_mafundi[i].form_name;
				output += '<b id="target-user-selected-fundi-form-';
				output += post_id;
				output += '-';
				output += i;
				output += '" form_name="';
				output += json_form_mafundi[i].form_name;
				output += '" class="target-user-selected-fundi-form-';
					output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-fundi-form-';
				output += post_id;
				output += 'target-user-selected-fundi-form hide-ul"><i class="fa fa-check"></i></b></li>';
		
}
	output += '</ul>';
 output += '</div>';
		 // NOTIFICATION TARGET FORM CONTAINER ENDS
    return output;
 }

 function selectedNotificationTargetDukaFormLink(post_id, response_form_maduka){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
     //NOTIFICATION TARGET FORM CONTAINER STARTS
	 var json_form_maduka = JSON.parse(decodeURIComponent(response_form_maduka));
	  output += '<div id="notify-box-';
	  output += post_id;
	  output += '" class="notify-box notify-box-';
	  output += post_id;
	  output += ' duka-form-active notify-box-btn-';
	  output += post_id;
	  output += ' notify-box-btn">';
			output += '<h2>Maduka Target Form</h2>';
			
			output += '<ul id="notify-ul-';
			 output += post_id;
			output += '" class="notify-ul-';
			 output += post_id;
			output += ' notify-ul">';
for(var i = 1; i < json_form_maduka.length; i++) {

				output += '<li id="target-user-selected-duka-form-li-';
					 output += post_id;
					output += '-';
				output += i;
				output += '" form_id="';
				output += i;
				output += '" form_name="';
				output += json_form_maduka[i].form_name;
				output += '" class="target-user-selected-duka-form-li-';
					 output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-duka-form-li-';
				 output += post_id;
				output += ' target-user-selected-duka-form-li">';
				output += '<span>';
				output += i;
				output += '</span>';
				output += json_form_maduka[i].form_name;
				output += '<b id="target-user-selected-duka-form-';
					 output += post_id;
				output += '-';
				output += i;
				output += '" form_name="';
				output += json_form_maduka[i].form_name;
				output += '" class="target-user-selected-duka-form-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-duka-form-';
				output += post_id;
				output += ' target-user-selected-duka-form hide-ul"><i class="fa fa-check"></i></b></li>';
		
}
	output += '</ul>';
 output += '</div>';
		 // NOTIFICATION TARGET FORM CONTAINER ENDS
    return output;
 }
  function selectedNotificationTargetIndividualFormLink(post_id, response_form_individual){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
     //NOTIFICATION TARGET FORM CONTAINER STARTS
	 var json_form_individual = JSON.parse(decodeURIComponent(response_form_individual));
	  output += '<div id="notify-box-';
	  output += post_id;
	  output += '" post_id="';
	    output += post_id;
	  output += '" class="notify-box notify-box-';
	  output += post_id;
	  output += ' individual-form-active-';
	   output += post_id; 
	  output += ' individual-form-active notify-box-btn-';
	    output += post_id;
	   output += ' notify-box-btn">';
			output += '<h2>Individual Target Form</h2>';
			
			output += '<ul id="notify-ul-';
			 output += post_id;
			output += '" post_id="';
			 output += post_id;
			output += '" class="notify-ul-';
			 output += post_id;
			output += 'notify-ul">';
for(var i = 1; i < json_form_individual.length; i++) {

				output += '<li id="target-user-selected-individual-form-li-';
				 output += post_id;
				output += '-';
				output += i;
				output += '" post_id="';
					 output += post_id;
				output += '" form_id="';
				output += i;
				output += '" form_name="';
				output += json_form_individual[i].form_name;
				output += '" post_id="';
				output += post_id;
				output += '" class="target-user-selected-individual-form-li-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-individual-form-li-';
				output += post_id;
				output += ' target-user-selected-individual-form-li">';
				output += '<span>';
				output += i;
				output += '</span>';
				output += json_form_individual[i].form_name;
				output += '<b id="target-user-selected-individual-form-';
				output += post_id;
				output += '-';
				output += i;
				output += '" form_name="';
				output += json_form_individual[i].form_name;
				output += '" class="target-user-selected-individual-form-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-individual-form hide-ul"><i class="fa fa-check"></i></b></li>';
		
}
	output += '</ul>';
 output += '</div>';
		 // NOTIFICATION TARGET FORM CONTAINER ENDS
    return output;
 }
  function selectedNotificationTargetAllFormLink(post_id, response_form_all){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
     //NOTIFICATION TARGET FORM CONTAINER STARTS
	 var json_form_all = JSON.parse(decodeURIComponent(response_form_all));
	  output += '<div id="notify-box-';
	 output += post_id; 
	  output += '" post_id="';
	 output += post_id; 
	  output += '" class="notify-box notify-box-';
	   output += post_id; 
	  output += ' all-form-active all-form-active-';
	     output += post_id; 
	   output += ' notify-box-btn-';
	      output += post_id; 
	   output += ' notify-box-btn">';
			output += '<h2>All Target Form</h2>';
			
			output += '<ul id="notify-ul-';
			 output += post_id; 
			output += '" post_id="';
			 output += post_id; 
			output += '" class="notify-ul-';
			 output += post_id; 
			output += ' notify-ul">';
for(var i = 1; i < json_form_all.length; i++) {

				output += '<li id="target-user-selected-all-form-li-';
				output += post_id;
				output += '-';
				output += i;
				output += '" form_id="';
				output += i;
				output += '" form_name="';
				output += json_form_all[i].form_name;
				output += '" class="target-user-selected-all-form-li-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-all-form-li">';
				output += '<span>';
				output += i;
				output += '</span>';
				output += json_form_all[i].form_name;
				output += '<b id="target-user-selected-all-form-';
				output += post_id;
				output += '-';
				output += i;
				output += '" form_name="';
				output += json_form_all[i].form_name;
				output += '" class="target-user-selected-all-form-';
				output += post_id;
				output += '-';
				output += i;
				output += ' target-user-selected-all-form hide-ul"><i class="fa fa-check"></i></b></li>';
		
}
	output += '</ul>';
 output += '</div>';
		 // NOTIFICATION TARGET FORM CONTAINER ENDS
    return output;
 }
  function get_decode_fundi_forms(){

var tamarind_shops = [];

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = "FundiNeedSpareFragment";
  tamarind_shops.push(tamarind_shop);        
 tamarind_shop['form_name'] = "AddNahitajiProductSokoniFundiFragment";
  tamarind_shops.push(tamarind_shop);        
 tamarind_shop['form_name'] = "AddNewProductSokoniFundiFragment";
  tamarind_shops.push(tamarind_shop);        
 tamarind_shop['form_name'] = "HomeAddRentingEquipmentFragment";
  tamarind_shops.push(tamarind_shop);        

return tamarind_shops;
 }
function get_decode_all_forms(){
var tamarind_shops = [];

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = "HomeMainAccountFragment";
  tamarind_shops.push(tamarind_shop);        

return tamarind_shops;
 }
 function get_decode_individual_forms(){

var tamarind_shops = [];

  var tamarind_shop = {};
  							
  tamarind_shop['form_name'] = "HomeAddRentingEquipmentFragment";
  tamarind_shops.push(tamarind_shop); 
  tamarind_shop['form_name'] = "NahitajiFundiFragment";
  tamarind_shops.push(tamarind_shop);        
tamarind_shop['form_name'] = "AddFindProductSokoniMtejaFragment";
  tamarind_shops.push(tamarind_shop);  
  tamarind_shop['form_name'] = "AddMtejaProductSokoniUzaKwaFundiFragment";
  tamarind_shops.push(tamarind_shop);          
  
return tamarind_shops;
 }
  function get_decode_duka_forms(){

var tamarind_shops = [];

  var tamarind_shop = {};
  
  tamarind_shop['form_name'] = "HomeAddRentingEquipmentFragment";
  tamarind_shops.push(tamarind_shop);        
  tamarind_shop['form_name'] = "DashBoardShopAddProductFragment";
  tamarind_shops.push(tamarind_shop);
return tamarind_shops;
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










