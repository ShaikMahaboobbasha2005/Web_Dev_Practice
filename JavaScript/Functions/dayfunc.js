//accepting a number as a argument and returning the corresponding day of it

function returnDay(num) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (num < 1 || num > 7) {
        return null;
    }

    return days[num - 1];
}

// Examples
console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null