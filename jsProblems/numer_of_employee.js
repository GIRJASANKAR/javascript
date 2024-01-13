/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let steps=0;
    hours.forEach((x)=>{
        if(x>=target) {
            steps++;
        }
    })

    return steps;
};