import type { FC } from 'react'
import {
  ShieldCheck,
  Lock,
  Building2,
  BriefcaseBusiness,
  ArrowLeft,
  Sparkles,
  FileCheck2,
  Clock3,
  Scale,
  ClipboardCheck,
} from 'lucide-react'
import { Section } from './primitives'

const TRUST = [
  { icon: Building2, text: 'منصة داخلية خاصة بمجموعة اراك' },
  { icon: Lock, text: 'صلاحيات وسريّة وفق الأدوار' },
  { icon: ShieldCheck, text: 'اعتماد مهني قبل الإغلاق والنشر' },
]

const METRICS = [
  { label: 'عقود قيد المراجعة', value: '18' },
  { label: 'ملفات يومية نشطة', value: '26' },
  { label: 'تحصيل وتنفيذ', value: '9' },
]

const WORKLIST = [
  { title: 'مراجعة عقد مورد استراتيجي', meta: 'قيد المراجعة', icon: FileCheck2 },
  { title: 'مذكرة ملف تنفيذي', meta: 'بانتظار الاعتماد', icon: Scale },
  { title: 'إنذار سداد ومستحقات', meta: 'إجراء اليوم', icon: Clock3 },
]

export const Hero: FC = () => (
  <Section id="top" className="min-h-[880px] overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <img
        src="/hero-legal-cinematic.svg"
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#06101c]/45 via-[#07111f]/58 to-[#050b13]/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(201,162,75,0.10),transparent_28%),linear-gradient(180deg,rgba(4,10,18,0.20),rgba(4,10,18,0.62))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-500/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>

    <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative z-10">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-navy-950/55 px-4 py-1.5 text-xs font-medium text-gold-300 shadow-lg backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5" />
          منصة الإدارة القانونية الداخلية لمجموعة اراك
        </div>

        <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.15] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
          <span className="text-shimmer">محامي اراك</span>
          <br />
          غرفة التشغيل القانونية
          <br />
          للإدارة الداخلية
        </h1>

        <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-200 drop-shadow-md sm:text-lg">
          منصة موحّدة تنظّم أعمال الإدارة القانونية في مجموعة اراك: من الوقاية ومراجعة
          العقود والسياسات، إلى إدارة الملفات اليومية والتحصيل والتنفيذ، مع متابعة دقيقة
          ومسؤوليات واضحة واعتماد مهني منضبط.
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#pipeline"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_12px_40px_-10px_rgba(201,162,75,0.75)]"
          >
            <BriefcaseBusiness className="h-4 w-4" />
            استعرض دورة العمل
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#security"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/45 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-gold-500/35 hover:bg-navy-950/70"
          >
            ضوابط السرية والحوكمة
          </a>
        </div>

        <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {TRUST.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-navy-950/30 px-3 py-1.5 text-sm text-slate-200 backdrop-blur-md"
            >
              <item.icon className="h-4 w-4 text-gold-400" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <HeroDashboard />
    </div>
  </Section>
)

const HeroDashboard: FC = () => (
  <div className="reveal relative mx-auto w-full max-w-2xl">
    <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gold-500/15 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-12 left-8 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl" />

    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#081321]/76 p-4 shadow-[0_32px_120px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_82%_12%,rgba(201,162,75,0.18),transparent_23%)]" />

      <div className="relative rounded-[1.65rem] border border-white/10 bg-navy-950/72 p-5 backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div>
            <div className="text-xs text-slate-400">لوحة التشغيل القانونية</div>
            <h2 className="mt-1 font-display text-xl font-bold text-white">واجهة محامي اراك</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            نشط
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-4 transition-colors hover:border-gold-500/25 hover:bg-gold-500/[0.06] sm:px-4"
            >
              <div className="text-[10px] leading-snug text-slate-400 sm:text-xs">{metric.label}</div>
              <div className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs text-slate-400">سير العمل</div>
              <h3 className="mt-1 font-semibold text-white">أولويات اليوم</h3>
            </div>
            <span className="text-xs text-gold-300">محدث الآن</span>
          </div>

          <div className="mt-4 space-y-3">
            {WORKLIST.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-navy-950/55 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-gold-500/25"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 text-gold-300">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white">{item.title}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.meta}</div>
                  </div>
                </div>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20">
                <ClipboardCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">اعتماد اللجنة القانونية</div>
                <div className="mt-1 text-xs text-slate-400">مراجعة مكتملة والإجراء التالي موثّق</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 px-5 py-4 text-center">
            <div>
              <div className="text-2xl font-extrabold text-gold-300">87٪</div>
              <div className="mt-1 text-[10px] text-gold-100/70">اكتمال دورة الملف</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
