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
        قضيةٌ حقيقية، لا شرائح عرض
      </div>

      <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        جاهزين تجرّبون قضيتكم المعقّدة؟
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        اعطونا أصعب قضية في مكتبكم — حتى التي خسرتموها — ونحلّلها أمامكم في جلسة. وفيها نضبط
        معكم بنودكم وقوالبكم وهويتكم البصرية.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_14px_50px_-12px_rgba(201,162,75,0.7)]"
        >
          <Scale className="h-5 w-5" />
          احجز جلسة التحليل
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </a>
        <a
          href="#security"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
        >
          سياسة الخصوصية
        </a>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Lock className="h-3.5 w-3.5 text-gold-400" />
        ملفاتكم داخل المملكة، ولا تُستخدم في تدريب أي نموذج.
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
            منصّة قانونية ذكية تخدم مكاتب المحاماة والإدارات القانونية في المملكة العربية
            السعودية.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
            متوافق مع سدايا والأمن السيبراني
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">المقر الرئيسي</h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            السعودية، جدة، حي الشاطئ، مبنى جدة سكوير
          </p>
          <p className="mt-2 text-sm text-slate-400" dir="ltr">7053491523</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">روابط</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { href: '#analysis', label: 'تحليل القضايا' },
              { href: '#pipeline', label: 'إنتاج المستندات' },
              { href: '#security', label: 'الأمان والخصوصية' },
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
        <p>© 2026 قاضي برو. جميع الحقوق محفوظة.</p>
        <p>
          Powered by{' '}
          <a href="https://arc-sa.com/" className="text-gold-400 hover:text-gold-300">
            ARC
          </a>
        </p>
      </div>
    </div>
  </footer>
)
