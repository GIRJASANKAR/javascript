/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) { 
    let x = false;
   return (...args) => {
       if (x) return;
       x = true;
       return fn(...args);
   }
};
