//1.
function getSolutions(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return {D:d};
    }
    else if (d === 0) {
        let x1 = -b / (2 * a);
        return {roots: [x1], D: d}
    }
    else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return {roots: [x1, x2], D:d}
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    else if(result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    }
    else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

showSolutionsMessage(7, 20, -3)
//2.
function getAverageScore(data) {
    let averages = [];
    let result = {};
    for (let prop in data) {
        let value = data[prop];
        let average = averageSubjectScore(value);
        result[prop] = average;
        averages.push(average);
    }

    let averageScore = averageSubjectScore(averages);
    result.average = averageScore;

    return result
}


function averageSubjectScore(scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    let averageScore = totalScore / scores.length;
    return averageScore;
}


console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4]}))
//3.
function getPersonData(secretData) {
    let result = {};
    for (let prop in secretData) {
        let value = secretData[prop]
        result[getProp(prop)] = getValue(value)
    }
    return result;
}

function getProp(prop) {
    if(prop === 'aaa') {
        return 'firstName'
    }
    else {
        return 'lastName'
    }
}

function getValue(value) {
    if(value === 0) {
        return 'Родриго'
    }
    else {
        return 'Эмильо'
    }
}

console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));