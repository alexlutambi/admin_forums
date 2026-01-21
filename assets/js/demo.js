$(document).ready(function() {

	console.log("demo loaded...");
    // Example: Show spinner on button click
var btn_craft = document.getElementById("btn-craft");
btn_craft.addEventListener('click', function(){
	console.log("btn_craft id=>"+this.id);
	var product_id = document.getElementById(this.id);
	
	var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
	center_sub_action_selected_container.innerHTML = '';
	var center_action_selected_container = document.getElementById("center-action-selected-container");
	load_craft_data(btn_craft, center_action_selected_container);

})

var btn_address = document.getElementById("btn-address");
btn_address.addEventListener('click', function(){
	console.log("btn_address id=>"+this.id);
	var product_id = document.getElementById(this.id);
	var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
	center_sub_action_selected_container.innerHTML = '';
	var center_action_selected_container = document.getElementById("center-action-selected-container");
	
	load_address_data(btn_craft, center_action_selected_container);

})
function load_craft_data(btn_craft, container){
		btn_craft.classList.remove("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(container);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["admin_id"] = admin_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Craft';
//activation-loading
get_fundi_craft(admin_id, container, result);

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));
	  }

	  
  function load_address_data(btn_craft, container){
		btn_craft.classList.remove("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(container);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "Address";
product_hint["admin_id"] = admin_id;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_coutries.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_coutries: ' + result);
btn_craft.classList.remove("activation-loading");
//activation-loading
get_fundi_country(admin_id, container, result);

}
};
xhr_quality.send(JSON.stringify({"county_hint" : product_hints}));
	  }
	  function get_fundi_country(admin_id, container, result){
    container.innerHTML = '';
  var li_success_list = selectedFundiCountryLink(admin_id, result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var craft_display_container = document.getElementsByClassName('country-display-container');

    for(var i = 0; i < craft_display_container.length; i++){
  craft_display_container[i].addEventListener('click', function(){
      console.log("country_display_container_clicked");
   
      var craft_display_container_action = document.getElementById(this.id);
console.log("left_clicked id=>"+this.id);

var country_id = craft_display_container_action.getAttribute("country_id");
var country_name = craft_display_container_action.getAttribute("country_name");
var is_active = craft_display_container_action.getAttribute("is_active");
var total_fundi = craft_display_container_action.getAttribute("total_fundi");
var name_code = craft_display_container_action.getAttribute("name_code");
var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
get_fundi_details_country(center_sub_action_selected_container, is_active, total_fundi, country_id, country_name, name_code);
})

	}

	
  var add_country_display_container = document.getElementsByClassName('add-country-display-container');

    for(var i = 0; i < add_country_display_container.length; i++){
  add_country_display_container[i].addEventListener('click', function(){
      console.log("add_country_display_container_clicked");
   
      var country_display_container_action = document.getElementById(this.id);
console.log("add_left_clicked id=>"+this.id);

var admin_id = country_display_container_action.getAttribute("admin_id");

var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
get_fundi_details_add_country(center_sub_action_selected_container, admin_id);
})

	}


    }
  function get_fundi_craft(admin_id, container, result){
    container.innerHTML = '';
  var li_success_list = selectedFundiCraftLink(admin_id, result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var craft_display_container = document.getElementsByClassName('craft-display-container');

    for(var i = 0; i < craft_display_container.length; i++){
  craft_display_container[i].addEventListener('click', function(){
      console.log("craft_display_container_clicked");
   
      var craft_display_container_action = document.getElementById(this.id);
console.log("left_clicked id=>"+this.id);

var professional_id = craft_display_container_action.getAttribute("professional_id");
var professional = craft_display_container_action.getAttribute("professional");
var professional_btn = craft_display_container_action.getAttribute("professional_btn");
var professional_hint = craft_display_container_action.getAttribute("professional_hint");
var professional_header = craft_display_container_action.getAttribute("professional_header");
var total_fundi = craft_display_container_action.getAttribute("total_fundi");
var is_active = craft_display_container_action.getAttribute("is_active");
var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
get_fundi_details_craft(center_sub_action_selected_container, is_active, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header);
})

	}

	
  var add_craft_display_container = document.getElementsByClassName('add-craft-display-container');

    for(var i = 0; i < add_craft_display_container.length; i++){
  add_craft_display_container[i].addEventListener('click', function(){
      console.log("add_craft_display_container_clicked");
   
      var craft_display_container_action = document.getElementById(this.id);
console.log("add_left_clicked id=>"+this.id);

var admin_id = craft_display_container_action.getAttribute("admin_id");

var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
get_fundi_details_add_craft(center_sub_action_selected_container, admin_id);
})

	}


    }


	  function get_fundi_details_add_craft(container, admin_id){
    container.innerHTML = '';
  var li_success_list = selectedFundiCraftAddDetailsLink(admin_id);
  container.innerHTML = li_success_list;
  container.style.display = 'online';
  var fundi_add_craft_btn = document.getElementsByClassName('fundi-add-craft-btn');

    for(var i = 0; i < fundi_add_craft_btn.length; i++){
  fundi_add_craft_btn[i].addEventListener('click', function(){
      console.log("fundi_add_craft_btn_clicked");
 var fundi_add_craft_btn_action = document.getElementById(this.id);

	  var admin_id = fundi_add_craft_btn_action.getAttribute("admin_id");


	   var professional = document.getElementById("professional-value-"+admin_id).value;
	 var professional_hint = document.getElementById("professional-hint-value-"+admin_id).value;
	 var professional_btn = document.getElementById("professional-btn-value-"+admin_id).value;
	 var professional_header= document.getElementById("professional-header-value-"+admin_id).value;
	 
	 if(document.getElementsByClassName('activation-loading').length == 0){
get_add_fundi_craft(fundi_add_craft_btn_action, admin_id, professional, professional_hint, professional_btn, professional_header);


	 }
	 
})

	}

var btn_craft_update = document.getElementsByClassName('btn-craft-update');

    for(var i = 0; i < btn_craft_update.length; i++){
  btn_craft_update[i].addEventListener('click', function(){
      console.log("fundi_update_craft_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var center_equipment_action_selected_input = document.getElementById("center-equipment-action-selected-input-"+professional_id);

var total_fundi = btn_craft_update_action.getAttribute("total_fundi");
var professional = btn_craft_update_action.getAttribute("professional");
var professional_btn = btn_craft_update_action.getAttribute("professional_btn");
var professional_id = btn_craft_update_action.getAttribute("professional_id");
var professional_hint = btn_craft_update_action.getAttribute("professional_hint");
var professional_header = btn_craft_update_action.getAttribute("professional_header");

get_fundi_update_details_craft(center_equipment_action_selected_input, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header);

})

	}

var btn_craft_delete = document.getElementsByClassName('btn-craft-delete');

    for(var i = 0; i < btn_craft_delete.length; i++){
  btn_craft_delete[i].addEventListener('click', function(){
      console.log("fundi_delete_craft_btn_clicked1");

      var btn_craft_delete_action = document.getElementById(this.id);
	 var professional_id = btn_craft_delete_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

var total_fundi = btn_craft_delete_action.getAttribute("total_fundi");
if(total_fundi == 0){
	if(document.getElementsByClassName('activation-loading').length == 0){
		get_fundi_delete_craft(center_action_selected_container, btn_craft_delete_action, professional_id);
	}
}

})

	}

		var btn_craft_activate = document.getElementsByClassName('btn-craft-activate');

    for(var i = 0; i < btn_craft_activate.length; i++){
  btn_craft_activate[i].addEventListener('click', function(){
      console.log("fundi_activate_deactivate_craft_btn_clicked1");

      var btn_craft_activate_action = document.getElementById(this.id);
	 var professional_id = btn_craft_activate_action.getAttribute("professional_id");
	 var is_active = parseInt(btn_craft_activate_action.getAttribute("is_active"));

console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
			console.log("deactivate");
get_fundi_activate_deativate_craft(center_action_selected_container, 0, btn_craft_activate_action, professional_id);
		}
		if(is_active == 0){
			console.log("activate");
get_fundi_activate_deativate_craft(center_action_selected_container, 1, btn_craft_activate_action, professional_id);
		}
	}

})

	}
	
    }

	 function get_fundi_details_add_country(container, admin_id){
    container.innerHTML = '';
  var li_success_list = selectedFundiCountryAddDetailsLink(admin_id);
  container.innerHTML = li_success_list;
  container.style.display = 'online';
  var fundi_add_country_btn = document.getElementsByClassName('fundi-add-country-btn');

    for(var i = 0; i < fundi_add_country_btn.length; i++){
  fundi_add_country_btn[i].addEventListener('click', function(){
      console.log("fundi_add_country_btn_clicked");
 var fundi_add_country_btn_action = document.getElementById(this.id);

	  var admin_id = fundi_add_country_btn_action.getAttribute("admin_id");


	   var country = document.getElementById("country-value-"+admin_id).value;
 var name_code = document.getElementById("country-name_code-value-"+admin_id).value;

	 if(document.getElementsByClassName('activation-loading').length == 0){
get_add_fundi_country(fundi_add_country_btn_action, admin_id, country, name_code);


	 }
	 
})

	}

var btn_country_update = document.getElementsByClassName('btn-country-update');

    for(var i = 0; i < btn_country_update.length; i++){
  btn_country_update[i].addEventListener('click', function(){
      console.log("fundi_update_country_btn_clicked1");

      var btn_country_update_action = document.getElementById(this.id);
	 var country_id = btn_country_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
var center_equipment_action_selected_input = document.getElementById("center-equipment-action-selected-input-"+country_id);

var total_fundi = btn_country_update_action.getAttribute("total_fundi");
var country_id = btn_country_update_action.getAttribute("country_id");
var country_name = btn_country_update_action.getAttribute("country_name");
var name_code = btn_country_update_action.getAttribute("name_code");
get_fundi_update_details_country(center_equipment_action_selected_input, total_fundi, country_id, country_name, name_code);

})

	}

var btn_country_delete = document.getElementsByClassName('btn-country-delete');

    for(var i = 0; i < btn_country_delete.length; i++){
  btn_country_delete[i].addEventListener('click', function(){
      console.log("fundi_delete_county_btn_clicked1");

      var btn_country_delete_action = document.getElementById(this.id);
	 var country_id = btn_country_delete_action.getAttribute("country_id");
console.log("left_clicked professional_id=>"+country_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

var total_fundi = btn_craft_delete_action.getAttribute("total_fundi");
if(total_fundi == 0){
	if(document.getElementsByClassName('activation-loading').length == 0){
		get_fundi_delete_country(center_action_selected_container, btn_country_delete_action, country_id);
	}
}

})

	}

		var btn_craft_activate = document.getElementsByClassName('btn-country-activate');

    for(var i = 0; i < btn_craft_activate.length; i++){
  btn_craft_activate[i].addEventListener('click', function(){
      console.log("fundi_activate_deactivate_country_btn_clicked1");

      var btn_craft_activate_action = document.getElementById(this.id);
	 var professional_id = btn_craft_activate_action.getAttribute("professional_id");
	 var is_active = parseInt(btn_craft_activate_action.getAttribute("is_active"));

console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
			console.log("deactivate");
get_fundi_activate_deativate_craft(center_action_selected_container, 0, btn_craft_activate_action, professional_id);
		}
		if(is_active == 0){
			console.log("activate");
get_fundi_activate_deativate_craft(center_action_selected_container, 1, btn_craft_activate_action, professional_id);
		}
	}

})

	}
	
    }
function get_fundi_delete_craft(container, btn_craft_delete_action, professional_id){
	console.log("delete craft now=>"+professional_id);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional_id"] = professional_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_delete.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
btn_craft_delete_action.innerHTML = 'Craft';

var center_sub_action_selected_container =  document.getElementById("center-sub-action-selected-container");
center_sub_action_selected_container.innerHTML = '';
//activation-loading
load_craft_data(btn_craft_delete_action, container);
}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));



}


function get_fundi_delete_country_region_wilaya(btn_craft_delete_action, region_id, wilaya, wilaya_id){
	console.log("delete wilaya now=>"+wilaya_id);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "wilaya";
product_hint["region_id"] = region_id;
product_hint["wilaya"] = wilaya;
product_hint["wilaya_id"] = wilaya_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_country_region_wilaya_delete.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_delete_country_region_wilaya: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
var json_data = JSON.parse(result);
for(var d = 0; d < json_data.length; d++){
if(json_data[d].status=="wilaya_successfully"){
	var region_id = json_data[d].region_id;
var country_region_display_action = document.getElementById("country-region-display-action-"+region_id);

	var country_id = country_region_display_action.getAttribute("country_id");
var regions = country_region_display_action.getAttribute("regions");
  var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

}

}

}
};
xhr_quality.send(JSON.stringify({"wilaya_delete_counter" : product_hints}));



}
function get_fundi_delete_country(container, btn_craft_delete_action, country_id){
	console.log("delete country now=>"+country_id);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "country";
product_hint["country_id"] = country_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_country_delete.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_delete_country: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
var json_data = JSON.parse(result);
for(var d = 0; d < json_data.length; d++){
if(json_data[d].status=="country_successfully"){
var center_sub_action_selected_container =  document.getElementById("center-sub-action-selected-container");
center_sub_action_selected_container.innerHTML = '';
//activation-loading
load_address_data(btn_craft_delete_action, container);
}

}

}
};
xhr_quality.send(JSON.stringify({"craft_delete_counter" : product_hints}));



}


