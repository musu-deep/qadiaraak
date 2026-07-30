import type { FC } from 'react'
import { ShieldCheck, Lock, Server, Scale, ArrowLeft } from 'lucide-react'
import { Section } from './primitives'

const TRUST = [
  { icon: Server, text: 'تُخزَّن داخل المملكة' },
  { icon: Lock, text: 'لا تدريب على بياناتكم' },
  { icon: ShieldCheck, text: 'نموذجٌ نملكه وحدنا' },
]

export const Hero: FC = () => (
  <Section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
    {/* Ambient background */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[120px] animate-float-slow" />
      <div className="absolute top-20 left-1/4 h-[360px] w-[360px] rounded-full bg-blue-700/15 blur-[120px] animate-float-slower" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-500/40 to-transparent" />
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-gold-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          مبنيٌّ على النظام السعودي وحده
        </div>

        <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          ذكاءٌ اصطناعيٌّ قانوني
          <br />
          يمنح مكتبكم{' '}
          <span className="text-shimmer">١٠ أضعاف الإنتاجية</span>
          <br />
          بتكلفة مستشارٍ واحد.
        </h1>

        <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          منصّة ذكاء اصطناعي قانوني مبنية على النظام السعودي وحده — تُغيّر ميزان القوّة.
          ذكاءٌ يفهم القانون السعودي بعمق، ويكشف الثغرات قبل أن تتحوّل إلى مشكلة —
          ليقدّم شغلاً أدقّ… أسرع… وبثقةٍ أكبر.
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_12px_40px_-10px_rgba(201,162,75,0.65)]"
          >
            <Scale className="h-4 w-4" />
            جرّب قضيتكم المعقّدة
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#analysis"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
          >
            شاهد كيف يعمل
          </a>
        </div>

        <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {TRUST.map((t) => (
            <li key={t.text} className="flex items-center gap-2 text-sm text-slate-300">
              <t.icon className="h-4 w-4 text-gold-400" />
              {t.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual: orbiting agents around a central scale */}
      <HeroVisual />
    </div>
  </Section>
)

const AGENTS = [
  { label: 'محلل المستندات', angle: 0 },
  { label: 'باحث القوانين', angle: 60 },
  { label: 'محلل السوابق', angle: 120 },
  { label: 'محلل الخصم', angle: 180 },
  { label: 'المراجع العدائي', angle: 240 },
  { label: 'كاتب التقرير', angle: 300 },
]

const HeroVisual: FC = () => (
  <div className="reveal relative mx-auto aspect-square w-full max-w-md">
    <div className="absolute inset-0 rounded-full border border-white/5" />
    <div className="absolute inset-[12%] rounded-full border border-white/5" />
    <div className="absolute inset-[26%] rounded-full border border-gold-500/15" />

    {/* Orbiting ring */}
    <div
      className="absolute inset-[12%] rounded-full"
      style={{ animation: 'orbit 40s linear infinite' }}
    >
      {AGENTS.map((a) => {
        const rad = (a.angle * Math.PI) / 180
        const r = 42 // % radius
        const x = 50 + r * Math.cos(rad)
        const y = 50 + r * Math.sin(rad)
        return (
          <div
            key={a.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/10 bg-navy-900/80 text-center backdrop-blur-md"
              style={{ animation: 'orbit 40s linear infinite reverse' }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              <span className="mt-1 px-1 text-[10px] leading-tight text-slate-300">{a.label}</span>
            </div>
          </div>
        )
      })}
    </div>

    {/* Center scale */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 shadow-[0_0_60px_-10px_rgba(201,162,75,0.4)] ring-1 ring-gold-500/30">
        <Scale className="h-12 w-12 text-gold-400" />
        <div className="absolute inset-0 rounded-full ring-1 ring-gold-500/20 animate-pulse-ring" />
      </div>
    </div>
  </div>
)
