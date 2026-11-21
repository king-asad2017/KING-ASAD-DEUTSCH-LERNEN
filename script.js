
/* =========================================
   KING ASAD - سیستم اصلی آموزشگاه
   نسخه پنج سطحی: A1 تا C1
   تعداد درس‌ها: 19 + 20 + 30 + 30 + 30
========================================= */

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const LESSON_COUNTS = { A1: 19, A2: 20, B1: 30, B2: 30, C1: 30 };

/* ویدیوها و منابع آموزشی */
const levelVideos = {
    A1: {
        id: '4-eDoThe6qo',
        title: 'Nicos Weg A1 - Deutsche Welle',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    A2: {
        id: 'Lg5P2w_Ro1c',
        title: 'Nicos Weg A2 - Deutsche Welle',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    B1: {
        id: 'LkufozluseI',
        title: 'Nicos Weg B1 - Deutsche Welle',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    B2: {
        id: null,
        title: 'Deutsch lernen B2 - Goethe-Institut',
        link: 'https://www.goethe.de/de/spr/ueb.html'
    },
    C1: {
        id: null,
        title: 'Deutsch lernen C1 - Goethe-Institut',
        link: 'https://www.goethe.de/de/spr/ueb.html'
    }
};

/* =========================================
   عنوان درس‌ها
========================================= */

const lessonTitles = {
A1: [
'سلام و معرفی خود','کشورها و ملیت‌ها','خانواده و دوستان','اعداد و سن','روزهای هفته و ماه‌ها',
'ساعت و زمان','غذا و نوشیدنی','در کافه و رستورانت','خرید از فروشگاه','رنگ‌ها و لباس‌ها',
'خانه و اتاق‌ها','وسایل خانه','شغل‌ها و محل کار','برنامه روزانه','حمل‌ونقل شهری',
'آب‌وهوا و فصل‌ها','بدن و سلامتی','قرار ملاقات','دعوت و خداحافظی'
],
A2: [
'روتین روزانه و عادت‌ها','خانه و جستجوی آپارتمان','خرید لباس و اندازه‌ها','خاطرات آخر هفته','سفر با قطار',
'رزرو هتل','در رستورانت سفارش دادن','آشپزی و دستور غذا','قرار داکتر','شرح درد و بیماری',
'آموزش و کورس زبان','کار و همکاران','نامه و ایمیل ساده','تلفن و پیام گذاشتن','تفریح و سرگرمی',
'ورزش و تناسب اندام','شهر و راهنمایی مسیر','مقایسه کالاها','دعوت به مهمانی','برنامه‌ریزی تعطیلات'
],
B1: [
'بیان نظر و استدلال','محافظت از محیط زیست','درخواست کار و رزومه','مصاحبه شغلی','سلامت و سبک زندگی',
'رسانه و شبکه‌های اجتماعی','آموزش و انتخاب رشته','زندگی در شهر یا روستا','مهاجرت و سازگاری','فرهنگ و سنت‌ها',
'مصرف و خرید آگاهانه','تکنولوژی در زندگی','حل اختلاف و مذاکره','دوستی و روابط اجتماعی','برنامه‌ریزی آینده',
'تجربه‌های سفر','حوادث و گزارش رویداد','آگهی و تبلیغات','اجاره خانه و قرارداد','قوانین و حقوق شهروندی',
'تغذیه و عادت‌های سالم','حمل‌ونقل عمومی','داوطلبی و کمک اجتماعی','آب‌وهوا و تغییرات اقلیمی','کتاب و فیلم',
'آمادگی برای امتحان','جلسه و گفت‌وگوی گروهی','شکایت و درخواست رسمی','تصمیم‌گیری و پیامدها','هدف‌گذاری شخصی'
],
B2: [
'استدلال پیچیده و دیدگاه‌ها','رسانه و سواد اطلاعاتی','اقتصاد و بازار کار','مدیریت پروژه','فرهنگ سازمانی',
'هوش مصنوعی و جامعه','حریم خصوصی دیجیتال','تغییرات اقلیمی و سیاست','انرژی‌های تجدیدپذیر','عدالت اجتماعی',
'آموزش عالی و پژوهش','مهاجرت و هویت','ارتباطات بین‌فرهنگی','رهبری و مسئولیت','مصالحه و حل تعارض',
'مصرف پایدار','شهرهای هوشمند','سلامت عمومی','اخلاق در علم','جهانی‌شدن',
'حقوق کار و قراردادها','تبلیغات و رفتار مصرف‌کننده','تاریخ و حافظه جمعی','هنر و نقد فرهنگی','علم و فناوری',
'ارائه و سخنرانی رسمی','گزارش‌نویسی تحلیلی','بحث و مناظره','فرضیه و پیامد احتمالی','زبان رسمی و غیررسمی'
],
C1: [
'زبان علمی و دانشگاهی','تحلیل انتقادی متون','بلاغت و فن بیان','ابهام و ظرافت معنایی','سبک‌شناسی نوشتار',
'مقاله پژوهشی','روش‌شناسی تحقیق','استدلال و مغالطه','گفتمان سیاسی و اجتماعی','اخلاق حرفه‌ای',
'تحلیل داده و تفسیر نتایج','نقد ادبی','زبان رسانه و چارچوب‌بندی','مذاکره پیشرفته','ارتباطات دیپلماتیک',
'اصطلاحات حقوقی','اقتصاد کلان و سیاست‌گذاری','فلسفه و جهان‌بینی','هویت و چندزبانگی','جامعه‌شناسی معاصر',
'فناوری و آینده انسان','زیست‌اخلاق و پزشکی','پایداری و مسئولیت جهانی','مدیریت بحران','ارائه تخصصی',
'نگارش گزارش مدیریتی','بازنویسی و خلاصه‌سازی','تحلیل سخنرانی','تفسیر ضمنی و کنایه','آمادگی آزمون پیشرفته'
]
};

/* =========================================
   بانک واژگان
========================================= */

const vocabularyBanks = {
A1: [
['begrüßen','خوشامد گفتن'],['heißen','نام داشتن'],['kommen','آمدن'],['wohnen','سکونت داشتن'],['sprechen','صحبت کردن'],
['die Familie','خانواده'],['der Freund','دوست'],['die Schwester','خواهر'],['der Bruder','برادر'],['das Kind','کودک'],
['das Wasser','آب'],['das Brot','نان'],['der Apfel','سیب'],['der Kaffee','قهوه'],['bezahlen','پرداخت کردن'],
['das Zimmer','اتاق'],['die Küche','آشپزخانه'],['die Wohnung','آپارتمان'],['der Tisch','میز'],['der Stuhl','چوکی'],
['arbeiten','کار کردن'],['lernen','یاد گرفتن'],['fragen','پرسیدن'],['antworten','پاسخ دادن'],['verstehen','فهمیدن']
],
A2: [
['aufstehen','از خواب برخاستن'],['einkaufen','خرید کردن'],['vorbereiten','آماده کردن'],['vereinbaren','تعیین کردن'],['verschieben','به تعویق انداختن'],
['die Unterkunft','محل اقامت'],['die Buchung','رزرو'],['die Verspätung','تأخیر'],['die Verbindung','ارتباط / مسیر'],['die Fahrkarte','تکت سفر'],
['die Gesundheit','سلامتی'],['die Untersuchung','معاینه'],['die Ernährung','تغذیه'],['sich erholen','استراحت و بهبود یافتن'],['die Beschwerde','شکایت'],
['die Ausbildung','آموزش حرفه‌ای'],['die Bewerbung','درخواست کار'],['der Arbeitsplatz','محل کار'],['die Erfahrung','تجربه'],['die Nachricht','پیام / خبر'],
['empfehlen','توصیه کردن'],['vergleichen','مقایسه کردن'],['erreichen','رسیدن / تماس گرفتن'],['teilnehmen','شرکت کردن'],['erklären','توضیح دادن']
],
B1: [
['die Meinung','نظر'],['die Erfahrung','تجربه'],['die Entscheidung','تصمیم'],['die Voraussetzung','شرط لازم'],['die Auswirkung','پیامد'],
['die Umwelt','محیط زیست'],['die Verschmutzung','آلودگی'],['die Maßnahme','اقدام'],['die Verantwortung','مسئولیت'],['die Möglichkeit','امکان'],
['die Bewerbung','درخواست کار'],['der Lebenslauf','زندگی‌نامه کاری'],['das Vorstellungsgespräch','مصاحبه کاری'],['die Fähigkeit','توانایی'],['die Qualifikation','صلاحیت'],
['begründen','دلیل آوردن'],['zustimmen','موافق بودن'],['widersprechen','مخالفت کردن'],['vermeiden','اجتناب کردن'],['berücksichtigen','در نظر گرفتن'],
['obwohl','با وجود اینکه'],['während','در حالی که'],['deshalb','به همین دلیل'],['sobald','به محض اینکه'],['die Entwicklung','پیشرفت / توسعه']
],
B2: [
['die Auseinandersetzung','بحث و بررسی'],['die Rahmenbedingung','شرایط کلی'],['die Herausforderung','چالش'],['die Nachhaltigkeit','پایداری'],['die Wechselwirkung','تأثیر متقابل'],
['die Datensicherheit','امنیت داده‌ها'],['die Chancengleichheit','برابری فرصت‌ها'],['die Maßnahme','اقدام'],['die Umsetzung','اجرا'],['die Wahrnehmung','برداشت / ادراک'],
['abwägen','سنجیدن'],['hinterfragen','با دید انتقادی بررسی کردن'],['veranschaulichen','روشن ساختن'],['voraussetzen','پیش‌فرض گرفتن'],['sich auseinandersetzen','به بررسی پرداختن'],
['infolgedessen','در نتیجه آن'],['demgegenüber','در مقابل آن'],['allerdings','با این حال'],['folglich','بنابراین'],['sofern','به شرط اینکه'],
['die Stellungnahme','اظهارنظر رسمی'],['der Zusammenhang','ارتباط'],['die Voraussetzung','پیش‌شرط'],['die Erkenntnis','دریافت علمی'],['die Perspektive','دیدگاه']
],
C1: [
['die Schlussfolgerung','نتیجه‌گیری'],['die Argumentationslinie','خط استدلال'],['die Diskrepanz','ناهماهنگی'],['die Implikation','پیامد ضمنی'],['die Differenzierung','تفکیک دقیق'],
['die Prämisse','مقدمه استدلال'],['die These','فرضیه / تز'],['die Evidenz','شواهد'],['die Methodik','روش‌شناسی'],['die Tragweite','دامنه اهمیت'],
['relativieren','نسبی جلوه دادن'],['präzisieren','دقیق‌تر بیان کردن'],['kontextualisieren','در بافت قرار دادن'],['substanziieren','با شواهد پشتیبانی کردن'],['nuancieren','با ظرافت تفکیک کردن'],
['nichtsdestoweniger','با وجود این'],['in Anbetracht','با در نظر گرفتن'],['demzufolge','بر این اساس'],['wenngleich','اگرچه'],['insofern','از این جهت'],
['die Wechselwirkung','تأثیر متقابل'],['die Kontroverse','مناقشه'],['die Auslegung','تفسیر'],['die Verhältnismäßigkeit','تناسب'],['die Gültigkeit','اعتبار']
]
};

/* =========================================
   گرامر هر سطح
========================================= */

const grammarByLevel = {
A1: [
'در جمله خبری آلمانی، فعل صرف‌شده معمولاً در جایگاه دوم قرار می‌گیرد. مثال: Heute lerne ich Deutsch.',
'فعل‌های sein و haben صرف می‌شوند. مثال: Ich bin müde. / Ich habe Zeit.',
'برای پرسش بله/خیر، فعل صرف‌شده در ابتدای جمله می‌آید. مثال: Lernst du Deutsch?',
'حرف تعریف اسم‌ها der، die و das است و بهتر است هر اسم همراه حرف تعریف یاد گرفته شود.',
'برای منفی‌کردن اسم نامعین از kein و برای منفی‌کردن فعل یا صفت از nicht استفاده می‌شود.'
],
A2: [
'در زمان Perfekt از haben یا sein همراه Partizip II استفاده می‌شود. مثال: Ich habe gelernt.',
'در جمله وابسته با weil یا dass، فعل صرف‌شده به پایان جمله می‌رود.',
'افعال جداشدنی در جمله اصلی پیشوند را به پایان جمله می‌فرستند. مثال: Ich stehe früh auf.',
'حالت Dativ معمولاً برای گیرنده یا پس از برخی حروف اضافه می‌آید. مثال: mit dem Bus.',
'صفت پیش از اسم با توجه به حرف تعریف و حالت دستوری پسوند می‌گیرد.'
],
B1: [
'با obwohl تضاد را بیان می‌کنیم؛ فعل جمله وابسته در پایان می‌آید.',
'ساختار Konjunktiv II برای درخواست مؤدبانه و موقعیت فرضی کاربرد دارد: Ich würde gern ...',
'جمله مجهول در زمان حال با werden و Partizip II ساخته می‌شود.',
'حروف ربط deshalb و trotzdem ترتیب جمله اصلی را حفظ می‌کنند و فعل در جایگاه دوم می‌ماند.',
'برای بیان هدف می‌توان از um ... zu همراه مصدر استفاده کرد.'
],
B2: [
'ساختارهای اسمی‌سازی، متن رسمی و دانشگاهی را فشرده‌تر می‌کنند؛ مانند die Durchführung der Untersuchung.',
'در ساختار Passiv با فعل وجهی، مصدر مجهول در پایان می‌آید: Das Problem muss gelöst werden.',
'Partizipialattribute اطلاعات را فشرده می‌کنند و در نوشتار رسمی کاربرد دارند.',
'قیدها و عبارت‌های پیوندی مانند folglich، hingegen و darüber hinaus رابطه منطقی ایده‌ها را مشخص می‌کنند.',
'Konjunktiv I برای بازگویی غیرمستقیم گفته دیگران، به‌ویژه در گزارش رسمی، استفاده می‌شود.'
],
C1: [
'در نوشتار دانشگاهی، ادعا باید با محدودکننده‌هایی مانند tendenziell یا unter bestimmten Bedingungen دقیق شود.',
'ساختارهای موصولی گسترده می‌توانند اطلاعات توضیحی پیچیده را به جمله اضافه کنند.',
'Konjunktiv I برای نقل غیرمستقیم و فاصله‌گذاری نویسنده از محتوای نقل‌شده کاربرد دارد.',
'Nominalstil و Verbalstil دو شیوه متفاوت بیان‌اند؛ انتخاب آن‌ها به هدف و مخاطب متن بستگی دارد.',
'برای استدلال منسجم، ادعا، شاهد، توضیح و نتیجه‌گیری باید از هم تفکیک شوند.'
]
};

/* =========================================
   مکالمه‌ها
========================================= */

const dialogTemplates = {
A1: [
['Guten Tag! Können Sie mir bitte helfen?','روز بخیر! می‌توانید لطفاً به من کمک کنید؟'],
['Ja, natürlich. Was möchten Sie wissen?','بلی، البته. چه چیزی می‌خواهید بدانید؟'],
['Ich lerne Deutsch und möchte mehr üben.','من آلمانی یاد می‌گیرم و می‌خواهم بیشتر تمرین کنم.']
],
A2: [
['Können wir darüber sprechen?','می‌توانیم درباره آن صحبت کنیم؟'],
['Ja, gern. Was ist passiert?','بلی، با خوشحالی. چه اتفاقی افتاده است؟'],
['Ich möchte eine passende Lösung finden.','می‌خواهم یک راه‌حل مناسب پیدا کنم.']
],
B1: [
['Wie beurteilen Sie diese Situation?','این وضعیت را چگونه ارزیابی می‌کنید؟'],
['Meiner Ansicht nach gibt es mehrere Möglichkeiten.','از دیدگاه من چندین امکان وجود دارد.'],
['Könnten Sie Ihre Meinung genauer begründen?','می‌توانید نظر خود را دقیق‌تر توضیح دهید؟']
],
B2: [
['Welche Faktoren sollten wir dabei berücksichtigen?','در این مورد کدام عوامل را باید در نظر بگیریم؟'],
['Entscheidend ist, die langfristigen Folgen abzuwägen.','مهم این است که پیامدهای درازمدت را بسنجیم.'],
['Dem stimme ich teilweise zu, allerdings sehe ich auch Risiken.','تا اندازه‌ای موافقم، با این حال خطرهایی نیز می‌بینم.']
],
C1: [
['Wie lässt sich diese These wissenschaftlich einordnen?','این فرضیه را چگونه می‌توان از دید علمی بررسی کرد؟'],
['Zunächst müsste man die zugrunde liegenden Annahmen präzisieren.','نخست باید فرض‌های بنیادی را دقیق‌تر تعریف کرد.'],
['Das ist überzeugend, sofern die angeführten Belege tragfähig sind.','این قانع‌کننده است، به شرطی که شواهد ارائه‌شده معتبر باشند.']
]
};

function buildLessonData() {
    const result = {};
    LEVELS.forEach(level => {
        const bank = vocabularyBanks[level];
        result[level] = lessonTitles[level].map((title, index) => {
            const start = (index * 3) % bank.length;
            const words = Array.from({ length: 5 }, (_, n) => bank[(start + n) % bank.length]);
            const templates = dialogTemplates[level];
            const dialog = templates.map(line => [line[0], line[1]]);
            const grammar = grammarByLevel[level][index % grammarByLevel[level].length];
            return { title, words, dialog, grammar };
        });
    });
    return result;
}

const lessonData = buildLessonData();

/* =========================================
   آزمون‌ها
========================================= */

const quizData = {
A1: [
['Was bedeutet „Guten Morgen“?',['صبح بخیر','شب بخیر','خداحافظ'],0],
['Wie heißt du?',['چند سال داری؟','نامت چیست؟','کجا هستی؟'],1],
['Was bedeutet „Danke“?',['لطفاً','ببخشید','تشکر'],2],
['Ich ___ aus Afghanistan.',['komme','kommt','kommen'],0],
['Wie geht es dir?',['حالت چطور است؟','نامت چیست؟','کجا کار می‌کنی؟'],0]
],
A2: [
['Ich ___ gestern nach Berlin gefahren.',['bin','habe','ist'],0],
['Was bedeutet „Einkaufen“?',['خوابیدن','خرید کردن','درس خواندن'],1],
['Er ___ jeden Tag Deutsch.',['lernen','lernst','lernt'],2],
['Was bedeutet „die Wohnung“?',['آپارتمان','مدرسه','بیمارستان'],0],
['Ich habe gestern Fußball ___.',['spiele','gespielt','spielen'],1]
],
B1: [
['Wenn ich Zeit hätte, ___ ich reisen.',['werde','würde','bin'],1],
['Was bedeutet „obwohl“?',['زیرا','اگر','با وجود اینکه'],2],
['Er sagt, dass er krank ___.',['ist','sein','bist'],0],
['Was bedeutet „die Erfahrung“?',['تجربه','تصمیم','سفر'],0],
['Nachdem ich gegessen hatte, ___ ich spazieren.',['gehe','ging','gehen'],1]
],
B2: [
['Was bedeutet „abwägen“?',['سنجیدن','فراموش کردن','تکرار کردن'],0],
['Die Ergebnisse müssen sorgfältig ___.',['analysiert werden','analysieren','analysiert haben'],0],
['„Hingegen“ drückt meistens ___ aus.',['einen Gegensatz','einen Wunsch','eine Zeit'],0],
['Was bedeutet „Nachhaltigkeit“?',['پایداری','سرعت','مالکیت'],0],
['Er behauptet, die Zahlen __ korrekt.',['seien','sindet','wären ist'],0]
],
C1: [
['Was bedeutet „die Schlussfolgerung“?',['نتیجه‌گیری','پیش‌فرض','مخالفت'],0],
['„Wenngleich“ bedeutet ___.',['اگرچه','بنابراین','در نتیجه'],0],
['Eine Prämisse ist ___.',['eine Grundannahme','ein Ergebnis','eine Übersetzung'],0],
['Was bedeutet „präzisieren“?',['دقیق‌تر بیان کردن','پنهان کردن','رد کردن'],0],
['Konjunktiv I wird häufig für ___ verwendet.',['indirekte Rede','Befehle','Vergleiche'],0]
]
};

LEVELS.forEach(level => {
    quizData[level] = {
        questions: quizData[level].map(q => ({
            question: q[0],
            options: q[1],
            correct: q[2]
        })),
        finished: false
    };
});

/* =========================================
   ابزارهای عمومی
========================================= */

function element(id) {
    return document.getElementById(id);
}

function safeText(tag, text) {
    const node = document.createElement(tag);
    node.textContent = String(text ?? '');
    return node;
}

function makeButton(text, handler, className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    if (className) button.className = className;
    button.addEventListener('click', handler);
    return button;
}

/* =========================================
   باز کردن صفحات
========================================= */

window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const page = element(pageId);
    if (!page) {
        alert('صفحه پیدا نشد: ' + pageId);
        return;
    }
    page.classList.add('active');
    window.scrollTo({ top:0, behavior:'smooth' });
    if (pageId === 'homePage') showProgress();
};

/* =========================================
   انتخاب سطح درس‌ها
========================================= */

window.showLevelLessons = function(level) {
    if (!LESSON_COUNTS[level]) return;
    LEVELS.forEach(name => {
        const box = element(name.toLowerCase() + 'LessonsContainer');
        if (box) box.style.display = name === level ? 'block' : 'none';
    });
    const container = element(level.toLowerCase() + 'LessonsContainer');
    if (container) container.scrollIntoView({ behavior:'smooth', block:'start' });
};

/* =========================================
   ساخت فهرست درس‌ها
========================================= */

function renderLessons() {
    LEVELS.forEach(level => {
        const container = element(level.toLowerCase() + 'LessonsContainer');
        if (!container) return;

        container.replaceChildren();

        lessonData[level].forEach((data, index) => {
            const number = index + 1;
            const button = makeButton(
                '📘 درس ' + number + ': ' + data.title,
                () => showLessonDetail(level, number, data),
                'lesson-card'
            );
            container.appendChild(button);
        });

        const detail = document.createElement('div');
        detail.id = 'lessonDetail' + level;
        detail.className = 'lesson-detail';
        detail.style.display = 'none';
        container.appendChild(detail);
    });
}

/* =========================================
   ویدیوی سطح / منبع آموزشی
========================================= */

function createLevelVideo(level) {
    const info = levelVideos[level];
    const box = document.createElement('div');
    box.className = 'content-card';
    box.appendChild(safeText('h3', '🎬 منبع ویدیویی سطح ' + level));
    box.appendChild(safeText('p', info.title));

    if (info.id) {
        const frameWrap = document.createElement('div');
        frameWrap.style.cssText = 'position:relative;width:100%;padding-top:56.25%;overflow:hidden;border-radius:12px;';
        const video = document.createElement('iframe');
        video.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(info.id);
        video.title = info.title;
        video.loading = 'lazy';
        video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        video.allowFullscreen = true;
        video.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
        frameWrap.appendChild(video);
        box.appendChild(frameWrap);
    } else {
        box.appendChild(safeText('p', 'برای این سطح لینک رسمی منابع آموزشی نمایش داده می‌شود؛ ویدیوی YouTube تأییدشده‌ای در کد فعلی ثبت نشده است.'));
    }

    const link = document.createElement('a');
    link.href = info.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '📚 باز کردن منبع آموزشی رسمی ' + level;
    link.style.display = 'block';
    link.style.marginTop = '12px';
    box.appendChild(link);
    return box;
}

/* =========================================
   نمایش محتوای هر درس
========================================= */

function showLessonDetail(level, number, data) {
    const detail = element('lessonDetail' + level);
    if (!detail) return;

    detail.replaceChildren();
    detail.style.display = 'block';
    detail.appendChild(safeText('h2', 'درس ' + number + ' - سطح ' + level + ': ' + data.title));

    detail.appendChild(createLevelVideo(level));

    const conversationBox = document.createElement('div');
    conversationBox.className = 'content-card';
    conversationBox.appendChild(safeText('h3', '🗣️ مکالمه با ترجمه فارسی'));
    data.dialog.forEach(line => {
        conversationBox.appendChild(safeText('p', '🇩🇪 ' + line[0]));
        conversationBox.appendChild(safeText('p', '🇦🇫 ' + line[1]));
        conversationBox.appendChild(makeButton('🔊 شنیدن آلمانی', () => window.speakGerman(line[0])));
    });
    detail.appendChild(conversationBox);

    const wordsBox = document.createElement('div');
    wordsBox.className = 'content-card';
    wordsBox.appendChild(safeText('h3', '📚 لغات و معنی فارسی'));
    data.words.forEach(word => {
        const row = document.createElement('div');
        row.style.marginBottom = '10px';
        row.appendChild(safeText('span', word[0] + ' = ' + word[1] + ' '));
        row.appendChild(makeButton('🔊', () => window.speakGerman(word[0])));
        wordsBox.appendChild(row);
    });
    detail.appendChild(wordsBox);

    const grammarBox = document.createElement('div');
    grammarBox.className = 'content-card';
    grammarBox.appendChild(safeText('h3', '📖 گرامر درس'));
    grammarBox.appendChild(safeText('p', data.grammar));
    detail.appendChild(grammarBox);

    const practice = document.createElement('div');
    practice.className = 'content-card';
    practice.appendChild(safeText('h3', '✍️ تمرین درس'));
    practice.appendChild(safeText('p', 'معنی این واژه آلمانی را به فارسی بنویسید:'));
    const selectedWord = data.words[0];
    practice.appendChild(safeText('h4', selectedWord[0]));

    const answer = document.createElement('input');
    answer.type = 'text';
    answer.placeholder = 'معنی فارسی را بنویسید';
    answer.autocomplete = 'off';
    practice.appendChild(answer);

    const result = document.createElement('p');
    practice.appendChild(makeButton('بررسی پاسخ', () => {
        const normalize = value => value.trim().toLocaleLowerCase('fa').replace(/\s+/g, ' ');
        if (normalize(answer.value) === normalize(selectedWord[1])) {
            result.textContent = 'آفرین! پاسخ درست است. 🌹';
        } else {
            result.textContent = 'پاسخ درست: ' + selectedWord[1];
        }
    }));
    practice.appendChild(result);
    detail.appendChild(practice);

    detail.appendChild(makeButton('بستن درس', () => {
        detail.style.display = 'none';
    }, 'action'));

    detail.scrollIntoView({ behavior:'smooth', block:'start' });
}

/* =========================================
   مکالمه‌های عمومی
========================================= */

function renderConversation() {
    const container = element('conversationContent');
    if (!container) return;
    const conversations = [
        ['Guten Tag!','روز بخیر!'],
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
    container.replaceChildren();
    conversations.forEach(item => {
        const card = document.createElement('div');
        card.className = 'conversation-card';
        card.appendChild(safeText('h3', item[0]));
        card.appendChild(safeText('p', item[1]));
        card.appendChild(makeButton('🔊 شنیدن تلفظ', () => window.speakGerman(item[0])));
        container.appendChild(card);
    });
}

/* =========================================
   گرامر عمومی
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
    container.replaceChildren();
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'grammar-card';
        card.appendChild(safeText('h3', item[0]));
        card.appendChild(safeText('p', item[1]));
        card.appendChild(safeText('p', 'مثال: ' + item[2]));
        card.appendChild(safeText('p', 'ترجمه: ' + item[3]));
        card.appendChild(makeButton('🔊 شنیدن مثال', () => window.speakGerman(item[2])));
        container.appendChild(card);
    });
}

/* =========================================
   ویدیوهای صفحه ویدیوها
========================================= */

function renderVideos() {
    LEVELS.forEach(level => {
        const container = element('videos' + level);
        if (!container) return;
        container.replaceChildren();
        container.appendChild(createLevelVideo(level));
    });
}

window.showVideoLevel = function(level) {
    if (!LEVELS.includes(level)) return;
    LEVELS.forEach(name => {
        const box = element('videos' + name);
        if (box) box.style.display = name === level ? 'block' : 'none';
    });
    const selected = element('videos' + level);
    if (selected) selected.scrollIntoView({ behavior:'smooth', block:'start' });
};

/* =========================================
   آزمون‌ها
========================================= */

window.openQuiz = function(level) {
    document.querySelectorAll('.quiz-box').forEach(box => box.style.display = 'none');
    const box = element('quiz-' + level);
    const questions = element('questions-' + level);
    const result = element('result-' + level);
    if (!box || !questions || !result || !quizData[level]) {
        alert('آزمون پیدا نشد. شناسه‌های HTML را بررسی کنید.');
        return;
    }

    box.style.display = 'block';
    questions.replaceChildren();
    result.textContent = '';
    quizData[level].finished = false;

    quizData[level].questions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'quiz-question';
        card.appendChild(safeText('h3', (index + 1) + '. ' + question.question));
        question.options.forEach((option, i) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question-' + level + '-' + index;
            radio.value = String(i);
            label.append(radio, document.createTextNode(' ' + option));
            card.appendChild(label);
            card.appendChild(document.createElement('br'));
        });
        questions.appendChild(card);
    });

    questions.appendChild(makeButton('ثبت پاسخ‌ها', () => window.submitQuiz(level)));
    box.scrollIntoView({ behavior:'smooth', block:'start' });
};

