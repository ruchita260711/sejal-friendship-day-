// js/typewriter.js

const text = "Happy Friendship Day 💙";

const typingElement = document.getElementById("typing");

let index = 0;
let deleting = false;

function typeWriter() {

    if (!deleting) {

        typingElement.innerHTML = text.substring(0, index);

        index++;

        if (index > text.length) {

            deleting = true;

            setTimeout(typeWriter, 2000);

            return;
        }

    } else {

        typingElement.innerHTML = text.substring(0, index);

        index--;

        if (index < 0) {

            deleting = false;

            index = 0;
        }

    }

    setTimeout(typeWriter, deleting ? 60 : 120);

}

window.addEventListener("load", () => {

    typeWriter();

});


// Cursor

const cursor = document.createElement("span");

cursor.innerHTML = "|";

cursor.style.marginLeft = "3px";

cursor.style.animation = "blink .8s infinite";

typingElement.after(cursor);


// Cursor Animation

const style = document.createElement("style");

style.innerHTML = `

@keyframes blink{

0%{
opacity:1;
}

50%{
opacity:0;
}

100%{
opacity:1;
}

}

`;

document.head.appendChild(style);


// Greeting Changes

const greetings = [

"Happy Friendship Day 💙",

"Thank You Sejal 🌸",

"Keep Smiling 😊",

"Best Friends Forever ✨",

"You Are Amazing 🌈"

];

let greetingIndex = 0;

setInterval(() => {

    greetingIndex++;

    if (greetingIndex >= greetings.length) {

        greetingIndex = 0;

    }

    typingElement.innerHTML = greetings[greetingIndex];

}, 9000);