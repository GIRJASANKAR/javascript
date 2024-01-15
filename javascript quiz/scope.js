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


