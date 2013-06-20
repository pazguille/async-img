/**
 * Load images asynchronously.
 * @returns {NodeList}
 */
module = module.exports = function () {

    var imgs = document.querySelectorAll('[data-async]'),
        len = imgs.length,
        img;

    while (len) {
        img = imgs[len-=1];
        img.src = img.getAttribute('data-async');
        img.removeAttribute('data-async');
    }

    return imgs;
};

/**
 * Preload the given array of images.
 * @param {array} imgs - The given array of urls.
 */
module.preload = function (imgs) {
    var len = imgs.length;

    while (len) {
        new Image().src = imgs[len-=1];
    }
};