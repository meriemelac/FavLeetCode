/* The setInterval() method repeatedly calls a function or 
executes a code snippet, with a fixed time delay 
between each call. This method returns an interval 
ID which uniquely identifies the interval, so you can 
remove it later by calling clearInterval(). */

// setInterval(function, delay);
// clearInterval(intervalID);

// Example 1: Using setInterval() to print a message every second
const intervalID = setInterval(() => {
  console.log("This message is printed every second.");
}, 1000);   

// Example 2: Using clearInterval() to stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval cleared after 5 seconds.");
}, 5000);

//The LeetCode problem "Interval Cancellation":
var cancellable = function(fn, args, t) {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);
    const cancelFn = () => clearInterval(timer);
    return cancelFn;     
};