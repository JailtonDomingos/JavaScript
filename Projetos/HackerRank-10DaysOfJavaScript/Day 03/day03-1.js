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