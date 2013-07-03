# async-img

Asynchronous Image Loader.

Yes, I know there are a lot of libraries, modules or plugins to load images asynchronously. But, most of them have been built with jQuery as dependency. I really love jQuery, but I think there are a lot of things we can do without jQuery.

This is the reason why I built this using [Vanilla JS](http://vanilla-js.com) :)

## Installation

    $ component install pazguille/async-img

See: [https://github.com/component/component](https://github.com/component/component)

### Standalone
Also, you can use the standalone version:
```html
<script src="standalone/async-img.js"></script>
```

## How-to

First, you should use the following HTML code on your images:
```html
<img data-async="http://images5.fanpop.com/image/photos/24900000/kanzeon-cats-24910376-800-600.jpg"
     src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
     width="400"
     height="300">
```
- `data-async` - URL of the image.
- `src` - Temporary URL of the image (optional).
- `width` - Set the width of the image (recommended).
- `height` - Set the height of the image (recommended).

Then, require the `async-img` component (avoid this step if you use the standalone version):
```js
var asyncImg = require('async-img');
```

Now, you can start to load your images asynchronously!

```js
// Onload
window.onload = function () {
    asyncImg();
};
```

### Progressive Enhancement
If you are a front-end developer you must know about [Progressive enhancement](http://alistapart.com/article/understandingprogressiveenhancement).
Progressive enhancement focuses on the content. Images are content, and the content must be showed without JavaScript and images too.

The `.no-js` class should be removed by JavaScript, so you can display/hide things using CSS if JavaScript is disabled.

```css
.no-js [data-async] {
    display: none;
}
```

To show images when JavaScript is not enabled you should include the images inside `<noscript>` tag.
```html
<img data-async="image.jpg"
     src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
     width="400"
     height="300">
<noscript>
    <img src="image.jpg" width="400" height="300">
</noscript>
```

## API
### asyncImg([imgs])
Load images asynchronously.
- `imgs` {NodeList} [optional] - A NodeList of images. By default, its value is the result of `querySelectorAll('[data-async]')` CSS selector.

```js
asyncImg();
```

### asyncImg.preload(imgs)
Preload the given array of images.
- `imgs` {array} - The given array.

```js
asyncImg.preload([
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
]);
```

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille) Licensed under the MIT license.
