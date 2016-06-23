$(document).ready(function() {

  for(var i=1; i<6; i++){
    $(".instrument"+ i).append(
         '<label><input type="checkbox" class ="checbox0" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox1" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox2" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox3" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox4" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox5" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox6" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'
        +'<label><input type="checkbox" class ="checbox7" name="instrument' + i +'"value="instrument' + i +'"><span></span></label>'

    );
  }

  $("#show-drums").click(function(event) {
    $("#bgvid")[0].pause();
    $(".instruction").hide();
    $(".gridpage").show();
  });

  $("#show-instruction").click(function(event) {
    $("#bgvid")[0].play();
    $(".gridpage").hide();
    $(".instruction").show();
  });

  var highHat = new Sound("audio/HHOPEN2.wav");
  var bassDrum = new Sound("audio/BDRUM13.wav");
  var snareDrum = new Sound("audio/SNARE12.wav");
  var bongoDrum = new Sound("audio/BONGO1.wav");
  var cymbalCrash = new Sound("audio/crash.mp3");

  $(".instrument1").click(function(event) {
    highHat.play();
  });
  $(".instrument2").click(function(event) {
    bassDrum.play();
  });
  $(".instrument3").click(function(event) {
    snareDrum.play();
  });
  $(".instrument4").click(function(event) {
    bongoDrum.play();
  });
  $(".instrument5").click(function(event) {
    cymbalCrash.play();
  });

  $("body").keydown(function(event){
    if (event.keyCode === 81){
      highHat.play();
      $("#instrument1").addClass("selected");
    }
    if (event.keyCode === 87){
      bassDrum.play();
      $("#instrument2").addClass("selected");
    }

    if (event.keyCode === 69){
      snareDrum.play();
      $("#instrument3").addClass("selected");
    }

    if (event.keyCode === 82){
      bongoDrum.play();
      $("#instrument4").addClass("selected");
    }
    if (event.keyCode === 84){
      cymbalCrash.play();
      $("#instrument5").addClass("selected");
    }
  });

  $("body").keyup(function(event){
    if (event.keyCode === 81){
      $("#instrument1").removeClass("selected");
    }
    if (event.keyCode === 87){
      $("#instrument2").removeClass("selected");
    }

    if (event.keyCode === 69){
      $("#instrument3").removeClass("selected");
    }

    if (event.keyCode === 82){
      $("#instrument4").removeClass("selected");
    }
    if (event.keyCode === 84){
      $("#instrument5").removeClass("selected");
    }
  });

  $("#loop-btn").click(function(event){
    var bpm = parseInt($("#tempo").val());
    $("#loop-btn").hide();
    $("#stop-loop-btn").show();
    var currentLoop = new SoundLoop();
    for(i=0; i<8;i++) {
      $('.checbox' + i + ':checked').each(function () {
        if ($(this).val()==="instrument1") {
            currentLoop.sounds[i].push(highHat);
          }
        else if ($(this).val()==="instrument2") {
          currentLoop.sounds[i].push(bassDrum);
        }
        else if ($(this).val()==="instrument3") {
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
      $(".tooSmall").show();
      $(".tooSmall").text("BPM has to be in range of 60-6000");
      $("#stop-loop-btn").hide();
      $("#loop-btn").show();
    }

    else{
      $(".tooSmall").hide();
      var tempo = 60000/ bpm;
      var loopTempo = tempo * 8;
      playLoop(currentLoop, highHat, bassDrum, snareDrum, bongoDrum, cymbalCrash, tempo);
      var playInterval = setInterval(playLoop, loopTempo, currentLoop, highHat, bassDrum, snareDrum, bongoDrum, cymbalCrash, tempo);
    }

    $("#stop-loop-btn").click(function(event){
      clearInterval(playInterval);
      $(".tooSmall").text("");
      $("#tempo").val("");
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
    setTimeout(colorBack, j*tempo, j, "grey");
    setTimeout(colorBack, j*tempo+tempo, j, "");
    for (var i=0;i<currentLoop.sounds[j].length; i++) {
      setTimeout(playSound, j*tempo, currentLoop.sounds[j][i]);
    }
  }
}

function colorBack(j, color) {
  $(".checbox" + j +":input[type=checkbox]:checked ~ span").css("background-color", color);
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
