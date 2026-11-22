
import 'package:flutter/material.dart';

void main() {
  runApp(const KingAsadApp());
}

const navy = Color(0xFF101B35);
const gold = Color(0xFFE5B94F);
const background = Color(0xFFF4F6FA);

class KingAsadApp extends StatelessWidget {
  const KingAsadApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'KING ASAD',
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: background,
        colorScheme: ColorScheme.fromSeed(
          seedColor: gold,
          primary: navy,
        ),
        fontFamily: 'Roboto',
      ),
      home: const MainPage(),
    );
  }
}

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int selectedIndex = 0;

  final pages = const [
    HomeSection(),
    LevelsSection(),
    DictionarySection(),
    OtherSection(title: 'مکالمات روزمره', icon: Icons.forum),
    OtherSection(title: 'آزمون‌های آلمانی', icon: Icons.quiz),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: navy,
        foregroundColor: gold,
        title: const Text(
          'KING ASAD',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            letterSpacing: 2,
          ),
        ),
        centerTitle: true,
      ),
      body: IndexedStack(
        index: selectedIndex,
        children: pages,
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: selectedIndex,
        onDestinationSelected: (index) {
          setState(() => selectedIndex = index);
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            label: 'خانه',
          ),
          NavigationDestination(
            icon: Icon(Icons.menu_book),
            label: 'درس‌ها',
          ),
          NavigationDestination(
            icon: Icon(Icons.translate),
            label: 'فرهنگ لغت',
          ),
          NavigationDestination(
            icon: Icon(Icons.forum_outlined),
            label: 'مکالمه',
          ),
          NavigationDestination(
            icon: Icon(Icons.quiz_outlined),
            label: 'آزمون',
          ),
        ],
      ),
    );
  }
}

class HomeSection extends StatelessWidget {
  const HomeSection({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(18),
      children: [
        Container(
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [navy, Color(0xFF263E69)],
            ),
            borderRadius: BorderRadius.circular(24),
          ),
          child: const Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'به آموزشگاه KING ASAD خوش آمدید',
                style: TextStyle(
                  color: gold,
                  fontSize: 21,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 12),
              Text(
                'آلمانی را از صفر تا سطح پیشرفته بیاموزید.',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 15,
                ),
              ),
              SizedBox(height: 18),
              Text(
                'A1  •  A2  •  B1  •  B2  •  C1',
                style: TextStyle(
                  color: gold,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 22),
        const Text(
          'امکانات آموزشگاه',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: navy,
          ),
        ),
        const SizedBox(height: 12),
        const FeatureCard(
          icon: Icons.menu_book,
          title: '۱۲۹ درس آموزشی',
          description: 'پنج سطح کامل آموزش زبان آلمانی',
        ),
        const FeatureCard(
          icon: Icons.translate,
          title: 'فرهنگ لغت',
          description: 'جست‌وجوی واژه‌های زبان آلمانی',
        ),
        const FeatureCard(
          icon: Icons.headphones,
          title: 'مکالمات و تلفظ',
          description: 'تمرین مکالمه و یادگیری تلفظ',
        ),
        const FeatureCard(
          icon: Icons.video_library,
          title: 'ویدیوهای آموزشی',
          description: 'آموزش تصویری زبان آلمانی',
        ),
        const FeatureCard(
          icon: Icons.school,
          title: 'آزمون و گرامر',
          description: 'تمرین و ارزیابی مهارت‌ها',
        ),
      ],
    );
  }
}

class FeatureCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String description;

  const FeatureCard({
    super.key,
    required this.icon,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 1,
      color: Colors.white,
      margin: const EdgeInsets.only(bottom: 12),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: const Color(0xFFFFF3D5),
          child: Icon(icon, color: navy),
        ),
        title: Text(
          title,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            color: navy,
          ),
        ),
        subtitle: Text(description),
      ),
    );
  }
}

const levelCounts = {
  'A1': 19,
  'A2': 20,
  'B1': 30,
  'B2': 30,
  'C1': 30,
};

