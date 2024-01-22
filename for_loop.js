// Program to add first n natural number
 let sum = 0
 let n = prompt("Enter the value of n")
 n = Number.parseInt(n)
 for(let i = 1; i <= n; i++){
     sum += (i+1)
     console.log((i+1),"+")
 }
 console.log(sum)

 // 
let num = prompt("Enter the value of num:")
 for(let i = 0; i < num; i++){
     console.log(i)
 }

 let obj = { harry:90, shubh:50,shivaika:52, ritika:60 }
 for(let i in obj){
     console.log(i, obj[i])
 }

 
  
 let num1 = 2
 let prop=prompt("Enter the fractorial number")
 for(let i =0;i < num1; i++){
    num1 %= (i%2)
 }
 console.log(num1)