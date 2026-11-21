/* =========================================
   KING ASAD
   سیستم جامع آموزش زبان آلمانی
   پنج سطح A1 تا C1
   مجموع 129 درس
========================================= */

// تنظیمات اصلی سیستم
const KING_ASAD = {

    name: 'KING ASAD',

    LEVELS: ['A1', 'A2', 'B1', 'B2', 'C1'],

    LESSON_COUNTS: {
        A1: 19,
        A2: 20,
        B1: 30,
        B2: 30,
        C1: 30
    },

    TOTAL_LESSONS: 129,

    // ویدیوهای آموزشی هر سطح
    levelVideos: {
        A1: {
            id: '4-eDoThe6qo',
            title: 'آموزش زبان آلمانی A1',
            url: 'https://youtu.be/4-eDoThe6qo'
        },

        A2: {
            id: 'Lg5P2w_Ro1c',
            title: 'آموزش زبان آلمانی A2',
            url: 'https://youtu.be/Lg5P2w_Ro1c'
        },

        B1: {
            id: 'LkufozluseI',
            title: 'آموزش زبان آلمانی B1',
            url: 'https://youtu.be/LkufozluseI'
        },

        B2: {
            id: '',
            title: 'آموزش زبان آلمانی B2',
            url: ''
        },

        C1: {
            id: '',
            title: 'آموزش زبان آلمانی C1',
            url: ''
        }
    },

    // اطلاعات آموزشی
    language: 'Deutsch',

    translationLanguage: 'فارسی',

    version: '2.0'
};

// نمایش اطلاعات سیستم
console.log('KING ASAD آماده شد.');
console.log('تعداد سطوح:', KING_ASAD.LEVELS.length);
console.log('مجموع درس‌ها:', KING_ASAD.TOTAL_LESSONS);
/* =========================================
   KING ASAD
   بخش دوم: عنوان‌های ۱۲۹ درس
   پنج سطح از A1 تا C1
========================================= */

KING_ASAD.lessonTitles = {

    A1: [
        'سلام و معرفی خود',
        'کشورها و ملیت‌ها',
        'خانواده و دوستان',
        'اعداد و سن',
        'روزهای هفته و ماه‌ها',
        'ساعت و زمان',
        'غذا و نوشیدنی',
        'در کافه و رستورانت',
        'خرید از فروشگاه',
        'رنگ‌ها و لباس‌ها',
        'خانه و اتاق‌ها',
        'وسایل خانه',
        'شغل‌ها و محل کار',
        'برنامه روزانه',
        'حمل‌ونقل شهری',
        'آب‌وهوا و فصل‌ها',
        'بدن و سلامتی',
        'قرار ملاقات',
        'دعوت و خداحافظی'
    ],

    A2: [
        'روتین روزانه و عادت‌ها',
        'خانه و جستجوی آپارتمان',
        'خرید لباس و اندازه‌ها',
        'خاطرات آخر هفته',
        'سفر با قطار',
        'رزرو هتل',
        'در رستورانت سفارش دادن',
        'آشپزی و دستور غذا',
        'قرار داکتر',
        'شرح درد و بیماری',
        'آموزش و کورس زبان',
        'کار و همکاران',
        'نامه و ایمیل ساده',
        'تلفن و پیام گذاشتن',
        'تفریح و سرگرمی',
        'ورزش و تناسب اندام',
        'شهر و راهنمایی مسیر',
        'مقایسه کالاها',
        'دعوت به مهمانی',
        'برنامه‌ریزی تعطیلات'
    ],

    B1: [
        'بیان نظر و استدلال',
        'محافظت از محیط زیست',
        'درخواست کار و رزومه',
        'مصاحبه شغلی',
        'سلامت و سبک زندگی',
        'رسانه و شبکه‌های اجتماعی',
        'آموزش و انتخاب رشته',
        'زندگی در شهر یا روستا',
        'مهاجرت و سازگاری',
        'فرهنگ و سنت‌ها',
        'مصرف و خرید آگاهانه',
        'تکنولوژی در زندگی',
        'حل اختلاف و مذاکره',
        'دوستی و روابط اجتماعی',
        'برنامه‌ریزی آینده',
        'تجربه‌های سفر',
        'حوادث و گزارش رویداد',
        'آگهی و تبلیغات',
        'اجاره خانه و قرارداد',
        'قوانین و حقوق شهروندی',
        'تغذیه و عادت‌های سالم',
        'حمل‌ونقل عمومی',
        'داوطلبی و کمک اجتماعی',
        'آب‌وهوا و تغییرات اقلیمی',
        'کتاب و فیلم',
        'آمادگی برای امتحان',
        'جلسه و گفت‌وگوی گروهی',
        'شکایت و درخواست رسمی',
        'تصمیم‌گیری و پیامدها',
        'هدف‌گذاری شخصی'
    ],

    B2: [
        'استدلال پیچیده و دیدگاه‌ها',
        'رسانه و سواد اطلاعاتی',
        'اقتصاد و بازار کار',
        'مدیریت پروژه',
        'فرهنگ سازمانی',
        'هوش مصنوعی و جامعه',
        'حریم خصوصی دیجیتال',
        'تغییرات اقلیمی و سیاست',
        'انرژی‌های تجدیدپذیر',
        'عدالت اجتماعی',
        'آموزش عالی و پژوهش',
        'مهاجرت و هویت',
        'ارتباطات بین‌فرهنگی',
        'رهبری و مسئولیت',
        'مصالحه و حل تعارض',
        'مصرف پایدار',
        'شهرهای هوشمند',
        'سلامت عمومی',
        'اخلاق در علم',
        'جهانی‌شدن',
        'حقوق کار و قراردادها',
        'تبلیغات و رفتار مصرف‌کننده',
        'تاریخ و حافظه جمعی',
        'هنر و نقد فرهنگی',
        'علم و فناوری',
        'ارائه و سخنرانی رسمی',
        'گزارش‌نویسی تحلیلی',
        'بحث و مناظره',
        'فرضیه و پیامد احتمالی',
        'زبان رسمی و غیررسمی'
    ],

    C1: [
        'زبان علمی و دانشگاهی',
        'تحلیل انتقادی متون',
        'بلاغت و فن بیان',
        'ابهام و ظرافت معنایی',
        'سبک‌شناسی نوشتار',
        'مقاله پژوهشی',
        'روش‌شناسی تحقیق',
        'استدلال و مغالطه',
        'گفتمان سیاسی و اجتماعی',
        'اخلاق حرفه‌ای',
        'تحلیل داده و تفسیر نتایج',
        'نقد ادبی',
        'زبان رسانه و چارچوب‌بندی',
        'مذاکره پیشرفته',
        'ارتباطات دیپلماتیک',
        'اصطلاحات حقوقی',
        'اقتصاد کلان و سیاست‌گذاری',
        'فلسفه و جهان‌بینی',
        'هویت و چندزبانگی',
        'جامعه‌شناسی معاصر',
        'فناوری و آینده انسان',
        'زیست‌اخلاق و پزشکی',
        'پایداری و مسئولیت جهانی',
        'مدیریت بحران',
        'ارائه تخصصی',
        'نگارش گزارش مدیریتی',
        'بازنویسی و خلاصه‌سازی',
        'تحلیل سخنرانی',
        'تفسیر ضمنی و کنایه',
        'آمادگی آزمون پیشرفته'
    ]

};

/* بررسی تعداد درس‌ها */
KING_ASAD.validateLessonTitles = function () {
    const expected = {
        A1: 19,
        A2: 20,
        B1: 30,
        B2: 30,
        C1: 30
    };

    return Object.keys(expected).every(level =>
        KING_ASAD.lessonTitles[level].length === expected[level]
    );
};

console.log(
    'KING ASAD - تعداد عنوان‌های درس:',
    Object.values(KING_ASAD.lessonTitles)
        .reduce((total, lessons) => total + lessons.length, 0)
);
/* =========================================
   KING ASAD
   بخش سوم: بانک واژگان پنج سطح
========================================= */

