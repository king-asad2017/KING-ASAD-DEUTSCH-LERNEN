
/* =========================================
   KING ASAD - سیستم اصلی آموزشگاه
========================================= */

/* اطلاعات آزمون‌ها */
const quizData = {
    A1: {
        questions: [
            {question:"Was bedeutet Hallo?",options:["سلام","خداحافظ","شب بخیر"],correct:0},
            {question:"Wie heißt du?",options:["چند سال داری؟","نامت چیست؟","کجا زندگی می‌کنی؟"],correct:1},
            {question:"Was bedeutet Danke?",options:["لطفاً","ببخشید","تشکر"],correct:2},
            {question:"Wie geht es dir?",options:["حالت چطور است؟","نامت چیست؟","اهل کجا هستی؟"],correct:0},
            {question:"Was bedeutet Guten Morgen?",options:["شب بخیر","صبح بخیر","عصر بخیر"],correct:1}
        ],
        finished:false
    },
    A2: {
        questions: [
            {question:"Ich _____ gestern nach Berlin gefahren.",options:["bin","habe","ist"],correct:0},
            {question:"Was bedeutet Einkaufen?",options:["خوابیدن","خرید کردن","درس خواندن"],correct:1},
            {question:"Er _____ jeden Tag Deutsch.",options:["lernen","lernst","lernt"],correct:2},
            {question:"Was bedeutet die Wohnung?",options:["خانه / آپارتمان","مدرسه","بیمارستان"],correct:0},
            {question:"Ich habe gestern Fußball _____.",options:["spiele","gespielt","spielen"],correct:1}
        ],
        finished:false
    },
    B1: {
        questions: [
            {question:"Wenn ich Zeit hätte, _____ ich reisen.",options:["werde","würde","bin"],correct:1},
            {question:"Was bedeutet Obwohl?",options:["زیرا","اگر","با وجود اینکه"],correct:2},
            {question:"Er sagt, dass er krank _____.",options:["ist","sein","bist"],correct:0},
            {question:"Was bedeutet die Erfahrung?",options:["تجربه","تصمیم","سفر"],correct:0},
            {question:"Nachdem ich gegessen hatte, _____ ich spazieren.",options:["gehe","ging","gehen"],correct:1}
        ],
        finished:false
    }
};

/* =========================================
   ابزارهای عمومی
========================================= */

function element(id) {
    return document.getElementById(id);
}

function safeText(tag, text) {
    const node = document.createElement(tag);
    node.textContent = text;
    return node;
}

/* =========================================
   باز کردن صفحات
========================================= */

window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });

    const page = element(pageId);

    if (!page) {
        alert('صفحه پیدا نشد: ' + pageId);
        return;
    }

    page.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});

    if (pageId === 'homePage') showProgress();
};

/* =========================================
   انتخاب سطح درس‌ها
========================================= */

window.showLevelLessons = function(level) {
    ['A1','A2','B1'].forEach(function(name) {
        const box = element(name.toLowerCase() + 'LessonsContainer');
        if (box) box.style.display = name === level ? 'block' : 'none';
    });

    const container = element(level.toLowerCase() + 'LessonsContainer');

    if (container) {
        container.scrollIntoView({behavior:'smooth',block:'start'});
    }
};

/* =========================================
   اطلاعات درس‌ها
========================================= */

