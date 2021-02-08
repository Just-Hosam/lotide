const assertEqual = require('./assertEqual.js');

const head = arr => arr[0];

assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head(['test1', 'test2', 'test3', 'test4']), 'test1');