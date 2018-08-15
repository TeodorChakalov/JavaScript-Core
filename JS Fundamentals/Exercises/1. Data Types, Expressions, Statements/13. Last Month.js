function lastMonth(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];

    let lastDayPrevMonth = new Date(year, month - 1, 0).getDate();
    console.log(lastDayPrevMonth);
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);
