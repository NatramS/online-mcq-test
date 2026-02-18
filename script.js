// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔹 Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get current user
let currentUser = localStorage.getItem("currentUser");
let quizDiv = document.getElementById("quiz");

// Load questions
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

    alert("Test Submitted Successfully");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";

  } catch (error) {
    console.error("Error saving result: ", error);
    alert("Error submitting test. Please try again.");
  }
};