const lessonData = {
    A1: [
        {title:'سلام و معرفی خود',words:[['Hallo','سلام'],['Guten Morgen','صبح بخیر'],['Danke','تشکر'],['Bitte','لطفاً'],['Tschüss','خداحافظ']],dialog:[['Hallo!','سلام!'],['Wie heißt du?','نامت چیست؟'],['Ich heiße Ahmad.','نام من احمد است.']],grammar:'فعل heißen برای معرفی نام استفاده می‌شود. مثال: Ich heiße Ahmad.'},
        {title:'کشور و زبان',words:[['Deutschland','آلمان'],['Afghanistan','افغانستان'],['die Sprache','زبان'],['Deutsch','آلمانی'],['Persisch','فارسی']],dialog:[['Woher kommst du?','اهل کجا هستی؟'],['Ich komme aus Afghanistan.','من اهل افغانستان هستم.']],grammar:'برای گفتن اهل کجا بودن از kommen aus استفاده می‌کنیم.'},
        {title:'خانواده',words:[['die Familie','خانواده'],['der Vater','پدر'],['die Mutter','مادر'],['der Bruder','برادر'],['die Schwester','خواهر']],dialog:[['Hast du Geschwister?','خواهر یا برادر داری؟'],['Ja, ich habe einen Bruder.','بلی، یک برادر دارم.']],grammar:'فعل haben به معنی داشتن است: Ich habe einen Bruder.'},
        {title:'اعداد',words:[['eins','یک'],['zwei','دو'],['drei','سه'],['vier','چهار'],['fünf','پنج']],dialog:[['Wie alt bist du?','چند سال داری؟'],['Ich bin zwanzig Jahre alt.','من بیست سال دارم.']],grammar:'برای سن از فعل sein استفاده می‌کنیم: Ich bin 20 Jahre alt.'},
        {title:'غذا و نوشیدنی',words:[['das Wasser','آب'],['das Brot','نان'],['der Apfel','سیب'],['der Tee','چای'],['essen','خوردن']],dialog:[['Was möchtest du essen?','چه می‌خواهی بخوری؟'],['Ich möchte Brot essen.','می‌خواهم نان بخورم.']],grammar:'möchten برای بیان خواسته مؤدبانه استفاده می‌شود.'}
    ],
    A2: [
        {title:'زندگی روزمره',words:[['aufstehen','بیدار شدن'],['frühstücken','صبحانه خوردن'],['arbeiten','کار کردن'],['einkaufen','خرید کردن'],['schlafen','خوابیدن']],dialog:[['Wann stehst du auf?','چه وقت بیدار می‌شوی؟'],['Ich stehe um sieben Uhr auf.','من ساعت هفت بیدار می‌شوم.']],grammar:'افعال جداشدنی مانند aufstehen در جمله صرف می‌شوند و پیشوند به آخر جمله می‌رود.'},
        {title:'خانه و آپارتمان',words:[['die Wohnung','آپارتمان'],['das Zimmer','اتاق'],['die Küche','آشپزخانه'],['das Bad','حمام'],['die Miete','کرایه']],dialog:[['Wie ist deine Wohnung?','آپارتمانت چگونه است؟'],['Sie ist groß und schön.','بزرگ و زیبا است.']],grammar:'صفت‌ها برای توصیف اسم استفاده می‌شوند: eine schöne Wohnung.'},
        {title:'خرید کردن',words:[['der Preis','قیمت'],['billig','ارزان'],['teuer','گران'],['bezahlen','پرداخت کردن'],['das Geschäft','فروشگاه']],dialog:[['Wie viel kostet das?','این چند قیمت است؟'],['Das kostet zehn Euro.','ده یورو قیمت دارد.']],grammar:'برای پرسیدن قیمت می‌گوییم: Wie viel kostet das?'},
        {title:'زمان گذشته',words:[['gestern','دیروز'],['letzte Woche','هفته گذشته'],['gemacht','انجام داده'],['gegangen','رفته'],['gesehen','دیده']],dialog:[['Was hast du gestern gemacht?','دیروز چه کار کردی؟'],['Ich habe Deutsch gelernt.','من آلمانی خواندم.']],grammar:'زمان Perfekt با haben یا sein و قسمت سوم فعل ساخته می‌شود.'},
        {title:'قرار ملاقات',words:[['der Termin','قرار'],['morgen','فردا'],['heute','امروز'],['verschieben','عقب انداختن'],['pünktlich','به‌موقع']],dialog:[['Hast du morgen Zeit?','فردا وقت داری؟'],['Ja, um zehn Uhr.','بلی، ساعت ده.']],grammar:'برای پیشنهاد می‌توان از Können wir...? استفاده کرد.'}
    ],
    B1: [
        {title:'بیان نظر',words:[['die Meinung','نظر'],['meiner Meinung nach','به نظر من'],['zustimmen','موافق بودن'],['ablehnen','رد کردن'],['begründen','دلیل آوردن']],dialog:[['Was denkst du darüber?','در این باره چه فکر می‌کنی؟'],['Meiner Meinung nach ist es wichtig.','به نظر من این مهم است.']],grammar:'برای بیان نظر از meiner Meinung nach و ich denke, dass استفاده می‌شود.'},
        {title:'محیط زیست',words:[['die Umwelt','محیط زیست'],['die Natur','طبیعت'],['schützen','محافظت کردن'],['die Verschmutzung','آلودگی'],['recyceln','بازیافت کردن']],dialog:[['Was können wir für die Umwelt tun?','برای محیط زیست چه می‌توانیم انجام دهیم؟'],['Wir können weniger Plastik benutzen.','می‌توانیم پلاستیک کمتری استفاده کنیم.']],grammar:'جمله‌های وابسته با weil و dass فعل را به آخر می‌برند.'},
        {title:'کار و شغل',words:[['die Bewerbung','درخواست کار'],['der Lebenslauf','رزومه'],['die Erfahrung','تجربه'],['das Vorstellungsgespräch','مصاحبه کاری'],['die Fähigkeit','توانایی']],dialog:[['Haben Sie Berufserfahrung?','آیا تجربه کاری دارید؟'],['Ja, ich habe drei Jahre Erfahrung.','بلی، سه سال تجربه دارم.']],grammar:'برای بیان تجربه از Perfekt و زمان گذشته استفاده می‌شود.'},
        {title:'سلامتی',words:[['die Gesundheit','سلامتی'],['die Untersuchung','معاینه'],['die Krankheit','بیماری'],['der Arzt','دکتر'],['sich erholen','استراحت کردن و بهبود یافتن']],dialog:[['Was fehlt Ihnen?','چه مشکلی دارید؟'],['Ich habe seit gestern Kopfschmerzen.','از دیروز سردرد دارم.']],grammar:'seit برای بیان کاری که از گذشته شروع شده و هنوز ادامه دارد استفاده می‌شود.'},
        {title:'آینده و برنامه‌ها',words:[['die Zukunft','آینده'],['der Plan','برنامه'],['hoffen','امیدوار بودن'],['vorhaben','قصد داشتن'],['das Ziel','هدف']],dialog:[['Was hast du für die Zukunft vor?','برای آینده چه برنامه‌ای داری؟'],['Ich möchte studieren.','می‌خواهم تحصیل کنم.']],grammar:'برای بیان آینده از werden + مصدر استفاده می‌شود.'}
    ]
};

