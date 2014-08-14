(function (ELEMENT, namespace) {
	function measure() {
		var
		node = this[0],
		rect = node.getBoundingClientRect && node.getBoundingClientRect(),
		roundX = rect ? Math.round(rect.left) : 0,
		roundY = rect ? Math.round(rect.top) : 0,
		document = node.ownerDocument || node.document,
		documentElement = document.documentElement,
		window = document.defaultView || document.window,
		isWindow = node === document || node === window,
		windowOffset = 'pageXOffset' in window ? [window.pageXOffset, window.pageYOffset] : [documentElement.scrollLeft, documentElement.scrollTop],
		windowInner = 'innerWidth' in window ? [window.innerWidth, window.innerHeight] : [documentElement.clientWidth, documentElement.clientHeight];

		return {
			width: isWindow ? windowInner[0] : node.offsetWidth,
			height: isWindow ? windowInner[1] : node.offsetHeight,
			x: roundX,
			y: roundY,

			pageX: isWindow ? 0 : roundX + windowOffset[0],
			pageY: isWindow ? 0 : roundY + windowOffset[1],

			scrollHeight: isWindow ? documentElement.scrollHeight : node.scrollHeight,
			scrollWidth: isWindow ? documentElement.scrollWidth : node.scrollWidth,
			scrollX: isWindow ? windowOffset[0] : node.scrollLeft,
			scrollY: isWindow ? windowOffset[1] : node.scrollTop
		};
	}

	ELEMENT[namespace] = ELEMENT[namespace] || measure;
})(angular.element.prototype, 'measure');
