(function(){
	var expandedInfo = false;
	var expandedModal = false;

	function openCloseModal(){
		if (!expandedModal) {
			$(".background-overlay").fadeIn();
			$(".modal").fadeIn();
			expandedModal = true;
		} else {
			$(".background-overlay").fadeOut();
			$(".modal").fadeOut();
			expandedModal = false;
		}
	}

	function expandCollapseInfo(){
		if (!expandedInfo) {
			$(".description").slideDown();
			$(".bottom-navigation").removeClass("inactive");
			$(".bottom-navigation").addClass("dark-background");
			$("[auto-type]").addClass("terminal-font");
			expandedInfo = true;
		} else {
			$(".description").slideUp();
			$(".bottom-navigation").removeClass("dark-background");
			$("[auto-type]").removeClass("terminal-font");
			setTimeout(function(){
				$(".bottom-navigation").addClass("inactive");
			}, 1000);
			expandedInfo = false;
		}
	}

	$("#bottomNav").click(expandCollapseInfo);
	$("#info").click(openCloseModal);
	$("#close-button, #overlay, #close-icon").click(openCloseModal);
}());
