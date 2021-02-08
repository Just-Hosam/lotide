const assert = require('chai').assert;
const eqObjects = require('../eqObjects-Recursive');

describe('Tests for eqObjects-Recursive.js', () => {

  it('should return true when given { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it('should return false when given { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it('should return true when given { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('should return false when given { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it('should return false when given { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: 1, b: 2 };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
});