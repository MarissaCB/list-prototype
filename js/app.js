$(document).ready(function() {
	
	/*$('#button').on('click', function() {
	 var value = $("#inputbox").val ()
	 */
	 $("#add_li").click(function () {
		$("ol").append("<li></li>");
	 });

	 $("#remove_li").click(function () {
		$("ol").remove("<li></li>");
	 }); 
	
});