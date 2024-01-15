// from BFE.dev

Promise.resolve(1)   // fullfillled 1
.then((val) => {
  console.log(val)  // 1
  return val + 1  // fullfillled 2
}).then((val) => {
  console.log(val) // 2
//   didn't return anything that why fullfillled undefined
}).then((val) => {
  console.log(val)  // undefined
  return Promise.resolve(3)   // fullfillled 3
    .then((val) => {
      console.log(val)   // 3
      //   didn't return anything that why fullfillled undefined
    })
}).then((val) => {
  console.log(val)  // undefined
  return Promise.reject(4)  // rejected 4
}).catch((val) => {
  console.log(val)   // 4
   //   didn't return anything that why rejected with undefined
}).finally((val) => {
  console.log(val)  // undefined
    // finally() returns a Promise, though 10 is returned in above callback, but it doesn't affect the original promise
  // so Promise of this finally() is fulfilled with value: undefined

//   finally ke return se kio frak ni padta finally return a new promise jo easko mila tha us se 
  return 10
}).then((val) => {
  console.log(val)  // undefined
})



// then() creates a new Promise, in which the return value of the callbacks are used in resolve() or reject() internally
// if a new Promise is returned, it will be chained.
// Promise.prototype.finally() returns a new Promise, if the passed callback throws an error or returns a rejected promise, the promise returned by finally() will be rejected with that value instead, therwise the return value of the handler does NOT affect the state of the original promise.




// output

// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined