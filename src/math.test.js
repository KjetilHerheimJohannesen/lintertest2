const { addNumbers } = require('./math');

describe('math.js', () => {
  it('Tests if 1 and 2 equals 3', () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});
