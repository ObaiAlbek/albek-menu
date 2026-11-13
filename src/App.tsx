import { useEffect, useMemo, useRef, useState } from 'react'
import { CakeSlice, ChevronLeft, ChevronRight, Coffee, Croissant, CupSoda, Layers, LockKeyhole, MessageCircle, Music2, Phone, Sparkles, X } from 'lucide-react'
import logo from './assets/logo.jpg'
import { categories, heroImg, items, type Item } from './data'

const eur = (n: number) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
const categoryIcons = {
  Tagesgebäcke: Croissant,
  Baklava: Layers,
  Knafeh: CakeSlice,
  'Kaffee & Espresso': Coffee,
  Kaltgetränke: CupSoda,
}

type IconProps = { size?: number; strokeWidth?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }

// lucide-react (v1+) enthält keine Markenlogos mehr, daher eigenes Instagram-Icon
function Instagram({ size = 24, strokeWidth = 2, className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const contactLinks = [
  { label: 'WhatsApp Bestellung', detail: 'Schnell & unkompliziert', href: 'https://wa.me/4915739296794', icon: MessageCircle, external: true },
  { label: 'Direkt anrufen', detail: '+49 1573 9296794', href: 'tel:+4915739296794', icon: Phone },
  { label: 'Instagram', detail: '@albek.sweets', href: 'https://www.instagram.com/albek.sweets', icon: Instagram, external: true },
  { label: 'TikTok', detail: '@albek.sweets', href: 'https://www.tiktok.com/@albek.sweets', icon: Music2, external: true },
]

function ContactWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <section
          id="contact-panel"
          role="dialog"
          aria-labelledby="contact-panel-title"
          className="contact-panel absolute bottom-[calc(100%+12px)] right-0 max-h-[75vh] w-[calc(100vw-2rem)] max-w-sm overflow-y-auto rounded-[26px] border border-gold/30 bg-cream/95 p-4 shadow-[0_24px_70px_-20px_rgba(29,28,16,.35)] backdrop-blur-xl sm:p-5"
        >
          <div className="flex items-center justify-between border-b border-gold/20 pb-3">
            <h2 id="contact-panel-title" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="size-1.5 rounded-full bg-gold-deep" />
              Wie können wir helfen?
            </h2>
            <button
              type="button"
              aria-label="Kontakt schließen"
              onClick={() => setOpen(false)}
              className="flex size-9 items-center justify-center rounded-full text-olive/65 transition hover:bg-gold/10 hover:text-olive"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="divide-y divide-gold/20">
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[74px] items-center gap-3 py-3 transition-colors hover:bg-white/50 sm:gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/15 bg-gold/10 text-gold-deep transition group-hover:bg-gold/20">
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[18px] leading-tight text-olive">{contact.label}</span>
                    <span className="mt-1 block truncate text-xs text-olive/55">{contact.detail}</span>
                  </span>
                  <ChevronRight size={17} className="shrink-0 text-gold-deep/75 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </section>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="contact-panel"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2.5 rounded-full border border-gold/35 bg-cream/95 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-olive shadow-[0_10px_30px_-12px_rgba(141,107,36,.5)] backdrop-blur transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[0_14px_34px_-12px_rgba(141,107,36,.55)] sm:px-5"
      >
        {open ? <X size={17} aria-hidden="true" /> : <MessageCircle size={17} className="text-gold-deep" aria-hidden="true" />}
        Kontakt
      </button>
    </div>
  )
}

