const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 
const diamond  = require('./drawDiamond');
const square = require('./drawSquare');
const triangle = require('./drawTriangle');


read.question('\nSelect a shape: \n1. Triangle\n2. Square\n3. Diamond\n ------------ \nEnter the number or name of the shape : ',
(choice) => {

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
console.log(' ------------ ')
read.question("Enter the integer size of the shape : ",
(size) => {
read.close(); 
const Choice = parseInt(choice);
const Size = parseInt(size); 

switch (Choice) 
{
    case 1:
     triangle.drawTriangle(Size)
     console.log(triangle.drawTriangle(Size))
     break; 
    case 2:
      square.drawSquare(Size)
      console.log(square.drawSquare(Size))
     break;
    case 3:
      diamond.drawDiamond(Size)
      console.log(diamond.drawDiamond(Size))
     break;
    default: 
     console.error("\nShape Choice is Invalid, Please try again !\n");
}
}); 
});