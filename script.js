
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

  // انتخاب زبان
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

  console.log("KING ASAD is ready!");
});

// تلفظ آلمانی
window.speakGerman = function (text) {
  if (!("speechSynthesis" in window)) {
    alert("مرورگر شما از تلفظ پشتیبانی نمی‌کند.");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "de-DE";
  speech.rate = 0.85;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};

// سیستم آزمون و امتیازدهی
const quizAnswers = [null, null, null, null, null];
const correctAnswers = [true, true, false, true, true];

window.answerQuiz = function (question, answer) {

  if (quizAnswers[question] !== null) {
    alert("شما قبلاً به این سؤال پاسخ داده‌اید!");
    return;
  }

  quizAnswers[question] = answer;

  let score = 0;
  let completed = 0;

  quizAnswers.forEach(function (value, index) {
    if (value !== null) {
      completed++;

      if (value === correctAnswers[index]) {
        score += 10;
      }
    }
  });

  const result = document.getElementById("quizResult");
  const message = document.getElementById("quizMessage");

  result.textContent = "امتیاز شما: " + score + " از 50";

  if (answer === correctAnswers[question]) {
    message.textContent = "آفرین! پاسخ شما درست است. 🌟";
  } else {
    message.textContent = "پاسخ شما نادرست است. دوباره تلاش کنید!";
  }

  if (completed === 5) {
    message.textContent =
      "آزمون تمام شد! امتیاز نهایی شما: " + score + " از 50";
  }
};

// شروع دوباره آزمون
window.resetQuiz = function () {

  for (let i = 0; i < quizAnswers.length; i++) {
    quizAnswers[i] = null;
  }

  document.getElementById("quizResult").textContent =
    "امتیاز شما: ۰ از ۵۰";

  document.getElementById("quizMessage").textContent =
    "آزمون را شروع کنید.";
};
