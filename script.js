
/* =========================================
   KING ASAD - سیستم اصلی آموزشگاه
   بخش اول از ۴
   پنج سطح زبان آلمانی: A1 تا C1
   مجموع درس‌ها: ۱۲۹
========================================= */

// سطوح آموزشی
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

// تعداد درس‌های هر سطح
const LESSON_COUNTS = {
    A1: 19,
    A2: 20,
    B1: 30,
    B2: 30,
    C1: 30
};

// ویدیوهای آموزشی هر سطح
const levelVideos = {
    A1: {
        id: '4-eDoThe6qo',
        title: 'Nicos Weg A1',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    A2: {
        id: 'Lg5P2w_Ro1c',
        title: 'Deutsch A2',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    B1: {
        id: 'LkufozluseI',
        title: 'Deutsch B1',
        link: 'https://learngerman.dw.com/en/nicos-weg/c-36519789'
    },
    B2: {
        id: '',
        title: 'Deutsch B2',
        link: 'https://www.goethe.de/de/spr/ueb.html'
    },
    C1: {
        id: '',
        title: 'Deutsch C1',
        link: 'https://www.goethe.de/de/spr/ueb.html'
    }
};

// عنوان درس‌های سطح A1
const lessonTitles = {
    A1: [
        'سلام و معرفی خود',
        'الفبا و تلفظ آلمانی',
        'اعداد و شماره تلفن',
        'کشورها و زبان‌ها',
        'خانواده و دوستان',
        'روزها و ماه‌ها',
        'ساعت و زمان',
        'زندگی روزمره',
        'غذا و نوشیدنی',
        'خرید و قیمت‌ها',
        'خانه و وسایل خانه',
        'شغل و حرفه',
        'آب‌وهوا و فصل‌ها',
        'لباس و رنگ‌ها',
        'شهر و مسیرها',
        'حمل‌ونقل',
        'قرار ملاقات',
        'سلامتی و بدن',
        'مرور و آمادگی آزمون A1'
    ],

    // عنوان درس‌های سطح A2
    A2: [
        'گذشته و خاطرات',
        'سفر و تعطیلات',
        'هتل و رزرو اتاق',
        'رستوران و سفارش غذا',
        'پزشک و بیماری‌ها',
        'داروخانه و داروها',
        'آپارتمان و اجاره خانه',
        'زندگی کاری',
        'درخواست کار',
        'تحصیل و آموزش',
        'رسانه و اینترنت',
        'تلفن و ارتباطات',
        'محیط‌زیست',
        'ورزش و اوقات فراغت',
        'مهمانی و جشن',
        'خرید و شکایت',
        'بانک و پول',
        'حوادث و اتفاقات',
        'برنامه‌ریزی آینده',
        'مرور و آمادگی آزمون A2'
    ],

    // عنوان درس‌های سطح B1
    B1: [
        'معرفی پیشرفته و زندگی شخصی',
        'تجربه‌های زندگی',
        'تحصیل و دانشگاه',
        'بازار کار و شغل',
        'مصاحبه کاری',
        'سفرهای بین‌المللی',
        'فرهنگ و سنت‌ها',
        'روابط اجتماعی',
        'رسانه و اخبار',
        'تکنولوژی و دیجیتال',
        'محیط‌زیست و حفاظت از طبیعت',
        'سلامتی و سبک زندگی',
        'ورزش و تناسب اندام',
        'مسکن و زندگی شهری',
        'حقوق و مسئولیت‌ها',
        'آموزش و یادگیری زبان',
        'مشکلات و راه‌حل‌ها',
        'نظرات و بحث‌ها',
        'برنامه‌ریزی و اهداف',
        'خدمات عمومی',
        'جامعه و خانواده',
        'اقتصاد و مصرف',
        'فرهنگ کاری',
        'ارتباطات رسمی',
        'داستان‌گویی و خاطرات',
        'شرایط و فرضیات',
        'تصمیم‌گیری و استدلال',
        'نامه و ایمیل رسمی',
        'مرور گرامر و واژگان',
        'آمادگی آزمون B1'
    ],

    // عنوان درس‌های سطح B2
    B2: [
        'ارتباطات پیچیده',
        'بحث و استدلال پیشرفته',
        'جامعه مدرن',
        'جهانی‌شدن',
        'اقتصاد و تجارت',
        'سیاست و جامعه',
        'فرهنگ و هنر',
        'علم و پژوهش',
        'فناوری‌های نوین',
        'هوش مصنوعی و آینده',
        'رسانه‌های اجتماعی',
        'محیط‌زیست و تغییرات اقلیمی',
        'آموزش عالی',
        'بازار کار پیشرفته',
        'مدیریت و رهبری',
        'روان‌شناسی و رفتار انسان',
        'سلامت عمومی',
        'حقوق و عدالت',
        'مهاجرت و ادغام اجتماعی',
        'تاریخ و تحولات اجتماعی',
        'ادبیات و نقد متن',
        'گزارش‌نویسی',
        'ارائه و سخنرانی',
        'مذاکره و حل اختلاف',
        'ساختارهای پیچیده گرامری',
        'عبارات و اصطلاحات پیشرفته',
        'درک متون تخصصی',
        'نوشتن مقاله',
        'تحلیل و تفسیر',
        'آمادگی آزمون B2'
    ],

    // عنوان درس‌های سطح C1
    C1: [
        'زبان آکادمیک',
        'تحلیل متون علمی',
        'نوشتن پژوهشی',
        'استدلال انتقادی',
        'فلسفه و تفکر انتزاعی',
        'جامعه‌شناسی پیشرفته',
        'اقتصاد کلان',
        'حقوق و نظام قضایی',
        'سیاست بین‌الملل',
        'روابط دیپلماتیک',
        'تحولات تاریخی',
        'فرهنگ و هویت',
        'ادبیات کلاسیک',
        'نقد ادبی',
        'هنر و زیبایی‌شناسی',
        'رسانه و گفتمان عمومی',
        'ارتباطات تخصصی',
        'زبان‌شناسی',
        'روان‌شناسی اجتماعی',
        'پژوهش و روش‌شناسی',
        'فناوری و اخلاق',
        'هوش مصنوعی و جامعه',
        'تغییرات اقلیمی',
        'جهانی‌شدن و توسعه',
        'مدیریت بحران',
        'مذاکره تخصصی',
        'ارائه علمی',
        'نگارش آکادمیک پیشرفته',
        'تحلیل و تفسیر پیشرفته',
        'آمادگی آزمون C1'
    ]
};

// بررسی تعداد درس‌های هر سطح
LEVELS.forEach(level => {
    if (
        !lessonTitles[level] ||
        lessonTitles[level].length !== LESSON_COUNTS[level]
    ) {
        console.error('تعداد درس‌ها اشتباه است:', level);
    }
});

console.log('بخش اول KING ASAD آماده شد.');

    {
        words: [['die Bewerbung','درخواست کار'],['der Lebenslauf','زندگی‌نامه کاری'],['die Erfahrung','تجربه'],['die Stelle','موقعیت شغلی'],['sich bewerben','درخواست دادن']],
        dialog: [['Haben Sie Berufserfahrung?','آیا تجربه کاری دارید؟'],['Ja, ich habe drei Jahre Erfahrung.','بلی، سه سال تجربه دارم.'],['Wann können Sie anfangen?','چه وقت می‌توانید شروع کنید؟']],
        grammar: 'فعل بازتابی sich bewerben: Ich bewerbe mich um eine Stelle.'
    },
    {
        words: [['die Schule','مکتب'],['die Universität','دانشگاه'],['der Unterricht','درس'],['die Prüfung','امتحان'],['bestehen','قبول شدن']],
        dialog: [['Was studierst du?','چه رشته‌ای می‌خوانی؟'],['Ich studiere Informatik.','کمپیوتر ساینس می‌خوانم.'],['Wann ist deine Prüfung?','امتحانت چه وقت است؟']],
        grammar: 'فعل‌های مدال können، müssen و dürfen برای توانایی، ضرورت و اجازه استفاده می‌شوند.'
    },
    {
        words: [['das Internet','اینترنت'],['die Nachricht','پیام'],['die Webseite','صفحه اینترنتی'],['herunterladen','دانلود کردن'],['die Datei','فایل']],
        dialog: [['Hast du meine Nachricht bekommen?','پیامم را دریافت کردی؟'],['Ja, ich habe sie gelesen.','بلی، آن را خواندم.'],['Ich schicke dir die Datei.','فایل را برایت می‌فرستم.']],
        grammar: 'ضمیرهای Akkusativ مانند mich، dich، ihn، sie و es.'
    },
    {
        words: [['das Handy','موبایل'],['anrufen','تماس گرفتن'],['die Verbindung','ارتباط'],['die Nachricht','پیام'],['erreichbar','قابل دسترس']],
        dialog: [['Kann ich dich anrufen?','می‌توانم به تو زنگ بزنم؟'],['Ja, ich bin erreichbar.','بلی، در دسترس هستم.'],['Bis später!','بعداً می‌بینمت!']],
        grammar: 'افعال جداشدنی مانند anrufen: Ich rufe dich an.'
    },
    {
        words: [['die Umwelt','محیط‌زیست'],['die Natur','طبیعت'],['der Müll','زباله'],['recyceln','بازیافت کردن'],['schützen','محافظت کردن']],
        dialog: [['Was machst du für die Umwelt?','برای محیط‌زیست چه می‌کنی؟'],['Ich trenne den Müll.','زباله‌ها را جدا می‌کنم.'],['Das ist sehr wichtig.','این بسیار مهم است.']],
        grammar: 'جمله‌های امری برای پیشنهاد و دستور: Trenne den Müll!'
    },
    {
        words: [['der Sport','ورزش'],['schwimmen','شنا کردن'],['wandern','پیاده‌روی در طبیعت'],['das Hobby','سرگرمی'],['die Freizeit','اوقات فراغت']],
        dialog: [['Was machst du in deiner Freizeit?','در اوقات فراغت چه می‌کنی؟'],['Ich gehe gern schwimmen.','من با علاقه شنا می‌کنم.'],['Wie oft trainierst du?','چند بار تمرین می‌کنی؟']],
        grammar: 'قیدهای تکرار مانند immer، oft، manchmal و selten.'
    },
    {
        words: [['die Einladung','دعوت'],['die Feier','جشن'],['das Geschenk','هدیه'],['mitbringen','با خود آوردن'],['gratulieren','تبریک گفتن']],
        dialog: [['Kommst du zu meiner Party?','به مهمانی من می‌آیی؟'],['Ja, sehr gern!','بلی، با کمال میل!'],['Was soll ich mitbringen?','چه چیزی با خود بیاورم؟']],
        grammar: 'حروف اضافه زمانی um، am و im: um acht Uhr، am Montag، im Sommer.'
    },
    {
        words: [['umtauschen','تعویض کردن'],['zurückgeben','پس دادن'],['kaputt','خراب'],['die Quittung','رسید'],['die Beschwerde','شکایت']],
        dialog: [['Ich möchte das umtauschen.','می‌خواهم این را تعویض کنم.'],['Haben Sie die Quittung?','رسید را دارید؟'],['Ja, bitte schön.','بلی، بفرمایید.']],
        grammar: 'جمله‌های مؤدبانه با würde و könnte: Könnten Sie mir helfen?'
    },
    {
        words: [['das Konto','حساب بانکی'],['die Überweisung','انتقال پول'],['das Bargeld','پول نقد'],['die Karte','کارت'],['abheben','برداشت کردن']],
        dialog: [['Kann ich hier Geld abheben?','آیا می‌توانم اینجا پول برداشت کنم؟'],['Ja, am Geldautomaten.','بلی، از دستگاه خودپرداز.'],['Vielen Dank!','بسیار تشکر!']],
        grammar: 'حروف اضافه mit و bei و کاربرد آن‌ها در Dativ.'
    },
    {
        words: [['der Unfall','حادثه'],['passieren','اتفاق افتادن'],['plötzlich','ناگهان'],['verletzen','زخمی کردن'],['die Polizei','پولیس']],
        dialog: [['Was ist passiert?','چه اتفاقی افتاده است؟'],['Es gab einen Unfall.','یک حادثه رخ داد.'],['Hast du die Polizei gerufen?','به پولیس زنگ زدی؟']],
        grammar: 'زمان گذشته Präteritum برای افعال مهم مانند sein و haben: war و hatte.'
    },
    {
        words: [['die Zukunft','آینده'],['der Plan','برنامه'],['hoffen','امید داشتن'],['vorhaben','قصد داشتن'],['wahrscheinlich','احتمالاً']],
        dialog: [['Was hast du vor?','چه برنامه‌ای داری؟'],['Ich möchte Deutsch lernen.','می‌خواهم آلمانی یاد بگیرم.'],['Was möchtest du später machen?','بعداً چه می‌خواهی انجام بدهی؟']],
        grammar: 'زمان آینده Futur I: werden + Infinitiv.'
    },
    {
        words: [['die Wiederholung','مرور'],['die Grammatik','گرامر'],['der Wortschatz','واژگان'],['die Vorbereitung','آمادگی'],['das Ergebnis','نتیجه']],
        dialog: [['Bist du bereit für die Prüfung?','برای امتحان آماده هستی؟'],['Ja, ich habe viel gelernt.','بلی، بسیار درس خوانده‌ام.'],['Ich wünsche dir viel Erfolg!','برای تو موفقیت آرزو می‌کنم!']],
        grammar: 'مرور Perfekt، Präteritum، Futur I، Dativ، Akkusativ و افعال مدال.'
    }
];

console.log('محتوای درس‌های A2 تکمیل شد.');

/* =========================================
   KING ASAD
   بخش سوم از ۴ - قسمت اول
   محتوای اختصاصی سطح B1
========================================= */

const b1LessonDetails = [
    {
        words: [['die Persönlichkeit','شخصیت'],['selbstständig','مستقل'],['zuverlässig','قابل اعتماد'],['die Eigenschaft','ویژگی'],['sich vorstellen','خود را معرفی کردن']],
        dialog: [['Wie würden Sie sich beschreiben?','خودتان را چگونه توصیف می‌کنید؟'],['Ich bin zuverlässig und freundlich.','من قابل اعتماد و مهربان هستم.'],['Was ist Ihre größte Stärke?','بزرگ‌ترین نقطه قوت شما چیست؟']],
        grammar: 'Konjunktiv II برای بیان مؤدبانه و فرضی: Ich würde sagen ...'
    },
    {
        words: [['die Erfahrung','تجربه'],['die Erinnerung','خاطره'],['damals','آن زمان'],['erleben','تجربه کردن'],['sich erinnern','به یاد آوردن']],
        dialog: [['Was war dein schönstes Erlebnis?','بهترین تجربه‌ات چه بود؟'],['Ich erinnere mich an meine erste Reise.','سفر اولم را به یاد می‌آورم.'],['Das klingt interessant.','جالب به نظر می‌رسد.']],
        grammar: 'افعال انعکاسی با حروف اضافه: sich erinnern an + Akkusativ.'
    },
    {
        words: [['die Ausbildung','آموزش حرفه‌ای'],['das Studium','تحصیلات دانشگاهی'],['die Vorlesung','درس دانشگاه'],['der Abschluss','مدرک تحصیلی'],['sich anmelden','ثبت‌نام کردن']],
        dialog: [['Was möchtest du studieren?','چه رشته‌ای می‌خواهی بخوانی؟'],['Ich interessiere mich für Informatik.','به کمپیوتر ساینس علاقه دارم.'],['Wo möchtest du studieren?','کجا می‌خواهی تحصیل کنی؟']],
        grammar: 'افعال با حروف اضافه: sich interessieren für + Akkusativ.'
    },
    {
        words: [['die Arbeitsstelle','موقعیت کاری'],['die Bewerbung','درخواست کار'],['die Fähigkeit','توانایی'],['die Verantwortung','مسئولیت'],['die Karriere','پیشرفت شغلی']],
        dialog: [['Welche Stelle suchen Sie?','دنبال چه موقعیت کاری هستید؟'],['Ich suche eine Vollzeitstelle.','دنبال کار تمام‌وقت هستم.'],['Welche Erfahrungen haben Sie?','چه تجربه‌هایی دارید؟']],
        grammar: 'جمله‌های موصولی با der، die و das برای توضیح اسم.'
    },
    {
        words: [['das Vorstellungsgespräch','مصاحبه کاری'],['die Gehaltsvorstellung','حقوق مورد انتظار'],['die Qualifikation','صلاحیت'],['pünktlich','وقت‌شناس'],['überzeugen','قانع کردن']],
        dialog: [['Warum möchten Sie bei uns arbeiten?','چرا می‌خواهید نزد ما کار کنید؟'],['Weil ich mich weiterentwickeln möchte.','چون می‌خواهم پیشرفت کنم.'],['Wann könnten Sie anfangen?','چه وقت می‌توانید شروع کنید؟']],
        grammar: 'جمله‌های وابسته با weil؛ فعل صرف‌شده در پایان جمله قرار می‌گیرد.'
    },
    {
        words: [['die Unterkunft','محل اقامت'],['die Sehenswürdigkeit','مکان دیدنی'],['die Verspätung','تأخیر'],['die Buchung','رزرو'],['die Rundreise','سفر گردشی']],
        dialog: [['Wie war deine Reise?','سفرت چگونه بود؟'],['Sehr schön, aber der Zug hatte Verspätung.','بسیار خوب بود، اما قطار تأخیر داشت.'],['Was hast du besichtigt?','از چه جاهایی دیدن کردی؟']],
        grammar: 'جمله‌های زمانی با als و wenn برای بیان رویدادهای گذشته و تکراری.'
    },
    {
        words: [['die Tradition','سنت'],['der Brauch','رسم'],['die Veranstaltung','برنامه'],['die Herkunft','ریشه و خاستگاه'],['feiern','جشن گرفتن']],
        dialog: [['Welche Traditionen gibt es bei euch?','در میان شما چه سنت‌هایی وجود دارد؟'],['Wir feiern das Neujahrsfest.','ما جشن سال نو را برگزار می‌کنیم.'],['Das finde ich interessant.','این را جالب می‌دانم.']],
        grammar: 'حالت مجهول Präsens Passiv: Das Fest wird gefeiert.'
    },
    {
        words: [['die Freundschaft','دوستی'],['das Vertrauen','اعتماد'],['das Missverständnis','سوءتفاهم'],['sich entschuldigen','عذرخواهی کردن'],['unterstützen','حمایت کردن']],
        dialog: [['Warum bist du traurig?','چرا ناراحت هستی؟'],['Wir hatten ein Missverständnis.','ما دچار سوءتفاهم شدیم.'],['Hast du dich schon entschuldigt?','آیا عذرخواهی کرده‌ای؟']],
        grammar: 'حروف اضافه wegen و trotz برای بیان دلیل و تضاد.'
    },
    {
        words: [['die Schlagzeile','عنوان خبر'],['der Bericht','گزارش'],['die Quelle','منبع'],['veröffentlichen','منتشر کردن'],['behaupten','ادعا کردن']],
        dialog: [['Hast du die Nachrichten gelesen?','خبرها را خوانده‌ای؟'],['Ja, ich habe einen Bericht gelesen.','بلی، یک گزارش خوانده‌ام.'],['War die Quelle zuverlässig?','آیا منبع قابل اعتماد بود؟']],
        grammar: 'گزارش غیرمستقیم ساده با dass: Er sagt, dass ...'
    },
    {
        words: [['die Anwendung','برنامه کاربردی'],['die Daten','اطلاعات'],['das Passwort','رمز عبور'],['herunterladen','دانلود کردن'],['speichern','ذخیره کردن']],
        dialog: [['Funktioniert die Anwendung?','آیا برنامه کار می‌کند؟'],['Nein, ich kann mich nicht anmelden.','خیر، نمی‌توانم وارد شوم.'],['Hast du dein Passwort vergessen?','رمز عبورت را فراموش کرده‌ای؟']],
        grammar: 'افعال جداشدنی و جدا‌نشدنی: herunterladen، speichern، verstehen.'
    },
    {
        words: [['der Klimawandel','تغییرات اقلیمی'],['die Verschmutzung','آلودگی'],['die Energie','انرژی'],['nachhaltig','پایدار'],['vermeiden','جلوگیری کردن']],
        dialog: [['Was können wir gegen den Klimawandel tun?','در برابر تغییرات اقلیمی چه کرده می‌توانیم؟'],['Wir sollten Energie sparen.','باید در مصرف انرژی صرفه‌جویی کنیم.'],['Das ist eine gute Idee.','این فکر خوبی است.']],
        grammar: 'افعال مدال sollen و müssen برای توصیه و ضرورت.'
    },
    {
        words: [['die Ernährung','تغذیه'],['die Bewegung','تحرک'],['die Gewohnheit','عادت'],['ausgewogen','متعادل'],['verzichten','صرف‌نظر کردن']],
        dialog: [['Wie bleibst du gesund?','چگونه صحتمند می‌مانی؟'],['Ich esse ausgewogen und mache Sport.','متعادل غذا می‌خورم و ورزش می‌کنم.'],['Das ist sehr vernünftig.','این بسیار عاقلانه است.']],
        grammar: 'مصدر با zu: Es ist wichtig, regelmäßig Sport zu treiben.'
    },
    {
        words: [['die Mannschaft','تیم'],['der Wettbewerb','رقابت'],['die Ausdauer','استقامت'],['sich verbessern','بهتر شدن'],['teilnehmen','شرکت کردن']],
        dialog: [['Nimmst du am Wettbewerb teil?','در مسابقه شرکت می‌کنی؟'],['Ja, ich trainiere jeden Tag.','بلی، هر روز تمرین می‌کنم.'],['Viel Erfolg!','موفق باشی!']],
        grammar: 'teilnehmen an + Dativ: Ich nehme an einem Wettbewerb teil.'
    },
    {
        words: [['die Wohngegend','منطقه مسکونی'],['die Nachbarschaft','همسایگی'],['die Verkehrsanbindung','دسترسی حمل‌ونقل'],['die Miete','کرایه'],['umziehen','نقل مکان کردن']],
        dialog: [['Wie findest du deine Wohngegend?','منطقه محل زندگی‌ات را چگونه می‌بینی؟'],['Sie ist ruhig und gut angebunden.','آرام است و دسترسی خوبی دارد.'],['Möchtest du umziehen?','می‌خواهی نقل مکان کنی؟']],
        grammar: 'حروف اضافه مکانی با Dativ و Akkusativ: in der Stadt، in die Stadt.'
    },
    {
        words: [['das Gesetz','قانون'],['die Pflicht','وظیفه'],['das Recht','حق'],['die Vorschrift','مقررات'],['verpflichtet sein','مکلف بودن']],
        dialog: [['Welche Rechte haben Mieter?','مستأجران چه حقوقی دارند؟'],['Sie haben bestimmte Rechte.','آن‌ها حقوق مشخصی دارند.'],['Wo kann man sich informieren?','از کجا می‌توان معلومات گرفت؟']],
        grammar: 'اسم‌سازی از فعل و صفت: entscheiden → die Entscheidung.'
    },
    {
        words: [['die Weiterbildung','آموزش تکمیلی'],['die Fähigkeit','مهارت'],['die Fremdsprache','زبان خارجی'],['sich bemühen','تلاش کردن'],['der Fortschritt','پیشرفت']],
        dialog: [['Wie lernst du Deutsch?','چگونه آلمانی یاد می‌گیری؟'],['Ich besuche einen Sprachkurs.','در یک کورس زبان شرکت می‌کنم.'],['Wie oft übst du?','چند بار تمرین می‌کنی؟']],
        grammar: 'حروف اضافه با فعل‌ها: sich bemühen um + Akkusativ.'
    },
    {
        words: [['die Schwierigkeit','مشکل'],['die Lösung','راه‌حل'],['der Vorschlag','پیشنهاد'],['bewältigen','از عهده برآمدن'],['vergleichen','مقایسه کردن']],
        dialog: [['Was ist das Problem?','مشکل چیست؟'],['Wir haben zu wenig Zeit.','وقت بسیار کم داریم.'],['Wir müssen eine Lösung finden.','باید یک راه‌حل پیدا کنیم.']],
        grammar: 'جملات شرطی با wenn: Wenn wir planen, haben wir mehr Zeit.'
    },
    {
        words: [['die Diskussion','بحث'],['die Meinung','نظر'],['das Argument','استدلال'],['zustimmen','موافق بودن'],['widersprechen','مخالفت کردن']],
        dialog: [['Was hältst du davon?','نظر تو درباره آن چیست؟'],['Ich bin anderer Meinung.','من نظر دیگری دارم.'],['Warum denkst du so?','چرا چنین فکر می‌کنی؟']],
        grammar: 'بیان نظر: Ich bin der Meinung, dass ...'
    },
    {
        words: [['das Ziel','هدف'],['die Entscheidung','تصمیم'],['die Möglichkeit','امکان'],['erreichen','دست یافتن'],['planen','برنامه‌ریزی کردن']],
        dialog: [['Was ist dein nächstes Ziel?','هدف بعدی تو چیست؟'],['Ich möchte eine Ausbildung machen.','می‌خواهم آموزش حرفه‌ای ببینم.'],['Wie willst du das erreichen?','چگونه به آن دست می‌یابی؟']],
        grammar: 'um ... zu برای بیان هدف: Ich lerne, um die Prüfung zu bestehen.'
    },
    {
        words: [['das Formular','فورم'],['die Behörde','اداره دولتی'],['der Antrag','درخواست رسمی'],['die Bescheinigung','تصدیق‌نامه'],['ausfüllen','خانه‌پری کردن']],
        dialog: [['Wo muss ich den Antrag abgeben?','درخواست را کجا باید تحویل بدهم؟'],['Bei der zuständigen Behörde.','در اداره مربوطه.'],['Welche Unterlagen brauche ich?','به کدام اسناد نیاز دارم؟']],
        grammar: 'حالت مجهول با müssen: Der Antrag muss ausgefüllt werden.'
    },
    {
        words: [['die Generation','نسل'],['die Erziehung','تربیت'],['die Beziehung','رابطه'],['die Verantwortung','مسئولیت'],['sich kümmern','رسیدگی کردن']],
        dialog: [['Wer kümmert sich um die Kinder?','چه کسی از کودکان مراقبت می‌کند؟'],['Beide Eltern kümmern sich darum.','هر دو والدین از آن‌ها مراقبت می‌کنند.'],['Das ist wichtig.','این مهم است.']],
        grammar: 'sich kümmern um + Akkusativ.'
    },
    {
        words: [['der Verbraucher','مصرف‌کننده'],['der Preis','قیمت'],['die Nachfrage','تقاضا'],['die Ausgabe','مصرف'],['sparen','پس‌انداز کردن']],
        dialog: [['Wie kann man Geld sparen?','چگونه می‌توان پول پس‌انداز کرد؟'],['Man sollte Preise vergleichen.','باید قیمت‌ها را مقایسه کرد.'],['Das stimmt.','درست است.']],
        grammar: 'جملات با man برای بیان موضوعات عمومی.'
    },
    {
        words: [['das Betriebsklima','فضای کاری'],['die Besprechung','جلسه'],['die Zusammenarbeit','همکاری'],['die Führungskraft','مدیر'],['organisieren','سازمان‌دهی کردن']],
        dialog: [['Wie ist das Betriebsklima?','فضای کاری چگونه است؟'],['Sehr angenehm.','بسیار دلپذیر است.'],['Arbeitet ihr im Team?','آیا گروهی کار می‌کنید؟']],
        grammar: 'جملات موصولی در حالت Dativ: Der Kollege, mit dem ich arbeite ...'
    },
    {
        words: [['die Anfrage','درخواست معلومات'],['die Rückmeldung','پاسخ'],['die Mitteilung','اطلاعیه'],['höflich','مؤدبانه'],['bestätigen','تأیید کردن']],
        dialog: [['Haben Sie meine E-Mail erhalten?','آیا ایمیل مرا دریافت کرده‌اید؟'],['Ja, vielen Dank.','بلی، بسیار تشکر.'],['Ich werde Ihnen morgen antworten.','فردا به شما پاسخ خواهم داد.']],
        grammar: 'ساختار رسمی ایمیل و استفاده از Sie و Ihnen.'
    },
    {
        words: [['die Kindheit','دوران کودکی'],['die Jugend','جوانی'],['früher','در گذشته'],['inzwischen','در این میان'],['sich erinnern','به یاد آوردن']],
        dialog: [['Wie war deine Kindheit?','دوران کودکی‌ات چگونه بود؟'],['Ich habe viel draußen gespielt.','زیاد در بیرون بازی می‌کردم.'],['Was hat sich verändert?','چه چیزی تغییر کرده است؟']],
        grammar: 'گذشته Präteritum برای روایت: Früher wohnte ich auf dem Land.'
    },
    {
        words: [['die Voraussetzung','پیش‌شرط'],['die Bedingung','شرط'],['die Folge','نتیجه'],['verursachen','سبب شدن'],['abhängen','وابسته بودن']],
        dialog: [['Was passiert, wenn es regnet?','اگر باران ببارد چه می‌شود؟'],['Dann bleiben wir zu Hause.','پس در خانه می‌مانیم.'],['Das hängt vom Wetter ab.','این به آب‌وهوا بستگی دارد.']],
        grammar: 'جملات شرطی با wenn و falls.'
    },
    {
        words: [['die Auswahl','انتخاب'],['der Vorteil','مزیت'],['der Nachteil','عیب'],['abwägen','سبک‌سنگین کردن'],['entscheiden','تصمیم گرفتن']],
        dialog: [['Welche Möglichkeit ist besser?','کدام امکان بهتر است؟'],['Wir sollten die Vorteile vergleichen.','باید مزایا را مقایسه کنیم.'],['Ich bin dafür.','من موافق آن هستم.']],
        grammar: 'پیوندهای دوتایی: entweder ... oder، nicht nur ... sondern auch.'
    },
    {
        words: [['der Geschäftsbrief','نامه تجاری'],['die Anrede','خطاب آغاز نامه'],['der Betreff','موضوع نامه'],['die Anlage','ضمیمه'],['mitteilen','اطلاع دادن']],
        dialog: [['Wie beginnt man einen formellen Brief?','نامه رسمی را چگونه آغاز می‌کنند؟'],['Sehr geehrte Damen und Herren.','خانم‌ها و آقایان محترم.'],['Wie beendet man ihn?','چگونه آن را پایان می‌دهند؟']],
        grammar: 'ساختار نامه رسمی: Anrede، Einleitung، Hauptteil و Grußformel.'
    },
    {
        words: [['die Wiederholung','مرور'],['die Sprachkompetenz','توانایی زبانی'],['die Prüfungsvorbereitung','آمادگی امتحان'],['die Bewertung','ارزیابی'],['die Verbesserung','بهبود']],
        dialog: [['Wie bereitest du dich vor?','چگونه آماده می‌شوی؟'],['Ich wiederhole Grammatik und Wortschatz.','گرامر و واژگان را مرور می‌کنم.'],['Viel Erfolg bei der Prüfung!','در امتحان موفق باشی!']],
        grammar: 'مرور زمان‌ها، جملات موصولی، مجهول، شرطی، حروف اضافه و افعال با حرف اضافه.'
    },
    {
        words: [['die Prüfung','امتحان'],['die Aufgabe','وظیفه'],['die Schreibfertigkeit','مهارت نوشتن'],['das Hörverstehen','درک شنیداری'],['das Leseverstehen','درک مطلب']],
        dialog: [['Wann findet die B1-Prüfung statt?','امتحان B1 چه وقت برگزار می‌شود؟'],['Nächsten Monat.','ماه آینده.'],['Bist du gut vorbereitet?','خوب آماده شده‌ای؟']],
        grammar: 'تمرین چهار مهارت اصلی B1: خواندن، شنیدن، نوشتن و صحبت کردن.'
    }
];

console.log('۳۰ درس سطح B1 آماده شد.');

/* =========================================
   KING ASAD
   بخش سوم از ۴ - قسمت دوم
   محتوای اختصاصی سطح B2
========================================= */

const b2LessonDetails = [
    {
        words: [['die Kommunikation','ارتباطات'],['die Ausdrucksweise','شیوه بیان'],['missverständlich','دارای سوءتفاهم'],['präzise','دقیق'],['verdeutlichen','روشن ساختن']],
        dialog: [['Wie kann man Missverständnisse vermeiden?','چگونه می‌توان از سوءتفاهم جلوگیری کرد؟'],['Indem man sich präzise ausdrückt.','با این‌که دقیق بیان کند.'],['Das sehe ich genauso.','من هم همین نظر را دارم.']],
        grammar: 'ساختارهای پیشرفته جمله با indem و dadurch, dass.'
    },
    {
        words: [['die Argumentation','استدلال'],['der Standpunkt','دیدگاه'],['die Gegenposition','دیدگاه مخالف'],['nachvollziehbar','قابل درک'],['widerlegen','رد کردن']],
        dialog: [['Wie beurteilen Sie dieses Argument?','این استدلال را چگونه ارزیابی می‌کنید؟'],['Es ist nachvollziehbar, aber nicht überzeugend.','قابل درک است، اما قانع‌کننده نیست.'],['Welche Gegenargumente gibt es?','چه استدلال‌های مخالفی وجود دارد؟']],
        grammar: 'پیوندهای استدلالی: zwar ... aber، einerseits ... andererseits.'
    },
    {
        words: [['die Gesellschaft','جامعه'],['die Entwicklung','تحول'],['die Ungleichheit','نابرابری'],['die Integration','ادغام'],['gesellschaftlich','اجتماعی']],
        dialog: [['Welche Herausforderungen hat die Gesellschaft?','جامعه با چه چالش‌هایی روبه‌رو است؟'],['Die soziale Ungleichheit ist ein großes Problem.','نابرابری اجتماعی یک مشکل بزرگ است.'],['Wie könnte man sie verringern?','چگونه می‌توان آن را کاهش داد؟']],
        grammar: 'جملات موصولی پیشرفته و کاربرد deren و dessen.'
    },
    {
        words: [['die Globalisierung','جهانی‌شدن'],['der Handel','تجارت'],['die Vernetzung','شبکه‌سازی'],['die Auswirkung','تأثیر'],['grenzüberschreitend','فرامرزی']],
        dialog: [['Welche Folgen hat die Globalisierung?','جهانی‌شدن چه پیامدهایی دارد؟'],['Sie schafft neue Chancen und Risiken.','فرصت‌ها و خطرهای تازه ایجاد می‌کند.'],['Das stimmt teilweise.','این تا اندازه‌ای درست است.']],
        grammar: 'ساختارهای علت و نتیجه با infolgedessen، sodass و weshalb.'
    },
    {
        words: [['das Unternehmen','شرکت'],['der Wettbewerb','رقابت'],['die Investition','سرمایه‌گذاری'],['der Umsatz','گردش مالی'],['wirtschaftlich','اقتصادی']],
        dialog: [['Wie entwickelt sich das Unternehmen?','شرکت چگونه پیشرفت می‌کند؟'],['Der Umsatz ist deutlich gestiegen.','گردش مالی به‌طور قابل توجه افزایش یافته است.'],['Welche Investitionen sind geplant?','چه سرمایه‌گذاری‌هایی برنامه‌ریزی شده است؟']],
        grammar: 'مجهول در زمان‌های مختلف: wird gemacht، wurde gemacht، ist gemacht worden.'
    },
    {
        words: [['die Demokratie','دموکراسی'],['die Regierung','حکومت'],['die Gesetzgebung','قانون‌گذاری'],['die Abstimmung','رأی‌گیری'],['politisch','سیاسی']],
        dialog: [['Welche Rolle spielt die Demokratie?','دموکراسی چه نقشی دارد؟'],['Sie ermöglicht politische Mitbestimmung.','امکان مشارکت سیاسی را فراهم می‌کند.'],['Wie können Bürger Einfluss nehmen?','شهروندان چگونه می‌توانند تأثیر بگذارند؟']],
        grammar: 'مصدر با zu و ساختارهای اسمی برای بیان رسمی.'
    },
    {
        words: [['die Kunstausstellung','نمایشگاه هنری'],['die Interpretation','تفسیر'],['das Kunstwerk','اثر هنری'],['die Epoche','دوره تاریخی'],['beeindruckend','تأثیرگذار']],
        dialog: [['Wie hat Ihnen die Ausstellung gefallen?','نمایشگاه را چگونه یافتید؟'],['Die Werke waren beeindruckend.','آثار تأثیرگذار بودند.'],['Welches Kunstwerk bevorzugen Sie?','کدام اثر هنری را ترجیح می‌دهید؟']],
        grammar: 'صفت‌های صرف‌شده در حالت‌های Nominativ، Akkusativ و Dativ.'
    },
    {
        words: [['die Forschung','پژوهش'],['die Erkenntnis','یافته'],['die Untersuchung','بررسی'],['die Hypothese','فرضیه'],['nachweisen','اثبات کردن']],
        dialog: [['Was zeigt die Untersuchung?','بررسی چه چیزی را نشان می‌دهد؟'],['Sie bestätigt die ursprüngliche Hypothese.','فرضیه اولیه را تأیید می‌کند.'],['Wie wurde das nachgewiesen?','این چگونه اثبات شد؟']],
        grammar: 'جملات غیرشخصی با es و man در متون علمی.'
    },
    {
        words: [['die Innovation','نوآوری'],['die Digitalisierung','دیجیتالی‌سازی'],['die Anwendung','کاربرد'],['die Entwicklung','توسعه'],['zukunftsorientiert','آینده‌نگر']],
        dialog: [['Welche Innovation ist besonders wichtig?','کدام نوآوری به‌خصوص مهم است؟'],['Die Digitalisierung verändert viele Bereiche.','دیجیتالی‌سازی بخش‌های زیادی را تغییر می‌دهد.'],['Das wird die Zukunft prägen.','این آینده را شکل خواهد داد.']],
        grammar: 'آینده Futur I و Futur II برای پیش‌بینی و فرض درباره آینده.'
    },
    {
        words: [['die künstliche Intelligenz','هوش مصنوعی'],['der Algorithmus','الگوریتم'],['die Automatisierung','خودکارسازی'],['die Datenverarbeitung','پردازش اطلاعات'],['ethisch','اخلاقی']],
        dialog: [['Welche Chancen bietet künstliche Intelligenz?','هوش مصنوعی چه فرصت‌هایی فراهم می‌کند؟'],['Sie kann viele Arbeitsabläufe erleichtern.','می‌تواند بسیاری از روندهای کاری را آسان کند.'],['Welche Risiken bestehen?','چه خطرهایی وجود دارد؟']],
        grammar: 'جملات شرطی غیرواقعی با Konjunktiv II: Wenn ..., könnte ...'
    },
    {
        words: [['die Plattform','پلتفرم'],['die Privatsphäre','حریم خصوصی'],['die Reichweite','میزان دسترسی'],['die Desinformation','اطلاعات نادرست'],['verbreiten','گسترش دادن']],
        dialog: [['Wie zuverlässig sind soziale Medien?','رسانه‌های اجتماعی چقدر قابل اعتماد هستند؟'],['Das hängt von der Quelle ab.','این به منبع بستگی دارد.'],['Man sollte Informationen überprüfen.','باید اطلاعات را بررسی کرد.']],
        grammar: 'گزارش غیرمستقیم با Konjunktiv I: Er sagt, die Medien seien wichtig.'
    },
    {
        words: [['der Klimaschutz','حفاظت اقلیمی'],['die Emission','انتشار آلاینده'],['die Nachhaltigkeit','پایداری'],['die Ressource','منبع'],['reduzieren','کاهش دادن']],
        dialog: [['Wie lässt sich der CO₂-Ausstoß reduzieren?','چگونه می‌توان انتشار دی‌اکسید کربن را کاهش داد؟'],['Durch erneuerbare Energien.','از طریق انرژی‌های تجدیدپذیر.'],['Das ist ein wichtiger Schritt.','این یک گام مهم است.']],
        grammar: 'حروف اضافه اسمی مانند aufgrund، trotz و angesichts.'
    },
    {
        words: [['die Hochschule','مؤسسه آموزش عالی'],['die Forschungsarbeit','کار پژوهشی'],['die Vorlesung','درس دانشگاهی'],['die Zulassung','پذیرش'],['wissenschaftlich','علمی']],
        dialog: [['Woran arbeiten Sie gerade?','در حال حاضر روی چه چیزی کار می‌کنید؟'],['Ich schreibe eine wissenschaftliche Arbeit.','یک کار علمی می‌نویسم.'],['Wann ist die Abgabe?','زمان تحویل چه وقت است؟']],
        grammar: 'ساختارهای مجهول با فعل‌های مدال: Die Arbeit muss abgegeben werden.'
    },
    {
        words: [['die Arbeitsbedingungen','شرایط کاری'],['die Beförderung','ارتقای شغلی'],['die Vereinbarkeit','سازگاری'],['die Arbeitsbelastung','فشار کاری'],['anspruchsvoll','چالش‌برانگیز']],
        dialog: [['Wie beurteilen Sie Ihre Arbeitsbedingungen?','شرایط کاری خود را چگونه ارزیابی می‌کنید؟'],['Sie sind anspruchsvoll, aber fair.','چالش‌برانگیز اما منصفانه هستند.'],['Was würden Sie verbessern?','چه چیزی را بهتر می‌کردید؟']],
        grammar: 'Nominalisierung: arbeiten → die Arbeit، entscheiden → die Entscheidung.'
    },
    {
        words: [['die Führung','رهبری'],['die Strategie','راهبرد'],['die Delegation','واگذاری وظیفه'],['die Zielsetzung','تعیین هدف'],['verantwortungsbewusst','مسئولیت‌پذیر']],
        dialog: [['Was macht eine gute Führungskraft aus?','چه چیزی یک مدیر خوب را می‌سازد؟'],['Sie sollte verantwortungsbewusst handeln.','باید مسئولانه عمل کند.'],['Wie wichtig ist Teamarbeit?','کار گروهی چقدر مهم است؟']],
        grammar: 'مصدرهای اسمی و ساختارهای رسمی: bei der Planung، zur Verbesserung.'
    },
    {
        words: [['das Verhalten','رفتار'],['die Wahrnehmung','ادراک'],['die Motivation','انگیزه'],['die Persönlichkeit','شخصیت'],['beeinflussen','تأثیر گذاشتن']],
        dialog: [['Was beeinflusst menschliches Verhalten?','چه چیزی بر رفتار انسان تأثیر می‌گذارد؟'],['Viele soziale und persönliche Faktoren.','عوامل اجتماعی و شخصی زیادی.'],['Können Sie ein Beispiel nennen?','می‌توانید مثالی بیاورید؟']],
        grammar: 'جملات موصولی با حرف اضافه: die Faktoren, durch die ...'
    },
    {
        words: [['die Prävention','پیشگیری'],['die Gesundheitsversorgung','خدمات صحی'],['die Behandlung','درمان'],['die Belastung','فشار'],['vorbeugen','پیشگیری کردن']],
        dialog: [['Wie kann man Krankheiten vorbeugen?','چگونه می‌توان از بیماری‌ها پیشگیری کرد؟'],['Durch Bewegung und Vorsorge.','از طریق تحرک و مراقبت پیشگیرانه.'],['Das ist sinnvoll.','این منطقی است.']],
        grammar: 'افعال با حرف اضافه: vorbeugen + Dativ.'
    },
    {
        words: [['die Gerechtigkeit','عدالت'],['das Urteil','حکم'],['das Verfahren','روند قضایی'],['die Gleichberechtigung','برابری حقوق'],['gesetzlich','قانونی']],
        dialog: [['Was bedeutet Gerechtigkeit?','عدالت به چه معناست؟'],['Alle Menschen sollten gleich behandelt werden.','با همه انسان‌ها باید برابر رفتار شود.'],['Das ist ein wichtiges Prinzip.','این یک اصل مهم است.']],
        grammar: 'مجهول با Dativ و Akkusativ و ساختارهای رسمی حقوقی.'
    },
    {
        words: [['die Einwanderung','مهاجرت به کشور'],['die Integration','ادغام'],['die Teilhabe','مشارکت'],['die Vielfalt','تنوع'],['sich anpassen','سازگار شدن']],
        dialog: [['Welche Faktoren fördern Integration?','چه عواملی ادغام را تقویت می‌کنند؟'],['Sprache, Bildung und Begegnungen.','زبان، آموزش و دیدارها.'],['Das sehe ich auch so.','من نیز همین‌طور فکر می‌کنم.']],
        grammar: 'حروف اضافه دوطرفه و افعال بازتابی در موضوع مهاجرت.'
    },
    {
        words: [['die Epoche','دوره تاریخی'],['das Ereignis','رویداد'],['die Veränderung','تغییر'],['der Einfluss','تأثیر'],['prägen','شکل دادن']],
        dialog: [['Welches Ereignis war besonders bedeutend?','کدام رویداد به‌خصوص مهم بود؟'],['Es hat die Gesellschaft stark geprägt.','تأثیر زیادی بر جامعه گذاشت.'],['Warum war es so wichtig?','چرا این‌قدر مهم بود؟']],
        grammar: 'گذشته Plusquamperfekt برای بیان رویدادی پیش از رویداد دیگر.'
    },
    {
        words: [['die Literatur','ادبیات'],['die Metapher','استعاره'],['die Erzählperspektive','دیدگاه روایت'],['die Hauptfigur','شخصیت اصلی'],['deuten','تفسیر کردن']],
        dialog: [['Wie interpretieren Sie den Text?','متن را چگونه تفسیر می‌کنید؟'],['Die Metapher weist auf einen Konflikt hin.','استعاره به یک تضاد اشاره می‌کند.'],['Können Sie das begründen?','می‌توانید آن را توجیه کنید؟']],
        grammar: 'جملات موصولی و ساختارهای اسمی برای تحلیل متن.'
    },
    {
        words: [['der Bericht','گزارش'],['die Zusammenfassung','خلاصه'],['die Beobachtung','مشاهده'],['die Schlussfolgerung','نتیجه‌گیری'],['sachlich','بی‌طرفانه']],
        dialog: [['Wie sollte ein Bericht aufgebaut sein?','گزارش چگونه باید ساختاربندی شود؟'],['Zuerst die Fakten, dann die Analyse.','ابتدا واقعیت‌ها، سپس تحلیل.'],['Und am Ende?','و در پایان؟']],
        grammar: 'استفاده از سبک غیرشخصی و مجهول در گزارش‌نویسی.'
    },
    {
        words: [['der Vortrag','سخنرانی'],['die Gliederung','ساختار'],['die Präsentation','ارائه'],['der Übergang','انتقال'],['veranschaulichen','با مثال روشن ساختن']],
        dialog: [['Wie beginnen Sie Ihren Vortrag?','سخنرانی خود را چگونه آغاز می‌کنید؟'],['Zunächst möchte ich das Thema vorstellen.','ابتدا می‌خواهم موضوع را معرفی کنم.'],['Können Sie das veranschaulichen?','می‌توانید آن را با مثال روشن کنید؟']],
        grammar: 'عبارات ربط‌دهنده برای ارائه: zunächst، anschließend، darüber hinaus، abschließend.'
    },
    {
        words: [['die Verhandlung','مذاکره'],['der Kompromiss','راه‌حل میانه'],['die Einigung','توافق'],['der Konflikt','اختلاف'],['entgegenkommen','انعطاف نشان دادن']],
        dialog: [['Können wir einen Kompromiss finden?','می‌توانیم به یک راه‌حل میانه برسیم؟'],['Ich bin bereit, Ihnen entgegenzukommen.','آماده‌ام با شما انعطاف نشان دهم.'],['Dann sind wir uns einig.','پس به توافق رسیدیم.']],
        grammar: 'Konjunktiv II برای پیشنهاد مؤدبانه: Wir könnten ...'
    },
    {
        words: [['die Voraussetzung','پیش‌شرط'],['die Einschränkung','محدودیت'],['die Schlussfolgerung','نتیجه‌گیری'],['die Annahme','فرض'],['voraussetzen','پیش‌فرض گرفتن']],
        dialog: [['Unter welcher Voraussetzung gilt das?','تحت چه پیش‌شرطی این درست است؟'],['Sofern alle Bedingungen erfüllt sind.','به شرطی که همه شرایط برآورده شوند.'],['Das ist nachvollziehbar.','این قابل درک است.']],
        grammar: 'جملات شرطی با sofern، falls و vorausgesetzt, dass.'
    },
    {
        words: [['die Redewendung','اصطلاح'],['der Ausdruck','عبارت'],['die Bedeutung','معنا'],['der Zusammenhang','ارتباط متنی'],['sinngemäß','از نظر معنا']],
        dialog: [['Was bedeutet diese Redewendung?','این اصطلاح چه معنایی دارد؟'],['Sie wird oft im Alltag verwendet.','اغلب در زندگی روزمره استفاده می‌شود.'],['Gibt es eine ähnliche Wendung?','آیا عبارت مشابهی وجود دارد؟']],
        grammar: 'عبارات اصطلاحی، ترکیب‌های ثابت و افعال با حروف اضافه.'
    },
    {
        words: [['der Fachtext','متن تخصصی'],['die Kernaussage','پیام اصلی'],['der Abschnitt','بخش'],['die Interpretation','تفسیر'],['erschließen','استنباط کردن']],
        dialog: [['Was ist die Kernaussage des Textes?','پیام اصلی متن چیست؟'],['Der Autor kritisiert die Entwicklung.','نویسنده از این تحول انتقاد می‌کند.'],['Woran erkennt man das?','از کجا می‌توان این را فهمید؟']],
        grammar: 'روش‌های استخراج مفهوم از متن و تحلیل ساختارهای پیچیده.'
    },
    {
        words: [['der Fachartikel','مقاله تخصصی'],['die These','فرضیه اصلی'],['der Beleg','مدرک'],['die Argumentation','استدلال'],['formulieren','بیان کردن']],
        dialog: [['Wie beginnt man einen Fachartikel?','مقاله تخصصی را چگونه آغاز می‌کنند؟'],['Mit einer klaren Fragestellung.','با یک پرسش روشن.'],['Was folgt danach?','بعد از آن چه می‌آید؟']],
        grammar: 'ساختار مقاله: مقدمه، استدلال‌ها، شواهد و نتیجه‌گیری.'
    },
    {
        words: [['die Auswertung','ارزیابی'],['die Interpretation','تفسیر'],['der Zusammenhang','ارتباط'],['die Erkenntnis','یافته'],['kritisch','انتقادی']],
        dialog: [['Wie bewerten Sie die Ergebnisse?','نتایج را چگونه ارزیابی می‌کنید؟'],['Sie bestätigen teilweise die These.','تا اندازه‌ای فرضیه را تأیید می‌کنند.'],['Welche Einschränkungen gibt es?','چه محدودیت‌هایی وجود دارد؟']],
        grammar: 'ترکیب گرامر پیشرفته B2 در تحلیل و تفسیر متون.'
    },
    {
        words: [['die Prüfungsvorbereitung','آمادگی امتحان'],['die Sprachkompetenz','توانایی زبانی'],['das Hörverstehen','درک شنیداری'],['das Leseverstehen','درک مطلب'],['die Schreibaufgabe','وظیفه نوشتاری']],
        dialog: [['Wie bereitest du dich auf B2 vor?','چگونه برای B2 آماده می‌شوی؟'],['Ich übe alle vier Fertigkeiten.','هر چهار مهارت را تمرین می‌کنم.'],['Das ist eine gute Strategie.','این راهبرد خوبی است.']],
        grammar: 'مرور ساختارهای پیشرفته، مجهول، Konjunktiv، جملات موصولی و پیوندهای پیچیده.'
    }
];

console.log('۳۰ درس سطح B2 آماده شد.');


/* =========================================
   KING ASAD
   بخش چهارم از ۴
   توابع اصلی سایت و فعال‌سازی امکانات
========================================= */


/* =========================================
   ابزارهای کمکی
========================================= */

function element(id) {
    return document.getElementById(id);
}

function safeText(value) {
    return String(value ?? '').replace(/[&<>"']/g, function(char) {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return entities[char];
    });
}

function getLessonDetails(level) {
    const allDetails = {
        A1: a1LessonDetails,
        A2: a2LessonDetails,
        B1: b1LessonDetails,
        B2: b2LessonDetails,
        C1: c1LessonDetails
    };

    return allDetails[level] || [];
}


/* =========================================
   تغییر صفحات سایت
========================================= */

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });

    const selectedPage = element(pageId);

    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    if (pageId === 'homePage') {
        showProgress();
    }

    if (pageId === 'conversationPage') {
        renderConversation();
    }

    if (pageId === 'grammarPage') {
        renderGrammar();
    }
}


