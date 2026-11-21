
/* =====================================================
   KING ASAD - سیستم جامع آموزش زبان آلمانی
   بخش اول از چهار بخش
   پنج سطح آموزشی A1 تا C1
   مجموع درس‌ها: 129
===================================================== */

const KING_ASAD = {};

// ================================================
// 1. اطلاعات اصلی سطوح
// ================================================

KING_ASAD.LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

KING_ASAD.LESSON_COUNTS = {
    A1: 19,
    A2: 20,
    B1: 30,
    B2: 30,
    C1: 30
};

// ================================================
// 2. اطلاعات ویدیوهای آموزشی هر سطح
// ================================================

KING_ASAD.levelVideos = {
    A1: {
        id: '4-eDoThe6qo',
        title: 'Nicos Weg A1',
        link: 'https://youtu.be/4-eDoThe6qo'
    },

    A2: {
        id: 'Lg5P2w_Ro1c',
        title: 'Deutsch A2',
        link: 'https://youtu.be/Lg5P2w_Ro1c'
    },

    B1: {
        id: 'LkufozluseI',
        title: 'Deutsch B1',
        link: 'https://youtu.be/LkufozluseI'
    },

    B2: {
        id: '',
        title: 'Deutsch B2',
        link: 'https://www.goethe.de/'
    },

    C1: {
        id: '',
        title: 'Deutsch C1',
        link: 'https://www.goethe.de/'
    }
};

// ================================================
// 3. عنوان درس‌های سطح A1 - 19 درس
// ================================================

