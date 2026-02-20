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

  try {

    const qRef = query(
      collection(db, "results"),
      where("user", "==", currentUser)
    );

    const querySnapshot = await getDocs(qRef);

    if (!querySnapshot.empty) {

      quizDiv.innerHTML = `
        <h3>You have already completed this assessment.</h3>
        <button onclick="goBack()">Close</button>
      `;

    } else {
      loadQuestions();
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

// Load Questions
function loadQuestions() {

  quizDiv.innerHTML = "";

  questions.forEach((q, index) => {

    let html = `
    <div class="question-box">
      <p><b>${index + 1}. (${q.topic}) ${q.question}</b></p>
    `;

    q.options.forEach((opt, i) => {
      html += `
        <label>
        <input type="radio" name="q${index}" value="${i}">
        ${opt}
        </label><br>
      `;
    });

    html += "</div><hr>";
    quizDiv.innerHTML += html;
  });

  quizDiv.innerHTML += `
    <button onclick="submitTest()">Submit Test</button>
  `;

  // Progress tracker
  document.addEventListener("change", () => {

    let answered = document.querySelectorAll(
      "input[type='radio']:checked"
    ).length;

    let progress = document.getElementById("progress");

    if (progress) {
      progress.innerText =
        `Answered: ${answered} / ${questions.length}`;
    }

  });
}

checkAttempt();

// Submit Test
window.submitTest = async function () {

  let correct = 0;
  let wrong = 0;
  let reviewData = [];

  questions.forEach((q, index) => {

    let selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    let selectedText = "Not Answered";
    let selectedIndex = null;

    if (selected) {
      selectedIndex = parseInt(selected.value);
      selectedText = q.options[selectedIndex];
    }

    let correctText = q.options[q.answer];
    let isCorrect = selectedIndex === q.answer;

    if (isCorrect) {
      correct++;
    } else {
      wrong++;
    }

    reviewData.push({
      questionNumber: index + 1,
      topic: q.topic,
      question: q.question,
      selectedAnswer: selectedText,
      correctAnswer: correctText,
      status: isCorrect ? "Correct" : "Wrong"
    });

  });

  let result = {
    user: currentUser,
    total: questions.length,
    correct: correct,
    wrong: wrong,
    percentage: ((correct / questions.length) * 100).toFixed(2),
    date: new Date().toLocaleString(),
    answers: reviewData
  };

  try {

    await addDoc(collection(db, "results"), result);

    showReview(result);

  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting test");
  }

};

// Show Review
function showReview(result) {

  let html = `
    <h2>Assessment Result</h2>
    <p><b>User:</b> ${result.user}</p>
    <p>Total Questions: ${result.total}</p>
    <p>Correct: ${result.correct}</p>
    <p>Wrong: ${result.wrong}</p>
    <p>Score: ${result.percentage}%</p>
    <hr>
    <h3>Answer Review</h3>
  `;

  result.answers.forEach(q => {

    let color = q.status === "Correct" ? "#d4edda" : "#f8d7da";

    html += `
      <div style="background:${color}; padding:15px; margin-bottom:10px; border-radius:8px;">
        <p><b>Q${q.questionNumber}. (${q.topic}) ${q.question}</b></p>
        <p><b>Your Answer:</b> ${q.selectedAnswer}</p>
        <p><b>Correct Answer:</b> ${q.correctAnswer}</p>
        <p><b>Status:</b> ${q.status}</p>
      </div>
    `;
  });

  html += `
    <button onclick="goBack()">Close Assessment</button>
  `;

  quizDiv.innerHTML = html;
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

  let timerElement = document.getElementById("timer");

  if (timerElement) {
    timerElement.innerText =
      `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    alert("Time is up! Submitting your test.");
    submitTest();
  }

}, 1000);