/* =========================================
   نمایش درس‌های هر سطح
========================================= */

let currentLevel = 'A1';
let currentLessonIndex = 0;

function showLevelLessons(level) {
    if (!LEVELS.includes(level)) return;

    currentLevel = level;

    const containers = {
        A1: 'a1LessonsContainer',
        A2: 'a2LessonsContainer',
        B1: 'b1LessonsContainer',
        B2: 'b2LessonsContainer',
        C1: 'c1LessonsContainer'
    };

    Object.values(containers).forEach(function(id) {
        const container = element(id);
        if (container) {
            container.style.display = 'none';
        }
    });

    const selectedContainer = element(containers[level]);

    if (selectedContainer) {
        selectedContainer.style.display = 'block';
    }

    renderLessons(level);
}


/* =========================================
   ساخت فهرست درس‌ها
========================================= */

function renderLessons(level) {
    const containerIds = {
        A1: 'a1LessonsContainer',
        A2: 'a2LessonsContainer',
        B1: 'b1LessonsContainer',
        B2: 'b2LessonsContainer',
        C1: 'c1LessonsContainer'
    };

    const container = element(containerIds[level]);

    if (!container) return;

    const titles = lessonTitles[level] || [];
    const details = getLessonDetails(level);
    const total = LESSON_COUNTS[level];

    let html = `
        <div class="level-heading">
            <h2>درس‌های سطح ${level}</h2>
            <p>تعداد درس‌ها: ${total}</p>
        </div>
        <div class="lesson-grid">
    `;

    for (let i = 0; i < total; i++) {
        const detail = details[i] || {};
        const title = detail.title || titles[i] || `درس ${i + 1}`;

        html += `
            <button class="lesson-card"
                onclick="showLessonDetail('${level}', ${i})">
                <strong>درس ${i + 1}</strong>
                <br>
                ${safeText(title)}
                <br>
                <span>مشاهده درس ←</span>
            </button>
        `;
    }

    html += '</div><div id="lessonDetail-' + level + '"></div>';

    container.innerHTML = html;
}


