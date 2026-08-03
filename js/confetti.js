// js/confetti.js

const targetPhoto = document.getElementById("photoClick");

// ----------------------------
// Confetti Colors
// ----------------------------

const colors = [
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff",
"#c77dff",
"#4cc9f0",
"#90ee90"
];

// ----------------------------
// Create Confetti
// ----------------------------

function createConfetti(x, y){

    for(let i=0;i<180;i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        document.body.appendChild(piece);

        piece.style.left = x + "px";
        piece.style.top = y + "px";

        piece.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.width =
        Math.random()*10+6+"px";

        piece.style.height =
        Math.random()*10+6+"px";

        const angle=Math.random()*360;

        const distance=Math.random()*450+100;

        const dx=Math.cos(angle)*distance;

        const dy=Math.sin(angle)*distance;

        piece.animate(

        [

        {

        transform:"translate(0,0) rotate(0deg)",

        opacity:1

        },

        {

        transform:
        `translate(${dx}px,${dy}px)
        rotate(${Math.random()*720}deg)`,

        opacity:0

        }

        ],

        {

        duration:3000,

        easing:"cubic-bezier(.2,.8,.2,1)"

        }

        );

        setTimeout(()=>{

            piece.remove();

        },3000);

    }

}

// ----------------------------
// Click Effect
// ----------------------------

targetPhoto.addEventListener("click",(e)=>{

    const rect=targetPhoto.getBoundingClientRect();

    const x=rect.left+rect.width/2;

    const y=rect.top+rect.height/2;

    createConfetti(x,y);

});


// ----------------------------
// Welcome Confetti
// ----------------------------

window.addEventListener("load",()=>{

setTimeout(()=>{

createConfetti(

window.innerWidth/2,

window.innerHeight/2

);

},2500);

});


// ----------------------------
// Floating Balloons
// ----------------------------

function balloon(){

const balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.className="balloon";

balloon.style.left=Math.random()*100+"vw";

balloon.style.fontSize=
(Math.random()*20+30)+"px";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

setInterval(balloon,2500);


// ----------------------------
// CSS
// ----------------------------

const confettiStyle=document.createElement("style");

confettiStyle.innerHTML=`

.confetti{

position:fixed;

border-radius:2px;

pointer-events:none;

z-index:99999;

}

.balloon{

position:fixed;

bottom:-100px;

animation:flyBalloon 12s linear forwards;

pointer-events:none;

z-index:999;

}

@keyframes flyBalloon{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-130vh);

opacity:0;

}

}

`;

document.head.appendChild(confettiStyle);