/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sumArray=[];
    for(let i=0;i<accounts.length;i++){
       let sum= accounts[i].reduce((acc,cur)=> acc+cur,0);
       sumArray[i]=sum;
       sum=0;
    }

    console.log(sumArray);
    const max=Math.max(...sumArray);
    return max;
};