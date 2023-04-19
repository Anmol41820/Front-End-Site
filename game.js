buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;

var started=false;
// var randomNumber
$(document).keypress(function(){
    if(!started)
    {
        $("h1").text("Level "+level);
        level++;
        nextSequence();
        started=true;
    }
    
});

function nextSequence(){
    userClickedPattern=[];
    
    $("h1").text("Level "+level);
    level++;

    var randomNumber= Math.floor((Math.random())*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    var ids = "#"+randomChosenColour;
    $(ids).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
}






$(".btn").on("click",handler);
function handler(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userChosenColour);
    makeSound(userChosenColour);
    animatePress(userChosenColour);
    // $("."+userChosenColour).animate({opacity: .2});

    checkAnswer(userClickedPattern.length -1);
}

function checkAnswer(currrentLevel){
    if(gamePattern[currrentLevel]===userClickedPattern[currrentLevel])
    {
        // console.log("Success");
        if(gamePattern.length === userClickedPattern.length)
        {
            setTimeout(function(){
                // userClickedPattern=[];
                nextSequence();
            },1000);
    
            
            
        }
    }
        
    else{
        console.log("wrong");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");

        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
            
        },200);

        startOver();
    }
}

function startOver(){
    
    gamePattern=[];
    
    // userClickedPattern=[];
    level=0;
    started=false;
    // $("h1").text("Level "+level);
    // level++;
    // nextSequence();
    
}


function animatePress(color){
    $("#"+color).addClass("pressed");
    
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
    
}



function makeSound(color)
{
    console.log(color);
    switch (color) {
        case "red":
            var audio1 = new Audio("sounds/red.mp3");
            audio1.play();
            break;
        case "green":
            var audio2 = new Audio("sounds/green.mp3");
            audio2.play();
            break;
        case "yellow":
            var audio3 = new Audio("sounds/yellow.mp3");
            audio3.play();
            break;
        case "blue":
            var audio4 = new Audio("sounds/blue.mp3");
            audio4.play();
            break;


        default:
            console.log("Invalid");
            break;
    }
}