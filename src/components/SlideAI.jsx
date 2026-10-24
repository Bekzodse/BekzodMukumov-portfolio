import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import LanguageToggle from "./LanguageToggle";
import { certifications, education, experience, profile, skills, socials } from "../data";

const faq = [
  { keywords: ["yosh", "age"], answer: "Assalom aleykum! Bekzodning yoshi 21 da." },
  { keywords: ["who is bekzod", "about bekzod", "bekzod kim"], answer: "Bekzod Mukumov — Full Stack Developer." },
  { keywords: ["shahar", "city", "where live"], answer: "Bekzod Toshkent shahrida yashaydi." },
  { keywords: ["eng yaxshi ko‘rgan davlat", "eng yaxshi kor gan davlat", "favorite country", "best country"], answer: "Bekzod eng yaxshi ko‘rgan davlat — Ispaniya. Eng yaxshi ko‘rgan shahri esa Malaga." },
  { keywords: ["eng yaxshi ko‘rgan shahar", "eng yaxshi korgan shahar", "favorite city", "best city"], answer: "Bekzod eng yaxshi ko‘rgan shahri — Malaga." },
  { keywords: ["bo‘sh vaqt", "bosh vaqt", "free time", "spare time"], answer: "Bekzod bo‘sh vaqtlarida Java kitoblarini o‘qiydi va Telegramdagi grafik dizayn jamoalari bilan ko‘nikmalar almashadi." },
  { keywords: ["qanaqa kompyuter", "qanday kompyuter", "what computer", "which computer", "laptop"], answer: "Bekzod MacBook Pro M2 kompyuteridan foydalanadi." },
  { keywords: ["qanaqa telefon", "qanday telefon", "telefon ishlat", "what phone", "which phone", "smartphone"], answer: "Bekzod iPhone 12 Pro Max telefonidan foydalanadi." },
  { keywords: ["mashina", "mashinasi", "car", "favorite car"], answer: "Bekzod eng yaxshi ko‘rgan mashina — BMW i8 Competition." },
  { keywords: ["ovqat", "food", "favorite food"], answer: "Bekzod eng yaxshi ko‘rgan ovqatlar — osh va lag‘mon." },
  { keywords: ["buvi", "buvisini", "grandmother", "grandma"], answer: "Bekzodning buvisining ismi Olima." },
  { keywords: ["bobo", "bobosini", "grandfather", "grandpa"], answer: "Bekzodning bobosining ismi Muqum." },
  { keywords: ["bobo buvi", "grandparents"], answer: "Bekzod bobosi va buvisini yaxshi ko‘radi." },
  { keywords: ["sayohat", "sayohat qilgan", "qaysi davlatlarga borgan", "qaysi davlatlarga", "travel", "visited countries", "which countries"], answer: "Bekzod Malayziyaning Kuala-Lumpur shahriga borgan." },
  { keywords: ["kino", "movie", "film"], answer: "Bekzod Avatar filmini yoqtiradi." },
  { keywords: ["chet el tili", "chet tillar", "foreign language", "languages"], answer: "Bekzod ingliz, ispan va o‘zbek tillarini biladi." },
  { keywords: ["sevgan qiz", "sevgan qizni", "sevgan qizining", "favorite girl", "girlfriend", "girlfriend name"], answer: "Bekzodning sevgan qizining ismi Ezoza." },
  { keywords: ["qizi", "qizining ismi", "daughter", "daughter name"], answer: "Bekzodning qizining ismi Ezoza." },
  { keywords: ["musiqa", "qo‘shiq", "qoshiq", "music", "song"], answer: "Bekzod eng yaxshi ko‘rgan musiqalar — Baby Gang & Morad — Casablanca. U asosan ispancha qo‘shiqlarni yoqtiradi." },
  { keywords: ["amma", "ammasi", "aunt"], answer: "Bekzodning bitta ammasi va ikkita amakisi bor." },
  { keywords: ["amaki", "amakisi", "uncle"], answer: "Bekzodning bitta ammasi va ikkita amakisi bor." },
  { keywords: ["o‘yin", "oyin", "game", "games"], answer: "Bekzod eng yaxshi ko‘rgan o‘yinlar — eFootball va Asphalt 9." },
  { keywords: ["kasb", "role", "profession", "developer"], answer: "Bekzodning kasbi Full Stack Developer." },
  { keywords: ["ota", "father", "dad"], answer: "Bekzodning otasining ismi Rustam." },
  { keywords: ["ona", "mother", "mom", "mum"], answer: "Bekzodning onasining ismi Fotima." },
  { keywords: ["oila", "family"], answer: "Bekzod oiladagi eng katta farzand va uning ikkita ukasi bor." },
  { keywords: ["uka", "brother"], answer: "Bekzodning ikkita ukasi bor. Kichkina ukasining ismi Abdurahmon." },
  { keywords: ["dasturlash", "programming language", "language"], answer: "Bekzod Java tilini biladi va hozirda Machine Learning bo‘yicha o‘z bilimini yaxshilayapti." },
  { keywords: ["java"], answer: "Bekzod Java tilini biladi va hozirda Machine Learning bo‘yicha o‘z bilimini yaxshilayapti." },
  { keywords: ["machine learning", "ml", "suniy intellekt", "artificial intelligence"], answer: "Bekzod hozirda Machine Learning va sun’iy intellekt bo‘yicha bilimlarini yaxshilayapti." },
  { keywords: ["skill", "ko‘nikma", "konikma"], answer: "Bekzod React JS, Java, Python, JavaScript va Machine Learning / AI bilan ishlaydi." },
  { keywords: ["react"], answer: "Bekzod React JS texnologiyasi bilan ishlaydi." },
  { keywords: ["python"], answer: "Bekzod Python tilidan ham foydalanadi." },
  { keywords: ["javascript"], answer: "Bekzod JavaScript bilan ishlaydi." },
  { keywords: ["tajriba", "experience", "ish"], answer: "Bekzod Web Developer, Quality Assurance Engineer va Full Stack Developer sifatida tajribaga ega." },
  { keywords: ["workly"], answer: "Bekzod Workly loyihasida Web Developer sifatida ishlagan." },
  { keywords: ["tuzilma"], answer: "Bekzod tuzilma.uz kompaniyasida Quality Assurance Engineer bo‘lib ishlagan." },
  { keywords: ["atlant fortuna loyiha", "atlant-fortuna loyiha", "atlant fortuna qanday loyiha", "atlant fortuna project", "atlant fortuna what project"], answer: "Bekzod Atlant-fortuna kompaniyasiga React JS va Java dasturlash tillaridan foydalangan holda Full Stack loyiha qilib bergan. U loyiha dizayni, Backend qismi, Admin panel va Telegram botni ham ishlab chiqqan." },
  { keywords: ["atlant", "fortuna"], answer: "Bekzod Atlant-fortuna kompaniyasida Full Stack Developer bo‘lib ishlagan." },
  { keywords: ["universitet", "university", "education", "o‘qish", "oqish"], answer: "Bekzod Turin Polytechnic University in Tashkent va Millat Umidi University in Tashkent universitetlarida tahsil olgan." },
  { keywords: ["turin"], answer: "Bekzod Turin Polytechnic University in Tashkentda Software Engineering yo‘nalishida tahsil olmoqda." },
  { keywords: ["millat umidi"], answer: "Bekzod Millat Umidi University in Tashkentda Computer Science yo‘nalishida tahsil olgan." },
  { keywords: ["sertifikat", "certificate"], answer: "Bekzodning sertifikatlari: Google Developer Groups, Open Data Hackathon, CODEUZ va Mohirdev." },
  { keywords: ["instagram"], answer: "Bekzodning Instagrami: @bekzodmukumovv." },
  { keywords: ["email", "e-mail"], answer: `Bekzodning email manzili: ${profile.email}.` },
  { keywords: ["telefon", "phone", "nomer", "number"], answer: `Bekzod bilan ${profile.email} orqali bog‘lanish mumkin.` },
  { keywords: ["bog‘lanish", "boglanish", "contact", "aloqa"], answer: `Bekzod bilan ${profile.email} orqali bog‘lanish mumkin.` },
  { keywords: ["qiziqish", "interest", "hobby"], answer: "Bekzod texnologiyalar, backend development, Machine Learning va yangi loyihalar yaratishga qiziqadi." },
  { keywords: ["backend"], answer: "Backend development Bekzodning asosiy qiziqish va ish yo‘nalishlaridan biridir." },
  { keywords: ["kelajakda", "kelajak", "plan", "reja", "goal", "future"], answer: "Bekzod kelajakda Google va Meta kabi katta kompaniyalarga ishga kirishni niyat qilgan." },
];