class LevelsSection extends StatelessWidget {
  const LevelsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(18),
      children: [
        const Text(
          'سطوح آموزش زبان آلمانی',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: navy,
          ),
        ),
        const SizedBox(height: 8),
        const Text('سطح مورد نظر خود را انتخاب کنید.'),
        const SizedBox(height: 18),
        ...levelCounts.entries.map((entry) {
          return Card(
            color: Colors.white,
            margin: const EdgeInsets.only(bottom: 14),
            child: ListTile(
              contentPadding: const EdgeInsets.all(14),
              leading: CircleAvatar(
                radius: 26,
                backgroundColor: navy,
                child: Text(
                  entry.key,
                  style: const TextStyle(
                    color: gold,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              title: Text(
                'سطح ${entry.key}',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: navy,
                ),
              ),
              subtitle: Text('${entry.value} درس آموزشی'),
              trailing: const Icon(Icons.arrow_forward_ios),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => LessonsPage(
                      level: entry.key,
                      count: entry.value,
                    ),
                  ),
                );
              },
            ),
          );
        }),
      ],
    );
  }
}

class LessonsPage extends StatelessWidget {
  final String level;
  final int count;

  const LessonsPage({
    super.key,
    required this.level,
    required this.count,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('درس‌های $level'),
        backgroundColor: navy,
        foregroundColor: gold,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: count,
        itemBuilder: (context, index) {
          final number = index + 1;
          return Card(
            color: Colors.white,
            margin: const EdgeInsets.only(bottom: 10),
            child: ListTile(
              leading: CircleAvatar(
                backgroundColor: const Color(0xFFFFF3D5),
                child: Text(
                  '$number',
                  style: const TextStyle(
                    color: navy,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              title: Text('درس $number'),
              subtitle: const Text('آموزش زبان آلمانی'),
              trailing: const Icon(Icons.arrow_forward_ios),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => LessonDetailPage(
                      level: level,
                      number: number,
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}

class LessonDetailPage extends StatelessWidget {
  final String level;
  final int number;

  const LessonDetailPage({
    super.key,
    required this.level,
    required this.number,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('درس $number - $level'),
        backgroundColor: navy,
        foregroundColor: gold,
      ),
      body: const Center(
        child: Padding(
          padding: EdgeInsets.all(24),
          child: Text(
            'محتوای آموزشی این درس در مرحله بعد اضافه خواهد شد.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 18),
          ),
        ),
      ),
    );
  }
}

class DictionarySection extends StatefulWidget {
  const DictionarySection({super.key});

  @override
  State<DictionarySection> createState() =>
      _DictionarySectionState();
}

class _DictionarySectionState extends State<DictionarySection> {
  final controller = TextEditingController();

  final Map<String, String> words = {
    'Hallo': 'سلام',
    'Guten Morgen': 'صبح بخیر',
    'Danke': 'تشکر',
    'Bitte': 'لطفاً / خواهش می‌کنم',
    'Wasser': 'آب',
    'Haus': 'خانه',
    'Schule': 'مکتب / مدرسه',
    'Buch': 'کتاب',
    'Freund': 'دوست',
    'Liebe': 'محبت / عشق',
    'kommen': 'آمدن',
    'gehen': 'رفتن',
    'essen': 'غذا خوردن',
    'trinken': 'نوشیدن',
    'lernen': 'یاد گرفتن',
    'sprechen': 'صحبت کردن',
  };

  String query = '';

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final results = words.entries.where((entry) {
      return entry.key.toLowerCase().contains(query.toLowerCase()) ||
          entry.value.contains(query);
    }).toList();

    return ListView(
      padding: const EdgeInsets.all(18),
      children: [
        const Text(
          'فرهنگ لغت آلمانی',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: navy,
          ),
        ),
        const SizedBox(height: 14),
        TextField(
          controller: controller,
          onChanged: (value) {
            setState(() => query = value.trim());
          },
          decoration: InputDecoration(
            hintText: 'کلمه آلمانی یا فارسی را بنویسید',
            prefixIcon: const Icon(Icons.search),
            filled: true,
            fillColor: Colors.white,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
            ),
          ),
        ),
        const SizedBox(height: 18),
        if (results.isEmpty)
          const Center(
            child: Text('کلمه‌ای پیدا نشد.'),
          ),
        ...results.map((entry) {
          return Card(
            color: Colors.white,
            child: ListTile(
              title: Text(
                entry.key,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: navy,
                ),
              ),
              subtitle: Text(entry.value),
              trailing: const Icon(Icons.volume_up, color: gold),
            ),
          );
        }),
      ],
    );
  }
}

class OtherSection extends StatelessWidget {
  final String title;
  final IconData icon;

  const OtherSection({
    super.key,
    required this.title,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 65, color: gold),
            const SizedBox(height: 18),
            Text(
              title,
              style: const TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.bold,
                color: navy,
              ),
            ),
            const SizedBox(height: 10),
            const Text(
              'محتوای این بخش در مراحل بعدی تکمیل می‌شود.',
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
