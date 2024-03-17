const sumAll = function(num1, num2) {
    
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    let smallestNumber = num1;
    let largestNumber = num2;

    if(num2 < num1) {
        smallestNumber = num2;
        largestNumber = num1;
    }

    let finalSum = 0;
    for(i = smallestNumber; i <= largestNumber; i++){
        finalSum += i;
    }
    return finalSum;
};

/*
## Hints

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/

// Do not edit below this line
module.exports = sumAll;
