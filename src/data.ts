const u = (id: string, w = 700) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=${w}&h=${Math.round(w * 0.8)}`
const p = (filename: string) => `/produkte/${encodeURIComponent(filename)}`

export type Option = { label: string; extra?: number }
export type Item = {
  id: string
  name: string
  desc: string
  price: number
  priceUnit?: 'kg'
  img: string
  cat: string
  options?: Option[]
  tag?: string
}

export const categories = ['حلويات اليوم', 'بقلاوة', 'كنافة', 'قهوة وإسبريسو', 'مشروبات باردة']

export const heroImg = u('1791337442521-ef4e171442dc', 1600)

const I = {
  b1: u('1791337442521-ef4e171442dc'),
  b2: u('1778448563279-e7b39093933c'),
  b3: u('1786174045066-72297be6e9f4'),
  k1: u('1778447812923-88a9e3e6b567'),
  k2: u('1669200236020-fc78dd7cfbac'),
  k3: u('1558509927-ca362f7b77be'),
  p1: p('beinNareen.jpg'),
  p2: p('HalawetElJibn.jpg'),
  p3: p('2026-11-06.jpg'),
  p4: p('Warbat.jpg'),
  p5: p('Harissa Nabkiyeh.jpeg'),
  p6: p('Madlouka.webp'),
  esp: u('1579992357154-faf4bde95b3d'),
  cc: u('1572286258217-40142c1c6a70'),
  cap: u('1593443320739-77f74939d0da'),
  mat: u('1717603545758-88cc454db69b'),
  cola: u('1624552184280-9e9631bbeee9'),
  capri: u('1694886712783-5eefee63cedc'),
  water: u('1643114451704-8f44b1d1a681'),
}

const o = (...l: string[]): Option[] => l.map((label) => ({ label }))

export const items: Item[] = [
  // حلويات اليوم
  { id: 'booza-arabi', name: 'بوظة عربي', desc: 'بوظة عربية ناعمة ومزينة بالفستق.', price: 25, priceUnit: 'kg', img: p('بوظة-عربي.webp'), cat: 'حلويات اليوم', tag: 'جديدنا' },
  { id: 'bein', name: 'بين نارين', desc: 'عجينة سميد رقيقة مع القشطة وقطر ماء الورد.', price: 20, priceUnit: 'kg', img: I.p1, cat: 'حلويات اليوم', tag: 'طازج' },
  { id: 'halawet', name: 'حلاوة الجبن', desc: 'لفائف جبن طرية مع القطر ومطحون الفستق.', price: 22, priceUnit: 'kg', img: I.p2, cat: 'حلويات اليوم', tag: 'بلقشطة البلدية' },
  { id: 'mafroukeh', name: 'مفروكة', desc: 'سميد دافئ بالسمن مع القشطة والمكسرات المحمصة.', price: 20, priceUnit: 'kg', img: I.p3, cat: 'حلويات اليوم' },
  { id: 'warbat', name: 'وربات', desc: 'عجين فيلو مقرمش محشو بقشطة عشتا حلوة.', price: 20, priceUnit: 'kg', img: I.p4, cat: 'حلويات اليوم' },
  { id: 'harissa', name: 'هريسة نبكية', desc: 'كيك سميد طري باللوز والقطر.', price: 20, priceUnit: 'kg', img: I.p5, cat: 'حلويات اليوم' },
  { id: 'madlouka', name: 'مدلوقة', desc: 'حلوى عجين مورق ملفوفة ومحشوة بالمكسرات.', price: 22, priceUnit: 'kg', img: I.p6, cat: 'حلويات اليوم', tag: 'بلقشطة البلدية' },
  { id: 'nabulsiya', name: 'نابلسية', desc: 'جبن نابلسي في عش كنافة ناعم، يقدم ساخناً.', price: 20, priceUnit: 'kg', img: p('Nabulsiya.jpg'), cat: 'حلويات اليوم', tag: 'تخصصنا' },
  { id: 'layalina', name: 'ليالينا', desc: 'تخصص منزلي يحضّر طازجاً.', price: 25, priceUnit: 'kg', img: p('ليالينا.webp'), cat: 'حلويات اليوم' },
  // بقلاوة
  { id: 'asiyeh-p', name: 'اسية بالفستق', desc: 'بقلاوة مقرمشة بحشوة فستق عطرية.', price: 45, priceUnit: 'kg', img: p('اسية بقلاوة  بالفستق.jpg'), cat: 'بقلاوة' },
  { id: 'asiyeh-w', name: 'اسية بالجوز', desc: 'بقلاوة مقرمشة بحشوة جوز ناعمة.', price: 40, priceUnit: 'kg', img: p('اسية بقلاوة بالجوز .jpg'), cat: 'بقلاوة' },
  { id: 'asabe-p', name: 'أصابع بالفستق', desc: 'لفائف عجين رقيقة ومقرمشة بالفستق.', price: 45, priceUnit: 'kg', img: p('أصابع-فستق.webp'), cat: 'بقلاوة' },
  { id: 'asabe-c', name: 'أصابع بالكاجو', desc: 'لفائف عجين رقيقة ومقرمشة بالكاجو.', price: 40, priceUnit: 'kg', img: p('اصابع بالكاجو.jpg'), cat: 'بقلاوة' },
  { id: 'siwar', name: 'سوار الست', desc: 'حلقة بقلاوة كلاسيكية محشوة بالمكسرات بدقة.', price: 45, priceUnit: 'kg', img: p('سوار الست .jpg'), cat: 'بقلاوة' },
  { id: 'kol-p', name: 'كول وشكور بالفستق', desc: 'لفائف بقلاوة مقرمشة بحشوة الفستق.', price: 45, priceUnit: 'kg', img: p('كول شكور فستق .jpg'), cat: 'بقلاوة' },
  { id: 'kol-c', name: 'كول وشكور بالكاجو', desc: 'لفائف بقلاوة مقرمشة بحشوة الكاجو.', price: 40, priceUnit: 'kg', img: p('كول وشكور كاجو .jpg'), cat: 'بقلاوة' },
  { id: 'baqj', name: 'بقج', desc: 'رزم بقلاوة طرية، ذهبية ومقرمشة.', price: 45, priceUnit: 'kg', img: p('بقج .jpg'), cat: 'بقلاوة' },
  // كنافة
  { id: 'ballouria-p', name: 'بلورية بالفستق', desc: 'خيوط كنافة مقرمشة بحشوة فستق ناعمة.', price: 45, priceUnit: 'kg', img: p('بلورية بالفستق.jpg'), cat: 'كنافة' },
  { id: 'ballouria-filled', name: 'بلورية حمرا بالفستق', desc: 'خيوط كنافة ناعمة محشوة بكثرة بالفستق.', price: 45, priceUnit: 'kg', img: p('بلورية حمرا بالفستق.jpg'), cat: 'كنافة' },
  { id: 'mabrouma', name: 'مبرومة', desc: 'كنافة حلزونية محشوة بقلب فستق.', price: 45, priceUnit: 'kg', img: p('مبرومة .jpg'), cat: 'كنافة' },
  { id: 'osh-p', name: 'عش البلبل بالفستق', desc: 'أعشاش كنافة مقرمشة بحشوة الفستق.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالفستق .jpg'), cat: 'كنافة' },
  { id: 'osh-c', name: 'عش البلبل بالكاجو', desc: 'أعشاش كنافة مقرمشة بحشوة الكاجو.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالكاجو.jpg'), cat: 'كنافة' },
  { id: 'osh-cream', name: 'عش البلبل بكريمة الفستق', desc: 'أعشاش كنافة مقرمشة بكريمة الفستق.', price: 45, priceUnit: 'kg', img: p('عش البلبل بكريمة الفستق.jpg'), cat: 'كنافة' },
  { id: 'osh-h', name: 'عش البلبل بالبندق', desc: 'أعشاش كنافة مقرمشة بحشوة البندق.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالبندق .png'), cat: 'كنافة' },
  // قهوة وإسبريسو
  { id: 'espresso', name: 'إسبريسو', desc: 'غامق، مخملي، مع كريما ذهبية.', price: 3, img: I.esp, cat: 'قهوة وإسبريسو' },
  { id: 'creme', name: 'كافيه كريم', desc: 'قهوة طويلة، خفيفة وعطرية.', price: 3, img: I.cc, cat: 'قهوة وإسبريسو' },
  { id: 'cappu', name: 'كابتشينو', desc: 'رغوة حليب حريرية فوق إسبريسو قوي.', price: 3.5, img: I.cap, cat: 'قهوة وإسبريسو', options: [{ label: 'Classic' }, { label: 'Oat Milk', extra: 0.5 }, { label: 'Caramel', extra: 0.6 }, { label: 'Vanilla', extra: 0.6 }] },
  { id: 'matcha', name: 'ماتشا لاتيه', desc: 'ماتشا فاخرة مع حليب كريمي.', price: 4.6, img: I.mat, cat: 'قهوة وإسبريسو', options: o('Matcha mit Vanille', 'Matcha mit Erdbeere') },
  // مشروبات باردة
  { id: 'cola', name: 'كوكا كولا', desc: 'تقدم مثلجة، 0,33 لتر.', price: 2.8, img: I.cola, cat: 'مشروبات باردة' },
  { id: 'capri', name: 'كابري صن', desc: 'فواكه منعشة، للكبار والصغار.', price: 1.8, img: I.capri, cat: 'مشروبات باردة' },
  { id: 'water', name: 'مياه معدنية', desc: 'بدون غاز أو مع غاز، 0,75 لتر.', price: 4.5, img: I.water, cat: 'مشروبات باردة', options: o('Still', 'Medium') },
]