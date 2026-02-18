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

      // 🚫 User already attempted
      quizDiv.innerHTML = `
        <h3>You have already completed this assessment.</h3>
        <p>Reattempt is not allowed.</p>
        <button onclick="goBack()">Close</button>
      `;

    } else {

      // ✅ First attempt → Load questions
      loadQuestions();
    }

  } catch (error) {
    console.error("Error checking attempt:", error);
    alert("Error validating attempt. Please try again.");
  }
}

// Load questions ONLY if allowed
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
}

// Call attempt validation
checkAttempt();

// Submit test function
window.submitTest = async function () {

  let correct = 0;
  let wrong = 0;

  questions.forEach((q, index) => {

    let selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    if (selected) {
      if (parseInt(selected.value) === q.answer) {
        correct++;
      } else {
        wrong++;
      }
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

    // 🔥 Save result to Firestore
    await addDoc(collection(db, "results"), result);

    quizDiv.innerHTML = `
      <h3>Assessment Submitted Successfully</h3>
      <p>Total Questions: ${questions.length}</p>
      <p>Correct Answers: ${correct}</p>
      <p>Wrong Answers: ${wrong}</p>
      <p>Percentage: ${result.percentage}%</p>
      <p>You cannot reattempt this test.</p>
      <button onclick="goBack()">Close Assessment</button>
    `;

  } catch (error) {
    console.error("Error saving result:", error);
    alert("Error submitting test. Please try again.");
  }
};

// Close function
window.goBack = function () {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
};
