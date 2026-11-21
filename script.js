
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

// پاسخ‌های درست آزمون
const answers = [null, null, null, null, null];
const correctIndexes = [0, 0, 1, 0, 0];

let quizFinished = false;

// پخش صدای کوتاه
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

// انتخاب پاسخ
window.answerQuiz = function (questionIndex, isCorrect, clickedButton) {
  if (quizFinished || answers[questionIndex] !== null) {
    return;
  }

  answers[questionIndex] = isCorrect;

  const question = clickedButton.closest(".question");
  const buttons = question.querySelectorAll("button");

  // نمایش رنگ جواب درست و غلط
  buttons.forEach(function (button, index) {
    button.disabled = true;

    if (index === correctIndexes[questionIndex]) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    clickedButton.classList.add("wrong");
  }

  // صدای پاسخ
  playQuizSound(isCorrect);

  // محاسبه امتیاز
  let score = 0;
  let completed = 0;

  answers.forEach(function (answer) {
    if (answer !== null) {
      completed++;
      if (answer === true) score += 10;
    }
  });

  document.getElementById("quizResult").textContent =
    "امتیاز شما: " + score + " از ۵۰";

  const message = document.getElementById("quizMessage");

  if (isCorrect) {
    message.textContent = "آفرین! جواب شما درست است. 🌟";
  } else {
    message.textContent =
      "جواب اشتباه است! پاسخ درست با رنگ آبی مشخص شده است. ❤️";
  }

  // پایان آزمون
  if (completed === 5) {
    quizFinished = true;

    message.textContent =
      "آزمون تمام شد! امتیاز نهایی شما: " + score + " از ۵۰";

    if (score >= 40) {
      message.textContent += " 🏆 شما برنده شدید! تبریک!";

      playQuizSound(true);
      setTimeout(showCelebration, 300);
    } else {
      message.textContent += " 🌷 تلاش خوبی بود! دوباره تمرین کنید.";
    }
  }
};

// جشن برنده
function showCelebration() {
  const old = document.getElementById("celebration");
  if (old) old.remove();

  const celebration = document.createElement("div");
  celebration.id = "celebration";
  celebration.innerHTML =
    '<div class="celebration-message">' +
    '<div class="trophy">🏆</div>' +
    '<h2>تبریک! شما برنده شدید!</h2>' +
    '<p>آفرین به تلاش شما در آموزش زبان آلمانی</p>' +
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

// شروع دوباره آزمون
window.resetQuiz = function () {
  for (let i = 0; i < answers.length; i++) {
    answers[i] = null;
  }

  quizFinished = false;

  document.querySelectorAll(".question button").forEach(function (button) {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });

  document.getElementById("quizResult").textContent =
    "امتیاز شما: ۰ از ۵۰";

  document.getElementById("quizMessage").textContent =
    "آزمون را شروع کنید.";

  const celebration = document.getElementById("celebration");
  if (celebration) celebration.remove();
};
