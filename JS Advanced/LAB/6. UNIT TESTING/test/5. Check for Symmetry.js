let expect = require('chai').expect;
let isSymmetric = require('../5. Check for Symmetry');

describe('Check is an array is symmetric', function () {
    describe('True tests', function () {
        it('should return true for [1,2,3,3,2,1]', function () {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true);
        });
        it('should return true for [1]', function () {
            expect(isSymmetric([1])).to.be.equal(true);
        });
        it('should return true for [1,"s",{},"s",1]', function () {
            expect(isSymmetric([1,"s",{},"s",1])).to.be.equal(true);
        });
    });
    describe("All false values", function () {
        it('should return false from ["1",2,3,"2",1]', function () {
            expect(isSymmetric(["1", 2, 3, "2", 1])).to.be.equal(false);
        });
        it('should return false from "England will win the World Cup 2018!"', function () {
            expect(isSymmetric("England will win the World Cup 2018!")).to.be.equal(false);
        });
        it('should return false from [-1,2,3,2,1]', function () {
            expect(isSymmetric([-1,2,3,2,1])).to.be.equal(false);
        });
    });
});