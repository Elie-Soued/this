// In this example since play is a method, this references the video object.

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play(); // {title : "a", play(){console.log(this)}}
