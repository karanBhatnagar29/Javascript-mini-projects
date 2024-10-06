const quizData = [
  {
    question: "What is JS stands for?",
    options: ["JavaScript", "JavaStyle", "JaguarScript", "JavaSheet"],
    correct: 0,
  },
  {
    question: "What is the use of flexbox",
    options: [
      "It is use to center the content",
      "It is used to make rows and columns",
      "It is use to create linear gradient",
      "It is used to flex code",
    ],
    correct: 0,
  },
  {
    question: "What is the full form of UPSC?",
    options: [
      "Union private service commission",
      "Union public service commission",
      "united province secret center",
      "Uttar pradesh service commission",
    ],
    correct: 1,
  },
  {
    question: "What is the latest Iphone model in the market",
    options: ["iphone14", "iphone15", "iphone16", "iphone17"],
    correct: 2,
  },
  {
    question: "Who established the guhil dynasty",
    options: ["Bappa Rawal", "Guhaditya", "Jaitra Singh", "Allata"],
    correct: 1,
  },
];

// Lets start the js functioning
let answerElement = document.querySelectorAll(".answer");
let quiz = document.getElementById("quiz");
let CurQuestionArray = 0;
let score = 0;
let [questionElement, option1, option2, option3, option4] =
  document.querySelectorAll(
    ".question, #option1, #option2, #option3, #option4"
  );
const submitBtn = document.getElementById("submit");

// ? Loading quiz
const loadQuiz = () => {
  const { question, options } = quizData[CurQuestionArray];
  questionElement.textContent = question;

  options.forEach((curElem, index) => {
    window[`option${index + 1}`].textContent = curElem;
  });
};
loadQuiz();

// ? Checking the right answer

const getOptionIndex = () => {
  let ansIndex;
  answerElement.forEach((curElem, index) => {
    if (curElem.checked) {
      ansIndex = index;
    }
  });
  return ansIndex;
};

const deSelectOption = () => {
  answerElement.forEach((curElem, index) => {
    curElem.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getOptionIndex();
  // console.log(selectedOptionIndex);
  if (selectedOptionIndex === quizData[CurQuestionArray].correct) {
    score = score + 1;
  }

  deSelectOption();
  CurQuestionArray++;

  if (CurQuestionArray < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class='result'>
    <h2>Your Scored ${score}/${quizData.length} Correct Answers</h2>
    <button class='reload-button' onclick='location.reload()'>Play again</button>
    </div>`;
  }
  // answerElement.unchecked;
});
