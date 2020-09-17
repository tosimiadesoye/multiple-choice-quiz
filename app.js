//questions
const  QUESTIONS = [
    {
        question: "Imo, Where's the best Website for learning how to code?",
        answers: [
            {text:"Free code camp", correct: true},
            {text:"Khanacademy", correct: true},
            {text:"Codecademy", correct: false},
            {text:"Udacity", correct: false},
            {text:"Udemy", correct: false},
        ] 
    },
    
    {
        question: "What's my favourite Youtube channel for learning how to code?",
        answers: [
            {text:"Nella Rose", correct: false},
            {text:"Naka and Dom", correct: false},
            {text:"Free Code Camp", correct: true},
            {text:"HollyWood", correct: false},
            {text:"The coding train", correct: true},
        ]
    },

    {
        question: "I'm a self taught programmer?",
        answers: [
            {text:"Yes", correct: true},
            {text:"No", correct: false},
        ]
    },
    {
        question: "In what month did I start learning how to code?",
        answers: [
            {text:"June", correct: false},
            {text:"May", correct: true},
            {text:"March", correct: false},
            {text:"August", correct: false},
        ]
    },

    {
        question: "What was the first programming language I learnt?",
        answers: [
            {text:"JavaScript", correct: false},
            {text:"C#", correct: false},
            {text:"Python", correct: false},
            {text:"C", correct: true},
            {text:"HTML", correct: false},
        ]
    },

    {
        question: "What was the second programming language I learnt?",
        answers: [
            {text:"JavaScript", correct: false},
            {text:"C#", correct: false},
            {text:"Python", correct: true},
            {text:"C", correct: false},
            {text:"HTML", correct: false},
        ]
    },

    {
        question: "Where did I learn my first coding language?",
        answers: [
            {text:"Free code camp", correct: false},
            {text:"Khanacademy", correct: false},
            {text:"Codecademy", correct: false},
            {text:"HarvardX CS50", correct: true},
            {text:"StandfordOnline Computer Science 101", correct: false},
        ] 
    },

    {
        question: "Where did I learnt how to code with JavaScript?",
        answers: [
            {text:"Free code camp", correct: false},
            {text:"Khanacademy", correct: false},
            {text:"Codecademy", correct: false},
            {text:"Udacity", correct: false},
            {text:"W3school", correct: true},
        ]
    },

    {
        question: "Where did I learn how to be comfortable in coding with JavaScript?",
        answers: [
            {text:"Free code camp", correct: false},
            {text:"Khanacademy", correct: true},
            {text:"Codecademy", correct: false},
            {text:"Udacity", correct: false},
            {text:"W3school", correct: false},
        ]
    },
] 

let container = document.getElementById("container")
let btnParent = document.getElementById("btn-parent")
let startBtn = document.querySelector("#start-btn")
const elemParent = document.querySelector("#hide")
const parent = document.querySelector("#ol-access")
let ol = document.querySelector("#list")

/**
 * when start button is clicked show questions and delete start
 */
startBtn.onclick = () => {
    if(startBtn){
        elemParent.className = ""
        container.querySelectorAll('*').forEach(del => del.remove())
        
    }else{
        elemParent.className = "hide-elem"
    }
}



 


let oneDiv = document.createElement("div")
//looping through QUESTIONS
QUESTIONS.forEach((quizQuestion) => {
//creation of multiple tags
let li = document.createElement("li")
let p = document.createElement("p")
let div = document.createElement("div")
div.className = "divider"
const spanBtn = document.createElement("span")
const nextBtn = document.createElement("button")
const next = document.createTextNode = ("Next »")


p.setAttribute("class", "question")
p.textContent = quizQuestion.question

nextBtn.textContent = next
//appending my element according to my satisfaction
li.appendChild(p)
spanBtn.appendChild(nextBtn)
div.appendChild(li)

spanBtn.onclick = () => {
    console.log(ol.removeChild(div))
 }

//looping through QUESTION.answers, after question has been looped through to access the values of answer
//creation of new tags to access my answers
quizQuestion.answers.map((elem) => {
    let p2 = document.createElement("p")
    p2.setAttribute("class", "ans")
    p2.textContent = elem.text
    //appending my element according to my satisfaction
    li.appendChild(p2)
    div.appendChild(li)

      //deciding which is wrong from right

    p2.onclick = () => {
        if(elem.correct === true){
                p2.style.background = "green"
        }else{
            p2.style.background = "red"
        }
    }
})
ol.appendChild(div)
ol.appendChild(spanBtn)

/*let counter = () => {
    div++;
    div = document.getElementById("divider")

}
counter()*/



})





















//let shuffleQuiz = div.toString().split(",")
/*let shuffleQuiz = []
for (let i = 0; i < div.length; i++){
     if(div){
         shuffleQuiz.push(div[i]);
         continue
     }
     shuffleQuiz.push(div[i].outerHTML)
     console.log(shuffleQuiz)
}

let quizCounter = 1;
let l = Math.floor()

//console.log(shuffleQuiz) 



//displaying random questions on my screen

//turning looping through div and turning it to an array to an array

//button next
/*nextBtn.addEventListener("click", nextQuestion) 

function nextQuestion (){
    if(nextBtn){
        
    }
}*/
/**
 * if a random question has been shown and next is clicked delete the random question that was shown and show
 * another question then repeat
 */

