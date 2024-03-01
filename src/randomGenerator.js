// The function takes in two optional parameters, 'min' and 'max'
// with default values of 0 and 100, respectively.
// The function generates a random integer between the two input values
// (or the default values) by using the Math.random() method.
// The generated number is then floored to ensure it is an integer using Math.floor().
export default (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));
