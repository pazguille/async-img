(function (window) {
    var lib = require('bestander-jasmine');
    for (var key in lib) {
        if (lib.hasOwnProperty(key)) {
            window[key] = lib[key];
        }
    }
}(window));

var asyncImg = require('async-img'),
    img = document.querySelector('img'),
    loadEvent = jasmine.createSpy('loadEvent');

describe('asyncImg', function () {

    it('should be defined', function () {
        expect(asyncImg).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof asyncImg).toEqual('function');
    });
});

describe('asyncImg', function () {

    it('shouldn\'t have "src" attibute', function () {
        expect(img.src).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
    });

    it('should set "src" attibute', function () {
        var src = img.getAttribute('data-async');

        asyncImg(img);
        expect(img.src).toEqual(src);
    });

    it('should remove "data-async" attibute', function () {
        expect(img.getAttribute('data-async')).toBe(null);
    });

    it('should load the image', function () {
        img.onload = function () {
            loadEvent();
            expect(loadEvent).toHaveBeenCalled();
        };

        waitsFor(function() {
            return loadEvent.callCount > 0;
        });
    });
});