KING_ASAD.vocabularyBanks = {

    A1: [
        ['begrüßen', 'خوشامد گفتن'],
        ['heißen', 'نام داشتن'],
        ['kommen', 'آمدن'],
        ['wohnen', 'سکونت داشتن'],
        ['sprechen', 'صحبت کردن'],
        ['die Familie', 'خانواده'],
        ['der Freund', 'دوست'],
        ['die Schwester', 'خواهر'],
        ['der Bruder', 'برادر'],
        ['das Kind', 'کودک'],
        ['das Wasser', 'آب'],
        ['das Brot', 'نان'],
        ['der Apfel', 'سیب'],
        ['der Kaffee', 'قهوه'],
        ['bezahlen', 'پرداخت کردن'],
        ['das Zimmer', 'اتاق'],
        ['die Küche', 'آشپزخانه'],
        ['die Wohnung', 'آپارتمان'],
        ['der Tisch', 'میز'],
        ['der Stuhl', 'چوکی'],
        ['arbeiten', 'کار کردن'],
        ['lernen', 'یاد گرفتن'],
        ['fragen', 'پرسیدن'],
        ['antworten', 'پاسخ دادن'],
        ['verstehen', 'فهمیدن']
    ],

    A2: [
        ['aufstehen', 'از خواب برخاستن'],
        ['einkaufen', 'خرید کردن'],
        ['vorbereiten', 'آماده کردن'],
        ['vereinbaren', 'تعیین کردن'],
        ['verschieben', 'به تعویق انداختن'],
        ['die Unterkunft', 'محل اقامت'],
        ['die Buchung', 'رزرو'],
        ['die Verspätung', 'تأخیر'],
        ['die Verbindung', 'ارتباط / مسیر'],
        ['die Fahrkarte', 'تکت سفر'],
        ['die Gesundheit', 'سلامتی'],
        ['die Untersuchung', 'معاینه'],
        ['die Ernährung', 'تغذیه'],
        ['sich erholen', 'استراحت کردن'],
        ['die Beschwerde', 'شکایت'],
        ['die Ausbildung', 'آموزش حرفه‌ای'],
        ['die Bewerbung', 'درخواست کار'],
        ['der Arbeitsplatz', 'محل کار'],
        ['die Erfahrung', 'تجربه'],
        ['die Nachricht', 'پیام / خبر'],
        ['empfehlen', 'توصیه کردن'],
        ['vergleichen', 'مقایسه کردن'],
        ['erreichen', 'رسیدن / تماس گرفتن'],
        ['teilnehmen', 'شرکت کردن'],
        ['erklären', 'توضیح دادن']
    ],

    B1: [
        ['die Meinung', 'نظر'],
        ['die Erfahrung', 'تجربه'],
        ['die Entscheidung', 'تصمیم'],
        ['die Voraussetzung', 'شرط لازم'],
        ['die Auswirkung', 'پیامد'],
        ['die Umwelt', 'محیط زیست'],
        ['die Verschmutzung', 'آلودگی'],
        ['die Maßnahme', 'اقدام'],
        ['die Verantwortung', 'مسئولیت'],
        ['die Möglichkeit', 'امکان'],
        ['die Bewerbung', 'درخواست کار'],
        ['der Lebenslauf', 'زندگی‌نامه کاری'],
        ['das Vorstellungsgespräch', 'مصاحبه کاری'],
        ['die Fähigkeit', 'توانایی'],
        ['die Qualifikation', 'صلاحیت'],
        ['begründen', 'دلیل آوردن'],
        ['zustimmen', 'موافق بودن'],
        ['widersprechen', 'مخالفت کردن'],
        ['vermeiden', 'اجتناب کردن'],
        ['berücksichtigen', 'در نظر گرفتن'],
        ['obwohl', 'با وجود اینکه'],
        ['während', 'در حالی که'],
        ['deshalb', 'به همین دلیل'],
        ['sobald', 'به محض اینکه'],
        ['die Entwicklung', 'پیشرفت / توسعه']
    ],

    B2: [
        ['die Auseinandersetzung', 'بحث و بررسی'],
        ['die Rahmenbedingung', 'شرایط کلی'],
        ['die Herausforderung', 'چالش'],
        ['die Nachhaltigkeit', 'پایداری'],
        ['die Wechselwirkung', 'تأثیر متقابل'],
        ['die Datensicherheit', 'امنیت داده‌ها'],
        ['die Chancengleichheit', 'برابری فرصت‌ها'],
        ['die Maßnahme', 'اقدام'],
        ['die Umsetzung', 'اجرا'],
        ['die Wahrnehmung', 'برداشت / ادراک'],
        ['abwägen', 'سنجیدن'],
        ['hinterfragen', 'با دید انتقادی بررسی کردن'],
        ['veranschaulichen', 'روشن ساختن'],
        ['voraussetzen', 'پیش‌فرض گرفتن'],
        ['sich auseinandersetzen', 'به بررسی پرداختن'],
        ['infolgedessen', 'در نتیجه آن'],
        ['demgegenüber', 'در مقابل آن'],
        ['allerdings', 'با این حال'],
        ['folglich', 'بنابراین'],
        ['sofern', 'به شرط اینکه'],
        ['die Stellungnahme', 'اظهارنظر رسمی'],
        ['der Zusammenhang', 'ارتباط'],
        ['die Voraussetzung', 'پیش‌شرط'],
        ['die Erkenntnis', 'دریافت علمی'],
        ['die Perspektive', 'دیدگاه']
    ],

    C1: [
        ['die Schlussfolgerung', 'نتیجه‌گیری'],
        ['die Argumentationslinie', 'خط استدلال'],
        ['die Diskrepanz', 'ناهماهنگی'],
        ['die Implikation', 'پیامد ضمنی'],
        ['die Differenzierung', 'تفکیک دقیق'],
        ['die Prämisse', 'مقدمه استدلال'],
        ['die These', 'فرضیه / تز'],
        ['die Evidenz', 'شواهد'],
        ['die Methodik', 'روش‌شناسی'],
        ['die Tragweite', 'دامنه اهمیت'],
        ['relativieren', 'نسبی جلوه دادن'],
        ['präzisieren', 'دقیق‌تر بیان کردن'],
        ['kontextualisieren', 'در بافت قرار دادن'],
        ['substanziieren', 'با شواهد پشتیبانی کردن'],
        ['nuancieren', 'با ظرافت تفکیک کردن'],
        ['nichtsdestoweniger', 'با وجود این'],
        ['in Anbetracht', 'با در نظر گرفتن'],
        ['demzufolge', 'بر این اساس'],
        ['wenngleich', 'اگرچه'],
        ['insofern', 'از این جهت'],
        ['die Wechselwirkung', 'تأثیر متقابل'],
        ['die Kontroverse', 'مناقشه'],
        ['die Auslegung', 'تفسیر'],
        ['die Verhältnismäßigkeit', 'تناسب'],
        ['die Gültigkeit', 'اعتبار']
    ]

};

/* بررسی تعداد واژگان */
KING_ASAD.validateVocabulary = function () {
    return KING_ASAD.LEVELS.every(level =>
        Array.isArray(KING_ASAD.vocabularyBanks[level]) &&
        KING_ASAD.vocabularyBanks[level].length >= 20
    );
};

console.log('KING ASAD - بانک واژگان آماده شد.');
/* =========================================
   KING ASAD
   بخش چهارم: گرامر و مکالمه‌ها
========================================= */

