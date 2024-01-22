//Q1. What will the following print in  javascript?
// consol.log("har\*".length)

let str = "Har\""
console.log(str.length)

//Explore the includes, starts with & ends with function of a string

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//Write a program to convert a given string to lowercase
 let str_name = "Vipul Vishwakarma"
console.log(str_name.toLowerCase())
console.log(str_name.toUpperCase())

// Extract the amount out of this string 
// "Please give Rs100"

let str_amount = "please give Rs 1000"
let amount  = Number.parseInt(str_amount.slice(15))
console.log(amount)
console.log(typeof amount)

// Try to change 4th Chaaracter of a given string were you able to do it?

let friend = "Vipul vishwakarama"
let New_friend = friend.replace("Vipul", "Shubham") 
friend[3] = "S"
console.log(friend)  
console.log(New_friend)  