/* ساخت محتوای هر درس */
function renderLessons() {
    const levels = [
        {id:'a1LessonsContainer',name:'A1',total:19},
        {id:'a2LessonsContainer',name:'A2',total:20},
        {id:'b1LessonsContainer',name:'B1',total:20}
    ];

    levels.forEach(function(level) {
        const container = element(level.id);
        if (!container) return;

        container.innerHTML = '';

        for (let i=1; i<=level.total; i++) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'lesson-card';

            const data = lessonData[level.name][(i-1)%lessonData[level.name].length];
            button.textContent = '📘 درس ' + i + ': ' + data.title;

            button.addEventListener('click',function() {
                showLessonDetail(level.name,i,data,container);
            });

            container.appendChild(button);
        }

        const detail = document.createElement('div');
        detail.id = 'lessonDetail' + level.name;
        detail.className = 'lesson-detail';
        detail.style.display = 'none';
        container.appendChild(detail);
    });
}

/* نمایش محتوای درس */
function showLessonDetail(level,number,data,container) {
    const detail = element('lessonDetail' + level);
    if (!detail) return;

    detail.innerHTML = '';
    detail.style.display = 'block';

    detail.appendChild(safeText('h2','درس '+number+' - سطح '+level+': '+data.title));

    /* ویدیو */
    const videoBox = document.createElement('div');
    videoBox.className = 'content-card';
    videoBox.appendChild(safeText('h3','🎬 ویدیوی آموزشی'));

    if (level === 'A1' && number === 1) {
        const video = document.createElement('iframe');
        video.src = 'https://www.youtube-nocookie.com/embed/4-eDoThe6qo';
        video.title = 'آموزش زبان آلمانی A1 - Nicos Weg';
        video.width = '100%';
        video.height = '240';
        video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        video.allowFullscreen = true;
        video.style.border = '0';
        videoBox.appendChild(video);
    } else {
        videoBox.appendChild(safeText('p','ویدیوی اختصاصی این درس هنوز اضافه نشده است.'));
    }

    detail.appendChild(videoBox);

    /* مکالمه */
    const conversationBox = document.createElement('div');
    conversationBox.className = 'content-card';
    conversationBox.appendChild(safeText('h3','🗣️ مکالمه با ترجمه فارسی'));

    data.dialog.forEach(function(line) {
        conversationBox.appendChild(safeText('p','🇩🇪 '+line[0]));
        conversationBox.appendChild(safeText('p','🇦🇫 '+line[1]));

        const speak = document.createElement('button');
        speak.textContent = '🔊 شنیدن';
        speak.onclick = function(){speakGerman(line[0]);};
        conversationBox.appendChild(speak);
    });

    detail.appendChild(conversationBox);

    /* لغات */
    const wordsBox = document.createElement('div');
    wordsBox.className = 'content-card';
    wordsBox.appendChild(safeText('h3','📚 لغات و معنی فارسی'));

    data.words.forEach(function(word) {
        const row = document.createElement('p');
        row.textContent = word[0]+' = '+word[1];

        const speak = document.createElement('button');
        speak.textContent = '🔊';
        speak.onclick = function(){speakGerman(word[0]);};

        row.appendChild(speak);
        wordsBox.appendChild(row);
    });

    detail.appendChild(wordsBox);

    /* گرامر */
    const grammarBox = document.createElement('div');
    grammarBox.className = 'content-card';
    grammarBox.appendChild(safeText('h3','📖 گرامر درس'));
    grammarBox.appendChild(safeText('p',data.grammar));
    detail.appendChild(grammarBox);

    /* تمرین */
    const practice = document.createElement('div');
    practice.className = 'content-card';
    practice.appendChild(safeText('h3','✍️ تمرین درس'));
    practice.appendChild(safeText('p','معنی این کلمه چیست؟'));

    const word = data.words[0];
    practice.appendChild(safeText('h4',word[0]));

    const answer = document.createElement('input');
    answer.placeholder = 'معنی فارسی را بنویسید';
    practice.appendChild(answer);

    const check = document.createElement('button');
    check.textContent = 'بررسی پاسخ';
    check.onclick = function() {
        const result = element('practiceResult'+level);
        if (answer.value.trim() === word[1]) {
            result.textContent = 'آفرین! پاسخ درست است. 🌹';
        } else {
            result.textContent = 'پاسخ درست: '+word[1];
        }
    };
    practice.appendChild(check);

    const result = document.createElement('p');
    result.id = 'practiceResult'+level;
    practice.appendChild(result);
    detail.appendChild(practice);

    const close = document.createElement('button');
    close.className = 'action';
    close.textContent = 'بستن درس';
    close.onclick = function(){detail.style.display='none';};
    detail.appendChild(close);

    detail.scrollIntoView({behavior:'smooth',block:'start'});
}

