// Write a javascript program to generte a random number and store it in  a variable. The program then takes an input from user to tell them whethear the guess was correct, greater or lessor tha original.
//100 -( n of guessess)is the score of the user. the program is expected to terminal exce the number is guessed. Number Should be between 1-100



let number = [12, 20, 26, 63, 25, 40, 53, 70, 80, 120, 255, 300,260]

let guess = Math.floor(Math.random() * 100) + 1

console.log(guess)

//keep asking for the number until the correct number is guessed
// Increment the chances variable


// Eventually after the game is over, display the (100 - Number of the chances) and the actual number