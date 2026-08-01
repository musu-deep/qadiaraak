import type { FC } from 'react'
import { useState } from 'react'
import { Section, Eyebrow } from './primitives'
import { ChevronDown } from 'lucide-react'

const ITEMS = [
  {
    q: 'هل محامي اراك منصة عامة أو منتج للبيع؟',
    a: 'لا. محامي اراك منصة داخلية مستقلة خُصصت لتنظيم أعمال الشؤون القانونية والمحامين الداخليين في مجموعة اراك للتنمية، وتُبنى وظائفها وصلاحياتها ومساراتها حول احتياجات المجموعة وفرقها.',
  },
  {
    q: 'هل تحل المنصة محل المختص القانوني؟',
    a: 'لا. تساعد المنصة في التنظيم والبحث والتذكير والصياغة الأولية والتوثيق، لكن الرأي النهائي والقرار والتوقيع والمسؤولية المهنية تبقى لدى المختص القانوني وصاحب الصلاحية.',
  },
  {
    q: 'ما مساحات العمل التي تغطيها؟',
    a: 'تغطي المساحة الوقائية، والعمل القانوني اليومي، والعقود والأطراف، ومتابعة القضايا والمواعيد، ثم التحصيل والتنفيذ، إضافة إلى التقارير وسجل المخاطر والدروس المستفادة.',
  },
  {
    q: 'كيف تبدأ الجهة طلباً قانونياً؟',
    a: 'تُسجل الجهة الطلب وتحدد نوعه وأولويته والمرفقات والموعد المطلوب. بعد ذلك يُصنف الطلب ويُسند إلى المسؤول، وتظهر حالته وملاحظاته واعتماداته حتى الإغلاق.',
  },
  {
    q: 'كيف تُدار العقود والقوالب؟',
    a: 'تُحفظ القوالب والبنود المعتمدة داخل مكتبة اراك القانونية، وتُربط العقود بالأطراف والالتزامات والمواعيد وسجل النسخ والملاحظات، مع منع اعتماد النسخة النهائية قبل اكتمال المراجعة.',
  },
  {
    q: 'من يستطيع الاطلاع على الملفات؟',
    a: 'الوصول ليس عاماً داخل المجموعة؛ بل يُمنح بحسب الدور والجهة والحاجة إلى المعرفة. ويمكن تقييد الملفات الحساسة وتوزيع صلاحيات الإعداد والمراجعة والاعتماد على أشخاص مختلفين.',
  },
  {
    q: 'كيف ينتقل الملف إلى التحصيل والتنفيذ؟',
    a: 'عند بلوغ الاستحقاق وانتهاء المهلة المعتمدة، ينتقل الملف وفق تدرج واضح من التذكير والتفاهم إلى المطالبة الرسمية ثم الإجراء القانوني والتنفيذ، مع توثيق كل خطوة ونتيجتها.',
  },
]

export const FAQ: FC = () => {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="faq" className="py-20 sm:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Eyebrow>أسئلة الاستخدام الداخلي</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          ما الذي يقدمه محامي اراك؟ ومن يملك القرار داخله؟
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          إجابات عملية توضّح نطاق المنصة وحدودها ومسؤوليات المستخدمين في دورة العمل القانونية.
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
