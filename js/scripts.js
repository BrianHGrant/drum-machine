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
  snareDrum = new Sound("audio/SNARE12.wav");
  $("#snare-drum").click(function(event) {
    snareDrum.stop();
    snareDrum.play();
  });
  bongoDrum = new Sound("audio/BONGO1.wav");
  $("#bongo-drum").click(function(event) {
    bongoDrum.stop();
    bongoDrum.play();
  });
  cymbalCrash = new Sound("audio/crash.mp3");
  $("#cymbal-crash").click(function(event) {
    cymbalCrash.stop();
    cymbalCrash.play();
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

    if (event.keyCode === 69){
      snareDrum.stop();
      snareDrum.play();
    }

    if (event.keyCode === 82){
      bongoDrum.stop();
      bongoDrum.play();
    }
    if (event.keyCode === 84){
      cymbalCrash.stop();
      cymbalCrash.play();
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
      else if ($(this).val()==="snareDrum") {
        firstPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        firstPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        firstPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        secondPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        secondPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        secondPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        thirdPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        thirdPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        thirdPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        fourthPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        fourthPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        fourthPosition.push(cymbalCrash);
      }
    });
    currentLoop.addSound(fourthPosition);

    playInterval = setInterval(playLoop, 1000);

  });
  $("#stop-loop-btn").click(function(event){
    clearInterval(playInterval);
  });

});

function playLoop() {
  for (var i=0;i<currentLoop.sounds[0].length; i++) {
    if(currentLoop.sounds[0][i] === highHat){
      setTimeout(highHatSound, 0);
    }
    if (currentLoop.sounds[0][i] === bassDrum) {
      setTimeout(bassSound, 0);
    }
    if (currentLoop.sounds[0][i] === snareDrum){
      setTimeout(snareSound, 0);
    }
    if (currentLoop.sounds[0][i] === bongoDrum){
      setTimeout(bongoSound, 0);
    }
    if (currentLoop.sounds[0][i] === cymbalCrash){
      setTimeout(cymbalSound, 0);
    }
  }

  for (var i=0;i<currentLoop.sounds[1].length; i++) {
    if(currentLoop.sounds[1][i] === highHat){
      setTimeout(highHatSound, 250);
    }
    if (currentLoop.sounds[1][i] === bassDrum) {
      setTimeout(bassSound, 250);
    }
    if (currentLoop.sounds[1][i] === snareDrum){
      setTimeout(snareSound, 250);
    }
    if (currentLoop.sounds[1][i] === bongoDrum){
      setTimeout(bongoSound, 250);
    }
    if (currentLoop.sounds[1][i] === cymbalCrash){
      setTimeout(cymbalSound, 250);
    }
  }

  for (var i=0;i<currentLoop.sounds[2].length; i++) {
    if(currentLoop.sounds[2][i] === highHat){
      setTimeout(highHatSound, 500);
    }
    if (currentLoop.sounds[2][i] === bassDrum) {
      setTimeout(bassSound, 500);
    }
    if (currentLoop.sounds[2][i] === snareDrum){
      setTimeout(snareSound, 500);
    }
    if (currentLoop.sounds[2][i] === bongoDrum){
      setTimeout(bongoSound, 500);
    }
    if (currentLoop.sounds[2][i] === cymbalCrash){
      setTimeout(cymbalSound, 500);
    }
  }
  for (var i=0;i<currentLoop.sounds[3].length; i++) {
    if(currentLoop.sounds[3][i] === highHat){
      setTimeout(highHatSound, 750);
    }
    if (currentLoop.sounds[3][i] === bassDrum) {
      setTimeout(bassSound, 750);
    }
    if (currentLoop.sounds[3][i] === snareDrum){
      setTimeout(snareSound, 750);
    }
    if (currentLoop.sounds[3][i] === bongoDrum){
      setTimeout(bongoSound, 750);
    }
    if (currentLoop.sounds[3][i] === cymbalCrash){
      setTimeout(cymbalSound, 750);
    }
  }
}

function bassSound() {
  bassDrum.play();
}

function highHatSound() {
  highHat.play();
}

function snareSound() {
  snareDrum.play();
}

function bongoSound() {
  bongoDrum.play();
}

function cymbalSound() {
  cymbalCrash.play();
}

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
};

Sound.prototype.play = function() {
  this.sound.currentTime = 0;
  this.sound.durationTime = 250;
  this.sound.play();

}

function SoundLoop() {
  this.sounds = [];
}

SoundLoop.prototype.addSound = function(sound) {
  this.sounds.push(sound);
}
