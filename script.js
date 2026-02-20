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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentUser = localStorage.getItem("currentUser");
let quizDiv = document.getElementById("quiz");

// Prevent reattempt
async function checkAttempt() {

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  const qRef = query(
    collection(db, "results"),
    where("user", "==", currentUser)
  );

  const snapshot = await getDocs(qRef);

  if (!snapshot.empty) {
    quizDiv.innerHTML = `
      <h3>You already completed this assessment</h3>
      <button onclick="goBack()">Close</button>
    `;
  } else {
    loadQuestions();
  }
}

// Load questions
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

    html += `</div><hr>`;
    quizDiv.innerHTML += html;
  });

  quizDiv.innerHTML += `
    <button onclick="submitTest()">Submit Assessment</button>
  `;

  // Progress
  document.addEventListener("change", () => {
    let answered = document.querySelectorAll(
      "input[type='radio']:checked"
    ).length;

    document.getElementById("progress").innerText =
      `Answered: ${answered} / ${questions.length}`;
  });
}

checkAttempt();

// Submit test
window.submitTest = async function () {

  let correct = 0;
  let wrong = 0;
  let wrongQuestions = [];

  questions.forEach((q, index) => {

    let selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    if (!selected) {
      wrong++;

      wrongQuestions.push({
        number: index + 1,
        question: q.question,
        topic: q.topic,
        yourAnswer: "Not Answered",
        correctAnswer: q.options[q.answer]
      });

      return;
    }

    let selectedIndex = parseInt(selected.value);

    if (selectedIndex === q.answer) {
      correct++;
    } else {
      wrong++;

      wrongQuestions.push({
        number: index + 1,
        question: q.question,
        topic: q.topic,
        yourAnswer: q.options[selectedIndex],
        correctAnswer: q.options[q.answer]
      });
    }

  });

  let percentage = ((correct / questions.length) * 100).toFixed(2);

  await addDoc(collection(db, "results"), {
    user: currentUser,
    correct,
    wrong,
    total: questions.length,
    percentage,
    date: new Date().toLocaleString()
  });

  // Result UI
  let resultHTML = `
    <h2>Assessment Completed</h2>
    <p>Total Questions: ${questions.length}</p>
    <p>Correct: ${correct}</p>
    <p>Wrong: ${wrong}</p>
    <p>Score: ${percentage}%</p>
    <hr>
    <h3>Questions You Got Wrong</h3>
  `;

  if (wrongQuestions.length === 0) {
    resultHTML += `<p>Excellent! All answers are correct.</p>`;
  } else {

    wrongQuestions.forEach(q => {
      resultHTML += `
        <div style="background:#fff3f3;padding:15px;margin-bottom:10px;border-radius:6px;">
          <p><b>Question ${q.number}</b></p>
          <p>${q.question}</p>
          <p style="color:red;"><b>Your Answer:</b> ${q.yourAnswer}</p>
          <p style="color:green;"><b>Correct Answer:</b> ${q.correctAnswer}</p>
        </div>
      `;
    });

  }

  resultHTML += `
    <button onclick="goBack()">Close Assessment</button>
  `;

  quizDiv.innerHTML = resultHTML;
};

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
    submitTest();
  }

}, 1000);
