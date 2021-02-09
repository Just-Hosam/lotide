# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install hosam-dahrooge/lotide`

**Require it:**

`const _ = require(hosam-dahrooge/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares 2 arrays then logs our assertion.
* `assertObjectEqual`: compares 2 objects then logs our assertion.
* `assertEqual`: compares 2 primitive data types using the strict equality operator.
* `countLetters`: counts each letter in a given string and returns an object with the number of times each letter (key) is repeated.
* `countOnly`: accepts 2 arguments an array and an object. Counts the elements in the array based on the condition in the object then returns an object with element/number of times found as key/value pairs.
* `eqArrays`: compares 2 arrays recursively and return a boolean based on the result.
* `eqObjects`: compares 2 objects recursively and return a boolean based on the result.
* `findKey`: accepts 2 arguments, an object and a callback function. returns the first key in the object that meets the condition in the callback function.
* `findKeyByValue`: accepts 2 arguments, an object and a string. returns the first key in the object that its value equals the array.
* `flatten`: accepts 1 argument, an array. flattens the array (gets rid of all nesting) and returns a new 1 dimensional array with all the values from the given array.
* `head`: accepts 1 argument, an array. returns the first element in an array.
* `letterPositions`: accepts 1 argument, a string. return an object with the number of times each letter was repeated.
* `map`: accepts 2 arguments, an array and a callback function. Loops through the array and runs the callback function with each element in the array then returns a new array with the modified values.
* `middle`: accepts 1 argument, an array. Returns the middle element if the array length was odd. Returns the 2 middle elements in an array if the array length was even.
* `tail`: accepts 1 argument, an array. Returns a new array without the first element from the given array.
* `takeUntil`: accepts 2 arguments, an array and a callback function. Loops through a given array until the condition in the callback function is met then returns an array with the values looped through till that point.
* `without`: accepts 2 arguments, 2 arrays. Returns a new array by removing the elements present in the second given array from the first given array.