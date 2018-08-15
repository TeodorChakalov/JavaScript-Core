function tickets(array, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of array) {
        let splittedArr = line.split('|');
        let destination = splittedArr[0];
        let price = Number(splittedArr[1]);
        let status = splittedArr[2];

        let currentTicket = new Ticket(destination, price, status);
        result.push(currentTicket);
    }

    return result.sort((a, b) => sortedByCriteria(a,b));
    
    function sortedByCriteria(a, b) {
        let first = a[criteria];
        let second = b[criteria];
        if(criteria !== 'price'){
            return first.localeCompare(second);
        }
        return first - second;
    }
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