function Card({ item, i }: { item: Item; i: number }) {
  const isArabicTag = Boolean(item.tag && /[\u0600-\u06ff]/.test(item.tag))
  const isNewTag = item.tag === 'جديدنا'
  const isArabicName = /[\u0600-\u06ff]/.test(item.name)

  return (
    <article
      className={`rise group relative flex flex-col overflow-hidden rounded-[28px] glass gold-shadow transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-16px_rgba(184,138,46,.55)] ${isNewTag ? 'new-arrival-card' : ''}`}
      style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
    >
      <div className="relative m-2 aspect-[5/4] overflow-hidden rounded-[22px]">
        <img src={item.img} alt={item.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/50 via-transparent to-white/10" />
        {item.tag && (
          <span className={`absolute left-3 top-3 flex items-center gap-1 rounded-full text-[10px] font-semibold backdrop-blur ${isNewTag ? 'new-arrival-tag px-3 py-1' : 'bg-white/75 px-2.5 py-1 text-gold-deep'} ${isArabicTag ? 'tracking-normal' : 'uppercase tracking-widest'}`}>
            <Sparkles size={isNewTag ? 12 : 10} className={isNewTag ? 'text-gold-deep' : undefined} /> <span dir={isArabicTag ? 'rtl' : undefined}>{item.tag}</span>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-2">
        <div>
          <h3 dir={isArabicName ? 'rtl' : undefined} className={`font-serif text-2xl font-semibold leading-tight text-olive ${isArabicName ? 'text-right' : ''}`}>
            {item.name}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-olive/60">{item.desc}</p>
        </div>
        {item.options && (
          <div className="flex flex-wrap gap-1.5">
            {item.options.map((op) => (
              <span key={op.label} className="rounded-full border border-olive/10 px-3 py-1 text-xs text-olive/60">
                {op.label}
                {op.extra ? ` · ${eur(op.extra)} Aufpreis` : ''}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-end pt-3.5">
          <span className="inline-flex items-baseline gap-1 text-olive">
            <span className="font-serif text-2xl font-semibold leading-none">
              {item.price.toLocaleString('de-DE', item.priceUnit === 'kg' ? undefined : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-sm font-semibold text-gold-deep">€</span>
            {item.priceUnit === 'kg' && <span className="ml-1 text-xs font-medium text-olive/55">/ kg</span>}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [cat, setCat] = useState(categories[0])
  const categoryNavRef = useRef<HTMLElement>(null)
  const [categoryScroll, setCategoryScroll] = useState({ left: false, right: false })

  const list = useMemo(() => items.filter((i) => i.cat === cat), [cat])

  useEffect(() => {
    const nav = categoryNavRef.current
    if (!nav) return

    const updateScrollState = () => {
      const maxScrollLeft = nav.scrollWidth - nav.clientWidth
      const left = nav.scrollLeft > 4
      const right = maxScrollLeft - nav.scrollLeft > 4
      setCategoryScroll((current) => current.left === left && current.right === right ? current : { left, right })
    }

    updateScrollState()
    nav.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      nav.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-12">
      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-olive text-white">
        <img src={heroImg} alt="Goldener Baklava" className="absolute inset-0 -z-10 size-full scale-110 object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive/70 via-olive/50 to-olive" />
        <div className="absolute -left-20 top-10 -z-10 size-72 rounded-full bg-gold/30 blur-3xl" style={{ animation: 'floaty 8s ease-in-out infinite' }} />
        <div className="absolute -right-24 top-40 -z-10 size-80 rounded-full bg-gold-light/20 blur-3xl" style={{ animation: 'floaty 10s ease-in-out infinite reverse' }} />

        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-10 text-center">
          <div className="rise relative">
            <div className="absolute -inset-3 rounded-full border border-gold/40" style={{ animation: 'spin-slow 40s linear infinite', borderStyle: 'dashed' }} />
            <img src={logo} alt="Albek Sweets & Ice Logo" className="size-36 rounded-full object-cover object-center shadow-[0_0_60px_rgba(201,162,74,.5)] ring-2 ring-gold/70 sm:size-44" />
          </div>
          <p className="rise mt-8 text-xs uppercase tracking-[0.4em] text-gold-light" style={{ animationDelay: '150ms' }}>
            Willkommen im Palast der Süße
          </p>
          <h1 className="rise mt-4 font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl" style={{ animationDelay: '250ms' }}>
            Orientalischer Genuss,
            <br /> <span className="gold-text italic">der verzaubert</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base" style={{ animationDelay: '350ms' }}>
            Orientalische Süßigkeiten · Eiscreme · Kaffee Spezialitäten
            <br />
            <span dir="rtl" className="mt-1 inline-block font-serif text-lg text-gold-light">حلويات شرقية - آيس كريم - قهوة مميزة</span>
          </p>
          <a
            href="#menu"
            className="rise mt-9 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light px-8 py-3.5 text-sm font-semibold tracking-wide text-olive shadow-[0_10px_40px_-8px_rgba(201,162,74,.8)] transition hover:scale-105"
            style={{ animationDelay: '450ms' }}
          >
            Speisekarte entdecken
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 rounded-t-[48px] bg-cream" />
      </header>

      {/* TABS */}
      <div id="menu" className="relative z-30 mx-auto -mt-2 max-w-3xl px-3">
        <div className="relative">
          <nav ref={categoryNavRef} aria-label="Menükategorien" className="glass gold-shadow no-scrollbar flex w-full gap-1 overflow-x-auto overscroll-x-contain scroll-smooth rounded-full p-1.5 pr-11 sm:pr-1.5">
            {categories.map((c) => {
              const Icon = categoryIcons[c as keyof typeof categoryIcons]
              const isLocked = c === 'Kaltgetränke'
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  disabled={isLocked}
                  aria-label={isLocked ? `${c}, gesperrt` : c}
                  title={isLocked ? 'Zurzeit gesperrt' : undefined}
                  className={`flex-none whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium transition-all duration-300 sm:flex-1 sm:px-4 ${
                    isLocked
                      ? 'cursor-not-allowed text-olive/40'
                      : c === cat
                        ? 'bg-olive text-gold-light shadow-lg shadow-olive/30'
                        : 'text-olive/60 hover:text-olive'
                  }`}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    {c}
                    {isLocked && <LockKeyhole size={13} strokeWidth={1.8} aria-hidden="true" />}
                  </span>
                </button>
              )
            })}
          </nav>
          {categoryScroll.left && (
            <button
              type="button"
              aria-label="Vorherige Kategorien anzeigen"
              onClick={() => categoryNavRef.current?.scrollBy({ left: -180, behavior: 'smooth' })}
              className="absolute left-1 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold/20 bg-cream/95 text-olive shadow-md backdrop-blur sm:hidden"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
          )}
          {categoryScroll.right && (
            <button
              type="button"
              aria-label="Weitere Kategorien anzeigen"
              onClick={() => categoryNavRef.current?.scrollBy({ left: 180, behavior: 'smooth' })}
              className="absolute right-1 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold/20 bg-cream/95 text-olive shadow-md backdrop-blur sm:hidden"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* MENU */}
      <main className="relative mx-auto max-w-6xl px-4 pt-12">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-gold-light/30 blur-3xl" />
        <div className="mb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">Albek Sweets &amp; Ice</p>
          <h2 key={cat} className="rise mt-2 font-serif text-4xl font-semibold text-olive sm:text-5xl">{cat}</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="size-1.5 rotate-45 bg-gold" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
        <div key={cat} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((it, i) => (
            <Card key={it.id} item={it} i={i} />
          ))}
        </div>
      </main>

      <footer className="mt-20 text-center text-xs tracking-widest text-olive/40">
        ALBEK SWEETS &amp; ICE · حلويات البيك
      </footer>
      <ContactWidget />
    </div>
  )
}
