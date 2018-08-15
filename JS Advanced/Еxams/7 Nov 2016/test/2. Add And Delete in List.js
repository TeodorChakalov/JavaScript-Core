let expect = require('chai').expect;
let list = require('../2. Add And Delete in List');

describe('Add and Delete in list tests', function () {
    it('should append correctly at the end of the list', function () {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.toString()).to.be.equal('1, two, 3');
    });
    it('should delete correctly at the start index', function () {
        expect(list.delete(0)).to.be.equal(1);
    });
    it('should delete correctly at the last index', function () {
        expect(list.delete(1)).to.be.equal(3);
    });
    it('should return undefined for string index', function () {
        expect(list.delete('asd')).to.be.equal(undefined);
    });
    it('should return undefined for negative index', function () {
        expect(list.delete(-5)).to.be.equal(undefined);
    });
    it('should return undefined for bigger index than the length of the array', function () {
        expect(list.delete(5)).to.be.equal(undefined);
    });
    it('should work correct with diffrent type of elements', function () {
        list.delete(0);
        list.add({});
        list.add(5);
        list.add([]);
        list.add('string');
        list.add((1.2));

        expect(list.toString()).to.be.equal('[object Object], 5, , string, 1.2');
        expect(list.delete(1)).to.be.equal(5);
        expect(list.delete(1)).to.be.eql([]);
        expect(list.delete(0)).to.be.eql({});
        expect(list.delete(0)).to.be.equal('string');
        expect(list.delete(0)).to.be.equal(1.2);
    });
});