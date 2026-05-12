/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let Orginalnumslength = nums.length;

    for(let i = 0 ; i < Orginalnumslength;i++){
        nums.push(nums[i])
    }
    return nums
};