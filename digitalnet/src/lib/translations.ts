export type Language = "ka" | "en";

export const translations = {
  nav: {
    home: { ka: "მთავარი", en: "Home" },
    services: { ka: "სერვისები", en: "Services" },
    portfolio: { ka: "პორტფოლიო", en: "Portfolio" },
    about: { ka: "ჩვენს შესახებ", en: "About" },
    contact: { ka: "კონტაქტი", en: "Contact" },
    startProject: { ka: "დაიწყე პროექტი", en: "Start a Project" },
  },
  hero: {
    headlineStart: {
      ka: "ვქმნით ვებსაიტებს რომლებიც",
      en: "We build websites that",
    },
    rotatingWords: {
      ka: [
        "ბიზნესს ზრდის",
        "კლიენტებს იზიდავს",
        "ნდობას აყალიბებს",
        "გამოირჩევა",
        "ყიდის",
      ],
      en: [
        "grow business",
        "attract clients",
        "build trust",
        "stand out",
        "sell",
      ],
    },
    subtext: {
      ka: "გარდავქმნით იდეებს ციფრულ გამოცდილებად, რომელიც კლიენტებს იზიდავს და ბიზნესს ანვითარებს — საქართველოდან მთელ მსოფლიოში.",
      en: "We transform ideas into digital experiences that attract clients and grow businesses — from Georgia to the world.",
    },
    ctaServices: { ka: "ჩვენი სერვისები", en: "Our Services" },
    ctaStart: { ka: "პროექტის დაწყება", en: "Start a Project" },
  },
  logoStrip: {
    title: { ka: "ისინი გვენდობიან", en: "They trust us" },
  },
  portfolio: {
    title: {
      ka: "როგორ დავეხმარეთ სხვებს წარმატებაში",
      en: "How we helped others succeed",
    },
    subtitle: {
      ka: "placeholder პროექტები — მალე რეალური სამუშაოები",
      en: "Placeholder projects — real work coming soon",
    },
    viewProject: { ka: "პროექტის ნახვა", en: "View Project" },
    services: {
      ka: "ბრენდინგი • დიზაინი • დეველოპმენტი",
      en: "Branding • Design • Development",
    },
    projects: [
      {
        name: { ka: "კავკასია რესტორანი", en: "Kavkasia Restaurant" },
        industry: { ka: "რესტორანი", en: "Restaurant" },
        metric: "+120% Traffic",
        gradient: "from-blue-600/20 to-purple-600/20",
      },
      {
        name: { ka: "იურიდიული პარტნიორი", en: "Legal Partner" },
        industry: { ka: "იურიდიული", en: "Legal" },
        metric: "+85% Conversions",
        gradient: "from-emerald-600/20 to-cyan-600/20",
      },
      {
        name: { ka: "ტექფლოუ", en: "TechFlow" },
        industry: { ka: "ტექნოლოგია", en: "Technology" },
        metric: "+200% Leads",
        gradient: "from-orange-600/20 to-red-600/20",
      },
      {
        name: { ka: "მწვანე ბაზარი", en: "Green Market" },
        industry: { ka: "ელ-კომერცია", en: "E-commerce" },
        metric: "+150% Sales",
        gradient: "from-green-600/20 to-lime-600/20",
      },
      {
        name: { ka: "სტუდია არქი", en: "Studio Archi" },
        industry: { ka: "არქიტექტურა", en: "Architecture" },
        metric: "+95% Engagement",
        gradient: "from-violet-600/20 to-pink-600/20",
      },
      {
        name: { ka: "ფინანსური ჰაბი", en: "Finance Hub" },
        industry: { ka: "ფინანსები", en: "Finance" },
        metric: "+180% Growth",
        gradient: "from-sky-600/20 to-indigo-600/20",
      },
    ],
  },
  aboutStrip: {
    line1: {
      ka: "ჩვენ ვართ ციფრული სტუდია, შექმნილი შედეგებზე ორიენტირებული გუნდის მიერ.",
      en: "We are a digital studio, built by a results-driven team.",
    },
    line2: {
      ka: "ვქმნით პროფესიონალურ ვებსაიტებს, რომლებიც ბიზნესს ზრდის — საქართველოდან მთელ მსოფლიოში.",
      en: "We create professional websites that grow businesses — from Georgia to the world.",
    },
    ctaContact: { ka: "კონტაქტი", en: "Contact" },
    ctaAbout: { ka: "ჩვენს შესახებ", en: "About Us" },
  },
  services: {
    title: { ka: "სრული ციფრული პაკეტი", en: "Full Digital Package" },
    subtitle: {
      ka: "ყველაფერი რაც ბიზნესს სჭირდება — ერთ სახლში",
      en: "Everything your business needs — under one roof",
    },
    contactForPrice: {
      ka: "კონტაქტი ზუსტი ფასისთვის",
      en: "Contact for exact pricing",
    },
    mostPopular: { ka: "ყველაზე პოპულარული", en: "Most Popular" },
    items: [
      {
        title: { ka: "ბრენდინგი", en: "Branding" },
        subServices: {
          ka: [
            "ლოგო დიზაინი",
            "ბრენდ-ბუქი",
            "ფერთა პალიტრა",
            "ტიპოგრაფია",
            "სოც-მედია კომპლექტი",
          ],
          en: [
            "Logo Design",
            "Brand Book",
            "Color Palette",
            "Typography",
            "Social Media Kit",
          ],
        },
        price: { ka: "საწყისი ფასიდან 800₾", en: "Starting from 800₾" },
      },
      {
        title: {
          ka: "ვებ დიზაინი + დეველოპმენტი",
          en: "Web Design + Development",
        },
        subServices: {
          ka: [
            "UI/UX დიზაინი",
            "Landing Page",
            "კორპორატიული საიტი",
            "E-commerce",
            "მობილური აპლიკაცია",
          ],
          en: [
            "UI/UX Design",
            "Landing Page",
            "Corporate Website",
            "E-commerce",
            "Mobile Application",
          ],
        },
        price: {
          ka: "საწყისი ფასიდან 1,500₾",
          en: "Starting from 1,500₾",
        },
      },
      {
        title: { ka: "სრული პაკეტი", en: "Full Package" },
        subServices: {
          ka: [
            "ბრენდინგი + ვებსაიტი",
            "SEO ოპტიმიზაცია",
            "სოც-მედია მარკეტინგი",
            "ტექნიკური მხარდაჭერა",
            "ანალიტიკა და რეპორტინგი",
          ],
          en: [
            "Branding + Website",
            "SEO Optimization",
            "Social Media Marketing",
            "Technical Support",
            "Analytics & Reporting",
          ],
        },
        price: {
          ka: "საწყისი ფასიდან 3,000₾",
          en: "Starting from 3,000₾",
        },
        popular: true,
      },
    ],
  },
  stats: {
    items: [
      {
        value: 50,
        suffix: "+",
        label: { ka: "დასრულებული პროექტი", en: "Completed Projects" },
      },
      {
        value: 5,
        suffix: "+",
        label: { ka: "წლის გამოცდილება", en: "Years of Experience" },
      },
      {
        value: 98,
        suffix: "%",
        label: {
          ka: "კლიენტის კმაყოფილება",
          en: "Client Satisfaction",
        },
      },
      {
        value: 3,
        suffix: "+",
        label: { ka: "ქვეყანა", en: "Countries" },
      },
    ],
  },
  howWeWork: {
    title: {
      ka: "როგორ ვაცოცხლებთ შენს იდეას",
      en: "How we bring your idea to life",
    },
    steps: [
      {
        number: "01",
        title: { ka: "აღმოჩენა და გაგება", en: "Discovery & Understanding" },
        description: {
          ka: "ვსწავლობთ თქვენს ბიზნესს, მიზნებს და სამიზნე აუდიტორიას. ვაანალიზებთ კონკურენტებს და ვადგენთ პროექტის მოთხოვნებს.",
          en: "We study your business, goals, and target audience. We analyze competitors and define project requirements.",
        },
        duration: { ka: "1-2 დღე", en: "1-2 days" },
      },
      {
        number: "02",
        title: {
          ka: "სტრატეგია და დაგეგმვა",
          en: "Strategy & Planning",
        },
        description: {
          ka: "ვქმნით სტრატეგიას, wireframe-ებს და პროექტის გეგმას. ვადგენთ ვიზუალურ მიმართულებას და ტექნიკურ არქიტექტურას.",
          en: "We create strategy, wireframes, and project plans. We define visual direction and technical architecture.",
        },
        duration: { ka: "2-3 დღე", en: "2-3 days" },
      },
      {
        number: "03",
        title: {
          ka: "დიზაინი და დეველოპმენტი",
          en: "Design & Development",
        },
        description: {
          ka: "ვქმნით უნიკალურ დიზაინს და ვაშენებთ ვებსაიტს თანამედროვე ტექნოლოგიებით. ყოველი ეტაპი თქვენთან შეთანხმებული.",
          en: "We create unique designs and build websites with modern technologies. Every stage is coordinated with you.",
        },
        duration: { ka: "5-7 დღე", en: "5-7 days" },
      },
      {
        number: "04",
        title: {
          ka: "გაშვება და ოპტიმიზაცია",
          en: "Launch & Optimization",
        },
        description: {
          ka: "ვტესტავთ, ვაოპტიმიზებთ და ვუშვებთ პროექტს. ვუზრუნველყოფთ ტექნიკურ მხარდაჭერას და შემდგომ განვითარებას.",
          en: "We test, optimize, and launch the project. We provide technical support and further development.",
        },
        duration: { ka: "1-2 დღე", en: "1-2 days" },
      },
    ],
  },
  contact: {
    title: {
      ka: "მოდი ავაშენოთ რაღაც გასაოცარი",
      en: "Let's build something amazing",
    },
    form: {
      name: { ka: "სახელი", en: "Name" },
      email: { ka: "ელ-ფოსტა", en: "Email" },
      message: { ka: "შეტყობინება", en: "Message" },
      budget: { ka: "ბიუჯეტი", en: "Budget" },
      service: { ka: "სერვისი", en: "Service" },
      submit: { ka: "გაგზავნა", en: "Send" },
      budgetOptions: {
        ka: [
          "800₾ - 1,500₾",
          "1,500₾ - 3,000₾",
          "3,000₾+",
          "განვიხილოთ",
        ],
        en: [
          "800₾ - 1,500₾",
          "1,500₾ - 3,000₾",
          "3,000₾+",
          "Let's discuss",
        ],
      },
      serviceOptions: {
        ka: ["ბრენდინგი", "ვებ დიზაინი", "დეველოპმენტი", "სრული პაკეტი"],
        en: ["Branding", "Web Design", "Development", "Full Package"],
      },
      namePlaceholder: {
        ka: "თქვენი სახელი",
        en: "Your name",
      },
      emailPlaceholder: {
        ka: "თქვენი ელ-ფოსტა",
        en: "Your email",
      },
      messagePlaceholder: {
        ka: "მოგვიყევით თქვენი პროექტის შესახებ...",
        en: "Tell us about your project...",
      },
      selectBudget: {
        ka: "აირჩიეთ ბიუჯეტი",
        en: "Select budget",
      },
    },
    info: {
      whatsapp: {
        label: { ka: "მოგვწერეთ WhatsApp-ზე", en: "Message us on WhatsApp" },
        number: "+995 574 44 13 51",
        button: {
          ka: "WhatsApp-ზე დაწერა",
          en: "Message on WhatsApp",
        },
      },
      email: {
        label: { ka: "ელ-ფოსტა", en: "Email" },
        value: "info@digitalnet.ge",
      },
      location: {
        label: { ka: "მდებარეობა", en: "Location" },
        value: { ka: "თბილისი, საქართველო", en: "Tbilisi, Georgia" },
      },
      worldwide: {
        ka: "ვემსახურებით კლიენტებს მთელ მსოფლიოში",
        en: "We serve clients worldwide",
      },
    },
  },
  footer: {
    tagline: {
      ka: "ბიზნესის ციფრული სახე",
      en: "The digital face of business",
    },
    menu: { ka: "მენიუ", en: "Menu" },
    servicesTitle: { ka: "სერვისები", en: "Services" },
    geography: { ka: "გეოგრაფია", en: "Geography" },
    contactTitle: { ka: "კონტაქტი", en: "Contact" },
    serviceLinks: {
      ka: ["ბრენდინგი", "ვებ დიზაინი", "დეველოპმენტი", "სრული პაკეტი"],
      en: ["Branding", "Web Design", "Development", "Full Package"],
    },
    geoLinks: {
      ka: ["საქართველო", "საერთაშორისო პროექტები"],
      en: ["Georgia", "International Projects"],
    },
    contactLinks: ["WhatsApp", "Email", "Instagram", "Facebook"],
    copyright: {
      ka: "© 2024 Digital Net. ყველა უფლება დაცულია.",
      en: "© 2024 Digital Net. All rights reserved.",
    },
  },
} as const;
