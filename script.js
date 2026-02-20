// Import Firebase modules
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore, collection, addDoc, query, where, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔹 Firebase config
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

// Get current user
let currentUser = localStorage.getItem("currentUser");
let quizDiv = document.getElementById("quiz");

// 🔒 Check if user already attempted
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
        <p>Reattempt is not allowed.</p>
        <button onclick="goBack()">Close</button>
      `;

    } else {
      loadQuestions();
    }

  } catch (error) {
    console.error("Error checking attempt:", error);
    alert("Error validating attempt. Please try again.");
  }
}

// Load questions
function loadQuestions() {

  questions.forEach((q, index) => {

    let html = `<div>
        <p>${index + 1}. (${q.topic}) ${q.question}</p>`;

    q.options.forEach((opt, i) => {
      html += `
        <input type="radio" name="q${index}" value="${i}">
        ${opt}<br>`;
    });

    html += `</div><hr>`;
    quizDiv.innerHTML += html;
  });

  quizDiv.innerHTML += `
    <button onclick="submitTest()">Submit Test</button>
  `;

  // Progress Tracker
  document.addEventListener("change", () => {
    let answered = document.querySelectorAll(
      "input[type='radio']:checked"
    ).length;

    let progressElement = document.getElementById("progress");
    if (progressElement) {
      progressElement.innerText =
        `Answered: ${answered} / ${questions.length}`;
    }
  });
}

// Call attempt validation
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

    if (selected) {

      let selectedValue = parseInt(selected.value);

      if (selectedValue === q.answer) {
        correct++;
      } else {
        wrong++;

        wrongQuestions.push({
          question: q.question,
          topic: q.topic,
          selected: q.options[selectedValue],
          correct: q.options[q.answer]
        });
      }

    } else {

      wrong++;

      wrongQuestions.push({
        question: q.question,
        topic: q.topic,
        selected: "Not Answered",
        correct: q.options[q.answer]
      });
    }
  });

  let result = {
    user: currentUser,
    total: questions.length,
    correct: correct,
    wrong: wrong,
    percentage: ((correct / questions.length) * 100).toFixed(2),
    date: new Date().toLocaleString()
  };

  try {

    await addDoc(collection(db, "results"), result);

    let reviewHtml = `
      <h3>Assessment Submitted Successfully</h3>
      <p>Total Questions: ${questions.length}</p>
      <p>Correct Answers: ${correct}</p>
      <p>Wrong Answers: ${wrong}</p>
      <p>Percentage: ${result.percentage}%</p>
      <h3>Questions You Missed</h3>
    `;

    if (wrongQuestions.length === 0) {
      reviewHtml += `<p>Excellent! You answered all questions correctly.</p>`;
    }

    wrongQuestions.forEach((w, index) => {
      reviewHtml += `
        <div class="review-box">
          <p><strong>Question ${index + 1}:</strong> (${w.topic}) ${w.question}</p>
          <p><strong>Your Answer:</strong> ${w.selected}</p>
          <p><strong>Correct Answer:</strong> ${w.correct}</p>
        </div>
        <hr>
      `;
    });

    reviewHtml += `
      <button onclick="goBack()">Close Assessment</button>
    `;

    quizDiv.innerHTML = reviewHtml;

  } catch (error) {
    console.error("Error saving result:", error);
    alert("Error submitting test. Please try again.");
  }
};

// Close
window.goBack = function () {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
};

// Timer (30 minutes)
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
