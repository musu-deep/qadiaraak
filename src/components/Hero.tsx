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
} from 'lucide-react'
import { Section } from './primitives'

const TRUST = [
  { icon: Building2, text: 'منصة داخلية خاصة بمجموعة اراك' },
  { icon: Lock, text: 'صلاحيات وسريّة وفق الأدوار' },
  { icon: ShieldCheck, text: 'اعتماد مهني قبل الإغلاق والنشر' },
]

const WORKLIST = [
  { title: 'مراجعة عقد مورد استراتيجي', meta: 'قيد المراجعة', icon: FileCheck2 },
  { title: 'مذكرة ملف تنفيذي', meta: 'بانتظار الاعتماد', icon: Scale },
  { title: 'إنذار سداد ومستحقات', meta: 'إجراء اليوم', icon: Clock3 },
]

export const Hero: FC = () => (
  <Section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_13%,rgba(201,162,75,0.16),transparent_27%),radial-gradient(circle_at_14%_24%,rgba(37,99,235,0.16),transparent_24%),linear-gradient(180deg,#091426_0%,#07111f_58%,#081526_100%)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-28 right-[10%] h-[440px] w-[440px] rounded-full bg-gold-500/10 blur-[125px] animate-float-slow" />
      <div className="absolute bottom-0 left-[8%] h-[340px] w-[340px] rounded-full bg-blue-700/15 blur-[125px] animate-float-slower" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-500/45 to-transparent" />
    </div>

    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/[0.06] px-4 py-1.5 text-xs font-medium text-gold-300">
          <Sparkles className="h-3.5 w-3.5" />
          منصة الإدارة القانونية الداخلية لمجموعة اراك
        </div>

        <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          <span className="text-shimmer">محامي اراك</span>
          <br />
          غرفة التشغيل القانونية
          <br />
          لفريق اراك الداخلي
        </h1>

        <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          منصة موحّدة تنظّم أعمال المحامين الداخليين في مجموعة اراك: من الوقاية ومراجعة
          العقود والسياسات، إلى إدارة الملفات اليومية والتحصيل والتنفيذ، مع متابعة دقيقة
          ومسؤوليات واضحة واعتماد مهني منضبط.
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#pipeline"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_12px_40px_-10px_rgba(201,162,75,0.65)]"
          >
            <BriefcaseBusiness className="h-4 w-4" />
            استعرض دورة العمل
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#security"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10"
          >
            ضوابط السرية والحوكمة
          </a>
        </div>

        <ul className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {TRUST.map((item) => (
            <li key={item.text} className="flex items-center gap-2 text-sm text-slate-300">
              <item.icon className="h-4 w-4 text-gold-400" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <HeroVisual />
    </div>
  </Section>
)

const HeroVisual: FC = () => (
  <div className="reveal relative mx-auto w-full max-w-2xl">
    <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gold-500/15 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-10 left-4 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />

    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#172842] via-[#0d192c] to-[#081221] p-4 shadow-[0_28px_100px_-38px_rgba(0,0,0,0.9)] sm:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_34%),radial-gradient(circle_at_78%_16%,rgba(201,162,75,0.22),transparent_22%)]" />

      <div className="relative grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0a1424]">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/10 bg-navy-950/55 px-4 py-3 text-xs backdrop-blur-md">
            <span className="font-semibold text-white">فريق الشؤون القانونية</span>
            <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-gold-200">
              جلسة مراجعة داخلية
            </span>
          </div>

          <svg viewBox="0 0 760 760" className="absolute inset-0 h-full w-full" aria-label="فريق محامي اراك في اجتماع قانوني احترافي">
            <defs>
              <linearGradient id="room" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#172a46" />
                <stop offset="55%" stopColor="#0d192c" />
                <stop offset="100%" stopColor="#08111e" />
              </linearGradient>
              <linearGradient id="goldLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f1d58d" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="skin1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e1b596" />
                <stop offset="100%" stopColor="#b87c5b" />
              </linearGradient>
              <linearGradient id="skin2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d9a881" />
                <stop offset="100%" stopColor="#9b6548" />
              </linearGradient>
              <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#263c5c" />
                <stop offset="100%" stopColor="#101b2e" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="18" />
              </filter>
            </defs>

            <rect width="760" height="760" fill="url(#room)" />
            <path d="M0 0h760v198C600 146 520 104 382 98 225 91 117 144 0 226V0z" fill="url(#goldLight)" opacity="0.72" />
            <circle cx="585" cy="150" r="112" fill="#c9a24b" opacity="0.12" filter="url(#softGlow)" />
            <path d="M72 468h616l58 292H12l60-292z" fill="#0a1220" />
            <path d="M95 482h570l39 214H56l39-214z" fill="#18243a" stroke="#c9a24b" strokeOpacity="0.24" />
            <path d="M146 530h468" stroke="#e9c97a" strokeOpacity="0.18" />

            <circle cx="208" cy="292" r="64" fill="url(#skin1)" />
            <path d="M150 276c5-54 38-87 83-79 42 7 66 42 60 85-13-18-33-27-58-27-27 0-49 15-85 21z" fill="#101a2b" />
            <path d="M105 526c12-130 50-190 111-204h13c61 18 99 77 111 204l-117 58-118-58z" fill="url(#suit)" />
            <path d="M193 355l28 45 28-45" stroke="#f8fafc" strokeWidth="14" strokeLinecap="round" />
            <path d="M213 397l8 73 10-73" stroke="#c9a24b" strokeWidth="10" />

            <circle cx="386" cy="268" r="58" fill="url(#skin2)" />
            <path d="M334 254c4-46 37-73 78-67 37 6 59 36 55 76-18-13-36-19-56-17-29 3-45 19-77 8z" fill="#111b2c" />
            <path d="M286 523c13-120 47-174 103-189h12c56 16 89 70 102 189l-109 53-108-53z" fill="#182a46" />
            <path d="M365 329l24 40 25-40" stroke="#f7f7f5" strokeWidth="13" strokeLinecap="round" />

            <circle cx="564" cy="292" r="64" fill="url(#skin1)" />
            <path d="M507 288c-3-48 28-88 72-91 42-3 74 27 80 68-16-12-35-18-57-16-34 2-55 20-95 39z" fill="#0e1929" />
            <path d="M452 526c15-129 51-188 112-204h13c61 17 98 77 112 204l-119 58-118-58z" fill="#1a2d49" />
            <path d="M540 356l28 45 27-45" stroke="#f8fafc" strokeWidth="14" strokeLinecap="round" />

            <rect x="293" y="486" width="177" height="110" rx="16" fill="#0b1526" stroke="#c9a24b" strokeOpacity="0.34" />
            <rect x="315" y="510" width="133" height="9" rx="4.5" fill="#c9a24b" opacity="0.8" />
            <rect x="315" y="535" width="96" height="7" rx="3.5" fill="#94a3b8" opacity="0.55" />
            <rect x="315" y="557" width="119" height="7" rx="3.5" fill="#94a3b8" opacity="0.35" />
          </svg>

          <div className="absolute bottom-4 right-4 left-4 z-10 rounded-2xl border border-white/10 bg-navy-950/70 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">اجتماع اللجنة القانونية</div>
                <div className="mt-1 text-xs text-slate-400">مراجعة عقد، تقييم مخاطر، واعتماد الإجراء التالي</div>
              </div>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[1.6rem] border border-white/10 bg-navy-950/75 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-400">لوحة التشغيل القانونية</div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">واجهة محامي اراك</h3>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">نشط</span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 xl:grid-cols-1">
              {[
                ['عقود قيد المراجعة', '18'],
                ['ملفات يومية نشطة', '26'],
                ['تحصيل وتنفيذ', '9'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 xl:px-4">
                  <div className="text-[10px] leading-snug text-slate-400 xl:text-xs">{label}</div>
                  <div className="mt-2 text-xl font-extrabold text-white xl:text-2xl">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">سير العمل</div>
                <h4 className="mt-1 font-semibold text-white">أولويات اليوم</h4>
              </div>
              <span className="text-xs text-gold-300">محدث الآن</span>
            </div>

            <div className="mt-4 space-y-3">
              {WORKLIST.map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-navy-950/55 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-300 ring-1 ring-gold-500/20">
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
        </div>
      </div>
    </div>
  </div>
)
