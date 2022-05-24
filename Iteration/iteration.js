//! ****************    TASK 1    ************************
// hike 10% each element of prices' array  //
// NOT: use FOREACH and alter root array       //
// ******************************************************

const prices = [100, 250, 50, 89, 35, 170];
console.log(`Given prices : ${prices}`);
prices.forEach((value, index, arr) => {
    arr[index] = (value * 1.10).toFixed(2);
});

console.log(`10% prices : ${prices}`);
console.log('------------------------------------------------')
    //! ****************    TASK 2    ************************
    // print the prices which are bigger than 90
    // ******************************************************

// condition ? exprIfTrue : exprIfFalse
prices.filter((price) => {
    price > 90 ? console.log(price) : null;
});
console.log('------------------------------------------------')

//! ****************    TASK 3    ************************
// increase 10% the prices which are smaller than 110
// ******************************************************


console.log(`Prices Data = > ${prices}`);
prices.map((price) =>
    price < 110 ? console.log((price * 1.10).toFixed(2)) : price);

console.log('------------------------------------------------')


//! ****************    TASK 4    ************************
// Salaries with less than 4000 will be increased by 50%
// create a new array for increased salaries
// ******************************************************
const salaries = [3000, 5000, 4000, 6000, 6500, 2000];

const newSalaries = salaries.map((salary) =>
    salary < 4000 ? salary * 1.50 : salary);

console.log(`Salaries => ${salaries}`);
console.log(`New Salaries => ${newSalaries}`);
console.log('------------------------------------------------')

//! ****************    TASK 5    ************************
// print the sum of the salaries out by FOREACH and REDUCE
// ******************************************************
console.log(`salaries = > ${salaries}`);
let sum = 0;
salaries.forEach((salary) => sum += salary);
console.log(`The sum of salaries : ${sum}`)

let initialValue = 0;
const totalSalary = salaries.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
console.log(`total salary= ${totalSalary}`);

//! display each the value of salaries in the HTML page
salaries.forEach((salary) => {
    document.write(`Salary => ${salary}`);
    document.write('<br>');
})