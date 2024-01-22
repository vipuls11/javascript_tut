// chapter1

//Q1. create  a variable of the string and try to add a number to it
let a="Harry";
let b= 6;
console.log(a+b);

//Q2.Use  type of operators to find the datatype of the string in last Questions
console.log(typeof(a)+typeof(b));
 console.log(typeof(a+b));
//Q3.Create a const object in javascript can you cahange it to hold a number later!
const d={
    name:"Harry",
    section:1,
    isPrincipal:false
}
// d="Harry";
//Q4.Try to add a new key to the const object in Problem 3 were you able to do it?
d['friend']="Shubham"
d['name']="lovish";
console.log(d);

//Q5.Write a js Program to create a word-meaning dictionary of 5 Words

let wordDictionary = {
    Apple: 'A fruit which is commonly used in desserts',
    Banana: 'A long curved fruit with soft pulpy flesh and yellow skin, when ripe it turns bright yellow',
    Cherry: 'A small sweet fruit that grows in clusters and has a hard pit or stone inside',
    Date: 'A sweet, small, and hard fruit with a very long time from seed to harvest, also called "medjool" dates',
    Fig: 'A fruit with thick skin and usually sweet or tart juicy flesh inside'
   };

//    console.log(wordDictionary['Apple']);
   console.log(wordDictionary['Banana']);
   console.log(wordDictionary['Cherry']);
   console.log(wordDictionary['Fig']);




