const calculate = require('./string-calculator');

// Test case 1: Empty string
test('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0);
});
