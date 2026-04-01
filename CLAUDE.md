# Digital Net — Project Intelligence

## Company
- Name: Digital Net
- Type: პრემიუმ ქართული ვებ-დეველოპმენტის სტუდია
- Geography: საქართველო + საერთაშორისო
- Mission: ნებისმიერი ბიზნესისთვის პროფესიონალური ვებსაიტი + ბრენდინგი
- Tone: კორპორატიული, სანდო, პრემიუმ

## Tech Stack (NEVER deviate)
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict, no 'any')
- Styling: Tailwind CSS + shadcn/ui
- Animations: Framer Motion
- Forms: React Hook Form + Zod
- Icons: Lucide React
- Theme: next-themes (dark/light toggle)

## Design System
- Dark BG: #0A0A0A | Light BG: #F8FAFC
- Accent: #2563EB (blue)
- Font: Inter (Google Fonts)
- Style: dhero.studio დონე — მინიმალისტური, პრემიუმ, კორპორატიული
- NO neon, NO cheap gradients, NO shadows that look fake

## Logo
- Text-based: "Digital" (white/black) + "Net" (blue #2563EB)
- Font: Inter 700 (Bold)
- No icon needed — typographic logo only

## Bilingual (CRITICAL)
- Georgian = default, English = toggle
- ALL text in /lib/translations.ts
- Language toggle: top right navbar

## Theme
- Dark + Light mode both fully supported
- Toggle button in navbar (sun/moon icon)
- next-themes provider in layout.tsx

## Pricing
- Never show exact prices
- Always: "საწყისი ფასიდან X₾" + "კონტაქტი ზუსტი ფასისთვის"

## Portfolio
- No real projects yet — use realistic placeholder cards
- Show: project name + industry + fake metric (+X% result) + gradient placeholder image

## Folder Structure
```
digital-net/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/Navbar.tsx
│   ├── layout/Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── LogoStrip.tsx
│       ├── Portfolio.tsx
│       ├── AboutStrip.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       ├── HowWeWork.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── lib/
│   └── translations.ts
└── CLAUDE.md
```
