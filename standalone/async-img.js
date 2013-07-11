(function (window) {
    'use strict';

    /**
     * Load images asynchronously.
     * @param {NodeList} [imgs] -  A NodeList of images. By default, its value is the result of `querySelectorAll('[data-async]'
     * @returns {NodeList}
     */
    function asyncImg(imgs) {

        imgs = imgs || window.document.querySelectorAll('[data-async]');

        if (imgs.length === undefined) {
            imgs = [imgs];
        }

        var i = 0,
            len = imgs.length,
            img;

        for (i; i < len; i += 1) {
            img = imgs[i];
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