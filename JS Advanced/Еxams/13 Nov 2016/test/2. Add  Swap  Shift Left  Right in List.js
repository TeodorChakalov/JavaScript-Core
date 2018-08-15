let expect = require('chai').expect;
let createList = require('../2. Add  Swap  Shift Left  Right in List');

describe('createList tests', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('add', function () {
        it('should appends to the end with any types', function () {
            list.add('Pesho');
            list.add(5);
            list.add({Gosho: 5});
            expect(list.toString()).to.be.equal('Pesho, 5, [object Object]');
        });
    });

    describe('shiftLeft', function () {
        it('should shift left', function () {
            list.add('Pesho');
            list.add(5);
            list.add('Three');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('5, Three, Pesho');
        });
    });

    describe('shiftRight', function () {
        it('should shift right', function () {
            list.add('Pesho');
            list.add(5);
            list.add('Three');
            list.shiftRight();
            expect(list.toString()).to.be.equal('Three, Pesho, 5');
        });
    });

    describe('swap', function () {
        it('should return false with negative first index', function () {
            list.add(5);
            list.add('one');
            expect(list.swap(-5, 1)).to.be.equal(false);
        });

        it('should return false with non integer first index', function () {
            list.add('Pesho');
            list.add(5);
            expect(list.swap('non integer', 1)).to.be.equal(false);
        });

        it('with first index equal to number of elements, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(3, 2)).to.equal(false);
        });

        it('with a negative second index, should return false', function () {
            list.add('one');
            list.add(2);
            expect(list.swap(0, -1)).to.equal(false);
        });

        it('with a non integer second index, should return false', function () {
            list.add('one');
            list.add('two');
            expect(list.swap(0, 'stamat')).to.equal(false);
        });

        it('with second index equal to number of elements, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(0, 3)).to.equal(false);
        });

        it('with equal indexes, should return false', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(1, 1)).to.equal(false);
        });

        it('with zero first index, should return true', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(0, 1)).to.equal(true)
        });

        it('with zero second indexes, should return true', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(2, 0)).to.equal(true);
        });

        it('with zero first index, should swap the values', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(0, 2);
            expect(list.toString()).to.equal("three, two, one");
        });
    });
});