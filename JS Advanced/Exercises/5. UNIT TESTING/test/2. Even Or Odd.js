let expect = require('chai').expect;
let isOddOrEven = require('../2. Even Or Odd');

describe('isOddOrEven', function () {
    it('should return undefined for number', function () {
        expect(isOddOrEven(5)).to.be.equal(undefined);
    });
    it('should return undefined for object', function () {
        expect(isOddOrEven({a: 'Pesho'})).to.be.equal(undefined);
    });
    it('should return undefined for array', function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
    it('should return even for "even"', function () {
        expect(isOddOrEven('even')).to.be.equal('even');
    });
    it('should return even for "odd"', function () {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });
});