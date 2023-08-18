var cancellable = function(fn, args, t) {
    let timeoutId =setTimeout(()=>{
        fn(...args)
     },t)
   
      function cancelFn(){
      clearTimeout(timeoutId);
     }
 
     return cancelFn;
  
 };