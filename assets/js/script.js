(function(){
	setTimeout(function(){
		$("#bottomNav").removeClass("initial-scale");
	}, 2000);

	var expandedInfo = false;

	function expandCollapseInfo(){
		if (!expandedInfo) {
			$(".description").slideDown();
			expandedInfo = true;
		} else {
			$(".description").slideUp();
			expandedInfo = false;
		}
	}

	$("#bottomNav").click(expandCollapseInfo);
}());
