
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
   بخش سوم از ۴ - قسمت سوم
   محتوای اختصاصی سطح C1
========================================= */

const c1LessonDetails = [
    {
        words: [['die Wissenschaftssprache','زبان علمی'],['die Fachterminologie','اصطلاحات تخصصی'],['die Präzision','دقت'],['die Differenzierung','تفکیک دقیق'],['veranschaulichen','روشن ساختن']],
        dialog: [['Wie sollte ein wissenschaftlicher Text formuliert sein?','متن علمی چگونه باید نوشته شود؟'],['Präzise, sachlich und differenziert.','دقیق، بی‌طرفانه و با تفکیک روشن.'],['Das ist ein wesentliches Merkmal.','این یک ویژگی اساسی است.']],
        grammar: 'ساختارهای اسمی و سبک علمی رسمی برای بیان دقیق مفاهیم.'
    },
    {
        words: [['die Textanalyse','تحلیل متن'],['die Argumentationsstruktur','ساختار استدلال'],['die Kernaussage','پیام اصلی'],['die Schlussfolgerung','نتیجه‌گیری'],['herausarbeiten','استخراج و روشن کردن']],
        dialog: [['Was ist die zentrale These des Textes?','فرضیه اصلی متن چیست؟'],['Der Autor stellt die gesellschaftliche Entwicklung infrage.','نویسنده تحول اجتماعی را زیر سؤال می‌برد.'],['Wie wird diese These begründet?','این فرضیه چگونه توجیه می‌شود؟']],
        grammar: 'تحلیل جمله‌های پیچیده، جمله‌های موصولی و ساختارهای وابسته.'
    },
    {
        words: [['die Forschungsfrage','پرسش پژوهشی'],['die Methodik','روش‌شناسی'],['die Datenerhebung','گردآوری داده'],['die Auswertung','تحلیل داده'],['die Hypothese','فرضیه']],
        dialog: [['Wie lautet Ihre Forschungsfrage?','پرسش پژوهشی شما چیست؟'],['Ich untersuche den Einfluss digitaler Medien.','تأثیر رسانه‌های دیجیتال را بررسی می‌کنم.'],['Welche Methode verwenden Sie?','از کدام روش استفاده می‌کنید؟']],
        grammar: 'سبک علمی و استفاده از ساختارهای غیرشخصی و مجهول.'
    },
    {
        words: [['die Beweisführung','ارائه شواهد'],['die Quellenangabe','ذکر منبع'],['die Fußnote','پاورقی'],['die Forschungsliteratur','منابع پژوهشی'],['belegen','مستند ساختن']],
        dialog: [['Wie belegen Sie Ihre Aussage?','ادعای خود را چگونه مستند می‌کنید؟'],['Durch aktuelle Forschungsliteratur.','از طریق منابع پژوهشی جدید.'],['Sind die Quellen vollständig angegeben?','آیا منابع به‌طور کامل ذکر شده‌اند؟']],
        grammar: 'جملات مجهول و ساختارهای رسمی برای استناد و گزارش پژوهش.'
    },
    {
        words: [['die Kritikfähigkeit','توانایی نقد'],['die Argumentationslogik','منطق استدلال'],['die Voreingenommenheit','پیش‌داوری'],['die Schlussfolgerung','نتیجه‌گیری'],['hinterfragen','مورد پرسش قرار دادن']],
        dialog: [['Wie lässt sich eine Behauptung überprüfen?','چگونه می‌توان یک ادعا را بررسی کرد؟'],['Indem man ihre Grundlagen hinterfragt.','با بررسی و پرسش از مبانی آن.'],['Das erfordert kritisches Denken.','این نیازمند تفکر انتقادی است.']],
        grammar: 'Konjunktiv I برای بازتاب دیدگاه دیگران و گزارش بی‌طرفانه.'
    },
    {
        words: [['die Gesellschaftsstruktur','ساختار جامعه'],['die soziale Schichtung','طبقه‌بندی اجتماعی'],['die Institution','نهاد'],['der Wertewandel','تغییر ارزش‌ها'],['gesellschaftlich','اجتماعی']],
        dialog: [['Wie verändert sich die Gesellschaftsstruktur?','ساختار جامعه چگونه تغییر می‌کند؟'],['Durch wirtschaftliche und kulturelle Prozesse.','از طریق فرایندهای اقتصادی و فرهنگی.'],['Welche Folgen hat das?','این چه پیامدهایی دارد؟']],
        grammar: 'ساختارهای اسمی پیچیده و تبدیل جمله‌های فعلی به عبارت‌های اسمی.'
    },
    {
        words: [['das Bruttoinlandsprodukt','تولید ناخالص داخلی'],['die Inflation','تورم'],['die Geldpolitik','سیاست پولی'],['die Konjunktur','وضعیت چرخه اقتصادی'],['die Kaufkraft','قدرت خرید']],
        dialog: [['Welche Faktoren beeinflussen die Inflation?','چه عواملی بر تورم تأثیر می‌گذارند؟'],['Angebot, Nachfrage und Geldpolitik.','عرضه، تقاضا و سیاست پولی.'],['Wie wirkt sich das auf Haushalte aus?','این چه تأثیری بر خانواده‌ها دارد؟']],
        grammar: 'جملات علّی و نتیجه‌ای با infolge، angesichts و aufgrund.'
    },
    {
        words: [['die Rechtsprechung','رویه قضایی'],['die Gesetzesauslegung','تفسیر قانون'],['die Verfassungsnorm','قاعده قانون اساسی'],['die Rechtssicherheit','امنیت حقوقی'],['rechtsverbindlich','از نظر حقوقی الزام‌آور']],
        dialog: [['Wie wird diese Vorschrift ausgelegt?','این مقرره چگونه تفسیر می‌شود؟'],['Im Einklang mit der Verfassung.','مطابق با قانون اساسی.'],['Ist die Entscheidung verbindlich?','آیا تصمیم الزام‌آور است؟']],
        grammar: 'سبک حقوقی رسمی و کاربرد ساختارهای مجهول و مصدرهای اسمی.'
    },
    {
        words: [['die Außenpolitik','سیاست خارجی'],['die Diplomatie','دیپلماسی'],['das Bündnis','ائتلاف'],['die Souveränität','حاکمیت'],['vermitteln','میانجی‌گری کردن']],
        dialog: [['Welche Rolle spielt Diplomatie?','دیپلماسی چه نقشی دارد؟'],['Sie ermöglicht friedliche Konfliktlösungen.','راه‌حل‌های مسالمت‌آمیز برای اختلافات فراهم می‌کند.'],['Das ist international bedeutsam.','این در سطح بین‌المللی مهم است.']],
        grammar: 'عبارات رسمی و ساختارهای نقل قول غیرمستقیم.'
    },
    {
        words: [['die Verhandlungsstrategie','راهبرد مذاکره'],['das Abkommen','توافق‌نامه'],['die Vermittlung','میانجی‌گری'],['der Interessenausgleich','توازن منافع'],['aushandeln','مذاکره و توافق کردن']],
        dialog: [['Wie kann eine Einigung erzielt werden?','چگونه می‌توان به توافق رسید؟'],['Durch konstruktive Verhandlungen.','از طریق مذاکرات سازنده.'],['Welche Interessen müssen berücksichtigt werden?','کدام منافع باید در نظر گرفته شوند؟']],
        grammar: 'Konjunktiv II در پیشنهادهای دیپلماتیک و مذاکره‌های رسمی.'
    },
    {
        words: [['die Geschichtsschreibung','تاریخ‌نگاری'],['die Quellenkritik','نقد منابع'],['die Zeitzeugenaussage','گواهی شاهد تاریخی'],['der Umbruch','دگرگونی اساسی'],['rekonstruieren','بازسازی کردن']],
        dialog: [['Wie zuverlässig sind historische Quellen?','منابع تاریخی چقدر قابل اعتمادند؟'],['Das hängt von ihrer Entstehung ab.','این به زمان و شرایط ایجاد آن‌ها بستگی دارد.'],['Man muss sie kritisch prüfen.','باید آن‌ها را به‌صورت انتقادی بررسی کرد.']],
        grammar: 'Plusquamperfekt و Präteritum در روایت و تحلیل تاریخی.'
    },
    {
        words: [['die kulturelle Identität','هویت فرهنگی'],['die Zugehörigkeit','تعلق'],['die Mehrsprachigkeit','چندزبانگی'],['die Wertvorstellung','نگرش ارزشی'],['vermitteln','انتقال دادن']],
        dialog: [['Wie entsteht kulturelle Identität?','هویت فرهنگی چگونه شکل می‌گیرد؟'],['Durch Sprache, Erfahrungen und Gemeinschaft.','از طریق زبان، تجربه‌ها و اجتماع.'],['Kann sie sich verändern?','آیا می‌تواند تغییر کند؟']],
        grammar: 'جملات موصولی پیشرفته با Präposition و ضمایر dessen و deren.'
    },
    {
        words: [['die literarische Epoche','دوره ادبی'],['das Motiv','درون‌مایه'],['die Symbolik','نمادپردازی'],['die Erzählperspektive','زاویه دید روایت'],['interpretieren','تفسیر کردن']],
        dialog: [['Welches Motiv steht im Mittelpunkt?','کدام درون‌مایه در مرکز قرار دارد؟'],['Die Suche nach Identität.','جست‌وجوی هویت.'],['Wie wird es dargestellt?','چگونه نمایش داده شده است؟']],
        grammar: 'سبک تحلیلی ادبی و کاربرد Konjunktiv برای بیان برداشت و احتمال.'
    },
    {
        words: [['die Literaturkritik','نقد ادبی'],['die Deutung','تفسیر'],['die Mehrdeutigkeit','چندمعنایی'],['der Erzählstil','سبک روایت'],['ambivalent','دوگانه و متناقض']],
        dialog: [['Wie beurteilen Sie den Erzählstil?','سبک روایت را چگونه ارزیابی می‌کنید؟'],['Er ist bewusst mehrdeutig gestaltet.','عمداً چندمعنایی طراحی شده است.'],['Welche Wirkung erzielt das?','این چه تأثیری ایجاد می‌کند؟']],
        grammar: 'ساختارهای پیچیده برای بیان تردید، احتمال و تفسیر.'
    },
    {
        words: [['die Ästhetik','زیبایی‌شناسی'],['die Wahrnehmung','ادراک'],['die Komposition','ترکیب‌بندی'],['die Ausdruckskraft','قدرت بیان'],['zeitgenössisch','معاصر']],
        dialog: [['Was macht ein Kunstwerk bedeutend?','چه چیزی یک اثر هنری را ارزشمند می‌کند؟'],['Seine Ausdruckskraft und Originalität.','قدرت بیان و اصالت آن.'],['Das ist eine interessante Perspektive.','این دیدگاه جالبی است.']],
        grammar: 'صفت‌ها و قیدهای پیشرفته برای ارزیابی و توصیف دقیق.'
    },
    {
        words: [['der Mediendiskurs','گفتمان رسانه‌ای'],['die Meinungsbildung','شکل‌گیری افکار'],['die Berichterstattung','خبررسانی'],['die Manipulation','دست‌کاری'],['polarisieren','قطبی کردن']],
        dialog: [['Wie beeinflussen Medien die öffentliche Meinung?','رسانه‌ها چگونه بر افکار عمومی تأثیر می‌گذارند؟'],['Durch Auswahl und Gewichtung von Informationen.','از طریق انتخاب و برجسته‌سازی اطلاعات.'],['Das sollte kritisch betrachtet werden.','باید این موضوع را انتقادی بررسی کرد.']],
        grammar: 'گزارش غیرمستقیم و ساختارهای مجهول در تحلیل رسانه.'
    },
    {
        words: [['die Fachkommunikation','ارتباط تخصصی'],['die Gesprächsführung','مدیریت گفتگو'],['die Präzisierung','دقیق‌سازی'],['der Einwand','اعتراض'],['entkräften','بی‌اثر کردن']],
        dialog: [['Wie reagieren Sie auf einen Einwand?','به یک اعتراض چگونه پاسخ می‌دهید؟'],['Ich prüfe zunächst seine Grundlage.','ابتدا مبنای آن را بررسی می‌کنم.'],['Das ist eine sachliche Vorgehensweise.','این یک روش بی‌طرفانه است.']],
        grammar: 'ساختارهای پیچیده موافقت، مخالفت و محدودسازی ادعا.'
    },
    {
        words: [['die Sprachwissenschaft','زبان‌شناسی'],['die Syntax','نحو'],['die Semantik','معناشناسی'],['die Pragmatik','کاربردشناسی'],['der Sprachwandel','دگرگونی زبان']],
        dialog: [['Was untersucht die Pragmatik?','کاربردشناسی چه چیزی را بررسی می‌کند؟'],['Sprache im jeweiligen Kontext.','زبان را در متن و موقعیت مربوطه.'],['Welche Rolle spielt die Bedeutung?','معنا چه نقشی دارد؟']],
        grammar: 'تحلیل ساختارهای نحوی و تفاوت معنای مستقیم و ضمنی.'
    },
    {
        words: [['die Sozialpsychologie','روان‌شناسی اجتماعی'],['die Gruppendynamik','پویایی گروه'],['die Fremdwahrnehmung','برداشت دیگران'],['das Vorurteil','پیش‌داوری'],['beeinflussen','تأثیر گذاشتن']],
        dialog: [['Wie entstehen Vorurteile?','پیش‌داوری‌ها چگونه به وجود می‌آیند؟'],['Durch soziale Erfahrungen und Zuschreibungen.','از طریق تجربه‌های اجتماعی و نسبت دادن ویژگی‌ها.'],['Wie lassen sie sich abbauen?','چگونه می‌توان آن‌ها را کاهش داد؟']],
        grammar: 'جملات علّی و شرطی پیچیده با sofern، insofern و zumal.'
    },
    {
        words: [['die Forschungsmethode','روش پژوهش'],['die Stichprobe','نمونه آماری'],['die Validität','اعتبار'],['die Reliabilität','پایایی'],['auswerten','تحلیل کردن']],
        dialog: [['Welche Methode wurde verwendet?','از کدام روش استفاده شده است؟'],['Eine qualitative Inhaltsanalyse.','یک تحلیل محتوای کیفی.'],['Wie wurden die Daten ausgewertet?','داده‌ها چگونه تحلیل شدند؟']],
        grammar: 'گزارش پژوهش با مجهول، ساختارهای اسمی و عبارت‌های علمی.'
    },
    {
        words: [['die algorithmische Entscheidung','تصمیم الگوریتمی'],['die Transparenz','شفافیت'],['die Verantwortung','مسئولیت'],['die Diskriminierung','تبعیض'],['regulieren','تنظیم و قانون‌گذاری کردن']],
        dialog: [['Wer trägt Verantwortung für algorithmische Entscheidungen?','چه کسی مسئول تصمیم‌های الگوریتمی است؟'],['Das muss gesellschaftlich geklärt werden.','این موضوع باید در جامعه روشن شود.'],['Welche Regeln sind notwendig?','چه مقرراتی ضروری است؟']],
        grammar: 'ساختارهای مجهول با فعل‌های مدال و بیان ضرورت‌های اخلاقی.'
    },
    {
        words: [['die Automatisierung','خودکارسازی'],['die Arbeitswelt','دنیای کار'],['die Qualifizierung','ارتقای صلاحیت'],['der Strukturwandel','تحول ساختاری'],['prognostizieren','پیش‌بینی کردن']],
        dialog: [['Wie verändert Automatisierung die Arbeitswelt?','خودکارسازی چگونه دنیای کار را تغییر می‌دهد؟'],['Sie verändert Berufsbilder grundlegend.','ساختار حرفه‌ها را به‌طور اساسی تغییر می‌دهد.'],['Welche Kompetenzen werden künftig gebraucht?','در آینده به چه مهارت‌هایی نیاز خواهد بود؟']],
        grammar: 'Futur II برای پیش‌بینی و فرض درباره رویدادهای تکمیل‌شده در آینده.'
    },
    {
        words: [['die Klimaanpassung','سازگاری اقلیمی'],['die Emissionsminderung','کاهش انتشار آلاینده‌ها'],['die Artenvielfalt','تنوع زیستی'],['die Belastungsgrenze','حد تحمل'],['entgegenwirken','مقابله کردن']],
        dialog: [['Welche Maßnahmen sind besonders wirksam?','کدام اقدامات به‌خصوص مؤثر هستند؟'],['Eine nachhaltige Energiepolitik.','یک سیاست انرژی پایدار.'],['Reicht das allein aus?','آیا این به‌تنهایی کافی است؟']],
        grammar: 'ساختارهای تضاد و امتیازدهی: obwohl، wenngleich، obgleich.'
    },
    {
        words: [['die Entwicklungspolitik','سیاست توسعه'],['die Ressourcenverteilung','توزیع منابع'],['die Ungleichheit','نابرابری'],['die Zusammenarbeit','همکاری'],['fördern','تقویت کردن']],
        dialog: [['Wie lässt sich nachhaltige Entwicklung fördern?','چگونه می‌توان توسعه پایدار را تقویت کرد؟'],['Durch internationale Zusammenarbeit.','از طریق همکاری بین‌المللی.'],['Welche Hindernisse gibt es?','چه موانعی وجود دارد؟']],
        grammar: 'ساختارهای علت، هدف و نتیجه با infolge، damit و um ... zu.'
    },
    {
        words: [['das Krisenmanagement','مدیریت بحران'],['die Eskalation','تشدید بحران'],['die Risikobewertung','ارزیابی خطر'],['die Notfallmaßnahme','اقدام اضطراری'],['eindämmen','مهار کردن']],
        dialog: [['Wie sollte man auf eine Krise reagieren?','در برابر بحران چگونه باید واکنش نشان داد؟'],['Zunächst müssen Risiken bewertet werden.','ابتدا باید خطرها ارزیابی شوند.'],['Und danach?','و پس از آن؟']],
        grammar: 'ساختارهای شرطی و فرضی پیشرفته برای سناریوهای بحرانی.'
    },
    {
        words: [['die Verhandlungsposition','موضع مذاکره'],['die Interessenabwägung','سنجش منافع'],['die Zugeständnis','امتیاز'],['der Konsens','توافق'],['vermitteln','میانجی‌گری کردن']],
        dialog: [['Welche Strategie führt zum Konsens?','کدام راهبرد به توافق می‌انجامد؟'],['Ein fairer Interessenausgleich.','توازن منصفانه منافع.'],['Das klingt überzeugend.','قانع‌کننده به نظر می‌رسد.']],
        grammar: 'Konjunktiv II در مذاکره‌های رسمی و بیان پیشنهادهای پیچیده.'
    },
    {
        words: [['die wissenschaftliche Präsentation','ارائه علمی'],['die These','فرضیه'],['die Visualisierung','نمایش بصری'],['die Fragestellung','پرسش پژوهشی'],['zusammenfassen','خلاصه کردن']],
        dialog: [['Wie strukturieren Sie Ihren Vortrag?','سخنرانی خود را چگونه ساختاربندی می‌کنید؟'],['Zuerst die Fragestellung, dann die Ergebnisse.','ابتدا پرسش پژوهشی و سپس نتایج.'],['Wie schließen Sie ab?','چگونه پایان می‌دهید؟']],
        grammar: 'عبارات رسمی برای آغاز، انتقال میان بخش‌ها و نتیجه‌گیری علمی.'
    },
    {
        words: [['die wissenschaftliche Publikation','انتشار علمی'],['die Argumentationskette','زنجیره استدلال'],['die Quellenkritik','نقد منابع'],['die Kohärenz','انسجام'],['überarbeiten','بازنگری کردن']],
        dialog: [['Was ist für eine gute Publikation entscheidend?','برای یک اثر علمی خوب چه چیزی تعیین‌کننده است؟'],['Eine klare Argumentation und zuverlässige Quellen.','استدلال روشن و منابع قابل اعتماد.'],['Wie prüfen Sie die Kohärenz?','انسجام را چگونه بررسی می‌کنید؟']],
        grammar: 'نگارش علمی پیشرفته، پیوند منطقی پاراگراف‌ها و ارجاع دقیق.'
    },
    {
        words: [['die Diskursanalyse','تحلیل گفتمان'],['die Mehrdeutigkeit','چندمعنایی'],['die Implikation','معنای ضمنی'],['die Interpretation','تفسیر'],['kontextualisieren','در بستر قرار دادن']],
        dialog: [['Welche implizite Aussage enthält der Text?','متن چه پیام ضمنی دارد؟'],['Das lässt sich nur im Kontext erkennen.','این را فقط در بستر متن می‌توان تشخیص داد.'],['Welche Interpretation ist überzeugender?','کدام تفسیر قانع‌کننده‌تر است؟']],
        grammar: 'تحلیل معنای ضمنی، ساختارهای پیچیده و پیوندهای گفتمانی.'
    },
    {
        words: [['die Prüfungsvorbereitung','آمادگی امتحان'],['die Sprachbeherrschung','تسلط زبانی'],['die Ausdrucksfähigkeit','توانایی بیان'],['die Textproduktion','تولید متن'],['die Selbstkorrektur','خوداصلاحی']],
        dialog: [['Wie bereitest du dich auf C1 vor?','چگونه برای C1 آماده می‌شوی؟'],['Ich analysiere Texte und übe wissenschaftliches Schreiben.','متن‌ها را تحلیل می‌کنم و نگارش علمی تمرین می‌کنم.'],['Was ist dein wichtigstes Ziel?','مهم‌ترین هدفت چیست؟']],
        grammar: 'مرور همه ساختارهای پیشرفته C1 و تمرین چهار مهارت خواندن، شنیدن، نوشتن و صحبت کردن.'
    },
    {
        words: [['die Sprachkompetenz','توانایی زبانی'],['die Nuance','ظرافت معنایی'],['die Redewendung','اصطلاح'],['die Präzision','دقت'],['die Prüfung','امتحان']],
        dialog: [['Was zeichnet das Niveau C1 aus?','چه چیزی سطح C1 را مشخص می‌کند؟'],['Ein differenzierter und präziser Sprachgebrauch.','کاربرد دقیق و ظریف زبان.'],['Bist du bereit für die Prüfung?','برای امتحان آماده هستی؟']],
        grammar: 'جمع‌بندی نهایی: جمله‌های پیچیده، سبک آکادمیک، مجهول، نقل قول غیرمستقیم و ساختارهای اسمی.'
    }
];

console.log('۳۰ درس سطح C1 آماده شد.');
console.log('محتوای آموزشی A1 تا C1 ثبت شد.');
