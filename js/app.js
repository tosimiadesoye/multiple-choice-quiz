import QUESTIONS from "./question.js"

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
    console.log(shuffledQuestion)
    let questionVar = document.createElement("div")
    questionVar.setAttribute("id", "question")  
    let question = document.createElement("p")
    question.setAttribute("class", "question")
    question.textContent = shuffledQuestion.question
    questionVar.appendChild(question)
    
    return questionVar;
}

let createAnswers = (shuffledQuestion) => {
    let answerVar = document.createElement("div")
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
    p2.textContent = "Total number of questions: 8"
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