/* =========================================
   نمایش محتوای یک درس
========================================= */

function showLessonDetail(level, index) {
    const details = getLessonDetails(level);
    const lesson = details[index];

    if (!lesson) {
        alert('محتوای این درس پیدا نشد.');
        return;
    }

    currentLevel = level;
    currentLessonIndex = index;

    const container = element('lessonDetail-' + level);

    if (!container) return;

    const title = lesson.title ||
        (lessonTitles[level] || [])[index] ||
        `درس ${index + 1}`;

    let wordsHTML = '';

    (lesson.words || []).forEach(function(word) {
        wordsHTML += `
            <div class="content-card">
                <h3>${safeText(word[0])}</h3>
                <p>${safeText(word[1])}</p>
                <button onclick="speakGerman(this.dataset.text)"
                    data-text="${safeText(word[0])}">
                    🔊 تلفظ آلمانی
                </button>
            </div>
        `;
    });

    let dialogHTML = '';

    (lesson.dialog || []).forEach(function(line) {
        dialogHTML += `
            <p>
                <strong>${safeText(line[0])}</strong>
                <br>
                ${safeText(line[1])}
            </p>
        `;
    });

    container.innerHTML = `
        <div class="lesson-detail">
            <h2>${level} – درس ${index + 1}</h2>
            <h3>${safeText(title)}</h3>

            <div class="content-card">
                <h3>📚 لغات درس</h3>
                ${wordsHTML || '<p>لغتی ثبت نشده است.</p>'}
            </div>

            <div class="conversation-card">
                <h3>🗣️ مکالمه درس</h3>
                ${dialogHTML || '<p>مکالمه‌ای ثبت نشده است.</p>'}
            </div>

            <div class="grammar-card">
                <h3>📖 گرامر درس</h3>
                <p>${safeText(lesson.grammar || 'گرامری ثبت نشده است.')}</p>
            </div>

            <button class="action"
                onclick="renderConversation('${level}', ${index});showPage('conversationPage')">
                مشاهده مکالمه
            </button>

            <button class="action"
                onclick="renderGrammar('${level}', ${index});showPage('grammarPage')">
                مشاهده گرامر
            </button>

            <button class="action"
                onclick="showVideoLevel('${level}');showPage('videosPage')">
                مشاهده ویدیوی سطح ${level}
            </button>
        </div>
    `;

    container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


/* =========================================
   نمایش مکالمه‌ها
========================================= */

function renderConversation(level, index) {
    const container = element('conversationContent');

    if (!container) return;

    let html = '<h2>🗣️ مکالمه‌های زبان آلمانی</h2>';

    if (level && index !== undefined) {
        const lesson = getLessonDetails(level)[index];

        if (!lesson) return;

        html += `
            <div class="conversation-card">
                <h3>${level} – درس ${index + 1}</h3>
                <h4>${safeText(lesson.title || '')}</h4>
        `;

        (lesson.dialog || []).forEach(function(line) {
            html += `
                <p>
                    <strong>${safeText(line[0])}</strong>
                    <br>
                    ${safeText(line[1])}
                </p>
                <button onclick="speakGerman(this.dataset.text)"
                    data-text="${safeText(line[0])}">
                    🔊 شنیدن تلفظ
                </button>
            `;
        });

        html += '</div>';
    } else {
        html += `
            <p>برای مشاهده مکالمه، ابتدا وارد درس مورد نظر شوید.</p>
        `;

        if (currentLevel) {
            html += `
                <button class="action"
                    onclick="showPage('lessonsPage');showLevelLessons('${currentLevel}')">
                    بازگشت به درس‌های ${currentLevel}
                </button>
            `;
        }
    }

    container.innerHTML = html;
}


/* =========================================
   نمایش گرامرها
========================================= */

function renderGrammar(level, index) {
    const container = element('grammarContent');

    if (!container) return;

    let html = '<h2>📖 آموزش گرامر آلمانی</h2>';

    if (level && index !== undefined) {
        const lesson = getLessonDetails(level)[index];

        if (!lesson) return;

        html += `
            <div class="grammar-card">
                <h3>${level} – درس ${index + 1}</h3>
                <h4>${safeText(lesson.title || '')}</h4>
                <p>${safeText(lesson.grammar || 'گرامری ثبت نشده است.')}</p>
            </div>
        `;
    } else {
        html += `
            <p>برای مشاهده گرامر، ابتدا وارد درس مورد نظر شوید.</p>
            <button class="action"
                onclick="showPage('lessonsPage')">
                مشاهده درس‌ها
            </button>
        `;
    }

    container.innerHTML = html;
}


/* =========================================
   ویدیوهای آموزشی
========================================= */

function createLevelVideo(level) {
    const video = levelVideos[level];

    if (!video) {
        return '<p>ویدیویی برای این سطح ثبت نشده است.</p>';
    }

    let html = `
        <div class="content-card">
            <h3>ویدیوهای سطح ${level}</h3>
            <p>${safeText(video.title || 'آموزش زبان آلمانی')}</p>
    `;

    if (video.id) {
        html += `
            <div style="position:relative;width:100%;padding-top:56.25%;overflow:hidden;border-radius:12px;">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}"
                    title="آموزش زبان آلمانی ${level}"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    } else if (video.link) {
        html += `
            <p>برای دیدن آموزش این سطح از لینک رسمی زیر استفاده کنید:</p>
            <a href="${safeText(video.link)}"
                target="_blank"
                rel="noopener noreferrer">
                ورود به آموزش ${level}
            </a>
        `;
    } else {
        html += '<p>لینک ویدیوی این سطح هنوز ثبت نشده است.</p>';
    }

    html += '</div>';

    return html;
}


function showVideoLevel(level) {
    if (!LEVELS.includes(level)) return;

    const containers = {
        A1: 'videosA1',
        A2: 'videosA2',
        B1: 'videosB1',
        B2: 'videosB2',
        C1: 'videosC1'
    };

    Object.values(containers).forEach(function(id) {
        const box = element(id);
        if (box) {
            box.style.display = 'none';
        }
    });

    const selected = element(containers[level]);

    if (selected) {
        selected.style.display = 'block';
        selected.innerHTML = createLevelVideo(level);
    }
}


function renderVideos() {
    LEVELS.forEach(function(level) {
        const ids = {
            A1: 'videosA1',
            A2: 'videosA2',
            B1: 'videosB1',
            B2: 'videosB2',
            C1: 'videosC1'
        };

        const box = element(ids[level]);

        if (box) {
            box.innerHTML = createLevelVideo(level);
        }
    });
}


/* =========================================
   تلفظ کلمات آلمانی
========================================= */

function speakGerman(text) {
    if (!('speechSynthesis' in window)) {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.');
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'de-DE';
    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);
}


/* =========================================
   آزمون‌های پنج سطح
========================================= */

const quizData = {
    A1: [
        {q:'معنی Hallo چیست؟', options:['سلام','خداحافظ','شب بخیر'], answer:0},
        {q:'Ich ___ Ahmad.', options:['bist','heiße','sind'], answer:1},
        {q:'معنی Danke چیست؟', options:['لطفاً','تشکر','ببخشید'], answer:1},
        {q:'کدام حرف تعریف برای Mann درست است؟', options:['die','das','der'], answer:2},
        {q:'Wie geht es dir? یعنی چه؟', options:['حالت چطور است؟','نامت چیست؟','کجا زندگی می‌کنی؟'], answer:0}
    ],

    A2: [
        {q:'گذشته فعل gehen چیست؟', options:['ging','geht','gegangen sein'], answer:0},
        {q:'Ich habe gestern Fußball ___.', options:['spielen','gespielt','spielte'], answer:1},
        {q:'معنی weil چیست؟', options:['اما','زیرا','اگر'], answer:1},
        {q:'کدام جمله درست است؟', options:['Ich muss lernen.','Ich lernen muss.','Muss ich lernen gestern.'], answer:0},
        {q:'معنی die Einladung چیست؟', options:['دعوت‌نامه','مسافرت','آموزش'], answer:0}
    ],

    B1: [
        {q:'Wenn ich Zeit hätte, ___ ich reisen.', options:['werde','würde','bin'], answer:1},
        {q:'معنی obwohl چیست؟', options:['با وجود اینکه','زیرا','بنابراین'], answer:0},
        {q:'Ich interessiere mich ___ Musik.', options:['für','mit','bei'], answer:0},
        {q:'گذشته فعل schreiben چیست؟', options:['schrieb','schreibt','geschreiben'], answer:0},
        {q:'معنی die Erfahrung چیست؟', options:['تجربه','تصمیم','فرصت'], answer:0}
    ],

    B2: [
        {q:'معنی dennoch چیست؟', options:['با این حال','به همین دلیل','برای مثال'], answer:0},
        {q:'کدام جمله مجهول است؟', options:['Das Haus wird gebaut.','Ich baue das Haus.','Ich habe ein Haus.'], answer:0},
        {q:'معنی die Voraussetzung چیست؟', options:['پیش‌شرط','نتیجه','پیشنهاد'], answer:0},
        {q:'کدام واژه به معنی «در حالی که» است؟', options:['während','deshalb','damit'], answer:0},
        {q:'معنی die Herausforderung چیست؟', options:['چالش','موفقیت','آرامش'], answer:0}
    ],

    C1: [
        {q:'معنی nichtsdestotrotz چیست؟', options:['با این وجود','در نتیجه','به ندرت'], answer:0},
        {q:'کدام واژه به معنی «دوپهلو» است؟', options:['mehrdeutig','eindeutig','einfach'], answer:0},
        {q:'معنی die Schlussfolgerung چیست؟', options:['نتیجه‌گیری','مقدمه','توضیح'], answer:0},
        {q:'کدام واژه به معنی «قابل‌توجه» است؟', options:['bemerkenswert','unwichtig','gewöhnlich'], answer:0},
        {q:'معنی die Auseinandersetzung چیست؟', options:['بحث و بررسی','استراحت','مسافرت'], answer:0}
    ]
};


function openQuiz(level) {
    if (!quizData[level]) return;

    LEVELS.forEach(function(item) {
        const box = element('quiz-' + item);
        if (box) box.style.display = 'none';
    });

    const quizBox = element('quiz-' + level);
    const questionsBox = element('questions-' + level);
    const resultBox = element('result-' + level);

    if (!quizBox || !questionsBox || !resultBox) return;

    quizBox.style.display = 'block';
    resultBox.innerHTML = '';

    let html = '';

    quizData[level].forEach(function(question, index) {
        html += `
            <div class="quiz-question">
                <h4>${index + 1}. ${safeText(question.q)}</h4>
        `;

        question.options.forEach(function(option, optionIndex) {
            html += `
                <label>
                    <input type="radio"
                        name="answer-${level}-${index}"
                        value="${optionIndex}">
                    ${safeText(option)}
                </label>
            `;
        });

        html += '</div>';
    });

    html += `
        <button class="action" onclick="submitQuiz('${level}')">
            بررسی پاسخ‌ها
        </button>
    `;

    questionsBox.innerHTML = html;

    quizBox.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


/* =========================================
   بررسی پاسخ آزمون
========================================= */

function submitQuiz(level) {
    const questions = quizData[level];

    if (!questions) return;

    let score = 0;
    let answered = 0;

    questions.forEach(function(question, index) {
        const selected = document.querySelector(
            `input[name="answer-${level}-${index}"]:checked`
        );

        if (selected) {
            answered++;

            if (Number(selected.value) === question.answer) {
                score++;
            }
        }
    });

    if (answered < questions.length) {
        alert('لطفاً به تمام سوال‌ها پاسخ دهید.');
        return;
    }

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    const result = element('result-' + level);

    if (!result) return;

    result.innerHTML = `
        <div class="content-card">
            <h3>نتیجه آزمون ${level}</h3>
            <h2>${score} از ${questions.length}</h2>
            <p>درصد موفقیت: ${percentage}%</p>
            <p>
                ${percentage >= 60
                    ? 'آفرین! نتیجه خوبی گرفتید.'
                    : 'نیاز به تمرین بیشتر دارید. دوباره تلاش کنید.'}
            </p>
        </div>
    `;

    saveQuizProgress(level, percentage);

    if (percentage >= 60) {
        showCelebration();
    }

    showProgress();
}


/* =========================================
   ذخیره پیشرفت آزمون
========================================= */

function saveQuizProgress(level, percentage) {
    try {
        const saved = JSON.parse(
            localStorage.getItem('kingAsadProgress') || '{}'
        );

        saved[level] = percentage;

        localStorage.setItem(
            'kingAsadProgress',
            JSON.stringify(saved)
        );
    } catch (error) {
        console.error('خطا در ذخیره پیشرفت:', error);
    }
}


/* =========================================
   نمایش پیشرفت در صفحه خانه
========================================= */

function showProgress() {
    const container = element('homeProgress');

    if (!container) return;

    let saved = {};

    try {
        saved = JSON.parse(
            localStorage.getItem('kingAsadProgress') || '{}'
        );
    } catch (error) {
        saved = {};
    }

    let html = '';

    LEVELS.forEach(function(level) {
        const percentage = Number(saved[level] || 0);

        html += `
            <div class="progress-box">
                <strong>سطح ${level}</strong>
                <p>${percentage}% پیشرفت در آزمون</p>
                <div class="progress-bar">
                    <div class="progress-fill"
                        style="width:${Math.max(0, Math.min(100, percentage))}%">
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


/* =========================================
   پیام موفقیت
========================================= */

function showCelebration() {
    alert('🎉 تبریک! آزمون را با موفقیت پشت سر گذاشتید.');
}


/* =========================================
   فرهنگ لغات و ترجمه
========================================= */

async function translateText(text, source, target) {
    const url =
        'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(text) +
        '&langpair=' +
        encodeURIComponent(source + '|' + target);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('خطا در ارتباط با سرویس ترجمه');
    }

    const data = await response.json();

    if (
        !data.responseData ||
        !data.responseData.translatedText
    ) {
        throw new Error('ترجمه پیدا نشد.');
    }

    return data.responseData.translatedText;
}


async function searchDictionary() {
    const input = element('dictionaryInput');
    const source = element('dictionarySource');
    const target = element('dictionaryTarget');
    const result = element('dictionaryResult');

    if (!input || !source || !target || !result) return;

    const text = input.value.trim();

    if (!text) {
        result.innerHTML = 'لطفاً یک کلمه یا جمله وارد کنید.';
        return;
    }

    if (source.value === target.value) {
        result.innerHTML = 'زبان مبدأ و مقصد یکسان است.';
        return;
    }

    result.innerHTML = 'در حال ترجمه...';

    try {
        const translation = await translateText(
            text,
            source.value,
            target.value
        );

        result.innerHTML = `
            <h3>نتیجه ترجمه</h3>
            <p><strong>متن اصلی:</strong> ${safeText(text)}</p>
            <p><strong>ترجمه:</strong> ${safeText(translation)}</p>
        `;
    } catch (error) {
        result.innerHTML = `
            ترجمه انجام نشد. لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید.
        `;

        console.error(error);
    }
}


/* =========================================
   راه‌اندازی اولیه سایت
========================================= */

document.addEventListener('DOMContentLoaded', function() {
    showProgress();

    renderVideos();

    showLevelLessons('A1');

    console.log('KING ASAD – آموزشگاه زبان آلمانی آماده شد.');
    console.log('سطوح: A1, A2, B1, B2, C1');
});
