// This is a JavaScript Quiz from BFE.dev

new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })
  

//  output-  1


// Explanation
// For Promise.prototype.then():

// if function is passed as callback, the return value of the function is used as the fulfillment value
// for non-function values, previous fulfillment value is used.
// Promise.resolve(1)            // fulfilled : 1
//   .then(() => 2)              // function is passed, return value is 2 => fulfilled : 2
//   .then(3)                    // non-function is passed, previous fulfillment value 2 is used => fulfilled : 2
//   .then((value) => value * 3) // function is passed, value is 2, return value is 6 => fulfilled: 6
//   .then(Promise.resolve(4))   // Promise object is not function, previous fulfillment value 6 is used => fulfilled : 6
//   .then(console.log)          // 6 gets logged