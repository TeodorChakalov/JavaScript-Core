function monthlyCalendar(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];

    month--; // months in Date() are [0...11], not [1...12]
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
        daysInMonth[1] = 29; // leap year

    // Print the calendar table header
    let result = '<table>\n';
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    // Print the days of the previous month
    let week = 0;
    let date = new Date(year, month, 1);
    console.log(date);
    let dayOfWeek = date.getDay();
    console.log(dayOfWeek);
    let firstDayPrevMonth = daysInMonth[(month-1 + 12) % 12]-dayOfWeek;
    console.log(firstDayPrevMonth);
    if (dayOfWeek > 0)
        result += '  <tr>';
    for (let i=1; i<=dayOfWeek; i++) {
        result += '<td class="prev-month">' + (firstDayPrevMonth + i) + '</td>';
        week++;
    }

    // Print the days of the current month
    let monthDaysCount = daysInMonth[month];
    for (let i=1; i<=monthDaysCount; i++) {
        if (week === 0)
            result += '  <tr>';
        if (day === i)
            result += '<td class="today">' + i + '</td>';
        else
            result += '<td>' + i + '</td>';
        week++;
        if (week === 7) {
            result += '</tr>\n';
            week=0;
        }
    }

    // Print the days of the next month
    for (let i=1; week!==0; i++) {
        result += '<td class="next-month">' + i + '</td>';
        week++;
        if (week === 7) {
            result += '</tr>\n';
            week = 0;
        }
    }

    result += '</table>';
    return result;
}

monthlyCalendar([24, 12, 2012]);