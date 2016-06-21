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
    //
    // if (event.keyCode === 82){
    //   highHat.loopsound();
    // }
    //
    // if (event.keyCode === 69){
    //   bassDrum.loopsound();
    // }

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
      else if ($(this).val()==="snareDrum") {
        firstPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        firstPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        firstPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        secondPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        secondPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        secondPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        thirdPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        thirdPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        thirdPosition.push(cymbalCrash);
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
      else if ($(this).val()==="snareDrum") {
        fourthPosition.push(snareDrum);
      }
      else if ($(this).val()==="bongoDrum"){
        fourthPosition.push(bongoDrum);
      }
      else if ($(this).val()==="cymbalCrash"){
        fourthPosition.push(cymbalCrash);
      }
      currentLoop.addSound(fourthPosition);
    });

    playInterval = setInterval(playLoop, 4000);

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
      setTimeout(highHatSound, 1000);
    }
    if (currentLoop.sounds[1][i] === bassDrum) {
      setTimeout(bassSound, 1000);
    }
    if (currentLoop.sounds[1][i] === snareDrum){
      setTimeout(snareSound, 1000);
    }
    if (currentLoop.sounds[1][i] === bongoDrum){
      setTimeout(bongoSound, 1000);
    }
    if (currentLoop.sounds[1][i] === cymbalCrash){
      setTimeout(cymbalSound, 1000);
    }
  }

  for (var i=0;i<currentLoop.sounds[2].length; i++) {
    if(currentLoop.sounds[2][i] === highHat){
      setTimeout(highHatSound, 2000);
    }
    if (currentLoop.sounds[2][i] === bassDrum) {
      setTimeout(bassSound, 2000);
    }
    if (currentLoop.sounds[2][i] === snareDrum){
      setTimeout(snareSound, 2000);
    }
    if (currentLoop.sounds[2][i] === bongoDrum){
      setTimeout(bongoSound, 2000);
    }
    if (currentLoop.sounds[2][i] === cymbalCrash){
      setTimeout(cymbalSound, 2000);
    }
  }
  for (var i=0;i<currentLoop.sounds[3].length; i++) {
    if(currentLoop.sounds[3][i] === highHat){
      setTimeout(highHatSound, 3000);
    }
    if (currentLoop.sounds[3][i] === bassDrum) {
      setTimeout(bassSound, 3000);
    }
    if (currentLoop.sounds[3][i] === snareDrum){
      setTimeout(snareSound, 3000);
    }
    if (currentLoop.sounds[3][i] === bongoDrum){
      setTimeout(bongoSound, 3000);
    }
    if (currentLoop.sounds[3][i] === cymbalCrash){
      setTimeout(cymbalSound, 3000);
    }
  }
  // setTimeout(playSound, 0);
  // setTimeout(playSound2, 1000);
  // setTimeout(playSound, 2000);
  // setTimeout(playSound2, 3000);
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