function get_fundi_activate_deativate_wilaya(container, is_active, btn_craft_delete_action, wilaya_id){
	console.log("activate_deativate wilaya now=>"+wilaya_id+" is_active=>"+is_active);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "wilaya";
product_hint["wilaya_id"] = wilaya_id;
product_hint["is_active"] = is_active;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_wilaya_activate_deactivate.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
btn_craft_delete_action.innerHTML = 'Wilaya';
//activation-loading
var json_data = JSON.parse(result);
for(var d = 0; d < json_data.length; d++){
if(json_data[d].status=="wilaya_successfully"){
	var region_id = json_data[d].region_id;
var country_region_display_action = document.getElementById("country-region-display-action-"+region_id);

	var country_id = country_region_display_action.getAttribute("country_id");
var regions = country_region_display_action.getAttribute("regions");
  var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

}

}
}
};
xhr_quality.send(JSON.stringify({"wilaya_hint" : product_hints}));



}

function get_fundi_activate_deativate_region(container, is_active, btn_craft_delete_action, region_id, country_id){
	console.log("activate_deativate region now=>"+region_id+" is_active=>"+is_active);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "region";
product_hint["country_id"] = country_id;
product_hint["region_id"] = region_id;
product_hint["is_active"] = is_active;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_region_activate_deactivate.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_region: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
btn_craft_delete_action.innerHTML = 'Region';

var json_result = JSON.parse(result);
for(var r = 0; r < json_result.length; r++){
	if(json_result[r].status == "region_successfully"){
		var country_id = json_result[r].country_id;
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	 
  get_region(country_id, center_equipment_action_selected_sub);
	}
}

}
};
xhr_quality.send(JSON.stringify({"region_hint" : product_hints}));



}
function get_fundi_activate_deativate_craft(container, is_active, btn_craft_delete_action, professional_id){
	console.log("activate_deativate craft now=>"+professional_id+" is_active=>"+is_active);
	btn_craft_delete_action.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft_delete_action);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional_id"] = professional_id;
product_hint["is_active"] = is_active;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_activate_deactivate.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft: ' + result);
btn_craft_delete_action.classList.remove("activation-loading");
btn_craft_delete_action.innerHTML = 'Craft';

var center_sub_action_selected_container =  document.getElementById("center-sub-action-selected-container");
center_sub_action_selected_container.innerHTML = '';
//activation-loading
load_craft_data(btn_craft_delete_action, container);
}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));



}
	function get_add_fundi_craft(btn_craft, admin_id, professional, professional_hint, professional_btn, professional_header){
		console.log("add craft now professional=>"+professional);

		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional"] = professional;
product_hint["professional_hint"] = professional_hint;
product_hint["professional_btn"] = professional_btn;
product_hint["professional_header"] = professional_header;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_add_new.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_add_new_craft: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Craft';
//activation-loading

var json_result = JSON.parse(result);
for(var c = 0; c < json_result.length; c++){
	if(json_result[c].status=="craft_successfully"){

	var center_action_selected_container = document.getElementById("center-action-selected-container");
load_craft_data(btn_craft, center_action_selected_container);
	}
}

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));
	}

function get_add_fundi_country(btn_craft, admin_id, country, name_code){
		console.log("add county now country=>"+country+" : name_code=>"+name_code);

		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "country";
product_hint["admin_id"] = admin_id;
product_hint["country"] = country;
product_hint["name_code"] = name_code;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_country_add_new.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_add_new_country: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Country';
//activation-loading

var json_result = JSON.parse(result);
for(var c = 0; c < json_result.length; c++){
	if(json_result[c].status=="country_successfully"){
var center_sub_action_selected_container = document.getElementById("center-sub-action-selected-container");
	center_sub_action_selected_container.innerHTML = '';
	var center_action_selected_container = document.getElementById("center-action-selected-container");
	
load_address_data(btn_craft, center_action_selected_container);
	}
}

}
};
xhr_quality.send(JSON.stringify({"country_hint" : product_hints}));
	}
function selectedFundiCraftAddDetailsLink(admin_id){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
		
 output += '<div id="center-equipment-action-selected-input-';
 output += admin_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="professional-value-';
			   output += admin_id;
			   output += '" class="professional-value-';
			   output += admin_id;
			   output += ' professional-value" type="text" name="reg_admin_group_code" placeholder="Enter professional" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-hint-value-';
			  output += admin_id;
			  output += '" class="professional-hint-value-';
			  output += admin_id;
			  output += ' professional-hint-value" type="text" name="reg_admin_group_code" placeholder="Enter professional hint" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-btn-value-';
			  output += admin_id;
			  output += '" class="professional-btn-value-';
			  output += admin_id;
			  output += ' professional-btn-value" type="text" name="reg_admin_group_code" placeholder="Enter professional btn" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-header-value-';
			  output += admin_id;
			  output += '" class="professional-header-value-';
			  output += admin_id;
			  output += ' professional-header-value" type="text" name="reg_admin_group_code" placeholder="Enter professional header" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-add-craft-btn-';
		output += admin_id;
		output += '" admin_id="';
		output += admin_id;
		output += '" class="fundi-add-craft-btn-';
		output += admin_id;
		output += ' fundi-add-craft-btn">Add Craft</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-equipment-action-selected-sub-';
 output += admin_id;
 output += '" class="center-equipment-action-selected-sub">';
 output += 'sub</div>';
    return output;
 }
function selectedFundiCountryAddDetailsLink(admin_id){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
		
 output += '<div id="center-equipment-action-selected-input-';
 output += admin_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="country-value-';
			   output += admin_id;
			   output += '" class="country-value-';
			   output += admin_id;
			   output += ' country-value" type="text" name="reg_admin_group_code" placeholder="Enter country" value="" required>';
		output += '</td>';
		output += '</tr>';
		 output += '<tr>';
		 output += '<td>';
               output += '<input id="country-name_code-value-';
			   output += admin_id;
			   output += '" class="country-name_code-value-';
			   output += admin_id;
			   output += ' country-name_code-value" type="text" name="reg_admin_group_code" placeholder="Enter country code" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-add-country-btn-';
		output += admin_id;
		output += '" admin_id="';
		output += admin_id;
		output += '" class="fundi-add-country-btn-';
		output += admin_id;
		output += ' fundi-add-country-btn">Add Country</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-country-action-selected-sub-';
 output += admin_id;
 output += '" class="center-country-action-selected-sub">';
 output += 'sub</div>';
    return output;
 }
	   function selectedFundiCraftLink(admin_id, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 // FUNDI ACTIONS STARTS
	
	//  display colors starts      
output += '<div id="craft-display-main-container-';
output += admin_id;
output += '" class="craft-display-main-container">';

var json_product_color_array = JSON.parse(result);

if(json_product_color_array.length == 0) { 

  output += '<p class="craft-display-list-container">No Available</p>';
   output += '<div id="add-craft-display-container-';
  output += admin_id;
   output += '" admin_id="';
output += admin_id;  
   output += '" class="add-craft-display-container">';
  output += '<p>Add Craft</p>';
  output += '</div>';
}

 for(var c = 0; c < json_product_color_array.length; c++) { 

  output += '<div class="craft-display-list-container">';
 
//  display color starts
 //console.log("container=>"+JSON.stringify(json_product_color_array[c].container));

var json_container_data = JSON.parse(json_product_color_array[c].container_data);
 for(cd = 0; cd < json_container_data.length; cd++) {

  output += '<div id="craft-display-container-';
  output += json_container_data[cd].professional_id;
  output += '" professional_id="';
  output += json_container_data[cd].professional_id;
  output += '" professional="';
  output += json_container_data[cd].professional;
  output += '" is_active="';
  output += json_container_data[cd].is_active;
  output += '" professional_btn="';
  output += json_container_data[cd].professional_btn;
  output += '" professional_hint="';
   output += json_container_data[cd].professional_hint;
     output += '" professional_header="';
   output += json_container_data[cd].professional_header;
      output += '" total_fundi="';
   output += json_container_data[cd].total_fundi;
  output += '" class="craft-display-container ';
  if(json_container_data[cd].is_active == 1){
output += 'active-craft';
  }else{
output += 'in-active-craft';
  }
   output += '">';
  output += '<span>';
  output += json_container_data[cd].total_fundi;
  output += '</span><p id="craft-display-p-';
   output += json_container_data[cd].professional_id; 
    output += '" class="craft-display-p-';
    output += json_container_data[cd].professional_id;
  output += ' craft-display-p">';
    output += json_container_data[cd].professional;
  output += '</p>';
  output += '</div>';

  if((cd == (json_container_data.length - 1) ) && ( c == (json_product_color_array.length - 1))){
	
  output += '<div id="add-craft-display-container-';
  output += admin_id;
   output += '" admin_id="';
output += admin_id;  
   output += '" class="add-craft-display-container">';
  output += '<p>Add Craft</p>';
  output += '</div>';
  }
  }

 //display color ends

 output += '</div>';

 } 

 output += '</div>';
//  display colors ends
			// FUNDI ACTIONS ENDS
		
    return output;
 }
	   function selectedFundiCountryLink(admin_id, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 // FUNDI ACTIONS STARTS
	
	//  display colors starts      
output += '<div id="country-display-main-container-';
output += admin_id;
output += '" class="country-display-main-container">';

var json_product_color_array = JSON.parse(result);

if(json_product_color_array.length == 0) { 

  output += '<p class="country-display-list-container">No Available</p>';
   output += '<div id="add-country-display-container-';
  output += admin_id;
   output += '" admin_id="';
output += admin_id;  
   output += '" class="add-country-display-container">';
  output += '<p>Add Craft</p>';
  output += '</div>';
}

 for(var c = 0; c < json_product_color_array.length; c++) { 

  output += '<div class="country-display-list-container">';
 
//  display color starts
 //console.log("container=>"+JSON.stringify(json_product_color_array[c].container));

var json_container_data = JSON.parse(json_product_color_array[c].container_data);
 for(cd = 0; cd < json_container_data.length; cd++) {

  output += '<div id="country-display-container-';
  output += json_container_data[cd].country_id;
  output += '" country_id="';
  output += json_container_data[cd].country_id;
  output += '" country_name="';
  output += json_container_data[cd].country_name;
   output += '" name_code="';
  output += json_container_data[cd].name_code;
  output += '" is_active="';
  output += json_container_data[cd].is_active;
      output += '" total_fundi="';
   output += json_container_data[cd].total_fundi;
  output += '" class="country-display-container ';
  if(json_container_data[cd].is_active == 1){
output += 'active-country';
  }else{
output += 'in-active-country';
  }
   output += '">';
  output += '<span>';
  output += json_container_data[cd].total_fundi;
  output += '</span><p id="country-display-p-';
   output += json_container_data[cd].country_id; 
    output += '" class="country-display-p-';
    output += json_container_data[cd].country_id;
  output += ' country-display-p">';
    output += json_container_data[cd].country_name;
  output += '</p>';
  output += '</div>';

  if((cd == (json_container_data.length - 1) ) && ( c == (json_product_color_array.length - 1))){
	
  output += '<div id="add-country-display-container-';
  output += admin_id;
   output += '" admin_id="';
output += admin_id;  
   output += '" class="add-country-display-container">';
  output += '<p>Add Country</p>';
  output += '</div>';
  }
  }

 //display color ends

 output += '</div>';

 } 

 output += '</div>';
//  display colors ends
			// FUNDI ACTIONS ENDS
		
    return output;
 }
  function get_fundi_details_craft(container, is_active, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header){
    container.innerHTML = '';
  var li_success_list = selectedFundiCraftDetailsLink(is_active, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header);
  container.innerHTML = li_success_list;
  container.style.display = 'online';
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+professional_id);
	 
  get_craft_vifaa(professional_id, center_equipment_action_selected_sub);
  var fundi_update_craft_btn = document.getElementsByClassName('fundi-update-craft-btn');

    for(var i = 0; i < fundi_update_craft_btn.length; i++){
  fundi_update_craft_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_btn_clicked");
 var fundi_update_craft_btn_action = document.getElementById(this.id);
	 
	  var professional_id = fundi_update_craft_btn_action.getAttribute("professional_id");


	   var professional = document.getElementById("professional-value-"+professional_id).value;
	 var professional_hint = document.getElementById("professional-hint-value-"+professional_id).value;
	 var professional_btn = document.getElementById("professional-btn-value-"+professional_id).value;
	 var professional_header= document.getElementById("professional-header-value-"+professional_id).value;
	 if(document.getElementsByClassName('activation-loading').length == 0 ){
 get_update_fundi_craft(professional_id, professional, professional_hint, professional_btn, professional_header);
	 }
	
})

	}

