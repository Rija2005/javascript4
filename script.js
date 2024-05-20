//class activity
//question no 1

// let age = prompt("enter your age");
//  if(age >18 ){
//          console.log("you are eligible to the vote");
//  }
//  else if(age < 18 ){
// console.log("you are not eligible to the vote");
//  }
 //queston 2
//  let temprature = prompt("enter temprature in celcius");
//  if(temprature > 25){
//     console.log("it is hot day");
//  }
//  else if(temprature<25){
//     console.log("it is normal day");
//  }
//  //qouestion3
// let score =+ prompt("Enter student score")
// if(score >= 60){
//    console.log("you passed the test")
// }

// else{
//    console.log("You failed the test")
// }

// //question4
// let raining = prompt("Is it raining? Type 'true' or 'false':");

// if (raining === "true") {
//     console.log("Remember to bring an umbrella.");
// } else if (raining === "false") {
//     console.log("Enjoy the sunny weather!");
// } else {
//     console.log("Invalid input. Please type 'true' or 'false'.");
// }
// //question5

// let b = +prompt("enter your age");
//  if(b >18 ){
//          console.log("you are an adult");
//  }
//  else if(b < 18 ){
// console.log("you are minor");
//  }
//  //queston6
// let number= +prompt("Enter your number")
// if( number>0){
//    console.log("the number is positive");
// }
// else if(number<0){
//    console.log("the number is negative");
// }
// else{
//    console.log("the number is zero");
// }

//chapter11

// let score =+prompt("enter your score")
// if(score >=80 && score>=60){
//    console.log("you are passed");
// }
// else{
//    console.log("you are failed");
// }//logical operator &&
 
// let score =+prompt("enter your score")
// if(score >=80||score>=60){
//    console.log("you are passed");
// }
// else{
//    console.log("you are failed");
// } // LOGICAL OPERATOR "OR"

// let isRaining = false;
// if(!isRaining) {
//    console.log("its not raining. Enjoy the day!");
// }
// else{
//    console.log("dont forget your umberella");
// }//logiacl operator NOT ;ITS DO WORK VICE VERSA IF STATMENT IS TRUE IS SHOW FALSE



// let weight=+prompt("enter weight");
// let time=+prompt("enter time");
// if( weight>300 && time<6){
// alert("come to our try out!")
// }
// else{
//    alert("come to cookout")
// }//e.g pf logical &&


// let weight=+prompt("enter weight");
// let time=+prompt("enter time");
// if( weight>300 && time<6){
// alert("come to our try out!")
// }
// else{
//    alert("come to cookout")
// // }//e.g pf logical ||



// let weight=+prompt("enter weight");
// let time=+prompt("enter time");
// let age=+prompt("enter age");
// let gender=+prompt("enter gender");

// if( weight>300 ||time<6 || age>18 ||gender=== "male"  ){
//    //78>300 ||5<6|| 16>17 || male==="male"
// alert("come to our try out!")
// }
// else{
//    alert("come to cookout")
// }



// let weight=+prompt("enter weight");
// let time=+prompt("enter time");
// // let age=+prompt("enter age");
// // let gender=+prompt("enter gender");

// if(! (weight>300 && time<6 )){
//    //78>300 ||5<6|| 16>17 || male==="male"
// alert("come to our try out!")
// }
// else{
//    alert("come to cookout")
// }//logical operator not "!"" if even one statment is true its will give false.


//CHAPTER 14

let x=10;//if x=4 then no nested statment checked
let y= 5;//if y=1 theninner else statement correct ; 
 
if(x>5){
   if(y>2){
      console.log("both x and y are greater than their respective threshholds");
   }
   else{
      console.log("x is greater than 5, but y is not greater than 2.");
   }
}
else{
   console.log ("x is not greater than 5, so the inner condition is not checked.");
}

//nested if else else if....

let age=+prompt("enter age");
let weight=+prompt("enter weight")
if(age>18){
   if(weight>45){
      console.log("both age and weight is normal");
   }
   else{
      console.log("you should take healthy diet");
   }
}
else if (age <= 18) {

if(weight<45){
   console.log("you really enjoy your young age");
}
else{
   console.log("you are aged");
}

  
}

else{
   console.log("you should constult dr!");
}





let temprature=15;
let isSunny = true;
if(temprature>25){
   console.log("its hot outside");
   if(isSunny){
      console.log("dont forget to wear sunscreen");
   }
   else{
      console.log("you might still want to wearv sunscreen");
   }
}
else if( temprature >= 15 && temprature <= 25){
   console.log("It's a pleasant day.");
 if(isSunny){
   console.log("Enjoy the sunshine!");
 }
 else{
   console.log("Even if it's cloudy, it's still nice outside.");
}
}
else{
   console.log("It's a bit chilly.");
   if (isSunny) {
       console.log("Don't be fooled by the sun, it's still cool.");
   } else {
       console.log("It might be cloudy, so bring a jacket just in case.");
   }
}