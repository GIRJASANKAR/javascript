/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  let setIntervalID= setInterval(callback, delay, ...args);
  return ()=>{
    clearInterval(setIntervalID);
  }
}