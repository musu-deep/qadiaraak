import type { FC } from 'react'
import { useState } from 'react'
import { Section, Eyebrow } from './primitives'
import { ChevronDown } from 'lucide-react'

const ITEMS = [
  {
    q: 'هل تحلّ المنصّة محلّ المحامي؟',
    a: 'المنصّة تُسرِّع عمل المحامي ولا تحلّ محلّ حكمه المهني. كل إجابةٍ وكل تحليلٍ يصلكم مسنوداً بالمادة والحكم تفتحونهما وتتحقّقون منهما بأنفسكم — لا انطباعات بلا مرجع. ويمرّ كل تحليل قضيةٍ على مراجعٍ عدائيٍّ داخلي يطارد الهلوسة والتفاؤل المفرط حتى ثلاث جولات قبل أن يصلكم. أمّا القرار النهائي والتوقيع والمسؤولية المهنية فتبقى للمحامي كما هي اليوم.',
  },
  {
    q: 'ما الفرق بين قاضي برو والأدوات العامة؟',
    a: 'الأدوات العامة مدرّبةٌ على الإنترنت كلّه، تُجيب بثقةٍ حتى حين تخطئ، وبياناتها تخرج خارج المملكة. قاضي برو مبنيٌّ على النظام السعودي وحده — أكثر من مئة ألف حكمٍ وثمانية عشر ألف مادةٍ مفهرسة — يستشهد بالمصدر لا بالتخمين، ويعمل داخل بنود مكتبكم وقوالبه ودورة اعتماده. وبياناتكم تبقى داخل المملكة ولا يُدرَّب عليها أي نموذج.',
  },
  {
    q: 'هل نحتاج فريق تقنية أو بنية تحتية؟',
    a: 'لا بنيةَ تحتية ولا فريقَ تقنية — المنصّة سحابية، تفتحونها من المتصفّح وتبدأون. ويتكفّل فريقنا بإعداد مساحات العمل وإدخال بنودكم وقوالبكم وهويتكم البصرية وتدريب فريقكم. عادةً يكون مكتبكم جاهزاً للعمل خلال أيام، لا أشهر.',
  },
  {
    q: 'كيف تُدمج بنود وقوالب مكتبنا؟',
    a: 'ترسلون لنا قوالبكم وبنودكم المعتمدة وشعاركم وألوانكم وترويستكم، ونُعدّها لكم داخل بنك البنود ومكتبة القوالب. بعدها يبدأ كل مستندٍ جديد من معاييركم تلقائياً، ويخرج كل تصديرٍ معتمد بهويتكم الرسمية — دون عملٍ يدويٍّ متكرر.',
  },
  {
    q: 'هل تغطّون أنواع القضايا كافة؟',
    a: 'نعم، التركيز كلّه على النظام السعودي عمداً — فالعمق في قانونٍ واحد أنفع من السطحية في عشرة. وتغطّي المنصّة الطيف الأوسع من المنازعات: التجارية والعمّالية والعقارية والمدنية وغيرها — من الاستشارة والبحث، إلى تحليل القضية وتوقّع مسارها، إلى صياغة المستندات ومراجعتها واعتمادها.',
  },
  {
    q: 'كيف يُحدَّد التسعير؟',
    a: 'التسعير يُبنى على حجم مكتبكم وعدد مستخدميكم واحتياجكم، ويصلكم في عرضٍ مخصّص بعد جلسةٍ قصيرة. وأمّا «بتكلفة مستشارٍ واحد» فلأن المنصّة تمنح فريقكم كاملاً قدراتِ بحثٍ وتحليلٍ وصياغة تُضاعف إنتاجيتهم، مقابل جزءٍ من كلفة توظيف مستشارٍ أقدمٍ واحد.',
  },
  {
    q: 'هل نملك بياناتنا؟',
    a: 'بياناتكم ملكٌ لكم وحدكم. يمكنكم تصدير قضاياكم ومستنداتكم في أي وقت، وعند إنهاء الاشتراك تُسلَّم لكم نسخةٌ كاملة ثم تُحذف من خوادمنا. لا حبسَ للبيانات ولا رهائن.',
  },
]

export const FAQ: FC = () => {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="faq" className="py-20 sm:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Eyebrow>أسئلة الشركاء</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          أسئلةٌ يطرحها الشركاء — بإجاباتٍ صريحة
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          ما يدور في ذهن من يتّخذ القرار قبل أن يُدخل المنصّة إلى مكتبه. سؤالٌ آخر؟ اسألوا
          فريقنا مباشرة.
        </p>
      </div>

      <div className="reveal mx-auto mt-12 max-w-3xl space-y-3">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen
                  ? 'border-gold-500/30 bg-gold-500/5'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-right"
              >
                <span className="font-display text-base font-bold text-white sm:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
