(function(){
	var expandedInfo = false;

	function expandCollapseInfo(){
		if (!expandedInfo) {
			$(".description").slideDown();
			$(".bottom-navigation").removeClass("inactive");
			$(".bottom-navigation").addClass("dark-background");
			expandedInfo = true;
		} else {
			$(".description").slideUp();
			$(".bottom-navigation").removeClass("dark-background");
			setTimeout(function(){
				$(".bottom-navigation").addClass("inactive");
			}, 1000);
			expandedInfo = false;
		}
	}

	$("#bottomNav").click(expandCollapseInfo);
}());
