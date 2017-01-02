app.directive("lazyLoad", [function(){
	return {
		restrict: "A",
		scope: true,
		link: {
			pre: function(scope, elem, attrs) {
				elem.addClass("fade");
			},
			post: function(scope, elem, attrs){
				if (elem[0].tagName === "IMG") {
					var image = new Image();
					image.src = attrs.lazyLoad;
					image.onload = function(){
						scope.$apply(function(){
							attrs.$set("src", attrs.lazyLoad);
							elem.addClass("in");
						});
					}
				} else {
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
	}
}])