const extendedFaq = [
  ["Bekzod qanday inson?", "Bekzod mas’uliyatli, o‘rganishga qiziqadigan va yangi vazifalarni amaliy natijaga aylantirishga intiladigan dasturchi. U jamoa bilan ishlashni, fikr almashishni va har bir loyihada o‘z bilimini rivojlantirishni qadrlaydi."],
  ["Bekzod nimaga qiziqadi?", "Bekzod backend dasturlash, Java, Machine Learning, sun’iy intellekt, foydali raqamli mahsulotlar va yangi texnologiyalarni o‘rganishga qiziqadi. Bo‘sh vaqtida Java kitoblarini o‘qiydi va grafik dizayn jamoalari bilan tajriba almashadi."],
  ["Bekzodning kuchli tomoni nima?", "Bekzodning kuchli tomoni — vazifani nazariyada qoldirmasdan, uni ishlaydigan loyiha ko‘rinishiga keltirishga harakat qilishi. U frontend, backend, admin panel va Telegram bot qismlarini bir tizim sifatida ko‘ra oladi."],
  ["Bekzod jamoada ishlay oladimi?", "Ha, Bekzod jamoada ishlashni yaxshi ko‘radi. U tajribali hamkasblardan o‘rganadi, o‘z fikrlarini baham ko‘radi va umumiy g‘oyani tezroq hamda samaraliroq amaliy loyihaga aylantirishga hissa qo‘shadi."],
  ["Bekzod qanday loyihalarni yoqtiradi?", "Bekzod real muammolarni yechadigan, foydalanuvchiga qulay va texnik tomondan ishonchli loyihalarni yoqtiradi. Ayniqsa backend, admin panel, Telegram bot va zamonaviy web interfeys birlashgan loyihalar unga qiziq."],
  ["Bekzod backendda nima qiladi?", "Bekzod backend qismida ma’lumotlar bilan ishlash, biznes mantiqini tuzish, API yaratish va frontend bilan ishonchli aloqa o‘rnatishga e’tibor beradi. U backendni loyihaning barqaror ishlashini ta’minlaydigan asosiy qism deb biladi."],
  ["Bekzod frontend biladimi?", "Ha, Bekzod frontend bilan ham ishlaydi. U React JS yordamida foydalanuvchiga qulay interfeyslar yaratadi va frontendni backend, admin panel hamda boshqa xizmatlar bilan bog‘lay oladi."],
  ["Bekzod Reactdan qanday foydalanadi?", "Bekzod React JS dan interaktiv va tartibli web interfeyslar yaratish uchun foydalanadi. Komponentlarga bo‘lingan tuzilma orqali loyihani rivojlantirish va qo‘llab-quvvatlashni osonlashtiradi."],
  ["Bekzod Java haqida nima biladi?", "Java Bekzod biladigan asosiy dasturlash tillaridan biridir. U Java orqali backend mantiqini yaratish, ma’lumotlar bilan ishlash va ishonchli dasturiy yechimlar ishlab chiqishga qiziqadi."],
  ["Bekzod Machine Learningni nega o‘rganadi?", "Bekzod Machine Learningni ma’lumotlar asosida foydali qarorlar chiqaradigan va real muammolarni yecha oladigan aqlli tizimlar yaratish uchun o‘rganmoqda. U bu yo‘nalishdagi bilimlarini muntazam yaxshilayapti."],
  ["Bekzod qanday ish izlaydi?", "Bekzod bilimlarini amaliy loyihalarda ishlata oladigan, kuchli jamoa bilan rivojlanadigan va katta texnologik maqsadlarga ega ish muhitini izlaydi. U kelajakda Google yoki Meta kabi yirik kompaniyalarda ishlashni xohlaydi."],
  ["Bekzodning orzusi nima?", "Bekzodning orzusi — kuchli dasturchi bo‘lish, Machine Learning va backend yo‘nalishlarida chuqur tajriba to‘plash hamda katta texnologik kompaniyalarda foydali mahsulotlar yaratish."],
  ["Bekzod qaysi texnologiyalardan foydalanadi?", "Bekzod React JS, Java, Python, JavaScript va Machine Learning / AI yo‘nalishlari bilan ishlaydi. Loyiha talabiga qarab frontend, backend, admin panel va Telegram bot qismlarini ishlab chiqadi."],
  ["Bekzod QA haqida nima biladi?", "Bekzod Quality Assurance Engineer sifatida dastur sifatini tekshirish, xatolarni aniqlash va mahsulotning talabga mos ishlashini nazorat qilish tajribasiga ega. Bu tajriba unga kodni foydalanuvchi nuqtayi nazaridan ko‘rishga yordam beradi."],
  ["Bekzod Worklyda nima qilgan?", "Bekzod Workly loyihasida Web Developer sifatida ishlagan. U web mahsulot yaratish, loyiha qismlarini bog‘lash va foydalanuvchi uchun ishlaydigan yechim tayyorlash jarayonlarida qatnashgan."],
  ["Bekzod Atlant-fortunada nima qilgan?", "Bekzod Atlant-fortuna uchun React JS va Java yordamida Full Stack loyiha ishlab chiqqan. U dizayn, backend, admin panel va Telegram bot qismlarini tayyorlab, loyihani to‘liq ishlaydigan tizimga aylantirgan."],
  ["Bekzod qayerda o‘qiydi?", "Bekzod Turin Polytechnic University in Tashkentda Software Engineering yo‘nalishida tahsil olmoqda. Bundan oldin Millat Umidi University in Tashkentda Computer Science yo‘nalishida o‘qigan."],
  ["Bekzodning ta’limi qanday?", "Bekzodning ta’lim yo‘nalishi dasturiy ta’minot muhandisligi va kompyuter fanlari bilan bog‘liq. Universitetdagi loyihalar uning backend dasturlashga qiziqishini kuchaytirgan."],
  ["Bekzod qanday sertifikatlarga ega?", "Bekzod Google Developer Groups, Open Data Hackathon, CODEUZ va Mohirdev bilan bog‘liq sertifikat va tajribalarga ega. Bu faoliyatlar uning texnologiya, backend va Java yo‘nalishlariga qiziqishini ko‘rsatadi."],
  ["Bekzod bilan qanday bog‘lanish mumkin?", `Bekzod bilan email orqali bog‘lanish mumkin: ${profile.email}. Ijtimoiy tarmoqlari va Telegram manzili portfolio sahifasining aloqa bo‘limida berilgan.`],
  ["Bekzodning Instagrami nima?", "Bekzodning Instagram manzili — @bekzodmukumovv. U bilan bog‘liq yangiliklar va shaxsiy faoliyatini shu sahifa orqali ko‘rish mumkin."],
  ["Bekzod bo‘sh vaqtida nima qiladi?", "Bekzod bo‘sh vaqtlarida Java bo‘yicha kitoblar o‘qiydi, dasturlash bilimlarini mustahkamlaydi va Telegramdagi grafik dizayn jamoalari bilan ko‘nikma hamda fikr almashadi."],
  ["Bekzod nimalarni yoqtiradi?", "Bekzod Avatar filmini, eFootball va Asphalt 9 o‘yinlarini, osh va lag‘monni hamda Baby Gang va Moradning Casablanca qo‘shig‘ini yoqtiradi. U asosan ispancha musiqalarni tinglaydi."],
  ["Bekzodning oilasi haqida nima deyish mumkin?", "Bekzod oiladagi eng katta farzand. Uning ikkita ukasi bor, kichik ukasining ismi Abdurahmon. Otasining ismi Rustam, onasining ismi Fotima, sevgan qizining ismi esa Ezoza."],
  ["Bekzodning qarindoshlari nechta?", "Bekzodning bitta ammasi va ikkita amakisi bor. Buvisining ismi Olima, bobosining ismi Muqum. U bobo va buvisini yaxshi ko‘radi."],
  ["Bekzod qayerlarga sayohat qilgan?", "Bekzod Malayziyaning Kuala-Lumpur shahriga sayohat qilgan. Kelajakda boshqa davlatlar va shaharlarni ham ko‘rishga qiziqadi."],
  ["Bekzod qanday telefon ishlatadi?", "Bekzod iPhone 12 Pro Max telefonidan foydalanadi. Kompyuter sifatida esa MacBook Pro M2 ishlatadi."],
  ["Bekzodning kelajakdagi rejasi nima?", "Bekzod dasturlash, backend va Machine Learning bo‘yicha bilimlarini yanada chuqurlashtirib, Google va Meta kabi katta kompaniyalarga ishga kirishni niyat qilgan."],
  ["Bekzodning to‘liq ismi nima?", "Bekzodning to‘liq ismi Mukumov Bekzod. U o‘zini Full Stack dasturchi sifatida rivojlantirmoqda."],
  ["Bekzod necha yoshda?", "Bekzod 21 yoshda. U hozirda universitetda tahsil olib, dasturlash bo‘yicha amaliy bilimlarini muntazam oshirib bormoqda."],
  ["Bekzod qaysi shaharda yashaydi?", "Bekzod Toshkent shahrida yashaydi. Uning o‘qishi, loyihalari va kasbiy rivojlanishi ham shu yo‘nalishlar bilan bog‘liq."],
  ["Bekzodning asosiy kasbi nima?", "Bekzodning asosiy kasbi Full Stack dasturchi. U frontend, backend, admin panel va Telegram bot kabi tizim qismlari bilan ishlay oladi."],
  ["Bekzod dasturlashni qachon boshlagan?", "Bekzodning backend dasturlashga qiziqishi universitetda boshlangan. U o‘zidan yuqori kursdagi talabalar loyihalarini ko‘rib, shu sohaga qiziqib qolgan."],
  ["Bekzod nima uchun backendni tanlagan?", "Bekzod backendni loyihaning ichki mantiqi, ma’lumotlar bilan ishlash va tizim barqarorligini ta’minlaydigan muhim qism deb bilgani uchun tanlagan."],
  ["Bekzod qanday jamoada ishlashni xohlaydi?", "Bekzod bilim almashiladigan, jamoa a’zolari bir-birini qo‘llab-quvvatlaydigan va real mahsulotlar yaratiladigan professional jamoada ishlashni xohlaydi."],
  ["Bekzod mas’uliyatlimi?", "Ha, Bekzod vazifalarni o‘z vaqtida bajarishga, muammolarga yechim topishga va loyiha natijasining sifatli bo‘lishiga mas’uliyat bilan yondashadi."],
  ["Bekzod muammolarni qanday hal qiladi?", "Bekzod muammoni avval tahlil qiladi, keyin vazifani kichik qismlarga ajratib, amaliy va ishonchli yechim ishlab chiqishga harakat qiladi."],
  ["Bekzod yangi texnologiyani qanday o‘rganadi?", "Bekzod yangi texnologiyalarni kitoblar, amaliy loyihalar, jamoaviy tajriba va mustaqil mashqlar orqali o‘rganadi. U nazariyani amaliyot bilan mustahkamlashga e’tibor beradi."],
  ["Bekzod kod yozishni yoqtiradimi?", "Ha, Bekzod kod yozishni va g‘oyani ishlaydigan mahsulotga aylantirishni yoqtiradi. Ayniqsa backend mantiqi va tizim qismlarini birlashtirish unga qiziq."],
  ["Bekzod API bilan ishlaydimi?", "Ha, Bekzod frontend va backend o‘rtasida ma’lumot almashish uchun API lar yaratish va ulardan foydalanishga qiziqadi."],
  ["Bekzod ma’lumotlar bilan ishlaydimi?", "Ha, backend loyihalarida ma’lumotlar bilan ishlash, ularni tartibga solish va kerakli jarayonlarda ulardan foydalanish Bekzodning qiziqishlaridan biridir."],
  ["Bekzod web sayt yarata oladimi?", "Ha, Bekzod React JS yordamida zamonaviy web interfeyslar yaratadi va ularni Java asosidagi backend hamda boshqa tizim qismlari bilan bog‘lay oladi."],
  ["Bekzod admin panel yaratganmi?", "Ha, Atlant-fortuna loyihasida Bekzod admin panel yaratgan. Bu panel loyiha ma’lumotlari va boshqaruv jarayonlarini qulay tashkil qilishga xizmat qilgan."],
  ["Bekzod Telegram bot qilganmi?", "Ha, Bekzod Atlant-fortuna loyihasi doirasida Telegram bot ham ishlab chiqqan. Bot foydalanuvchi bilan qulay aloqa qilish uchun loyiha tizimiga ulangan."],
  ["Atlant-fortuna loyihasida dizaynni kim qilgan?", "Atlant-fortuna loyihasida Bekzod dizayn qismida ham ishlagan. U foydalanuvchiga qulay interfeys va loyihaning umumiy ko‘rinishini ishlab chiqishga hissa qo‘shgan."],
  ["Atlant-fortuna loyihasida backend bormi?", "Ha, loyiha backend qismiga ega bo‘lgan. Bekzod Java yordamida backend mantiqini ishlab chiqib, uni frontend va boshqa xizmatlar bilan bog‘lagan."],
  ["Bekzod Worklyda qaysi lavozimda ishlagan?", "Bekzod Workly loyihasida Web Developer lavozimida ishlagan va web mahsulot yaratish jarayonlarida qatnashgan."],
  ["Bekzod tuzilma.uzda nima qilgan?", "Bekzod tuzilma.uzda Quality Assurance Engineer sifatida ishlagan. U dastur sifatini tekshirish va xatolarni aniqlash jarayonlarida tajriba orttirgan."],
  ["Bekzodning ish tajribasi nechta yo‘nalishni qamrab oladi?", "Bekzodning tajribasi Web Development, Full Stack Development va Quality Assurance yo‘nalishlarini qamrab oladi. Bu unga loyihani turli nuqtayi nazardan ko‘rish imkonini beradi."],
  ["Bekzodning React darajasi qanday?", "React JS bo‘yicha Bekzodning ko‘rsatkichi 70 foiz. U React yordamida komponentli va interaktiv web interfeyslar yaratadi."],
  ["Bekzodning Java darajasi qanday?", "Java bo‘yicha Bekzodning ko‘rsatkichi 80 foiz. Java uning backend va Full Stack loyihalaridagi asosiy tillaridan biridir."],
  ["Bekzodning Python darajasi qanday?", "Python bo‘yicha Bekzodning ko‘rsatkichi 65 foiz. U bu tilni rivojlantirib, Machine Learning yo‘nalishidagi bilimlarini mustahkamlamoqda."],
  ["Bekzodning JavaScript darajasi qanday?", "JavaScript bo‘yicha Bekzodning ko‘rsatkichi 80 foiz. U JavaScriptni React va web dasturlash jarayonlarida qo‘llaydi."],
  ["Bekzod Machine Learningda qaysi bosqichda?", "Bekzod Machine Learning yo‘nalishini faol o‘rganish bosqichida. U hozirda bu sohadagi bilimlarini oshirib, kelajakdagi loyihalarida qo‘llashni rejalashtirmoqda."],
  ["Bekzod sun’iy intellektga qiziqadimi?", "Ha, Bekzod sun’iy intellekt va Machine Learningga qiziqadi. U aqlli tizimlar real muammolarni qanday hal qilishi mumkinligini o‘rganmoqda."],
  ["Bekzod qaysi universitetda bakalavr o‘qiydi?", "Bekzod Turin Polytechnic University in Tashkentda Software Engineering yo‘nalishida bakalavr bosqichida tahsil olmoqda."],
  ["Bekzod avval qaysi universitetda o‘qigan?", "Bekzod avval Millat Umidi University in Tashkentda Computer Science yo‘nalishida tahsil olgan."],
  ["Bekzodning universitet yo‘nalishi nima?", "Bekzodning hozirgi universitet yo‘nalishi Software Engineering, ya’ni dasturiy ta’minot muhandisligi."],
  ["Bekzodning ta’lim muddati qachongacha?", "Turin Polytechnic University in Tashkentdagi Bekzodning ta’lim davri 2024–2027 yillarni qamrab oladi."],
  ["Bekzod sertifikatlarni qaysi sohalarda olgan?", "Bekzod texnologiya, hackathon, Java Spring Boot va backend dasturlash bilan bog‘liq sertifikat va tajribalarga ega."],
  ["Bekzod hackathonda qatnashganmi?", "Ha, Bekzod Open Data Hackathon bilan bog‘liq tajribaga ega. Bunday tadbirlar uning tez fikrlash va jamoa bilan loyiha yaratish ko‘nikmalarini rivojlantiradi."],
  ["Bekzod Java Spring Bootni biladimi?", "Bekzod CODEUZ orqali Java Spring Boot yo‘nalishida tajriba olgan va Java backend ekotizimiga qiziqadi."],
  ["Bekzod Google Developer Groups bilan bog‘liqmi?", "Ha, Bekzod Google Developer Groups faoliyati bilan bog‘liq sertifikatga ega va texnologiya hamda innovatsiyalarni o‘rganishga qiziqadi."],
  ["Bekzod qanday ijtimoiy tarmoqlardan foydalanadi?", "Bekzod Instagram, GitHub, LinkedIn va Telegramdan foydalanadi. Bu platformalarda uning professional va ijtimoiy profillarini ko‘rish mumkin."],
  ["Bekzod GitHub manzili nima?", "Bekzodning GitHub username’i — @Bekzodse. U yerda dasturlash loyihalari va kod namunalari bo‘lishi mumkin."],
  ["Bekzod LinkedIn manzili nima?", "Bekzod LinkedIn’da @bekzod-mukumov nomi bilan mavjud. U yerda uning professional faoliyati haqida ma’lumot olish mumkin."],
  ["Bekzod Telegramdan foydalanadimi?", "Ha, Bekzod Telegramdan foydalanadi. Uning Telegram manzili — @bekzodmukumov."],
  ["Bekzod qaysi musiqalarni ko‘proq tinglaydi?", "Bekzod asosan ispancha qo‘shiqlarni tinglaydi. U Baby Gang va Moradning Casablanca qo‘shig‘ini ham yaxshi ko‘radi."],
  ["Bekzod Ispaniyaga qiziqadimi?", "Ha, Bekzod Ispaniyani eng yaxshi ko‘rgan davlatlaridan biri deb biladi. U Malaga shahrini yoqtiradi va ispancha musiqalarga qiziqadi."],
  ["Bekzod Malaga haqida nima deydi?", "Malaga — Bekzod eng yaxshi ko‘rgan shahri. U bu shaharni Ispaniya bilan bog‘liq qiziqishlari sababli alohida yoqtiradi."],
  ["Bekzodning sevimli filmi qaysi?", "Bekzodning sevimli filmi Avatar. U bu filmni fantastik olami va qiziqarli voqealari bilan yoqtiradi."],
  ["Bekzod qanday o‘yinlarni o‘ynaydi?", "Bekzod eFootball va Asphalt 9 o‘yinlarini yaxshi ko‘radi. Bu o‘yinlar uning sevimli o‘yinlari qatoriga kiradi."],
  ["Bekzod oshni yoqtiradimi?", "Ha, osh Bekzod yaxshi ko‘radigan ovqatlardan biri. U lag‘monni ham yoqtiradi."],
  ["Bekzodning sevimli avtomobili qanday?", "Bekzodning sevimli avtomobili BMW i8 Competition. U bu mashinani dizayni va sportcha ko‘rinishi bilan yoqtiradi."],
  ["Bekzod qaysi telefonni tanlagan?", "Bekzod iPhone 12 Pro Max telefonidan foydalanadi. U kundalik aloqa va shaxsiy ishlari uchun shu qurilmadan foydalanadi."],
  ["Bekzodning kichik ukasi kim?", "Bekzodning kichik ukasining ismi Abdurahmon. Bekzod oiladagi eng katta farzand va uning jami ikkita ukasi bor."],
  ["Bekzod ota-onasini yaxshi ko‘radimi?", "Ha, Bekzod oilasini qadrlaydi. Otasining ismi Rustam, onasining ismi Fotima, u bobo va buvisini ham yaxshi ko‘radi."],
  ["Bekzodning buvisi va bobosi kim?", "Bekzodning buvisining ismi Olima, bobosining ismi Muqum. Ular Bekzod uchun qadrli insonlar."],
  ["Bekzodning sevgan qizi kim?", "Bekzodning sevgan qizining ismi Ezoza."],
];

