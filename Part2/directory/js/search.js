$(document).on("pagecreate", "#home", function () {
	"use strict";
	$("input").on("mouseover", function () {
		$("#intro").hide();
	});
	
	$('body').on("click", "a", function (e) {
		sessionStorage.setItem("idEmployee", e.currentTarget.id);
	});
	
	$.ajax({
		type: "get",
		url: "directory/data/json.js",

		dataType: "json",
		success: function (response) {
    
			$.getJSON('directory/data/json.js', function (data) {
				$.each(data, function () {
					$.each(this, function (key, value) {
						$("#results").append('<li>' + '<a href="#displaypage" id="' + value.id + '">' + '<img src="' + value.imagePath + '">' + '<br>' + '<h2>' + value.name + '</h2>' + '<p>' + value.title + '</p>' + '</a>' + '</li>');
						$("#results").listview("refresh");
					
					});
				});
		
			});
		}
	
	});

});
	
	 
	
	 