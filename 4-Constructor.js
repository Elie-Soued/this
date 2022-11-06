// What happens in a contructor function?
// The role of the new operator

function PlayVideo(title) {
  this.title = title;
  console.log(this);
}

const v = PlayVideo("hello");

/** If we don't use the new keyword, this will still reference the global object.
 * Reminder of what "new" does :
 * 1-Creates a new empty object
 * 2-Binds this to that object
 * 3-Returns that object
 */

const video = new PlayVideo("La 2min42 de Joe");

//PS: new is the fourth way to bind this to an object.
