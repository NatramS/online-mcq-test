// Firebase
import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc
}
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

let resultsDiv = document.getElementById("results");

async function loadResults() {

  resultsDiv.innerHTML = "Loading results...";

  const querySnapshot = await getDocs(collection(db, "results"));

  let html = `
  <h2>Student Results</h2>
  <button onclick="goToLogin()">Back to Login</button>
  <button onclick="exportExcel()">Export Excel</button>
  <hr>
  `;

  querySnapshot.forEach((docSnap) => {

    let data = docSnap.data();
    let id = docSnap.id;

    html += `
    <div class="result-card">
      <h3>${data.user}</h3>
      <p>Total: ${data.total}</p>
      <p>Correct: ${data.correct}</p>
      <p>Wrong: ${data.wrong}</p>
      <p>Score: ${data.percentage}%</p>
      <p>Date: ${data.date}</p>

      <button onclick="deleteResult('${id}')">Delete</button>
    </div>
    <hr>
    `;
  });

  resultsDiv.innerHTML = html;
}

window.deleteResult = async function(id) {

  if (!confirm("Delete this record?")) return;

  await deleteDoc(doc(db, "results", id));

  alert("Deleted successfully");

  loadResults();
};

window.goToLogin = function() {
  window.location.href = "index.html";
};

// Export Excel
window.exportExcel = async function() {

  const querySnapshot = await getDocs(collection(db, "results"));

  let rows = [
    ["User", "Total", "Correct", "Wrong", "Percentage", "Date"]
  ];

  querySnapshot.forEach((docSnap) => {
    let d = docSnap.data();
    rows.push([
      d.user,
      d.total,
      d.correct,
      d.wrong,
      d.percentage,
      d.date
    ]);
  });

  let csvContent =
    "data:text/csv;charset=utf-8," +
    rows.map(e => e.join(",")).join("\n");

  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "assessment_results.csv");
  document.body.appendChild(link);

  link.click();
};

loadResults();
