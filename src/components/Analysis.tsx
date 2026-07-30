import type { FC } from 'react'
import { useState } from 'react'
import { Section, Eyebrow } from './primitives'
import {
  FileSearch,
  Gavel,
  Scale,
  Swords,
  ShieldAlert,
  ClipboardCheck,
  TrendingUp,
  Users,
} from 'lucide-react'

interface Stage {
  n: number
  icon: typeof FileSearch
  title: string
  desc: string
  detail: string
}

const STAGES: Stage[] = [
  {
    n: 1,
    icon: FileSearch,
    title: 'تحليل المستندات',
    desc: 'جدول زمني، أدلة مصنّفة، تدقيق ادعاءات، تناقضات',
    detail:
      'يرسم الجدول الزمني، ويصنّف الأدلة، ويدقّق الادعاءات مقابل ما يثبتها فعلاً، ويكشف التناقضات داخل الملف.',
  },
  {
    n: 2,
    icon: Gavel,
    title: 'البحث المتوازي',
    desc: 'إحصاء، قوانين مطبّقة، سوابق وأنماط فوز/خسارة',
    detail:
      'يحدّد القوانين المطبّقة والعناصر المطلوب إثباتها وعبء الإثبات والفجوات النظامية في القضية.',
  },
  {
    n: 3,
    icon: Scale,
    title: 'تحليل السوابق',
    desc: 'أقرب السوابق وأنماط الفوز والخسارة',
    detail:
      'يستخرج أقرب السوابق، وأنماط الفوز والخسارة، ومحاور التعليل التي عوّل عليها القضاة.',
  },
  {
    n: 4,
    icon: Swords,
    title: 'تحليل الخصم',
    desc: 'حجج الخصم، نقاط ضعفنا، استراتيجيات الرد',
    detail:
      'يبني حجج الخصم المتوقعة، ويكشف نقاط ضعفنا والإثباتات الناقصة، ويقترح استراتيجيات الرد.',
  },
  {
    n: 5,
    icon: TrendingUp,
    title: 'حساب الاحتمالية',
    desc: 'مرساة إحصائية ثم مراجعة نوعية مؤطّرة ٥–٩٥٪',
    detail:
      'يحوّل تحليل السوابق إلى موقع واضح على مقياس مفهوم، مدعوماً بأقرب السوابق وتعليل يمكن الدفاع عنه.',
  },
  {
    n: 6,
    icon: ClipboardCheck,
    title: 'التحليل العميق',
    desc: 'نقاط ضعف حرجة، توصية تسوية، تقرير سردي',
    detail:
      'يجمع مخرجات الوكلاء في تقرير قانوني سردي بالعربية، مع نقاط الضعف الحرجة وتوصية التسوية.',
  },
  {
    n: 7,
    icon: ShieldAlert,
    title: 'المراجعة العدائية',
    desc: 'كشف الهلوسة والتفاؤل المفرط حتى ثلاث جولات',
    detail:
      'يطارد الهلوسة والتفاؤل المفرط في التحليل، ويعيد المعالجة حتى ثلاث جولات قبل اعتماده.',
  },
]

export const Analysis: FC = () => {
  const [active, setActive] = useState(0)
  const stage = STAGES[active]

  return (
    <Section id="analysis" className="py-20 sm:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Eyebrow>فريقٌ كامل لكل قضية</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          فريقٌ كامل يحلّل قضيتك عبر ٧ مراحل
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          لكل قضية، يعمل عدّة وكلاء ذكاء متخصصين بالتوازي: يقرؤون مستنداتك، ويبحثون في
          السوابق، ويستبقون الخصم، ثم يراجع بعضهم عمل بعض قبل أن يصل التحليل إليك — مثل
          غرفة مداولة لا نموذجاً واحداً.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Stages list */}
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
                    <div
                      className={`font-semibold ${isActive ? 'text-white' : 'text-slate-200'}`}
                    >
                      {s.title}
                    </div>
                    <div className="truncate text-xs text-slate-400">{s.desc}</div>
                  </div>
                  <s.icon
                    className={`h-5 w-5 shrink-0 ${isActive ? 'text-gold-400' : 'text-slate-500'}`}
                  />
                </button>
              </li>
            )
          })}
        </ol>

        {/* Detail card */}
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

            {/* progress */}
            <div className="mt-8">
              <div className="flex justify-between text-xs text-slate-400">
                <span>تقدّم التحليل</span>
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

      {/* Verdict strip */}
      <div className="reveal mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-8">
        <div className="flex items-start gap-3">
          <Users className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">عدّة وكلاء بالتوازي</div>
            <p className="text-sm text-slate-400">غرفة مداولة لا نموذج واحد</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">مراجعٌ عدائي</div>
            <p className="text-sm text-slate-400">حتى ثلاث جولات ضد الهلوسة</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-1 h-5 w-5 text-gold-400" />
          <div>
            <div className="font-semibold text-white">تقرير سردي بالعربية</div>
            <p className="text-sm text-slate-400">مع توصية تسوية واضحة</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
