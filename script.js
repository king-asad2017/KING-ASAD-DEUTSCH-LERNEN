
/* =====================================
   KING ASAD - سیستم اصلی آموزشگاه
===================================== */

/* اطلاعات آزمون‌ها */
const quizData = {
    A1: {
        questions: [
            {
                question: "Was bedeutet Hallo?",
                options: ["سلام", "خداحافظ", "شب بخیر"],
                correct: 0
            },
            {
                question: "Wie heißt du?",
                options: ["چند سال داری؟", "نامت چیست؟", "کجا زندگی می‌کنی؟"],
                correct: 1
            },
            {
                question: "Was bedeutet Danke?",
                options: ["لطفاً", "ببخشید", "تشکر"],
                correct: 2
            },
            {
                question: "Wie geht es dir?",
                options: ["حالت چطور است؟", "نامت چیست؟", "اهل کجا هستی؟"],
                correct: 0
            },
            {
                question: "Was bedeutet Guten Morgen?",
                options: ["شب بخیر", "صبح بخیر", "عصر بخیر"],
                correct: 1
            }
        ],
        answers: [],
        finished: false
    },

    A2: {
        questions: [
            {
                question: "Ich _____ gestern nach Berlin gefahren.",
                options: ["bin", "habe", "ist"],
                correct: 0
            },
            {
                question: "Was bedeutet Einkaufen?",
                options: ["خوابیدن", "خرید کردن", "درس خواندن"],
                correct: 1
            },
            {
                question: "Er _____ jeden Tag Deutsch.",
                options: ["lernen", "lernst", "lernt"],
                correct: 2
            },
            {
                question: "Was bedeutet die Wohnung?",
                options: ["خانه / آپارتمان", "مدرسه", "بیمارستان"],
                correct: 0
            },
            {
                question: "Ich habe gestern Fußball _____.",
                options: ["spiele", "gespielt", "spielen"],
                correct: 1
            }
        ],
        answers: [],
        finished: false
    },

    B1: {
        questions: [
            {
                question: "Wenn ich Zeit hätte, _____ ich reisen.",
                options: ["werde", "würde", "bin"],
                correct: 1
            },
            {
                question: "Was bedeutet Obwohl?",
                options: ["زیرا", "اگر", "با وجود اینکه"],
                correct: 2
            },
            {
                question: "Er sagt, dass er krank _____.",
                options: ["ist", "sein", "bist"],
                correct: 0
            },
            {
                question: "Was bedeutet die Erfahrung?",
                options: ["تجربه", "تصمیم", "سفر"],
                correct: 0
            },
            {
                question: "Nachdem ich gegessen hatte, _____ ich spazieren.",
                options: ["gehe", "ging", "gehen"],
                correct: 1
            }
        ],
        answers: [],
        finished: false
    }
};

/* باز کردن آزمون */
window.openQuiz = function(level) {
    document.querySelectorAll('.quiz-box').forEach(function(box) {
        box.style.display = 'none';
    });

    const quizBox = document.getElementById('quiz-' + level);

    if (!quizBox || !quizData[level]) {
        alert('آزمون مورد نظر پیدا نشد.');
        return;
    }

    quizBox.style.display = 'block';

    const questionContainer = document.getElementById('questions-' + level);
    const result = document.getElementById('result-' + level);

    questionContainer.innerHTML = '';
    result.textContent = '';

    quizData[level].answers = [];
    quizData[level].finished = false;

    quizData[level].questions.forEach(function(question, index) {
        const card = document.createElement('div');
        card.className = 'quiz-question';

        const heading = document.createElement('h3');
        heading.textContent = (index + 1) + '. ' + question.question;
        card.appendChild(heading);

        question.options.forEach(function(option, optionIndex) {
            const label = document.createElement('label');
            const radio = document.createElement('input');

            radio.type = 'radio';
            radio.name = 'question-' + level + '-' + index;
            radio.value = optionIndex;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + option));

            card.appendChild(label);
        });

        questionContainer.appendChild(card);
    });

    const submit = document.createElement('button');
    submit.textContent = 'ثبت پاسخ‌ها و مشاهده نتیجه';
    submit.onclick = function() {
        submitQuiz(level);
    };

    const reset = document.createElement('button');
    reset.textContent = 'شروع دوباره آزمون';
    reset.style.marginRight = '10px';
    reset.onclick = function() {
        openQuiz(level);
    };

    questionContainer.appendChild(submit);
    questionContainer.appendChild(reset);

    quizBox.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

