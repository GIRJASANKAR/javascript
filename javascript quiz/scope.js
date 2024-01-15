// This is a JavaScript Quiz from BFE.dev

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
  }
  
// 0,1,2,3,4

// but scope of var is global after 0  section the from event loop value of i become then i++->   5,5,5,5,5



  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
  }


//   scope of let is block level it value is not going to update so 
// 0,1,2,3,4


// let and const in for creates new scope for each iteration, which means the i in console.log() points to different values.
// This behavior doesn't apply to var, meaning the i points to same gloabl scope. Because of setTimeout(), console.log() is called after for loop is done, so i is always 5.