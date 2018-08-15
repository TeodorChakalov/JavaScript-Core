let expect = require('chai').expect;
let makeList = require('../2. Add Left  Right  Clear in List');

describe('makeList tests', function () {
    let list;
    beforeEach(function () {
       list = makeList();
    });

    it('should add on the left', function () {
        list.addLeft(0);
        list.addLeft('two');
        expect(list.toString()).to.be.equal('two, 0');
    });

    it('should add on the right', function () {
        list.addRight(1);
        list.addRight("two");
        expect(list.toString()).to.be.equal('1, two');
    });

    it('should clear the array', function () {
        list.addLeft(0);
        list.addRight('asd');
        list.clear();
        expect(list.toString()).to.be.equal('');
    });
});