const extendedFaqEntries = extendedFaq.map(([question, answer]) => ({
  keywords: question.toLowerCase().split(/\s+/).filter((word) => word.length > 3 && !["bekzodning", "bekzod", "qanday", "qaysi", "nima", "uning", "haqida"].includes(word)),
  answer,
}));

function getAnswer(question) {
  const text = question.toLowerCase();
  const english = /\b(what|how|where|who|does|is|tell|about|age|studied|study|school|university|instagram|email|phone|number|family|brother|skill|experience)\b/.test(text);
  const instagram = socials.find((social) => social.key === "instagram");
  const matchedFaq = [...faq, ...extendedFaqEntries].find((item) => item.keywords.some((keyword) => text.includes(keyword)));

  if (matchedFaq) {
    if (!english) return matchedFaq.answer;
    const englishAnswers = {
      "Bekzodning yoshi 21 da.": "Assalamu alaikum! Bekzod is 21 years old.",
      "Bekzod Mukumov — Full Stack Developer.": "Bekzod Mukumov is a Full Stack Developer.",
      "Bekzod Toshkent shahrida yashaydi.": "Bekzod lives in Tashkent.",
      "Bekzodning kasbi Full Stack Developer.": "Bekzod's profession is Full Stack Developer.",
      "Bekzodning otasining ismi Rustam.": "Bekzod's father's name is Rustam.",
      "Bekzodning onasining ismi Fotima.": "Bekzod's mother's name is Fotima.",
      "Bekzod Atlant-fortuna kompaniyasiga React JS va Java dasturlash tillaridan foydalangan holda Full Stack loyiha qilib bergan. U loyiha dizayni, Backend qismi, Admin panel va Telegram botni ham ishlab chiqqan.": "Bekzod built a full-stack project for Atlant-fortuna using React JS and Java. He developed the design, backend, admin panel, and Telegram bot.",
      "Bekzod oiladagi eng katta farzand va uning ikkita ukasi bor.": "Bekzod is the eldest child in his family and has two younger brothers.",
      "Bekzodning ikkita ukasi bor. Kichkina ukasining ismi Abdurahmon.": "Bekzod has two younger brothers. His youngest brother's name is Abdurahmon.",
      "Bekzod eng yaxshi ko‘rgan davlat — Ispaniya. Eng yaxshi ko‘rgan shahri esa Malaga.": "Bekzod's favorite country is Spain, and his favorite city is Malaga.",
      "Bekzod eng yaxshi ko‘rgan shahri — Malaga.": "Bekzod's favorite city is Malaga.",
      "Bekzod bo‘sh vaqtlarida Java kitoblarini o‘qiydi va Telegramdagi grafik dizayn jamoalari bilan ko‘nikmalar almashadi.": "In his free time, Bekzod reads Java books and exchanges skills with graphic design communities on Telegram.",
      "Bekzod MacBook Pro M2 kompyuteridan foydalanadi.": "Bekzod uses a MacBook Pro M2.",
      "Bekzod iPhone 12 Pro Max telefonidan foydalanadi.": "Bekzod uses an iPhone 12 Pro Max.",
      "Bekzod eng yaxshi ko‘rgan mashina — BMW i8 Competition.": "Bekzod's favorite car is the BMW i8 Competition.",
      "Bekzod eng yaxshi ko‘rgan ovqatlar — osh va lag‘mon.": "Bekzod's favorite foods are plov and lagman.",
      "Bekzodning buvisining ismi Olima.": "Bekzod's grandmother's name is Olima.",
      "Bekzodning bobosining ismi Muqum.": "Bekzod's grandfather's name is Muqum.",
      "Bekzod bobosi va buvisini yaxshi ko‘radi.": "Bekzod loves his grandparents.",
      "Bekzod Malayziyaning Kuala-Lumpur shahriga borgan.": "Bekzod has been to Kuala Lumpur, Malaysia.",
      "Bekzod Avatar filmini yoqtiradi.": "Bekzod likes the movie Avatar.",
      "Bekzod ingliz, ispan va o‘zbek tillarini biladi.": "Bekzod knows English, Spanish, and Uzbek.",
      "Bekzodning qizining ismi Ezoza.": "Bekzod's daughter's name is Ezoza.",
      "Bekzodning sevgan qizining ismi Ezoza.": "Bekzod's girlfriend's name is Ezoza.",
      "Bekzod eng yaxshi ko‘rgan musiqalar — Baby Gang & Morad — Casablanca. U asosan ispancha qo‘shiqlarni yoqtiradi.": "Bekzod's favorite music is Baby Gang & Morad — Casablanca. He mainly enjoys Spanish songs.",
      "Bekzodning bitta ammasi va ikkita amakisi bor.": "Bekzod has one aunt and two uncles.",
      "Bekzod eng yaxshi ko‘rgan o‘yinlar — eFootball va Asphalt 9.": "Bekzod's favorite games are eFootball and Asphalt 9.",
      "Bekzod kelajakda Google va Meta kabi katta kompaniyalarga ishga kirishni niyat qilgan.": "In the future, Bekzod plans to work for major companies such as Google and Meta.",
    };
    return englishAnswers[matchedFaq.answer] || matchedFaq.answer;
  }

  if (text.includes("yosh") || text.includes("age") || text.includes("how old")) {
    return english
      ? "Assalamu alaikum! Bekzod is 21 years old."
      : "Assalom aleykum! Bekzodning yoshi 21 da.";
  }
  if (text.includes("ota") || text.includes("father") || text.includes("dad")) {
    return english
      ? "Bekzod's father's name is Rustam."
      : "Bekzodning otasining ismi Rustam.";
  }
  if (text.includes("ona") || text.includes("mother") || text.includes("mom") || text.includes("mum")) {
    return english
      ? "Bekzod's mother's name is Fotima."
      : "Bekzodning onasining ismi Fotima.";
  }
  if (text.includes("nechta uka") || text.includes("how many brothers") || text.includes("how many brother") || text.includes("brother") || text.includes("uka")) {
    return english
      ? "Bekzod is the eldest child in his family and has two younger brothers. His youngest brother's name is Abdurahmon."
      : "Bekzod oiladagi eng katta farzand. Uning ikkita ukasi bor, kichkina ukasining ismi Abdurahmon.";
  }
  if (text.includes("oila") || text.includes("family")) {
    return english
      ? "Bekzod is the eldest child in his family and has two younger brothers."
      : "Bekzod oiladagi eng katta farzand va uning ikkita ukasi bor.";
  }
  if (text.includes("instagram")) {
    return english
      ? `Bekzod's Instagram: ${instagram?.handle || "not available"}.`
      : `Bekzodning Instagrami: ${instagram?.handle || "mavjud emas"}.`;
  }
  if (text.includes("email") || text.includes("e-mail") || text.includes("telefon") || text.includes("phone") || text.includes("number") || text.includes("nomer")) {
    return english
      ? `Bekzod's email address is ${profile.email}.`
      : `Bekzodning email manzili: ${profile.email}.`;
  }
  if (text.includes("dasturlash tili") || text.includes("dasturlash tillari") || text.includes("programming language") || text.includes("programming languages")) {
    return english
      ? "Bekzod knows Java and is currently improving his knowledge of Machine Learning."
      : "Bekzod Java tilini biladi va hozirda Machine Learning bo‘yicha o‘z bilimini yaxshilayapti.";
  }
  if (text.includes("skill") || text.includes("texnolog") || text.includes("technology")) {
    return english
      ? `Bekzod's main skills are: ${skills.map((skill) => skill.name).join(", ")}.`
      : `Bekzodning asosiy ko‘nikmalari: ${skills.map((skill) => skill.name).join(", ")}.`;
  }
  if (text.includes("experience") || text.includes("ish") || text.includes("tajriba")) {
    return english
      ? `Bekzod's experience: ${experience.map((item) => `${item.title} at ${item.company}`).join("; ")}.`
      : `Bekzodning tajribasi: ${experience.map((item) => `${item.title} — ${item.company}`).join("; ")}.`;
  }
  if (text.includes("education") || text.includes("univers") || text.includes("talim") || text.includes("ta'lim") || text.includes("studied") || text.includes("study")) {
    return english
      ? `Bekzod studied at ${education.map((item) => item.school).join(" and ")}.`
      : `Bekzod ${education.map((item) => item.school).join(" va ")} universitetlarida tahsil olgan.`;
  }
  if (text.includes("certificate") || text.includes("sertifikat")) {
    return english
      ? `Bekzod's certifications include: ${certifications.map((item) => item.title).join(", ")}.`
      : `Bekzodning sertifikatlari: ${certifications.map((item) => item.title).join(", ")}.`;
  }
  if (text.includes("kim") || text.includes("who") || text.includes("haqida bekzod") || text.includes("about bekzod")) {
    return english
      ? `${profile.name} is a ${profile.role} from ${profile.city}.`
      : `${profile.name} — ${profile.role}. U ${profile.city} shahrida yashaydi.`;
  }

  return english
    ? "Please do not waste your time or mine. I can answer questions about Bekzod through this website, but I do not answer other personal questions."
    : "Iltimos, o‘zingizni ham, meni ham vaqtimizni olmang. Websayt orqali Bekzod haqidagi mavzularga javob beraman, boshqa shaxsiy savollarga javob bermayman.";
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgaaveyv";

export default function SlideAI({ language, onLanguageChange }) {
  const english = language === "en";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(english ? "Hello! Ask a question about Bekzod." : "Assalomu alaykum! Bekzod haqida savol bering.");
  const [isThinking, setIsThinking] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");
  const answerTimer = useRef(null);

  useEffect(() => () => clearTimeout(answerTimer.current), []);

  useEffect(() => {
    setAnswer((current) => (
      current === "Assalomu alaykum! Bekzod haqida savol bering." || current === "Hello! Ask a question about Bekzod."
        ? english ? "Hello! Ask a question about Bekzod." : "Assalomu alaykum! Bekzod haqida savol bering."
        : current
    ));
  }, [english]);

  const ask = async (event) => {
    event.preventDefault();
    const value = question.trim();
    if (!value || isThinking) return;
    clearTimeout(answerTimer.current);
    setIsThinking(true);
    setDeliveryError("");
    setQuestion("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Portfolio AI savoli",
          question: value,
          language,
          page: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("AI question could not be sent to Formspree.", error);
      setDeliveryError(
        english
          ? "Your question could not be sent. Please try again."
          : "Savol yuborilmadi. Iltimos, qayta urinib ko‘ring.",
      );
    }

    answerTimer.current = setTimeout(() => {
      setAnswer(getAnswer(value));
      setIsThinking(false);
    }, 3000);
  };

  return (
    <section className="slide slide-ai">
      <div className="ai-hero">
        <span className="eyebrow light">{english ? "AI ASSISTANT" : "AI YORDAMCHI"}</span>
        <h2 className="ai-title">{english ? <>Ask about<br />Bekzod</> : <>Bekzod<br />haqida so‘rang</>}</h2>
        <p className="ai-subtitle">{english ? "Ask about my experience, skills, and portfolio." : "Tajriba, ko‘nikmalar va shaxsiy portfolio haqida savol bering."}</p>
      </div>

      <div className="ai-content">
        <div className="ai-profile">
          <Photo className="ai-avatar" src="/me.png" fallback="BM" />
        </div>
        <div className="ai-chat">
          <div className="ai-chat-head">
            <div>
              <span className="eyebrow dark">{english ? "ABOUT BEKZOD AI" : "BEKZOD HAQIDA AI"}</span>
              <h3>{english ? "Ask your question" : "Savolingizni yozing"}</h3>
            </div>
            <span className="ai-badge">AI</span>
          </div>
          <div className={`ai-answer ${isThinking ? "is-thinking" : ""}`} aria-live="polite">
            {isThinking ? (
              <>
                <span>{english ? "Thinking" : "O‘ylanmoqda"}</span>
                <span className="ai-dots"><i /><i /><i /></span>
              </>
            ) : answer}
          </div>
          <form className="ai-form" onSubmit={ask}>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder={english ? "For example: Which programming languages does Bekzod know?" : "Masalan: Bekzod qaysi dasturlash tillarini biladi?"}
              aria-label={english ? "Ask about Bekzod" : "Bekzod haqida savol"}
              disabled={isThinking}
              rows="1"
            />
            <button type="submit" disabled={isThinking}>{isThinking ? "..." : english ? "Send" : "Yuborish"}</button>
          </form>
          <p className="ai-hint">{english ? "Skills · experience · education · contact" : "Ko‘nikmalar · tajriba · ta’lim · aloqa"}</p>
          {deliveryError && <p className="ai-error" role="alert">{deliveryError}</p>}
          <p className="ai-privacy">
            {english
              ? "Your question is sent by email to the portfolio owner."
              : "Savolingiz portfolio egasining email manziliga yuboriladi."}
          </p>
        </div>
      </div>
      <LanguageToggle language={language} onChange={onLanguageChange} />
    </section>
  );
}
