let poudlard = document.querySelector('#poudlard');

let containerPoudlard = document.createElement("div");
containerPoudlard.classList.add("containerPoudlard");
let paragraphePoudlard = document.createElement("p");
paragraphePoudlard.classList.add("paragraphePoudlard");
containerPoudlard.appendChild(paragraphePoudlard);
let imgBlason = document.createElement("img");
 imgBlason.classList.add("imgBlason");
    imgBlason.src="images/blason.jpg";
// const paragraphePoudlard2 = document.createElement("p");
// paragraphePoudlard2.classList.add("paragraphePoudlard");
// containerPoudlard.appendChild(paragraphePoudlard2);
// const paragraphePoudlard3 = document.createElement("p");
// paragraphePoudlard3.classList.add("paragraphePoudlard");
// containerPoudlard.appendChild(paragraphePoudlard3);

function afficherPoudlard(){

    paragraphePoudlard.innerHTML=`Il y a plus de mille ans, les sorciers souffraient d'incompréhension et de peur de la part de personnes dépourvues de pouvoirs magiques, nommées Moldus. Quatre sorciers exceptionnellement doués — Godric Gryffondor, Helga Poufsouffle, Rowena Serdaigle et Salazar Serpentard — décidèrent de fonder une école de magie permettant d'offrir un refuge aux sorciers persécutés et de léguer leur savoir19. Rowena Serdaigle rêva d'un cochon verruqueux la conduisant sur une falaise des Highlands20,Note 2. Les quatre amis se rendirent sur place et trouvèrent l'emplacement approprié pour y construire le château destiné à abriter l'école. Ils le nommèrent Poudlard (« Pou-du-lard ») en référence au curieux animal rêvé par Serdaigle20, puis partirent en quête de personnes possédant les aptitudes nécessaires pour enseigner la magie.
    Comme les ambitions des quatre fondateurs commencèrent à différer concernant le choix des élèves admis et les matières enseignées, l'école fut scindée en quatre maisons distinctes. Afin de choisir le plus justement possible dans quelle maison serait envoyé chaque élève, Gryffondor décida d'utiliser son chapeau — rebaptisé « Choixpeau » — que chacun des fondateurs ensorcela en y intégrant une petite partie de son esprit21. Cet enchantement permit de procéder à la première cérémonie de la répartition.
    Rapidement, Rowena Serdaigle mit au point les différentes pièces changeantes de Poudlard telles que la Salle sur demande, ainsi que les escaliers mouvantsNote 3. Sa fille, Helena, devint jalouse de son incroyable intelligence. Elle lui vola son précieux diadème aux pouvoirs extraordinaires et prit la fuite jusqu'en Albanie où elle cacha l'objet23. Un fait que Rowena Serdaigle ne raconta pas aux autres fondateurs24. Elle demanda à un baron de ramener sa fille, mais l'homme poignarda Helena dans un accès de rage lorsqu'elle refusa de le suivre, puis, rongé par la culpabilité, mit lui-même fin à ses jours24. Depuis, le fantôme du « Baron Sanglant » hante la maison Serpentard, tandis que le fantôme d'Helena, surnommé « Dame Grise », occupe la maison de Serdaigle, parcourant les couloirs de l’école en silence. Quant au diadème, il demeura en Albanie durant plusieurs siècles sans que personne connaisse sa cachette23.`
    // paragraphePoudlard2.innerHTML = `Salazar Serpentard ne tarda pas à refuser catégoriquement l'admission de nés-Moldus (enfants sorciers nés de parents moldus) au sein de l'école, les jugeant indignes d'étudier la magie19. Une idée à laquelle Gryffondor s’opposa fermement et les tensions entre les fondateurs s'intensifièrent. Poufsouffle et Serdaigle se rangèrent du côté de Gryffondor24, et Serpentard quitta l'école, après avoir construit à l'insu de tous une pièce dans les profondeurs du château, la Chambre des secrets, abritant un gigantesque basilic que seul son héritier serait à même de contrôler19. Depuis cette époque, les tensions entre les élèves des maisons Gryffondor et Serpentard persistent, mais durant plusieurs siècles, la Chambre demeura secrète et le monstre endormi.`
    
    document.body.appendChild(containerPoudlard);
    containerPoudlard.prepend(imgBlason);
    
    imageBody.style.backgroundImage="url(images/poudlard2.jpg)";
        imageBody.style.backgroundPosition="center";
        imageBody.style.backgroundSize="cover";
        imageBody.style.backgroundRepeat="no-repeat";
        imageBody.style.backgroundAttachment="scroll, local";
       document.body.appendChild(imageBody);

}

let audio = null;

poudlard.addEventListener("click", () => {
    containPersonnages.style.display = "none";
    quizContainer.style.display = "none";
    paragraphePoudlard.style.lineHeight="3vh";
    paragraphePoudlard.style.padding="2vw";
    // paragraphePoudlard2.style.lineHeight="3vh";
    // paragraphePoudlard2.style.padding="2vw";
    // paragraphePoudlard2.style.marginTop="1px";
    
    if (audio === null || audio.paused){
    
    if (audio === null) {
        // Si l'audio n'a pas encore été créé
        audio = new Audio('audio/harryPotter.mp3');
    }
    
    audio.play(); // Lancer l'audio
}
   
    containerPoudlard.style.display="flex";
    // paragraphePoudlard2.innerHTML="";

afficherPoudlard();
})



function removeAfficherPoudlard(){
    if(typeof afficherPoudlard){
        quiz.addEventListener("click", ()=> {
            containerPoudlard.style.display = "none";
        })
        personnage.addEventListener("click", ()=> {
            containerPoudlard.style.display = "none";

        })

    } 
}

// document.addEventListener('click', function(event) {
//     const lightningContainer = document.getElementById('lightning');
    
//     for (let i = 0; i < 3; i++) {
//       const lightning = document.createElement('img');
//       lightning.src = 'chemin/vers/votre/image-de-foudre.png'; // Remplacez par le chemin vers votre image de foudre
    //   lightning.classList.add('lightning');
      
      // Positionnement des foudres autour du curseur
//       const xOffset = (Math.random() - 0.5) * 40;
//       const yOffset = (Math.random() - 0.5) * 40;
//       lightning.style.left = (event.clientX + xOffset) + 'px';
//       lightning.style.top = (event.clientY + yOffset) + 'px';
      
//       lightningContainer.appendChild(lightning);
      
//       setTimeout(function() {
//         lightning.remove();
//       }, 1000);
//     }
//   });

removeAfficherPoudlard();
