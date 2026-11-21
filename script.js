
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
    if (welcome) welcome.textContent = selected.title;
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }

  changeLanguage("fa");
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
  window.speechSynthesis.speak(speech);
};

// اطلاعات آزمون‌ها
const quizData = {
  A1: {
    correct: [0, 0, 1, 0, 0],
    answers: [null, null, null, null, null],
    finished: false
  },
  A2: {
    correct: [0, 1, 0, 1, 0],
    answers: [null, null, null, null, null],
    finished: false
  },
  B1: {
    correct: [0, 1, 0, 1, 0],
    answers: [null, null, null, null, null],
    finished: false
  }
};

// باز کردن آزمون انتخاب‌شده
window.openQuiz = function (level) {
  document.querySelectorAll(".quiz-level").forEach(function (section) {
    section.style.display = "none";
  });

  const selectedQuiz = document.getElementById("quiz-" + level);

  if (selectedQuiz) {
    selectedQuiz.style.display = "block";
    selectedQuiz.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

// پخش صدای پاسخ
function playQuizSound(correct) {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const audio = new AudioContextClass();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = correct ? 850 : 250;

    gain.gain.setValueAtTime(0.15, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.25
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.25);

    oscillator.onended = function () {
      audio.close();
    };
  } catch (error) {
    console.log("Sound unavailable");
  }
}

// پاسخ دادن به سؤال
window.answerQuiz = function (level, questionIndex, isCorrect, clickedButton) {
  const quiz = quizData[level];

  if (!quiz || quiz.finished || quiz.answers[questionIndex] !== null) {
    return;
  }

  quiz.answers[questionIndex] = isCorrect;

  const question = clickedButton.closest(".question");
  const buttons = question.querySelectorAll("button");

  buttons.forEach(function (button, index) {
    button.disabled = true;

    if (index === quiz.correct[questionIndex]) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    clickedButton.classList.add("wrong");
  }

  playQuizSound(isCorrect);

  let score = 0;
  let completed = 0;

  quiz.answers.forEach(function (answer) {
    if (answer !== null) {
      completed++;
      if (answer === true) score += 10;
    }
  });

  const result = document.getElementById("result-" + level);
  const message = document.getElementById("message-" + level);

  result.textContent = "امتیاز شما: " + score + " از ۵۰";

  if (isCorrect) {
    message.textContent = "آفرین! جواب شما درست است. 🌟";
  } else {
    message.textContent =
      "جواب اشتباه است! پاسخ درست با رنگ آبی مشخص شده است. ❤️";
  }

  if (completed === 5) {
    quiz.finished = true;

    message.textContent =
      "آزمون " + level + " تمام شد! امتیاز نهایی شما: " + score + " از ۵۰";

    if (score >= 40) {
      message.textContent += " 🏆 شما برنده شدید! تبریک!";
      playQuizSound(true);
      setTimeout(function () {
        showCelebration(level, score);
      }, 300);
    } else {
      message.textContent += " 🌷 تلاش خوبی بود! دوباره تمرین کنید.";
    }
  }
};

// نمایش جشن برنده
function showCelebration(level, score) {
  const old = document.getElementById("celebration");
  if (old) old.remove();

  const celebration = document.createElement("div");
  celebration.id = "celebration";

  celebration.innerHTML =
    '<div class="celebration-message">' +
    '<div class="trophy">🏆</div>' +
    '<h2>تبریک! شما برنده شدید!</h2>' +
    '<p>آزمون ' + level + ' را با ' + score + ' امتیاز به پایان رساندید.</p>' +
    '<div class="flowers">🌸 🌹 🎉 🌺 🎊 🌷</div>' +
    '<button id="closeCelebration">بستن</button>' +
    '</div>';

  document.body.appendChild(celebration);

  const colors = [
    "#ff1744", "#2979ff", "#ffca28",
    "#00c853", "#e040fb", "#ff9100"
  ];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 3 + "s";
    piece.style.animationDuration = 2 + Math.random() * 3 + "s";

    celebration.appendChild(piece);
  }

  document.getElementById("closeCelebration").onclick = function () {
    celebration.remove();
  };
}

// شروع دوباره آزمون همان سطح
window.resetQuiz = function (level) {
  const quiz = quizData[level];
  if (!quiz) return;

  quiz.answers = [null, null, null, null, null];
  quiz.finished = false;

  const section = document.getElementById("quiz-" + level);

  section.querySelectorAll(".question button").forEach(function (button) {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });

  document.getElementById("result-" + level).textContent =
    "امتیاز شما: ۰ از ۵۰";

  document.getElementById("message-" + level).textContent =
    "آزمون را شروع کنید.";

  const celebration = document.getElementById("celebration");
  if (celebration) celebration.remove();
};
