"use strict";

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', function () {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(function () {
    return Math.random() - .5;
  });
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(function (answer) {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(function (button) {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

var questions = [{
  question: 'What is 2 + 2?',
  answers: [{
    text: '4',
    correct: true
  }, {
    text: '22',
    correct: false
  }]
}, {
  question: 'Who is the best YouTuber?',
  answers: [{
    text: 'Web Dev Simplified',
    correct: true
  }, {
    text: 'Traversy Media',
    correct: true
  }, {
    text: 'Dev Ed',
    correct: true
  }, {
    text: 'Fun Fun Function',
    correct: true
  }]
}, {
  question: 'Is web development fun?',
  answers: [{
    text: 'Kinda',
    correct: false
  }, {
    text: 'YES!!!',
    correct: true
  }, {
    text: 'Um no',
    correct: false
  }, {
    text: 'IDK',
    correct: false
  }]
}, {
  question: 'What is 4 * 2?',
  answers: [{
    text: '6',
    correct: false
  }, {
    text: '8',
    correct: true
  }]
}];