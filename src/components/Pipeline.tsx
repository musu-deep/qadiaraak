import type { FC } from 'react'
import { Section, Eyebrow } from './primitives'
import {
  PenLine,
  ScanSearch,
  Eye,
  CheckCircle2,
  FileOutput,
  Layers,
  Eye as EyeIcon,
  History,
  Lock,
} from 'lucide-react'

const PIPELINE = [
  { icon: PenLine, title: 'إعداد', desc: 'صياغة الطلب أو المذكرة أو العقد من القالب الداخلي المعتمد.' },
  { icon: ScanSearch, title: 'تدقيق', desc: 'مراجعة الوقائع والمرفقات والالتزامات والمخاطر والمواعيد.' },
  { icon: Eye, title: 'مراجعة', desc: 'إحالة منظّمة للمختص مع الملاحظات وسجل الإصدارات.' },
  { icon: CheckCircle2, title: 'اعتماد', desc: 'توثيق القرار والجهة المعتمدة قبل أي إجراء أو إرسال.' },
  { icon: FileOutput, title: 'حفظ ومتابعة', desc: 'أرشفة النسخة النهائية وفتح المهام والاستحقاقات المرتبطة بها.' },
]

const PILLARS = [
  {
    icon: Layers,
    title: 'الاتساق',
    desc: 'تبدأ المستندات من قوالب وبنود اراك المعتمدة، وتُطبّق عليها قواعد المراجعة نفسها، فتقل الفروقات الفردية ويصبح معيار الجودة جزءاً من دورة العمل.',
  },
  {
    icon: EyeIcon,
    title: 'الرؤية',
    desc: 'تعرض لوحة واحدة الطلبات المفتوحة والعقود والقضايا والمراجعات المتأخرة والاستحقاقات القادمة، بما يتيح للإدارة رؤية العبء والمخاطر دون ملاحقة الرسائل.',
  },
  {
    icon: History,
    title: 'المساءلة',
    desc: 'لكل طلب مسؤول وموعد وحالة، ولكل مستند سجل نسخ واعتمادات، ولكل قرار أثر قابل للتتبع؛ بما يحفظ الذاكرة المؤسسية ويمنع ضياع السياق.',
  },
  {
    icon: Lock,
    title: 'التحكم',
    desc: 'تُمنح الصلاحيات بحسب الدور والجهة، ولا يُعتمد مستند أو إجراء إلا من صاحب الصلاحية، مع الفصل بين الإعداد والمراجعة والاعتماد متى تطلبت الحوكمة ذلك.',
  },
]

export const Pipeline: FC = () => (
  <Section id="pipeline" className="py-20 sm:py-28">
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>دورة المراجعة والاعتماد</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
        من المسودة إلى القرار؛ كل خطوة واضحة ومملوكة وقابلة للتتبع
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
        يربط قاضي اراك إعداد المستند بالمراجعة والاعتماد والمهام اللاحقة، حتى لا تنفصل
        المذكرة أو العقد عن القرار الذي صدر بشأنه أو الالتزامات التي نتجت عنه.
      </p>
    </div>

    <div className="reveal mt-14 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {PIPELINE.map((p, i) => (
        <div
          key={p.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy-900/60 to-navy-950/40 p-5"
        >
          <div className="absolute right-3 top-3 text-3xl font-bold text-white/5">{i + 1}</div>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-500/25 transition-transform group-hover:scale-110">
            <p.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.desc}</p>
          {i < PIPELINE.length - 1 && (
            <div className="absolute -left-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-l from-gold-500/40 to-transparent lg:block" />
          )}
        </div>
      ))}
    </div>

    <div className="reveal mt-6 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5 text-center text-sm text-gold-200">
      لا يتحول أي مستند إلى نسخة نهائية، ولا يبدأ أي إجراء خارجي، قبل اكتمال المراجعة والاعتماد بحسب الصلاحيات.
    </div>

    <div className="reveal mt-16 grid gap-5 sm:grid-cols-2">
      {PILLARS.map((p) => (
        <div
          key={p.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-gold-500/25 hover:bg-gold-500/[0.04]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-800 text-gold-300 ring-1 ring-white/10 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.desc}</p>
        </div>
      ))}
    </div>
  </Section>
)
