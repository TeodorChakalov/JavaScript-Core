let expect = require('chai').expect;
let SubscriptionCard = require('../2. Subscription Card');

describe('SubscriptionCard tests', function () {
    describe('constructor tests', function () {
        it('should be initialized correctly', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
        });
    });
    describe("isBlocked tests", function () {
        it('should return true if the card is blocked', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        });
        it('should return false if the card is blocked and after that unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            expect(card.isBlocked).to.be.equal(false);
        });
    });
    describe("addSubscription tests", function () {
        // it('add correctly subscription', function () {
        //     const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        //     expect(card._subscriptions.length).to.be.equal(0);
        //     expect(card._subscriptions[0]).to.be.undefined;
        //     expect(card._subscriptions).to.be.eql([]);
        // });
        it('add correctly subscription', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1);
            expect(card._subscriptions[0].line).to.be.equal('120');
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
        });
        // it('add correctly subscription', function () {
        //     const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        //     card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        //     card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        //     expect(card._subscriptions.length).to.be.equal(2);
        //     expect(card._subscriptions[0].line).to.be.equal('120');
        //     expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
        //     expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
        //     expect(card._subscriptions[1].line).to.be.equal('*');
        //     expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'));
        //     expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'));
        // });
    });
    describe("isValid tests", function () {
        it('one day before', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-21'))).to.be.equal(false);
        });
        it('one day after', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-22'))).to.be.equal(false);
        });
        it('one start date', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true);
        });
        it('one end date', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.equal(true);
        });
        it('card blocked', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isValid('120', new Date('2018-04-24'))).to.be.equal(false);
        });

        it("Should not change", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName = "Test";
            card.lastName = "Test";
            card.SSN = "Test";
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName ).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
        })
    });
});