 function drawTriangle(n)
{   let trianglePattern = "\nTriangle Pattern: " + n + "\n";

    for(let i = 0; i < n; i++)
    {
        let row = " "; 
        for(let j = 0; j <= i; j++)
        {
            row += " @"
        }
        trianglePattern += row + "\n"; 
    }
    return trianglePattern;
}

module.exports = {drawTriangle : drawTriangle}
