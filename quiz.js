let questions = [{
    question: "Combien de fois Dudley saute-t-il sur l'escalier afin de réveiller Harry Potter dans le tout premier film ?",
    choices: ["Une fois", "Trois fois", "Six fois", "Huit fois"],
    correct: 2
},
{
    question: "Pourquoi Dobby se met-il à pleurer dans la chambre de Harry dans le second film ?",
    choices: ["Harry lui a proposé d'être son ami", "Harry lui a proposé à boire", "Harry lui a proposé à manger", "Harry lui a proposé de s'asseoir"],
    correct: 3
},
{
    question: "Quel sortilège Lupin lance-t-il à Harry lorsqu'il le retrouve aux côtés de Sirius Black dans la Cabane Hurlante durant le troisième film ?",
    choices: ["Accio", "Expelliarmus", "Petrificus totalus", "Flipendo"],
    correct: 1
},
{
    question: "A qui Fred et George ont-ils piqué la Carte du Maraudeur ?",
    choices: ["Rusard", "Hermione", "Dudley", "Sirius"],
    correct: 0,
},
{
    question: "Dans le quatrième film, que demande Parvati Patil à Harry juste avant de danser avec lui ?",
    choices: ["De la prendre par la taille", "De lui donner un baiser sur la main", "De l'enlacer", "De lui faire un sourire"],
    correct: 0,
},
{
    question: "A quel âge Sirius Black s'est-il enfui de la maison de ses parents ?",
    choices: ["13 ans", "16 ans", "18 ans", "20 ans"],
    correct: 1,
},
{
    question: "Qui soigne Drago après que Harry Potter lui a jeté le sort Sectumsempra dans Le Prince de Sang-Mêlé ?",
    choices: ["Dumbledore", "Gilderoy Lockhart", "Rogue", "Chourave"],
    correct: 3,
},
{
    question: "Avec quel bois la baguette de Lucius est-elle faite ?",
    choices: ["Du bois de bouleau", "Du bois mortifère", "Du bois d'orme", "Du bois de vigne"],
    correct: 2,
}
];

let images = [{image:"images/q1.jpg"},{image:"images/q2.jpg"},{image:"images/q3.jpg"},{image:"images/q4.jpg"},{image:"images/q5.jpg"},{image:"images/q6.jpg"},{image:"images/q7.jpg"},{image:"images/q8.jpg"}];

let index = 0;
let score = 0;

//selection des elements html
const quiz = document.querySelector("#quiz");
const quizContainer = document.querySelector("#quiz-container");
const container = document.querySelector(".container");
const questionText = document.querySelector("#question");
const reponse = document.querySelector("#reponse");
let scoreEl = document.querySelector("#score");
const bouton = document.querySelector("#bouton");
const pscore = document.querySelector(".afficheScore");
const reponseChoix = document.querySelector(".reponseChoix");
const quizContainerFinish = document.querySelector("#quiz-container-finish");
const pQuiFinish = document.querySelector("#p-quiz-finish");
const image = document.createElement("img");
const imageIndex = images[index];
let imageBody = document.querySelector("body");
        // imageChateau.classList.add("chateau");
// imageChateau.src="images/chateau.jpg";



//afficher question
function afficherQuestion() {
    const questionIndex = questions[index];
    questionText.innerHTML = questionIndex.question;
    reponse.innerHTML = "";
    //affichage des choix de reponses
    for (let i = 0; i < questionIndex.choices.length; i++) {
                const reponseIndex = questionIndex.choices[i];
        const li = document.createElement("li");
        li.classList.add("reponseChoix");
        li.textContent = reponseIndex;
        reponse.appendChild(li);
        quizContainer.style.border = "1px solid black"; 
        pscore.style.display = "flex";
       
        }
//afficher l'image
 for(let i = 0; i < imageIndex.image.length; i++){
            image.src = images[index].image;
            image.classList.add("question-image");
           container.insertBefore(image,reponse);
            
        }

        
        imageBody.style.backgroundImage="url(images/quiz.jpg)";
        imageBody.style.backgroundPosition="center";
        imageBody.style.backgroundSize="cover";
        imageBody.style.backgroundRepeat="no-repeat";
       document.body.appendChild(imageBody);
        
       
    }

    //evenement sur le bouton pour recommencer le quiz
    

   

    

//si l'index est inférieur au tableau question on affiche la prochaine question
function questionSuivante(){
    index++;
    if(index < questions.length){
        
        afficherQuestion();
    } else{
        
        bouton.innerHTML ="Recommencer";
        quizContainerFinish.appendChild(bouton);
        pQuiFinish.innerHTML=`Questionnaire terminé. Score: ${score}`;
       quizContainerFinish.appendChild(pQuiFinish);
       container.style.display= "none";
       bouton.style.display ="flex";
       quizContainer.style.marginTop="30vh ";
       quizContainer.style.width = "20vw";
       pQuiFinish.style.fontSize="1.1em";
       pQuiFinish.style.fontFamily="sans-serif";

       bouton.addEventListener("click", ()=>{
        location.reload();
                quizContainer.style.display="flex";
                
                afficherQuestion();

    })

    bouton.addEventListener("mouseover", ()=>{
        bouton.style.backgroundColor="rgb(138, 51, 4)";
        bouton.style.opacity="0.9";
    })
    bouton.addEventListener("mouseout", ()=>{
        bouton.style.backgroundColor="aliceblue";
    })
    }
    
    
}

reponse.addEventListener("click", (event) =>{
const reponseSelect = event.target.textContent;
const questionIndex = questions[index];
const correctIndex = questionIndex.correct;
const reponseJuste = questionIndex.choices[correctIndex] === reponseSelect;

if(reponseJuste){
    score++;
    scoreEl.textContent = score;
    
}

questionSuivante();
});



quiz.addEventListener("click", () => {
    quizContainer.style.display="flex";


        afficherQuestion();

})

function removeAfficherQuestion(){
    if(typeof afficherQuestion){
        personnage.addEventListener("click", ()=> {
            quizContainer.style.display = "none";
            imageBody.style.backgroundImage="";

        })
        film.addEventListener("click", ()=>{

        })
       

     
    } 
}


removeAfficherQuestion();

const imgBodyIndex = document.querySelector("body");
// const img =document.createElement("img");
// img.src="url(images/harryciné500.jpg)";
// document.body.appendChild(img);
// img.style.width="100%";
// img.style.height="100%";

imgBodyIndex.style.backgroundImage="url(images/harryciné.jpg)";
imgBodyIndex.style.backgroundPosition="center";
imgBodyIndex.style.backgroundSize="cover";
imgBodyIndex.style.backgroundRepeat="no-repeat";
document.body.style.margin="0";
document.body.appendChild(imgBodyIndex);