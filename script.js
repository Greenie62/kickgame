
var fieldGoalDOM = document.querySelector(".fieldGoal");
var sky = document.querySelector(".sky")
// var scaleSelect = document.querySelector(".scaleSelect");
var spotBtn = document.querySelector(".spotBtn");
var kickBtn = document.querySelector(".kickBtn");
var football = document.querySelector(".football");
var score = 0;
var scoreDOM = document.querySelector('.score');
var captionDOM = document.querySelector('.caption');
var hasSnapped = false;

var beamOne = document.querySelector(".beamOne");
var beamTwo = document.querySelector(".beamTwo");
var beamOneRect = beamOne.getBoundingClientRect();
var beamTwoRect = beamTwo.getBoundingClientRect();



let weather = confirm("Would you like blue skies?");

if(!weather){
    sky.classList.add('stormsky')
}

scoreDOM.innerHTML = score;

// scaleSelect.onchange=(e)=>scaleGoal(e);


// function scaleGoal(e){
  
//     fieldGoalDOM.style.transform=`scale(${e.target.value})`

//      beamOneRect = beamOne.getBoundingClientRect()
//      beamTwoRect = beamTwo.getBoundingClientRect()

//     console.log(beamOneRect,beamTwoRect)
// }




// var html = ""

//         html = 
//         `<option value=1.1>60yd kick</option>
//         <option value=1.2>55yd kick</option>
//         <option value=1.3>50yd kick</option>
//         <option value=1.4>45yd kick</option>
//         <option value=1.5>40yd kick</option>
//         <option value=1.6>35yd kick</option>
//         <option value=1.8>30yd kick</option>
//         <option value=1.9>25yd kick</option>
//         <option value=2.0>20yd kick</option>
//         `



// scaleSelect.innerHTML = html

let ballMove=20;
let kickInterval;

spotBtn.onclick=()=>{
    kickInterval=setInterval(startGame,50)
};



function startGame(){
    let left = parseInt(window.getComputedStyle(football).getPropertyValue('left'));

    left+=ballMove;

    if(left > 375 || left < -100){
        ballMove *= -1
    }

    football.style.left=`${left}px`
    console.log("Left: " + left)

    hasSnapped = true;

   
}

kickBtn.onclick=()=>{
    if(!hasSnapped){
        showCaption("You need to snap the ball \n (Hit the snap button)")
        return;
    }
    clearInterval(kickInterval);

    football.classList.add('kickball');

    setTimeout(()=>{
        football.classList.remove('kickball')
    },3000)


    let ballX = football.getBoundingClientRect();


    beamOneRect = beamOne.getBoundingClientRect()
    beamTwoRect = beamTwo.getBoundingClientRect()

console.log(ballX)
console.log(beamOneRect)
console.log(beamTwoRect)
    if(ballX.x > beamOneRect.x && ballX.x < beamTwoRect.x){
        console.log("Its good!!")
        score+=3;
        scoreDOM.innerHTML=score;
        showCaption("It's good!!")

        if(score > 17){
            alert("Congrats, you've kicked yourself a hot W! 😎🏈")
            setTimeout(()=>{window.location.reload()},1250);
        }
    }
    else{
        console.log("Its bad!!")
        showCaption("Ahhh, its wide! :(")
    }

    hasSnapped=false;
}


function showCaption(str){

    captionDOM.innerHTML = str;

    setTimeout(()=>{
        captionDOM.innerHTML = ""
    },2000)
}