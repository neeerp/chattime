$(document).ready(function() {

	$("textarea").keydown(function(event) {
		if (event.keyCode == 13 && !event.shiftKey) {
			var message = $(this).val();
			if (message !== "") {		
				var client = $(this).parents(".left").length != 0 ? "left" : "right";
				$(".message-area").html(
					$(".message-area").html() + "<p class=\"" + client + "\">" + message + "</p>");
				$(".message-area").scrollTop($(".message-area").prop("scrollHeight")); /** Scroll messages to bottom **/
				$(".message-area").each( function() {orientTextBoxes(this)});
			}

			$(this).val(""); /** Clear the text area **/
			event.preventDefault();
			return false;

		}
	});

});

function orientTextBoxes(messageArea) {

	var messages = messageArea.children;
	

	if (messages.length > 1) {
		var currentSide = messages[messages.length - 1].classList.contains("left") ? "left" : "right";

		/** If at least two messages stacked, style them accordingly **/
		if (messages[messages.length -2].classList.contains(currentSide)) {

			if (messages[messages.length -2].classList.contains("bottom")) {
				messages[messages.length -2].classList.remove("bottom");
				messages[messages.length -2].classList.add("mid");
				messages[messages.length -1].classList.add("bottom");
			}

			else {
				messages[messages.length -2].classList.add("top");
				messages[messages.length -1].classList.add("bottom");
			}

		}

	}

}