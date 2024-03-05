const sumAll = function(num1, num2) {
    
    if(num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    let largestInteger, smallestInteger;
    if(num1 > num2) {
        largestInteger = num1;
        smallestInteger = num2;
    } else {
        largestInteger = num2;
        smallestInteger = num1;
    }

    let finalSum = 0;
    for(i = smallestInteger; i <= largestInteger; i++) {
       if(smallestInteger === largestInteger) {
       finalSum = smallestInteger; 
       }
       finalSum += i;
    }
    return finalSum;
};

/*
## Hints

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

what would I do. 

take two parameters. both integers.

can I make a for loop like (i=0; i<largest integer; i++)
then add i to the sum on each iteration. but how would I make it use the largest integer.
If statement before the for loop. if num1 > num2 then num1 = largestInteger
else num2 = largestInteger, and i = smallestInteger

loop thru it. 

Need some if statements before to make sure
- returns ERROR for non-number parameters. so smallest || largest !number - if it's not type number
- returns ERROR for negative numbers. so if smallest || largest < 0 

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/

// Do not edit below this line
module.exports = sumAll;
