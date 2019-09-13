function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return [];
    } else if (d === 0) {
        let x = -b / (2 * a);
        return [x];
    } else {
        let x1 = (-b - Math.sqrt(d)) / (2 * a);
        let x2 = (-b + Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    }
}

console.log(getResult(2, 4, -3));

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log("Количество оценок больше пяти");
        marks = marks.slice(0, 5);
    }
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    return (total / marks.length);
}

console.log(getAverageMark([1, 3, null, 4, 5, 2, 2]));


function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        return (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
}

console.log(askDrink('Ольга', new Date(2014, 11, 19)));