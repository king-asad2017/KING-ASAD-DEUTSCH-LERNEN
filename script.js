
const translations = {
  fa: {
    title: "به آموزشگاه آنلاین کینگ اسد خوش آمدید!",
    direction: "rtl",
    alphabet: "📚 الفبای آلمانی",
    words: "📖 لغات آلمانی",
    conversation: "🗣️ مکالمه روزمره",
    grammar: "✍️ گرامر آلمانی",
    quiz: "🎯 آزمون آموزشی"
  },
  de: {
    title: "Willkommen bei KING ASAD Deutsch Lernen!",
    direction: "ltr",
    alphabet: "📚 Deutsches Alphabet",
    words: "📖 Deutsche Wörter",
    conversation: "🗣️ Alltagsgespräche",
    grammar: "✍️ Deutsche Grammatik",
    quiz: "🎯 Lerntest"
  },
  en: {
    title: "Welcome to KING ASAD German Learning!",
    direction: "ltr",
    alphabet: "📚 German Alphabet",
    words: "📖 German Vocabulary",
    conversation: "🗣️ Daily Conversation",
    grammar: "✍️ German Grammar",
    quiz: "🎯 Learning Quiz"
  }
};

const languageSelect = document.getElementById("language");

function changeLanguage(lang) {
  const selected = translations[lang] || translations.fa;

  document.documentElement.lang = lang;
  document.documentElement.dir = selected.direction;

  document.getElementById("welcome").textContent = selected.title;

  const headings = document.querySelectorAll("section h3");

  const labels = [
    "alphabet",
    "words",
    "conversation",
    "grammar",
    "quiz"
  ];

  headings.forEach((heading, index) => {
    heading.textContent = selected[labels[index]];
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
  });
}

changeLanguage("fa");
