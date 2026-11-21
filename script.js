
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

// تغییر زبان سایت
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

  console.log("KING ASAD German Learning is ready!");
});

// تلفظ کلمات آلمانی
window.speakGerman = function (text) {
  if (!("speechSynthesis" in window)) {
    alert("مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "de-DE";
  speech.rate = 0.85;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
