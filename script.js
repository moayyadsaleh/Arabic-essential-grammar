document.addEventListener("DOMContentLoaded", () => {
  // JavaScript to handle interactive elements and exercises
  console.log("DLPT Arabic Grammar Preparation App Loaded");
});
function checkRoot(inputId, correctRoot) {
  const userInput = document.getElementById(inputId).value.trim();
  const feedbackElement = document.getElementById(
    `feedback${inputId.charAt(inputId.length - 1)}`
  );

  if (userInput === correctRoot) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = "Incorrect. Try again.";
    feedbackElement.style.color = "red";
  }
}

function checkRelatedWords() {
  const correctWords = {
    1: { word: "كتاب", meaning: "book" },
    2: { word: "كاتب", meaning: "writer" },
    3: { word: "كتابة", meaning: "writing" },
  };

  let feedback = "";
  for (let i = 1; i <= 3; i++) {
    const userWord = document.getElementById(`relatedWord${i}`).value.trim();
    const userMeaning = document.getElementById(`meaning${i}`).value.trim();

    if (
      userWord === correctWords[i].word &&
      userMeaning === correctWords[i].meaning
    ) {
      feedback += `Word ${i}: Correct!<br>`;
    } else {
      feedback += `Word ${i}: Incorrect. Correct answer is "${correctWords[i].word}" - "${correctWords[i].meaning}".<br>`;
    }
  }

  document.getElementById("relatedWordsFeedback").innerHTML = feedback;
}

function checkFillBlanks() {
  const correctAnswers = ["أشرب", "شرب", "مشروب"];
  let feedback = "";

  const userAnswers = [
    document.getElementById("fill1").value.trim(),
    document.getElementById("fill2").value.trim(),
    document.getElementById("fill3").value.trim(),
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      feedback += `Question ${index + 1}: Correct!<br>`;
    } else {
      feedback += `Question ${index + 1}: Incorrect. Correct answer is "${
        correctAnswers[index]
      }".<br>`;
    }
  });

  document.getElementById("fillBlanksFeedback").innerHTML = feedback;
}
