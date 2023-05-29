console.log("Bienvenido a mi página");

const enlacesHeader = document.querySelector(".enlaces-header");
const sorieketon = document.querySelector(".sorieketon");
let icoSorieketon = true;

function alternarSorieketon() {
  if (icoSorieketon) {
    sorieketon.style.color = "#fff";
  } else {
    sorieketon.style.color = "#000";
  }
  icoSorieketon = !icoSorieketon;

  enlacesHeader.classList.toggle("sorieketonopen");
}

sorieketon.addEventListener("click", alternarSorieketon);

enlacesHeader.addEventListener("click", function() {
  enlacesHeader.classList.toggle("sorieketonopen");
  sorieketon.style.color = "#000";
});