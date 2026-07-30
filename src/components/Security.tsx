import type { FC } from 'react'
import { Section, Eyebrow } from './primitives'
import { Server, Lock, BrainCircuit, ShieldCheck } from 'lucide-react'

const POINTS = [
  {
    icon: Server,
    title: 'تُخزَّن داخل المملكة',
    desc: 'كل ما يُحفظ بصفة دائمة — قضاياكم ومستنداتكم وحسابكم — يقيم على خوادم داخل مراكز بيانات سعودية، ولا يُكرَّر خارج المملكة.',
  },
  {
    icon: Lock,
    title: 'لا تدريب على بياناتكم',
    desc: 'مستنداتكم لا تُستخدم لتدريب أي نموذج — لا نماذجنا ولا أي طرف ثالث — ولا تُباع ولا تُشارك لأي غرض تسويقي.',
  },
  {
    icon: BrainCircuit,
    title: 'نموذجٌ نملكه وحدنا',
    desc: 'تُعالَج قضاياكم عبر نموذجٍ مُدرَّب خصيصاً نملكه ونشغّله على خوادم مخصّصة لنا — لا تمرّ بياناتكم على أي خدمة ذكاء اصطناعي عامة.',
  },
  {
    icon: ShieldCheck,
    title: 'تشفيرٌ وعزلٌ ومساءلة',
    desc: 'تشفير TLS 1.3 أثناء النقل و AES-256 أثناء التخزين، وعزلٌ تام بين حسابات العملاء، وسجلّ وصولٍ موثَّق لكل اطّلاع.',
  },
]

export const Security: FC = () => (
  <Section id="security" className="py-20 sm:py-28">
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>أين تذهب بياناتكم</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
        «أرفع ملفات موكّلي لمن؟» — هذا أول سؤال، وهذه إجابته.
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
        نعامل سرّ مهنة موكّليكم كما تعاملونه. إليكم أين تذهب بياناتكم بالضبط — لا عموميات.
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

    {/* Compliance badges */}
    <div className="reveal mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900/60 to-navy-950/40 p-8 text-center">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {['سدايا', 'الهيئة الوطنية للأمن السيبراني', 'نظام حماية البيانات الشخصية'].map(
          (b) => (
            <div
              key={b}
              className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3"
            >
              <ShieldCheck className="h-5 w-5 text-gold-400" />
              <span className="text-sm font-medium text-slate-200">{b}</span>
            </div>
          ),
        )}
      </div>
      <p className="mt-6 max-w-2xl mx-auto text-sm leading-relaxed text-slate-400">
        متوافق مع نظام حماية البيانات الشخصية ومتطلبات الهيئة السعودية للبيانات والذكاء
        الاصطناعي (سدايا)، ومعايير الهيئة الوطنية للأمن السيبراني.
      </p>
    </div>
  </Section>
)
