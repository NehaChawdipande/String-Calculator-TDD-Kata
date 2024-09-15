function calculate(input) {
      // make a delimiter array
      const delimiters = [',','\n'];

      // check for custom delimiters
      const customDelimiterMatch = input.match(/\/\/([^\]]+)\n/);
      const delimiter = customDelimiterMatch && customDelimiterMatch[1];

      if(delimiter)
         delimiters.push(delimiter); // piush the delimiter to the array if found.

      const delimiterRegex = new RegExp(`[${delimiters.join("|")}]`); // make a regex to split the string based on the delimiter options


       // Split the input string into numbers
       const cleanedInput = input.replace(/\/\/([^\]]+)\n/g, '');


       // Split the input into numbers
       const numbers = cleanedInput.split(delimiterRegex);

       // Convert the numbers to integers
       const parsedNumbers = numbers.map(Number);

       // filter out numbers less that 1000
       const validNumbers = parsedNumbers.filter(num => Number(num) <= 1000);

       // filter out negative functions and throw an error.
       const negativeNumbers = validNumbers.filter(num => Number(num) < 0);
       if (negativeNumbers.length > 0) {
         const negativeNumbersString = negativeNumbers.join(', ');
         throw new Error(`Negatives not allowed: ${negativeNumbersString}`);
       }
       // Add the numbers together
       const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
       
       return sum;
}

module.exports = calculate;