/** @format */

// /** @format */

// // Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// // Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// // S'assurer que les liens sont clickables

// // Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mousePointer = document.createElement("span");
mousePointer.classList.add("mousePointer", "circle");
document.body.appendChild(mousePointer);
console.log(mousePointer);

const littleCircle = document.createElement("span");
littleCircle.classList.add("littleCircle", "circle");
document.body.appendChild(littleCircle);
console.log(littleCircle);

const largeCircle = document.createElement("span");
largeCircle.classList.add("largeCircle", "circle");
document.body.appendChild(largeCircle);
console.log(largeCircle);

window.addEventListener("mousemove", (e) => {
  mousePointer.style.left = e.pageX + "px";
  mousePointer.style.top = e.pageY + "px";

  littleCircle.style.left = e.pageX + "px";
  littleCircle.style.top = e.pageY + "px";

  largeCircle.style.left = e.pageX + "px";
  largeCircle.style.top = e.pageY + "px";
});
