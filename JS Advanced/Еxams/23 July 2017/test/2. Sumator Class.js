let expect = require('chai').expect;
let Sumator = require('../2. Sumator Class');

describe('Sumator tests', function () {
    let list;
    beforeEach(function () {
        list = new Sumator();
    });

    it('has functions attached to prototype', function () {
        expect(list.hasOwnProperty('add')).to.equal(false);
        // expect(Object.getPrototypeOf(list).hasOwnProperty('sumNums')).to.equal(true);
        // expect(Object.getPrototypeOf(list).hasOwnProperty('removeByFilter')).to.equal(true);
        // expect(Object.getPrototypeOf(list).hasOwnProperty('toString')).to.equal(true);
    });

    it('should have onw property data', function () {
        expect(list.hasOwnProperty('data')).to.be.equal(true);
    });

    it('firstly array to be empty', function () {
        expect(list.data.length).to.be.equal(0);
    });

    it('should add to array', function () {
        list.add(5);
        list.add('5');
        list.add([]);
        list.add({});
        expect(list.toString()).to.be.equal('5, 5, , [object Object]');
    });

    it('should return 0 if there are no numbers', function () {
        list.add('5');
        list.add([]);
        list.add({});
        expect(list.sumNums()).to.be.equal(0);
    });

    it('should return sum if there are numbers', function () {
        list.add(5);
        list.add(2);
        list.add(-4);
        expect(list.sumNums()).to.be.equal(3);
    });

    it('should remove the match by criteria', function () {
        list.add(5);
        list.add(2);
        list.add(-4);
        list.add('3');
        list.removeByFilter(x => x % 2 === 0);
        expect(list.toString()).to.be.equal('5, 3');
    });

    it('should return empty for empty array', function () {
        expect(list.toString()).to.be.equal('(empty)');
    });

    it('should return array join with ,', function () {
        list.add(5);
        list.add(2);
        list.add(-4);
        list.add('3');
        expect(list.toString()).to.be.equal('5, 2, -4, 3');
    });
});