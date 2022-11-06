class PlayVideo {
  constructor(title) {
    this.title = title;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("arrow function =>", this.title);
    }, 100);
  }

  printNameNormal() {
    setTimeout(function () {
      console.log("normal function =>", this.title);
    }, 100);
  }
}

let video = new PlayVideo("la 2min42 de Joe");

video.printNameArrow(); // la 2min42 de Joe
video.printNameNormal(); // undefined

/** As we mentioned in 3-functions, for ES5 functions the defintion of this will depend of the execution context.
 * Since video.printNameNormal() is called in the global context, this will refer to the global object.
 * In contrast, arrow function do not define this depending on the execution context of the function.
 */
