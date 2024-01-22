// Array Methods

let num = [1,2,3,34,4]
let b = num.toString() // b is now a string
console.log(b, typeof b)

let c = num.join(" and ")
console.log(c, typeof c)

// let num = [1,2,3,34,4]
// let d = num.pop() //pop returns the popped element
// console.log(d, num)

// let num = [1,2,3,34,4]
// let d = num.push() //push returns the new array length
// console.log(d, num)

// let num = [1,2,3,34,4]
// let d = num.shift() 
// console.log(d, num)

// let num = [1,2,3,34,4]
// let d = num.unshift() 
// console.log(d, num)

let num  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length)

let num  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
let newArray = num.concat(num_more, num_even_more)
console.log(newArray)

// sort method
let compare = (a, b) =>{
    return a - b
}
let num  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num.sort(compare)
num.reverse()
console.log(num)

//Splice and Slice
let  num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num)
console.log(deletedValues)

let  num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)
console.log(deletedValues, num)
