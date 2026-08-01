import type { FC } from 'react'
import { Section, Eyebrow } from './primitives'
import { ShieldCheck, Scale } from 'lucide-react'

export const Story: FC = () => (
  <Section id="story" className="py-20 sm:py-28">
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>لماذا قاضي اراك؟</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
        لأن العمل القانوني لا يبدأ عند وقوع المشكلة؛ بل قبلها بوقتٍ كافٍ.
      </h2>
    </div>

    <div className="reveal relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900/80 to-navy-950/60 p-8 gold-glow sm:p-12">
      <ShieldCheck className="absolute -top-3 right-6 h-16 w-16 text-gold-500/15" />
      <div className="space-y-5 text-base leading-relaxed text-slate-200 sm:text-lg">
        <p>
          بُني قاضي اراك ليجمع أعمال الشؤون القانونية المتفرقة في مسار واحد: مراجعة
          اللوائح والسياسات والعقود، رصد المخاطر، إدارة الملفات اليومية، متابعة العملاء
          والموردين، ثم التحصيل والتنفيذ عند انتهاء آجال السداد.
        </p>
        <p>
          بدلاً من الاعتماد على الرسائل والملفات المنفصلة، يمنح المنصة كل طلبٍ قانوني
          مسؤولاً وحالةً وموعداً وسجل قرارات؛ حتى تعرف الإدارة ما الذي أُنجز، وما المتأخر،
          وما الذي يحتاج تدخلاً قبل أن تتضاعف تكلفته.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-sm font-medium text-slate-300">
          منصةٌ خاصة باراك، صُممت حول دورة عملها القانونية ومسؤوليات فرقها.
        </p>
        <a
          href="#analysis"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
        >
          <Scale className="h-4 w-4" />
          استعرض مساحات العمل
        </a>
      </div>
    </div>
  </Section>
)
