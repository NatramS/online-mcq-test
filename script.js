let currentUser = localStorage.getItem("currentUser");
let quizDiv = document.getElementById("quiz");

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

function submitTest() {
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
    correct: correct,
    wrong: wrong
  };

  let allResults = JSON.parse(localStorage.getItem("results")) || [];
  allResults.push(result);

  localStorage.setItem("results", JSON.stringify(allResults));

  alert("Test Submitted Successfully");
  window.location.href = "index.html";
}
