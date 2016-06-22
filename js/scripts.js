$(document).ready(function() {

for(var i=1; i<6; i++){
  $(".instrument"+ i).append(
       '<label><input type="checkbox" class ="checbox0" name="instrument' + i +'"' +'value="instrument' + i
      +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox1" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox2" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox3" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox4" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox5" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox6" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'
      +'<label><input type="checkbox" class ="checbox7" name="instrument' + i +'"' +'value="instrument' + i +'"><span></span></label>'

  );
}

  var highHat = new Sound("audio/HHOPEN2.wav");
  $(".instrument2").click(function(event) {
    highHat.stop();
    highHat.play();
  });
  var bassDrum = new Sound("audio/BDRUM13.wav");
  $(".instrument3").click(function(event) {
    bassDrum.stop();
    bassDrum.play();
  });
  var snareDrum = new Sound("audio/SNARE12.wav");
  $(".instrument1").click(function(event) {
    snareDrum.stop();
    snareDrum.play();
  });
  var bongoDrum = new Sound("audio/BONGO1.wav");
  $(".instrument4").click(function(event) {
    bongoDrum.stop();
    bongoDrum.play();
  });
  var cymbalCrash = new Sound("audio/crash.mp3");
  $(".instrument5").click(function(event) {
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
    var bpm = parseInt($("#tempo").val());
    $("#loop-btn").hide();
    $("#stop-loop-btn").show();
    var currentLoop = new SoundLoop();
    for(i=0; i<8;i++) {
      $('.checbox' + i + ':checked').each(function () {
        if ($(this).val()==="instrument3") {
            currentLoop.sounds[i].push(bassDrum);
          }
        else if ($(this).val()==="instrument2") {
          currentLoop.sounds[i].push(highHat);
        }
        else if ($(this).val()==="instrument1") {
          currentLoop.sounds[i].push(snareDrum);
        }
        else if ($(this).val()==="instrument4"){
          currentLoop.sounds[i].push(bongoDrum);
        }
        else if ($(this).val()==="instrument5"){
          currentLoop.sounds[i].push(cymbalCrash);
        }
      });
    }
    if(bpm<60 || bpm>6000 || !bpm){
      $(".tooSmall").text("bpm has to be in range of 60-6000");
    }

    else{
      var tempo = 60000/ bpm;
      var loopTempo = tempo * 8;

      var playInterval = setInterval(function() {
        for(var j=0; j<8; j++){
          for (var i=0;i<currentLoop.sounds[j].length; i++) {
            if(currentLoop.sounds[j][i] === highHat){
              setTimeout(function() {highHat.play();}, j*tempo);
            }
            if (currentLoop.sounds[j][i] === bassDrum) {
              setTimeout(function () {bassDrum.play();}, j*tempo);
            }
            if (currentLoop.sounds[j][i] === snareDrum){
              setTimeout(function() {snareDrum.play();}, j*tempo);
            }
            if (currentLoop.sounds[j][i] === bongoDrum){
              setTimeout(function() {bongoDrum.play();}, j*tempo);
            }
            if (currentLoop.sounds[j][i] === cymbalCrash){
              setTimeout(function() {cymbalCrash.play();}, j*tempo);
            }
          }
        }
      }, loopTempo);
    }
    var tempo = 60000/ bpm;
    var loopTempo = tempo * 8;

    var playInterval = setInterval(function() {
      for(var j=0; j<8; j++){
        for (var i=0;i<currentLoop.sounds[j].length; i++) {
          if(currentLoop.sounds[j][i] === highHat){
            setTimeout(function() {highHat.play();}, j*tempo);
          }
          if (currentLoop.sounds[j][i] === bassDrum) {
            setTimeout(function () {bassDrum.play();}, j*tempo);
          }
          if (currentLoop.sounds[j][i] === snareDrum){
            setTimeout(function() {snareDrum.play();}, j*tempo);
          }
          if (currentLoop.sounds[j][i] === bongoDrum){
            setTimeout(function() {bongoDrum.play();}, j*tempo);
          }
          if (currentLoop.sounds[j][i] === cymbalCrash){
            setTimeout(function() {cymbalCrash.play();}, j*tempo);
          }
        }
      }
    }, loopTempo);
    $("#stop-loop-btn").click(function(event){
      clearInterval(playInterval);
      $("#loop-btn").show();
      $("#stop-loop-btn").hide();
    });
  });

});

// function playLoop() {
//   for(var j=0; j<8; j++){
//     for (var i=0;i<currentLoop.sounds[j].length; i++) {
//       if(currentLoop.sounds[j][i] === highHat){
//         setTimeout(highHatSound, j*250);
//       }
//       if (currentLoop.sounds[j][i] === bassDrum) {
//         setTimeout(bassSound, j*250);
//       }
//       if (currentLoop.sounds[j][i] === snareDrum){
//         setTimeout(snareSound, j*250);
//       }
//       if (currentLoop.sounds[j][i] === bongoDrum){
//         setTimeout(bongoSound, j*250);
//       }
//       if (currentLoop.sounds[j][i] === cymbalCrash){
//         setTimeout(cymbalSound, j*250);
//       }
//     }
//   }
// }

// function highHatSound() {
//   highHat.play();
// }
//
// function bassSound() {
//   bassDrum.play();
// }
//
// function snareSound() {
//   snareDrum.play();
// }
//
// function bongoSound() {
//   bongoDrum.play();
// }
//
// function cymbalSound() {
//   cymbalCrash.play();
// }

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
