# Angular Element Metrics

**Angular Element Metrics** is an [AngularJS](//angularjs.org) extension for [elements](https://docs.angularjs.org/api/ng/function/angular.element) that returns helpful size and coordinate details.

## Usage

To use **Angular Element Metrics**, add the [script](angular-element-metrics.js) to the head of your document.

```html
<head>
	<script src="angular-element-metrics.js"></script>
</head>
```

That’s it. Use the *metrics* property on an element.

```js
function ($scope, element, attrs) {
	var metrics = element.metrics();

	// Inspect the x,y coordinates of the element relative to the client (window).
	console.log(element.client);

	// Inspect the x,y coordinates of the element relative to the page (document).
	console.log(element.page);
}
```

## Metrics

- **client.width**: visible width of the element in pixels.
- **client.height**: visible height of the element in pixels.
- **client.x**: distance from the left of the element to the visible window in pixels.
- **client.y**: distance from the top of the element to the visible window in pixels.
- **offset.width**: visible width of the element in pixels, including borders or scrollbars.
- **offset.height**: visible width of the element in pixels, including borders or scrollbars.
- **offset.x**: distance from the left of the element to its closest positioned container in pixels.
- **offset.y**: distance from the top of the element to its closest positioned container in pixels.
- **scroll.width**: width of the element in pixels, including any hidden scrollable content.
- **scroll.height**: height of the element in pixels, including any hidden scrollable content.
- **scroll.x**: left position of the element’s scrollable area.
- **scroll.y**: top position of the element’s scrollable area.area.

![Image describing the CSS Box Model](http://i.stack.imgur.com/5AAyW.png)

## Demo

See a [metrics demonstration](demo.html) that tracks the size and coordinates of an element on the page.

---

The [uncompressed script](angular-element-metrics.js) is 959 bytes, and the [compressed script](angular-element-metrics.min.js) is 318 bytes.
