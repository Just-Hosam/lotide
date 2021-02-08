const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('Tests for findKeyByValue.js', () => {
  it('should return "drama" when given bestTVShowsByGenre & "The Wire"', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      anime: 'Koe No Katachi'
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined when given bestTVShowsByGenre & "That \'70s Show"', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      anime: 'Koe No Katachi'
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('should return "anime" when given bestTVShowsByGenre & "Koe No Katachi"', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      anime: 'Koe No Katachi'
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Koe No Katachi"), 'anime');
  });
});