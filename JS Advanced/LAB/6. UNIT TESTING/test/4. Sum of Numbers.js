let expect = require('chai').expect;
let sum = require('../4. Sum of Numbers');

describe('sum(arr)', function () {
    it('Should return 3 for [1,2]', function () {
    expect(sum([1,2])).to.be.equal(3);
    });
    it('Should return 1 for [1]', function () {
        expect(sum([1])).to.be.equal(1);
    });
    it('Should return 0 for []', function () {
        expect(sum([])).to.be.equal(0);
    });
    it('Should return NaN for string', function () {
        expect(sum('string')).to.be.NaN;
    });
    it('Should return 2 for [1, -1, 2]', function () {
        expect(sum([1, -1, 2])).to.be.equal(2);
    });
});