(function (window) {
    'use strict';

    /**
     * Load images asynchronously.
     * @returns {NodeList}
     */
    function asyncImg() {

        var imgs = window.document.querySelectorAll('[data-async]'),
            len = imgs.length,
            img;

        while (len) {
            img = imgs[len -= 1];
            img.src = img.getAttribute('data-async');
            img.removeAttribute('data-async');
        }

        return imgs;
    }

    /**
     * Preload the given array of images.
     * @param {array} imgs - The given array of urls.
     */
    asyncImg.preload = function (imgs) {
        var len = imgs.length;

        while (len) {
            new window.Image().src = imgs[len -= 1];
        }
    };

    /**
     * Expose Shuffle
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('asyncImg', [], function () {
            return asyncImg;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = asyncImg;

    // Default
    } else {
        window.asyncImg = asyncImg;
    }

}(this));