//questions
//This is a json object, you should move this to a separate json file and import that json file here.
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

let score = 0;
let lengthArray = QUESTIONS.length;

const swapQuestions = (array,a,b) => {
	let c = array[a]
	array[a] = array[b]
	array[b] = c
}

//function to generate random questions
const generateQuestions = () =>{
    let randomQuestions = Math.floor((lengthArray) * Math.random())
    let shuffleQuestion = QUESTIONS[randomQuestions]
    

  if(randomQuestions === lengthArray){      
    lengthArray = lengthArray-1;

  }else{
    swapQuestions(QUESTIONS,randomQuestions, lengthArray)
    lengthArray = lengthArray-1;
  }
	console.log(QUESTIONS);
    return shuffleQuestion
}






//function to create questions

let createQuestion = (shuffledQuestion) => {
    questionVar = document.createElement("div")
    questionVar.setAttribute("id", "question")  
    let question = document.createElement("p")
    question.setAttribute("class", "question")
    question.textContent = shuffledQuestion.question
    questionVar.appendChild(question)
    
    return questionVar;
}

let createAnswers = (shuffledQuestion) => {
    answerVar = document.createElement("div")
    answerVar.setAttribute("id","answers")
    shuffledQuestion.answers.map((elem) => {
		let button = document.createElement("button")
		button.setAttribute("id", "answerButton") 
		button.setAttribute("class", "ans")  
		button.textContent = elem.text
		answerVar.appendChild(button) 
    
    //function for keeping track of the score, disabling the button once it's clicked and selecting which is right/wrong
    button.onclick = () => {
		let btnClass = document.getElementsByClassName("ans")
		for(let i = 0; i < btnClass.length; i++){
		if (btnClass[i]){
			btnClass[i].disabled = true
        }else{
           btnClass[i].disabled = ""
		}
    }    
        if(elem.correct === true){
            score = score + 1
            button.style.background = "green"         
        }else{
            button.style.background = "red"             
        }   
    }
})
    
    return answerVar;

}

let createScore = () =>{
    let scorediv = document.createElement("div")
    scorediv.setAttribute("id","score")
    let scoreTag = document.createElement("p")
    scoreTag.className = "score"
    scoreTag.textContent = 'Score:' + score
    scorediv.appendChild(scoreTag)
    return scorediv;
}

const playersResult = () => {
    let resultDiv = document.createElement("div")
    let result = document.createElement("p")
    result.className = "result"
    result.textContent = score + ' out of ' + QUESTIONS.length;
    resultDiv.appendChild(result)
    return resultDiv
}


const createNextButton = () => {
    let div2 = document.createElement("div2")
    let nextButton = document.createElement("button")
    nextButton.setAttribute("class", "next-btn")
    nextButton.textContent = 'next'
    nextButton.onclick = displayQuestions
    div2.appendChild(nextButton)
    return div2;
}  


let displayQuestions = () => {
    let appSection = document.getElementById("app")
    appSection.innerHTML = '';
    if(lengthArray>0){
		let shuffledQuestion = generateQuestions()
		let question = createQuestion(shuffledQuestion);
		let answer = createAnswers(shuffledQuestion);
		let nextButton = createNextButton();
		let scorediv = createScore();
    

		//Saurav - In this function, you need to delete previous question, if there is any and display the next question.
		appSection.appendChild(question).appendChild(answer).appendChild(nextButton).appendChild(scorediv)
	}else{
		let result = playersResult();
		appSection.appendChild(result);
	}

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
    startButton.className = "start"
    startButton.textContent = "start"
    startButton.onclick = displayQuestions
    div.appendChild(h3)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(startButton)
    //Find the Main div where we need to append the contents
    let appSection = document.getElementById("app")
    appSection.appendChild(div)
    lengthArray = QUESTIONS.length -1;

}

 displayStart()
