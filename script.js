
const translations = {
  fa: {
    title: "به آموزشگاه آنلاین کینگ اسد خوش آمدید!",
    direction: "rtl"
  },
  de: {
    title: "Willkommen bei KING ASAD Deutsch Lernen!",
    direction: "ltr"
  },
  en: {
    title: "Welcome to KING ASAD German Learning!",
    direction: "ltr"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language");
  const welcome = document.getElementById("welcome");

  function changeLanguage(language) {
    const selected = translations[language] || translations.fa;

    document.documentElement.lang = language;
    document.documentElement.dir = selected.direction;

    if (welcome) {
      welcome.textContent = selected.title;
    }
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }

  changeLanguage("fa");
});

// تلفظ کلمات آلمانی
window.speakGerman = function (text) {
  if (!("speechSynthesis" in window)) {
    alert("مرورگر شما از تلفظ پشتیبانی نمی‌کند.");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "de-DE";
  speech.rate = 0.85;

  window.speechSynthesis.speak(speech);
};

// سیستم آزمون
const answers = [null, null, null, null, null];

const correctIndexes = [0, 0, 1, 0, 0];

window.answerQuiz = function (questionIndex, isCorrect, clickedButton) {
  if (answers[questionIndex] !== null) {
    return;
  }

  answers[questionIndex] = isCorrect;

  const question = clickedButton.closest(".question");
  const buttons = question.querySelectorAll("button");

  buttons.forEach(function (button, index) {
    button.disabled = true;

    if (index === correctIndexes[questionIndex]) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    clickedButton.classList.add("wrong");
  }

  let score = 0;
  let completed = 0;

  answers.forEach(function (answer) {
    if (answer !== null) {
      completed++;

      if (answer === true) {
        score += 10;
      }
    }
  });

  document.getElementById("quizResult").textContent =
    "امتیاز شما: " + score + " از ۵۰";

  const message = document.getElementById("quizMessage");

  if (isCorrect) {
    message.textContent = "آفرین! جواب شما درست است. 🎉";
  } else {
    message.textContent = "جواب اشتباه است! جواب درست با رنگ آبی مشخص شده است.";
  }

  if (completed === 5) {
    message.textContent =
      "آزمون تمام شد! امتیاز نهایی شما: " + score + " از ۵۰ 🏆";
  }
};

// شروع دوباره آزمون
window.resetQuiz = function () {
  for (let i = 0; i < answers.length; i++) {
    answers[i] = null;
  }

  document.querySelectorAll(".question button").forEach(function (button) {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });

  document.getElementById("quizResult").textContent =
    "امتیاز شما: ۰ از ۵۰";

  document.getElementById("quizMessage").textContent =
    "آزمون را شروع کنید.";
};