// گرامرهای هر سطح
KING_ASAD.grammarByLevel = {

    A1: [
        {
            title: 'فعل‌های sein و haben',
            explanation: 'فعل sein برای معرفی و بیان وضعیت و فعل haben برای مالکیت استفاده می‌شود.',
            examples: [
                ['Ich bin Student.', 'من محصل هستم.'],
                ['Ich habe ein Buch.', 'من یک کتاب دارم.']
            ]
        },
        {
            title: 'صرف فعل در زمان حال',
            explanation: 'فعل در زبان آلمانی مطابق فاعل تغییر می‌کند.',
            examples: [
                ['Ich lerne Deutsch.', 'من آلمانی یاد می‌گیرم.'],
                ['Du lernst Deutsch.', 'تو آلمانی یاد می‌گیری.']
            ]
        },
        {
            title: 'حروف تعریف der, die, das',
            explanation: 'اسم‌های آلمانی دارای جنس دستوری هستند.',
            examples: [
                ['Der Mann', 'مرد'],
                ['Die Frau', 'زن'],
                ['Das Kind', 'کودک']
            ]
        },
        {
            title: 'جمله پرسشی',
            explanation: 'برای پرسش می‌توان از کلمات پرسشی یا جابه‌جایی فعل و فاعل استفاده کرد.',
            examples: [
                ['Wie heißt du?', 'نامت چیست؟'],
                ['Kommst du heute?', 'امروز می‌آیی؟']
            ]
        },
        {
            title: 'منفی‌سازی با nicht و kein',
            explanation: 'nicht برای منفی‌کردن جمله و kein برای منفی‌کردن اسم به‌کار می‌رود.',
            examples: [
                ['Ich komme nicht.', 'من نمی‌آیم.'],
                ['Ich habe kein Auto.', 'من موتر ندارم.']
            ]
        }
    ],

    A2: [
        {
            title: 'زمان گذشته Perfekt',
            explanation: 'برای بیان بسیاری از رویدادهای گذشته از haben یا sein همراه Partizip II استفاده می‌شود.',
            examples: [
                ['Ich habe Deutsch gelernt.', 'من آلمانی یاد گرفتم.'],
                ['Ich bin nach Berlin gefahren.', 'من به برلین سفر کردم.']
            ]
        },
        {
            title: 'افعال جداشدنی',
            explanation: 'پیشوند فعل جداشدنی در جمله اصلی معمولاً به پایان جمله می‌رود.',
            examples: [
                ['Ich stehe um 7 Uhr auf.', 'من ساعت هفت بیدار می‌شوم.'],
                ['Er kauft heute ein.', 'او امروز خرید می‌کند.']
            ]
        },
        {
            title: 'افعال مُدال',
            explanation: 'افعال مُدال مانند können، müssen و dürfen با مصدر فعل اصلی استفاده می‌شوند.',
            examples: [
                ['Ich muss arbeiten.', 'من باید کار کنم.'],
                ['Du kannst kommen.', 'تو می‌توانی بیایی.']
            ]
        },
        {
            title: 'حروف اضافه مکانی',
            explanation: 'حروف اضافه مکانی مانند in، an و auf بسته به مفهوم جمله با حالت دستوری مناسب می‌آیند.',
            examples: [
                ['Ich bin in der Schule.', 'من در مکتب هستم.'],
                ['Ich gehe in die Schule.', 'من به مکتب می‌روم.']
            ]
        },
        {
            title: 'جمله‌های فرعی با weil',
            explanation: 'در جمله فرعی با weil، فعل صرف‌شده معمولاً به پایان جمله می‌رود.',
            examples: [
                ['Ich lerne, weil ich eine Prüfung habe.', 'من درس می‌خوانم، چون امتحان دارم.']
            ]
        }
    ],

    B1: [
        {
            title: 'جمله‌های فرعی با dass',
            explanation: 'با dass می‌توان یک جمله فرعی برای بیان نظر یا اطلاعات ساخت. فعل به پایان جمله می‌رود.',
            examples: [
                ['Ich glaube, dass er heute kommt.', 'فکر می‌کنم که او امروز می‌آید.']
            ]
        },
        {
            title: 'جمله‌های شرطی با wenn',
            explanation: 'wenn برای بیان شرط یا موقعیت تکرارشونده استفاده می‌شود.',
            examples: [
                ['Wenn ich Zeit habe, besuche ich dich.', 'اگر وقت داشته باشم، به دیدنت می‌آیم.']
            ]
        },
        {
            title: 'حالت مجهول Passiv',
            explanation: 'ساختار رایج مجهول در زمان حال با werden و Partizip II ساخته می‌شود.',
            examples: [
                ['Das Haus wird gebaut.', 'خانه ساخته می‌شود.']
            ]
        },
        {
            title: 'جمله‌های موصولی',
            explanation: 'جمله موصولی اطلاعات بیشتری درباره یک اسم می‌دهد و فعل در پایان می‌آید.',
            examples: [
                ['Das ist der Mann, der hier arbeitet.', 'این مردی است که اینجا کار می‌کند.']
            ]
        },
        {
            title: 'حروف اضافه با Genitiv',
            explanation: 'برخی حروف اضافه مانند während و wegen با حالت Genitiv استفاده می‌شوند.',
            examples: [
                ['Wegen des Wetters bleiben wir zu Hause.', 'به‌خاطر هوا در خانه می‌مانیم.']
            ]
        }
    ],

    B2: [
        {
            title: 'Konjunktiv II',
            explanation: 'برای بیان فرض، آرزو، پیشنهاد مؤدبانه و موقعیت غیرواقعی استفاده می‌شود.',
            examples: [
                ['Wenn ich mehr Zeit hätte, würde ich reisen.', 'اگر وقت بیشتری می‌داشتم، سفر می‌کردم.']
            ]
        },
        {
            title: 'Passiv در زمان‌های مختلف',
            explanation: 'ساختار مجهول می‌تواند در زمان‌های مختلف برای تمرکز بر عمل یا نتیجه استفاده شود.',
            examples: [
                ['Das Problem wurde gelöst.', 'مشکل حل شد.'],
                ['Das Problem ist gelöst worden.', 'مشکل حل شده است.']
            ]
        },
        {
            title: 'Nominalisierung',
            explanation: 'در این ساختار، فعل یا صفت به اسم تبدیل می‌شود.',
            examples: [
                ['Nachdem er angekommen war ...', 'پس از آن‌که او رسیده بود ...'],
                ['Nach seiner Ankunft ...', 'پس از رسیدن او ...']
            ]
        },
        {
            title: 'Partizipialkonstruktionen',
            explanation: 'ساختارهای وصفی با Partizip می‌توانند جمله را فشرده‌تر کنند.',
            examples: [
                ['Die gestern veröffentlichte Studie ...', 'مطالعه‌ای که دیروز منتشر شد ...']
            ]
        },
        {
            title: 'Konnektoren',
            explanation: 'پیونددهنده‌هایی مانند obwohl، dennoch و während رابطه میان ایده‌ها را نشان می‌دهند.',
            examples: [
                ['Obwohl es regnet, gehen wir spazieren.', 'با وجود این‌که باران می‌بارد، به قدم‌زدن می‌رویم.']
            ]
        }
    ],

    C1: [
        {
            title: 'Konjunktiv I و نقل قول غیرمستقیم',
            explanation: 'Konjunktiv I به‌ویژه در گزارش‌ها و نقل قول غیرمستقیم کاربرد دارد.',
            examples: [
                ['Er sagt, er sei krank.', 'او می‌گوید که بیمار است.']
            ]
        },
        {
            title: 'پیونددهنده‌های پیشرفته',
            explanation: 'ساختارهایی مانند insofern als، sofern و wenngleich برای بیان روابط دقیق منطقی استفاده می‌شوند.',
            examples: [
                ['Sofern alle zustimmen, beginnen wir.', 'به شرطی که همه موافقت کنند، شروع می‌کنیم.']
            ]
        },
        {
            title: 'Nominalstil',
            explanation: 'در سبک اسمی، اطلاعات با اسم‌ها و ترکیب‌های اسمی بیان می‌شوند؛ این سبک در متون رسمی رایج است.',
            examples: [
                ['Die Durchführung der Untersuchung ist wichtig.', 'انجام بررسی مهم است.']
            ]
        },
        {
            title: 'ساختارهای پیچیده موصولی',
            explanation: 'جمله‌های موصولی پیشرفته برای توضیح دقیق‌تر و ارتباط‌دادن چند ایده استفاده می‌شوند.',
            examples: [
                ['Die Frage, über die wir gesprochen haben, bleibt offen.', 'پرسشی که درباره آن صحبت کردیم، همچنان باز است.']
            ]
        },
        {
            title: 'ظرافت‌های معنایی و وجهی',
            explanation: 'انتخاب فعل‌های وجهی و قیدها می‌تواند میزان اطمینان، احتمال یا دیدگاه گوینده را نشان دهد.',
            examples: [
                ['Er dürfte bereits angekommen sein.', 'احتمالاً او تا حالا رسیده است.']
            ]
        }
    ]
};


// الگوهای مکالمه هر سطح
KING_ASAD.dialogTemplates = {

    A1: [
        {
            german: 'Guten Tag! Wie heißen Sie?',
            persian: 'روز بخیر! نام شما چیست؟'
        },
        {
            german: 'Ich heiße Ali. Und Sie?',
            persian: 'نام من علی است. و شما؟'
        },
        {
            german: 'Ich komme aus Afghanistan.',
            persian: 'من از افغانستان هستم.'
        }
    ],

    A2: [
        {
            german: 'Was hast du am Wochenende gemacht?',
            persian: 'آخر هفته چه کار کردی؟'
        },
        {
            german: 'Ich bin mit meiner Familie gereist.',
            persian: 'من با خانواده‌ام سفر کردم.'
        },
        {
            german: 'Wie war deine Reise?',
            persian: 'سفرت چگونه بود؟'
        }
    ],

    B1: [
        {
            german: 'Was hältst du von sozialen Medien?',
            persian: 'درباره رسانه‌های اجتماعی چه نظری داری؟'
        },
        {
            german: 'Ich finde sie nützlich, aber manchmal problematisch.',
            persian: 'من آن‌ها را مفید می‌دانم، اما گاهی مشکل‌ساز هستند.'
        },
        {
            german: 'Da stimme ich dir teilweise zu.',
            persian: 'تا اندازه‌ای با تو موافق هستم.'
        }
    ],

    B2: [
        {
            german: 'Welche Maßnahmen würden Sie vorschlagen?',
            persian: 'چه اقداماتی را پیشنهاد می‌کنید؟'
        },
        {
            german: 'Meiner Ansicht nach sollte man langfristig planen.',
            persian: 'از نظر من باید برای درازمدت برنامه‌ریزی کرد.'
        },
        {
            german: 'Das klingt überzeugend.',
            persian: 'این قانع‌کننده به نظر می‌رسد.'
        }
    ],

    C1: [
        {
            german: 'Inwiefern beeinflusst diese Entwicklung unsere Gesellschaft?',
            persian: 'این تحول تا چه اندازه بر جامعه ما تأثیر می‌گذارد؟'
        },
        {
            german: 'Das hängt maßgeblich von den Rahmenbedingungen ab.',
            persian: 'این موضوع تا حد زیادی به شرایط چارچوبی بستگی دارد.'
        },
        {
            german: 'Ich möchte diesen Aspekt näher erläutern.',
            persian: 'می‌خواهم این جنبه را بیشتر توضیح بدهم.'
        }
    ]
};

console.log('KING ASAD: گرامر و مکالمه‌ها بارگذاری شدند.');
/* =========================================
   KING ASAD
   بخش پنجم: سیستم اطلاعات درس‌ها
========================================= */

// ساخت اطلاعات درس‌ها برای پنج سطح
KING_ASAD.buildLessonData = function () {

    const result = {};

    KING_ASAD.LEVELS.forEach(level => {

        result[level] = [];

        const titles = KING_ASAD.lessonTitles[level];
        const grammarList = KING_ASAD.grammarByLevel[level];
        const dialogList = KING_ASAD.dialogTemplates[level];
        const vocabularyList = KING_ASAD.vocabularyBanks[level];

        for (let i = 0; i < KING_ASAD.LESSON_COUNTS[level]; i++) {

            const grammar = grammarList[i % grammarList.length];
            const dialog = dialogList[i % dialogList.length];

            const start = (i * 3) % vocabularyList.length;

            const words = [];

            for (let j = 0; j < 5; j++) {
                words.push(
                    vocabularyList[(start + j) % vocabularyList.length]
                );
            }

            result[level].push({
                id: `${level}-${i + 1}`,
                level: level,
                lessonNumber: i + 1,
                title: titles[i],
                words: words,
                dialog: [
                    {
                        german: dialog.german,
                        persian: dialog.persian
                    }
                ],
                grammar: grammar,
                exercises: [
                    {
                        type: 'translation',
                        question: `معنی عبارت «${words[0][0]}» چیست؟`,
                        answer: words[0][1]
                    },
                    {
                        type: 'translation',
                        question: `معنی عبارت «${words[1][0]}» چیست؟`,
                        answer: words[1][1]
                    }
                ]
            });
        }
    });

    return result;
};


