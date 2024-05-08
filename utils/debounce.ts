// export const debounce = (callback, wait) => {
//   // initialize the timer
//   let timer;

//   ...
//     // lots of code involving the actual implementation of timer
//     // to track the time passed since the last callback call
//   ...

//   const debouncedFunc = () => {
//     // checking whether the waiting time has passed
//     if (shouldCallCallback(Date.now())) {
//       callback();
//     } else {
//       // if time hasn't passed yet, restart the timer
//       timer = startTimer(callback);
//     }
//   }

//   return debouncedFunc;
// }