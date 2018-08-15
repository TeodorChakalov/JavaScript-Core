let expect = require('chai').expect;
let createCalculator = require('../7. Add and Subtract');

describe('createCalculator', function () {

    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return sum for 2 and 5', function () {
        calc.add(2);
        calc.add(5);
        expect(calc.get()).to.be.equal(7);
    });
    it('should return -3 for add 2 and subtract 5', function () {
        calc.add(2);
        calc.subtract(5);
        expect(calc.get()).to.be.equal(-3);
    });
    it('should return 3 for subtract 2 and add 5', function () {
        calc.subtract(2);
        calc.add(5);
        expect(calc.get()).to.be.equal(3);
    });
    it('should return 3 for subtract "2" and add "5"', function () {
        calc.subtract('2');
        calc.add('5');
        expect(calc.get()).to.be.equal(3);
    });
    it('should return NaN for add asd', function () {
        calc.add('asd');
        expect(calc.get()).to.be.NaN;
    });
    it('should return NaN for subtract asd', function () {
        calc.subtract('asd');
        expect(calc.get()).to.be.NaN;
    });
});