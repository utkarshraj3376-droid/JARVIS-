// =====================================
// JARVIS AI v2.0
// script.js - Part 1
// =====================================

// ---------- Elements ----------

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");

const time = document.getElementById("time");
const date = document.getElementById("date");

const assistantName = document.getElementById("assistantName");
const assistantStatus = document.getElementById("assistantStatus");

const notification = document.getElementById("notification");

const novaMode = document.getElementById("novaMode");
const jarvisMode = document.getElementById("jarvisMode");

// ---------- Current Mode ----------

let currentMode = "JARVIS";

// ---------- Clock ----------

function updateClock(){

const now = new Date();

time.innerHTML = now.toLocaleTimeString();

date.innerHTML = now.toDateString();

}

setInterval(updateClock,1000);

updateClock();

// ---------- Notification ----------

function showNotification(text){

notification.innerHTML = text;

}

// ---------- Startup ----------

showNotification("🚀 JARVIS AI Started");

assistantStatus.innerHTML = "System Online";
// =====================================
// Part 2 - Mode Switching
// =====================================

novaMode.onclick = function(){

currentMode = "NOVA";

assistantName.innerHTML = "NOVA";

assistantStatus.innerHTML = "Friendly Mode Active";

novaMode.classList.add("active");

jarvisMode.classList.remove("active");

showNotification("💙 NOVA Mode Activated");

};

jarvisMode.onclick = function(){

currentMode = "JARVIS";

assistantName.innerHTML = "JARVIS";

assistantStatus.innerHTML = "Command Mode Active";

jarvisMode.classList.add("active");

novaMode.classList.remove("active");

showNotification("🤖 JARVIS Mode Activated");

};

// =====================================
// Chat Messages
// =====================================

function addMessage(sender,text){

const message=document.createElement("div");

message.className="message "+sender;

message.innerHTML=`

<div class="avatar">
${sender==="user" ? "🧑":"🤖"}
</div>

<div class="text">
${text}
</div>

`;

chatBox.appendChild(message);

chatBox.scrollTop=chatBox.scrollHeight;

}
// =====================================
// Part 3 - Send Message
// =====================================

sendBtn.onclick=function(){

const text=userInput.value.trim();

if(text==="") return;

addMessage("user",text);


userInput.value="";

};

userInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendBtn.click();

}

});


else{

addMessage("bot","I'm processing your request...");

}

}
// =====================================
// Part 4 - Google & YouTube Commands
// =====================================

function openGoogle(query){

window.open(
"https://www.google.com/search?q="+
encodeURIComponent(query),
"_blank"
);

}

function openYouTube(query){

window.open(
"https://www.youtube.com/results?search_query="+
encodeURIComponent(query),
"_blank"
);

}

function processCommand(command){

command = command.toLowerCase();

// Google Search
if(command.startsWith("google ")){

const search =
command.replace("google ","");

addMessage(
"bot",
"🌐 Searching Google for: <b>"+search+"</b>"
);

showNotification("Google Search");

openGoogle(search);

return;

}

// YouTube Search
if(command.startsWith("youtube ")){

const search =
command.replace("youtube ","");

addMessage(
"bot",
"▶️ Opening YouTube: <b>"+search+"</b>"
);

showNotification("YouTube Search");

openYouTube(search);

return;

}
  // =====================================
// Part 5 - AI Replies
// =====================================

// Time
if(command.includes("time")){

addMessage(
"bot",
"🕒 Current Time: "+
new Date().toLocaleTimeString()
);

return;

}

// Date
if(command.includes("date")){

addMessage(
"bot",
"📅 "+new Date().toDateString()
);

return;

}

// Hello
if (
    command.includes("hello") ||
    command.includes("hi") ||
    command.includes("hy") ||
    command.includes("hlo") ||
    command.includes("hey")
) {

    addMessage(
        "bot",
        currentMode === "NOVA"
        ? "😊 Hello Ankush! How can I help you today?"
        : "🤖 Greetings Ankush. Awaiting your command."
    );

    return;
}

return;

}

// Default Reply

addMessage(
"bot",
"sir kuch problem hai "

showNotification("Ready");

}
