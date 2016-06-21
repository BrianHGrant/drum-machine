$(document).ready(function() {

  highHat = new Sound("audio/HHOPEN2.wav");
  $("#high-hat").click(function(event) {
    highHat.stop();
    highHat.play();
  });
  bassDrum = new Sound("audio/BDRUM13.wav");
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

  $("#loop-btn").click(function(event){

    playInterval = setInterval(playLoop, 4000);

    // setTimeout(bassDrum.play(), 3000);

    // var loopArray = []
    // $('.checbox:checked').each(function () {
    //   loopArray.push($(this).val());
    // });
    // var playLoop = true;
    // console.log(playLoop);
    //   for(i=0;i<loopArray.length;i++) {
    //     if(playLoop === true) {
    //       if (loopArray[i]==="drumBass") {
    //         bassDrum.loopsound();
    //       }
    //       if (loopArray[i]==="highHat") {
    //         highHat.loopsound();
    //       }
    //     }
    //   }
  });
  $("#stop-loop-btn").click(function(event){
    // playLoop = false;
    // if(playLoop === false){
    //   bassDrum.stop();
    //   highHat.stop();
    // }
    clearInterval(playInterval);
  });

});

function playLoop() {
  setTimeout(playSound, 0);
  setTimeout(playSound2, 1000);
  setTimeout(playSound, 2000);
  setTimeout(playSound2, 3000);
}

function playSound() {
  bassDrum.play();
}

function playSound2() {
  highHat.play();
}

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    // this.play = function(){
    //   this.sound.loop = false;
    //   this.sound.play();
    // }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
    this.loopsound = function() {
      this.sound.loop = true;
      this.sound.play();
    }
};

Sound.prototype.play = function() {
  this.sound.loop = false;
  this.sound.play();
}
