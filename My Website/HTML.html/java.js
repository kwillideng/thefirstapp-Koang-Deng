// part 1 each part is closed under one multiline comments

console.log('I like pizza!');
console.log("It's really good!");


window.alert("I reallly Love Pizza") 

// this is a comment

   /* this
   is 
   a
   multiline
   comment
   */

  
   // part 2 each part is closed under one multiline comments
/*
   // a variable is a container for storing data
   //A variable behave as if it was the value that it contains

   // Two step:
   // 1. Declaration (var, let, const)
   // 2. Assignment (= assignment operator)

*/

 
   let firstName = "Koang"; //strings
   let  age = 24; // numbers
   let student = true; // booleans


   age = age + 1;

   console.log("Hello", firstName);
   console.log("You are", age, "year old");
   console.log("Enrolled:", student);


   document.getElementById("p1").innerHTML = "Hello " + firstName;
   document.getElementById("p2").innerHTML = "You are " + age + " year old";
   document.getElementById("p3").innerHTML = "Enrolled: " + student;



    // part 3 each part is closed under one multiline comments

  // arithmetic. expression is a combination of...
 //  operands (value, variables, etc.)
  // operators (+ - * / %)
  // that can be evaluated to a value
  // ex. y = x + 5;


 students = 20;

//students = student 1;
//students = student - 1;
//students = student * 2;
//students = student / 2;
//let extraStudents = students % 2;

//students += 1;
//students -= 1;
//students *= 2;
students /= 2;
console.log(students);




 // part 4 each part is closed under one multiline comments

  //operator precedence
  //1. parenthesis ()
  //2. exponents
  //3. multiplication & division
  //4. additon & subtraction


//let result = 1 + 2 * (3 + 4);
let result = (1 + 2) * (3 + 4);

console.log(result); 


// part 5 each part is closed under one multiline comments

// How to accept user iput

// Easy way with a window prompt
/* let username = window.prompt("what's your name?");
console.log(username); */

// difficult way HTML textbox 
/*24
 let username;

document.getElementById("myButton").onclick = function(){
 
    username =document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("label").innerHTML = "Hello " + username;
}
*/


// part 6 each part is closed under one multiline comments

// Type conversion = change the datatype of a value to another 
//                        (stringd, Number, booleans)

let age = window.prompt("How old are you?");
console.log(typeof age)
age = Number(age);
console.log(typeof age)
age += 1;

console.log("Happy Birthday! You are", age, "year old");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// const = a variable that can't be changed
/*

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius");
radius = Number(radius);

//pi = 420.69;
circumference = 2 * Pi * radius;

console.log(" the circumference is:", circumference); */


/*  loop */
for ( let i = 0; i < 10; i++) {
   console.log(" i  : ", i)
}

let arr =[]
arr.forEach( function( el ){
   console.log("el : ", el);
})

let c = 10;
while(c > 1) {
   console.log(" c :", c);

   c--;
}

/*  Logic */

let cond = 4;
if ( cond === 3 ) {
   console.log("the status is : notfound")
} else if ( cond ==== 4 ) {
   console.log("the status is : found")
}  else if ( cond === 1 ) {
   console.log("the status is : found")
}


switch( cond ) {
   cas 1 :
}