var btn_craft_update = document.getElementsByClassName('btn-craft-update');

    for(var i = 0; i < btn_craft_update.length; i++){
  btn_craft_update[i].addEventListener('click', function(){
      console.log("fundi_update_craft_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var center_equipment_action_selected_input = document.getElementById("center-equipment-action-selected-input-"+professional_id);

var total_fundi = btn_craft_update_action.getAttribute("total_fundi");
var professional = btn_craft_update_action.getAttribute("professional");
var professional_btn = btn_craft_update_action.getAttribute("professional_btn");
var professional_id = btn_craft_update_action.getAttribute("professional_id");
var professional_hint = btn_craft_update_action.getAttribute("professional_hint");
var professional_header = btn_craft_update_action.getAttribute("professional_header");

get_fundi_update_details_craft(center_equipment_action_selected_input, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header);

})

	}

var btn_craft_delete = document.getElementsByClassName('btn-craft-delete');

    for(var i = 0; i < btn_craft_delete.length; i++){
  btn_craft_delete[i].addEventListener('click', function(){
      console.log("fundi_delete_craft_btn_clicked1");

      var btn_craft_delete_action = document.getElementById(this.id);
	 var professional_id = btn_craft_delete_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

var total_fundi = btn_craft_delete_action.getAttribute("total_fundi");
if(total_fundi == 0){
	
if(document.getElementsByClassName('activation-loading').length == 0){
		get_fundi_delete_craft(center_action_selected_container, btn_craft_delete_action, professional_id);
	}
}

})

	}

	var btn_craft_activate = document.getElementsByClassName('btn-craft-activate');

    for(var i = 0; i < btn_craft_activate.length; i++){
  btn_craft_activate[i].addEventListener('click', function(){
      console.log("fundi_activate_deactivate_craft_btn_clicked1");

      var btn_craft_activate_action = document.getElementById(this.id);
	 var professional_id = btn_craft_activate_action.getAttribute("professional_id");
	 var is_active = parseInt(btn_craft_activate_action.getAttribute("is_active"));

console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
get_fundi_activate_deativate_craft(center_action_selected_container, 0, btn_craft_activate_action, professional_id);
		}
		if(is_active == 0){
get_fundi_activate_deativate_craft(center_action_selected_container, 1, btn_craft_activate_action, professional_id);
		}
	}

})

	}
    }

  function get_fundi_details_country(container,  is_active, total_fundi, country_id, country_name, name_code){
    container.innerHTML = '';
  var li_success_list = selectedFundiCountryDetailsLink(is_active, total_fundi, country_id, country_name, name_code);
  container.innerHTML = li_success_list;
  container.style.display = 'online';
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	 
  get_region(country_id, center_equipment_action_selected_sub);
  var fundi_update_country_btn = document.getElementsByClassName('fundi-update-country-btn');

    for(var i = 0; i < fundi_update_country_btn.length; i++){
  fundi_update_country_btn[i].addEventListener('click', function(){
      console.log("fundi_update_country_btn_clicked");
 var fundi_update_country_btn_action = document.getElementById(this.id);

	  var country_id = fundi_update_country_btn_action.getAttribute("country_id");

	 var country_name = document.getElementById("country-value-"+country_id).value;
	  var name_code = document.getElementById("country-name_code-value-"+country_id).value;
	 
	 if(document.getElementsByClassName('activation-loading').length == 0 ){
 get_update_fundi_country(country_id, country_name, name_code);
	 }
	
})

	}

var btn_country_update = document.getElementsByClassName('btn-country-update');

    for(var i = 0; i < btn_country_update.length; i++){
  btn_country_update[i].addEventListener('click', function(){
      console.log("fundi_update_country_btn_clicked1");

      var btn_country_update_action = document.getElementById(this.id);
	 var country_id = btn_country_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
var center_equipment_action_selected_input = document.getElementById("center-equipment-action-selected-input-"+country_id);

var total_fundi = btn_country_update_action.getAttribute("total_fundi");
var country_id = btn_country_update_action.getAttribute("country_id");
var country_name = btn_country_update_action.getAttribute("country_name");
var name_code = btn_country_update_action.getAttribute("name_code");
get_fundi_update_details_country(center_equipment_action_selected_input, total_fundi, country_id, country_name, name_code);

})

	}

var btn_country_delete = document.getElementsByClassName('btn-country-delete');

    for(var i = 0; i < btn_country_delete.length; i++){
  btn_country_delete[i].addEventListener('click', function(){
      console.log("fundi_delete_country_btn_clicked1");

      var btn_country_delete_action = document.getElementById(this.id);
	 var country_id = btn_country_delete_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

var total_fundi = btn_country_delete_action.getAttribute("total_fundi");
if(total_fundi == 0){
	
if(document.getElementsByClassName('activation-loading').length == 0){
		get_fundi_delete_country(center_action_selected_container, btn_country_delete_action, country_id);
	}
}

})

	}

	var btn_craft_activate = document.getElementsByClassName('btn-country-activate');

    for(var i = 0; i < btn_craft_activate.length; i++){
  btn_craft_activate[i].addEventListener('click', function(){
      console.log("fundi_activate_deactivate_country_btn_clicked1");

      var btn_craft_activate_action = document.getElementById(this.id);
	 var professional_id = btn_craft_activate_action.getAttribute("professional_id");
	 var is_active = parseInt(btn_craft_activate_action.getAttribute("is_active"));

console.log("left_clicked professional_id=>"+professional_id);
var center_action_selected_container = document.getElementById("center-action-selected-container");

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
get_fundi_activate_deativate_craft(center_action_selected_container, 0, btn_craft_activate_action, professional_id);
		}
		if(is_active == 0){
get_fundi_activate_deativate_craft(center_action_selected_container, 1, btn_craft_activate_action, professional_id);
		}
	}

})

	}
    }

	function get_update_fundi_craft(professional_id, professional, professional_hint, professional_btn, professional_header){
		console.log("get update craft now=>"+professional);
		
		var fundi_update_craft_btn =  document.getElementById("fundi-update-craft-btn-"+professional_id);
fundi_update_craft_btn.classList.add("activation-loading");

		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(fundi_update_craft_btn);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional_id"] = professional_id;
product_hint["professional"] = professional;
product_hint["professional_hint"] = professional_hint;
product_hint["professional_btn"] = professional_btn;
product_hint["professional_header"] = professional_header;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_craft_update.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_update_craft: ' + result);
fundi_update_craft_btn.classList.remove("activation-loading");

fundi_update_craft_btn.innerHTML = 'Update Craft';
//activation-loading
var json_result = JSON.parse(result);

for(var x = 0; x < json_result.length; x++){
	if(json_result[x].status == "craft_successfully"){
		var professional_id = json_result[x].professional_id;
var craft_display_p =  document.getElementById("craft-display-p-"+professional_id);
var craft_display_container =  document.getElementById("craft-display-container-"+professional_id);
craft_display_container.setAttribute("professional", json_result[x].professional);
craft_display_container.setAttribute("professional_hint", json_result[x].professional_hint);
craft_display_container.setAttribute("professional_header", json_result[x].professional_header);
craft_display_container.setAttribute("professional_btn", json_result[x].professional_btn);

var btn_craft_update =  document.getElementById("btn-craft-update-"+professional_id);
btn_craft_update.setAttribute("professional", json_result[x].professional);
btn_craft_update.setAttribute("professional_hint", json_result[x].professional_hint);
btn_craft_update.setAttribute("professional_header", json_result[x].professional_header);
btn_craft_update.setAttribute("professional_btn", json_result[x].professional_btn);

		craft_display_p.innerHTML = json_result[x].professional;
	}
	
}

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));
	}
	function get_update_fundi_country(country_id, country_name, name_code){
		console.log("get update country now=>"+country_name);

		var fundi_update_country_btn =  document.getElementById("fundi-update-country-btn-"+country_id);
fundi_update_country_btn.classList.add("activation-loading");

		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(fundi_update_country_btn);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "country";
product_hint["country_id"] = country_id;
product_hint["country_name"] = country_name;
product_hint["name_code"] = name_code;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_country_update.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_update_country: ' + result);
fundi_update_country_btn.classList.remove("activation-loading");

fundi_update_country_btn.innerHTML = 'Update country';
//activation-loading
var json_result = JSON.parse(result);

for(var x = 0; x < json_result.length; x++){
	if(json_result[x].status == "country_successfully"){
		var country_id = json_result[x].country_id;
var craft_display_p =  document.getElementById("country-display-p-"+country_id);
var craft_display_container =  document.getElementById("country-display-container-"+country_id);
craft_display_container.setAttribute("country_id", json_result[x].country_id);
craft_display_container.setAttribute("country_name", json_result[x].country_name);
craft_display_container.setAttribute("name_code", json_result[x].name_code);

var btn_craft_update =  document.getElementById("btn-country-update-"+country_id);
btn_craft_update.setAttribute("country_id", json_result[x].country_id);
btn_craft_update.setAttribute("country_name", json_result[x].country_name);
btn_craft_update.setAttribute("name_code", json_result[x].name_code);

		craft_display_p.innerHTML = json_result[x].country_name;
	}
	
}

}
};
xhr_quality.send(JSON.stringify({"country_hint" : product_hints}));
	}
	function get_region(country_id, container){
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(container);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "country-region";
product_hint["admin_id"] = admin_id;
product_hint["country_id"] = country_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_country_region.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_country_region: ' + result);

//activation-loading
get_fundi_region(country_id, admin_id, container, result);

}
};
xhr_quality.send(JSON.stringify({"country_region_hint" : product_hints}));

	}
	function get_craft_vifaa(professional_id, container){
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(container);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft-equip";
product_hint["admin_id"] = admin_id;
product_hint["professional_id"] = professional_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_equip.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft_equip: ' + result);

//activation-loading
get_fundi_craft_equip(professional_id, admin_id, container, result);

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));

	}
