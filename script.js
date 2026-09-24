// VARIABLES & DATA TYPES

// 1. Name and data type
let name = "Krish";
console.log(typeof name);


// 2. Age and data type
let age = 26;
console.log(age);
console.log(typeof age);


// 3. Boolean
let isdeveloper = true;
console.log(isdeveloper);
console.log(typeof isdeveloper);


// 4. Undefined
let value;
console.log(value);
console.log(typeof value);


// 5. Null
let data = null;
console.log(data);
console.log(typeof data);


// 6. Five different data types
let str = "Hello";
let num = 100;
let bool = true;
let undef;
let nullValue = null;

console.log(str);
console.log(num);
console.log(bool);
console.log(undef);
console.log(nullValue);


// 7. Qualification
let qualification = "B.a";
console.log(typeof qualification);


// 8. Salary
let salary = 60000;
console.log(typeof salary === "number");


// 9. String number vs actual number
let stringNumber = "100";
let actualNumber = 100;

console.log(typeof stringNumber);
console.log(typeof actualNumber);


// 10. Personal details
let myName = "Krish";
let myAge = 26;
let myQualification = "B.a";
let workingStatus = true;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(myQualification, typeof myQualification);
console.log(workingStatus, typeof workingStatus);


// ARRAYS

// 11. Five fruits
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits);


// 12. Five numbers - first element
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);


// 13. Six colors - third element
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);


// 14. Five mobile brands - last element
let mobiles = ["Apple", "Samsung", "Nokia", "Vivo", "Redmi"];
console.log(mobiles[mobiles.length - 1]);


// 15. Seven numbers - second-last
let sevenNumbers = [10, 20, 30, 40, 50, 60, 70];
console.log(sevenNumbers[sevenNumbers.length - 2]);


// 16. Favorite foods
let foods = ["Pizza", "Burger", "Biryani", "Dosa", "Parotta"];
console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);


// 17. Five cricketers - fourth
let cricketers = ["Dhoni", "Kohli", "Rohit", "Jadeja", "Bumrah"];
console.log(cricketers[3]);


// 18. Toys - last dynamically
let toys = ["Car", "Robot", "Helicopter", "Jcb", "Puzzle"];
console.log(toys[toys.length - 1]);


// 19. Ten values
let tenValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(tenValues[0]);
console.log(tenValues[tenValues.length - 1]);
console.log(tenValues[tenValues.length - 2]);


// 20. Fruits, toys and cricketer
let mixedArray = ["Apple", "Mango", "Car", "Jcb", "Dhoni"];

console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[2]);
console.log(mixedArray[4]);

// OBJECTS

// 21. Name, age, city
let person = {
    name: "Krish",
    age: 26,
    city: "Rasipuram"
};

console.log(person);


// 22. Name, qualification, company
let employee = {
    name: "Krish",
    qualification: "B.A",
    company: "Stackly"
};

console.log(employee.company);


// 23. Object with fruits array
let fruitObject = {
    fruits: ["Apple", "Mango", "Banana"]
};

console.log(fruitObject.fruits[1]);


// 24. Object with toys array
let toyObject = {
    toys: ["Car", "Robot", "Jcb", "Helicopter"]
};

console.log(toyObject.toys[toyObject.toys.length - 1]);


// 25. Cricketer and team
let cricket = {
    cricketer: "Dhoni",
    team: "India"
};

console.log(cricket.cricketer);


// 26. Three properties
let details = {
    fruitName: "Apple",
    toyName: "Car",
    cricketer: "Kohli"
};

console.log(details.fruitName);
console.log(details.toyName);
console.log(details.cricketer);


// 27. Students and courses
let college = {
    students: ["Krish", "Kirubha", "Karan"],
    courses: ["JavaScript", "HTML", "CSS"]
};

console.log(college.students[0]);
console.log(college.courses[1]);


// 28. Mobile array
let mobileObject = {
    mobile: ["iPhone", "Samsung", "Oppo", "Vivo"]
};

console.log(mobileObject.mobile[2]);


// 29. Employee skills
let employeeDetails = {
    employeeName: "Krish",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 1
};

console.log(employeeDetails.skills[1]);


// 30. Personal information
let personalInfo = {
    name: "Krish",
    age: 26,
    qualification: "B.A",
    city: "Rasipuram",
    country: "India"
};

console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.qualification);



// ARITHMETIC OPERATORS

// 31. Addition, subtraction, multiplication, division
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// 32. Remainder
let c = 17;
let d = 5;

console.log(c % d);


// 33. Power
console.log(2 ** 5);


// 34. All six arithmetic operations
let e = 10;
let f = 3;

console.log(e + f);
console.log(e - f);
console.log(e * f);
console.log(e / f);
console.log(e % f);
console.log(e ** f);


// 35. Increase value using +
let value35 = 10;

value35 = value35 + 5;

console.log(value35);


// INCREMENT & DECREMENT

// 36. Pre-increment
let a1 = 10;

console.log(++a1);


// 37. Post-increment
let a2 = 10;

console.log(a2++);
console.log(a2);


// 38. Pre-decrement
let a3 = 20;

console.log(--a3);


// 39. Post-decrement
let a4 = 20;

console.log(a4--);
console.log(a4);


// 40. Pre vs Post increment
let first = 10;
let second = 10;

console.log(++first);   
console.log(second++);  

console.log(first);
console.log(second);


// ASSIGNMENT OPERATORS

// 41. +=
let b1 = 20;
let c1= 10;

b1 += c1;

console.log(b1);


// 42. -=
let b2 = 50;
let c2 = 20;

b2 -= c2;

console.log(b2);


// 43. *=
let b3 = 10;
let c3 = 5;

b3 *= c3;

console.log(b3);


// 44. /=
let b4 = 100;
let c4 = 10;

b4 /= c4;

console.log(b4);


// 45. %=
let b5 = 25;
let c5 = 4;

b5 %= c5;

console.log(b5);


// COMPARISON, LOGICAL & TERNARY

// 46. Comparison operators
let num1 = 20;
let num2 = 10;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);


// 47. == vs ===
let number = 10;
let string = "10";

console.log(number == string);
console.log(number === string);


// 48. Logical operators
let condition1 = 10 > 5;
let condition2 = 20 > 15;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);


// 49. Age eligibility using ternary
let age49 = 20;

let result49 = age49 >= 18 ? "Eligible" : "Not Eligible";

console.log(result49);


// 50. Marks using ternary
let marks = 75;

let result50 = marks >= 35 ? "Pass" : "Fail";

console.log(result50);