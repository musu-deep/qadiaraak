import type { FC } from 'react'
import { Section } from './primitives'
import { Scale, ArrowLeft, Lock, ShieldCheck } from 'lucide-react'
import { Logo, Wordmark } from './Logo'

export const CTA: FC = () => (
  <Section id="cta" className="py-20 sm:py-28">
    <div className="reveal relative overflow-hidden rounded-[2rem] border border-gold-500/25 bg-gradient-to-b from-navy-900/80 to-navy-950/60 p-8 text-center sm:p-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-300">
        عملٌ قانوني منظم من الطلب إلى الإغلاق
      </div>

      <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        ملف واحد، مسؤول واحد، ومسار واضح لا يضيع
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        يجمع محامي اراك الوقاية والعقود والقضايا والمواعيد والتحصيل في مساحة تشغيل واحدة،
        ويمنح الإدارة رؤيةً أوضح دون أن ينتزع القرار من المختص القانوني.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#analysis"
          className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_14px_50px_-12px_rgba(201,162,75,0.7)]"
        >
          <Scale className="h-5 w-5" />
          ابدأ من دورة الملف
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </a>
        <a
          href="#security"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
        >
          ضوابط الحوكمة والخصوصية
        </a>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Lock className="h-3.5 w-3.5 text-gold-400" />
        للاستخدام الداخلي المصرح به في مجموعة اراك للتنمية.
      </p>
    </div>
  </Section>
)

export const Footer: FC = () => (
  <footer className="border-t border-white/5 px-5 py-12 sm:px-8">
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={34} />
            <Wordmark className="text-lg text-white" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            منصة الإدارة القانونية الداخلية لمجموعة اراك للتنمية؛ لتنظيم الوقاية والعقود
            والملفات اليومية والتحصيل والتنفيذ والذاكرة المؤسسية.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
            منصة داخلية مستقلة خاصة باراك
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">مجموعة اراك للتنمية</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-400" dir="ltr">
            <p><a href="https://araak.org" className="transition-colors hover:text-gold-300">araak.org</a></p>
            <p><a href="mailto:info@araak.org" className="transition-colors hover:text-gold-300">info@araak.org</a></p>
            <p>#araakdevelopment</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">روابط داخلية</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { href: '#analysis', label: 'دورة الملف القانوني' },
              { href: '#pipeline', label: 'المراجعة والاعتماد' },
              { href: '#security', label: 'الحوكمة والخصوصية' },
              { href: '#faq', label: 'الأسئلة الشائعة' },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-slate-400 transition-colors hover:text-gold-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© 2026 محامي اراك — مجموعة اراك للتنمية. جميع الحقوق محفوظة.</p>
        <p>تطوير اليوم .. استثمار في الغد</p>
      </div>
    </div>
  </footer>
)
