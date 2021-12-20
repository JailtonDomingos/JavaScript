/*
Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides 'lenght' and 'width'.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides 'lenght' and 'width'.
The values returned by these functions are printed to stdout by locked stub code in the editor.

Constraints:
1 <= lenght, width <= 1000
length and width are scaled to ar most three decimal places.
*/

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    if (((length && width) >= 1) && ((length && width) <= 1000)) {
        area = length * width
    }
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    if (((length && width) >= 1) && ((length && width) <= 1000)) {
        perimeter = 2 * (length + width)
    }
    
    return perimeter;
}

console.log(getArea(3, 4.5))
console.log(getPerimeter(3, 4.5))