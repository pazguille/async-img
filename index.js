/**
 * Load images asynchronously.
 * @param {NodeList} [imgs] - The given NodeList of images.
 * @returns {NodeList}
 */
module = module.exports = function (imgs) {

    imgs = imgs || window.document.querySelectorAll('[data-async]');

    var i = 0,
        len = imgs.length,
        img;

    for (; i < len; i += 1) {
        img = imgs[i];
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
        new Image().src = imgs[len -= 1];
    }
};