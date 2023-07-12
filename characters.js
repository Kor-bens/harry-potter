function afficherPersonnage(e) {
  fetch(`https://api.potterdb.com/v1/characters/`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Erreur HTTP " + response.status);
      }
      return response.json();
    })
    .then((potterDb) => {
      const containPersonnage = document.querySelector(".containPersonnage");

      potterDb.data.forEach((character) => {
        if (
          character.attributes.slug.trim().length > 0 &&
          character.attributes.image != null &&
          character.attributes.born != null
        ) {
          const blockCharacter = document.createElement("div");
          blockCharacter.classList.add("blockCharacter");
          containPersonnage.appendChild(blockCharacter);

          const name = document.createElement("h2");
          name.textContent = character.attributes.slug;
          blockCharacter.appendChild(name);

          const image = document.createElement("img");
          image.src = character.attributes.image;
          blockCharacter.appendChild(image);

          const description = document.createElement("p");
          description.classList.add("description");
          description.innerHTML = `${character.attributes.name} est né le ${character.attributes.born}`;
          blockCharacter.appendChild(description);
        }
      });
    });
}

const containPersonnages = document.querySelector(".containPersonnage");

const personnage = document.querySelector("#personnage");

personnage.addEventListener("click", (e) => {
  containPersonnages.innerHTML = "";
  containPersonnages.style.display = "flex";
  afficherPersonnage();
});

function removeAfficherPersonnage() {
  if (typeof afficherPersonnage) {
    quiz.addEventListener("click", () => {
      containPersonnages.style.display = "none";
    });
  }
}

removeAfficherPersonnage();
