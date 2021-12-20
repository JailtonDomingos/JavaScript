/*
Task

Declare a constant variable, 'PI', and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, 'PI', denoting the radius of a circle from stdin.
Use 'PI' and 'r' to calculate the 'area' and 'perimeter' of a circle having radius .
Print 'area' as the first line of output and print 'perimeter' as the second line of output.

*/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    const PI = Math.PI
    let r = 2.6 // readLine()
    let area = 0, perimeter = 0
    
    // Print the area of the circle:
    area = PI * Math.pow(r, 2)
    console.log(area)
    
    // Print the perimeter of the circle:
    perimeter = 2 * PI * r
    console.log(perimeter)
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main()