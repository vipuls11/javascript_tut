// Use logical operatory to find whether the age of person lies between 10 and 20?

let age = 15
console.log(age >= 10 && age <= 20)

//Demonstrate the use of shwitch case statement in javascript.

let day = 3 
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
    default:
        console.log("there is no weak day")
}

//write a javascript program to find whether a number is divisible by 2 and 3
 let num = prompt("what is your age?")
 num = Number.parseInt(age)
 if(num % 2 == 0 && num % 3 ==0){
     console.log("number is divisible by 2 and 3")
 }
 else{
    console.log("number is not divisible by 2 and 3")
 }

 //write a javascript program to find whether a number is Divisble by either 2 or 3

 let num1 = prompt("what is your age?")
 num1 = Number.parseInt(age)
 if(num1 % 2 == 0 || num1 % 3 ==0){
     console.log("number is divisible by 2 and 3")
 }
 else{
    console.log("number is not divisible by 2 and 3")
 }

 // Print "you can Drive" or "You acn Drive" base on age being greater than 18 using ternary operator
    let men = prompt("Enter your age:")
 console.log((men > 18)? "you can drive" : "you can not drive")