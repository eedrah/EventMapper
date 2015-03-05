/// <reference path="~/Scripts/jasmine.js" />
/// <reference path="~/../EventMapper/Scripts/app/MapController.js" />

describe("Jasmine works", function () {
    //var restService = null;
    //beforeEach(function () {
    //    restService = 5;
    //});
    //afterEach(function () {
    //    restService = null;
    //});
    it("can run a test", function () {
        expect(4).toBe(4);
    });
});

describe("MapController", function() {
    it('can create a mapController', function() {
        var mc = new MapController();
        expect(mc).not().toBeNull();
    });
});