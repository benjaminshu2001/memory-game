//global constants
const cluePauseTime = 200; // time to pause between clues
const nextClueWaitTime = 500; //how long to wait before starting playtback of the clue sequence

//global variables
//var pattern = [5, 3, 1, 5, 4, 2, 4, 2, 6, 4, 3, 1];
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2; //between 0 and 1.0
var guessCounter = 0;
var clueHoldTime = 500;
var chances = 2;
var time = 60;

function startGame() {
  //initialize vars
  progress = 0;
  gamePlaying = true;
  pattern = [];
  chances = 2;
  var timer = setInterval(countDown, 1000);
  for(let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 5 + 1));
  }
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("chances").innerHTML = "Chances: " + chances;
  document.getElementById("time").innerHTML;
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  time = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats, you won!");
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + (delay - 50) + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime - 20;
    clueHoldTime -= 10;
  }
}
//Clock
if(gamePlaying == true) {
  var timer = setInterval(countDown, 1000);
}

function countDown() {
  if(time == -1) {
    clearInterval(timer);
    return;    
  }
  else {
    document.getElementById("time").innerHTML = time + ' seconds remaining.';
    time--;
  }
}

//Logic
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) {
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
    else {
      chances--;
      document.getElementById("chances").innerHTML = "Chances: " + chances;
      playClueSequence();
      if(chances == 0) {
        document.getElementById("chances").innerHTML = "Chances: " + chances;
        setTimeout(function() {
          loseGame();
        }, 100);       
      }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 225,
  3: 250,
  4: 270,
  5: 295,
  6: 190
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
