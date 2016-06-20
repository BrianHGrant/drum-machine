$(document).ready(function() {

  var highHat = new Sound("audio/HHOPEN2.wav");
  $("#high-hat").click(function(event) {
    highHat.stop();
    highHat.play();
  });
  var bassDrum = new Sound("audio/BDRUM13.wav");
  $("#bass-drum").click(function(event) {
    bassDrum.stop();
    bassDrum.play();
  });

  $("body").keydown(function(event){
    if (event.keyCode === 81){
      highHat.stop();
      highHat.play();
    }
    if (event.keyCode === 87){
      bassDrum.stop();
      bassDrum.play();
    }

    if (event.keyCode === 82){
      highHat.loopsound();
    }

    if (event.keyCode === 69){
      bassDrum.loopsound();
    }

  });



});


function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function(){
      this.sound.loop = false;
      this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
    this.loopsound = function() {
      this.sound.loop = true;
      this.sound.play();
    }
};
