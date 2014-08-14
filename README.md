# Angular Element Measure

**Angular Element Measure** is an [AngularJS](//angularjs.org) extension for [elements](https://docs.angularjs.org/api/ng/function/angular.element) that returns helpful sizing and coordinate details.

## Usage

To use **Angular Element Measure**, add the [script](angular-element-measure.js) to the head of your document.

```html
<head>
	<script src="angular-element-measure.js"></script>
</head>
```

That’s it. Now you can use the *measure* property on an element.

```js
function ($scope, element, attrs) {
	var measure = element.measure();

	// Inspect the width of the element.
	console.log(measure.width);

	// Inspect the distance from the top of the whole page to the element.
	console.log(measure.pageY);
}
```

## Measurements

- **width**: width of the element.
- **height**: height of the element.
- **x**: distance between the left of the element and its viewport.
- **y**: distance between the top of the element and its viewport.
- **pageX**: distance between the left of the element and its page.
- **pageY**: distance between the top of the element and its page.
- **scrollWidth**: width of the element including any hidden scrollable content.
- **scrollHeight**: height of the element including any hidden scrollable content.
- **scrollX**: distance from the left of the element’s scrollable area.
- **scrollY**: distance from the top of the element’s scrollable area.

## Demo

See a [measure demonstration](demo.html) that tracks the size and coordinates of an element on the page.

---

The [uncompressed script](angular-element-measure.js) is 1.3KB, and the [compressed script](angular-element-measure.min.js) is 374 bytes.
