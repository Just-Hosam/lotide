const assert = require('chai').assert;
const findKey = require('../findKey');

describe('Tests for findKey.js', () => {
  it('should return "noma" when given dataObj1 and x => x.stars === 2', () => {
    const dataObj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.strictEqual(findKey(dataObj1, x => x.stars === 2), 'noma');
  });

  it('should return undefined when given dataObj1 and x => x.stars > 5', () => {
    const dataObj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.strictEqual(findKey(dataObj1, x => x.stars > 5), undefined);
  });

  it('should return "Akaleri" when given dataObj1 and x => x.stars >= 2', () => {
    const dataObj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.strictEqual(findKey(dataObj1, x => x.stars >= 2), 'Akaleri');
  });
});