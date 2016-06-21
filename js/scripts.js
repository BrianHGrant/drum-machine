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

  });

  $("#loop-btn").click(function(event){

    currentLoop = new SoundLoop();
    var firstPosition = [];
    $('.checbox:checked').each(function () {
      if ($(this).val()==="drumBass") {
          firstPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        firstPosition.push(highHat);
      }
    });
    currentLoop.addSound(firstPosition);

    var secondPosition = [];
    $('.checbox2:checked').each(function () {
      if ($(this).val()==="drumBass") {
          secondPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        secondPosition.push(highHat);
      }
    });
    currentLoop.addSound(secondPosition);

    var thirdPosition = [];
    $('.checbox3:checked').each(function () {
      if ($(this).val()==="drumBass") {
          thirdPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        thirdPosition.push(highHat);
      }
    });
    currentLoop.addSound(thirdPosition);

    var fourthPosition = [];
    $('.checbox4:checked').each(function () {
      if ($(this).val()==="drumBass") {
          fourthPosition.push(bassDrum);
        }
      else if ($(this).val()==="highHat") {
        fourthPosition.push(highHat);
      }
    });
    currentLoop.addSound(fourthPosition);

    playInterval = setInterval(playLoop, 4000);

  });
  $("#stop-loop-btn").click(function(event){
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
      setTimeout(playSound2, 1000);
    }
    if (currentLoop.sounds[1][i] === bassDrum) {
      setTimeout(playSound, 1000);
    }
  }

  for (var i=0;i<currentLoop.sounds[2].length; i++) {
    if(currentLoop.sounds[2][i] === highHat){
      setTimeout(playSound2, 2000);
    }
    if (currentLoop.sounds[2][i] === bassDrum) {
      setTimeout(playSound, 2000);
    }
  }
  for (var i=0;i<currentLoop.sounds[3].length; i++) {
    if(currentLoop.sounds[3][i] === highHat){
      setTimeout(playSound2, 3000);
    }
    if (currentLoop.sounds[3][i] === bassDrum) {
      setTimeout(playSound, 3000);
    }
  }
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
