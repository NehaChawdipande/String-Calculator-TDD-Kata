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
   
       // Add the numbers together
       const sum = parsedNumbers.reduce((acc, curr) => acc + curr, 0);
       
       return sum;
}

module.exports = calculate;