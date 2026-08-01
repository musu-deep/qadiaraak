import type { FC } from 'react'
import { useState } from 'react'
import { Section, Eyebrow } from './primitives'
import {
  Inbox,
  ShieldCheck,
  FileSearch,
  Handshake,
  BellRing,
  Gavel,
  ClipboardCheck,
  Users,
  ShieldAlert,
} from 'lucide-react'

interface Stage {
  n: number
  icon: typeof Inbox
  title: string
  desc: string
  detail: string
}

const STAGES: Stage[] = [
  {
    n: 1,
    icon: Inbox,
    title: 'استقبال الطلب وتصنيفه',
    desc: 'الجهة الطالبة، الأولوية، المسؤول، الموعد المستهدف',
    detail:
      'يُسجَّل الطلب القانوني من بدايته مع الجهة الطالبة ونوعه ودرجة خطورته وأولويته، ثم يُسند إلى المسؤول المناسب بموعد واضح للمعالجة.',
  },
  {
    n: 2,
    icon: ShieldCheck,
    title: 'المراجعة الوقائية',
    desc: 'لوائح وسياسات وإجراءات وسجل مخاطر',
    detail:
      'تُراجع اللوائح والسياسات والإجراءات الداخلية لاكتشاف التعارضات والفجوات قبل أن تتحول إلى مطالبة أو نزاع، وتُحدَّث المخاطر وإجراءات المعالجة.',
  },
  {
    n: 3,
    icon: FileSearch,
    title: 'التقييم القانوني',
    desc: 'وقائع، مستندات، التزامات، خيارات وتوصية',
    detail:
      'تُنظَّم الوقائع والمستندات والالتزامات ذات الصلة، وتُحدد نقاط القوة والضعف والخيارات النظامية، ثم تُرفع توصية قابلة للمراجعة والاعتماد.',
  },
  {
    n: 4,
    icon: Handshake,
    title: 'العقود والأطراف',
    desc: 'عملاء، موردون، شركاء، التزامات وملاحظات',
    detail:
      'تُربط العقود بالأطراف والالتزامات والمواعيد والمراسلات، مع توثيق الملاحظات والتعديلات والنسخة المعتمدة وسجل كامل لدورة العقد.',
  },
  {
    n: 5,
    icon: BellRing,
    title: 'المواعيد والتنبيهات',
    desc: 'استحقاقات، آجال، جلسات، تجديدات وتصعيد',
    detail:
      'تُراقب آجال السداد والتجديد والجلسات والردود النظامية، وتُرسل التنبيهات والتصعيدات بحسب حساسية الموعد ومستوى المسؤولية.',
  },
  {
    n: 6,
    icon: Gavel,
    title: 'التحصيل والتنفيذ',
    desc: 'تفاهم، مطالبة، إجراء قانوني، تنفيذ ومتابعة',
    detail:
      'عند انتهاء آجال السداد ينتقل الملف إلى مسار التحصيل والتنفيذ وفق تدرج واضح يبدأ بالتفاهم والمطالبة وينتهي بالإجراء القانوني ومتابعة التنفيذ.',
  },
  {
    n: 7,
    icon: ClipboardCheck,
    title: 'الإغلاق والتعلّم',
    desc: 'نتيجة، قرار، أثر مالي، درس مستفاد وإجراء وقائي',
    detail:
      'يُغلق الملف بعد توثيق النتيجة والقرار والأثر المالي، وتُحوَّل الدروس المستفادة إلى تحديث في عقد أو سياسة أو إجراء وقائي يمنع تكرار المشكلة.',
  },
]

export const Analysis: FC = () => {
  const [active, setActive] = useState(0)
  const stage = STAGES[active]

  return (
    <Section id="analysis" className="py-20 sm:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Eyebrow>دورة الملف القانوني</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          سبع مراحل تحفظ الطلب من لحظة وروده حتى إغلاقه
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          لا يكتفي قاضي اراك بحفظ المستندات؛ بل يحوّل كل ملف إلى مسار مسؤوليات ومواعيد
          واعتمادات، ويربط المعالجة اليومية بالوقاية والتحصيل والتنفيذ والتعلّم المؤسسي.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <ol className="reveal relative flex flex-col gap-2">
          {STAGES.map((s, i) => {
            const isActive = i === active
            return (
              <li key={s.n}>
                <button
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-right transition-all ${
                    isActive
                      ? 'border-gold-500/40 bg-gold-500/10'
                      : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-navy-800 text-slate-300 group-hover:text-gold-300'
                    }`}
                  >
                    {s.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className={`font-semibold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {s.title}
                    </div>
                    <div className="truncate text-xs text-slate-400">{s.desc}</div>
                  </div>
                  <s.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                </button>
              </li>
            )
          })}
        </ol>

        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900/70 to-navy-950/50 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-500/30">
                <stage.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs font-medium text-gold-400">المرحلة {stage.n} من ٧</div>
                <h3 className="font-display text-xl font-bold text-white">{stage.title}</h3>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-200">{stage.detail}</p>

            <div className="mt-8">
              <div className="flex justify-between text-xs text-slate-400">
                <span>تقدّم دورة الملف</span>
                <span>{Math.round((stage.n / 7) * 100)}٪</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-l from-gold-500 to-gold-300 transition-all duration-500"
                  style={{ width: `${(stage.n / 7) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-8">
        <div className="flex items-start gap-3">
          <Users className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">مسؤول واضح لكل ملف</div>
            <p className="text-sm text-slate-400">لا طلب بلا مالك أو موعد أو حالة</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">تصعيد بحسب المخاطر</div>
            <p className="text-sm text-slate-400">الأولوية تتبع الأثر والموعد والحساسية</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">اعتماد بشري موثّق</div>
            <p className="text-sm text-slate-400">القرار والمسؤولية المهنية لدى المختص</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
