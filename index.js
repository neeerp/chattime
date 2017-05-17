$(document).ready(function() {

	$("textarea").keydown(function(event) {
		if (event.keyCode == 13 && !event.shiftKey) {
			var message = $(this).val();
			if (message !== "") {		
				var client = $(this).parents(".left").length != 0 ? "left" : "right";
				$(".message-area").html($(".message-area").html() + "<p class=\"" + client + "\">" + message + "</p>");
				$(".message-area").scrollTop($(".message-area").prop("scrollHeight")); /** Scroll messages to bottom **/
				$(".message-area").each( function() {orientTextBoxes(this)});
			}
			$(this).val(""); /* Clear the text area */
			event.preventDefault(); /* Stop browser from adding new line automatically */
		}
	});

	$(".file-up").click(function () {
		if ($(this).index() == 0) {
			$(".file-input")[0].click();
		} else {
			$(".file-input")[1].click();
		}
	});

});


function orientTextBoxes(messageArea) {
	/** 
	*   Given a message area with at least two messages, styles the two most recent messages
	*   if they are both from the same sender.
	*/

	var messages = messageArea.children;
	if (messages.length > 1) {
		var currentSide = messages[messages.length - 1].classList.contains("left") ? "left" : "right";
		var prevMessage = messages[messages.length - 2];
		var curMessage = messages[messages.length - 1];

		/* If at least two messages stacked, style them accordingly */
		if (prevMessage.classList.contains(currentSide)) {

			if (prevMessage.classList.contains("bottom")) {
				prevMessage.classList.remove("bottom");
				prevMessage.classList.add("mid");
				curMessage.classList.add("bottom");
			} else {
				prevMessage.classList.add("top");
				curMessage.classList.add("bottom");
			}

		}

	}

}