window.submitQuiz = function(level) {
    const quiz = quizData[level];
    if (!quiz || quiz.finished) return;

    let score = 0;
    let unanswered = 0;
    quiz.questions.forEach((question, index) => {
        const selected = document.querySelector('input[name="question-' + level + '-' + index + '"]:checked');
        if (!selected) unanswered++;
        else if (Number(selected.value) === question.correct) score++;
    });

    if (unanswered) {
        alert('لطفاً به تمام سؤال‌ها پاسخ دهید.');
        return;
    }

    quiz.finished = true;
    const points = score * 10;
    const result = element('result-' + level);
    if (result) {
        result.textContent = 'امتیاز شما: ' + points + ' از ۵۰';
        result.textContent += points >= 40 ? ' 🏆 تبریک! موفق شدید.' : ' 🌷 دوباره تمرین کنید.';
    }
    saveQuizProgress(level, points);
    if (points >= 40) showCelebration(level, points);
};

/* =========================================
   جشن موفقیت
========================================= */

function showCelebration(level, score) {
    const old = element('celebration');
    if (old) old.remove();

    const overlay = document.createElement('div');
    overlay.id = 'celebration';
    overlay.style.cssText = 'position:fixed;inset:0;background:#000b;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';

    const message = document.createElement('div');
    message.style.cssText = 'background:white;padding:30px;border-radius:20px;text-align:center;color:#142b52;';
    message.appendChild(safeText('h2', '🏆 تبریک! شما موفق شدید!'));
    message.appendChild(safeText('p', 'آزمون ' + level));
    message.appendChild(safeText('h3', 'امتیاز: ' + score + ' از ۵۰'));
    message.appendChild(makeButton('بستن', () => overlay.remove()));
    overlay.appendChild(message);
    document.body.appendChild(overlay);
}

