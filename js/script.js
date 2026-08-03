// js/script.js

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2000);

});


// Smooth Button Scroll

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    document.querySelector(".message").scrollIntoView({

        behavior: "smooth"

    });

});


// Image Click Animation

const photo = document.getElementById("photoClick");

photo.addEventListener("click", function () {

    photo.style.transform = "scale(1.15) rotate(5deg)";

    setTimeout(function () {

        photo.style.transform = "scale(1) rotate(0deg)";

    }, 500);

});


// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:0.15

}

);

sections.forEach((section)=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

observer.observe(section);

});


// Friendship Meter Animation

const fills=document.querySelectorAll(".fill");

const meterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.width="100%";

}

});

},

{

threshold:.5

}

);

fills.forEach((bar)=>{

bar.style.width="0";

bar.style.transition="2s";

meterObserver.observe(bar);

});


// Button Hover Sound Effect Placeholder

startBtn.addEventListener("mouseenter",()=>{

startBtn.style.boxShadow="0 0 30px rgba(255,255,255,.7)";

});

startBtn.addEventListener("mouseleave",()=>{

startBtn.style.boxShadow="none";

});


// Auto Greeting

setTimeout(()=>{

console.log("Welcome Sejal 💙");

},2500);


// Floating Background Movement

document.addEventListener("mousemove",(e)=>{

const stars=document.querySelector(".stars");

const x=e.clientX/80;

const y=e.clientY/80;

stars.style.transform=`translate(${x}px,${y}px)`;

});


// Double Click Photo

photo.addEventListener("dblclick",()=>{

photo.style.filter="brightness(120%)";

setTimeout(()=>{

photo.style.filter="brightness(100%)";

},600);

});


// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowDown"){

document.querySelector(".timeline").scrollIntoView({

behavior:"smooth"

});

}

});


// Prevent Right Click (Optional)

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});


// Footer Year

const year=new Date().getFullYear();

console.log("Created in",year);
