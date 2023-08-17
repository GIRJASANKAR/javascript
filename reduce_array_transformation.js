/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let finalsum=init;
    for(let i=0;i<nums.length;i++){
        let val=fn(finalsum,nums[i]);
        finalsum=val;
    }
    return finalsum;

};