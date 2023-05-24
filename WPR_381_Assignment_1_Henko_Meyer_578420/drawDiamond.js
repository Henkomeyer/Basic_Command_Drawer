 function drawDiamond(n)
{ 
    let diamondShape = "\nDiamond Shape:\n";
    diamondShape += "Width: " + n + ", Length: " + (2 * n) + "\n";

    for(let i = 0; i < n; i++)
    {
        let row = ''; 
        for(let j = 0; j < n - i - 1; j++)
        {
            row += ' '; 
        }
        for(let k = 0; k < 2 * i + 1;k++)
        {
            row += '*'
        }
        diamondShape += row + '\n';
    }
    for( let i = n - 2; i >= 0 ; i--)
    {
        let row = ''; 
        for(let j = 0; j < n - i - 1; j++)
        {
            row +=  ' '; 
        }
        for(let k = 0 ; k < 2 * i + 1; k++)
        {
            row += '*'
        }
        diamondShape += row + '\n';
    }
    return diamondShape; 
}

module.exports = { drawDiamond : drawDiamond}