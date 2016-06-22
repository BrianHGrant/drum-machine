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
  var snareDrum = new Sound("audio/SNARE12.wav");
  $("#snare-drum").click(function(event) {
    snareDrum.stop();
    snareDrum.play();
  });
  var bongoDrum = new Sound("audio/BONGO1.wav");
  $("#bongo-drum").click(function(event) {
    bongoDrum.stop();
    bongoDrum.play();
  });
  var cymbalCrash = new Sound("audio/crash.mp3");
  $("#cymbal-crash").click(function(event) {
    cymbalCrash.stop();
    cymbalCrash.play();
  });

  $("body").keydown(function(event){
    if (event.keyCode === 81){
      highHat.stop();
      highHat.play();
      $("#high-hat").css("background-color", "red");
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
  $("body").keydown(function(event){
    if (event.keyCode === 81){
      $("#high-hat").css("background-color", "grey");
    }
    if (event.keyCode === 87){
      $("#bass-drum").css("background-color", "grey");
    }

    if (event.keyCode === 69){
      $("#snare-drum").css("background-color", "grey");
    }

    if (event.keyCode === 82){
      $("#bongo-drum").css("background-color", "grey");
    }
    if (event.keyCode === 84){
      $("#cymbal-crash").css("background-color", "grey");
    }
  });
  $("body").keyup(function(event){
    if (event.keyCode === 81){
      $("#high-hat").css("background-color", "");
    }
    if (event.keyCode === 87){
      $("#bass-drum").css("background-color", "");
    }

    if (event.keyCode === 69){
      $("#snare-drum").css("background-color", "");
    }

    if (event.keyCode === 82){
      $("#bongo-drum").css("background-color", "");
    }
    if (event.keyCode === 84){
      $("#cymbal-crash").css("background-color", "");
    }
  });

  $("#loop-btn").click(function(event){
    var bpm = parseInt($("#tempo").val());
    $("#loop-btn").hide();
    $("#stop-loop-btn").show();
    var currentLoop = new SoundLoop();
    for(i=0; i<8;i++) {
      $('.checbox' + i + ':checked').each(function () {
        if ($(this).val()==="drumBass") {
            currentLoop.sounds[i].push(bassDrum);
          }
        else if ($(this).val()==="highHat") {
          currentLoop.sounds[i].push(highHat);
        }
        else if ($(this).val()==="snareDrum") {
          currentLoop.sounds[i].push(snareDrum);
        }
        else if ($(this).val()==="bongoDrum"){
          currentLoop.sounds[i].push(bongoDrum);
        }
        else if ($(this).val()==="cymbalCrash"){
          currentLoop.sounds[i].push(cymbalCrash);
        }
      });
    }

    var tempo = 60000/ bpm;
    var loopTempo = tempo * 8;


    playLoop(currentLoop, highHat, bassDrum, snareDrum, bongoDrum, cymbalCrash, tempo)
    var playInterval = setInterval(playLoop, loopTempo, currentLoop, highHat, bassDrum, snareDrum, bongoDrum, cymbalCrash, tempo);

    $("#stop-loop-btn").click(function(event){
      clearInterval(playInterval);
      $("#loop-btn").show();
      $("#stop-loop-btn").hide();
    });
  });

  $("#clear-checked").click(function(evet){
    for (i=0; i<8;i++){
      $('.checbox' + i + ':checked').each(function () {
         $(this).prop('checked', false);
      });
    }
  });      
});

function playLoop(currentLoop, highHat, bassDrum, snareDrum, bongoDrum, cymbalCrash, tempo) {
  for(var j=0; j<8; j++){
    for (var i=0;i<currentLoop.sounds[j].length; i++) {
      setTimeout(playSound, j*tempo, currentLoop.sounds[j][i])
    }
  }
}

function playSound(sound) {
  sound.play();
}

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
}

Sound.prototype.play = function() {
  this.sound.currentTime = 0;
  this.sound.durationTime = 250;
  this.sound.play();
}

Sound.prototype.stop = function() {
  this.sound.pause();
  this.sound.currentTime = 0;
}

function SoundLoop() {
  this.sounds = [];
  for(var i=0; i<8; i++){
    this.sounds[i] = [];
  }
}