function get_region_wilaya(country_id, regions, region_id, container){
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(container);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "region-wilaya";
product_hint["region_id"] = region_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_country_region_wilaya.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_region_wilaya: ' + result);

//activation-loading
get_fundi_region_wilaya(country_id, regions, region_id, container, result);

}
};
xhr_quality.send(JSON.stringify({"region_wilaya_hint" : product_hints}));

	}
	function get_fundi_region(country_id, admin_id, container, result){
		var data = JSON.parse(result);
		console.log('Data_region_equip: ', data);
		// Process the data as needed
		 container.innerHTML = '';
  var li_success_list = selectedFundiRegionLink(country_id, admin_id, result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var update_country_region = document.getElementsByClassName('update-country-region-'+country_id);

    for(var i = 0; i < update_country_region.length; i++){
  update_country_region[i].addEventListener('click', function(){
      console.log("fundi_update_country_region_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
var craft_equipment_update_container = document.getElementById("country-region-update-container-"+country_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var regions = btn_craft_update_action.getAttribute("regions");
var country_id = btn_craft_update_action.getAttribute("country_id");
var is_active = btn_craft_update_action.getAttribute("is_active");

get_fundi_update_details_country_region(craft_equipment_update_container, country_id, region_id, regions, is_active);

})

	}
  var delete_craft_equipment = document.getElementsByClassName('delete-country-region-'+country_id);

    for(var i = 0; i < delete_craft_equipment.length; i++){
  delete_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_delete_country_region_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	 
if(document.getElementsByClassName('activation-loading').length == 0){
get_fundi_delete_details_country_region(btn_craft_update_action,center_equipment_action_selected_sub, region_id, country_id);

}

})

	}
	var add_craft_equip_display_container = document.getElementsByClassName('add-country-region-display-container-'+country_id);

    for(var i = 0; i < add_craft_equip_display_container.length; i++){
  add_craft_equip_display_container[i].addEventListener('click', function(){
      console.log("fundi_add_region_btn_clicked5");

      var btn_craft_update_action = document.getElementById(this.id);
	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
var craft_equipment_update_container = document.getElementById("country-region-update-container-"+country_id);

var country_id = btn_craft_update_action.getAttribute("country_id");

get_fundi_add_details_region(craft_equipment_update_container, country_id);

})

	}
	var country_region_display_action = document.getElementsByClassName('country-region-display-action-'+country_id);

    for(var i = 0; i < country_region_display_action.length; i++){
  country_region_display_action[i].addEventListener('click', function(){
      console.log("fundi_country_region_btn_clicked7");

      var country_region_display_container_action = document.getElementById(this.id);
	 var region_id = country_region_display_container_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = country_region_display_container_action.getAttribute("region_id");
var regions = country_region_display_container_action.getAttribute("regions");
var country_id = country_region_display_container_action.getAttribute("country_id");


var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

})

	}

	
	}

	function get_fundi_region_wilaya(country_id, regions, region_id, container, result){
		var data = JSON.parse(result);
		console.log('Data_region_wilaya: region_id', region_id);
		// Process the data as needed
		 container.innerHTML = '';
  var li_success_list = selectedFundiRegionWilayaLink(country_id, regions, region_id, result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var update_country_region = document.getElementsByClassName('update-country-wilaya-'+region_id);

    for(var i = 0; i < update_country_region.length; i++){
  update_country_region[i].addEventListener('click', function(){
      console.log("fundi_update_country_region_wilaya_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
console.log("left_clicked wilaya_id=>"+wilaya_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya = btn_craft_update_action.getAttribute("wilaya");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
var is_active = btn_craft_update_action.getAttribute("is_active");

var craft_equipment_update_container = document.getElementById("country-wilaya-update-container-"+region_id);

get_fundi_update_details_country_region_wilaya(craft_equipment_update_container, country_id, wilaya_id, region_id, wilaya, is_active);

})

	}
  var delete_craft_equipment = document.getElementsByClassName('delete-country-wilaya-'+region_id);

    for(var i = 0; i < delete_craft_equipment.length; i++){
  delete_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_delete_country_wilaya_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
console.log("left_clicked wilaya_id=>"+wilaya_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya = btn_craft_update_action.getAttribute("wilaya");

get_fundi_delete_country_region_wilaya(btn_craft_update_action, region_id, wilaya, wilaya_id);

})

	}
	var add_country_wilaya_display_container = document.getElementsByClassName('add-country-wilaya-display-container-'+region_id);

    for(var i = 0; i < add_country_wilaya_display_container.length; i++){
  add_country_wilaya_display_container[i].addEventListener('click', function(){
      console.log("fundi_add_wilaya_btn_clicked9");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
 var country_id = btn_craft_update_action.getAttribute("country_id");
 var regions = btn_craft_update_action.getAttribute("regions");

console.log("left_clicked region_id=>"+region_id);
var country_wilaya_update_container = document.getElementById("country-wilaya-update-container-"+region_id);

get_fundi_add_details_region_wilaya(country_wilaya_update_container, region_id, country_id, regions);

})

	}
	var country_region_display_action = document.getElementsByClassName('country-region-display-action-'+region_id);

    for(var i = 0; i < country_region_display_action.length; i++){
  country_region_display_action[i].addEventListener('click', function(){
      console.log("fundi_country_region_btn_clicked5");

      var country_region_display_container_action = document.getElementById(this.id);
	 var region_id = country_region_display_container_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = country_region_display_container_action.getAttribute("region_id");
var regions = country_region_display_container_action.getAttribute("regions");
var country_id = country_region_display_container_action.getAttribute("country_id");

var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

})

	}

	
	}
	function get_fundi_craft_equip(professional_id, admin_id, container, result){
		var data = JSON.parse(result);
		console.log('Data_craft_equip: ', data);
		// Process the data as needed
		 container.innerHTML = '';
  var li_success_list = selectedFundiCraftEquipLink(professional_id, admin_id, result);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var update_craft_equipment = document.getElementsByClassName('update-craft-equipment-'+professional_id);

    for(var i = 0; i < update_craft_equipment.length; i++){
  update_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_update_craft_equipment_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var craft_equipment_update_container = document.getElementById("craft-equipment-update-container-"+professional_id);

var kifaa_aina_id = btn_craft_update_action.getAttribute("kifaa_aina_id");
var aina_kifaa = btn_craft_update_action.getAttribute("aina_kifaa");
var professional_id = btn_craft_update_action.getAttribute("professional_id");

get_fundi_update_details_craft_equipment(craft_equipment_update_container, professional_id, kifaa_aina_id, aina_kifaa);

})

	}
  var delete_craft_equipment = document.getElementsByClassName('delete-craft-equipment-'+professional_id);

    for(var i = 0; i < delete_craft_equipment.length; i++){
  delete_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_delete_craft_equipment_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+professional_id);
	 
var kifaa_aina_id = btn_craft_update_action.getAttribute("kifaa_aina_id");
var aina_kifaa = btn_craft_update_action.getAttribute("aina_kifaa");
var professional_id = btn_craft_update_action.getAttribute("professional_id");

if(document.getElementsByClassName('activation-loading').length == 0){
get_fundi_delete_details_craft_equipment(btn_craft_update_action,center_equipment_action_selected_sub, professional_id, kifaa_aina_id, aina_kifaa);

}

})

	}
	var add_craft_equip_display_container = document.getElementsByClassName('add-craft-equip-display-container-'+professional_id);

    for(var i = 0; i < add_craft_equip_display_container.length; i++){
  add_craft_equip_display_container[i].addEventListener('click', function(){
      console.log("fundi_add_craft_btn_clicked5");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var craft_equipment_update_container = document.getElementById("craft-equipment-update-container-"+professional_id);

var professional_id = btn_craft_update_action.getAttribute("professional_id");

get_fundi_add_details_craft_equipment(craft_equipment_update_container, professional_id);

})

	}
	}


		function get_fundi_delete_details_country_region(btn_craft, container, region_id, country_id){
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "region";
product_hint["region_id"] = region_id;
product_hint["country_id"] = country_id;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_country_delete_region.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_country_delete_region: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Region';
//activation-loading
var json_result = JSON.parse(result);
for(var e = 0; e < json_result.length; e++){
	if(json_result[e].status=="region_successfully"){
		var country_id = json_result[e].country_id;

    get_region(country_id, container);

	}
}

}
};
xhr_quality.send(JSON.stringify({"region_hint" : product_hints}));

	}
	function get_fundi_delete_details_craft_equipment(btn_craft, container, professional_id, kifaa_aina_id, aina_kifaa){
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional_id"] = professional_id;
product_hint["kifaa_aina_id"] = kifaa_aina_id;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_delete_equipment.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft_delete_equipment: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Equipment';
//activation-loading
var json_result = JSON.parse(result);
for(var e = 0; e < json_result.length; e++){
	if(json_result[e].status=="craft_successfully"){
		var professional_id = json_result[e].professional_id;

  get_craft_vifaa(professional_id, container);
	}
}

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));

	}

	function get_fundi_add_details_region(container, country_id){
		container.innerHTML = '';
  var li_success_list = selectedFundiCountryRegionAddDetailsLink(country_id);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

var fundi_add_craft_equipment_btn = document.getElementsByClassName('fundi-add-country-region-btn-'+country_id);

    for(var i = 0; i < fundi_add_craft_equipment_btn.length; i++){
  fundi_add_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_add_country_region_btn_clicked5");

      var btn_craft_update_action = document.getElementById(this.id);
	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);

var country_id = btn_craft_update_action.getAttribute("country_id");
var region = document.getElementById("aina_new_region-value-"+country_id).value;
var country_region_update_container = document.getElementById("country-region-update-container-"+country_id);

get_upload_fundi_add_details_country_region(btn_craft_update_action, country_region_update_container, country_id, region);

})

	}
	}
	function get_fundi_add_details_region_wilaya(container, region_id, country_id, regions){
		container.innerHTML = '';
  var li_success_list = selectedFundiRegionWilayaAddDetailsLink(region_id, country_id, regions);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

var fundi_add_region_wilaya_equipment_btn = document.getElementsByClassName('fundi-add-region-wilaya-btn-'+region_id);

    for(var i = 0; i < fundi_add_region_wilaya_equipment_btn.length; i++){
  fundi_add_region_wilaya_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_add_wilaya_btn_clicked5");

      var btn_wilaya_update_action = document.getElementById(this.id);
	 var region_id = btn_wilaya_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_wilaya_update_action.getAttribute("region_id");
var wilaya = document.getElementById("aina_new_wilaya-value-"+region_id).value;
var country_wilaya_update_container = document.getElementById("country-wilaya-update-container-"+region_id);

get_upload_fundi_add_details_region_wilaya(btn_wilaya_update_action, country_wilaya_update_container, region_id, wilaya, country_id, regions);

})

	}
	}

	function get_fundi_add_details_craft_equipment(container, professional_id){
		container.innerHTML = '';
  var li_success_list = selectedFundiCraftEquipmentAddDetailsLink(professional_id);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

var fundi_add_craft_equipment_btn = document.getElementsByClassName('fundi-add-craft-equipment-btn-'+professional_id);

    for(var i = 0; i < fundi_add_craft_equipment_btn.length; i++){
  fundi_add_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_add_craft_btn_clicked5");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);

var professional_id = btn_craft_update_action.getAttribute("professional_id");
var aina_new_kifaa = document.getElementById("aina_new_kifaa-value-"+professional_id).value;
var craft_equipment_update_container = document.getElementById("craft-equipment-update-container-"+professional_id);

get_upload_fundi_add_details_craft_equipment(btn_craft_update_action, craft_equipment_update_container, professional_id, aina_new_kifaa);

})

	}
	}
	function get_upload_fundi_add_details_craft_equipment(btn_craft, container, professional_id, aina_new_kifaa){
		console.log("add new equipment aina_new_kifaa=>"+aina_new_kifaa);
		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["professional_id"] = professional_id;
product_hint["aina_new_kifaa"] = aina_new_kifaa;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_add_craft_equipment.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_craft_new_equipment: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Equipment';
//activation-loading
var json_result = JSON.parse(result);
for(var e = 0; e < json_result.length; e++){
	if(json_result[e].status=="craft_successfully"){
		var professional_id = json_result[e].professional_id;
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+professional_id);
	 
  get_craft_vifaa(professional_id, center_equipment_action_selected_sub);
	}
}

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));
	}

	function get_upload_fundi_add_details_region_wilaya(btn_craft, container, region_id, wilaya, country_id, regions){
		console.log("add new region wilaya wilaya=>"+wilaya);
		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "wilaya";
product_hint["region_id"] = region_id;
product_hint["wilaya"] = wilaya;
product_hint["country_id"] = country_id;
product_hint["regions"] = regions;

product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_add_region_wilaya.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_region_new_wilaya: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Wilaya';
//activation-loading
var json_result = JSON.parse(result);
for(var e = 0; e < json_result.length; e++){
	if(json_result[e].status=="wilaya_successfully"){
		var region_id = json_result[e].region_id;
		var country_id = json_result[e].country_id;
		var regions = json_result[e].regions;
 var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

	}
}

}
};
xhr_quality.send(JSON.stringify({"wilaya_hint" : product_hints}));
	}
	function get_upload_fundi_add_details_country_region(btn_craft, container, country_id, region){
		console.log("add new equipment region=>"+region);

btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "region";
product_hint["country_id"] = country_id;
product_hint["region"] = region;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_add_country_region.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_country_new_region: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Add Region';
//activation-loading
var json_result = JSON.parse(result);
for(var e = 0; e < json_result.length; e++){
	if(json_result[e].status=="region_successfully"){
		var country_id = json_result[e].country_id;
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	 
  get_region(country_id, center_equipment_action_selected_sub);
	}
}

}
};
xhr_quality.send(JSON.stringify({"region_hint" : product_hints}));
	}
		function selectedFundiCountryRegionAddDetailsLink(country_id){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';		
 output += '<div id="center-country-region-action-selected-input-';
 output += country_id;
 output += '" class="center-country-region-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="aina_new_region-value-';
			   output += country_id;
			   output += '" class="aina_new_region-value-';
			   output += country_id;
			   output += ' aina_new_region" type="text" name="reg_admin_group_code" placeholder="Enter aina_region" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-add-country-region-btn-';
		output += country_id;
		output += '" country_id="';
		output += country_id;
		output += '" class="fundi-add-country-region-btn-';
		output += country_id;
		output += ' fundi-add-country-region-btn">Add Region</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-country-region-action-selected-sub-';
 output += country_id;
 output += '" class="center-country-region-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }
	function selectedFundiRegionWilayaAddDetailsLink(region_id, country_id, regions){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';		
 output += '<div id="center-region-wilaya-action-selected-input-';
 output += region_id;
 output += '" class="center-region-wilaya-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="aina_new_wilaya-value-';
			   output += region_id;
			   output += '" class="aina_new_wilaya-value-';
			   output += region_id;
			   output += ' aina_new_wilaya" type="text" name="reg_admin_group_code" placeholder="Enter wilaya" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-add-region-wilaya-btn-';
		output += region_id;
		output += '" region_id="';
		output += region_id;
		output += '" regions="';
		output += regions;
		output += '" country_id="';
		output += country_id;
		output += '" class="fundi-add-region-wilaya-btn-';
		output += region_id;
		output += ' fundi-add-region-wilaya-btn">Add Wilaya</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-region-wilaya-action-selected-sub-';
 output += region_id;
 output += '" class="center-region-wilaya-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }

 	function selectedFundiCraftEquipmentAddDetailsLink(professional_id){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';		
 output += '<div id="center-equipment-action-selected-input-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="aina_new_kifaa-value-';
			   output += professional_id;
			   output += '" class="aina_new_kifaa-value-';
			   output += professional_id;
			   output += ' aina_new_kifaa" type="text" name="reg_admin_group_code" placeholder="Enter aina_kifaa" value="" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-add-craft-equipment-btn-';
		output += professional_id;
		output += '" professional_id="';
		output += professional_id;
		output += '" class="fundi-add-craft-equipment-btn-';
		output += professional_id;
		output += ' fundi-add-craft-equipment-btn">Add Equipment</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-equipment-action-selected-sub-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }
 

  function get_fundi_update_details_country_region_wilaya_input(container, region_id, wilaya, wilaya_id){
		container.innerHTML = '';
  var li_success_list = selectedFundiCountryRegionWilayaDetailsInputLink(region_id, wilaya, wilaya_id);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  
   var fundi_update_country_region_wilaya_btn = document.getElementsByClassName('fundi-update-country-region-wilaya-btn-'+region_id);

    for(var i = 0; i < fundi_update_country_region_wilaya_btn.length; i++){
  fundi_update_country_region_wilaya_btn[i].addEventListener('click', function(){
      console.log("fundi_update_region_wilaya_btn_clicked72");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
var wilaya = document.getElementById("wilaya-value-"+wilaya_id).value;
console.log("2_wilaya=>"+wilaya);

get_upload_fundi_update_country_region_wilaya_input(btn_craft_update_action, craft_equipment_update_container, region_id, wilaya, wilaya_id);
})

	}

	}
 function get_fundi_update_details_country_region_wilaya(container, country_id, wilaya_id, region_id, wilaya, is_active){
		container.innerHTML = '';
  var li_success_list = selectedFundiCountryRegionWilayaDetailsLink(country_id, wilaya_id, region_id, wilaya, is_active);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  
    var fundi_update_country_region_wilaya_btn = document.getElementsByClassName('fundi-update-country-region-wilaya-btn-'+region_id);

    for(var i = 0; i < fundi_update_country_region_wilaya_btn.length; i++){
  fundi_update_country_region_wilaya_btn[i].addEventListener('click', function(){
      console.log("fundi_update_region_wilaya_btn_clicked70");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
var wilaya = document.getElementById("wilaya-value-"+wilaya_id).value;
console.log("1_wilaya=>"+wilaya);

get_upload_fundi_update_country_region_wilaya_input(btn_craft_update_action, region_id, wilaya, wilaya_id);
})

	}

   var update_craft_equipment = document.getElementsByClassName('btn-country-region-wilaya-update-'+region_id);

    for(var i = 0; i < update_craft_equipment.length; i++){
  update_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_update_region_wilaya_btn_clicked2");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya = btn_craft_update_action.getAttribute("wilaya");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");
var craft_equipment_update_container = document.getElementById("center-region-wilaya-action-selected-input-"+region_id);
get_fundi_update_details_country_region_wilaya_input(craft_equipment_update_container, region_id, wilaya, wilaya_id);
})

	}

var btn_country_region_wilaya_activate = document.getElementsByClassName('btn-country-region-wilaya-activate-'+region_id);

    for(var i = 0; i < btn_country_region_wilaya_activate.length; i++){
  btn_country_region_wilaya_activate[i].addEventListener('click', function(){
      console.log("fundi_country_region_wilaya_activate_btn_clicked1");

      var btn_country_region_wilaya_activate_action = document.getElementById(this.id);
	 var region_id = btn_country_region_wilaya_activate_action.getAttribute("region_id");
	 var wilaya_id = btn_country_region_wilaya_activate_action.getAttribute("wilaya_id");
	
	 var is_active = parseInt(btn_country_region_wilaya_activate_action.getAttribute("is_active"));

	  var country_region_display_action = document.getElementById("country-region-display-action-"+region_id);

	  var country_id = country_region_display_action.getAttribute("country_id");
	 
console.log("left_clicked country_id=>"+country_id);
 var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
			console.log("deactivate");
get_fundi_activate_deativate_wilaya(country_region_wilaya_container, 0, btn_country_region_wilaya_activate_action, wilaya_id);
		}
		if(is_active == 0){
			console.log("activate");
get_fundi_activate_deativate_wilaya(country_region_wilaya_container, 1, btn_country_region_wilaya_activate_action, wilaya_id);
		}
	}

})

	}

	 var update_craft_equipment = document.getElementsByClassName('btn-country-region-wilaya-delete-'+region_id);

    for(var i = 0; i < update_craft_equipment.length; i++){
  update_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_delete_region_wilaya_btn_clicked2");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya = btn_craft_update_action.getAttribute("wilaya");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");

