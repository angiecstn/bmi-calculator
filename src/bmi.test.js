const {calculate, classify} = require('./bmi');

test('bmi calculation', () => {
  expect(calculate(1.80, 70)).toBe(21.6);
});

// 1.80m and 70kg => 21.6 BMI

test('bmi classify', () => {
    expect(classify(21.6)).toBe("healthy");
});

test('bmi classify', () => {
    expect(classify(15)).toBe("underweight");
});

test('bmi classify', () => {
    expect(classify(29)).toBe("overweight");
});

test('bmi classify', () => {
    expect(classify(32)).toBe("obese");
});
