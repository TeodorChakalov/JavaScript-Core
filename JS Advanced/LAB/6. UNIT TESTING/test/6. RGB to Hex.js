let expect = require('chai').expect;
let rgbToHexColor = require('../6. RGB to Hex');

describe('rgbToHexColor', function () {
    describe('Typical cases', function () {
        it('should return #DFF37B for (223, 243, 123)', function () {
            expect(rgbToHexColor(223, 243, 123)).to.be.equal('#DFF37B');
        });
        it('should return #000000 for (0, 0, 0)', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });
        it('should return #FFFFFF for (255, 255, 255)', function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });
    });
    describe('Invalid cases', function () {
        it('should return undefined for (256, 243, 123)', function () {
            expect(rgbToHexColor(256, 243, 123)).to.be.equal(undefined);
        });
        it('should return undefined for (255, 243, -1)', function () {
            expect(rgbToHexColor(255, 243, -1)).to.be.equal(undefined);
        });
        it('should return undefined for (243.2, 223.3, 4.4)', function () {
            expect(rgbToHexColor(243.2, 223.3, 4.4)).to.be.equal(undefined);
        });
    });
});