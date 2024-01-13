/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let totalSum=0;

    while(n!==0){
        if(n%3==0 ||n%5==0 || n%7==0 ){
            totalSum=totalSum+n;
        }
        n--;
    }

    return totalSum;

};