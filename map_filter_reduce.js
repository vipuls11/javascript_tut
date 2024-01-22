let arr = [45, 23, 21]
//Array map method
let a = arr.map((value, index, array) => {
    // console.log(value, index, array)
    return value + index +array
})
//console.log(a)

//Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a1 = arr2.filter((a) => {
    return a < 0
})
 console.log(a1, arr2)

//Array reduce method
let arr3 = [1, 2, 3, 4, 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)
