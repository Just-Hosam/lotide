const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('Tests for countOnly.js', () => {
  it('should return { Fang: 2, Jason: 1 } when given ["Karl", "Salima", "Agouhanna", "Fang","Kavith", "Jason", "Salima", "Fang", "Joe"] & { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 })
  });
});