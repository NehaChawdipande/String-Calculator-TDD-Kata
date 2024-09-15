function calculate(input) {
       // Split the input string into numbers
       const cleanedInput = input.replace(/\n/g, ',');

       // Split the input into numbers
       const numbers = cleanedInput.split(',');

       // Convert the numbers to integers
       const parsedNumbers = numbers.map(Number);
   
       // Add the numbers together
       const sum = parsedNumbers.reduce((acc, curr) => acc + curr, 0);
       
       return sum;
}

module.exports = calculate;