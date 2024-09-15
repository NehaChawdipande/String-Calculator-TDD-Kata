const calculate = require('./string-calculator');

// Test case 1: Empty string
test('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0);
});

   
// Test case 2: Single number
test('should return the same number for a single number', () => {
    expect(calculate('5')).toBe(5);
});

// Test case 3: Multiple numbers separated by commas
test('should add multiple numbers separated by commas', () => {
    expect(calculate('1,2,3')).toBe(6);
});
