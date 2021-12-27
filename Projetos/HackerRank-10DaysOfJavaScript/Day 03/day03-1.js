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
    maior = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maior) {
            segundoMaior = maior
            maior = nums[i]
        } else if ((nums[i] != maior) && (nums[i] > segundoMaior)) {
            segundoMaior = nums[i]
        }
    }

    return segundoMaior
}

const nums = [2, 3, 6, 6, 5]
console.log(getSecondLargest(nums))