/* =========================================
   ذخیره و نمایش پیشرفت پنج سطح
========================================= */

function saveQuizProgress(level, score) {
    try {
        const progress = JSON.parse(localStorage.getItem('kingAsadProgress') || '{}');
        progress[level] = { score, date:new Date().toLocaleDateString() };
        localStorage.setItem('kingAsadProgress', JSON.stringify(progress));
    } catch (error) {
        console.warn('ذخیره پیشرفت انجام نشد.', error);
    }
}

function showProgress() {
    const container = element('homeProgress');
    if (!container) return;
    let progress = {};
    try {
        progress = JSON.parse(localStorage.getItem('kingAsadProgress') || '{}');
    } catch (error) {
        progress = {};
    }

    container.replaceChildren();
    LEVELS.forEach(level => {
        const card = document.createElement('div');
        card.className = 'progress-box';
        card.appendChild(safeText('h3', 'سطح ' + level));
        const saved = progress[level];
        card.appendChild(safeText('p', saved ? 'آخرین امتیاز: ' + saved.score + ' از ۵۰' : 'هنوز آزمونی انجام نشده است.'));
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        fill.style.width = saved ? Math.min(100, Math.max(0, Number(saved.score) * 2)) + '%' : '0%';
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

async function translateText(text, source, target) {
    const url = 'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(text) + '&langpair=' +
        encodeURIComponent(source + '|' + target);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Translation error');
    const data = await response.json();
    return data.responseData && data.responseData.translatedText ? data.responseData.translatedText : '';
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
        const translated = await translateText(word, source.value, target.value);
        result.textContent = translated || 'ترجمه پیدا نشد.';
    } catch (error) {
        result.textContent = 'ارتباط با سرویس ترجمه برقرار نشد. اینترنت را بررسی کنید.';
    }
};

/* =========================================
   راه‌اندازی اولیه
========================================= */

document.addEventListener('DOMContentLoaded', function() {
    renderLessons();
    renderConversation();
    renderGrammar();
    renderVideos();
    showProgress();
    window.showPage('homePage');
});
