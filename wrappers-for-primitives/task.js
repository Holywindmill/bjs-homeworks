function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let months = monthDiff(new Date(), new Date(date));
    let result = 0;
    let monthlyRate = percent / 100 / 12;
    let amountToPay = amount - contribution;
    let payment = amountToPay * (monthlyRate + monthlyRate / ((Math.pow(1 + monthlyRate, months)) - 1));
    return (payment * months).toFixed(2);
}

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}


console.log(calculateTotalMortgage(10, 0, 50000, new Date(2020,9,24)));
console.log(calculateTotalMortgage(10, 1000, 50000, new Date(2020,9,24)));
console.log(calculateTotalMortgage(10, 0, 20000, new Date(2021,9,24)));
console.log(calculateTotalMortgage(10, 1000, 20000, new Date(2021,9,24)));
console.log(calculateTotalMortgage(10, 20000, 20000, new Date(2021,9,24)));
console.log(calculateTotalMortgage(10, 0, 10000, new Date(2022,9,24)));
console.log(calculateTotalMortgage(15, 0, 10000, new Date(2022,9,24)));



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === null || name === undefined || name === '') {
        name = 'Аноним'
    }
    return `Привет, мир! Меня зовут ${name}.`;
}

console.log(getGreeting('Иван'));
console.log(getGreeting('Анастасия'));
console.log(getGreeting('Петр'));
console.log(getGreeting(null));
console.log(getGreeting(undefined));
console.log(getGreeting(''));