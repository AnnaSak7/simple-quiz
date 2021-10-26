const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
let score = 0;
let questions;

// let questions = [
//   {
//     question: 'Is Coding fun?',
//     answers: [
//       { option: 'For Sure!', answer: true },
//       { option: 'No, not at all.', answer: false },
//     ],
//   },
//   {
//     question: 'What is better if you wish to achieve success?',
//     answers: [
//       { option: 'Hard Work', answer: false },
//       { option: 'Smart Work', answer: true },
//     ],
//   },
//   {
//     question: 'Complete the phrase: Time and ___ wait for none.',
//     answers: [
//       { option: 'Batman', answer: false },
//       { option: 'Tide', answer: true },
//     ],
//   },
// ];

function getQuiz() {
  fetch('../data/questions.json')
    .then((res) => res.json())
    .then((data) => {
      questions = data;
      console.log('questions are here', questions);
      beginQuiz();
    });
}

restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  prevBtn.classList.add('hide');
}

function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add('hide');
    prevBtn.classList.add('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  prevBtn.classList.remove('hide');
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.add('hide');
    prevBtn.classList.add('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = question[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  nextBtn.classList.remove('hide');
}

function submit() {
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');
  questionText.innerHTML = 'Congrats on submitting the quiz!';
}