/* ثبت پاسخ‌ها و محاسبه امتیاز */
window.submitQuiz = function(level) {
    const quiz = quizData[level];

    if (!quiz || quiz.finished) return;

    let score = 0;
    let unanswered = 0;

    quiz.questions.forEach(function(question, index) {
        const selected = document.querySelector(
            'input[name="question-' + level + '-' + index + '"]:checked'
        );

        if (!selected) {
            unanswered++;
            return;
        }

        if (Number(selected.value) === question.correct) {
            score++;
        }
    });

    if (unanswered > 0) {
        alert('لطفاً به تمام سؤال‌ها پاسخ دهید.');
        return;
    }

    quiz.finished = true;

    const totalScore = score * 10;
    const result = document.getElementById('result-' + level);

    result.textContent =
        'امتیاز شما: ' + totalScore + ' از ۵۰ — پاسخ درست: ' +
        score + ' از ۵';

    saveQuizProgress(level, totalScore);

    if (totalScore >= 40) {
        result.textContent += ' 🏆 تبریک! شما موفق شدید.';
        showCelebration(level, totalScore);
    } else {
        result.textContent += ' 🌷 تلاش خوبی بود؛ دوباره تمرین کنید.';
    }
};

/* ذخیره نتیجه آزمون */
function saveQuizProgress(level, score) {
    try {
        const progress = JSON.parse(
            localStorage.getItem('kingAsadProgress') || '{}'
        );

        progress[level] = {
            score: score,
            date: new Date().toLocaleDateString()
        };

        localStorage.setItem(
            'kingAsadProgress',
            JSON.stringify(progress)
        );
    } catch(error) {
        console.log('ذخیره پیشرفت امکان‌پذیر نشد.');
    }
}

/* نمایش جشن موفقیت */
function showCelebration(level, score) {
    const old = document.getElementById('celebration');

    if (old) old.remove();

    const celebration = document.createElement('div');
    celebration.id = 'celebration';

    celebration.style.cssText =
        'position:fixed;inset:0;background:rgba(0,0,0,.8);' +
        'z-index:9999;display:flex;align-items:center;' +
        'justify-content:center;padding:20px;text-align:center;';

    const message = document.createElement('div');

    message.style.cssText =
        'background:white;padding:30px;border-radius:20px;' +
        'max-width:400px;width:100%;';

    message.innerHTML =
        '<div style="font-size:60px">🏆</div>' +
        '<h2>تبریک! شما برنده شدید!</h2>' +
        '<p>آزمون ' + level + '</p>' +
        '<h3>امتیاز: ' + score + ' از ۵۰</h3>' +
        '<p style="font-size:25px">🌸 🌹 🎉 🌺 🎊</p>';

    const close = document.createElement('button');
    close.textContent = 'بستن';
    close.onclick = function() {
        celebration.remove();
    };

    message.appendChild(close);
    celebration.appendChild(message);
    document.body.appendChild(celebration);
}

/* =====================================
   فرهنگ لغات چندزبانه
===================================== */

/* ترجمه آنلاین با MyMemory */
async function translateText(text, source, target) {
    const url =
        'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(text) +
        '&langpair=' +
        encodeURIComponent(source + '|' + target);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Translation service unavailable');
    }

    const data = await response.json();

    if (
        !data.responseData ||
        !data.responseData.translatedText ||
        data.responseStatus !== 200
    ) {
        return '';
    }

    return data.responseData.translatedText;
}

