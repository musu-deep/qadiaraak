import type { FC } from 'react'
import { Section, Eyebrow } from './primitives'
import { Quote, Scale } from 'lucide-react'

export const Story: FC = () => (
  <Section id="story" className="py-20 sm:py-28">
    <div className="reveal mx-auto max-w-3xl text-center">
      <Eyebrow>قصة حقيقية</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
        قضيةٌ خسرها مكتبه. أراد أن يُثبت أن قاضي برو مجرّد ضجّة.
      </h2>
    </div>

    <div className="reveal relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-navy-900/80 to-navy-950/60 p-8 gold-glow sm:p-12">
      <Quote className="absolute -top-3 right-6 h-16 w-16 text-gold-500/15" />
      <div className="space-y-5 text-base leading-relaxed text-slate-200 sm:text-lg">
        <p>
          استشاريٌّ قانونيٌّ كبير قرّر أن يكشف زيف الضجّة حول قاضي برو. اختار بنفسه أقسى
          اختبارٍ ممكن — قضيةً خسرها مكتبه أمام المحكمة — ورفعها إلى النظام. حلّلها قاضي
          برو، وخرج بنتيجةٍ واحدة: كانت قابلةً للكسب.
        </p>
        <p>
          قرأ الاستشاري التحليل سطراً سطراً، يبحث عن خطأٍ يُثبت به موقفه. لم يجد. بل وجد
          الحجج التي فاتت على فريقه. كانت القضية بأكثر من{' '}
          <span className="font-bold text-gold-300">٢٠٠٬٠٠٠ ريال</span> — خسروها لأنهم لم
          يروا ما رآه قاضي برو في خمس عشرة دقيقة.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-sm font-medium text-slate-300">
          لا نطلب منكم أن تصدّقوا القصة. نطلب أن تختبروها.
        </p>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
        >
          <Scale className="h-4 w-4" />
          اعطونا أصعب قضية
        </a>
      </div>
    </div>
  </Section>
)
