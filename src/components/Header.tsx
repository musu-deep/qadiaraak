import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Menu, X, Scale } from 'lucide-react'
import { Logo, Wordmark } from './Logo'

const NAV = [
  { href: '#story', label: 'عن المنصة' },
  { href: '#analysis', label: 'إدارة الملفات' },
  { href: '#pipeline', label: 'دورة العمل' },
  { href: '#security', label: 'الحوكمة' },
  { href: '#faq', label: 'الأسئلة' },
]

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-navy-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="قاضي اراك">
          <Logo size={34} />
          <Wordmark className="text-lg text-white" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-slate-300 transition-colors hover:text-gold-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_8px_30px_-8px_rgba(201,162,75,0.6)]"
          >
            <Scale className="h-4 w-4" />
            مساحة العمل الداخلية
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-label="القائمة"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 bg-navy-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950"
          >
            <Scale className="h-4 w-4" />
            مساحة العمل الداخلية
          </a>
        </nav>
      </div>
    </header>
  )
}