// ذخیره اطلاعات تمام درس‌ها
KING_ASAD.lessonData = KING_ASAD.buildLessonData();


// دریافت اطلاعات یک درس مشخص
KING_ASAD.getLesson = function (level, lessonNumber) {

    if (!KING_ASAD.lessonData[level]) {
        return null;
    }

    return KING_ASAD.lessonData[level][lessonNumber - 1] || null;
};


// دریافت تمام درس‌های یک سطح
KING_ASAD.getLessonsByLevel = function (level) {

    return KING_ASAD.lessonData[level] || [];
};


// شمارش درس‌های ساخته‌شده
KING_ASAD.getTotalLessons = function () {

    return KING_ASAD.LEVELS.reduce((total, level) => {
        return total + KING_ASAD.lessonData[level].length;
    }, 0);
};


// بررسی صحت اطلاعات
KING_ASAD.validateLessons = function () {

    const total = KING_ASAD.getTotalLessons();

    console.log('تعداد درس‌های ساخته‌شده:', total);

    KING_ASAD.LEVELS.forEach(level => {
        console.log(
            level,
            'تعداد درس:',
            KING_ASAD.lessonData[level].length
        );
    });

    return total === KING_ASAD.TOTAL_LESSONS;
};


console.log(
    'KING ASAD: اطلاعات درس‌ها ساخته شد.',
    KING_ASAD.getTotalLessons()
);
/* =========================================
   KING ASAD
   بخش ششم: آزمون اختصاصی درس‌ها
========================================= */

// ساخت سؤال‌های آزمون برای یک درس
KING_ASAD.createLessonQuiz = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson || !lesson.words || lesson.words.length < 2) {
        return [];
    }

    const allWords = KING_ASAD.LEVELS.flatMap(currentLevel => {
        return KING_ASAD.vocabularyBanks[currentLevel];
    });

    return lesson.words.map((word, index) => {

        const correctAnswer = word[1];

        const wrongAnswers = allWords
            .map(item => item[1])
            .filter(answer => answer !== correctAnswer)
            .filter((answer, position, array) => {
                return array.indexOf(answer) === position;
            });

        const choices = [correctAnswer];

        let offset = (lessonNumber * 3 + index * 5) % wrongAnswers.length;

        while (choices.length < 4 && wrongAnswers.length > 0) {
            const candidate = wrongAnswers[offset % wrongAnswers.length];

            if (!choices.includes(candidate)) {
                choices.push(candidate);
            }

            offset++;
        }

        // مرتب‌سازی ثابت گزینه‌ها برای هر سؤال
        const shift = (lessonNumber + index) % choices.length;
        const orderedChoices = [
            ...choices.slice(shift),
            ...choices.slice(0, shift)
        ];

        return {
            question: `معنی عبارت «${word[0]}» چیست؟`,
            options: orderedChoices,
            correctAnswer: correctAnswer
        };
    });
};


// بررسی پاسخ‌های آزمون
KING_ASAD.checkLessonQuiz = function (level, lessonNumber, answers) {

    const questions = KING_ASAD.createLessonQuiz(level, lessonNumber);

    if (!Array.isArray(answers) || answers.length !== questions.length) {
        return {
            success: false,
            message: 'لطفاً به تمام سؤال‌ها پاسخ دهید.'
        };
    }

    let score = 0;

    const results = questions.map((question, index) => {

        const correct = answers[index] === question.correctAnswer;

        if (correct) {
            score++;
        }

        return {
            question: question.question,
            userAnswer: answers[index],
            correctAnswer: question.correctAnswer,
            correct: correct
        };
    });

    const percentage = questions.length
        ? Math.round((score / questions.length) * 100)
        : 0;

    return {
        success: true,
        level: level,
        lessonNumber: lessonNumber,
        totalQuestions: questions.length,
        correctAnswers: score,
        wrongAnswers: questions.length - score,
        percentage: percentage,
        passed: percentage >= 60,
        results: results
    };
};


// نمایش نتیجه آزمون در کنسول
KING_ASAD.printQuizResult = function (result) {

    if (!result || !result.success) {
        console.log(result ? result.message : 'نتیجه آزمون موجود نیست.');
        return;
    }

    console.log('نتیجه آزمون KING ASAD');
    console.log('سطح:', result.level);
    console.log('شماره درس:', result.lessonNumber);
    console.log('تعداد سؤال‌ها:', result.totalQuestions);
    console.log('پاسخ درست:', result.correctAnswers);
    console.log('پاسخ نادرست:', result.wrongAnswers);
    console.log('درصد موفقیت:', result.percentage + '%');
    console.log('وضعیت:', result.passed ? 'قبول شد' : 'نیاز به تمرین بیشتر');
};


console.log('KING ASAD: سیستم آزمون درس‌ها آماده شد.');
/* =========================================
   KING ASAD
   بخش هفتم: ذخیره پیشرفت شاگردان
========================================= */

// نام محل ذخیره اطلاعات
KING_ASAD.progressStorageKey = 'KING_ASAD_STUDENT_PROGRESS_V2';


// خواندن اطلاعات ذخیره‌شده
KING_ASAD.loadProgress = function () {

    try {
        const saved = localStorage.getItem(
            KING_ASAD.progressStorageKey
        );

        if (!saved) {
            return {
                completedLessons: [],
                quizResults: {}
            };
        }

        const progress = JSON.parse(saved);

        return {
            completedLessons: Array.isArray(progress.completedLessons)
                ? progress.completedLessons
                : [],

            quizResults:
                progress.quizResults &&
                typeof progress.quizResults === 'object'
                    ? progress.quizResults
                    : {}
        };

    } catch (error) {
        console.error('خطا در خواندن پیشرفت:', error);

        return {
            completedLessons: [],
            quizResults: {}
        };
    }
};


// اطلاعات پیشرفت شاگرد
KING_ASAD.studentProgress = KING_ASAD.loadProgress();


// ذخیره اطلاعات پیشرفت
KING_ASAD.saveProgress = function () {

    try {
        localStorage.setItem(
            KING_ASAD.progressStorageKey,
            JSON.stringify(KING_ASAD.studentProgress)
        );

        return true;

    } catch (error) {
        console.error('خطا در ذخیره پیشرفت:', error);
        return false;
    }
};


// ثبت تکمیل یک درس
KING_ASAD.completeLesson = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson) {
        return false;
    }

    const lessonId = `${level}-${lessonNumber}`;

    if (!KING_ASAD.studentProgress.completedLessons.includes(lessonId)) {

        KING_ASAD.studentProgress.completedLessons.push(lessonId);

    }

    return KING_ASAD.saveProgress();
};


// بررسی تکمیل‌شدن درس
KING_ASAD.isLessonCompleted = function (level, lessonNumber) {

    const lessonId = `${level}-${lessonNumber}`;

    return KING_ASAD.studentProgress.completedLessons.includes(
        lessonId
    );
};


// ذخیره نتیجه آزمون
KING_ASAD.saveLessonQuizResult = function (result) {

    if (!result || !result.success) {
        return false;
    }

    const key = `${result.level}-${result.lessonNumber}`;

    KING_ASAD.studentProgress.quizResults[key] = {
        score: result.correctAnswers,
        total: result.totalQuestions,
        percentage: result.percentage,
        passed: result.passed,
        date: new Date().toISOString()
    };

    return KING_ASAD.saveProgress();
};


// محاسبه پیشرفت یک سطح
KING_ASAD.getLevelProgress = function (level) {

    const total = KING_ASAD.LESSON_COUNTS[level];

    if (!total) {
        return 0;
    }

    const completed = KING_ASAD.studentProgress.completedLessons
        .filter(id => id.startsWith(level + '-'))
        .length;

    return Math.round((completed / total) * 100);
};


// محاسبه پیشرفت کل آموزشگاه
KING_ASAD.getOverallProgress = function () {

    const total = KING_ASAD.TOTAL_LESSONS;

    const completed =
        KING_ASAD.studentProgress.completedLessons.length;

    return Math.round((completed / total) * 100);
};


// دریافت گزارش پیشرفت
KING_ASAD.getProgressReport = function () {

    const report = {};

    KING_ASAD.LEVELS.forEach(level => {

        report[level] = {
            totalLessons: KING_ASAD.LESSON_COUNTS[level],
            completedLessons:
                KING_ASAD.studentProgress.completedLessons
                    .filter(id => id.startsWith(level + '-'))
                    .length,
            percentage: KING_ASAD.getLevelProgress(level)
        };

    });

    return {
        levels: report,
        overallPercentage: KING_ASAD.getOverallProgress()
    };
};


console.log('KING ASAD: سیستم ذخیره پیشرفت آماده شد.');
/* =========================================
   KING ASAD
   بخش هشتم: سیستم تلفظ صوتی آلمانی
========================================= */

// تنظیمات صوتی
KING_ASAD.speechSettings = {
    language: 'de-DE',
    rate: 0.85,
    pitch: 1,
    volume: 1
};


