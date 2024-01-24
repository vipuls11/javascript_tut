//problem no.1
//Create an array of numbers and take input from the user to add numbers to this array.

let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(`The array is ${arr}`)



// problem no2
//Keep adding numbers to the array in 1 until 0 is add to the array
let arr = [1, 2, 3, 4, 5, 6, 7, 83]   
// while(a!=0){
//     let a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(`The array is ${arr}`)
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 83]
let a   
do{
 a= prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a) 
}
while(a!=0);
console.log(arr)

//Problem No-3
//filter for number divisible by 10 from a given array.
let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let a = arr.filter((a) => {
    return a % 10 == 0
})
console.log(a)


//Problem No-4
//Create an array of square of given number.
let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let a = arr.map((a) => {
    return a * a
})
console.log(a)

//problem no-5
//Use reduce to caculate factorial of a give number from an array of first n natural numbers.(n being the number whose factorial needs to be calculated)

let arr = [1, 2, 3, 4]
let a = arr.reduce((a1, a2) => {
    return a1 * a2
})
console.log(a)