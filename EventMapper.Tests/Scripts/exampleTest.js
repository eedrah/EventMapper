/// <reference path="~/Scripts/jasmine.js" />
/// <reference path="../../eventmapper/scripts" />
/// <reference path="jasmine.js" />

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
        expect(mc).not.toBeNull();
    });
});



describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", function () {
    var a;

    it("and so is a spec", function () {
        a = true;

        expect(a).toBe(true);
    });
});