/* =========================================
   مکالمه‌های عمومی
========================================= */

function renderConversation() {
    const container = element('conversationContent');
    if (!container) return;

    const conversations = [
        ['Hallo!','سلام!'],
        ['Wie heißt du?','نامت چیست؟'],
        ['Ich heiße Ahmad.','نام من احمد است.'],
        ['Wie geht es dir?','حالت چطور است؟'],
        ['Mir geht es gut, danke.','من خوب هستم، تشکر.'],
        ['Woher kommst du?','اهل کجا هستی؟'],
        ['Ich komme aus Afghanistan.','من اهل افغانستان هستم.'],
        ['Wo wohnst du?','کجا زندگی می‌کنی؟'],
        ['Ich wohne in Deutschland.','من در آلمان زندگی می‌کنم.'],
        ['Auf Wiedersehen!','خداحافظ!']
    ];

    container.innerHTML = '';

    conversations.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'conversation-card';
        card.appendChild(safeText('h3',item[0]));
        card.appendChild(safeText('p',item[1]));

        const button = document.createElement('button');
        button.textContent = '🔊 شنیدن تلفظ';
        button.onclick = function(){speakGerman(item[0]);};

        card.appendChild(button);
        container.appendChild(card);
    });
}

/* =========================================
   گرامر
========================================= */

