var addTwoPromises = async function(promise1, promise2) { 
    try {
        let value1 = await promise1;
        let value2 = await promise2;
        
        return value1 + value2;
    } catch (error) {
        throw new Error(`Failed to add the promises due to: ${error.message}`);
    }
};

// Example usage:

let promiseA = new Promise(resolve => setTimeout(() => resolve(10), 1000));
let promiseB = new Promise(resolve => setTimeout(() => resolve(20), 1500));

addTwoPromises(promiseA, promiseB).then(result => {
    console.log(result);  // Expected output: 30
}).catch(error => {
    console.error(error.message);
});
// In this version:

// We are using the await keyword to wait for both promise1 and promise2 to resolve.
// The resolved values are added together.
// The result is returned.
// If either promise rejects, the error will be caught and a new error will be thrown.




