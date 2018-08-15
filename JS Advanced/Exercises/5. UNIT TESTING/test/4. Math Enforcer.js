let expect = require('chai').expect;
let mathEnforcer = require('../4. Math Enforcer');

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined for "5"', function () {
            expect(mathEnforcer.addFive('5')).to.be.equal(undefined);
        });
        it('should return 9 for 4', function () {
            expect(mathEnforcer.addFive(4)).to.be.equal(9);
        });
        it('should return 0 for -5', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('should return undefined for 5.12', function () {
            expect(mathEnforcer.addFive(5.12)).to.be.closeTo(10.12, 0.01);
        });
    });
    describe('subtractTen', function () {
        it('should return undefined for "5"', function () {
            expect(mathEnforcer.subtractTen('5')).to.be.equal(undefined);
        });
        it('should return 0 for 10', function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return 15 for 5', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('should return -6.9 for -3', function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
    });
    describe('sum', function () {
        it('should return undefined for "5" and 5', function () {
            expect(mathEnforcer.sum('5', 5)).to.be.equal(undefined);
        });
        it('should return undefined for 5 and "5"', function () {
            expect(mathEnforcer.sum(5, '5')).to.be.equal(undefined);
        });
        it('should return sum for 5 and 5', function () {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
        it('should return sum for 5.1 and 5.1', function () {
            expect(mathEnforcer.sum(5.1, 5.2)).to.be.closeTo(10.3, 0.1);
        });
    });
});