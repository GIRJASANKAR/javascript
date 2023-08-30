/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    let t=[];
    let f=[];
    function backtrack(t,nums){
        if(nums.length===0){
            f.push(t.slice());
            return;
        }
        for(let i=0;i<nums.length;i++){
            t.push(nums[i]);
            nums.splice(i,1);
            backtrack(t,nums,f);
            nums.splice(i,0,t.pop());

        }
    }
    backtrack(t,nums,f);
    return f;
}