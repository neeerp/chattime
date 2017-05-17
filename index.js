$(document).ready(function() {

	// Send text message
	$("textarea").keydown(function(event) {
		if (event.keyCode == 13 && !event.shiftKey) {
			var message = $(this).val();
			if (message !== "") {		
				var side = $(this).parents(".left").length != 0 ? "left" : "right";
				createMessage(side, message);
			}
			$(this).val(""); // Clear the text area 
			event.preventDefault(); // Stop browser from adding new line automatically 
		}
	});

	// Send image
	$(".file-input").change( function(event) {
		var path = URL.createObjectURL(event.target.files[0]);
		var side = $(this).parents(".left").length != 0 ? "left" : "right";
		createMessage(side, "<img src=\"" + path + "\" />");
	});

	// File-upload
	$(".file-up").click(function () {
		if ($(this).index() == 1) { // Whichever monkey designed this thinks indices start at 1! 
			$(".file-input")[0].click();
		} else {
			$(".file-input")[1].click();
		}
	});

});


/** 
 *  Given a message area with at least two messages, styles the two most recent messages
 *  if they are both from the same sender.
 */
function orientTextBoxes(messageArea) {
	var messages = messageArea.children;
	if (messages.length > 1) {
		var currentSide = messages[messages.length - 1].classList.contains("left") ? "left" : "right";
		var prevMessage = messages[messages.length - 2];
		var curMessage = messages[messages.length - 1];

		// If at least two messages stacked, style them accordingly
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


/**
 * Creates a message in the message area, scrolls the screen, and orients the message boxes.
 */
function createMessage(side, contents) {
	$(".message-area").html($(".message-area").html() + "<p class=\"" + side + "\">" + contents + "</p>");
	$(".message-area").scrollTop($(".message-area").prop("scrollHeight"));
	$(".message-area").each( function() {orientTextBoxes(this)});
}