KING_ASAD.lessonTitles = {

    A1: [
        'سلام و معرفی خود',
        'الفبا و تلفظ آلمانی',
        'اعداد و شماره تلفن',
        'کشورها و زبان‌ها',
        'خانواده و دوستان',
        'شغل‌ها و حرفه‌ها',
        'روزهای هفته و ماه‌ها',
        'ساعت و زمان',
        'زندگی روزمره',
        'غذا و نوشیدنی',
        'خرید و فروش',
        'رنگ‌ها و لباس‌ها',
        'خانه و وسایل خانه',
        'شهر و مکان‌ها',
        'مسیر پرسیدن و آدرس دادن',
        'آب‌وهوا و فصل‌ها',
        'بدن و سلامتی',
        'قرار ملاقات و اوقات فراغت',
        'مرور و آمادگی آزمون A1'
    ],

// ================================================
// 4. عنوان درس‌های سطح A2 - 20 درس
// ================================================

    A2: [
        'گذشته و خاطرات',
        'سفر و تعطیلات',
        'رزرو هتل و محل اقامت',
        'حمل‌ونقل عمومی',
        'تجربه‌های زندگی',
        'قرار ملاقات و برنامه‌ریزی',
        'سلامتی و مراجعه به داکتر',
        'تغذیه سالم',
        'آموزش و تحصیلات',
        'محیط کار و شغل',
        'درخواست کار و مصاحبه',
        'خدمات بانکی و پول',
        'خرید اینترنتی',
        'تکنولوژی و اینترنت',
        'رسانه‌ها و اخبار',
        'محیط زیست و طبیعت',
        'روابط اجتماعی',
        'دعوت و مهمانی',
        'نامه و ایمیل رسمی',
        'مرور و آمادگی آزمون A2'
    ],

// ================================================
// 5. عنوان درس‌های سطح B1 - 30 درس
// ================================================

    B1: [
        'معرفی پیشرفته و شخصیت',
        'زندگی در آلمان',
        'ادغام در جامعه',
        'سیستم آموزشی آلمان',
        'انتخاب شغل و آینده',
        'محیط کار و مسئولیت‌ها',
        'قوانین و مقررات',
        'ادارات و امور رسمی',
        'اجاره خانه و قرارداد',
        'بیمه و خدمات اجتماعی',
        'سلامتی و سبک زندگی',
        'ورزش و فعالیت بدنی',
        'مسافرت و فرهنگ‌ها',
        'مشکلات سفر و شکایت',
        'ارتباطات و شبکه‌های اجتماعی',
        'رسانه و تأثیر آن',
        'محیط زیست و حفاظت از طبیعت',
        'تغییرات آب‌وهوا',
        'تکنولوژی در زندگی',
        'هوش مصنوعی و آینده',
        'روابط خانوادگی',
        'دوستی و ارتباطات اجتماعی',
        'فرهنگ و سنت‌ها',
        'هنر و سرگرمی',
        'مصاحبه و بحث',
        'بیان نظر و استدلال',
        'موافقت و مخالفت',
        'نوشتن نامه و شکایت',
        'ارائه و سخنرانی',
        'مرور و آمادگی آزمون B1'
    ],

// ================================================
// 6. عنوان درس‌های سطح B2 - 30 درس
// ================================================

    B2: [
        'ارتباطات پیشرفته',
        'جامعه مدرن',
        'مسائل اجتماعی',
        'اقتصاد و بازار کار',
        'مدیریت و رهبری',
        'تجارت و کسب‌وکار',
        'تحصیلات عالی',
        'پژوهش و علم',
        'تکنولوژی پیشرفته',
        'هوش مصنوعی و دیجیتال‌سازی',
        'رسانه و روزنامه‌نگاری',
        'تبلیغات و بازاریابی',
        'محیط زیست و سیاست‌های اقلیمی',
        'انرژی و منابع طبیعی',
        'جهانی‌شدن',
        'فرهنگ و هویت',
        'مهاجرت و همزیستی',
        'حقوق و عدالت اجتماعی',
        'سیاست و دموکراسی',
        'سلامت عمومی',
        'روان‌شناسی و رفتار انسان',
        'روابط بین‌المللی',
        'مدیریت بحران',
        'حل اختلاف و مذاکره',
        'تحلیل متون و مقالات',
        'نوشتن مقاله تخصصی',
        'ارائه علمی',
        'بحث و مناظره پیشرفته',
        'استدلال و نقد',
        'مرور و آمادگی آزمون B2'
    ],

// ================================================
// 7. عنوان درس‌های سطح C1 - 30 درس
// ================================================

    C1: [
        'زبان آلمانی آکادمیک',
        'تحلیل متون پیچیده',
        'نوشتن علمی و دانشگاهی',
        'زبان تخصصی و حرفه‌ای',
        'استدلال علمی پیشرفته',
        'تفکر انتقادی',
        'فلسفه و اندیشه',
        'جامعه‌شناسی پیشرفته',
        'اقتصاد جهانی',
        'سیاست بین‌الملل',
        'حقوق و نظام قضایی',
        'تاریخ و تحولات اجتماعی',
        'ادبیات آلمانی',
        'تحلیل آثار ادبی',
        'هنر و زیبایی‌شناسی',
        'فرهنگ و تمدن',
        'زبان‌شناسی و دستور زبان',
        'اصطلاحات و عبارت‌های پیشرفته',
        'سبک‌های نوشتاری',
        'نگارش گزارش تخصصی',
        'نگارش مقاله پژوهشی',
        'ارائه و سخنرانی دانشگاهی',
        'مناظره و گفت‌وگوی تخصصی',
        'مذاکره حرفه‌ای',
        'مدیریت و تصمیم‌گیری',
        'رسانه و تحلیل گفتمان',
        'علم و فناوری آینده',
        'مسائل جهانی و راه‌حل‌ها',
        'آمادگی آزمون پیشرفته',
        'مرور نهایی و آمادگی آزمون C1'
    ]
};

// ================================================
// 8. بررسی تعداد درس‌ها
// ================================================

KING_ASAD.checkLessonCounts = function () {

    const results = {};

    this.LEVELS.forEach(level => {
        const actual = this.lessonTitles[level].length;
        const expected = this.LESSON_COUNTS[level];

        results[level] = {
            expected: expected,
            actual: actual,
            correct: actual === expected
        };
    });

    return results;
};

// ================================================
// 9. بررسی مجموع درس‌ها
// ================================================

KING_ASAD.getTotalLessons = function () {

    return this.LEVELS.reduce((total, level) => {
        return total + this.lessonTitles[level].length;
    }, 0);

};

