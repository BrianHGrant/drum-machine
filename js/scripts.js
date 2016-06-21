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



    // setTimeout(bassDrum.play(), 3000);

    currentLoop = new SoundLoop();
    var firstPosition = [];
    $('.checbox:checked').each(function () {
      if ($(this).val()==="drumBass") {
          firstPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        firstPosition.push(highHat);
      }
      currentLoop.addSound(firstPosition);
    });

    var secondPosition = [];
    $('.checbox2:checked').each(function () {
      if ($(this).val()==="drumBass") {
          secondPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        secondPosition.push(highHat);
      }
      currentLoop.addSound(secondPosition);
    });

    var thirdPosition = [];
    $('.checbox3:checked').each(function () {
      if ($(this).val()==="drumBass") {
          thirdPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        thirdPosition.push(highHat);
      }
      currentLoop.addSound(thirdPosition);
    });

    var fourthPosition = [];
    $('.checbox4:checked').each(function () {
      if ($(this).val()==="drumBass") {
          fourthPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        fourthPosition.push(highHat);
      }
      currentLoop.addSound(fourthPosition);
    });

    playInterval = setInterval(playLoop, 1000);

    //     if(playLoop === true) {
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
  for (var i=0;i<currentLoop.sounds[0].length; i++) {
    if(currentLoop.sounds[0][i] === highHat){
      setTimeout(playSound2, 0);
    }
    if (currentLoop.sounds[0][i] === bassDrum) {
      setTimeout(playSound, 0);
    }
  }

  for (var i=0;i<currentLoop.sounds[1].length; i++) {
    if(currentLoop.sounds[1][i] === highHat){
      setTimeout(playSound2, 250);
    }
    if (currentLoop.sounds[1][i] === bassDrum) {
      setTimeout(playSound, 250);
    }
  }

  for (var i=0;i<currentLoop.sounds[2].length; i++) {
    if(currentLoop.sounds[2][i] === highHat){
      setTimeout(playSound2, 500);
    }
    if (currentLoop.sounds[2][i] === bassDrum) {
      setTimeout(playSound, 500);
    }
  }
  for (var i=0;i<currentLoop.sounds[3].length; i++) {
    if(currentLoop.sounds[3][i] === highHat){
      setTimeout(playSound2, 750);
    }
    if (currentLoop.sounds[3][i] === bassDrum) {
      setTimeout(playSound, 750);
    }
  }
  // setTimeout(playSound, 0);
  // setTimeout(playSound2, 1000);
  // setTimeout(playSound, 2000);
  // setTimeout(playSound2, 3000);
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

function SoundLoop() {
  this.sounds = [];
}

SoundLoop.prototype.addSound = function(sound) {
  this.sounds.push(sound);
}
