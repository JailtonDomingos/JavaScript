/*
Function Description:
Complete the getSecondLargest function in the editor below.
getSecondLargest has the following parameters:
int nums[n]: an array of integer

Returns:
int: the second largest number in 
*/

function getSecondLargest(nums) {
    // Complete the function
    let maior = 0, segundoMaior = 0
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] >= maior) {
            segundoMaior = maior
            maior = nums[i]
        }
    }

    return segundoMaior
}

const nums = [5, 7, 4, 2, 6, 15, 24, 12, 90, 0]
console.log(getSecondLargest(nums))