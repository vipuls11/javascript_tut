// Write a program to print the marks of student in an object using for loop
      let  marks=
      {
            harry:98,
            rohan:70,
            aakash:7
        }

 for(let i=0; i < Object.keys(marks).lenght; i++){
      console.log(marks[i])
//     console.log("The marks of" + Object.keys(marks[i])+ "are" + marks[Object.keys(marks)[i]])  
 }


//  console.log(marks)


//write the program ib q1 using for in loop
      let  marks1=
      {
            harry:98,
            rohan:70,
            aakash:7
      }

      for(let key in marks1){
      console.log("The marks of" + key + "are" + marks1[key])
      }

// Write the program to print "try again" until ther user enters the correct number

let ctr=4
let i
while(i != ctr){
 i= prompt("Enter the number")
}
console.log("Correct Number!")


// problem no.4

const mean = (a,b,c,d) => {
      return (a+b+c+d)/4
}

console.log(mean(4,5,8,6))