get_fundi_delete_country_region_wilaya(btn_craft_update_action, region_id, wilaya, wilaya_id);

})

	}

 var delete_country_wilaya = document.getElementsByClassName('delete-country-wilaya-'+region_id);

    for(var i = 0; i < delete_country_wilaya.length; i++){
  delete_country_wilaya[i].addEventListener('click', function(){
      console.log("fundi_delete_region_wilaya_btn_clicked3");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
console.log("left_clicked region_id=>"+region_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var wilaya = btn_craft_update_action.getAttribute("wilaya");
var wilaya_id = btn_craft_update_action.getAttribute("wilaya_id");

get_fundi_delete_country_region_wilaya(btn_craft_update_action, region_id, wilaya, wilaya_id);
})

	}
	
	}

	 function get_fundi_update_details_country_region(container, country_id, region_id, regions, is_active){
		container.innerHTML = '';
  var li_success_list = selectedFundiCountryRegionDetailsLink(country_id, region_id, regions, is_active);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var delete_craft_equipment = document.getElementsByClassName('btn-country-region-delete-'+country_id);

     for(var i = 0; i < delete_craft_equipment.length; i++){
  delete_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_delete_country_region_btn_clicked1");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	 
if(document.getElementsByClassName('activation-loading').length == 0){
get_fundi_delete_details_country_region(btn_craft_update_action,center_equipment_action_selected_sub, region_id, country_id);

}

})

	}
   var update_craft_equipment = document.getElementsByClassName('btn-country-region-update-'+country_id);

    for(var i = 0; i < update_craft_equipment.length; i++){
  update_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_update_country_region_btn_clicked2");

      var btn_craft_update_action = document.getElementById(this.id);
	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked country_id=>"+country_id);

var region_id = btn_craft_update_action.getAttribute("region_id");
var regions = btn_craft_update_action.getAttribute("regions");
var country_id = btn_craft_update_action.getAttribute("country_id");

var craft_equipment_update_container = document.getElementById("center-region-action-selected-input-"+region_id);

get_fundi_update_details_country_single_region(craft_equipment_update_container, country_id, region_id, regions);

})

	}
	var btn_country_region_activate = document.getElementsByClassName('btn-country-region-activate-'+country_id);

    for(var i = 0; i < btn_country_region_activate.length; i++){
  btn_country_region_activate[i].addEventListener('click', function(){
      console.log("fundi_activate_deactivate_country_region_btn_clicked1");

      var btn_craft_activate_action = document.getElementById(this.id);
	 var region_id = btn_craft_activate_action.getAttribute("region_id");
	 var country_id = btn_craft_activate_action.getAttribute("country_id");
	 var is_active = parseInt(btn_craft_activate_action.getAttribute("is_active"));

console.log("left_clicked region_id=>"+region_id);
var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);

	if(document.getElementsByClassName('activation-loading').length == 0){
		if(is_active == 1){
get_fundi_activate_deativate_region(center_equipment_action_selected_sub, 0, btn_craft_activate_action, region_id, country_id);
		}
		if(is_active == 0){
get_fundi_activate_deativate_region(center_equipment_action_selected_sub, 1, btn_craft_activate_action, region_id, country_id);
		}
	}

})

	}
	var fundi_update_craft_equipment_btn = document.getElementsByClassName('fundi-update-country-region-btn-'+country_id);

    for(var i = 0; i < fundi_update_craft_equipment_btn.length; i++){
  fundi_update_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_equipment_btn_clicked3");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
	 	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked region_id=>"+region_id);
var regions = document.getElementById("regions-value-"+region_id).value;
 var center_equipment_action_selected_sub = document.getElementById("center-region-action-selected-sub-"+country_id);
	 
get_fundi_update_details_country_upload_region(btn_craft_update_action, center_equipment_action_selected_sub, country_id, region_id, regions);

})

	}
	}
	function get_fundi_update_details_craft_equipment(container, professional_id, kifaa_aina_id, aina_kifaa){
		container.innerHTML = '';
  var li_success_list = selectedFundiCraftEquipmentDetailsLink(professional_id, kifaa_aina_id, aina_kifaa);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  
   var update_craft_equipment = document.getElementsByClassName('btn-craft-equipment-update-'+professional_id);

    for(var i = 0; i < update_craft_equipment.length; i++){
  update_craft_equipment[i].addEventListener('click', function(){
      console.log("fundi_update_craft_equipment_btn_clicked2");

      var btn_craft_update_action = document.getElementById(this.id);
	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked professional_id=>"+professional_id);
var craft_equipment_update_container = document.getElementById("center-equipment-action-selected-input-"+professional_id);

var kifaa_aina_id = btn_craft_update_action.getAttribute("kifaa_aina_id");
var aina_kifaa = btn_craft_update_action.getAttribute("aina_kifaa");
var professional_id = btn_craft_update_action.getAttribute("professional_id");

get_fundi_update_details_craft_single_equipment(craft_equipment_update_container, professional_id, kifaa_aina_id, aina_kifaa);

})

	}

	var fundi_update_craft_equipment_btn = document.getElementsByClassName('fundi-update-craft-equipment-btn-'+professional_id);

    for(var i = 0; i < fundi_update_craft_equipment_btn.length; i++){
  fundi_update_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_equipment_btn_clicked3");

      var btn_craft_update_action = document.getElementById(this.id);
	 var kifaa_aina_id = btn_craft_update_action.getAttribute("kifaa_aina_id");
	 	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked kifaa_aina_id=>"+kifaa_aina_id);
var aina_kifaa = document.getElementById("aina_kifaa-value-"+kifaa_aina_id).value;
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+professional_id);
	 
  get_craft_vifaa(professional_id, center_equipment_action_selected_sub);
get_fundi_update_details_craft_upload_equipment(btn_craft_update_action, center_equipment_action_selected_sub, professional_id, kifaa_aina_id, aina_kifaa);

})

	}
	}

	function selectedFundiCountryRegionDetailsLink(country_id, region_id, regions, is_active){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

 output += '<div id="center-region-action-selected-container-';
 output += country_id;
 output += '-';
 output +=  region_id;
  output += '" class="center-region-action-selected-container-';
   output += region_id;
 output += '-';
  output += country_id;
   output += ' center-region-action-selected-container">';
 output += '<div id="center-region-action-selected-header-';
  output += region_id;
 output += '-';
 output += country_id;
 output += '" class="center-region-action-selected-header">';
 output += '<table>';
 output += '<tr>';
 output += '<td><p>';
output += regions;
output += '</p></td><td><button id="btn-country-region-delete-';
output += region_id;
output += '" regions="';
output += regions;
output += '" region_id="';
output += region_id;
output += '" country_id="';
output += country_id;
output += '" class="btn-country-region-delete-';
output += country_id;
output += ' btn-country-region-delete">Delete</button></td><td><button id="btn-country-region-update-';
output += region_id;
output += '" region_id="';
output += region_id;
output += '" country_id="';
output += country_id;
output += '" regions="';
output += regions;
output += '" class="btn-country-region-update-';
output += country_id;
output += ' btn-country-region-update">Update</button></td><td><button id="btn-country-region-activate-';
output += region_id;
output += '" region_id="';
output += region_id;
output += '" country_id="';
output += country_id;
output += '" is_active="';
output += is_active;
output += '" class="btn-country-region-activate-';
output += region_id;
output += ' btn-country-region-activate-';
output += country_id;
output += ' btn-country-region-activate ';
 if(is_active == 1){
output += 'active-country-region';
  }else{
output += 'in-active-country-region';
  }
output += '">';
if(parseInt(is_active) == 1){
output += 'DeActivate';
}
if(parseInt(is_active) == 0){
	output += 'Activate';
}
output += '</button></td>';
 output += '</tr>';
 output += '</table>';
 output += '</div>';
 output += '</div>';
		
 output += '<div id="center-region-action-selected-input-';
 output += region_id;
 output += '" class="center-region-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="regions-value-';
			   output += region_id;
			   output += '" class="regions-value-';
			   output += region_id;
			   output += ' regions-value" type="text" name="reg_admin_group_code" placeholder="Enter regions" value="';
			 output += regions; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-region-btn-';
		output += region_id;
		output += '" country_id="';
		output += country_id;
		output += '" region_id="';
		output += region_id;
		output += '" class="fundi-update-country-region-btn-';
		output += region_id;
		output += ' fundi-update-country-region-btn-';
		output += country_id;
		output += ' fundi-update-country-region-btn success">Update Region</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-region-action-selected-sub-';
 output += region_id;
 output += '" class="center-region-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }
 function selectedFundiCountryRegionWilayaDetailsLink(country_id, wilaya_id, region_id, wilaya, is_active){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

 output += '<div id="center-region-wilaya-action-selected-container-';
 output += wilaya_id;
 output += '-';
 output +=  region_id;
  output += '" class="center-region-wilaya-action-selected-container-';
   output += wilaya_id;
 output += ' center-region-wilaya-action-selected-container-';
  output += region_id;
   output += ' center-region-wilaya-action-selected-container">';
 output += '<div id="center-region-wilaya-action-selected-header-';
  output += wilaya_id;
 output += '-';
 output += region_id;
 output += '" class="center-region-wilaya-action-selected-header-';
  output += region_id;
output += ' center-region-wilaya-action-selected-header">';
 output += '<table>';
 output += '<tr>';
 output += '<td><p>';
output += wilaya;
output += '</p></td><td><button id="btn-country-region-wilaya-delete-';
output += region_id;
output += '" wilaya="';
output += wilaya;
output += '" region_id="';
output += region_id;
output += '" country_id="';
output += country_id;
output += '" wilaya_id="';
output += wilaya_id;
output += '" class="btn-country-region-wilaya-delete-';
output += wilaya_id;
output += ' btn-country-region-wilaya-delete-';
output += region_id;
output += ' btn-country-region-wilaya-delete">Delete</button></td><td><button id="btn-country-region-wilaya-update-';
output += wilaya_id;
output += '" region_id="';
output += region_id;
output += '" country_id="';
output += country_id;
output += '" wilaya_id="';
output += wilaya_id;
output += '" wilaya="';
output += wilaya;
output += '" class="btn-country-region-wilaya-update-';
output += wilaya_id;
output += ' btn-country-region-wilaya-update-';
output += region_id;
output += ' btn-country-region-wilaya-update">Update</button></td><td><button id="btn-country-region-wilaya-activate-';
output += wilaya_id;
output += '" wilaya_id="';
output += wilaya_id;
output += '" country_id="';
output += country_id;
output += '" region_id="';
output += region_id;
output += '" is_active="';
output += is_active;
output += '" class="btn-country-region-wilaya-activate-';
output += wilaya_id;
output += ' btn-country-region-wilaya-activate-';
output += region_id;
output += ' btn-country-region-wilaya-activate ';
  if(is_active == 1){
output += 'active-region-wilaya';
  }else{
output += 'in-active-region-wilaya';
  }
output += '">';
if(parseInt(is_active) == 1){
output += 'DeActivate';
}
if(parseInt(is_active) == 0){
	output += 'Activate';
}
output += '</button></td>';
 output += '</tr>';
 output += '</table>';
 output += '</div>';
 output += '</div>';
		
 output += '<div id="center-region-wilaya-action-selected-input-';
 output += region_id;
 output += '" class="center-region-wilaya-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="wilaya-value-';
			   output += wilaya_id;
			   output += '" class="wilaya-value-';
			   output += wilaya_id;
			   output += ' wilaya-value" type="text" name="reg_admin_group_code" placeholder="Enter wilaya" value="';
			 output += wilaya; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-region-wilaya-btn-';
		output += wilaya_id;
		output += '" wilaya_id="';
		output += wilaya_id;
		output += '" region_id="';
		output += region_id;
		output += '" class="fundi-update-country-region-wilaya-btn-';
		output += wilaya_id;
		output += ' fundi-update-country-region-wilaya-btn-';
		output += region_id;
		output += ' fundi-update-country-region-wilaya-btn success">Update Wilaya</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-region-wilaya-action-selected-sub-';
 output += region_id;
 output += '" class="center-region-wilaya-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }


  function selectedFundiCountryRegionWilayaDetailsInputLink( region_id, wilaya, wilaya_id){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="wilaya-value-';
			   output += wilaya_id;
			   output += '" class="wilaya-value-';
			   output += wilaya_id;
			   output += ' wilaya-value" type="text" name="reg_admin_group_code" placeholder="Enter wilaya" value="';
			 output += wilaya; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-region-wilaya-btn-';
		output += wilaya_id;
		output += '" wilaya_id="';
		output += wilaya_id;
		output += '" region_id="';
		output += region_id;
		output += '" region_id="';
		output += region_id;
		output += '" region_id="';
		output += region_id;
		output += '" class="fundi-update-country-region-wilaya-btn-';
		output += wilaya_id;
		output += ' fundi-update-country-region-wilaya-btn-';
		output += region_id;
		output += ' fundi-update-country-region-wilaya-btn success">Update Wilaya</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
    return output;
 }
	function selectedFundiCraftEquipmentDetailsLink(professional_id, kifaa_aina_id, aina_kifaa){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

 output += '<div id="center-equipment-action-selected-container-';
 output += professional_id;
 output += '-';
 output +=  kifaa_aina_id;
  output += '" class="center-equipment-action-selected-container-';
   output += kifaa_aina_id;
 output += '-';
  output += professional_id;
   output += ' center-equipment-action-selected-container">';
 output += '<div id="center-equipment-action-selected-header-';
  output += kifaa_aina_id;
 output += '-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-header">';
 output += '<table>';
 output += '<tr>';
 output += '<td><p>';
output += aina_kifaa;
output += '</p></td><td><button id="btn-craft-equipment-delete-';
output += kifaa_aina_id;
output += '" aina_kifaa="';
output += aina_kifaa;
output += '" kifaa_aina_id="';
output += kifaa_aina_id;
output += '" professional_id="';
output += professional_id;
output += '" class="btn-craft-equipment-delete-';
output += professional_id;
output += ' btn-craft-equipment-delete">Delete</button></td><td><button id="btn-craft-equipment-update-';
output += kifaa_aina_id;
output += '" kifaa_aina_id="';
output += professional_id;
output += '" professional_id="';
output += kifaa_aina_id;
output += '" aina_kifaa="';
output += aina_kifaa;
output += '" class="btn-craft-equipment-update-';
output += professional_id;
output += ' btn-craft-equipment-update">Update</button></td><td><button id="btn-craft-equipment-activate-';
output += kifaa_aina_id;
output += '" kifaa_aina_id="';
output += kifaa_aina_id;
output += '" class="btn-craft-equipment-activate-';
output += kifaa_aina_id;
output += ' btn-craft-equipment-activate">DeActivate</button></td>';
 output += '</tr>';
 output += '</table>';
 output += '</div>';
 output += '</div>';
		
 output += '<div id="center-equipment-action-selected-input-';
 output += kifaa_aina_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="aina_kifaa-value-';
			   output += kifaa_aina_id;
			   output += '" class="aina_kifaa-value-';
			   output += kifaa_aina_id;
			   output += ' aina_kifaa-value" type="text" name="reg_admin_group_code" placeholder="Enter aina_kifaa" value="';
			 output += aina_kifaa; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-craft-equipment-btn-';
		output += kifaa_aina_id;
		output += '" professional_id="';
		output += professional_id;
		output += '" kifaa_aina_id="';
		output += kifaa_aina_id;
		output += '" class="fundi-update-craft-equipment-btn-';
		output += kifaa_aina_id;
		output += ' fundi-update-craft-equipment-btn-';
		output += professional_id;
		output += ' fundi-update-craft-equipment-btn success">Update Equipment</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-equipment-action-selected-sub-';
 output += kifaa_aina_id;
 output += '" class="center-equipment-action-selected-sub">';
 output += 'complete message</div>';
    return output;
 }

 function get_fundi_update_details_country_single_region(container, country_id, region_id, regions){
		container.innerHTML = '';
  var li_success_list = selectedFundiCountryRegionSingleDetailsLink(country_id, region_id, regions);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var fundi_update_craft_equipment_btn = document.getElementsByClassName('fundi-update-country-region-btn-'+country_id);

    for(var i = 0; i < fundi_update_craft_equipment_btn.length; i++){
  fundi_update_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_equipment_btn_clicked8");

      var btn_craft_update_action = document.getElementById(this.id);
	 var region_id = btn_craft_update_action.getAttribute("region_id");
	 	 var country_id = btn_craft_update_action.getAttribute("country_id");
console.log("left_clicked region_id=>"+region_id);
var regions = document.getElementById("regions-value-"+region_id).value;
 var center_equipment_action_selected_sub = document.getElementById("center-region-action-selected-sub-"+country_id);
	 
get_fundi_update_details_country_upload_region(btn_craft_update_action, center_equipment_action_selected_sub, country_id, region_id, regions);

})

	}

	}
