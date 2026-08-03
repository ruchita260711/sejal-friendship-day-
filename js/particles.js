// js/particles.js

const stars = document.querySelector(".stars");

const sparkles = document.querySelector(".sparkles");

const hearts = document.querySelector(".floating-hearts");


// -------------------------------
// Create Stars
// -------------------------------

for(let i=0;i<120;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.width=(Math.random()*3+1)+"px";

    star.style.height=star.style.width;

    star.style.animationDuration=(Math.random()*4+2)+"s";

    star.style.animationDelay=(Math.random()*5)+"s";

    stars.appendChild(star);

}


// -------------------------------
// Create Sparkles
// -------------------------------

for(let i=0;i<40;i++){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=Math.random()*100+"%";

    sparkle.style.top=Math.random()*100+"%";

    sparkle.style.fontSize=(Math.random()*15+12)+"px";

    sparkle.style.animationDuration=(Math.random()*5+3)+"s";

    sparkles.appendChild(sparkle);

}


// -------------------------------
// Floating Hearts
// -------------------------------

const heartEmoji=["💙","🤍","💜","💖","💕"];

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=heartEmoji[Math.floor(Math.random()*heartEmoji.length)];

    heart.style.left=Math.random()*100+"%";

    heart.style.bottom="-40px";

    heart.style.fontSize=(Math.random()*20+18)+"px";

    heart.style.animationDuration=(Math.random()*5+5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

},500);


// -------------------------------
// CSS From JavaScript
// -------------------------------

const style=document.createElement("style");

style.innerHTML=`

.star{

position:absolute;

background:white;

border-radius:50%;

animation:twinkle infinite;

opacity:.8;

}

.sparkle{

position:absolute;

animation:sparkFloat linear infinite;

}

.heart{

position:absolute;

animation:heartFloat linear forwards;

pointer-events:none;

}

@keyframes twinkle{

0%{

opacity:.2;

transform:scale(.8);

}

50%{

opacity:1;

transform:scale(1.5);

}

100%{

opacity:.2;

transform:scale(.8);

}

}

@keyframes sparkFloat{

0%{

opacity:0;

transform:translateY(20px);

}

50%{

opacity:1;

}

100%{

opacity:0;

transform:translateY(-120px);

}

}

@keyframes heartFloat{

0%{

opacity:0;

transform:translateY(0) rotate(0deg);

}

20%{

opacity:1;

}

100%{

opacity:0;

transform:translateY(-120vh) rotate(360deg);

}

}

`;

document.head.appendChild(style);


// -------------------------------
// Mouse Sparkle Trail
// -------------------------------

document.addEventListener("mousemove",(e)=>{

    const dot=document.createElement("div");

    dot.innerHTML="✨";

    dot.style.position="fixed";

    dot.style.left=e.clientX+"px";

    dot.style.top=e.clientY+"px";

    dot.style.pointerEvents="none";

    dot.style.fontSize="14px";

    dot.style.transition="1s";

    document.body.appendChild(dot);

    setTimeout(()=>{

        dot.style.opacity="0";

        dot.style.transform="translateY(-25px)";

    },20);

    setTimeout(()=>{

        dot.remove();

    },1000);

});