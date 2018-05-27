// //declaring functions

// function sayHello(){
//     console.log('----------------');
//     console.log('Hello There');
//     console.log('----------------');
// }

// // we can invoke the function simply as such:

// sayHello();

// // furthermore we can also assign variables a reference of the function as such: 
// // note that although sayHello() is not returning anything we can simply reference
// // it through 'a'

// let a = sayHello();
// a;

// // otherwise parameters and arguments of functions work the same way as in java
// // returning values is also the same as java

// we can also pass in functions as arguments to other functions:
// here is an example of function that waits a certain amount of time

/*
setTimeout(function () {
    console.log('I waited 2 seconds');
},2000);
*/

// here is how we create a recursive counter function:

let counter = 0;
function timeout (){
    setTimeout(function(){
        console.log('HI '+ counter++);
        timeout();
    },2000)

    
}

timeout();






