let num = [3, 5, 1, 2, 4]

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

// ForEach Loop
// let num = [3, 5, 1, 2, 4]
num.forEach(element => {
    console.log(element)
})

// Array.form
let num = [3, 5, 1, 2, 4]
let newNum = Array.from(num)
console.log(newNum)

// For..... of
let num = [3, 5, 1, 2, 4]
for (let item of num){
    console.log(item)
}

// For..... in
let num = [3, 5, 1, 2, 4]
for (let i in num){
    console.log(num[i])
}