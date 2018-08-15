let expect = require('chai').expect;
let lookupChar = require('../3. Char Lookup');

describe('lookupChar', function () {
    it('should return undefined for number and number', function () {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
    });
    it('should return undefined for string and string', function () {
        expect(lookupChar('five', 'five')).to.be.equal(undefined);
    });
    it('Should return undefined index must be number', function () {
        expect(lookupChar('asd', 3.21)).to.be.equal(undefined);
    });
    it('should return Incorrect index for string and number', function () {
        expect(lookupChar('123', 4)).to.be.equal('Incorrect index');
    });
    it('should return Incorrect index for string and number', function () {
        expect(lookupChar('123', -1)).to.be.equal('Incorrect index');
    });
    it('should return 2 for "123" and 1', function () {
        expect(lookupChar('123', 1)).to.be.equal('2');
    });
});