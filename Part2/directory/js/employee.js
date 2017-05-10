$(function () {
	"use strict";
	$(window).hashchange(function (e) {
	
		var idNumber = sessionStorage.getItem("idEmployee");
		$("#employee-details").empty();
		$.ajax({
			type: "get",
			url: "directory/data/json.js",

			dataType: "json",
			success: function (response) {
				
				$.each(response, function () {
					$.each(this, function (key, value) {
						if (idNumber === value.id.toString()) {
							$('#mainImage').html('<img src="' + value.imagePath + '">');
               				$('#nametitle').html('<h2>' + value.name + '</h2>' +
                			'<p>' + value.title + '</p>');
				
							$('#employee-details').append('<li>' + '<a href="#" id="' + value.reportsTo + '">' + '<h2> View Manager </h2>' + '</a>' + 
							'</li>' + '<li>' + '<a href="#reports" id="' + value.id + '">' +
							'<h2> View Direct Reports </h2>' + '</a>' + '</li>' + '<li>' + 
							'<a href="tel:' + value.officeNumber + '" data-role="button" rel=external">' + '<h2> Call Office </h2>' +'<p>' + value.officeNumber + '</p>' + '</a>' + '</li>' + '<li>' + '<a href="tel:' + value.cellNumber + '" data-role="button" rel=external">' +
                    		'<h2> Call Cell </h2>' + '<p>' + value.cellNumber + '</p>' +
                  			'</a>' + '</li>' + '<li>' + '<a href="mailto:' + value.email + '" data-role="button">' + '<h2> Email Me </h2>' + '<p>' + value.email + '</p>' + '</a>' + '</li>' );
							$("#employee-details").listview("refresh");
			
 
						}
					});
				});
			}
		});
	});
});