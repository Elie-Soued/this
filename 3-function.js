// Now let's try to see what happens in a regular function.

function playVideo(arg1, arg2, arg3) {
  console.log(this);
  console.log(arg1, arg2, arg3);
}

playVideo(1, 2, 3); // here this references to the global object.

// But why is this referencing the global object?
// In ES5 functions, this will reference to the execution context.
// In this example since function has been called in the global context, this will reference
// to the global object.

// In this case, if I want to bind "this" to an object, I can do it using call(), bind and apply.

let pilou = { name: "pilex", age: 35 };

playVideo.call(pilou, 1, 2, 3);
playVideo.bind(pilou)(1, 2, 3);

const arr = [1, 2, 3];

playVideo.apply(pilou, arr);
