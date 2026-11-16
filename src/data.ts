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
  { id: 'booza-arabi', name: 'بوظة عربي', desc: 'Arabisches Eis, fein mit Pistazien veredelt.', price: 25, priceUnit: 'kg', img: p('بوظة-عربي.webp'), cat: 'حلويات اليوم', tag: 'جديدنا' },
  { id: 'bein', name: 'بين نارين', desc: 'Zarter Grieß-Teig, Rahm und Rosenblütensirup.', price: 20, priceUnit: 'kg', img: I.p1, cat: 'حلويات اليوم', tag: 'طازج' },
  { id: 'halawet', name: 'حلاوة الجبن', desc: 'Weiche Käse-Röllchen mit Qatr und Pistazienstaub.', price: 22, priceUnit: 'kg', img: I.p2, cat: 'حلويات اليوم', tag: 'بلقشطة البلدية' },
  { id: 'mafroukeh', name: 'مفروكة', desc: 'Warmer Grieß, Ghee, Rahm und geröstete Nüsse.', price: 20, priceUnit: 'kg', img: I.p3, cat: 'حلويات اليوم' },
  { id: 'warbat', name: 'وربات', desc: 'Knuspriger Filoteig, gefüllt mit süßem Ashta-Rahm.', price: 20, priceUnit: 'kg', img: I.p4, cat: 'حلويات اليوم' },
  { id: 'harissa', name: 'هريسة نبكية', desc: 'Saftiger Grießkuchen mit Mandel und Zuckersirup.', price: 20, priceUnit: 'kg', img: I.p5, cat: 'حلويات اليوم' },
  { id: 'madlouka', name: 'مدلوقة', desc: 'Gerollte Blätterteig-Spezialität mit Nussfüllung.', price: 22, priceUnit: 'kg', img: I.p6, cat: 'حلويات اليوم', tag: 'بلقشطة البلدية' },
  { id: 'nabulsiya', name: 'نابلسية', desc: 'Nablus-Käse im feinen Knafeh-Nest, warm serviert.', price: 20, priceUnit: 'kg', img: p('Nabulsiya.jpg'), cat: 'حلويات اليوم', tag: 'تخصصنا' },
  { id: 'layalina', name: 'ليالينا', desc: 'Hausgemachte Spezialität, frisch zubereitet.', price: 25, priceUnit: 'kg', img: p('ليالينا.webp'), cat: 'حلويات اليوم' },
  // بقلاوة
  { id: 'asiyeh-p', name: 'اسية بالفستق', desc: 'Knusprige Baklawa mit aromatischer Pistazienfüllung.', price: 45, priceUnit: 'kg', img: p('اسية بقلاوة  بالفستق.jpg'), cat: 'بقلاوة' },
  { id: 'asiyeh-w', name: 'اسية بالجوز', desc: 'Knusprige Baklawa mit feiner Walnussfüllung.', price: 40, priceUnit: 'kg', img: p('اسية بقلاوة بالجوز .jpg'), cat: 'بقلاوة' },
  { id: 'asabe-p', name: 'أصابع بالفستق', desc: 'Feine, knusprige Teigröllchen mit Pistazien.', price: 45, priceUnit: 'kg', img: p('أصابع-فستق.webp'), cat: 'بقلاوة' },
  { id: 'asabe-c', name: 'أصابع بالكاجو', desc: 'Feine, knusprige Teigröllchen mit Cashewkernen.', price: 40, priceUnit: 'kg', img: p('اصابع بالكاجو.jpg'), cat: 'بقلاوة' },
  { id: 'siwar', name: 'سوار الست', desc: 'Ein klassischer Baklava-Ring, fein mit Nüssen gefüllt.', price: 45, priceUnit: 'kg', img: p('سوار الست .jpg'), cat: 'بقلاوة' },
  { id: 'kol-p', name: 'كول وشكور بالفستق', desc: 'Knusprige Baklava-Röllchen mit Pistazienfüllung.', price: 45, priceUnit: 'kg', img: p('كول شكور فستق .jpg'), cat: 'بقلاوة' },
  { id: 'kol-c', name: 'كول وشكور بالكاجو', desc: 'Knusprige Baklava-Röllchen mit Cashewfüllung.', price: 40, priceUnit: 'kg', img: p('كول وشكور كاجو .jpg'), cat: 'بقلاوة' },
  { id: 'baqj', name: 'بقج', desc: 'Zarte Baklava-Päckchen, goldbraun und knusprig.', price: 45, priceUnit: 'kg', img: p('بقج .jpg'), cat: 'بقلاوة' },
  // كنافة
  { id: 'ballouria-p', name: 'بلورية بالفستق', desc: 'Knusprige Knafeh-Fäden mit feiner Pistazienfüllung.', price: 45, priceUnit: 'kg', img: p('بلورية بالفستق.jpg'), cat: 'كنافة' },
  { id: 'ballouria-filled', name: 'بلورية حمرا بالفستق', desc: 'Feine Knafeh-Fäden, reich mit Pistazien gefüllt.', price: 45, priceUnit: 'kg', img: p('بلورية حمرا بالفستق.jpg'), cat: 'كنافة' },
  { id: 'mabrouma', name: 'مبرومة', desc: 'Gedrehte Knafeh-Spirale mit Pistazienherz.', price: 45, priceUnit: 'kg', img: p('مبرومة .jpg'), cat: 'كنافة' },
  { id: 'osh-p', name: 'عش البلبل بالفستق', desc: 'Knusprige Knafeh-Nester mit Pistazienfüllung.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالفستق .jpg'), cat: 'كنافة' },
  { id: 'osh-c', name: 'عش البلبل بالكاجو', desc: 'Knusprige Knafeh-Nester mit Cashewfüllung.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالكاجو.jpg'), cat: 'كنافة' },
  { id: 'osh-cream', name: 'عش البلبل بكريمة الفستق', desc: 'Knusprige Knafeh-Nester mit Pistaziencreme.', price: 45, priceUnit: 'kg', img: p('عش البلبل بكريمة الفستق.jpg'), cat: 'كنافة' },
  { id: 'osh-h', name: 'عش البلبل بالبندق', desc: 'Knusprige Knafeh-Nester mit Haselnussfüllung.', price: 45, priceUnit: 'kg', img: p('عش البلبل بالبندق .png'), cat: 'كنافة' },
  // قهوة وإسبريسو
  { id: 'espresso', name: 'إسبريسو', desc: 'Dunkel, samtig, mit goldener Crema.', price: 3, img: I.esp, cat: 'قهوة وإسبريسو' },
  { id: 'creme', name: 'كافيه كريم', desc: 'Lang gezogen, mild und aromatisch.', price: 3, img: I.cc, cat: 'قهوة وإسبريسو' },
  { id: 'cappu', name: 'كابتشينو', desc: 'Seidiger Milchschaum über starkem Espresso.', price: 3.5, img: I.cap, cat: 'قهوة وإسبريسو', options: [{ label: 'Classic' }, { label: 'Oat Milk', extra: 0.5 }, { label: 'Caramel', extra: 0.6 }, { label: 'Vanilla', extra: 0.6 }] },
  { id: 'matcha', name: 'ماتشا لاتيه', desc: 'Zeremonieller Matcha mit cremiger Milch.', price: 4.6, img: I.mat, cat: 'قهوة وإسبريسو', options: o('Matcha mit Vanille', 'Matcha mit Erdbeere') },
  // مشروبات باردة
  { id: 'cola', name: 'كوكا كولا', desc: 'Eiskalt serviert, 0,33 l.', price: 2.8, img: I.cola, cat: 'مشروبات باردة' },
  { id: 'capri', name: 'كابري صن', desc: 'Fruchtig und erfrischend, für Groß und Klein.', price: 1.8, img: I.capri, cat: 'مشروبات باردة' },
  { id: 'water', name: 'مياه معدنية', desc: 'Still oder spritzig, 0,75 l.', price: 4.5, img: I.water, cat: 'مشروبات باردة', options: o('Still', 'Medium') },
]