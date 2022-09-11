var buttoncolor=["red", "green","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
//to change" press any key to start" to a" level" , created a function
$(document).keypress(function() {
    if (!started) {
      $("#title-1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
var userChosen=$(this).attr("id");

userClickedPattern.push(userChosen);
playSound(userChosen);
checkAnswer(userClickedPattern.length-1);
});
 function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        
        if (gamePattern.length===userClickedPattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
            
        }

    }
    else{
        playSound("Wrong");
        $("body").addClass("game-over");
        $("#title-1").text("game over , press any key to restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
 }
function nextSequence(){
    userClickedPattern=[];//userclicked array raedy for next level
    // increasing level by one each time 
    level++;

    $("#title-1").text("Level" + level);

    var randomcolor=Math.floor(Math.random()*4);
    var randomChosenColor=buttoncolor[randomcolor];
    gamePattern.push(randomChosenColor);

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColor);
}
function playSound(name) {
// to add sound to colors 
    var audio = new Audio( name + ".mp3");
    audio.play();
}
function animatePress(currentcolor){
    $("#" + currentcolor).addClass("pressed");

setTimeout(function(){
    $("#" + currentcolor).removeClass("pressed");
},100);
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
