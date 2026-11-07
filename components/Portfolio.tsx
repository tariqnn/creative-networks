'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

const portfolioItems = [
  {
    label: 'Sports Website & Mobile App',
    name: 'PlayUp',
    description: 'A sports platform built for Amman, bringing players together to find games, book sports venues, join tournaments, and connect with the local community through its website and companion mobile app.',
    impact: 'A connected digital experience for discovering and taking part in local sports.',
    features: ['Discover football, basketball, dodgeball, and tennis', 'Find games and book a place', 'Explore venues and sports academies', 'Tournaments, leaderboards, and community'],
    tech: ['Next.js', 'PostgreSQL', 'Flutter', 'Firebase'],
    image: '/photography/project-playup.jpg',
    imageAlt: 'A community football game on an outdoor field',
    accentColor: 'from-accent/10 to-transparent',
    metricColor: 'text-accent',
    metric: 'Website + App',
    metricLabel: 'Digital Platforms',
    link: 'https://palyo.vercel.app/',
  },
  {
    label: 'Sports Academy Platform',
    name: 'SD13',
    description: 'A modern sports academy platform with high-performance landing page and full administrative system for content and athlete management.',
    impact: 'Increased online registrations by 45% and reduced manual coordination time for coaches by 30%.',
    features: ['High-speed landing page', 'Full admin panel', 'Multi-role permissions', 'Analytics tracking'],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/photography/project-sd13.jpg',
    imageAlt: 'A youth football coach guiding academy players',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+45%',
    metricLabel: 'Registrations',
  },
  {
    label: 'Full Facility System',
    name: 'Infinity Sports',
    description: 'Complete system for the whole facility including landing page, finance management for tracking payments and invoices, and internal portal for staff operations.',
    impact: 'Cut payment tracking time in half and gave management real-time visibility on all revenue streams.',
    features: ['Landing page', 'Finance dashboard', 'Internal portal', 'Real-time metrics'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: '/photography/project-infinity.jpg',
    imageAlt: 'An indoor sports court at a community facility',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '50%',
    metricLabel: 'Time Saved',
  },
  {
    label: 'Healthcare Mobile App',
    name: 'Sahati Link',
    description: 'Healthcare communication system connecting patients with doctors through chat, calls, and secure HD video consultations with online booking.',
    impact: 'Reduced missed appointments by 35% and improved patient response times with instant communication tools.',
    features: ['Real-time communication', 'HD video calls', 'Online appointments', 'HIPAA-grade security'],
    tech: ['React Native', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    image: '/photography/project-healthcare.jpg',
    imageAlt: 'Doctor conducting an online consultation using a laptop',
    accentColor: 'from-emerald/20 to-transparent',
    metricColor: 'text-emerald',
    metric: '-35%',
    metricLabel: 'Missed Appts',
  },
  {
    label: 'E-Commerce Platform',
    name: 'Nexora Market',
    description: 'Advanced ecommerce platform featuring secure user authentication, dynamic product listings, and a seamless cart and checkout experience with real-time stock syncing.',
    impact: '40% faster load times, reduced cart abandonment, and zero overselling thanks to real-time data syncing.',
    features: ['Secure auth & role management', 'Live inventory syncing', 'Dynamic product catalog', 'Optimized checkout'],
    tech: ['Laravel', 'React', 'JavaScript', 'AWS', 'Firebase'],
    image: '/photography/project-commerce.jpg',
    imageAlt: 'Customer shopping online with a smartphone',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+40%',
    metricLabel: 'Faster Loads',
  },
  {
    label: 'Social Media Analytics',
    name: 'PulseMetrics',
    description: 'A real-time analytics dashboard that visualizes engagement, impressions, reach trends, and content KPIs for content creators and marketing teams.',
    impact: 'Teams reduced reporting time by 70% and gained actionable insights instantly.',
    features: ['Real-time analytics', 'Content performance tracking', 'Multi-channel integration', 'Smooth transitions'],
    tech: ['React', 'TypeScript', 'Google Cloud'],
    image: '/photography/project-analytics.jpg',
    imageAlt: 'Colleagues reviewing charts and business data',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '-70%',
    metricLabel: 'Report Time',
  },
  {
    label: 'Gym Website & Mobile App',
    name: 'FlexMotion Fitness',
    description: 'A responsive website and Flutter mobile app with class scheduling, membership management, and personal workout plans powered by Firebase.',
    impact: 'Class bookings increased by 52% and user engagement dramatically improved.',
    features: ['Class booking & scheduling', 'Membership management', 'Personalized programs', 'Push notifications'],
    tech: ['Flutter', 'Firebase'],
    image: '/photography/project-fitness.jpg',
    imageAlt: 'Modern gym interior with exercise equipment',
    accentColor: 'from-emerald/20 to-transparent',
    metricColor: 'text-emerald',
    metric: '+52%',
    metricLabel: 'Bookings',
  },
  {
    label: 'AI-Powered CRM',
    name: 'Skyline Enterprises',
    description: 'Full enterprise CRM with AI-driven lead scoring, automated email drafting, document summarization, and sentiment analysis across Sales, Support, and Management.',
    impact: 'Response times dropped to under 30 seconds and closures improved by 38%.',
    features: ['AI lead scoring', 'Smart email drafting', 'Advanced reporting', 'Role-based access'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    image: '/photography/project-crm.jpg',
    imageAlt: 'Two professionals collaborating on a project using a laptop',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+38%',
    metricLabel: 'Close Rate',
  },
  {
    label: 'Online Learning Platform',
    name: 'EduNova Academy',
    description: 'A robust LMS with video lectures, assignments, quizzes, student analytics, and a real-time WebRTC proctoring system for online examinations.',
    impact: 'Hosted over 4,000 students in the first month and reduced admin workload by 70%.',
    features: ['Video courses', 'Webcam-proctored exams', 'Certificates & achievements', 'AI study recommendations'],
    tech: ['MERN Stack', 'WebRTC'],
    image: '/photography/project-education.jpg',
    imageAlt: 'Student engaged in an online learning session',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '4,000+',
    metricLabel: 'Students',
  },
]

const arabicProjectCopy: Record<string, { label: string; description: string; impact: string; metricLabel: string; imageAlt: string; features: string[] }> = {
  PlayUp: { label: 'موقع رياضي وتطبيق جوال', description: 'منصة رياضية من عمّان تجمع اللاعبين لاكتشاف المباريات وحجز الملاعب والانضمام إلى البطولات والتواصل مع المجتمع المحلي عبر الموقع والتطبيق.', impact: 'تجربة رقمية مترابطة لاكتشاف الرياضة المحلية والمشاركة فيها.', metricLabel: 'منصات رقمية', imageAlt: 'لاعبون يشاركون في مباراة كرة قدم مجتمعية', features: ['اكتشف كرة القدم والسلة والتنس وغيرها', 'اعثر على المباريات واحجز مكانك', 'تعرّف على الملاعب والأكاديميات', 'بطولات وترتيب ومجتمع رياضي'] },
  SD13: { label: 'منصة أكاديمية رياضية', description: 'منصة حديثة للأكاديمية تضم موقعًا سريعًا ونظامًا إداريًا متكاملًا لإدارة المحتوى واللاعبين.', impact: 'زيادة التسجيل عبر الإنترنت بنسبة 45٪ وتقليل وقت التنسيق اليدوي للمدربين بنسبة 30٪.', metricLabel: 'التسجيلات', imageAlt: 'مدرب يوجّه لاعبي أكاديمية كرة القدم خلال التدريب', features: ['موقع سريع', 'لوحة إدارة متكاملة', 'صلاحيات متعددة للأدوار', 'تتبّع التحليلات'] },
  'Infinity Sports': { label: 'نظام متكامل للمنشأة', description: 'نظام متكامل للمنشأة يضم الموقع وإدارة المدفوعات والفواتير وبوابة داخلية لعمليات الموظفين.', impact: 'خفض وقت تتبّع المدفوعات إلى النصف ومنح الإدارة رؤية فورية للإيرادات.', metricLabel: 'وقت موفّر', imageAlt: 'ملعب كرة سلة داخلي في منشأة رياضية', features: ['موقع المنشأة', 'لوحة مالية', 'بوابة داخلية', 'مؤشرات لحظية'] },
  'Sahati Link': { label: 'تطبيق للرعاية الصحية', description: 'نظام تواصل صحي يربط المرضى بالأطباء عبر المحادثات والمكالمات والاستشارات المرئية الآمنة مع الحجز عبر الإنترنت.', impact: 'خفض المواعيد الفائتة بنسبة 35٪ وتحسين سرعة الرد على المرضى.', metricLabel: 'المواعيد الفائتة', imageAlt: 'طبيب يجري استشارة عن بُعد باستخدام حاسوب محمول', features: ['تواصل فوري', 'مكالمات فيديو عالية الدقة', 'حجز المواعيد', 'حماية البيانات'] },
  'Nexora Market': { label: 'منصة تجارة إلكترونية', description: 'منصة تجارة إلكترونية بمصادقة آمنة وكتالوج منتجات ديناميكي وتجربة شراء سلسة ومزامنة فورية للمخزون.', impact: 'تحميل أسرع بنسبة 40٪، وسلال متروكة أقل، ومنع بيع المنتجات غير المتوفرة.', metricLabel: 'سرعة التحميل', imageAlt: 'عميلة تتسوق عبر الإنترنت باستخدام هاتفها', features: ['تسجيل آمن وصلاحيات', 'مزامنة مباشرة للمخزون', 'كتالوج ديناميكي', 'دفع مبسّط'] },
  PulseMetrics: { label: 'تحليلات التواصل الاجتماعي', description: 'لوحة تحليلات لحظية تعرض التفاعل والوصول واتجاهات الأداء ومؤشرات المحتوى للفرق وصنّاع المحتوى.', impact: 'تقليل وقت إعداد التقارير بنسبة 70٪ وإظهار مؤشرات قابلة للتنفيذ فورًا.', metricLabel: 'وقت التقارير', imageAlt: 'فريق يراجع مخططات وبيانات الأعمال', features: ['تحليلات لحظية', 'تتبّع أداء المحتوى', 'تكامل مع قنوات متعددة', 'تنقّل سلس'] },
  'FlexMotion Fitness': { label: 'موقع وتطبيق للياقة', description: 'موقع متجاوب وتطبيق جوال لإدارة الحصص والاشتراكات وخطط التمرين الشخصية.', impact: 'زيادة حجوزات الحصص بنسبة 52٪ وتحسين تفاعل الأعضاء.', metricLabel: 'الحجوزات', imageAlt: 'صالة رياضية عصرية مجهزة بأدوات التمرين', features: ['حجز الحصص والجدولة', 'إدارة العضويات', 'خطط شخصية', 'إشعارات فورية'] },
  'Skyline Enterprises': { label: 'نظام CRM مدعوم بالذكاء الاصطناعي', description: 'نظام CRM للمؤسسات يساعد الفرق على ترتيب العملاء المحتملين وصياغة الرسائل وتلخيص المستندات وتحليل تفاعلات العملاء.', impact: 'خفض وقت الرد إلى أقل من 30 ثانية وتحسين إتمام الصفقات بنسبة 38٪.', metricLabel: 'إتمام الصفقات', imageAlt: 'زميلان يتعاونان في مشروع باستخدام حاسوب محمول', features: ['ترتيب العملاء المحتملين', 'صياغة رسائل ذكية', 'تقارير متقدمة', 'صلاحيات حسب الدور'] },
  'EduNova Academy': { label: 'منصة تعليم إلكتروني', description: 'منصة تعليم متكاملة للدروس والواجبات والاختبارات وتحليلات الطلاب والاختبارات المراقبة مباشرة عبر الإنترنت.', impact: 'استضافة أكثر من 4,000 طالب في الشهر الأول وتقليل العمل الإداري بنسبة 70٪.', metricLabel: 'الطلاب', imageAlt: 'طالبة تشارك في درس عبر الإنترنت', features: ['دورات فيديو', 'اختبارات مراقبة', 'شهادات وإنجازات', 'توصيات للتعلّم'] },
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const { t, language } = useLanguage()

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24 text-[#183b57] sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#52718a]">{t('portfolio.ourWork')}</p>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-[#183b57] sm:text-5xl md:text-6xl">
            {t('portfolio.title')}
          </h2>
          <p className="mt-4 text-lg text-[#5d7483]">{t('portfolio.subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.slice(0, showAll ? portfolioItems.length : 3).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group flex cursor-default flex-col overflow-hidden rounded-2xl border border-[#dce5e8] bg-white shadow-[0_18px_50px_-38px_rgba(24,59,87,.38)]"
            >
              {/* Project cover */}
              <div className="relative h-56 overflow-hidden bg-[#e8eef0] sm:h-64">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={language === 'ar' ? arabicProjectCopy[item.name]?.imageAlt : item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="text-center">
                    <p className={`text-4xl font-heading font-black ${item.metricColor} leading-none`}>{item.metric}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#69808e]">{item.metricLabel}</p>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#69808e]">
                  {language === 'ar' ? arabicProjectCopy[item.name]?.label : item.label}
                </p>
                <h3 className="mb-3 font-heading text-lg font-bold text-[#183b57]">
                  {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#52718a]">{item.name} ↗</a> : item.name}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#5d7483]">
                  {language === 'ar' ? arabicProjectCopy[item.name]?.description : item.description}
                </p>

                {/* Impact */}
                <div className="mb-4 rounded-xl border border-[#e2e9eb] bg-[#f7f9fa] p-3">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#69808e]">{t('portfolio.impact')}</p>
                  <p className="text-xs leading-relaxed text-[#3e5c70]">{language === 'ar' ? arabicProjectCopy[item.name]?.impact : item.impact}</p>
                </div>

                {/* Features */}
                <ul className="mb-5 space-y-1">
                  {(language === 'ar' ? arabicProjectCopy[item.name]?.features : item.features)?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-[#5d7483]">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#86ad56]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#e2e9eb] bg-[#f7f9fa] px-2.5 py-1 text-[10px] font-medium text-[#667e8c]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {portfolioItems.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((shown) => !shown)}
              aria-expanded={showAll}
              className="rounded-full border border-accent/20 bg-white px-7 py-3 text-sm font-semibold text-accent shadow-sm transition-colors hover:bg-accent hover:text-white"
            >
              {showAll ? t('portfolio.showFewer') : `${t('portfolio.seeMore')} (${portfolioItems.length - 3})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
