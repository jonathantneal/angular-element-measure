(function (ELEMENT, namespace) {
	function metrics() {
		var
		node = this[0],
		rect = node.getBoundingClientRect(),
		client = {
			height: node.clientHeight,
			width: node.clientWidth,
			x: Math.round(rect.left),
			y: Math.round(rect.top)
		},
		document = node.ownerDocument || node.document,
		window = document.defaultView || document.window;

		return {
			client: client,
			offset: {
				height: node.offsetHeight,
				width: node.offsetWidth,
				x: node.offsetLeft,
				y: node.offsetTop
			},
			page: {
				x: client.x + ('pageXOffset' in window ? window.pageXOffset : document.documentElement.scrollLeft),
				y: client.y + ('pageXOffset' in window ? window.pageYOffset : document.documentElement.scrollTop)
			},
			scroll: {
				height: node.scrollHeight,
				width: node.scrollWidth,
				x: node.scrollLeft,
				y: node.scrollTop
			}
		};
	}

	ELEMENT[namespace] = ELEMENT[namespace] || metrics;
})(angular.element.prototype, 'metrics');
