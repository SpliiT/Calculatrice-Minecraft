function AjoutEcran(value) {
  document.getElementById("ecran").value += value;
}

function ClearEcran() {
  document.getElementById("ecran").value = "";
}

function Calculer() {
  let ecranValue = document.getElementById("ecran").value;
  let result = eval(ecranValue);
  document.getElementById("ecran").value = result;
}

function gererAppuiClavier(touche) {
  const bouton = document.getElementById(touche);
  if (bouton) {
    bouton.classList.add("clavier-active");
    setTimeout(() => bouton.classList.remove("clavier-active"), 200);
  }

  switch (touche) {
    case "Enter":
    case "=":
      Calculer();
      break;
    case "Backspace":
      document.getElementById("ecran").value = document
        .getElementById("ecran")
        .value.slice(0, -1);
      break;
    case "Escape":
      ClearEcran();
      break;
    case "C":
      ClearEcran();
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      AjoutEcran(touche);
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", function (event) {
  gererAppuiClavier(event.key);
});
