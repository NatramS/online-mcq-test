// Import Firebase modules
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore, collection, addDoc, query, where, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAP0AaZOw0fgojRTVwRVf57Dgjm0m9NC-w",
  authDomain: "mcq-assessments.firebaseapp.com",
  projectId: "mcq-assessments",
  storageBucket: "mcq-assessments.firebasestorage.app",
  messagingSenderId: "606020010421",
  appId: "1:606020010421:web:daa6d4701e41f1cc3319fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentUser = localStorage.getItem("currentUser");
let quizDiv = document.getElementById("quiz");

// Check attempt
async function checkAttempt() {

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  const qRef = query(
    collection(db, "results"),
    where("user", "==", currentUser)
  );

  const querySnapshot = await getDocs(qRef);

  if (!querySnapshot.empty) {

    quizDiv.innerHTML = `
      <h3>You already attempted this assessment.</h3>
      <button onclick="goBack()">Close</button>
    `;
    return;
  }

  loadQuestions();
}

// Load questions
function loadQuestions() {

  quizDiv.innerHTML = "";

  questions.forEach((q, index) => {

    let html = `
      <div class="question-box">
        <p><strong>${index + 1}. (${q.topic})</strong> ${q.question}</p>
    `;

    q.options.forEach((opt, i) => {
      html += `
        <label>
        <input type="radio" name="q${index}" value="${i}">
        ${opt}
        </label><br>
      `;
    });

    html += `</div><hr>`;
    quizDiv.innerHTML += html;
  });

  quizDiv.innerHTML += `
    <button onclick="submitTest()">Submit Test</button>
  `;

  updateProgress();
}

// Progress tracker
function updateProgress() {

  document.addEventListener("change", () => {

    let answered = document.querySelectorAll(
      "input[type='radio']:checked"
    ).length;

    document.getElementById("progress").innerText =
      `Answered: ${answered} / ${questions.length}`;
  });
}

// Start
checkAttempt();

// Submit test
window.submitTest = async function () {

  let correct = 0;
  let wrong = 0;
  let wrongQuestions = [];
  let allAnswers = [];

  questions.forEach((q, index) => {

    let selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    let selectedAnswer = "Not Answered";

    if (selected) {
      selectedAnswer = q.options[selected.value];
    }

    let correctAnswer = q.options[q.answer];

    // Save all answers for Excel
    allAnswers.push({
      question: q.question,
      topic: q.topic,
      selected: selectedAnswer,
      correct: correctAnswer
    });

    if (selected && parseInt(selected.value) === q.answer) {
      correct++;
    } else {
      wrong++;

      wrongQuestions.push({
        question: q.question,
        topic: q.topic,
        selected: selectedAnswer,
        correct: correctAnswer
      });
    }

  });

  let result = {
    user: currentUser,
    total: questions.length,
    correct: correct,
    wrong: wrong,
    percentage: ((correct / questions.length) * 100).toFixed(2),
    date: new Date().toLocaleString(),
    wrongQuestions: wrongQuestions,
    allAnswers: allAnswers
  };

  try {

    await addDoc(collection(db, "results"), result);

    showReview(result);

  } catch (error) {
    console.error(error);
    alert("Error submitting test.");
  }
};

// Show review after exam
function showReview(result) {

  let reviewHTML = `
    <h2>Assessment Result</h2>
    <p><strong>Total:</strong> ${result.total}</p>
    <p><strong>Correct:</strong> ${result.correct}</p>
    <p><strong>Wrong:</strong> ${result.wrong}</p>
    <p><strong>Score:</strong> ${result.percentage}%</p>

    <h3>Review Questions</h3>
  `;

  result.allAnswers.forEach((q, index) => {

    let color = q.selected === q.correct ? "green" : "red";

    reviewHTML += `
      <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <p style="color:${color}">
        Your Answer: ${q.selected}
        </p>
        <p>
        Correct Answer: ${q.correct}
        </p>
      </div>
    `;
  });

  reviewHTML += `
    <button onclick="goBack()">Close</button>
  `;

  quizDiv.innerHTML = reviewHTML;
}

// Close
window.goBack = function () {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
};

// Timer
let timeLeft = 30 * 60;

let timer = setInterval(() => {

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  document.getElementById("timer").innerText =
    `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    alert("Time up. Auto submitting test.");
    submitTest();
  }

}, 1000);
