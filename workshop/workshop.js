 // document.write("Hello,world!"); 
  //   window.alert("Hello,world!");
    /* document.write(1 + 1 + "<br>");
    document.write("1 + 1" + "<br>");
    document.write("1" + "1");
    */

   // random number
  // document.write(Math.random() * 100)

   // comparisons and Conditions
 /*   if (5 >= 10 && 4 < 10) {
    document.write("I just made an if statement!");
   }
   else {
    document.write("Elese Statemet, activated!");
   }
 */

   // Varialbles
   //var color = "red"

  /*  var name = prompt("Please enter your name.");
   document.write("Hello, " + name + "!") */

   // Onclick Function
  
   /* function My_First_Function () {
    const String = "Kiss me, I'm South Sudan";
   const result = String.fontcolor("green");

    const document = document.getElementById(sudan).innerHTML = 
    result;
   } */

   // Conditional Statement if and Else


 // Syntax
 /*  if (cond){

  }
  else if(){

  }
  else{

  } */
  if(2==2)
  console.log("there are equal!")

  var a=5,b=6;
  if(a+b<11)

  console.log("Less than 11");
  else if(a+b>11)

  console.log("more than 11");
  else
  console.log("Equal");

  // switch expression
  var day ="sunday";
 switch(day)
  {
    case "mon": 
    console.log("Today is monday");
         break;
    case "tue": 
    console.log("Today is Tuesday");
         break;
    case "wed": 
    console.log("Today is Wednesday");
         break;
    case "thu": 
    console.log("Today is Thursday");
         break;
    case "fri": 
    console.log("Today is Friday");
         break;
    case "sat": 
    console.log("Today is Satursday");
         break;
    case "sun": 
    console.log("Today is Sunday");
         break;


  }


  var a = 1;
  var b = 2;
  if(a+b>4)
  { 
   console.log(a+b);
  }
  else if(a+b<1) 
  {
    console.log(a+b);
  }
  else
  console.log("hi");

// loops 
  for(var num=0;num<11;num=num+2)
  console.log(num);

  // loops -for each


  // array
  var a = [1,2,3,4];
  a.forEach(item => console.log(item)); 
    //for of and for in
for(var item in a)
console.log(item)

// loops while
var i=0;
while(i<5){
  console.log("current value of i:"+i);
  i++;
}

//loops -Do while
//syntax 
/* 
do{
/* 
}/* while(Expression); */
/*var i=0;
do{
  console.log("vale of i:"+1);
  i++;
}while(i<5);
  */
// Operator
//unary Operator
var num=0;
while(num>5)
{
  console.log(num++);
  
}

//shift operator
var num1=8,n=3;
console.log(num1<<n); // 64
console.log(num1>>n); // 1

// Logical Operation
var a=true,b=false;
console.log('a&&b: '+(a&&b));

console.log('a||b: '+(a||b));

console.log('!a: '+(!a));

var a=2;
console.log(a);

//Hoisting

var favouriteFood="grapes";
var foodthought=function(){
  console.log("Orginal Choice"+favouriteFood);
}

console.log("Global Scope");
for(var g_scope=1;g_scope<5;g_scope++)

for(var n =0;n<5;n++)
console.log(n);

console.log(n);

var declare_again=1;
console.log(declare_again);

var declare = 5;
console.log(declare);



let name ="Deng";

console.log(name + " is 25 yrs old");
console.log(`${name} is 24 yrs old`);


// Exampl of object
let animal = {
      name:"cat",
      color:"black",
      eat(){
            console.log(`${this.name} is eating...`);
      }
}
animal.eat();
animal["color"];

//Arrays


var a =[1,2,,4,5];
a.push(2);

//Functions
//Using function keyword
function sg() {
  console.log("Coding is easy");
}
sg() // calling function
//Coding is easy 

//Function expression
var faith = function() {
  console.log("Throught lot of practic");
}
faith()