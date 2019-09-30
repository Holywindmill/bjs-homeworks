function compareArrays(a1, a2) {
    return a1.length === a2.length && a1.every((v, i) => a2[i] === v)
}

function memoize(fn, limit) {
    const memory = [];

    const newfn = function() {

        // КОПИРУЕМ ПАРАМЕТРЫ В МАССИВ
        let args = Array.from(arguments)

        // 1 ПОИСК
        let item = memory.find(item => compareArrays(item.args, args))

        if (item === undefined) {

            console.log(`[${args}] в памяти не найдено, результат посчитала функция`);

            // i. Вычислить результат fn с переданными аргументами.
            const result = fn.apply(undefined, args);

            // ii. Добавить запись о вызове fn в memory.
            item = {args: args, result: result};
            memory.push(item);

            // iii. При количестве элементов memory более limit удалить лишнее
            if (memory.length > limit){
                memory.shift()
            }

            // iv. Вернуть результат fn с переданными аргументами
            return result;
        } else {

            console.log(`[${args}] найдено в памяти, результат возвращен из массива`);
            // v. вернуть свойство result найденного объекта
            return item.result;
        }
    }

    return newfn;
}

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const mSum = memoize(sum, 2);
const mMultiply = memoize(multiply, 5);

const divide = (a, b, c) => a / b * c;
const mDivide = memoize(divide, 4)

console.log(sum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mMultiply(5, 6));
console.log(mMultiply(5, 6));
console.log(mDivide(10, 2, 15));
