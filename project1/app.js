const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const neutralFace = document.querySelector(".neutral");

// Add event listener
closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});

openFace.addEventListener("click", () => {
  if (neutralFace.classList.contains("neutral")) {
    neutralFace.classList.add("active");
    openFace.classList.remove("active");
  }
});

neutralFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    closedFace.classList.add("active");
    neutralFace.classList.remove("active");
  }
});
