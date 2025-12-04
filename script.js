
let time = 1800; // 30 min

function startTimer() {
  setInterval(() => {
    const min = Math.floor(time / 60).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");

    document.getElementById("timer").innerText = `⏳ ${min}:${sec}`;

    if (time === 0) {
      alert("💀 Temps écoulé ! Le directeur vous a attrapés !");
      window.location.href = "index.html";
    }

    time--;
  }, 1000);
}

window.onload = startTimer;



function checkEnigma1() {
  const value = document.getElementById("e1").value.toLowerCase();

  if (value.includes("kinder") || value.includes("bueno")) {
    window.location.href = "enigma2.html";
  } else {
    alert("Mauvaise idée ! Le directeur ne bougera pas...");
    wrongAnswer();

  }
}

function checkEnigma2() {
  const value = document.getElementById("e2").value.toLowerCase();

  // 67 61 6D 70 75 73 = "campus"
  if (value === "campus") {
    window.location.href = "enigma3.html";
  } else {
    alert("Ce n'est pas le bon mot de passe… déchiffre bien l'indice !");
    wrongAnswer();

  }
}

function checkEnigma3() {
  const value = document.getElementById("e3").value;

  if (value === "1337") {
    window.location.href = "success.html";
  } else {    
    alert("Code incorrect !");
    wrongAnswer();
  }
}



function wrongAnswer() {
  const audio = new Audio("https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3");
  audio.play();

  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 500);
}


function typeConsole(text, speed = 30){
  let i = 0;
  const box = document.getElementById("console");
  const interval = setInterval(() => {
    box.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(interval);
  }, speed);
}

window.onload = () => {
  startTimer();
  if(document.getElementById("console")){
     typeConsole("Connexion au système...\nBypass du pare-feu...\nAccès autorisé.\n");
  }
};
