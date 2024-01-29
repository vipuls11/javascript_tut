// Practice Set

//Q1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
let age = prompt("Enter your age")
age = Number.parseInt(age)
// ...............vipul vishwakarma write code..........
if( age <= 18){
    alert("Yes,you can drive")
}
else{
    alert("No,you can't drive")
}
// ...............vipul vishwakarma write code..........


//......................Harry bhai...................
let age = prompt("Enter your age")
age = Number.parseInt(age) 
const CanDrive = (age) =>{
    return age >= 18 ? true : false
}
if(CanDrive(age)){
        alert("Yes,you can drive")
    }
    else{
        alert("No,you can't drive")
    }

//Q2. In Q1 Use Confirm to ask the user if he wants to see the prompt again

let runAgain = true;
while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)
const CanDrive = (age) =>{
    return age >= 18 ? true : false
}
if(CanDrive(age)){
        alert("Yes,you can drive")
    }
    else{
        alert("No,you can't drive")
    }
    runAgain=confirm("Do you want to play again?")
}
//Q3.In the previous question, use console.error to log the error if the age entered is negative.
let runAgain = true;
while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age>0){
    console.error("Please enter a valid age");
}
const CanDrive = (age) =>{
    return age >= 18 ? true : false
}
if(CanDrive(age)){
        alert("Yes,you can drive")
    }
    else{
        alert("No,you can't drive")
    }
    runAgain=confirm("Do you want to play again?")
}

//Q4.Write a program to change the url to google.com (redirection) if user a number greater than  4
let number = prompt("Enter your number")
number =  Number.parseInt(number)

if (number > 4) {
    location.href= "https://www.google.com";
}
//Q5.Change the background of the page to yellow red or any other color based on user input through prompt 

let color =prompt ("Enter the page color")
document.body.style.background= color