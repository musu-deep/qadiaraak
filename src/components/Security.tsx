import type { FC } from 'react'
import { Section, Eyebrow } from './primitives'
import { Building2, Lock, UserCheck, ShieldCheck } from 'lucide-react'

const POINTS = [
  {
    icon: Building2,
    title: 'نطاق داخلي محدد',
    desc: 'قاضي اراك مخصص لأعمال مجموعة اراك للتنمية وفرقها المخولة، ولا يُقدَّم بوصفه خدمة عامة أو منصة تجارية لجهات خارج المجموعة.',
  },
  {
    icon: Lock,
    title: 'صلاحيات بحسب الدور',
    desc: 'يُمنح الوصول وفق الجهة والدور والحاجة الفعلية للعمل، مع تقييد الملفات الحساسة وعدم إتاحة المحتوى لكل المستخدمين بصورة افتراضية.',
  },
  {
    icon: UserCheck,
    title: 'اعتماد مهني بشري',
    desc: 'المخرجات المساعدة لا تُعد رأياً قانونياً نهائياً بذاتها؛ فالمراجعة والقرار والتوقيع والمسؤولية تبقى لدى المختص القانوني وصاحب الصلاحية.',
  },
  {
    icon: ShieldCheck,
    title: 'سجلٌ قابل للتتبع',
    desc: 'تُوثق حالات الملفات والملاحظات والإصدارات والاعتمادات والتواريخ، بما يوضح من قام بالإجراء ومتى ولماذا، ويحفظ الذاكرة المؤسسية للقرارات.',
  },
]

export const Security: FC = () => (
  <Section id="security" className="py-20 sm:py-28">
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>الحوكمة والخصوصية</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
        السرية لا تُترك للاجتهاد؛ بل تُدار بالصلاحيات والمراجعة والتوثيق
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
        صُممت تجربة قاضي اراك حول مبدأ الحاجة إلى المعرفة، وفصل المسؤوليات، وعدم اعتماد
        أي مخرج قانوني دون مراجعة المختص المخول.
      </p>
    </div>

    <div className="reveal mt-14 grid gap-5 sm:grid-cols-2">
      {POINTS.map((p) => (
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

    <div className="reveal mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900/60 to-navy-950/40 p-8 text-center">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {['سرية الملفات القانونية', 'أقل قدر لازم من الصلاحيات', 'توثيق القرارات والاعتمادات'].map((b) => (
          <div
            key={b}
            className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3"
          >
            <ShieldCheck className="h-5 w-5 text-gold-400" />
            <span className="text-sm font-medium text-slate-200">{b}</span>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
        تُطبَّق السياسات التقنية والتنظيمية التفصيلية وفق البنية المعتمدة لدى مجموعة اراك،
        ولا تُعرض في المنصة وعود أمنية أو شهادات امتثال غير موثقة.
      </p>
    </div>
  </Section>
)
