"use strict";
//String
let lastName = "sainadth";
console.log(lastName);
console.log(lastName.length);
let names;
names = lastName.toLowerCase();
console.log(names);
//Number
let age;
age = 10;
console.log(age);
age = 30.5;
console.log(age);
age = parseInt(age.toString());
console.log(age);
//Boolean
let isTrue;
isTrue = true;
console.log(isTrue);
//Array
let empList;
empList = ["San", "pavan"];
console.log(empList);
empList.push("adsfsadf");
console.log(empList);
let empId;
empId = [1, 2, 3, 4, 5];
console.log(empId);
let evenEmpId = empId.filter((num) => num % 2 == 0);
console.log(evenEmpId);
let sanFind = empList.find((name) => name == "San");
console.log(sanFind);
let sum = empId.reduce((acc, num) => acc + num);
console.log(sum);
let dayOfTheWeek = 6 /* day.SUNDAY */;
console.log(dayOfTheWeek);
//Tuples
function swapnums([num1, num2]) {
    return [num2, num1];
}
let n = [10, 9];
console.log(n);
console.log(swapnums(n));
console.log(n);