console.log('KING ASAD - بخش اول بارگذاری شد.');
console.log('مجموع درس‌ها:', KING_ASAD.getTotalLessons());
console.log('بررسی سطوح:', KING_ASAD.checkLessonCounts());

/* ادامه محتوای سطح A1 */

{
title: 'آب‌وهوا و فصل‌ها',
words: [
['das Wetter', 'آب‌وهوا'],
['die Sonne', 'آفتاب'],
['der Regen', 'باران'],
['der Schnee', 'برف'],
['der Wind', 'باد'],
['warm', 'گرم'],
['kalt', 'سرد'],
['heiß', 'داغ'],
['der Frühling', 'بهار'],
['der Sommer', 'تابستان'],
['der Herbst', 'خزان'],
['der Winter', 'زمستان']
],
dialog: [
['Wie ist das Wetter heute?', 'امروز هوا چگونه است؟'],
['Es ist sonnig und warm.', 'هوا آفتابی و گرم است.'],
['Regnet es heute?', 'امروز باران می‌بارد؟'],
['Nein, heute regnet es nicht.', 'نه، امروز باران نمی‌بارد.']
],
grammar: 'برای توصیف آب‌وهوا از Es ist استفاده می‌کنیم. مثال: Es ist kalt. برای باریدن باران می‌گوییم: Es regnet.'
},

{
title: 'بدن و سلامتی',
words: [
['der Kopf', 'سر'],
['das Auge', 'چشم'],
['das Ohr', 'گوش'],
['die Nase', 'بینی'],
['der Mund', 'دهان'],
['die Hand', 'دست'],
['der Fuß', 'پا'],
['der Bauch', 'شکم'],
['krank', 'مریض'],
['gesund', 'سالم'],
['der Arzt', 'داکتر'],
['die Medizin', 'دوا']
],
dialog: [
['Was fehlt dir?', 'چه مشکلی داری؟'],
['Ich habe Kopfschmerzen.', 'من سردرد دارم.'],
['Hast du Fieber?', 'تب داری؟'],
['Nein, aber ich bin müde.', 'نه، اما خسته هستم.']
],
grammar: 'برای بیان درد می‌توان از haben استفاده کرد: Ich habe Kopfschmerzen. برای بیان وضعیت جسمی از sein استفاده می‌شود: Ich bin krank.'
},

{
title: 'قرار ملاقات و اوقات فراغت',
words: [
['der Termin', 'قرار ملاقات'],
['die Freizeit', 'اوقات فراغت'],
['das Kino', 'سینما'],
['die Musik', 'موسیقی'],
['der Sport', 'ورزش'],
['spazieren gehen', 'قدم زدن'],
['spielen', 'بازی کردن'],
['lesen', 'مطالعه کردن'],
['treffen', 'ملاقات کردن'],
['morgen', 'فردا'],
['zusammen', 'باهم'],
['gern', 'با علاقه']
],
dialog: [
['Hast du morgen Zeit?', 'فردا وقت داری؟'],
['Ja, ich habe Zeit.', 'بله، وقت دارم.'],
['Wollen wir ins Kino gehen?', 'می‌خواهیم به سینما برویم؟'],
['Ja, sehr gern!', 'بله، با کمال میل!']
],
grammar: 'فعل wollen برای بیان خواستن استفاده می‌شود. مثال: Wir wollen Deutsch lernen. در جمله اصلی فعل صرف‌شده در جایگاه دوم قرار می‌گیرد.'
},

{
title: 'مرور و آمادگی آزمون A1',
words: [
['die Prüfung', 'امتحان'],
['die Frage', 'پرسش'],
['die Antwort', 'پاسخ'],
['wiederholen', 'تکرار کردن'],
['verstehen', 'فهمیدن'],
['schreiben', 'نوشتن'],
['lesen', 'خواندن'],
['sprechen', 'صحبت کردن'],
['hören', 'شنیدن'],
['richtig', 'درست'],
['falsch', 'غلط'],
['der Erfolg', 'موفقیت']
],
dialog: [
['Bist du bereit für die Prüfung?', 'برای امتحان آماده هستی؟'],
['Ja, ich habe viel gelernt.', 'بله، بسیار درس خوانده‌ام.'],
['Verstehst du die Fragen?', 'پرسش‌ها را می‌فهمی؟'],
['Ja, meistens.', 'بله، بیشتر اوقات.'],
['Viel Erfolg!', 'موفق باشی!']
],
grammar: 'مرور ساختارهای اصلی A1: صرف فعل‌های sein و haben، ترتیب کلمات در جمله، پرسش با W-Fragen، فعل‌های جداشدنی و زمان حال Präsens.'
}

];

