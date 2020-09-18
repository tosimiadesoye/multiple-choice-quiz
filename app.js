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

//let randomQuestions = Math.floor(QUESTIONS.length - 1 * Math.random())
//let randomQuestions = Math.floor(8 * Math.random())
let randomQuestions = Math.floor(Math.random() * QUESTIONS.length)

let shuffleQuestion = QUESTIONS[randomQuestions]

let div = document.createElement("div")
let oneDiv = document.createElement("div")
let li = document.createElement("li")

const spanBtn = document.createElement("span")
const nextBtn = document .createElement("button")
nextBtn.setAttribute("class", "next-btn")
const next = document.createTextNode = ("Next »")

let p = document.createElement("p")
div.className = "divider"
p.setAttribute("class", "question")
//I want multiple random questions..but its only giving me question one
p.textContent = shuffleQuestion.question


li.appendChild(p)
spanBtn.appendChild(nextBtn)
div.appendChild(li)

ol.appendChild(spanBtn)

nextBtn.textContent = next


//looping through QUESTION.answers
//creation of new tags to access my answers
shuffleQuestion.answers.map((elem) => {
    let button = document.createElement("button")
    button.setAttribute("class", "ans")
    
    button.textContent = elem.text
    //appending my element according to my satisfaction
    li.appendChild(button)
    div.appendChild(li)

      //deciding which is wrong from right
      //if button is clicked change color, right answer should be green and false should be red 
 /*if (elem.correct){
            button.dataset.correct = elem.correct*/
          button.addEventListener("click", ans)  
    function ans () {
            if(elem.correct === true){
                button.style.background = "green"
        }else{
            button.style.background = "red"
        }
        runOnce = true
    }
    if (button.click === true){
        button.removeEventListener("click", ans)
    }

    
     

    
})

ol.appendChild(div)



 console.log(ol)
spanBtn.onclick = () =>{ 
    if(spanBtn){
        div.removeChild(div.firstChild)
       // div.replaceChild(li)
        }
        
}