function renderGrammar() {
    const container = element('grammarContent');
    if (!container) return;

    const items = [
        ['فعل sein','فعل sein به معنی بودن است.','Ich bin müde.','من خسته هستم.'],
        ['فعل haben','فعل haben به معنی داشتن است.','Ich habe ein Buch.','من یک کتاب دارم.'],
        ['حروف تعریف','اسم‌ها جنس دستوری دارند.','der Mann, die Frau, das Kind','مرد، زن، کودک'],
        ['صرف فعل','فعل با فاعل تغییر می‌کند.','Ich lerne Deutsch.','من آلمانی یاد می‌گیرم.'],
        ['ساختار جمله','در جمله خبری ساده فعل معمولاً جایگاه دوم است.','Heute lerne ich Deutsch.','امروز آلمانی یاد می‌گیرم.'],
        ['زمان Perfekt','برای بیان بسیاری از اتفاقات گذشته استفاده می‌شود.','Ich habe Deutsch gelernt.','من آلمانی یاد گرفتم.']
    ];

    container.innerHTML = '';

    items.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'grammar-card';
        card.appendChild(safeText('h3',item[0]));
        card.appendChild(safeText('p',item[1]));
        card.appendChild(safeText('p','مثال: '+item[2]));
        card.appendChild(safeText('p','ترجمه: '+item[3]));

        const button = document.createElement('button');
        button.textContent = '🔊 شنیدن مثال';
        button.onclick = function(){speakGerman(item[2]);};

        card.appendChild(button);
        container.appendChild(card);
    });
}

/* =========================================
   ویدیوها
========================================= */

function renderVideos() {
    ['A1','A2','B1'].forEach(function(level) {
        const container = element('videos'+level);
        if (!container) return;

        container.innerHTML = '';

        if (level === 'A1') {
            const title = safeText('h3','Nicos Weg - آموزش آلمانی A1');
            const video = document.createElement('iframe');
            video.src = 'https://www.youtube-nocookie.com/embed/4-eDoThe6qo';
            video.width = '100%';
            video.height = '240';
            video.title = 'Nicos Weg A1';
            video.allowFullscreen = true;
            video.style.border = '0';
            container.append(title,video);
        } else {
            container.appendChild(safeText('p','ویدیوهای این سطح به‌زودی اضافه می‌شوند.'));
        }
    });
}

window.showVideoLevel = function(level) {
    ['A1','A2','B1'].forEach(function(name) {
        const box = element('videos'+name);
        if (box) box.style.display = name === level ? 'block' : 'none';
    });
};

/* =========================================
   آزمون‌ها
========================================= */

window.openQuiz = function(level) {
    document.querySelectorAll('.quiz-box').forEach(function(box) {
        box.style.display = 'none';
    });

    const box = element('quiz-'+level);
    const questions = element('questions-'+level);
    const result = element('result-'+level);

    if (!box || !questions || !result || !quizData[level]) {
        alert('آزمون پیدا نشد.');
        return;
    }

    box.style.display = 'block';
    questions.innerHTML = '';
    result.textContent = '';
    quizData[level].finished = false;

    quizData[level].questions.forEach(function(question,index) {
        const card = document.createElement('div');
        card.className = 'quiz-question';
        card.appendChild(safeText('h3',(index+1)+'. '+question.question));

        question.options.forEach(function(option,i) {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question-'+level+'-'+index;
            radio.value = i;
            label.append(radio,document.createTextNode(' '+option));
            card.appendChild(label);
        });

        questions.appendChild(card);
    });

    const submit = document.createElement('button');
    submit.textContent = 'ثبت پاسخ‌ها';
    submit.onclick = function(){submitQuiz(level);};
    questions.appendChild(submit);

    box.scrollIntoView({behavior:'smooth',block:'start'});
};

window.submitQuiz = function(level) {
    const quiz = quizData[level];
    if (!quiz || quiz.finished) return;

    let score = 0;
    let unanswered = 0;

    quiz.questions.forEach(function(question,index) {
        const selected = document.querySelector(
            'input[name="question-'+level+'-'+index+'"]:checked'
        );

        if (!selected) {
            unanswered++;
        } else if (Number(selected.value) === question.correct) {
            score++;
        }
    });

    if (unanswered) {
        alert('لطفاً به تمام سؤال‌ها پاسخ دهید.');
        return;
    }

    quiz.finished = true;
    const points = score*10;
    const result = element('result-'+level);

    result.textContent = 'امتیاز شما: '+points+' از ۵۰';

    saveQuizProgress(level,points);

    if (points >= 40) {
        result.textContent += ' 🏆 تبریک! موفق شدید.';
        showCelebration(level,points);
    } else {
        result.textContent += ' 🌷 دوباره تمرین کنید.';
    }
};

