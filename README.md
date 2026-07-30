# قاضي اراك | Qadi Araak

واجهة عربية حديثة لمنصة **قاضي اراك**، مبنية باستخدام React وTypeScript وVite وTailwind CSS.

## المتطلبات

- Node.js 20 أو أحدث
- npm 10 أو أحدث

## التشغيل المحلي

```bash
npm ci
npm run dev
```

ثم افتح العنوان الذي يظهر في الطرفية، وغالباً:

```text
http://localhost:5173
```

## أوامر المشروع

```bash
npm run dev        # تشغيل بيئة التطوير
npm run typecheck  # فحص TypeScript
npm run build      # إنشاء نسخة الإنتاج داخل dist
npm run preview    # معاينة نسخة الإنتاج
```

## البناء والنشر

يتم فحص المشروع تلقائياً عبر GitHub Actions عند كل رفع إلى الفرع `main` وعند فتح طلبات الدمج.

## التقنيات

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
