# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: console logs a message indicating if 2 given arrays are or not equal
- `assertEqual`: console logs a message indicating if 2 given primitive values are or not equal
- `assertObjectsEqual`: console logs a message indicating if 2 given objects have or not the same properties
- `countLetters`: receives a string as argument and returns an object with the all the letters from the string as key and the times that letter is repeated as value
- `countOnly`: returns how many instances of each string were found in a given string array
- `eqArrays`: returns true if 2 given arrays are equal and false if they are not
- `eqObjects`: returns true if 2 given objects have the same properties and false if they don't
- `findKey`: takes an object and a callback, scans the object and returns the first key similar to the callback result.
- `findKeyByValue`: takes an object and a property value as arguments and returns the correspondent key or undefined if the key is not in the object
- `flatten`: transform a 1 level matrix into an array with the values that it contains.
- `head`: console logs a message indicating if 2 given primitive values are or not equal
- `letterPositions`: takes a string and a letter and returns an array with the indexes where that letter was found in the string.
- `middle`: returns an array with the middle value of a given array. If the given array 0, 1 or 2 values it returns an empty array; if it has more than 3 values and its quantity is even it returns 2 middle value and if the quantity is odd it returns the middle value
- `tail`: takes an array and returns a copy without the first value 
- `takeUntil`: returns a new array taking the elements from the beginning of given array stoping when the condition in a given callback function is fullfilled
- `without`: takes 2 arrays, 1 with a set of values and other with the values to be removed from the first one and returns an array with the remaining values