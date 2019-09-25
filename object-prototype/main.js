function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(date) {
    let now = Date.now();
    let birthday = Date.parse(date);
    let diff = now - birthday;
    const millsInYear = 365 * 24 * 60 * 60 * 1000;
    let age = diff / millsInYear;
    return age > 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}


function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        const sound = animal.sound;
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += parseInt(marks[i]);
    }
    let average = total / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}
