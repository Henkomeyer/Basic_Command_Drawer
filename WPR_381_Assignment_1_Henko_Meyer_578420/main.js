// Henko Meyer: 578420@Student.belgiumcampus.ac.za
// Run the code by using node main.js 
// If you encounter an error of module not found try to install the readline package by typing npm i readline
const readline = require('readline');   // Import readline module, for user input in command line

const read = readline.createInterface({   // Interface that takes user input and displays set output
  input: process.stdin,
  output: process.stdout
}); 
// import functions to draw shapes
const diamond  = require('./drawDiamond');  
const square = require('./drawSquare');
const triangle = require('./drawTriangle');


read.question('\nSelect a shape: \n1. Triangle\n2. Square\n3. Diamond\n ------------ \nEnter the number or name of the shape : ',  // Display question to user and prompt for input of type of shape 
(choice) => {
// Error Handling for user input
if(choice == 1 || choice.toUpperCase() ==  'TRIANGLE')
{
  choice = 1; 
}
else if(choice == 2 || choice.toUpperCase() ==  'SQUARE') 
{
  choice = 2; 
}
else if(choice == 3 || choice.toUpperCase() ==  'DIAMOND')
{
  choice = 3; 
}
// Get user input to determine the size of the shape
console.log(' ------------ ')
read.question("Enter the integer size of the shape : ",
(size) => {
read.close(); 
const Choice = parseInt(choice);
const Size = parseInt(size); 
// Switch statement to choose the required shape 
switch (Choice) 
{
    case 1:  // Used to draw Triangle
     triangle.drawTriangle(Size)
     console.log(triangle.drawTriangle(Size))
     break; 
    case 2:  // Used to draw Square
      square.drawSquare(Size)
      console.log(square.drawSquare(Size))
     break;
    case 3:  // Used to draw Diamond
      diamond.drawDiamond(Size)
      console.log(diamond.drawDiamond(Size))
     break;
    default: 
     console.error("\nShape Choice is Invalid, Please try again !\n");
}
}); 
});