/* جست‌وجوی لغات */
window.searchDictionary = async function() {
    const input = document.getElementById('dictionaryInput');
    const source = document.getElementById('dictionarySource').value;
    const target = document.getElementById('dictionaryTarget').value;
    const result = document.getElementById('dictionaryResult');

    const word = input.value.trim();

    if (!word) {
        result.textContent = 'لطفاً یک کلمه یا جمله وارد کنید.';
        return;
    }

    if (source === target) {
        result.textContent = 'زبان مبدأ و مقصد باید متفاوت باشند.';
        return;
    }

    result.textContent = '⏳ در حال جست‌وجوی ترجمه...';

    try {
        const translated = await translateText(word, source, target);

        if (!translated) {
            result.textContent =
                'ترجمه پیدا نشد. لطفاً کلمه دیگری امتحان کنید.';
            return;
        }

        const box = document.createElement('div');
        box.className = 'translation-result';

        const heading = document.createElement('h3');
        heading.textContent = '📖 نتیجه فرهنگ لغات';

        const original = document.createElement('p');
        original.textContent = 'کلمه اصلی: ' + word;

        const translation = document.createElement('p');
        translation.textContent = 'ترجمه: ' + translated;

        box.append(heading, original, translation);

        if (target === 'de') {
            const example = getGermanExample(translated);

            const exampleHeading = document.createElement('h3');
            exampleHeading.textContent = '✍️ جمله نمونه آلمانی';

            const sentence = document.createElement('p');
            sentence.textContent = example;

            const speakButton = document.createElement('button');
            speakButton.textContent = '🔊 شنیدن تلفظ آلمانی';

            speakButton.onclick = function() {
                speakGerman(example);
            };

            box.append(exampleHeading, sentence, speakButton);

            const sentenceHeading = document.createElement('h3');
            sentenceHeading.textContent = 'ترجمه جمله';

            const sentenceTranslation = document.createElement('p');
            sentenceTranslation.textContent =
                '⏳ در حال ترجمه جمله...';

            box.append(sentenceHeading, sentenceTranslation);

            result.replaceChildren(box);

            try {
                const translatedSentence =
                    await translateText(example, 'de', source);

                sentenceTranslation.textContent =
                    translatedSentence || 'ترجمه جمله در دسترس نیست.';
            } catch(error) {
                sentenceTranslation.textContent =
                    'ترجمه جمله فعلاً در دسترس نیست.';
            }

        } else {
            result.replaceChildren(box);
        }

    } catch(error) {
        result.textContent =
            'ارتباط با سرویس ترجمه برقرار نشد. اینترنت را بررسی کنید و دوباره تلاش کنید.';
    }
};

/* جمله‌های نمونه برای فعل‌های رایج آلمانی */
function getGermanExample(word) {
    const examples = {
        'kommen': 'Ich komme heute nach Hause.',
        'gehen': 'Ich gehe zur Schule.',
        'lernen': 'Ich lerne Deutsch.',
        'essen': 'Ich esse einen Apfel.',
        'trinken': 'Ich trinke Wasser.',
        'machen': 'Ich mache meine Arbeit.',
        'arbeiten': 'Ich arbeite heute.',
        'wohnen': 'Ich wohne in Deutschland.',
        'sprechen': 'Ich spreche Deutsch.',
        'schreiben': 'Ich schreibe einen Brief.',
        'lesen': 'Ich lese ein Buch.',
        'schlafen': 'Ich schlafe gut.',
        'helfen': 'Ich helfe meiner Familie.',
        'fahren': 'Ich fahre mit dem Bus.',
        'kaufen': 'Ich kaufe Brot.',
        'spielen': 'Ich spiele Fußball.',
        'suchen': 'Ich suche meine Schlüssel.',
        'finden': 'Ich finde den Weg.',
        'bringen': 'Ich bringe Wasser.',
        'sehen': 'Ich sehe einen Vogel.',
        'hören': 'Ich höre Musik.'
    };

    const normalized = word.trim().toLowerCase();

    return examples[normalized] ||
        'Das Wort „' + word + '“ ist wichtig.';
}

