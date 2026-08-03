// js/music.js

const music = document.getElementById("friendMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// ----------------------------
// Play / Pause
// ----------------------------

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="▶ Play Music";

}

});


// ----------------------------
// Volume
// ----------------------------

music.volume=0.45;


// ----------------------------
// Loop
// ----------------------------

music.loop=true;


// ----------------------------
// Fade In
// ----------------------------

function fadeIn(){

music.volume=0;

music.play();

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

if(volume>=0.45){

volume=0.45;

clearInterval(fade);

}

music.volume=volume;

},120);

}


// ----------------------------
// Fade Out
// ----------------------------

function fadeOut(){

let volume=music.volume;

const fade=setInterval(()=>{

volume-=0.02;

if(volume<=0){

volume=0;

music.pause();

clearInterval(fade);

playing=false;

musicBtn.innerHTML="▶ Play Music";

}

music.volume=volume;

},120);

}


// ----------------------------
// Auto Pause When Tab Hidden
// ----------------------------

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

music.pause();

}

});


// ----------------------------
// Resume
// ----------------------------

document.addEventListener("visibilitychange",()=>{

if(!document.hidden && playing){

music.play();

}

});


// ----------------------------
// Keyboard Shortcut
// Space = Play/Pause
// ----------------------------

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

musicBtn.click();

}

});


// ----------------------------
// Music End
// ----------------------------

music.addEventListener("ended",()=>{

music.currentTime=0;

music.play();

});


// ----------------------------
// Smooth Button Animation
// ----------------------------

setInterval(()=>{

if(playing){

musicBtn.style.transform="scale(1.05)";

setTimeout(()=>{

musicBtn.style.transform="scale(1)";

},500);

}

},1000);


// ----------------------------
// Optional Welcome Music
// (Uncomment if desired)
// ----------------------------

// window.addEventListener("load",()=>{
//     setTimeout(()=>{
//         fadeIn();
//         playing=true;
//         musicBtn.innerHTML="⏸ Pause Music";
//     },3000);
// });