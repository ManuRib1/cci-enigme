
function checkEnigma1() {
  const value = document.getElementById("e1").value.toLowerCase();

  if (value.includes("kinder") || value.includes("bueno")) {
    window.location.href = "enigma2.html";
  } else {
    alert("Mauvaise idée ! Le directeur ne bougera pas...");
  }
}

function checkEnigma2() {
  const value = document.getElementById("e2").value.toLowerCase();

  // 67 61 6D 70 75 73 = "campus"
  if (value === "campus") {
    window.location.href = "enigma3.html";
  } else {
    alert("Ce n'est pas le bon mot de passe… déchiffre bien l'indice !");
  }
}

function checkEnigma3() {
  const value = document.getElementById("e3").value;

  if (value === "1337") {
    window.location.href = "success.html";
  } else {
    alert("Code incorrect !");
  }
}
