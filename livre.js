// function afficherLivre() {
//     fetch("https://api.potterdb.com/v1/books/")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erreur HTTP " + response.status);
//         }
//         return response.json();
//       })
//       .then((livreDb) => {
//         console.log("Données récupérées depuis l'API :", livreDb);
  
//         const containLivre = document.querySelector(".containLivre");
  
//         livreDb.data.forEach((book) => {
//           console.log("Données du livre :", book);
  
//           if (book.attributes.title && book.attributes.cover) {
//             const blockLivre = document.createElement("div");
//             blockLivre.classList.add("blockLivre");
//             containLivre.appendChild(blockLivre);
  
//             const titleLivre = document.createElement("h2");
//             titleLivre.textContent = book.attributes.title;
//             blockLivre.appendChild(titleLivre);
  
//             const imageLivre = document.createElement("img");
//             imageLivre.src = book.attributes.cover;
//             blockLivre.appendChild(imageLivre);
//           }
//         });
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des données :", error);
//       });
      
//   }

  
//     const containLivre = document.querySelector(".containLivre");
//     const livre = document.querySelector("#livre");

//     livre.addEventListener("click", (e) => {
//       alert("aaaaaaa");

//       afficherLivre();
//     });
