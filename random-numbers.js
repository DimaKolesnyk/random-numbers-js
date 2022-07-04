 
const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const addRandomNumberToArray = (arr, min, max) => {
    let newRandomNumber;
    const updatedArr = [...arr];
    do {
        newRandomNumber = randomNumber(min, max);
        console.log(`generated number ${newRandomNumber}`);
    } while (updatedArr.includes(newRandomNumber));

    updatedArr.push(newRandomNumber);

    return updatedArr;
};
const updatedArr = addRandomNumberToArray(myNumbers, MIN, MAX);

console.log('Original array', myNumbers); 
console.log('Updated array', updatedArr); 
