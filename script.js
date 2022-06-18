// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (number) => {
    if (number >= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isNumberPositive(-1); // returns false
isNumberPositive(10); // returns true

// 2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (numberOfDays) => {
    console.log(numberOfDays / 365);
}
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (a, b, c) => {
    const number = [a, b, c];
    let max = number[0];
    for (let i = 1; i < 3; i++) {
        if (number[i] > max) {
            max = number[i];
        }
    }
    console.log(max);
}
getLargestNumber(2, 1, 4); // returns 4
getLargestNumber(6, 2, 3); // returns 6

// 4. Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (array) => {
    let i = array.length - 1;
    console.log(array[i]);
}
getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
getLastName(["Ash", "Stu"]); // returns "Stu"

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive.It should return false if there are one or more negative numbers in the array.
const allNumbersPositive = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            x = x + 1;
        }
    }
    if (x > 0) {
        console.log("false");
    } else {
        console.log("true");
    }
}
allNumbersPositive([2, 4, 5]); // returns true
allNumbersPositive([-5, 4, 6]); // returns false