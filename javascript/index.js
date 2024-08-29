const icons = document.querySelectorAll(".col");

icons.forEach((icon) => {
  const nameTecnology = icon.querySelector(".name-tecnology");

  icon.addEventListener("mouseenter", () => {
    nameTecnology.style.display = "block";
  });

  icon.addEventListener("mouseleave", () => {
    nameTecnology.style.display = "none";
  });
});
