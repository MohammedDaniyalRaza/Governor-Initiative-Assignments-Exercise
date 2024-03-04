// Question 3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


//////  Lower Case  //////
let personName1 : string = "Daniyal";
console.log(personName1.toLowerCase());

//////  Upper Case  //////
let personName2 : string = "daniyal";
console.log(personName2.toUpperCase());

//////  Title Case  //////
let personName3 : string = "daniyal";
console.log(personName3.replace(/\bw/g,c => c.toUpperCase()));

