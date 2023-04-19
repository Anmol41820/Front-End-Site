var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",clicked);

    function clicked(){
        // alert("I got clicked "+i);
        var str="sounds/tom-1.mp3";
        // console.log(str);
        var audio = new Audio(str);
        audio.play();

        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML);

    }
}

document.addEventListener("keypress",function(event){
    // console.log(event);
    makeSound(event.key);
    btnAnimation(event.key);
});


function makeSound(key)
{
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-0.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/tom-1.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/tom-2.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/tom-3.mp3");
            audio4.play();
            break;

        case "j":
            var audio5 = new Audio("sounds/tom-4.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/tom-5.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/tom-6.mp3");
            audio7.play();
            break;


        default:
            console.log("Invalid key, Please press->w,a,s,d,j,k or l")
            break;
    }
}

function btnAnimation(key){
    var addClass = document.querySelector("."+key);

    addClass.classList.add("pressed");

    setTimeout(function(){
        addClass.classList.remove("pressed")
    },100);
}