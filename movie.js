
function afficherFilm() {
    fetch("https://api.potterdb.com/v1/movies/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
      })
      .then((filmDb) => {
        console.log("Données récupérées depuis l'API :", filmDb);
  
        const containFilm = document.querySelector(".containFilm");
  
        filmDb.data.forEach((movie) => {
          console.log("Données du film :", movie);
  
          if (movie.attributes.title && movie.attributes.poster) {
            const blockFilm = document.createElement("div");
            blockFilm.classList.add("blockFilm");
            containFilm.appendChild(blockFilm);
  
            const titleFilm = document.createElement("h2");
            titleFilm.textContent = movie.attributes.title;
            blockFilm.appendChild(titleFilm);
  
            const imageFilm = document.createElement("img");
            imageFilm.src = movie.attributes.poster;
            blockFilm.appendChild(imageFilm);
          }
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
      imageBody.style.backgroundImage="url(images/movie.jpg)";
        imageBody.style.backgroundPosition="center";
        imageBody.style.backgroundSize="cover";
        imageBody.style.backgroundRepeat="no-repeat";
        imageBody.style.backgroundAttachment="scroll, local";
       document.body.appendChild(imageBody);
  }
  
  
  


const film = document.querySelector("#film");
const containFilm = document.querySelector(".containFilm");



film.addEventListener("click", ()=>{
    containPersonnages.style.display="none";
    quizContainer.style.display="none";
    containerPoudlard.style.display="none";
    containFilm.innerHTML="";
    containFilm.style.display="flex";
    
afficherFilm();
  
})

function removeAfficherFilm(){
    if(typeof afficherFilm){
        quiz.addEventListener("click", ()=> {
            containFilm.style.display = "none";
        })
        personnage.addEventListener("click", ()=> {
            containFilm.style.display = "none";

        })
        poudlard.addEventListener("click", ()=> {
            containFilm.style.display = "none";

        })

    } 
}

removeAfficherFilm();


