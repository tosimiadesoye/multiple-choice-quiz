//questions
//This is a json object, you should move this to a seprate json file and import that json file here.
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




//Function to generate random questions
let generateQuestions = () =>{
    let randomQuestions = Math.floor((QUESTIONS.length - 1) * Math.random())
    console.log(randomQuestions)
    let shuffleQuestion = QUESTIONS[randomQuestions]
    console.log(shuffleQuestion)
    return shuffleQuestion

}

//function to display question

let displayQuestions = () => {
    //Saurav - In this function, you need to delete previous question, if there is any and display the next question.
    let appSection = document.getElementById("app")
    appSection.innerHTML = '';
    let div2 = document.createElement("div")
    let nextButton = document.createElement("button")
    let question = document.createElement("p")
    nextButton.setAttribute("class", "next-btn")
    nextButton.textContent = 'next'
    nextButton.onclick = displayQuestions
    question.setAttribute("class", "question")
    let shuffledQuestion = generateQuestions()
    question.textContent = shuffledQuestion.question
    let answers = document.createElement("div")
    shuffledQuestion.answers.map((elem) => {
    let button = document.createElement("button")
    button.setAttribute("class", "ans")
    button.textContent = elem.text
    answers.appendChild(button)
    })

    div2.appendChild(nextButton)
    div2.appendChild(question)
    div2.appendChild(answers)
    appSection.appendChild(div2)
}

//function top display first page.

let displayStart = () =>{
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.textContent = "welcome"
    let p1 = document.createElement("p")
    p1.textContent = "get to know about my tech journey"
    let p2 = document.createElement("p")
    p2.textContent = "Total number of questions: 9"
    let startButton = document.createElement("button")
    startButton.textContent = "start"
    startButton.onclick = displayQuestions 
    div.appendChild(h3)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(startButton)
    //Find the Main div where we need to append the contents
    let appSection = document.getElementById("app")
    appSection.appendChild(div)
}

 displayStart()








