function calculate(input) {
       // Split the input string into numbers
       const numbers = input.split(',');

       // Convert the numbers to integers
       const parsedNumbers = numbers.map(Number);
   
       // Add the numbers together
       const sum = parsedNumbers.reduce((acc, curr) => acc + curr, 0);
       
       return sum;
}

module.exports = calculate;