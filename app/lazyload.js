app.directive("lazyLoad", [function(){
	return {
		restrict: "A",
		scope: true,
		link: {
			pre: function(scope, elem, attrs) {
				elem.addClass("fade");
			},
			post: function(scope, elem, attrs){
				var background = "url('" + attrs.lazyLoad + "')";
				var image = new Image();
				image.src = attrs.lazyLoad;
				image.onload = function(){
					scope.$apply(function(){
						elem.css({
							"background": background,
							"background-size": "contain",
							"background-repeat": "no-repeat",
							"background-position": "center"
						});
						elem.addClass("in");
					})
				}
			}
		}
	}
}])
