'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
    },
    hero: {
      create: 'Create.',
      build: 'Build.',
      launch: 'Launch.',
      tagline: 'Built in Amman. Made for the Region.',
      subtitle: 'Serving the MENA Region and beyond',
    },
    services: {
      whatWeDo: 'WHAT WE DO',
      title: 'Digital products, built for real people.',
      subtitle: 'From the first customer-facing page to the systems behind your business, we design and build technology that makes work simpler and growth easier.',
      websiteDesign: 'WEBSITE DESIGN',
      websiteTitle: 'Websites & Web Platforms',
      websiteDesc: 'Custom websites, customer portals, and dashboards built for mobile, tuned for speed, and designed to turn clear ideas into action.',
      mobileCategory: 'CROSS-PLATFORM',
      mobileTitle: 'Mobile Apps',
      mobileDesc: 'iOS and Android products for bookings, communities, and everyday workflows, with clear journeys, useful notifications, and dependable foundations.',
      saasCategory: 'SAAS PLATFORMS',
      saasTitle: 'Cloud Systems & ERPs',
      saasDesc: 'Connected operations, finance, and admin systems that bring fragmented work into one secure view, with reporting teams can act on.',
    },
    trust: {
      title: 'TRUST.',
      para1: 'At Creative Networks, we believe in building long-term partnerships, not just delivering projects. We prioritize transparency in every interaction, ensuring you\'re always informed and in control.',
      para2: 'Our commitment to performance and delivery excellence means we don\'t just meet deadlines—we exceed expectations while maintaining the highest standards of quality and innovation.',
      direction: 'Direction',
      directionDesc: 'Strategic guidance and clear roadmap to ensure your project aligns with business goals.',
      speed: 'Speed',
      speedDesc: 'Fast delivery and rapid iteration cycles without compromising on quality or reliability.',
      craft: 'Craft',
      craftDesc: 'Exceptional design quality, clean code architecture, and long-term maintainability.',
    },
    experience: {
      title: '7+ Years of Experience',
      subtitle: 'in building digital products, platforms, and internal systems.',
    },
    clients: {
      title: 'Trusted by Industry Leaders',
    },
    testimonials: {
      quote1: 'Creative Networks transformed our digital presence. Their attention to detail and commitment to excellence is unmatched. The team delivered beyond our expectations.',
      quote2: 'Working with Creative Networks has been a game-changer. They understood our vision and brought it to life with innovative solutions and flawless execution.',
      quote3: 'The professionalism and technical expertise of Creative Networks is outstanding. They delivered a complex system on time and within budget.',
    },
    cta: {
      label: 'Get started',
      title: 'ARE YOU READY?',
      button: 'Get Started',
    },
    portfolio: {
      title: 'A Closer Look at What We\'ve Built',
      subtitle: 'Strategy → Design → Build → Launch',
      sd13Label: 'Sports Academy Platform',
      sd13Name: 'SD13',
      sd13Desc: 'A modern sports academy platform with high-performance landing page and full administrative system for content and athlete management.',
      infinityLabel: 'Full Facility System',
      infinityName: 'Infinity Sport',
      infinityDesc: 'Complete system for the whole facility including landing page, finance management for tracking payments and invoices, and internal portal for staff operations.',
      sahatiLabel: 'Healthcare Mobile App',
      sahatiName: 'Sahati Link',
      sahatiSubtitle: 'Mustashfa Amal Hospital',
      sahatiDesc: 'Healthcare communication system connecting patients with doctors through chat, calls, and secure HD video consultations with online booking.',
      features: 'Key Features',
    },
    contact: {
      getInTouch: 'GET IN TOUCH',
      title: 'Contact Us',
      subtitle: 'Let\'s discuss your project and bring your vision to life',
      followUs: 'Follow Us',
      name: 'Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: 'Your phone number',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      sendMessage: 'Send Message',
    },
    footer: {
      description: 'Creative Networks is a leading software development agency serving the MENA region and beyond. We build high-performance digital products that drive business growth.',
      services: 'Services',
      company: 'Company',
      ourWork: 'Our Work',
      allRights: 'All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'أعمالنا',
      contact: 'اتصل بنا',
      getInTouch: 'تواصل معنا',
    },
    hero: {
      create: 'أنشئ.',
      build: 'ابنِ.',
      launch: 'اطلق.',
      tagline: 'الأسرع في المنطقة',
      subtitle: 'نخدم منطقة الشرق الأوسط وشمال أفريقيا وما بعدها',
    },
    services: {
      whatWeDo: 'ماذا نفعل',
      title: 'منتجات رقمية مصممة للناس.',
      subtitle: 'من أول صفحة يتفاعل معها عميلك إلى الأنظمة التي تدير عملك، نصمم ونبني تقنية تسهّل العمل وتدعم النمو.',
      websiteDesign: 'تصميم المواقع',
      websiteTitle: 'المواقع ومنصات الويب',
      websiteDesc: 'مواقع إلكترونية وبوابات عملاء ولوحات تحكم مخصصة، سريعة ومتوافقة مع الجوال، ومصممة لتحويل الأفكار الواضحة إلى خطوات عملية.',
      mobileCategory: 'متعدد المنصات',
      mobileTitle: 'تطبيقات الجوال',
      mobileDesc: 'تطبيقات iOS وAndroid للحجوزات والمجتمعات والمهام اليومية، بتجارب واضحة وإشعارات مفيدة وأساس تقني موثوق.',
      saasCategory: 'منصات SAAS',
      saasTitle: 'أنظمة السحابة وأنظمة ERP',
      saasDesc: 'أنظمة مترابطة للتشغيل والمالية والإدارة تجمع العمل المتفرق في مكان آمن، مع تقارير تساعد الفرق على اتخاذ القرار.',
    },
    trust: {
      title: 'الثقة.',
      para1: 'في Creative Networks، نؤمن ببناء شراكات طويلة الأمد، وليس فقط تقديم المشاريع. نعطي الأولوية للشفافية في كل تفاعل، مما يضمن أن تكون دائمًا على اطلاع وفي السيطرة.',
      para2: 'التزامنا بالتميز في الأداء والتسليم يعني أننا لا نلتزم بالمواعيد النهائية فحسب — بل نتجاوز التوقعات مع الحفاظ على أعلى معايير الجودة والابتكار.',
      direction: 'التوجيه',
      directionDesc: 'إرشاد استراتيجي وخارطة طريق واضحة لضمان محاذاة مشروعك مع أهداف العمل.',
      speed: 'السرعة',
      speedDesc: 'تسليم سريع ودورات تكرار سريعة دون المساس بالجودة أو الموثوقية.',
      craft: 'الحرفية',
      craftDesc: 'جودة تصميم استثنائية، وهندسة كود نظيفة، وقابلية صيانة طويلة الأمد.',
    },
    experience: {
      title: 'أكثر من 7 سنوات من الخبرة',
      subtitle: 'في بناء المنتجات الرقمية والمنصات والأنظمة الداخلية.',
    },
    clients: {
      title: 'موثوق به من قبل قادة الصناعة',
    },
    testimonials: {
      quote1: 'حولت Creative Networks وجودنا الرقمي. انتباههم للتفاصيل والتزامهم بالتميز لا مثيل له. قدم الفريق ما يتجاوز توقعاتنا.',
      quote2: 'كان العمل مع Creative Networks نقطة تحول. فهموا رؤيتنا وحولوها إلى واقع من خلال حلول مبتكرة وتنفيذ لا تشوبه شائبة.',
      quote3: 'الاحترافية والخبرة التقنية لـ Creative Networks استثنائية. قاموا بتسليم نظام معقد في الوقت المحدد وفي حدود الميزانية.',
    },
    cta: {
      label: 'ابدأ',
      title: 'هل أنت مستعد؟',
      button: 'ابدأ الآن',
    },
    portfolio: {
      title: 'نظرة أقرب على ما بنيناه',
      subtitle: 'الاستراتيجية → التصميم → البناء → الإطلاق',
      sd13Label: 'منصة أكاديمية رياضية',
      sd13Name: 'SD13',
      sd13Desc: 'منصة أكاديمية رياضية حديثة مع صفحة هبوط عالية الأداء ونظام إداري كامل لإدارة المحتوى والرياضيين.',
      infinityLabel: 'نظام المنشأة الكامل',
      infinityName: 'إنفينيتي سبورت',
      infinityDesc: 'نظام كامل للمنشأة بأكملها بما في ذلك صفحة الهبوط وإدارة المالية لتتبع المدفوعات والفواتير والبوابة الداخلية لعمليات الموظفين.',
      sahatiLabel: 'تطبيق الرعاية الصحية',
      sahatiName: 'صحة لينك',
      sahatiSubtitle: 'مستشفى الأمل',
      sahatiDesc: 'نظام اتصال للرعاية الصحية يربط المرضى بالأطباء من خلال الدردشة والمكالمات واستشارات الفيديو عالية الدقة الآمنة مع الحجز عبر الإنترنت.',
      features: 'الميزات الرئيسية',
    },
    contact: {
      getInTouch: 'تواصل معنا',
      title: 'اتصل بنا',
      subtitle: 'دعنا نناقش مشروعك ونحقق رؤيتك',
      followUs: 'تابعنا',
      name: 'الاسم',
      namePlaceholder: 'اسمك',
      phone: 'رقم الهاتف',
      phonePlaceholder: 'رقم هاتفك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'بريدك@example.com',
      sendMessage: 'إرسال الرسالة',
    },
    footer: {
      description: 'Creative Networks هي وكالة تطوير برمجيات رائدة تخدم منطقة الشرق الأوسط وشمال أفريقيا وما بعدها. نبني منتجات رقمية عالية الأداء تدفع نمو الأعمال.',
      services: 'الخدمات',
      company: 'الشركة',
      ourWork: 'أعمالنا',
      allRights: 'جميع الحقوق محفوظة.',
    },
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', lang)
    }
  }

  // Set initial dir and lang on mount
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

