const quizData = [
    {
        question: "Which is the most populated city in the world?",
        a: "Tokyo",
        b: "New York city",
        c: "London",
        d: "Shanghai",
        correct: "a"
    },
    {
        question: "What is the capital of the Canada?",
        a: "Montreal",
        b: "Toronto",
        c: "Ottawa",
        d: "Vancouver",
        correct: "c"
    },
    {
        question: "Which is the largest country of the World?",
        a: "Canada",
        b: "Russia",
        c: "China",
        d: "USA",
        correct: "b"
    },
    {
        question: "What is the most populated country of the world?",
        a: "India",
        b: "China",
        c: "USA",
        d: "Indonesia",
        correct: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const aText = document.getElementById('a');
const bText = document.getElementById('b');
const cText = document.getElementById('c');
const dText = document.getElementById('d');
const resultEl = document.getElementById('result');

// Function to shuffle the quizData array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestionIndex];

    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
    document.querySelectorAll('.answer').forEach(answerEl => {
        answerEl.classList.remove('selected');
    });
}

function selectAnswer(answer) {
    deselectAnswers();
    document.getElementById(answer).classList.add('selected');
}

function getSelected() {
    let answer;
    document.querySelectorAll('.answer').forEach(answerEl => {
        if (answerEl.classList.contains('selected')) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function submitQuiz() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            resultEl.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}

// Shuffle the questions before starting the quiz
shuffle(quizData);
loadQuiz();