// پایان محتوای 19 درس A1

console.log('محتوای 19 درس سطح A1 آماده شد.');

/* =========================================
   KING ASAD
   بخش دوم - قسمت دوم
   محتوای آموزشی سطح A2
   20 درس
========================================= */

const a2LessonDetails = [

{
title: 'گذشته و خاطرات',
words: [
['gestern', 'دیروز'],
['früher', 'در گذشته'],
['die Erinnerung', 'خاطره'],
['das Erlebnis', 'تجربه'],
['besuchen', 'دیدار کردن'],
['machen', 'انجام دادن'],
['reisen', 'سفر کردن'],
['erzählen', 'تعریف کردن']
],
dialog: [
['Was hast du gestern gemacht?', 'دیروز چه کار کردی؟'],
['Ich habe Deutsch gelernt.', 'من آلمانی خواندم.'],
['Hast du deine Freunde besucht?', 'آیا دوستانت را دیدی؟'],
['Ja, ich habe sie besucht.', 'بله، آن‌ها را دیدم.']
],
grammar: 'زمان Perfekt برای بیان گذشته استفاده می‌شود. ساختار آن haben یا sein + Partizip II است. مثال: Ich habe gelernt. Ich bin gefahren.'
},

{
title: 'سفر و تعطیلات',
words: [
['der Urlaub', 'رخصتی'],
['die Reise', 'سفر'],
['der Strand', 'ساحل'],
['das Meer', 'دریا'],
['die Berge', 'کوه‌ها'],
['das Hotel', 'هتل'],
['der Koffer', 'چمدان'],
['reisen', 'سفر کردن']
],
dialog: [
['Wohin fährst du im Urlaub?', 'در رخصتی به کجا می‌روی؟'],
['Ich fahre nach Berlin.', 'من به برلین می‌روم.'],
['Wie lange bleibst du dort?', 'چه مدت آنجا می‌مانی؟'],
['Ich bleibe eine Woche.', 'یک هفته می‌مانم.']
],
grammar: 'برای بیان مقصد از nach برای بسیاری از شهرها و کشورها استفاده می‌شود: Ich fahre nach Berlin. برای کشورهایی که آرتیکل دارند از in استفاده می‌شود: Ich fahre in die Schweiz.'
},

{
title: 'رزرو هتل و محل اقامت',
words: [
['die Reservierung', 'رزرو'],
['das Einzelzimmer', 'اتاق یک‌نفره'],
['das Doppelzimmer', 'اتاق دونفره'],
['die Übernachtung', 'اقامت شبانه'],
['die Rezeption', 'پذیرش'],
['der Schlüssel', 'کلید'],
['das Frühstück', 'صبحانه'],
['frei', 'خالی']
],
dialog: [
['Guten Tag, ich möchte ein Zimmer reservieren.', 'روز بخیر، می‌خواهم یک اتاق رزرو کنم.'],
['Für wie viele Nächte?', 'برای چند شب؟'],
['Für drei Nächte.', 'برای سه شب.'],
['Möchten Sie Frühstück?', 'صبحانه می‌خواهید؟'],
['Ja, bitte.', 'بله، لطفاً.']
],
grammar: 'برای درخواست مؤدبانه از möchten استفاده می‌کنیم. مثال: Ich möchte ein Zimmer reservieren. فعل اصلی در پایان جمله قرار می‌گیرد.'
},

{
title: 'حمل‌ونقل عمومی',
words: [
['die Fahrkarte', 'تکت'],
['der Bahnhof', 'ایستگاه قطار'],
['die Haltestelle', 'ایستگاه'],
['der Bus', 'بس'],
['der Zug', 'قطار'],
['die Straßenbahn', 'تراموا'],
['die Verspätung', 'تأخیر'],
['umsteigen', 'تغییر وسیله نقلیه']
],
dialog: [
['Wann fährt der Zug?', 'قطار چه زمانی حرکت می‌کند؟'],
['Um zehn Uhr.', 'ساعت ده.'],
['Muss ich umsteigen?', 'آیا باید وسیله را عوض کنم؟'],
['Ja, in Frankfurt.', 'بله، در فرانکفورت.']
],
grammar: 'افعال جداشدنی مانند umsteigen در جمله اصلی جدا می‌شوند: Ich steige in Frankfurt um.'
},

{
title: 'تجربه‌های زندگی',
words: [
['die Erfahrung', 'تجربه'],
['das Erlebnis', 'رویداد و تجربه'],
['schon', 'قبلاً'],
['noch nie', 'هرگز تا حالا'],
['interessant', 'جالب'],
['spannend', 'هیجان‌انگیز'],
['besonders', 'ویژه'],
['erleben', 'تجربه کردن']
],
dialog: [
['Warst du schon einmal in Hamburg?', 'آیا قبلاً در هامبورگ بوده‌ای؟'],
['Ja, ich war schon dort.', 'بله، قبلاً آنجا بوده‌ام.'],
['Wie hat es dir gefallen?', 'چگونه خوشت آمد؟'],
['Es hat mir sehr gut gefallen.', 'بسیار خوشم آمد.']
],
grammar: 'schon einmal برای پرسیدن درباره تجربه‌های قبلی استفاده می‌شود. مثال: Hast du schon einmal Deutsch gesprochen?'
},

{
title: 'قرار ملاقات و برنامه‌ریزی',
words: [
['der Termin', 'قرار ملاقات'],
['der Kalender', 'تقویم'],
['verschieben', 'به تعویق انداختن'],
['absagen', 'لغو کردن'],
['vereinbaren', 'توافق کردن'],
['pünktlich', 'به‌موقع'],
['möglich', 'ممکن'],
['die Uhrzeit', 'زمان ساعت']
],
dialog: [
['Hast du am Freitag Zeit?', 'جمعه وقت داری؟'],
['Leider nicht.', 'متأسفانه نه.'],
['Können wir den Termin verschieben?', 'می‌توانیم قرار را تغییر دهیم؟'],
['Ja, am Samstag passt es.', 'بله، شنبه مناسب است.']
],
grammar: 'فعل können برای بیان توانایی و درخواست استفاده می‌شود. مثال: Können wir morgen kommen?'
},

{
title: 'سلامتی و مراجعه به داکتر',
words: [
['der Arzt', 'داکتر'],
['die Ärztin', 'داکتر زن'],
['die Apotheke', 'دواخانه'],
['die Schmerzen', 'دردها'],
['das Fieber', 'تب'],
['das Medikament', 'دارو'],
['die Untersuchung', 'معاینه'],
['der Termin', 'قرار ملاقات']
],
dialog: [
['Was fehlt Ihnen?', 'چه مشکلی دارید؟'],
['Ich habe starke Kopfschmerzen.', 'سردرد شدید دارم.'],
['Seit wann haben Sie Schmerzen?', 'از چه زمانی درد دارید؟'],
['Seit gestern.', 'از دیروز.']
],
grammar: 'برای بیان مدت زمان از seit استفاده می‌شود: Seit gestern habe ich Schmerzen. برای توصیه از sollten استفاده می‌کنیم.'
},

{
title: 'تغذیه سالم',
words: [
['die Ernährung', 'تغذیه'],
['das Gemüse', 'سبزیجات'],
['das Obst', 'میوه'],
['gesund', 'سالم'],
['ungesund', 'ناسالم'],
['die Bewegung', 'تحرک'],
['regelmäßig', 'منظم'],
['vermeiden', 'پرهیز کردن']
],
dialog: [
['Wie ernährst du dich?', 'چگونه تغذیه می‌کنی؟'],
['Ich esse viel Obst und Gemüse.', 'میوه و سبزیجات زیادی می‌خورم.'],
['Treibst du regelmäßig Sport?', 'آیا منظم ورزش می‌کنی؟'],
['Ja, dreimal pro Woche.', 'بله، سه بار در هفته.']
],
grammar: 'افعال انعکاسی مانند sich ernähren با ضمیر انعکاسی می‌آیند. مثال: Ich ernähre mich gesund.'
},

{
title: 'آموزش و تحصیلات',
words: [
['die Ausbildung', 'آموزش حرفه‌ای'],
['die Universität', 'دانشگاه'],
['das Studium', 'تحصیلات دانشگاهی'],
['der Abschluss', 'مدرک'],
['die Prüfung', 'امتحان'],
['das Fach', 'مضمون'],
['lernen', 'یاد گرفتن'],
['studieren', 'تحصیل دانشگاهی کردن']
],
dialog: [
['Was möchtest du studieren?', 'چه رشته‌ای می‌خواهی بخوانی؟'],
['Ich möchte Informatik studieren.', 'می‌خواهم علوم کمپیوتر بخوانم.'],
['Wo möchtest du studieren?', 'کجا می‌خواهی تحصیل کنی؟'],
['An der Universität Köln.', 'در دانشگاه کلن.']
],
grammar: 'فعل studieren برای تحصیلات دانشگاهی استفاده می‌شود و lernen برای یادگیری عمومی. مثال: Ich lerne Deutsch. Ich studiere Medizin.'
},

{
title: 'محیط کار و شغل',
words: [
['der Arbeitsplatz', 'محل کار'],
['der Kollege', 'همکار مرد'],
['die Kollegin', 'همکار زن'],
['die Besprechung', 'جلسه'],
['die Aufgabe', 'وظیفه'],
['die Pause', 'وقفه'],
['die Arbeitszeit', 'ساعات کاری'],
['das Büro', 'دفتر']
],
dialog: [
['Wann beginnt deine Arbeit?', 'کارت چه زمانی شروع می‌شود؟'],
['Um acht Uhr.', 'ساعت هشت.'],
['Hast du heute eine Besprechung?', 'امروز جلسه داری؟'],
['Ja, um zehn Uhr.', 'بله، ساعت ده.']
],
grammar: 'برای بیان وظیفه از müssen استفاده می‌کنیم. مثال: Ich muss heute arbeiten.'
},

{
title: 'درخواست کار و مصاحبه',
words: [
['die Bewerbung', 'درخواست کار'],
['der Lebenslauf', 'زندگی‌نامه کاری'],
['das Vorstellungsgespräch', 'مصاحبه کاری'],
['die Berufserfahrung', 'تجربه کاری'],
['die Fähigkeit', 'توانایی'],
['die Stelle', 'موقعیت شغلی'],
['sich bewerben', 'درخواست کار دادن'],
['die Ausbildung', 'آموزش حرفه‌ای']
],
dialog: [
['Haben Sie Berufserfahrung?', 'آیا تجربه کاری دارید؟'],
['Ja, ich habe zwei Jahre Erfahrung.', 'بله، دو سال تجربه دارم.'],
['Welche Sprachen sprechen Sie?', 'به چه زبان‌هایی صحبت می‌کنید؟'],
['Ich spreche Deutsch und Persisch.', 'آلمانی و فارسی صحبت می‌کنم.']
],
grammar: 'فعل انعکاسی sich bewerben به معنی درخواست کار دادن است. مثال: Ich bewerbe mich um eine Stelle.'
},

{
title: 'خدمات بانکی و پول',
words: [
['das Konto', 'حساب بانکی'],
['die Überweisung', 'انتقال پول'],
['der Geldautomat', 'خودپرداز'],
['die Bankkarte', 'کارت بانکی'],
['das Bargeld', 'پول نقد'],
['die Gebühr', 'هزینه خدمات'],
['abheben', 'برداشت کردن'],
['überweisen', 'انتقال دادن']
],
dialog: [
['Ich möchte ein Konto eröffnen.', 'می‌خواهم یک حساب باز کنم.'],
['Haben Sie Ihren Ausweis dabei?', 'مدرک شناسایی همراه دارید؟'],
['Ja, hier bitte.', 'بله، بفرمایید.'],
['Möchten Sie eine Bankkarte?', 'کارت بانکی می‌خواهید؟']
],
grammar: 'فعل‌های جداشدنی مانند abheben و überweisen در جمله اصلی از هم جدا می‌شوند: Ich hebe Geld ab.'
},

{
title: 'خرید اینترنتی',
words: [
['der Online-Shop', 'فروشگاه اینترنتی'],
['bestellen', 'سفارش دادن'],
['die Lieferung', 'تحویل کالا'],
['die Bestellung', 'سفارش'],
['die Rückgabe', 'پس دادن کالا'],
['die Rechnung', 'صورت‌حساب'],
['die Webseite', 'وب‌سایت'],
['die Bewertung', 'نظر و امتیاز']
],
dialog: [
['Haben Sie das Produkt online bestellt?', 'آیا محصول را اینترنتی سفارش داده‌اید؟'],
['Ja, gestern.', 'بله، دیروز.'],
['Wann kommt die Lieferung?', 'سفارش چه زمانی می‌رسد؟'],
['Wahrscheinlich morgen.', 'احتمالاً فردا.']
],
grammar: 'برای بیان گذشته از Perfekt استفاده می‌کنیم: Ich habe ein Buch bestellt.'
},

{
title: 'تکنولوژی و اینترنت',
words: [
['der Computer', 'کمپیوتر'],
['das Passwort', 'رمز عبور'],
['das Internet', 'اینترنت'],
['die Webseite', 'صفحه اینترنتی'],
['die Datei', 'فایل'],
['herunterladen', 'دانلود کردن'],
['hochladen', 'آپلود کردن'],
['die Nachricht', 'پیام']
],
dialog: [
['Funktioniert dein Computer?', 'آیا کمپیوترت کار می‌کند؟'],
['Nein, er ist sehr langsam.', 'نه، بسیار کند است.'],
['Hast du das Programm installiert?', 'آیا برنامه را نصب کرده‌ای؟'],
['Ja, gestern.', 'بله، دیروز.']
],
grammar: 'افعال جداشدنی مانند herunterladen در جمله اصلی جدا می‌شوند: Ich lade die Datei herunter.'
},

{
title: 'رسانه‌ها و اخبار',
words: [
['die Nachrichten', 'اخبار'],
['die Zeitung', 'روزنامه'],
['der Fernseher', 'تلویزیون'],
['das Radio', 'رادیو'],
['die Sendung', 'برنامه'],
['die Information', 'اطلاعات'],
['berichten', 'گزارش دادن'],
['die Meinung', 'نظر']
],
dialog: [
['Siehst du oft Nachrichten?', 'آیا زیاد اخبار تماشا می‌کنی؟'],
['Ja, jeden Abend.', 'بله، هر شب.'],
['Welche Zeitung liest du?', 'کدام روزنامه را می‌خوانی؟'],
['Ich lese eine deutsche Zeitung.', 'یک روزنامه آلمانی می‌خوانم.']
],
grammar: 'برای بیان نظر از meiner Meinung nach استفاده می‌کنیم. مثال: Meiner Meinung nach ist das wichtig.'
},

{
title: 'محیط زیست و طبیعت',
words: [
['die Umwelt', 'محیط زیست'],
['die Natur', 'طبیعت'],
['der Müll', 'زباله'],
['die Umweltverschmutzung', 'آلودگی محیط زیست'],
['recyceln', 'بازیافت کردن'],
['sparen', 'صرفه‌جویی کردن'],
['die Energie', 'انرژی'],
['schützen', 'محافظت کردن']
],
dialog: [
['Was machst du für die Umwelt?', 'برای محیط زیست چه می‌کنی؟'],
['Ich trenne den Müll.', 'زباله‌ها را جدا می‌کنم.'],
['Sparst du Wasser?', 'آیا در مصرف آب صرفه‌جویی می‌کنی؟'],
['Ja, natürlich.', 'بله، البته.']
],
grammar: 'فعل‌های جداشدنی و ترکیب‌های اسمی در این موضوع مهم‌اند. مثال: Ich trenne den Müll und spare Energie.'
},

{
title: 'روابط اجتماعی',
words: [
['die Freundschaft', 'دوستی'],
['die Beziehung', 'رابطه'],
['das Vertrauen', 'اعتماد'],
['die Hilfe', 'کمک'],
['die Einladung', 'دعوت'],
['gemeinsam', 'مشترکاً'],
['sich treffen', 'همدیگر را دیدن'],
['sich verstehen', 'همدیگر را فهمیدن']
],
dialog: [
['Wie lange kennt ihr euch?', 'چند وقت است همدیگر را می‌شناسید؟'],
['Wir kennen uns seit zwei Jahren.', 'دو سال است همدیگر را می‌شناسیم.'],
['Trefft ihr euch oft?', 'آیا زیاد همدیگر را می‌بینید؟'],
['Ja, jedes Wochenende.', 'بله، هر آخر هفته.']
],
grammar: 'افعال انعکاسی با ضمیر مناسب می‌آیند. مثال: Wir treffen uns. برای مدت زمان از seit استفاده می‌کنیم.'
},

{
title: 'دعوت و مهمانی',
words: [
['die Einladung', 'دعوت'],
['die Party', 'مهمانی'],
['der Gast', 'مهمان'],
['das Geschenk', 'تحفه'],
['mitbringen', 'با خود آوردن'],
['feiern', 'جشن گرفتن'],
['absagen', 'لغو کردن'],
['sich freuen', 'خوشحال شدن']
],
dialog: [
['Möchtest du zu meiner Party kommen?', 'می‌خواهی به مهمانی من بیایی؟'],
['Ja, sehr gern!', 'بله، با کمال میل!'],
['Soll ich etwas mitbringen?', 'آیا چیزی با خود بیاورم؟'],
['Du kannst einen Kuchen mitbringen.', 'می‌توانی یک کیک بیاوری.']
],
grammar: 'فعل‌های جداشدنی مانند mitbringen در جمله اصلی جدا می‌شوند: Ich bringe einen Kuchen mit.'
},

{
title: 'نامه و ایمیل رسمی',
words: [
['die E-Mail', 'ایمیل'],
['der Brief', 'نامه'],
['der Empfänger', 'گیرنده'],
['der Absender', 'فرستنده'],
['die Betreffzeile', 'موضوع ایمیل'],
['die Anrede', 'خطاب آغازین'],
['die Grüße', 'احترامات'],
['schicken', 'فرستادن']
],
dialog: [
['Hast du meine E-Mail bekommen?', 'آیا ایمیل من را دریافت کردی؟'],
['Ja, vielen Dank.', 'بله، بسیار تشکر.'],
['Kannst du mir bitte antworten?', 'لطفاً می‌توانی به من پاسخ بدهی؟'],
['Ja, ich schreibe dir heute.', 'بله، امروز برایت می‌نویسم.']
],
grammar: 'در نامه رسمی از Sehr geehrte Damen und Herren و در پایان از Mit freundlichen Grüßen استفاده می‌کنیم.'
},

{
title: 'مرور و آمادگی آزمون A2',
words: [
['die Prüfung', 'امتحان'],
['die Vorbereitung', 'آمادگی'],
['die Aufgabe', 'تمرین'],
['die Lösung', 'راه‌حل'],
['der Text', 'متن'],
['das Gespräch', 'گفت‌وگو'],
['die Grammatik', 'گرامر'],
['der Wortschatz', 'واژگان'],
['wiederholen', 'تکرار کردن'],
['verbessern', 'بهبود دادن']
],
dialog: [
['Bist du auf die A2-Prüfung vorbereitet?', 'برای امتحان A2 آماده هستی؟'],
['Ich habe viel gelernt.', 'من بسیار درس خوانده‌ام.'],
['Was findest du schwierig?', 'چه چیزی را دشوار می‌دانی؟'],
['Das Schreiben ist schwierig.', 'بخش نوشتن دشوار است.']
],
grammar: 'مرور موضوعات اصلی A2: Perfekt، افعال جداشدنی، افعال انعکاسی، افعال مُدال، حروف اضافه زمانی و مکانی و جمله‌های وابسته با weil.'
}

];

console.log('محتوای 20 درس سطح A2 آماده شد.');

