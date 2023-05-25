 // function for drawing a square, takes user input n as size of the shape
 function drawSquare(n)
{   let squarePattern = "\nSquare Pattern: " + n + " X " + n + "\n";

    for(let i = 0; i < n; i++)
    {
        let row = " "; 
        for(let j = 0 ; j < n; j++)
        {
            row += " #"
        }
        squarePattern += row + "\n";
    }
  return squarePattern
}

module.exports = { drawSquare : drawSquare}