// بررسی پشتیبانی مرورگر از تلفظ صوتی
KING_ASAD.isSpeechSupported = function () {

    return (
        typeof window !== 'undefined' &&
        'speechSynthesis' in window &&
        'SpeechSynthesisUtterance' in window
    );
};


// دریافت صدای آلمانی
KING_ASAD.getGermanVoice = function () {

    if (!KING_ASAD.isSpeechSupported()) {
        return null;
    }

    const voices = window.speechSynthesis.getVoices();

    return voices.find(voice => {
        return voice.lang.toLowerCase().startsWith('de');
    }) || null;
};


// پخش تلفظ آلمانی
KING_ASAD.speakGerman = function (text, options = {}) {

    if (!KING_ASAD.isSpeechSupported()) {
        console.warn('مرورگر شما از تلفظ صوتی پشتیبانی نمی‌کند.');
        return false;
    }

    if (typeof text !== 'string' || !text.trim()) {
        console.warn('متن برای تلفظ موجود نیست.');
        return false;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const settings = {
        ...KING_ASAD.speechSettings,
        ...options
    };

    utterance.lang = settings.language;
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.volume = settings.volume;

    const germanVoice = KING_ASAD.getGermanVoice();

    if (germanVoice) {
        utterance.voice = germanVoice;
    }

    window.speechSynthesis.speak(utterance);

    return true;
};


// توقف تلفظ
KING_ASAD.stopSpeaking = function () {

    if (!KING_ASAD.isSpeechSupported()) {
        return false;
    }

    window.speechSynthesis.cancel();

    return true;
};


// خواندن آهسته برای تمرین تلفظ
KING_ASAD.speakSlowly = function (text) {

    return KING_ASAD.speakGerman(text, {
        rate: 0.65
    });
};


// خواندن با سرعت طبیعی
KING_ASAD.speakNormally = function (text) {

    return KING_ASAD.speakGerman(text, {
        rate: 1
    });
};


// خواندن واژگان یک درس
KING_ASAD.speakLessonWords = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson) {
        return false;
    }

    const words = lesson.words
        .map(word => word[0])
        .join('. ');

    return KING_ASAD.speakGerman(words);
};


// خواندن مکالمه یک درس
KING_ASAD.speakLessonDialog = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson || !lesson.dialog) {
        return false;
    }

    const conversation = lesson.dialog
        .map(line => line.german)
        .join('. ');

    return KING_ASAD.speakGerman(conversation);
};


// آماده‌سازی صداهای مرورگر
if (KING_ASAD.isSpeechSupported()) {

    window.speechSynthesis.onvoiceschanged = function () {
        KING_ASAD.getGermanVoice();
    };

}


console.log('KING ASAD: سیستم تلفظ آلمانی آماده شد.');
/* =========================================
   KING ASAD
   بخش نهم: فرهنگ لغت آلمانی به فارسی
========================================= */

// ساخت فهرست واژگان از تمام سطوح
KING_ASAD.buildDictionary = function () {

    const dictionary = [];

    KING_ASAD.LEVELS.forEach(level => {

        const words = KING_ASAD.vocabularyBanks[level] || [];

        words.forEach(word => {

            if (Array.isArray(word) && word.length >= 2) {

                dictionary.push({
                    german: word[0],
                    persian: word[1],
                    level: level
                });

            }

        });

    });

    return dictionary;
};


// ذخیره فرهنگ لغت
KING_ASAD.dictionary = KING_ASAD.buildDictionary();


// جست‌وجوی واژه
KING_ASAD.searchDictionary = function (searchText) {

    if (
        typeof searchText !== 'string' ||
        !searchText.trim()
    ) {
        return [];
    }

    const query = searchText.trim().toLowerCase();

    return KING_ASAD.dictionary.filter(item => {

        return (
            item.german.toLowerCase().includes(query) ||
            item.persian.toLowerCase().includes(query)
        );

    });

};


// دریافت معنی دقیق یک واژه
KING_ASAD.getWordMeaning = function (germanWord) {

    if (typeof germanWord !== 'string') {
        return null;
    }

    const query = germanWord.trim().toLowerCase();

    return KING_ASAD.dictionary.find(item => {

        return item.german.toLowerCase() === query;

    }) || null;

};


// جست‌وجوی واژه در درس‌های یک سطح
KING_ASAD.searchLevelDictionary = function (level, searchText) {

    if (!KING_ASAD.lessonData[level]) {
        return [];
    }

    if (typeof searchText !== 'string' || !searchText.trim()) {
        return [];
    }

    const query = searchText.trim().toLowerCase();
    const results = [];

    KING_ASAD.lessonData[level].forEach(lesson => {

        lesson.words.forEach(word => {

            if (
                word[0].toLowerCase().includes(query) ||
                word[1].toLowerCase().includes(query)
            ) {

                results.push({
                    german: word[0],
                    persian: word[1],
                    level: level,
                    lessonNumber: lesson.lessonNumber,
                    lessonTitle: lesson.title
                });

            }

        });

    });

    return results;

};


// خواندن تلفظ واژه از فرهنگ لغت
KING_ASAD.speakDictionaryWord = function (germanWord) {

    return KING_ASAD.speakGerman(germanWord);

};


// دریافت تعداد واژه‌های فرهنگ لغت
KING_ASAD.getDictionaryCount = function () {

    return KING_ASAD.dictionary.length;

};


console.log(
    'KING ASAD: فرهنگ لغت آماده شد.',
    'تعداد واژه‌ها:',
    KING_ASAD.getDictionaryCount()
);
/* =========================================
   KING ASAD
   بخش دهم: سیستم ترجمه آلمانی و فارسی
========================================= */

// تنظیمات ترجمه
KING_ASAD.translationSettings = {
    sourceLanguage: 'de',
    targetLanguage: 'fa',
    maximumLength: 5000
};


// ترجمه با فرهنگ لغت داخلی
KING_ASAD.translateWithDictionary = function (text) {

    if (typeof text !== 'string' || !text.trim()) {
        return '';
    }

    const words = text.trim().split(/(\s+|[.,!?;:]+)/);

    return words.map(part => {

        const cleanWord = part.toLowerCase();

        const found = KING_ASAD.dictionary.find(item => {
            return item.german.toLowerCase() === cleanWord;
        });

        return found ? found.persian : part;

    }).join('');
};


// ترجمه متن
KING_ASAD.translateText = function (text, direction = 'de-fa') {

    if (typeof text !== 'string' || !text.trim()) {
        return {
            success: false,
            message: 'لطفاً متن مورد نظر را وارد کنید.'
        };
    }

    if (text.length > KING_ASAD.translationSettings.maximumLength) {
        return {
            success: false,
            message: 'متن واردشده بیش از اندازه طولانی است.'
        };
    }

    if (direction === 'de-fa') {

        const translated = KING_ASAD.translateWithDictionary(text);

        return {
            success: true,
            direction: direction,
            originalText: text,
            translatedText: translated,
            method: 'internal-dictionary'
        };

    }

    if (direction === 'fa-de') {

        const translated = text.split(/(\s+|[.,!?;:]+)/).map(part => {

            const cleanWord = part.trim();

            const found = KING_ASAD.dictionary.find(item => {
                return item.persian === cleanWord;
            });

            return found ? found.german : part;

        }).join('');

        return {
            success: true,
            direction: direction,
            originalText: text,
            translatedText: translated,
            method: 'internal-dictionary'
        };

    }

    return {
        success: false,
        message: 'جهت ترجمه معتبر نیست.'
    };
};


// آماده‌سازی ترجمه برای سرویس خارجی
KING_ASAD.prepareExternalTranslation = function (text, direction = 'de-fa') {

    if (typeof text !== 'string' || !text.trim()) {
        return null;
    }

    return {
        text: text.trim(),
        sourceLanguage: direction === 'de-fa' ? 'de' : 'fa',
        targetLanguage: direction === 'de-fa' ? 'fa' : 'de'
    };
};


// ترجمه یک واژه
KING_ASAD.translateWord = function (word) {

    const found = KING_ASAD.getWordMeaning(word);

    if (!found) {
        return {
            success: false,
            message: 'این واژه در فرهنگ لغت موجود نیست.'
        };
    }

    return {
        success: true,
        german: found.german,
        persian: found.persian,
        level: found.level
    };
};


console.log('KING ASAD: سیستم ترجمه آماده شد.');
/* =========================================
   KING ASAD
   بخش یازدهم: مدیریت و نمایش درس‌ها
========================================= */

// دریافت عنوان سطح
KING_ASAD.getLevelName = function (level) {

    const names = {
        A1: 'مقدماتی اول',
        A2: 'مقدماتی دوم',
        B1: 'متوسط اول',
        B2: 'متوسط دوم',
        C1: 'پیشرفته'
    };

    return names[level] || 'سطح نامشخص';
};


// دریافت خلاصه یک سطح
KING_ASAD.getLevelSummary = function (level) {

    const lessons = KING_ASAD.getLessonsByLevel(level);

    return {
        level: level,
        name: KING_ASAD.getLevelName(level),
        totalLessons: lessons.length,
        completedLessons: lessons.filter(lesson => {
            return KING_ASAD.isLessonCompleted(
                level,
                lesson.lessonNumber
            );
        }).length,
        progress: KING_ASAD.getLevelProgress(level)
    };
};


// ساخت فهرست درس‌های یک سطح
KING_ASAD.createLessonList = function (level) {

    const lessons = KING_ASAD.getLessonsByLevel(level);

    return lessons.map(lesson => ({
        id: lesson.id,
        number: lesson.lessonNumber,
        title: lesson.title,
        completed: KING_ASAD.isLessonCompleted(
            level,
            lesson.lessonNumber
        )
    }));
};


