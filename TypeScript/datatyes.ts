//String
let lastName = "sainadth"
console.log(lastName);
console.log(lastName.length);
let names : string;
names = lastName.toLowerCase();
console.log(names);

//Number
let age : number;
age = 10;
console.log(age);
age = 30.5;
console.log(age);
age = parseInt(age.toString());
console.log(age);

//Boolean
let isTrue : boolean;
isTrue = true;
console.log(isTrue);

//Array
let empList : Array<String>;
empList = ["San", "pavan"]
console.log(empList);
empList.push("adsfsadf");
console.log(empList);

let empId : Array<number>;
empId = [1, 2, 3, 4, 5];
console.log(empId);
let evenEmpId = empId.filter((num) => num%2 == 0);
console.log(evenEmpId);
let sanFind = empList.find((name) => name == "San");
console.log(sanFind);
let sum = empId.reduce((acc, num) => acc + num)
console.log(sum);

//Enum
const enum day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
let dayOfTheWeek : day = day.SUNDAY;
console.log(dayOfTheWeek);

//Tuples
function swapnums([num1, num2] : [number, number]) {
    return [num2, num1];
}

let n : [number, number]= [10, 9];
console.log(n);
console.log(swapnums(n));
console.log(n);

//Any
let anyEx;
anyEx = "dasfad";
anyEx = 10