/* انتخاب زبان از صفحه زبان‌های بین‌المللی */
window.selectDictionaryLanguage = function(language) {
    const source = document.getElementById('dictionarySource');
    const target = document.getElementById('dictionaryTarget');

    if (!source || !target) return;

    source.value = 'fa';
    target.value = language;

    const input = document.getElementById('dictionaryInput');

    if (input) {
        input.value = '';
    }

    const result = document.getElementById('dictionaryResult');

    if (result) {
        result.textContent =
            'زبان مقصد انتخاب شد. کلمه مورد نظر را وارد کنید.';
    }

    showPage('dictionaryPage');
};

/* تلفظ آلمانی */
window.speakGerman = function(text) {
    if (!('speechSynthesis' in window)) {
        alert('مرورگر شما از پخش صدا پشتیبانی نمی‌کند.');
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'de-DE';
    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);
};

/* =====================================
   پیشرفت آموزشی
===================================== */

function showProgress() {
    const container = document.getElementById('homeProgress');

    if (!container) return;

    let progress = {};

    try {
        progress = JSON.parse(
            localStorage.getItem('kingAsadProgress') || '{}'
        );
    } catch(error) {
        progress = {};
    }

    container.innerHTML = '';

    ['A1', 'A2', 'B1'].forEach(function(level) {
        const item = document.createElement('div');
        item.className = 'progress-box';

        const saved = progress[level];

        const title = document.createElement('h3');
        title.textContent = 'سطح ' + level;

        const score = document.createElement('p');
        score.textContent = saved
            ? 'آخرین امتیاز: ' + saved.score + ' از ۵۰'
            : 'هنوز آزمونی انجام نشده است.';

        const bar = document.createElement('div');
        bar.className = 'progress-bar';

        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        fill.style.width = saved
            ? Math.max(0, Math.min(100, saved.score * 2)) + '%'
            : '0%';

        bar.appendChild(fill);
        item.append(title, score, bar);

        container.appendChild(item);
    });
}

/* =====================================
   درس‌ها، مکالمه و گرامر
===================================== */

/* نمایش درس‌ها */
function renderLessons() {
    const levels = [
        { id: 'a1LessonsContainer', name: 'A1', total: 19 },
        { id: 'a2LessonsContainer', name: 'A2', total: 20 },
        { id: 'b1LessonsContainer', name: 'B1', total: 20 }
    ];

    levels.forEach(function(level) {
        const container = document.getElementById(level.id);

        if (!container) return;

        container.innerHTML = '';

        for (let i = 1; i <= level.total; i++) {
            const card = document.createElement('div');
            card.className = 'lesson-card';

            const heading = document.createElement('h3');
            heading.textContent = 'درس ' + i + ' - سطح ' + level.name;

            const description = document.createElement('p');
            description.textContent =
                'در این درس، واژگان، جمله‌ها و تمرین‌های زبان آلمانی را یاد می‌گیرید.';

            const vocabulary = document.createElement('p');
            vocabulary.textContent =
                'تمرین: سلام و احوال‌پرسی، معرفی خود و ساخت جمله‌های ساده.';

            card.append(heading, description, vocabulary);

            container.appendChild(card);
        }
    });
}