// دریافت جزئیات کامل یک درس
KING_ASAD.getLessonDetails = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson) {
        return null;
    }

    return {
        id: lesson.id,
        level: lesson.level,
        levelName: KING_ASAD.getLevelName(level),
        lessonNumber: lesson.lessonNumber,
        title: lesson.title,
        words: lesson.words,
        dialog: lesson.dialog,
        grammar: lesson.grammar,
        exercises: lesson.exercises,
        completed: KING_ASAD.isLessonCompleted(
            level,
            lessonNumber
        ),
        quiz: KING_ASAD.createLessonQuiz(
            level,
            lessonNumber
        )
    };
};


// دریافت فهرست تمام سطوح
KING_ASAD.getAllLevelsSummary = function () {

    return KING_ASAD.LEVELS.map(level => {
        return KING_ASAD.getLevelSummary(level);
    });
};


// دریافت درس بعدی
KING_ASAD.getNextLesson = function (level, lessonNumber) {

    const nextNumber = lessonNumber + 1;

    if (nextNumber > KING_ASAD.LESSON_COUNTS[level]) {
        return null;
    }

    return KING_ASAD.getLessonDetails(level, nextNumber);
};


// دریافت درس قبلی
KING_ASAD.getPreviousLesson = function (level, lessonNumber) {

    const previousNumber = lessonNumber - 1;

    if (previousNumber < 1) {
        return null;
    }

    return KING_ASAD.getLessonDetails(level, previousNumber);
};


// بررسی ساختار همه درس‌ها
KING_ASAD.checkLessonStructure = function () {

    const errors = [];

    KING_ASAD.LEVELS.forEach(level => {

        const lessons = KING_ASAD.getLessonsByLevel(level);

        if (lessons.length !== KING_ASAD.LESSON_COUNTS[level]) {
            errors.push(`تعداد درس‌های ${level} درست نیست.`);
        }

        lessons.forEach(lesson => {

            if (!lesson.title || !lesson.words.length) {
                errors.push(`اطلاعات درس ${lesson.id} ناقص است.`);
            }

            if (!lesson.grammar || !lesson.dialog.length) {
                errors.push(`محتوای آموزشی درس ${lesson.id} ناقص است.`);
            }

        });

    });

    return {
        valid: errors.length === 0,
        errors: errors,
        totalLessons: KING_ASAD.getTotalLessons()
    };
};


console.log('KING ASAD: سیستم مدیریت درس‌ها آماده شد.');
/* =========================================
   KING ASAD
   بخش دوازدهم: مدیریت ویدیوهای آموزشی
========================================= */

// اطلاعات ویدیوهای آموزشی هر سطح
KING_ASAD.videoLibrary = {

    A1: [
        {
            title: 'Nicos Weg A1',
            provider: 'DW Learn German',
            videoId: '4-eDoThe6qo',
            url: 'https://www.youtube.com/watch?v=4-eDoThe6qo',
            type: 'YouTube'
        }
    ],

    A2: [
        {
            title: 'Nicos Weg A2',
            provider: 'DW Learn German',
            videoId: 'Lg5P2w_Ro1c',
            url: 'https://www.youtube.com/watch?v=Lg5P2w_Ro1c',
            type: 'YouTube'
        }
    ],

    B1: [
        {
            title: 'Nicos Weg B1',
            provider: 'DW Learn German',
            videoId: 'LkufozluseI',
            url: 'https://www.youtube.com/watch?v=LkufozluseI',
            type: 'YouTube'
        }
    ],

    B2: [
        {
            title: 'German B2 Learning',
            provider: 'Goethe-Institut',
            videoId: null,
            url: 'https://www.goethe.de/',
            type: 'External'
        }
    ],

    C1: [
        {
            title: 'German C1 Learning',
            provider: 'Goethe-Institut',
            videoId: null,
            url: 'https://www.goethe.de/',
            type: 'External'
        }
    ]

};


// دریافت ویدیوهای یک سطح
KING_ASAD.getLevelVideos = function (level) {

    return KING_ASAD.videoLibrary[level] || [];

};


// دریافت ویدیوی یک سطح
KING_ASAD.getMainVideo = function (level) {

    const videos = KING_ASAD.getLevelVideos(level);

    return videos.length ? videos[0] : null;

};


// ساخت لینک پخش ویدیو
KING_ASAD.getVideoEmbedUrl = function (video) {

    if (!video || !video.videoId) {
        return null;
    }

    return `https://www.youtube.com/embed/${video.videoId}`;
};


// دریافت اطلاعات ویدیوی یک سطح
KING_ASAD.getVideoDetails = function (level) {

    const video = KING_ASAD.getMainVideo(level);

    if (!video) {
        return null;
    }

    return {
        level: level,
        levelName: KING_ASAD.getLevelName(level),
        title: video.title,
        provider: video.provider,
        videoId: video.videoId,
        url: video.url,
        embedUrl: KING_ASAD.getVideoEmbedUrl(video),
        type: video.type
    };

};


// دریافت همه ویدیوهای آموزشگاه
KING_ASAD.getAllVideos = function () {

    const result = [];

    KING_ASAD.LEVELS.forEach(level => {

        KING_ASAD.getLevelVideos(level).forEach(video => {

            result.push({
                level: level,
                levelName: KING_ASAD.getLevelName(level),
                ...video
            });

        });

    });

    return result;

};


// بررسی موجودیت ویدیوهای پنج سطح
KING_ASAD.validateVideoLibrary = function () {

    const errors = [];

    KING_ASAD.LEVELS.forEach(level => {

        if (!Array.isArray(KING_ASAD.videoLibrary[level])) {
            errors.push(`ویدیوهای سطح ${level} تعریف نشده است.`);
        }

    });

    return {
        valid: errors.length === 0,
        errors: errors,
        totalVideos: KING_ASAD.getAllVideos().length
    };

};


console.log(
    'KING ASAD: کتابخانه ویدیوها آماده شد.',
    KING_ASAD.getAllVideos()
);
/* =========================================
   KING ASAD
   بخش سیزدهم: نمایش و پخش ویدیوها
========================================= */

// ساخت کارت ویدیوی آموزشی
KING_ASAD.createVideoCard = function (level, video) {

    const card = document.createElement('div');
    card.className = 'king-video-card';

    const title = document.createElement('h3');
    title.textContent = video.title;

    const levelName = document.createElement('p');
    levelName.textContent =
        KING_ASAD.getLevelName(level);

    const provider = document.createElement('p');
    provider.textContent = video.provider;

    card.append(title, levelName, provider);

    if (video.videoId) {

        const iframe = document.createElement('iframe');

        iframe.src = KING_ASAD.getVideoEmbedUrl(video);
        iframe.title = video.title;
        iframe.loading = 'lazy';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        card.appendChild(iframe);

    } else {

        const message = document.createElement('p');
        message.textContent =
            'برای مشاهده منابع آموزشی این سطح، از لینک رسمی استفاده کنید.';

        card.appendChild(message);

    }

    const link = document.createElement('a');

    link.href = video.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'بازکردن منبع آموزشی';

    card.appendChild(link);

    return card;
};


// نمایش ویدیوهای یک سطح در صفحه
KING_ASAD.renderLevelVideos = function (level, container) {

    if (!KING_ASAD.LEVELS.includes(level)) {
        return false;
    }

    const target = typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!target) {
        console.warn('محل نمایش ویدیو پیدا نشد.');
        return false;
    }

    target.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent =
        'ویدیوهای آموزشی ' + KING_ASAD.getLevelName(level);

    target.appendChild(heading);

    const videos = KING_ASAD.getLevelVideos(level);

    if (!videos.length) {

        const empty = document.createElement('p');
        empty.textContent = 'ویدیویی برای این سطح ثبت نشده است.';

        target.appendChild(empty);

        return true;
    }

    videos.forEach(video => {
        target.appendChild(
            KING_ASAD.createVideoCard(level, video)
        );
    });

    return true;
};


// نمایش همه ویدیوهای پنج سطح
KING_ASAD.renderAllVideos = function (container) {

    const target = typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!target) {
        return false;
    }

    target.replaceChildren();

    KING_ASAD.LEVELS.forEach(level => {

        const section = document.createElement('section');

        section.className = 'king-video-section';

        KING_ASAD.renderLevelVideos(level, section);

        target.appendChild(section);

    });

    return true;
};


// بازکردن صفحه ویدیو در سایت
KING_ASAD.openVideoPage = function (level) {

    const video = KING_ASAD.getMainVideo(level);

    if (!video || !video.url) {
        return false;
    }

    window.open(
        video.url,
        '_blank',
        'noopener,noreferrer'
    );

    return true;
};


// اتصال دکمه‌های انتخاب سطح به نمایش ویدیو
KING_ASAD.bindVideoButtons = function () {

    document.querySelectorAll('[data-video-level]').forEach(button => {

        if (button.dataset.kingVideoBound === 'true') {
            return;
        }

        button.dataset.kingVideoBound = 'true';

        button.addEventListener('click', function () {

            const level = this.dataset.videoLevel;

            const container =
                document.querySelector('#videoContainer');

            KING_ASAD.renderLevelVideos(level, container);

        });

    });

};


