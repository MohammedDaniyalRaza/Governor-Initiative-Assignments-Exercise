// Question 3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//////  Lower Case  //////
var personName1 = "Daniyal";
console.log(personName1.toLowerCase());
//////  Upper Case  //////
var personName2 = "daniyal";
console.log(personName2.toUpperCase());
//////  Title Case  //////
var personName3 = "daniyal";
console.log(personName3.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
