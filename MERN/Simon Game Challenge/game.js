var level = 0;
var started = false;
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = []

$(document).keypress(function (e) { 
    if (!started){
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
});

function nextSequence () {
    userClickedPattern = []
    level++;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

$('.btn').click(function() {
    var userChosenColour = $(this).attr('id');
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    } else {
        console.log("wrong");
        playsound("wrong")
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass('game-over');
        }, 200);
        $("h1").text("Game-over, press a key to start again!")
        startOver()
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function animatePress(currentColour){
    $("#"+currentColour).addClass('pressed');
    setTimeout(function() {
        $("#"+currentColour).removeClass('pressed');
    }, 100);
}

function playsound(soundname){
    var audio = new Audio("sounds/" + soundname + ".mp3");
    audio.play();
}