function showCelebration(level,score) {
    const old = element('celebration');
    if (old) old.remove();

    const box = document.createElement('div');
    box.id = 'celebration';
    box.style.cssText = 'position:fixed;inset:0;background:#000b;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';

    const message = document.createElement('div');
    message.style.cssText = 'background:white;padding:30px;border-radius:20px;text-align:center;color:#142b52';
    message.appendChild(safeText('h2','🏆 تبریک! شما موفق شدید!'));
    message.appendChild(safeText('p','آزمون '+level));
    message.appendChild(safeText('h3','امتیاز: '+score+' از ۵۰'));

    const close = document.createElement('button');
    close.textContent = 'بستن';
    close.onclick = function(){box.remove();};

    message.appendChild(close);
    box.appendChild(message);
    document.body.appendChild(box);
}

/* =========================================
   ذخیره پیشرفت
========================================= */

function saveQuizProgress(level,score) {
    try {
        const progress = JSON.parse(localStorage.getItem('kingAsadProgress') || '{}');
        progress[level] = {score:score,date:new Date().toLocaleDateString()};
        localStorage.setItem('kingAsadProgress',JSON.stringify(progress));
    } catch(error) {
        console.log('ذخیره پیشرفت انجام نشد.');
    }
}

function showProgress() {
    const container = element('homeProgress');
    if (!container) return;

    let progress = {};

    try {
        progress = JSON.parse(localStorage.getItem('kingAsadProgress') || '{}');
    } catch(error) {}

    container.innerHTML = '';

    ['A1','A2','B1'].forEach(function(level) {
        const card = document.createElement('div');
        card.className = 'progress-box';

        card.appendChild(safeText('h3','سطح '+level));

        const saved = progress[level];

        card.appendChild(safeText('p',saved ? 'آخرین امتیاز: '+saved.score+' از ۵۰' : 'هنوز آزمونی انجام نشده است.'));

        const bar = document.createElement('div');
        bar.className = 'progress-bar';

        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        fill.style.width = saved ? Math.min(100,saved.score*2)+'%' : '0%';

        bar.appendChild(fill);
        card.appendChild(bar);
        container.appendChild(card);
    });
}

/* =========================================
   تلفظ آلمانی
========================================= */

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

/* =========================================
   فرهنگ لغات و ترجمه
========================================= */

async function translateText(text,source,target) {
    const url = 'https://api.mymemory.translated.net/get?q='+
        encodeURIComponent(text)+'&langpair='+
        encodeURIComponent(source+'|'+target);

    const response = await fetch(url);

    if (!response.ok) throw new Error('Translation error');

    const data = await response.json();

    return data.responseData && data.responseData.translatedText
        ? data.responseData.translatedText : '';
}

window.searchDictionary = async function() {
    const input = element('dictionaryInput');
    const source = element('dictionarySource');
    const target = element('dictionaryTarget');
    const result = element('dictionaryResult');

    if (!input || !source || !target || !result) return;

    const word = input.value.trim();

    if (!word) {
        result.textContent = 'لطفاً یک کلمه وارد کنید.';
        return;
    }

    if (source.value === target.value) {
        result.textContent = 'زبان مبدأ و مقصد باید متفاوت باشند.';
        return;
    }

    result.textContent = '⏳ در حال ترجمه...';

    try {
        const translated = await translateText(word,source.value,target.value);
        result.textContent = translated || 'ترجمه پیدا نشد.';
    } catch(error) {
        result.textContent = 'ارتباط با سرویس ترجمه برقرار نشد. اینترنت را بررسی کنید.';
    }
};

/* =========================================
   راه‌اندازی اولیه
========================================= */

document.addEventListener('DOMContentLoaded',function() {
    renderLessons();
    renderConversation();
    renderGrammar();
    renderVideos();
    showProgress();
    showPage('homePage');
});
