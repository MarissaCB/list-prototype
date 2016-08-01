$(document).ready(function() {

	 $("#add_li").on("click", function() {
	 	var value = $("#inputBox").val();
	 	console.log(value);
		$("ol").append("<li>" + value + " <input type='checkbox' class='remove-box'></li>");
	 });

	 $("ol").on("click", "li", function() {
		$(this).remove();
	});

 });
	/*
		$('input[type="checkbox"]:checked').each(function() {
		if (jQuery(this).is(':checked')) {
          	alert(jQuery(this).val());

          }*/