console.log('KING ASAD: سیستم نمایش ویدیوها آماده شد.');
/* =========================================
   KING ASAD
   بخش چهاردهم: کارت‌های درس‌ها
========================================= */

// ساخت کارت یک درس
KING_ASAD.createLessonCard = function (level, lessonNumber) {

    const lesson = KING_ASAD.getLesson(level, lessonNumber);

    if (!lesson) {
        return null;
    }

    const card = document.createElement('div');
    card.className = 'king-lesson-card';

    card.dataset.level = level;
    card.dataset.lesson = lessonNumber;

    const title = document.createElement('h3');
    title.textContent =
        `درس ${lessonNumber}: ${lesson.title}`;

    const levelText = document.createElement('p');
    levelText.textContent =
        KING_ASAD.getLevelName(level);

    const status = document.createElement('p');
    status.className = 'king-lesson-status';

    const completed = KING_ASAD.isLessonCompleted(
        level,
        lessonNumber
    );

    status.textContent = completed
        ? 'تکمیل‌شده'
        : 'تکمیل‌نشده';

    status.dataset.status = completed
        ? 'completed'
        : 'pending';

    const openButton = document.createElement('button');
    openButton.type = 'button';
    openButton.textContent = 'مشاهده درس';

    openButton.addEventListener('click', function () {

        if (typeof window.showLessonDetail === 'function') {
            window.showLessonDetail(level, lessonNumber);
        } else {
            KING_ASAD.openLesson(level, lessonNumber);
        }

    });

    card.append(
        title,
        levelText,
        status,
        openButton
    );

    return card;
};


// نمایش کارت‌های یک سطح
KING_ASAD.renderLessonCards = function (level, container) {

    if (!KING_ASAD.LEVELS.includes(level)) {
        return false;
    }

    const target = typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!target) {
        return false;
    }

    target.replaceChildren();

    const heading = document.createElement('h2');

    heading.textContent =
        'درس‌های سطح ' + level;

    target.appendChild(heading);

    KING_ASAD.getLessonsByLevel(level).forEach(lesson => {

        const card = KING_ASAD.createLessonCard(
            level,
            lesson.lessonNumber
        );

        if (card) {
            target.appendChild(card);
        }

    });

    return true;
};


// بازکردن جزئیات درس
KING_ASAD.openLesson = function (level, lessonNumber) {

    const details = KING_ASAD.getLessonDetails(
        level,
        lessonNumber
    );

    if (!details) {
        return false;
    }

    KING_ASAD.currentLesson = details;

    if (typeof window.renderKingAsadLesson === 'function') {
        window.renderKingAsadLesson(details);
        return true;
    }

    console.log('درس انتخاب‌شده:', details);

    return true;
};


// تازه‌سازی وضعیت کارت‌های درس
KING_ASAD.refreshLessonCards = function () {

    document.querySelectorAll('.king-lesson-card').forEach(card => {

        const level = card.dataset.level;
        const lessonNumber = Number(card.dataset.lesson);

        const status = card.querySelector(
            '.king-lesson-status'
        );

        if (!status) {
            return;
        }

        const completed = KING_ASAD.isLessonCompleted(
            level,
            lessonNumber
        );

        status.textContent = completed
            ? 'تکمیل‌شده'
            : 'تکمیل‌نشده';

        status.dataset.status = completed
            ? 'completed'
            : 'pending';

    });

};


console.log('KING ASAD: کارت‌های درس‌ها آماده شدند.');
/* =========================================
   KING ASAD
   بخش پانزدهم: نمایش محتوای کامل درس
========================================= */

// ساخت بخش عنوان درس
KING_ASAD.renderLessonHeading = function (lesson) {

    const heading = document.createElement('div');
    heading.className = 'king-lesson-heading';

    const title = document.createElement('h2');
    title.textContent =
        `درس ${lesson.lessonNumber}: ${lesson.title}`;

    const level = document.createElement('p');
    level.textContent =
        KING_ASAD.getLevelName(lesson.level);

    heading.append(title, level);

    return heading;
};


// نمایش واژگان درس
KING_ASAD.renderLessonVocabulary = function (lesson) {

    const section = document.createElement('section');
    section.className = 'king-lesson-vocabulary';

    const heading = document.createElement('h3');
    heading.textContent = 'واژگان درس';

    section.appendChild(heading);

    lesson.words.forEach((word, index) => {

        const item = document.createElement('div');
        item.className = 'king-vocabulary-item';

        const german = document.createElement('strong');
        german.textContent = word[0];

        const persian = document.createElement('p');
        persian.textContent = word[1];

        const speakButton = document.createElement('button');
        speakButton.type = 'button';
        speakButton.textContent = 'شنیدن تلفظ';

        speakButton.addEventListener('click', function () {
            KING_ASAD.speakGerman(word[0]);
        });

        item.append(german, persian, speakButton);

        section.appendChild(item);

    });

    return section;
};


// نمایش مکالمه درس
KING_ASAD.renderLessonConversation = function (lesson) {

    const section = document.createElement('section');
    section.className = 'king-lesson-conversation';

    const heading = document.createElement('h3');
    heading.textContent = 'مکالمه آموزشی';

    section.appendChild(heading);

    lesson.dialog.forEach(line => {

        const item = document.createElement('div');
        item.className = 'king-dialog-item';

        const german = document.createElement('p');
        german.textContent = line.german;

        const persian = document.createElement('p');
        persian.textContent = line.persian;

        item.append(german, persian);

        section.appendChild(item);

    });

    const speakButton = document.createElement('button');
    speakButton.type = 'button';
    speakButton.textContent = 'شنیدن مکالمه';

    speakButton.addEventListener('click', function () {
        KING_ASAD.speakLessonDialog(
            lesson.level,
            lesson.lessonNumber
        );
    });

    section.appendChild(speakButton);

    return section;
};


// نمایش گرامر درس
KING_ASAD.renderLessonGrammar = function (lesson) {

    const section = document.createElement('section');
    section.className = 'king-lesson-grammar';

    const heading = document.createElement('h3');
    heading.textContent = 'گرامر درس';

    const title = document.createElement('h4');
    title.textContent = lesson.grammar.title;

    const explanation = document.createElement('p');
    explanation.textContent = lesson.grammar.explanation;

    section.append(heading, title, explanation);

    if (Array.isArray(lesson.grammar.examples)) {

        lesson.grammar.examples.forEach(example => {

            const item = document.createElement('div');

            const german = document.createElement('p');
            german.textContent = example[0];

            const persian = document.createElement('p');
            persian.textContent = example[1];

            item.append(german, persian);

            section.appendChild(item);

        });

    }

    return section;
};


// نمایش تمرین‌های درس
KING_ASAD.renderLessonExercises = function (lesson) {

    const section = document.createElement('section');
    section.className = 'king-lesson-exercises';

    const heading = document.createElement('h3');
    heading.textContent = 'تمرین‌های درس';

    section.appendChild(heading);

    lesson.exercises.forEach((exercise, index) => {

        const item = document.createElement('div');

        const question = document.createElement('p');
        question.textContent =
            `${index + 1}. ${exercise.question}`;

        const answer = document.createElement('button');
        answer.type = 'button';
        answer.textContent = 'نمایش پاسخ';

        const result = document.createElement('p');
        result.hidden = true;
        result.textContent = exercise.answer;

        answer.addEventListener('click', function () {

            result.hidden = !result.hidden;

            answer.textContent = result.hidden
                ? 'نمایش پاسخ'
                : 'پنهان‌کردن پاسخ';

        });

        item.append(question, answer, result);

        section.appendChild(item);

    });

    return section;
};


// نمایش کامل یک درس
KING_ASAD.renderKingAsadLesson = function (lesson) {

    if (!lesson) {
        return false;
    }

    const container = document.querySelector('#lessonDetail');

    if (!container) {
        console.warn(
            'محل نمایش درس با شناسه lessonDetail پیدا نشد.'
        );

        return false;
    }

    container.replaceChildren();

    container.appendChild(
        KING_ASAD.renderLessonHeading(lesson)
    );

    container.appendChild(
        KING_ASAD.renderLessonVocabulary(lesson)
    );

    container.appendChild(
        KING_ASAD.renderLessonConversation(lesson)
    );

    container.appendChild(
        KING_ASAD.renderLessonGrammar(lesson)
    );

    container.appendChild(
        KING_ASAD.renderLessonExercises(lesson)
    );

    const completeButton = document.createElement('button');

    completeButton.type = 'button';
    completeButton.textContent = 'تکمیل این درس';

    completeButton.addEventListener('click', function () {

        const saved = KING_ASAD.completeLesson(
            lesson.level,
            lesson.lessonNumber
        );

        if (saved) {
            completeButton.textContent = 'درس تکمیل شد';
            KING_ASAD.refreshLessonCards();
        }

    });

    container.appendChild(completeButton);

    return true;
};


console.log('KING ASAD: نمایش کامل درس‌ها آماده شد.');
/* =========================================
   KING ASAD
   بخش شانزدهم: آزمون تعاملی
========================================= */

