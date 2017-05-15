$(document).ready(function() {

	$("textarea").keydown(function(event) {
		if (event.keyCode == 13 && !event.shiftKey) {

			var client = $(this).parents(".left").length != 0 ? "left" : "right";
			var message = $(this).val();
			$(".message-area").html($(".message-area").html() + "<p class=\"" + client + "\">" + message + "</p>");


			$(this).val(""); /** Clear the text area **/
			event.preventDefault();
			return false;

		}
	});

});
