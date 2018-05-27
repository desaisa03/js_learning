let a = [11,12,13,14,15];
console.log(a[0]);

// when we try to do type of an array, it is not considered a datatype
// it is an object
console.log(typeof(a));

// array is not constrained to hold a single data type

let b = ['hello', 5, true];

console.log(b);

// if you try to access a non existing index it will tell you that its undefined
// theres no array out of index error
// you can also do the following:

b[10] = 89;
// this will actually work despite the fact that we only have 3 items in the array b
// it will add a value on the 9th index and the middle values will be empty.
console.log(b);

// to avoid doing this we can use push and pop on the array to only sequentially
// add and remove elements.