// ساخت صفحه آزمون
KING_ASAD.renderLessonQuiz = function (level, lessonNumber) {

    const container = document.querySelector('#quizContainer');

    if (!container) {
        console.warn('محل نمایش آزمون پیدا نشد.');
        return false;
    }

    const questions = KING_ASAD.createLessonQuiz(
        level,
        lessonNumber
    );

    if (!questions.length) {
        return false;
    }

    container.replaceChildren();

    let currentAnswers = [];

    const heading = document.createElement('h2');
    heading.textContent =
        `آزمون درس ${lessonNumber} - سطح ${level}`;

    container.appendChild(heading);

    const form = document.createElement('form');

    questions.forEach((question, index) => {

        const questionBox = document.createElement('fieldset');

        const questionTitle = document.createElement('legend');

        questionTitle.textContent =
            `${index + 1}. ${question.question}`;

        questionBox.appendChild(questionTitle);

        question.options.forEach((option, optionIndex) => {

            const label = document.createElement('label');

            const radio = document.createElement('input');

            radio.type = 'radio';
            radio.name = `question-${index}`;
            radio.value = option;
            radio.required = true;

            radio.addEventListener('change', function () {
                currentAnswers[index] = option;
            });

            label.append(
                radio,
                document.createTextNode(' ' + option)
            );

            questionBox.appendChild(label);

            questionBox.appendChild(
                document.createElement('br')
            );

        });

        form.appendChild(questionBox);

    });

    const submitButton = document.createElement('button');

    submitButton.type = 'submit';
    submitButton.textContent = 'ثبت پاسخ‌ها و مشاهده نتیجه';

    form.appendChild(submitButton);

    const resultBox = document.createElement('div');

    resultBox.className = 'king-quiz-result';

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const result = KING_ASAD.checkLessonQuiz(
            level,
            lessonNumber,
            currentAnswers
        );

        if (!result.success) {
            resultBox.textContent = result.message;
            return;
        }

        KING_ASAD.saveLessonQuizResult(result);

        resultBox.replaceChildren();

        const score = document.createElement('h3');

        score.textContent =
            `نمره شما: ${result.correctAnswers} از ${result.totalQuestions}`;

        const percentage = document.createElement('p');

        percentage.textContent =
            `درصد موفقیت: ${result.percentage}%`;

        const status = document.createElement('p');

        status.textContent = result.passed
            ? 'تبریک! شما در آزمون موفق شدید.'
            : 'نیاز به تمرین بیشتر دارید.';

        resultBox.append(score, percentage, status);

        result.results.forEach((item, index) => {

            const detail = document.createElement('p');

            detail.textContent =
                `${index + 1}. ${item.correct ? 'درست' : 'نادرست'} - پاسخ صحیح: ${item.correctAnswer}`;

            resultBox.appendChild(detail);

        });

        submitButton.disabled = true;

    });

    container.append(form, resultBox);

    return true;
};


// بازکردن آزمون یک درس
KING_ASAD.openLessonQuiz = function (level, lessonNumber) {

    return KING_ASAD.renderLessonQuiz(
        level,
        lessonNumber
    );

};


console.log('KING ASAD: آزمون تعاملی آماده شد.');
/* =========================================
   KING ASAD
   بخش هفدهم: داشبورد پیشرفت شاگردان
========================================= */

// ساخت نوار پیشرفت
KING_ASAD.createProgressBar = function (percentage) {

    const wrapper = document.createElement('div');
    wrapper.className = 'king-progress-wrapper';

    const bar = document.createElement('div');
    bar.className = 'king-progress-bar';

    const fill = document.createElement('div');
    fill.className = 'king-progress-fill';

    const safePercentage = Math.max(
        0,
        Math.min(100, Number(percentage) || 0)
    );

    fill.style.width = safePercentage + '%';

    bar.appendChild(fill);

    const label = document.createElement('p');
    label.textContent = safePercentage + '% تکمیل شده';

    wrapper.append(bar, label);

    return wrapper;
};


// ساخت کارت پیشرفت یک سطح
KING_ASAD.createLevelProgressCard = function (level) {

    const summary = KING_ASAD.getLevelSummary(level);

    const card = document.createElement('div');
    card.className = 'king-progress-card';

    const title = document.createElement('h3');
    title.textContent = level + ' - ' + summary.name;

    const completed = document.createElement('p');

    completed.textContent =
        `${summary.completedLessons} از ${summary.totalLessons} درس تکمیل شده`;

    card.append(
        title,
        completed,
        KING_ASAD.createProgressBar(summary.progress)
    );

    return card;
};


// نمایش داشبورد پیشرفت
KING_ASAD.renderProgressDashboard = function (container) {

    const target = typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!target) {
        console.warn('محل نمایش داشبورد پیدا نشد.');
        return false;
    }

    target.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent = 'داشبورد پیشرفت KING ASAD';

    target.appendChild(heading);

    const overall = KING_ASAD.getOverallProgress();

    const overallTitle = document.createElement('h3');
    overallTitle.textContent = 'پیشرفت کل آموزشگاه';

    const overallText = document.createElement('p');

    overallText.textContent =
        `${KING_ASAD.studentProgress.completedLessons.length} از ${KING_ASAD.TOTAL_LESSONS} درس تکمیل شده`;

    target.append(
        overallTitle,
        overallText,
        KING_ASAD.createProgressBar(overall)
    );

    const levelsTitle = document.createElement('h3');
    levelsTitle.textContent = 'پیشرفت در پنج سطح';

    target.appendChild(levelsTitle);

    KING_ASAD.LEVELS.forEach(level => {

        target.appendChild(
            KING_ASAD.createLevelProgressCard(level)
        );

    });

    return true;
};


// نمایش گزارش آزمون‌ها
KING_ASAD.renderQuizHistory = function (container) {

    const target = typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!target) {
        return false;
    }

    target.replaceChildren();

    const heading = document.createElement('h3');
    heading.textContent = 'تاریخچه آزمون‌ها';

    target.appendChild(heading);

    const results = KING_ASAD.studentProgress.quizResults;

    const keys = Object.keys(results);

    if (!keys.length) {

        const empty = document.createElement('p');
        empty.textContent = 'هنوز آزمونی ثبت نشده است.';

        target.appendChild(empty);

        return true;
    }

    keys.forEach(key => {

        const result = results[key];

        const item = document.createElement('div');

        const title = document.createElement('strong');
        title.textContent = 'درس ' + key;

        const score = document.createElement('p');

        score.textContent =
            `نمره: ${result.score} از ${result.total} - ${result.percentage}%`;

        item.append(title, score);

        target.appendChild(item);

    });

    return true;
};


// تازه‌سازی داشبورد
KING_ASAD.refreshProgressDashboard = function () {

    return KING_ASAD.renderProgressDashboard(
        '#progressDashboard'
    );

};


console.log('KING ASAD: داشبورد پیشرفت آماده شد.');

/* =========================================
   KING ASAD
   بخش بیستم: اتصال و راه‌اندازی اصلاح‌شده
========================================= */

// اتصال نمایش درس
window.renderKingAsadLesson = function (lesson) {
    return KING_ASAD.renderKingAsadLesson(lesson);
};

// نگهداری تابع اصلی نمایش درس
KING_ASAD.renderLessonWithoutQuiz =
    KING_ASAD.renderKingAsadLesson;

// افزودن دکمه آزمون به درس
KING_ASAD.renderKingAsadLesson = function (lesson) {

    const rendered =
        KING_ASAD.renderLessonWithoutQuiz(lesson);

    if (!rendered) return false;

    const container =
        document.querySelector('#lessonDetail');

    if (!container) return false;

    const completeButton =
        Array.from(container.querySelectorAll('button'))
        .find(button =>
            button.textContent.trim() === 'تکمیل این درس'
        );

    if (completeButton) {
        completeButton.addEventListener('click', function () {
            KING_ASAD.refreshProgressDashboard();
        });
    }

    const quizButton = document.createElement('button');

    quizButton.type = 'button';
    quizButton.textContent = 'شروع آزمون این درس';

    quizButton.addEventListener('click', function () {

        KING_ASAD.openLessonQuiz(
            lesson.level,
            lesson.lessonNumber
        );

        document.querySelector('#quizContainer')
            ?.scrollIntoView({ behavior: 'smooth' });
    });

    container.appendChild(quizButton);

    return true;
};

// تازه‌سازی پس از ثبت آزمون
KING_ASAD.saveQuizResultOriginal =
    KING_ASAD.saveLessonQuizResult;

KING_ASAD.saveLessonQuizResult = function (result) {

    const saved =
        KING_ASAD.saveQuizResultOriginal(result);

    KING_ASAD.renderQuizHistory('#quizHistory');
    KING_ASAD.refreshProgressDashboard();

    return saved;
};

// اتصال دکمه‌های سطوح
KING_ASAD.bindLevelButtons = function () {

    document.querySelectorAll('[data-level]').forEach(button => {

        if (button.dataset.kingLevelBound === 'true') return;

        button.dataset.kingLevelBound = 'true';

        button.addEventListener('click', function () {

            const level = this.dataset.level;

            const success = KING_ASAD.renderLessonCards(
                level,
                '#lessonCards'
            );

            if (success) {
                document.querySelector('#lessonCards')
                    ?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};

// راه‌اندازی
KING_ASAD.initialize = function () {

    console.log('KING ASAD شروع شد.');

    KING_ASAD.bindLevelButtons();
    KING_ASAD.bindVideoButtons();

    KING_ASAD.refreshProgressDashboard();
    KING_ASAD.renderQuizHistory('#quizHistory');

    console.log('مجموع درس‌ها:', KING_ASAD.getTotalLessons());

    return true;
};

// اجرای خودکار
if (document.readyState === 'loading') {

    document.addEventListener(
        'DOMContentLoaded',
        KING_ASAD.initialize
    );

} else {

    KING_ASAD.initialize();
}
