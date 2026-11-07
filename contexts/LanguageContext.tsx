'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

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
      webImageAlt: 'A team collaborating around a laptop in a bright workspace',
      mobileImageAlt: 'A developer working with code on a laptop and smartphone',
      systemsImageAlt: 'Colleagues reviewing business information together',
    },
    story: {
      eyebrow: 'BUILT IN AMMAN · MADE FOR THE REGION',
      heading: 'Great technology starts with people.',
      step1: '01 / DISCOVER', title1: 'Start with the right question.', copy1: 'We turn a business challenge into a clear, useful digital experience.',
      step2: '02 / DESIGN & BUILD', title2: 'Make every interaction count.', copy2: 'Web and mobile products shaped around how people actually work and live.',
      step3: '03 / GROW', title3: 'Give good ideas room to grow.', copy3: 'Reliable platforms and connected systems, ready for what comes next.',
      alt1: 'A diverse team discussing a project around a laptop', alt2: 'A developer working with code on a laptop and smartphone', alt3: 'Colleagues reviewing a project and business data together',
      button: 'Explore our work',
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
      ourWork: 'OUR WORK',
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
      impact: 'Impact',
      seeMore: 'See more projects',
      showFewer: 'Show fewer projects',
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
      webImageAlt: 'فريق يتعاون على تصميم مشروع رقمي في مساحة عمل عصرية',
      mobileImageAlt: 'مطور يستخدم الهاتف والحاسوب أثناء العمل على البرمجيات',
      systemsImageAlt: 'زملاء يراجعون مشروعًا وبيانات في المكتب',
    },
    story: {
      eyebrow: 'من عمّان إلى المنطقة',
      heading: 'التقنية الناجحة تبدأ بالناس.',
      step1: '01 / الاستكشاف', title1: 'نبدأ بالسؤال الصحيح.', copy1: 'نحوّل تحديات الأعمال إلى تجارب رقمية واضحة ومفيدة.',
      step2: '02 / التصميم والبناء', title2: 'نجعل كل تفاعل مهمًا.', copy2: 'نبني مواقع وتطبيقات تناسب طريقة عمل الناس وحياتهم اليومية.',
      step3: '03 / النمو', title3: 'نمنح الأفكار مساحة للنمو.', copy3: 'منصات موثوقة وأنظمة مترابطة جاهزة للخطوة التالية.',
      alt1: 'فريق متنوع يناقش مشروعًا حول حاسوب محمول', alt2: 'مطور يعمل على الشيفرة باستخدام الحاسوب والهاتف', alt3: 'زملاء يراجعون مشروعًا وبيانات الأعمال معًا',
      button: 'استكشف أعمالنا',
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
      title: 'محل ثقة روّاد الصناعة',
    },
    testimonials: {
      quote1: 'غيّرت Creative Networks حضورنا الرقمي. اهتمامهم بالتفاصيل والتزامهم بالجودة واضح في كل خطوة، وقدّم الفريق أكثر مما توقعنا.',
      quote2: 'كان العمل مع Creative Networks نقطة تحول. فهموا رؤيتنا وحولوها إلى واقع بحلول مبتكرة وتنفيذ متقن.',
      quote3: 'احترافية Creative Networks وخبرتهم التقنية مميزة. سلّموا نظامًا معقدًا في الوقت المحدد وضمن الميزانية.',
    },
    cta: {
      label: 'ابدأ الآن',
      title: 'هل أنت مستعد؟',
      button: 'ابدأ مشروعك',
    },
    portfolio: {
      ourWork: 'أعمالنا',
      title: 'نظرة أقرب على ما بنيناه',
      subtitle: 'الاستراتيجية ← التصميم ← البناء ← الإطلاق',
      sd13Label: 'منصة أكاديمية رياضية', sd13Name: 'SD13',
      sd13Desc: 'منصة حديثة للأكاديمية تضم موقعًا سريعًا ونظامًا إداريًا متكاملًا لإدارة المحتوى واللاعبين.',
      infinityLabel: 'نظام متكامل للمنشأة', infinityName: 'Infinity Sports',
      infinityDesc: 'نظام متكامل للمنشأة يضم الموقع وإدارة المدفوعات والفواتير وبوابة داخلية لعمليات الموظفين.',
      sahatiLabel: 'تطبيق للرعاية الصحية', sahatiName: 'Sahati Link', sahatiSubtitle: 'مستشفى الأمل',
      sahatiDesc: 'نظام تواصل صحي يربط المرضى بالأطباء عبر المحادثات والمكالمات والاستشارات المرئية الآمنة مع الحجز عبر الإنترنت.',
      features: 'الميزات الرئيسية', impact: 'الأثر', seeMore: 'عرض المزيد من المشاريع', showFewer: 'عرض مشاريع أقل',
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

  useEffect(() => {
    if (window.localStorage.getItem('creative-networks-language') === 'ar') setLanguage('ar')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }, [language])

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
    window.localStorage.setItem('creative-networks-language', lang)
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

