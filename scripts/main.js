const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/firefox-icon.png") {
    monImage.setAttribute("src", "images/Antoine_Griezmann_World_Cup_Trophy.jpg");
  } else {
    monImage.setAttribute("src", "images/firefox-icon.png");
  }
});


let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");

function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitre.textContent = `Mozilla est génial, ${monNom}`;
  }
}

if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitre.textContent = `Mozilla est génial, ${nomEnregistre}`;
}

monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});