function get_fundi_update_details_craft_single_equipment(container, professional_id, kifaa_aina_id, aina_kifaa){
		container.innerHTML = '';
  var li_success_list = selectedFundiCraftEquipmentSingleDetailsLink(professional_id, kifaa_aina_id, aina_kifaa);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  
  var fundi_update_craft_equipment_btn = document.getElementsByClassName('fundi-update-craft-equipment-btn-'+professional_id);

    for(var i = 0; i < fundi_update_craft_equipment_btn.length; i++){
  fundi_update_craft_equipment_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_btn_clicked5");

      var btn_craft_update_action = document.getElementById(this.id);
	 var kifaa_aina_id = btn_craft_update_action.getAttribute("kifaa_aina_id");
	 	 var professional_id = btn_craft_update_action.getAttribute("professional_id");
console.log("left_clicked kifaa_aina_id=>"+kifaa_aina_id);
var aina_kifaa = document.getElementById("aina_kifaa-value-"+kifaa_aina_id).value;
 var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+professional_id);
	 
get_fundi_update_details_craft_upload_equipment(btn_craft_update_action, center_equipment_action_selected_sub, professional_id, kifaa_aina_id, aina_kifaa);

})

	}

	}

		function get_upload_fundi_update_country_region_wilaya_input(btn_craft, region_id, wilaya, wilaya_id){
		console.log("get update wilaya=>"+wilaya);
		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "wilaya";
product_hint["wilaya"] = wilaya;
product_hint["region_id"] = region_id;
product_hint["wilaya_id"] = wilaya_id;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_country_update_region_wilaya.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_update_wilaya: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Update Wilaya';
//activation-loading
var json_result = JSON.parse(result);

for(var r = 0; r < json_result.length; r++){
if(json_result[r].status=="wilaya_successfully"){
	var region_id = json_result[r].region_id;

	 var country_region_display_action = document.getElementById("country-region-display-action-"+region_id);

	var country_id = country_region_display_action.getAttribute("country_id");
var regions = country_region_display_action.getAttribute("regions");
  var country_region_wilaya_container = document.getElementById("country-region-wilaya-container-"+country_id);

  get_region_wilaya(country_id, regions, region_id, country_region_wilaya_container);

}
}

}
};
xhr_quality.send(JSON.stringify({"wilaya_hint" : product_hints}));
	}
		function get_fundi_update_details_country_upload_region(btn_craft, container, country_id, region_id, regions){
		console.log("get update vifaa");
		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "region";
product_hint["country_id"] = country_id;
product_hint["region_id"] = region_id;
product_hint["regions"] = regions;
product_hints.push(product_hint);

var action_quality = "includes/handlers/ajax_country_update_region.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_update_region: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Update Region';
//activation-loading
var json_result = JSON.parse(result);

for(var r = 0; r < json_result.length; r++){
if(json_result[r].status=="region_successfully"){
	var country_id = json_result[r].country_id;
	var region_id = json_result[r].region_id;
var regions = json_result[r].regions;

	var center_equipment_action_selected_sub = document.getElementById("center-equipment-action-selected-sub-"+country_id);
	
  get_region(country_id, center_equipment_action_selected_sub);
}
}

}
};
xhr_quality.send(JSON.stringify({"region_hint" : product_hints}));
	}
	function get_fundi_update_details_craft_upload_equipment(btn_craft, container, professional_id, kifaa_aina_id, aina_kifaa){
		console.log("get update vifaa");
		
btn_craft.classList.add("activation-loading");
		var user_details_left_right =  document.getElementById("user_details_left_right");
		var admin_id = user_details_left_right.getAttribute("admin_id");
	//console.log("left continue");
    get_small_spinner(btn_craft);
var next_page = 1;

  var product_hints = [];

var product_hint = {};
product_hint["action"] = "craft";
product_hint["kifaa_aina_id"] = kifaa_aina_id;
product_hint["aina_kifaa"] = aina_kifaa;
product_hints.push(product_hint);


var action_quality = "includes/handlers/ajax_craft_update_equipment.php?page=" + next_page;

var xhr_quality = new XMLHttpRequest();
xhr_quality.open('POST', action_quality, true);


xhr_quality.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
xhr_quality.onreadystatechange = function () {
if(xhr_quality.readyState == 4 && xhr_quality.status == 200) {
var result = xhr_quality.responseText;
console.log('Result_update_equipment: ' + result);
btn_craft.classList.remove("activation-loading");
btn_craft.innerHTML = 'Update Equipment';
//activation-loading
get_craft_vifaa(professional_id, container);

}
};
xhr_quality.send(JSON.stringify({"craft_hint" : product_hints}));
	}

	function selectedFundiCountryRegionSingleDetailsLink(country_id, region_id, regions){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';		

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="regions-value-';
			   output += region_id;
			   output += '" class="regions-value-';
			   output += region_id;
			   output += ' regions-value" type="text" name="reg_admin_group_code" placeholder="Enter regions" value="';
			 output += regions; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-region-btn-';
		output += region_id;
		output += '" country_id="';
		output += country_id;
		output += '" region_id="';
		output += region_id;
		output += '" class="fundi-update-country-region-btn-';
		output += region_id;
		output += ' fundi-update-country-region-btn-';
		output += country_id;
		output += ' fundi-update-country-region-btn success">Update Region</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';

    return output;
 }
	function selectedFundiCraftEquipmentSingleDetailsLink(professional_id, kifaa_aina_id, aina_kifaa){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';		
 output += '<div id="center-equipment-action-selected-input-';
 output += kifaa_aina_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="aina_kifaa-value-';
			   output += kifaa_aina_id;
			   output += '" class="aina_kifaa-value-';
			   output += kifaa_aina_id;
			   output += ' aina_kifaa-value" type="text" name="reg_admin_group_code" placeholder="Enter aina_kifaa" value="';
			 output += aina_kifaa; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-craft-equipment-btn-';
		output += kifaa_aina_id;
		output += '" professional_id="';
		output += professional_id;
		output += '" kifaa_aina_id="';
		output += kifaa_aina_id;
		output += '" class="fundi-update-craft-equipment-btn-';
		output += kifaa_aina_id;
		output += ' fundi-update-craft-equipment-btn-';
		output += professional_id;
		output += ' fundi-update-craft-equipment-btn success">Update Equipment</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';

    return output;
 }
    function selectedFundiCraftEquipLink(professional_id, admin_id, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 // FUNDI ACTIONS STARTS
	
	//  display colors starts      
output += '<div id="craft-display-main-container-';
output += admin_id;
output += '" class="craft-display-main-container">';

var json_product_color_array = JSON.parse(result);

if(json_product_color_array.length == 0) { 

  output += '<p class="craft-display-list-container">No Available</p>';
   output += '<div id="add-craft-equip-display-container-';
  output += professional_id; 
   output += '" professional_id="';
     output += professional_id; 
   output += '" class="add-craft-equip-display-container add-craft-equip-display-container-';
   output += professional_id; 
   output += ' add-craft-equip-display-container">';
  output += '<p>Add Equipment</p>';
  output += '</div>';
}

 for(var c = 0; c < json_product_color_array.length; c++) { 

  output += '<div class="craft-display-list-container">';
 
//  display color starts
 //console.log("container=>"+JSON.stringify(json_product_color_array[c].container));

var json_container_data = JSON.parse(json_product_color_array[c].container_data);
 for(cd = 0; cd < json_container_data.length; cd++) {
    // "kifaa_aina_id"=>$row_professionals[0],"professional_id"=>$row_professionals[1],
	// "aina_kifaa"=>$row_professionals[2],"is_active"=>$row_professionals[3]));

  output += '<div id="craft-equip-display-container-';
   output += json_container_data[cd].professional_id; 
    output += '-';
  output += json_container_data[cd].kifaa_aina_id;
  output += '" kifaa_aina_id="';
  output += json_container_data[cd].kifaa_aina_id;
  output += '" aina_kifaa="';
  output += json_container_data[cd].aina_kifaa;
  output += '" professional_id="';
  output += json_container_data[cd].professional_id;
  output += '" class="craft-equip-display-container-';
  output += json_container_data[cd].professional_id; 
  output += '-';
    output += json_container_data[cd].kifaa_aina_id;
  output += ' craft-equip-display-container-';
   output += json_container_data[cd].kifaa_aina_id;
  output += ' craft-equip-display-container ';
  if(json_container_data[cd].is_active == 1){
output += 'active-craft';
  }else{
output += 'in-active-craft';
  }
   output += '">';
  output += '<p>';
    output += json_container_data[cd].aina_kifaa;
  output += '</p>';
  output += '<span id="delete-craft-equipment-';
   output += json_container_data[cd].professional_id; 
  output += '-';
  output += json_container_data[cd].kifaa_aina_id;
   output += '" kifaa_aina_id="';
   output += json_container_data[cd].kifaa_aina_id;
   output += '" professional_id="';
   output += json_container_data[cd].professional_id; 
   output += '" class="delete-craft-equipment-';
     output += json_container_data[cd].kifaa_aina_id;
    output += ' delete-craft-equipment-';
	   output += json_container_data[cd].professional_id; 
	output += ' delete-craft-equipment"><i class="fas fa-trash-alt"></i></span><span id="update-craft-equipment-';
  output += json_container_data[cd].kifaa_aina_id;
   output += '" kifaa_aina_id="'
   output += json_container_data[cd].kifaa_aina_id;
      output += '" aina_kifaa="'
   output += json_container_data[cd].aina_kifaa;
      output += '" professional_id="'
	    output += json_container_data[cd].professional_id; 
	  output += '" class="update-craft-equipment-';
     output += json_container_data[cd].kifaa_aina_id;
    output += ' update-craft-equipment-';
		    output += json_container_data[cd].professional_id; 
	output += ' update-craft-equipment"><i class="fas fa-pencil-alt"></i></span></div>';

  if((cd == (json_container_data.length - 1) ) && ( c == (json_product_color_array.length - 1))){
	
  output += '<div id="add-craft-equip-display-container-';
  output += json_container_data[cd].professional_id; 
   output += '" professional_id="';
     output += json_container_data[cd].professional_id; 
   output += '" class="add-craft-equip-display-container add-craft-equip-display-container-';
   output += json_container_data[cd].professional_id; 
   output += ' add-craft-equip-display-container">';
  output += '<p>Add Equipment</p>';
  output += '</div>';
  }
  }

 //display color ends

 output += '</div>';

 } 
output += '<div id="craft-equipment-update-container-';
  output += professional_id;
   output += '" class="craft-equipment-update-container-';
   output += professional_id;
   output += ' craft-equipment-update-container">';
  output += '</div>';
 output += '</div>';
//  display colors ends
			// FUNDI ACTIONS ENDS
		
    return output;
 }
	   function selectedFundiRegionLink(country_id, admin_id, result){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 // FUNDI ACTIONS STARTS
	
	//  display colors starts      
output += '<div id="country-region-display-main-container-';
output += admin_id;
output += '" class="country-region-display-main-container">';

var json_product_color_array = JSON.parse(result);

if(json_product_color_array.length == 0) { 

  output += '<p class="country-display-list-container">No Available</p>';
  
  output += '<div id="add-country-region-display-container-';
  output += country_id; 
   output += '" country_id="';
     output += country_id; 
   output += '" class="add-country-region-display-container add-country-region-display-container-';
   output += country_id; 
   output += ' add-country-region-display-container">';
  output += '<p>Add Region</p>';
  output += '</div>';
}

 for(var c = 0; c < json_product_color_array.length; c++) { 

  output += '<div class="country-display-list-container">';
 
//  display color starts
 //console.log("container=>"+JSON.stringify(json_product_color_array[c].container));

var json_container_data = JSON.parse(json_product_color_array[c].container_data);
 for(cd = 0; cd < json_container_data.length; cd++) {
    //  "region_id"=>$row_countries[0],"regions"=>$row_countries[1],
	//"country_id"=>$row_countries[2],"is_active"=>$row_countries[4],
   // "total_fundi"=>$row_countries[5]));
  output += '<div id="country-region-display-container-';
   output += json_container_data[cd].country_id; 
    output += '-';
  output += json_container_data[cd].region_id;
  output += '" region_id="';
  output += json_container_data[cd].region_id;
  output += '" regions="';
  output += json_container_data[cd].regions;
  output += '" country_id="';
  output += json_container_data[cd].country_id;
  output += '" class="country-region-display-container-';
  output += json_container_data[cd].country_id; 
  output += '-';
    output += json_container_data[cd].region_id;
  output += ' country-region-display-container-';
   output += json_container_data[cd].region_id;
   output += ' country-region-display-container-';
   output += json_container_data[cd].country_id;
  output += ' country-region-display-container ';
  if(json_container_data[cd].is_active == 1){
output += 'active-country';
  }else{
output += 'in-active-country';
  }
   output += '">';
  output += '<p id="country-region-display-action-';
   output += json_container_data[cd].region_id;
   output += '" region_id="';
  output += json_container_data[cd].region_id;
   output += '" regions="';
  output += json_container_data[cd].regions;
     output += '" is_active="';
  output += json_container_data[cd].is_active;
  output += '" country_id="';
  output += json_container_data[cd].country_id;
  output += '" class="country-region-display-action-';
  output += json_container_data[cd].country_id; 
  output += '-';
    output += json_container_data[cd].region_id;
  output += ' country-region-display-action-';
   output += json_container_data[cd].region_id;
   output += ' country-region-display-action-';
   output += json_container_data[cd].country_id;
  output += ' country-region-display-action ';
  if(json_container_data[cd].is_active == 1){
output += 'active-country';
  }else{
output += 'in-active-country';
  }
   output += '">';
    output += json_container_data[cd].regions;
  output += '</p>';
  output += '<span id="delete-country-region-';
   output += json_container_data[cd].country_id; 
  output += '-';
  output += json_container_data[cd].region_id;
   output += '" region_id="';
   output += json_container_data[cd].region_id;
   output += '" country_id="';
   output += json_container_data[cd].country_id; 
   output += '" class="delete-country-region-';
     output += json_container_data[cd].region_id;
    output += ' delete-country-region-';
	   output += json_container_data[cd].country_id; 
	output += ' delete-country-region"><i class="fas fa-trash-alt"></i></span><span id="update-country-region-';
  output += json_container_data[cd].region_id;
   output += '" region_id="'
   output += json_container_data[cd].region_id;
      output += '" is_active="'
   output += json_container_data[cd].is_active;
      output += '" regions="'
   output += json_container_data[cd].regions;
      output += '" country_id="'
	    output += json_container_data[cd].country_id; 
	  output += '" class="update-country-region-';
     output += json_container_data[cd].region_id;
    output += ' update-country-region-';
		    output += json_container_data[cd].country_id; 
	output += ' update-country-region"><i class="fas fa-pencil-alt"></i></span></div>';

  if((cd == (json_container_data.length - 1) ) && ( c == (json_product_color_array.length - 1))){
	
  output += '<div id="add-country-region-display-container-';
  output += json_container_data[cd].country_id; 
   output += '" country_id="';
     output += json_container_data[cd].country_id; 
   output += '" class="add-country-region-display-container add-country-region-display-container-';
   output += json_container_data[cd].country_id; 
   output += ' add-country-region-display-container">';
  output += '<p>Add Region</p>';
  output += '</div>';
  }
  }

 //display color ends

 output += '</div>';

 } 
output += '<div id="country-region-update-container-';
  output += country_id;
   output += '" class="country-region-update-container-';
   output += country_id;
   output += ' country-region-update-container">';
  output += '</div>';
  output += '<div id="country-region-wilaya-container-';
  output += country_id;
   output += '" class="country-region-wilaya-container-';
   output += country_id;
   output += ' country-region-wilaya-container">';
  output += '</div>';
 output += '</div>';
//  display colors ends
			// FUNDI ACTIONS ENDS
		
    return output;
 }

 	   function selectedFundiRegionWilayaLink(country_id, regions, region_id, result){
		console.log("RegionWilaya_region_id="+region_id);

var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';
	 // FUNDI ACTIONS STARTS
	
	//  display colors starts      
output += '<div id="country-region-wilaya-display-main-container-';
output += region_id;
output += '" class="country-region-wilaya-display-main-container"><h3>';
output += regions;
output += '</h3>';

var json_product_color_array = JSON.parse(result);

if(json_product_color_array.length == 0) { 

  output += '<p class="country-display-list-container">No Available</p>';
    output += '<div id="add-country-wilaya-display-container-';
  output += region_id; 
   output += '" region_id="';
     output += region_id; 
	 output += '" regions="';
     output += regions; 
	   output += '" country_id="';
     output += country_id; 
   output += '" class="add-country-wilaya-display-container add-country-wilaya-display-container-';
   output += region_id; 
   output += ' add-country-wilaya-display-container">';
  output += '<p>Add Wilaya</p>';
  output += '</div>';
}

 for(var c = 0; c < json_product_color_array.length; c++) { 

  output += '<div class="country-display-list-container">';
 
//  display color starts
 //console.log("container=>"+JSON.stringify(json_product_color_array[c].container));

var json_container_data = JSON.parse(json_product_color_array[c].container_data);
 for(cd = 0; cd < json_container_data.length; cd++) {
  output += '<div id="country-wilaya-display-container-';
   output += json_container_data[cd].region_id; 
    output += '-';
  output += json_container_data[cd].wilaya_id;
  output += '" wilaya_id="';
  output += json_container_data[cd].wilaya_id;
  output += '" wilaya="';
  output += json_container_data[cd].wilaya;
  output += '" wilaya_id="';
  output += json_container_data[cd].wilaya_id;
  output += '" class="country-wilaya-display-container-';
  output += json_container_data[cd].wilaya_id; 
  output += '-';
    output += json_container_data[cd].wilaya_id;
  output += ' country-wilaya-display-container-';
   output += json_container_data[cd].wilaya_id;
   output += ' country-wilaya-display-container-';
   output += json_container_data[cd].region_id;
  output += ' country-wilaya-display-container ';
  if(json_container_data[cd].is_active == 1){
output += 'active-country';
  }else{
output += 'in-active-country';
  }
   output += '">';
  output += '<p>';
    output += json_container_data[cd].wilaya;
  output += '</p>';
  output += '<span id="delete-country-wilaya-';
   output += json_container_data[cd].region_id; 
  output += '-';
  output += json_container_data[cd].wilaya_id;
   output += '" wilaya_id="';
   output += json_container_data[cd].wilaya_id;
    output += '" wilaya="';
   output += json_container_data[cd].wilaya;
   output += '" region_id="';
   output += json_container_data[cd].region_id; 
   output += '" class="delete-country-wilaya-';
     output += json_container_data[cd].wilaya_id;
    output += ' delete-country-wilaya-';
	   output += json_container_data[cd].region_id; 
	output += ' delete-country-wilaya"><i class="fas fa-trash-alt"></i></span><span id="update-country-wilaya-';
  output += json_container_data[cd].wilaya_id;
   output += '" wilaya_id="'
   output += json_container_data[cd].wilaya_id;
      output += '" wilaya="'
   output += json_container_data[cd].wilaya;
 output += '" is_active="'
   output += json_container_data[cd].is_active;
      output += '" region_id="'
	    output += json_container_data[cd].region_id; 
	  output += '" class="update-country-wilaya-';
     output += json_container_data[cd].wilaya_id;
    output += ' update-country-wilaya-';
		    output += json_container_data[cd].region_id; 
	output += ' update-country-wilaya"><i class="fas fa-pencil-alt"></i></span></div>';

  if((cd == (json_container_data.length - 1) ) && ( c == (json_product_color_array.length - 1))){
	
  output += '<div id="add-country-wilaya-display-container-';
  output += json_container_data[cd].region_id; 
   output += '" region_id="';
     output += json_container_data[cd].region_id; 
	   output += '" regions="';
     output += regions; 
	   output += '" country_id="';
     output += country_id; 
   output += '" class="add-country-wilaya-display-container add-country-wilaya-display-container-';
   output += json_container_data[cd].region_id; 
   output += ' add-country-wilaya-display-container">';
  output += '<p>Add Wilaya</p>';
  output += '</div>';
  }
  }

 //display color ends

 output += '</div>';

 } 
output += '<div id="country-wilaya-update-container-';
  output += region_id;
   output += '" class="country-wilaya-update-container-';
   output += region_id;
   output += ' country-wilaya-update-container">';
  output += '</div>';
 output += '</div>';
//  display colors ends
			// FUNDI ACTIONS ENDS
		
    return output;
 }
 	 function get_fundi_update_details_craft(container, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header){
    container.innerHTML = '';
  var li_success_list = selectedFundiCraftUpdateDetailsLink(total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var fundi_update_craft_btn = document.getElementsByClassName('fundi-update-craft-btn');

    for(var i = 0; i < fundi_update_craft_btn.length; i++){
  fundi_update_craft_btn[i].addEventListener('click', function(){
      console.log("fundi_update_craft_btn_clicked");

      var fundi_update_craft_btn_action = document.getElementById(this.id);
	 
	  var professional_id = fundi_update_craft_btn_action.getAttribute("professional_id");


	   var professional = document.getElementById("professional-value-"+professional_id).value;
	 var professional_hint = document.getElementById("professional-hint-value-"+professional_id).value;
	 var professional_btn = document.getElementById("professional-btn-value-"+professional_id).value;
	 var professional_header= document.getElementById("professional-header-value-"+professional_id).value;
	 
	 if(document.getElementsByClassName('activation-loading').length == 0 ){
 get_update_fundi_craft(professional_id, professional, professional_hint, professional_btn, professional_header);
	 }
})

	}
}
	 function get_fundi_update_details_country(container, total_fundi, country_id, country_name, name_code){
    container.innerHTML = '';
  var li_success_list = selectedFundiCountryUpdateDetailsLink(total_fundi, country_id, country_name, name_code);
  container.innerHTML = li_success_list;
  container.style.display = 'online';

  var fundi_update_country_btn = document.getElementsByClassName('fundi-update-country-btn');

    for(var i = 0; i < fundi_update_country_btn.length; i++){
  fundi_update_country_btn[i].addEventListener('click', function(){
      console.log("fundi_update_country_btn_clicked");

      var fundi_update_country_btn_action = document.getElementById(this.id);
	  var country_id = fundi_update_country_btn_action.getAttribute("country_id");


	   var country_name = document.getElementById("country-value-"+country_id).value;
	   var name_code = document.getElementById("country-name_code-value-"+country_id).value;
	 
	 if(document.getElementsByClassName('activation-loading').length == 0 ){
  get_update_fundi_country(country_id, country_name, name_code);
}
})

	}
}
   function selectedFundiCraftUpdateDetailsLink(total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

		 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="professional-value-';
			   output += professional_id;
			   output += '" class="professional-value-';
			   output += professional_id;
			   output += ' professional-value" type="text" name="reg_admin_group_code" placeholder="Enter professional" value="';
			 output += professional; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-hint-value-';
			  output += professional_id;
			  output += '" class="professional-hint-value-';
			  output += professional_id;
			  output += ' professional-hint-value" type="text" name="reg_admin_group_code" placeholder="Enter professional hint" value="';
			  output += professional_hint;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-btn-value-';
			  output += professional_id;
			  output += '" class="professional-btn-value-';
			  output += professional_id;
			  output += ' professional-btn-value" type="text" name="reg_admin_group_code" placeholder="Enter professional btn" value="';
			  output += professional_btn;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-header-value-';
			  output += professional_id;
			  output += '" class="professional-header-value-';
			  output += professional_id;
			  output += ' professional-header-value" type="text" name="reg_admin_group_code" placeholder="Enter professional header" value="';
			  output += professional_header;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-craft-btn-';
		output += professional_id;
		output += '" professional_id="';
		output += professional_id;
		output += '" total_fundi="';
		output += total_fundi;
		output += '" class="fundi-update-craft-btn-';
		output += professional_id;
		output += ' fundi-update-craft-btn success">Update Craft</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
    return output;
 }
	   function selectedFundiCountryUpdateDetailsLink(total_fundi, country_id, country_name, name_code){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

		 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="country-value-';
			   output += country_id;
			   output += '" class="country-value-';
			   output += country_id;
			   output += ' country-value" type="text" name="reg_admin_group_code" placeholder="Enter country" value="';
			 output += country_name; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
		 output += '<tr>';
		 output += '<td>';
               output += '<input id="country-name_code-value-';
			   output += country_id;
			   output += '" class="country-name_code-value-';
			   output += country_id;
			   output += ' country-name_code" type="text" name="reg_admin_group_code" placeholder="Enter name code" value="';
			 output += name_code; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-btn-';
		output += country_id;
		output += '" country_id="';
		output += country_id;
		output += '" total_fundi="';
		output += total_fundi;
		output += '" class="fundi-update-country-btn-';
		output += country_id;
		output += ' fundi-update-country-btn success">Update Country</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
    return output;
 }
    function selectedFundiCraftDetailsLink(is_active, total_fundi, professional_id, professional, professional_btn, professional_hint, professional_header){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

 output += '<div id="center-equipment-action-selected-container-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-container">';
 output += '<div id="center-equipment-action-selected-header-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-header">';
 output += '<table>';
 output += '<tr>';
 output += '<td><p>';
output += professional;
output += '</p></td><td><button id="btn-craft-delete-';
output += professional_id;
output += '" professional="';
output += professional;
output += '" professional_id="';
output += professional_id;
	output += '" total_fundi="';
		output += total_fundi;
output += '" class="btn-craft-delete-';
output += professional_id;
output += ' btn-craft-delete">Delete</button></td><td><button id="btn-craft-update-';
output += professional_id;
output += '" professional_id="';
output += professional_id;
output += '" professional="';
output += professional;
 output += '" professional="';
  output += professional;
  output += '" professional_btn="';
  output += professional_btn;
  output += '" professional_hint="';
   output += professional_hint;
     output += '" professional_header="';
   output += professional_header;
      output += '" total_fundi="';
   output += total_fundi;
output += '" class="btn-craft-update-';
output += professional_id;
output += ' btn-craft-update">Update</button></td><td><button id="btn-craft-activate-';
output += professional_id;
output += '" professional="';
output += professional;
output += '" professional_id="';
output += professional_id;
output += '" is_active="';
output += is_active;
output += '" class="btn-craft-activate-';
output += professional_id;
if(parseInt(is_active) == 1){
output += ' in-active-craft';
  }else{
output += ' active-craft';
  }
output += ' btn-craft-activate">';
if(parseInt(is_active) == 1){
output += 'DeActivate';
}
if(parseInt(is_active) == 0){
	output += 'Activate';
}
output += '</button></td>';
 output += '</tr>';
 output += '</table>';
 output += '</div>';
 output += '</div>';
		
 output += '<div id="center-equipment-action-selected-input-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="professional-value-';
			   output += professional_id;
			   output += '" class="professional-value-';
			   output += professional_id;
			   output += ' professional-value" type="text" name="reg_admin_group_code" placeholder="Enter professional" value="';
			 output += professional; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-hint-value-';
			  output += professional_id;
			  output += '" class="professional-hint-value-';
			  output += professional_id;
			  output += ' professional-hint-value" type="text" name="reg_admin_group_code" placeholder="Enter professional hint" value="';
			  output += professional_hint;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-btn-value-';
			  output += professional_id;
			  output += '" class="professional-btn-value-';
			  output += professional_id;
			  output += ' professional-btn-value" type="text" name="reg_admin_group_code" placeholder="Enter professional btn" value="';
			  output += professional_btn;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
              output += '<input id="professional-header-value-';
			  output += professional_id;
			  output += '" class="professional-header-value-';
			  output += professional_id;
			  output += ' professional-header-value" type="text" name="reg_admin_group_code" placeholder="Enter professional header" value="';
			  output += professional_header;
			  output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-craft-btn-';
		output += professional_id;
		output += '" professional_id="';
		output += professional_id;
		output += '" total_fundi="';
		output += total_fundi;
		output += '" class="fundi-update-craft-btn-';
		output += professional_id;
		output += ' fundi-update-craft-btn success">Update Craft</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-equipment-action-selected-sub-';
 output += professional_id;
 output += '" class="center-equipment-action-selected-sub">';
 output += 'sub</div>';
    return output;
 }
	   function selectedFundiCountryDetailsLink(is_active, total_fundi, country_id, country_name, name_code){
var body_main = document.getElementById("body-main");
var server_link = body_main.getAttribute("server_link");

    //console.log("success");
    var output = '';

 output += '<div id="center-equipment-action-selected-container-';
 output += country_id;
 output += '" class="center-equipment-action-selected-container">';
 output += '<div id="center-equipment-action-selected-header-';
 output += country_id;
 output += '" class="center-equipment-action-selected-header">';
 output += '<table>';
 output += '<tr>';
 output += '<td><p>';
output += country_name;
output += '</p></td><td><button id="btn-country-delete-';
output += country_id;
output += '" country_name="';
output += country_name;
output += '" country_id="';
output += country_id;
	output += '" total_fundi="';
		output += total_fundi;
output += '" class="btn-country-delete-';
output += country_id;
output += ' btn-country-delete">Delete</button></td><td><button id="btn-country-update-';
output += country_id;
output += '" country_id="';
output += country_id;
output += '" country_name="';
output += country_name;
output += '" name_code="';
output += name_code;
      output += '" total_fundi="';
   output += total_fundi;
output += '" class="btn-country-update-';
output += country_id;
output += ' btn-country-update">Update</button></td><td><button id="btn-country-activate-';
output += country_id;
output += '" country_name="';
output += country_name;
output += '" country_id="';
output += country_id;
output += '" is_active="';
output += is_active;
output += '" class="btn-country-activate-';
output += country_id;
if(parseInt(is_active) == 1){
output += ' in-active-country';
  }else{
output += ' active-country';
  }
output += ' btn-country-activate">';
if(parseInt(is_active) == 1){
output += 'DeActivate';
}
if(parseInt(is_active) == 0){
	output += 'Activate';
}
output += '</button></td>';
 output += '</tr>';
 output += '</table>';
 output += '</div>';
 output += '</div>';
		
 output += '<div id="center-equipment-action-selected-input-';
 output += country_id;
 output += '" class="center-equipment-action-selected-input">';

	 output += '<table>';
	 output += '<tr>';
		 output += '<td>';
               output += '<input id="country-value-';
			   output += country_id;
			   output += '" class="country-value-';
			   output += country_id;
			   output += ' country-value" type="text" name="reg_admin_group_code" placeholder="Enter country" value="';
			 output += country_name; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
		output += '<tr>';
		 output += '<td>';
               output += '<input id="country-name_code-value-';
			   output += country_id;
			   output += '" class="country-name_code-value-';
			   output += country_id;
			   output += ' country-name_code-value" type="text" name="reg_admin_group_code" placeholder="Enter name code" value="';
			 output += name_code; 
			   output += '" required>';
		output += '</td>';
		output += '</tr>';
			output += '<tr>';
		output += '<td>';
        output += '<button id="fundi-update-country-btn-';
		output += country_id;
		output += '" country_id="';
		output += country_id;
		output += '" total_fundi="';
		output += total_fundi;
		output += '" class="fundi-update-country-btn-';
		output += country_id;
		output += ' fundi-update-country-btn info">Update Country</button>';
		output += '</td>';
		output += '</tr>';
 output += '</table>';
		
		 output += '</div>';
		 output += '<div id="center-equipment-action-selected-sub-';
 output += country_id;
 output += '" class="center-equipment-action-selected-sub">';
 output += 'sub</div>';
    return output;
 }
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










