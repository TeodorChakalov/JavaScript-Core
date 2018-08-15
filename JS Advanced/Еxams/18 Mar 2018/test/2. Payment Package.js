let expect = require('chai').expect;
let PaymentPackage = require('../2. Payment Package');

describe('PaymentPackage tests', function () {
    let package;
    beforeEach(function () {
       package = new PaymentPackage("Test fee", 2000);
    });

    it('check', function () {
        expect(package.hasOwnProperty('name')).to.be.equal(false);
    });
    it('check', function () {
        expect(package.hasOwnProperty('value')).to.be.equal(false);
    });
    it('check', function () {
        expect(package.hasOwnProperty('VAT')).to.be.equal(false);
    });
    it('check', function () {
        expect(package.hasOwnProperty('active')).to.be.equal(false);
    });

    it("should throw a new error for an empty string", () => {
        expect(() => new PaymentPackage(4, 2202)).throw(Error)
    });

    it("should throw a new error for an empty string", () => {
        expect(() => new PaymentPackage("", 2202)).throw(Error)
    });

    it("should throw a new error for different from number", () => {
        expect(() => new PaymentPackage(4, -5)).throw(Error)
    });

    it("should throw a new error for different from number", () => {
        expect(() => new PaymentPackage(4, '5')).throw(Error)
    });

    it("'VAT must be a non-negative number", () => {
        expect(() => package.VAT('5')).throw(Error)
    });

    it("'VAT must be a non-negative number", () => {
        expect(() => package.VAT(-5)).throw(Error)
    });

    it("'VAT must be a non-negative number", () => {
        expect(() => package.active('6')).throw(Error)
    });

    it('should return the correct name from the getter', () => {
        package = new PaymentPackage("kim-chen-un", 1500);
        expect(package.name).to.be.equal("kim-chen-un")
    });

    it('should get the value from the getter', () => {
        package = new PaymentPackage("Service", 0);
        expect(package.value).to.be.equal(0);
    });

    it('should return the default value of VAT', () => {
        expect(package.VAT).to.be.equal(20)
    });

    it('should return the default value of active', () => {
        expect(package.active).to.be.equal(true);
    });

    it('should print the final result', () => {
        expect(package.toString()).to.be.equal('Package: Test fee\n- Value (excl. VAT): 2000\n- Value (VAT 20%): 2400');
    });

    it('should print the final result with non active package', () => {
        package.active = false;
        expect(package.toString()).to.be.equal('Package: Test fee' + " (inactive)" + "\n" + '- Value (excl. VAT): 2000' + "\n" + '- Value (VAT 20%): 2400');
    });
});
