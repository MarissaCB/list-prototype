$(document).ready(function() {
	
	/*$('#button').on('click', function() {
	 var value = $("#inputbox").val ()
	 */

	 $("#add_li").on("click", function() {
	 	var value = $("#inputBox").val();
	 	console.log(value);
		$("ol").append("<li>" + value + " <input type='checkbox' class='remove-box'></li>");
	 });

	 $("#remove_li").click(function () {
		$("ol").remove("<li></li>");
	 }); 
	
});