/* نمایش مکالمه */
function renderConversation() {
    const container = document.getElementById('conversationContent');

    if (!container) return;

    const conversations = [
        ['Hallo!', 'سلام!'],
        ['Wie heißt du?', 'نامت چیست؟'],
        ['Ich heiße Ahmad.', 'نام من احمد است.'],
        ['Wie geht es dir?', 'حالت چطور است؟'],
        ['Mir geht es gut, danke.', 'من خوب هستم، تشکر.'],
        ['Woher kommst du?', 'اهل کجا هستی؟'],
        ['Ich komme aus Afghanistan.', 'من اهل افغانستان هستم.'],
        ['Wo wohnst du?', 'کجا زندگی می‌کنی؟'],
        ['Ich wohne in Deutschland.', 'من در آلمان زندگی می‌کنم.'],
        ['Auf Wiedersehen!', 'خداحافظ!']
    ];

    container.innerHTML = '';

    conversations.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'conversation-card';

        const german = document.createElement('h3');
        german.textContent = item[0];

        const persian = document.createElement('p');
        persian.textContent = item[1];

        const button = document.createElement('button');
        button.textContent = '🔊 شنیدن تلفظ';

        button.onclick = function() {
            speakGerman(item[0]);
        };

        card.append(german, persian, button);
        container.appendChild(card);
    });
}

/* نمایش گرامر */
function renderGrammar() {
    const container = document.getElementById('grammarContent');

    if (!container) return;

    const grammar = [
        {
            title: 'فعل sein',
            explanation: 'فعل sein به معنی بودن است.',
            example: 'Ich bin müde.',
            translation: 'من خسته هستم.'
        },
        {
            title: 'فعل haben',
            explanation: 'فعل haben به معنی داشتن است.',
            example: 'Ich habe ein Buch.',
            translation: 'من یک کتاب دارم.'
        },
        {
            title: 'حروف تعریف der, die, das',
            explanation: 'در زبان آلمانی اسم‌ها دارای جنس دستوری هستند.',
            example: 'der Mann, die Frau, das Kind',
            translation: 'مرد، زن، کودک'
        },
        {
            title: 'صرف فعل در زمان حال',
            explanation: 'فعل با توجه به فاعل تغییر می‌کند.',
            example: 'Ich lerne Deutsch.',
            translation: 'من آلمانی یاد می‌گیرم.'
        },
        {
            title: 'ساختار جمله',
            explanation: 'در جمله خبری ساده، فعل معمولاً در جایگاه دوم قرار می‌گیرد.',
            example: 'Heute lerne ich Deutsch.',
            translation: 'امروز من آلمانی یاد می‌گیرم.'
        },
        {
            title: 'زمان گذشته Perfekt',
            explanation: 'برای بیان بسیاری از اتفاقات گذشته در مکالمه استفاده می‌شود.',
            example: 'Ich habe Deutsch gelernt.',
            translation: 'من آلمانی یاد گرفتم.'
        }
    ];

    container.innerHTML = '';

    grammar.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'grammar-card';

        const heading = document.createElement('h3');
        heading.textContent = item.title;

        const explanation = document.createElement('p');
        explanation.textContent = item.explanation;

        const example = document.createElement('p');
        example.textContent = 'مثال: ' + item.example;

        const translation = document.createElement('p');
        translation.textContent = 'ترجمه: ' + item.translation;

        const button = document.createElement('button');
        button.textContent = '🔊 شنیدن مثال';

        button.onclick = function() {
            speakGerman(item.example);
        };

        card.append(
            heading,
            explanation,
            example,
            translation,
            button
        );

        container.appendChild(card);
    });
}


/* نمایش ویدیوهای آموزشی */
function renderVideos() {
    const videos = [
        { id: 'videosA1', level: 'A1' },
        { id: 'videosA2', level: 'A2' },
        { id: 'videosB1', level: 'B1' }
    ];

    videos.forEach(function(item) {
        const container = document.getElementById(item.id);

        if (!container) return;

        const message = document.createElement('p');
        message.textContent =
            'ویدیوهای آموزشی سطح ' + item.level +
            ' در این بخش قرار می‌گیرند.';

        container.appendChild(message);
    });
}

/* نمایش صفحه */
window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (pageId === 'homePage') {
        showProgress();
    }
};

/* اجرای بخش‌های سایت هنگام بارگذاری */
document.addEventListener('DOMContentLoaded', function() {
    renderLessons();
    renderConversation();
    renderGrammar();
    renderVideos();
    showProgress();
    showPage('homePage');
});
