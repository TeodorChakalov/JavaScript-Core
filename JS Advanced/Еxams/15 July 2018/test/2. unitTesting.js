let expect = require('chai').expect;
let Calculator = require('../2. unitTesting');

describe('Calculator tests', function () {

    let output;
    beforeEach(function () {
       output = new Calculator();
    });

    it('should ', function () {
        expect(output.hasOwnProperty('expenses')).to.be.equal(true);
    });


    it('should ', function () {
        expect(output.expenses.length).to.be.equal(0);
    });
    it('should ', function () {
        output.add(10);
        output.add("Pesho");
        output.add("5");
        expect(output.toString()).to.be.equal('10 -> Pesho -> 5');
    });

    it('should ', function () {
        output.add('sd');
        output.add("5");
        expect(() => output.divideNums()).throw(Error)
    });

    it('should ', function () {
        output.add(2);
        output.add(0);
        expect(output.divideNums()).to.be.equal('Cannot divide by zero');
    });


    it('should ', function () {
        output.add(0);
        expect(output.divideNums()).to.be.equal(0);
    });

    it('should ', function () {
        expect(output.toString()).to.be.equal('empty array');
    });

    it('should ', function () {
        expect(() => output.divideNums()).throw(Error)
    });

    it('should ', function () {
        output.add(10);
        output.add(5);
        output.add(15);

        expect(output.orderBy()).to.be.equal('5, 10, 15');
    });

    it('should ', function () {
        output.add(10);
        output.add('Pesho');
        output.add('2');

        expect(output.orderBy()).to.be.equal('10, 2, Pesho');
    });
});