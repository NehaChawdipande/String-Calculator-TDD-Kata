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

// Test case 4: Numbers separated by newlines
test('should add numbers separated by newlines', () => {
    expect(calculate('1\n2\n3')).toBe(6);
});

// Test case 5: Numbers separated by custom delimiter
test('should add numbers with a custom delimiter', () => {
    expect(calculate("//;\n1;2")).toBe(3);
});

// Test case 6: Numbers separated by custom delimiter
test('should add numbers with a custom delimiter', () => {
    expect(calculate("//:\n1:2:3:4")).toBe(10);
});

// Test case 7: Negative numbers
test('should throw an error for negative numbers', () => {
    expect(() => calculate('-1,2,3')).toThrow('Negatives not allowed: -1');
});

// Test case 8: Multiple Negative numbers
test('should throw an error for multiple negative numbers', () => {
    expect(() => calculate('-1,2,3,-4')).toThrow('Negatives not allowed: -1, -4');
});

test('should throw an error for a non digit character', () => {
    expect(() => calculate('1,s,3,4')).toThrow('Non digit character not allowed: s');
});
// Test case 9: Numbers larger than 1000
test('should ignore numbers larger than 1000', () => {
    expect(calculate('1001,2,3')).toBe(5);
});

// Test case 10: Multiple Numbers larger than 1000
test('should ignore multiple numbers larger than 1000', () => {
    expect(calculate('1001,2,3, 2003')).toBe(5);
});

// Test case 12: custom delimiters of any length
test('should add numbers with a custom delimiter of any length', () => {
    expect(calculate("//[**]\n1**2**3")).toBe(6);
});

// Test case 13: mulitple custom delimiters of any length
test('should add numbers with a custom delimiter of any length', () => {
    expect(calculate("//[*][&]\n1*2&3")).toBe(6);
});

// Test case 14: multiple custom delimiters of any length
test('should add numbers with a custom delimiter of any length', () => {
    expect(calculate("//[**][&&]\n1**2&&3")).toBe(6);
});