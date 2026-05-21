import {
  BarChart3,
  CheckCircle,
  Shield,
  TrendingUp,
  Server,
  Users,
  CircuitBoard
} from 'lucide-react'

export const servicesData = {
  'risk-management': {
    title: 'Risk Management',
    titleAr: 'إدارة المخاطر',
    icon: BarChart3,
    color: '#1E4A76',
    description: 'Comprehensive risk assessment and mitigation strategies for railway systems',
    descriptionAr: 'استراتيجيات شاملة لتقييم المخاطر والتخفيف منها في أنظمة السكك الحديدية',
    longDescription: `Our risk management services help you identify, analyze, and mitigate risks across your entire railway infrastructure. We follow international standards and best practices to ensure your systems are safe and reliable throughout their entire lifecycle.`,
    longDescriptionAr: `تساعدك خدمات إدارة المخاطر لدينا في تحديد المخاطر وتحليلها والتخفيف منها عبر بنيتك التحتية بالكامل. نتبع المعايير الدولية وأفضل الممارسات لضمان أمان أنظمتك وموثوقيتها طوال دورة حياتها.`,
    features: [
      'Hazard Identification and Analysis',
      'Risk Assessment and Evaluation',
      'Risk Mitigation Strategies',
      'Safety Requirements Specification',
      'Independent Safety Assessment',
      'Continuous Risk Monitoring'
    ],
    featuresAr: [
      'تحديد المخاطر وتحليلها',
      'تقييم المخاطر وتقدير درجتها',
      'استراتيجيات التخفيف من المخاطر',
      'مواصفات متطلبات السلامة',
      'تقييم السلامة المستقل',
      'المراقبة المستمرة للمخاطر'
    ],
    benefits: [
      'Reduced operational risks',
      'Compliance with EN 50126 standards',
      'Improved safety culture',
      'Cost-effective risk mitigation'
    ],
    benefitsAr: [
      'تقليل المخاطر التشغيلية',
      'الامتثال لمعايير EN 50126',
      'تحسين ثقافة السلامة',
      'التخفيف الفعّال من حيث التكلفة'
    ],
    standards: ['EN 50126', 'IEC 31010', 'ISO 31000', 'MIL-STD-882']
  },

  'verification-validation': {
    title: 'Verification & Validation',
    titleAr: 'التحقق والتصديق',
    icon: CheckCircle,
    color: '#2A5F8A',
    description: 'Ensuring your systems meet all requirements and perform as intended',
    descriptionAr: 'ضمان استيفاء أنظمتك لجميع المتطلبات وأدائها كما هو مقصود',
    longDescription: `Our V&V services ensure that your railway systems are thoroughly tested and validated against all requirements, guaranteeing safety and reliability before deployment. We apply rigorous methodologies aligned with international railway standards.`,
    longDescriptionAr: `تضمن خدمات التحقق والتصديق لدينا اختبار أنظمة السكك الحديدية الخاصة بك والتحقق منها بشكل شامل مقابل جميع المتطلبات، مما يضمن السلامة والموثوقية قبل النشر.`,
    features: [
      'Requirements Verification',
      'System Integration Testing',
      'Acceptance Testing',
      'Independent Validation',
      'Test Automation',
      'Documentation Review'
    ],
    featuresAr: [
      'التحقق من المتطلبات',
      'اختبار تكامل الأنظمة',
      'اختبار القبول',
      'التحقق المستقل',
      'أتمتة الاختبارات',
      'مراجعة التوثيق'
    ],
    benefits: [
      'Reduced system failures',
      'Faster time-to-market',
      'Lower maintenance costs',
      'Enhanced system reliability'
    ],
    benefitsAr: [
      'تقليل أعطال الأنظمة',
      'سرعة أكبر في الوصول للسوق',
      'تخفيض تكاليف الصيانة',
      'تعزيز موثوقية الأنظمة'
    ],
    standards: ['EN 50128', 'EN 50129', 'ISO 26262', 'IEEE 1012']
  },

  'functional-safety': {
    title: 'Functional Safety',
    titleAr: 'السلامة الوظيفية',
    icon: Shield,
    color: '#3A7CA5',
    description: 'Implementing safety-critical systems that protect lives and assets',
    descriptionAr: 'تطبيق أنظمة حرجة للسلامة تحمي الأرواح والأصول',
    longDescription: `Our functional safety experts help you design and implement safety-critical systems that meet the highest standards of reliability and performance. From hazard analysis to safety case development, we cover the complete safety lifecycle.`,
    longDescriptionAr: `يساعدك خبراء السلامة الوظيفية لدينا في تصميم وتنفيذ الأنظمة الحرجة للسلامة التي تلبي أعلى معايير الموثوقية والأداء، من تحليل المخاطر إلى تطوير حالات السلامة.`,
    features: [
      'Safety Lifecycle Management',
      'Hazard and Risk Analysis (HAZOP)',
      'Safety Integrity Level (SIL) Assessment',
      'Safety Case Development',
      'Verification and Validation',
      'Safety Audits and Assessments'
    ],
    featuresAr: [
      'إدارة دورة حياة السلامة',
      'تحليل المخاطر (HAZOP)',
      'تقييم مستوى تكامل السلامة (SIL)',
      'تطوير حالات السلامة',
      'التحقق والتصديق',
      'عمليات تدقيق وتقييم السلامة'
    ],
    benefits: [
      'Enhanced system safety',
      'Regulatory compliance',
      'Reduced liability risks',
      'Improved operational confidence'
    ],
    benefitsAr: [
      'تعزيز سلامة الأنظمة',
      'الامتثال التنظيمي',
      'تقليل مخاطر المسؤولية',
      'تحسين الثقة التشغيلية'
    ],
    standards: ['IEC 61508', 'EN 50129', 'EN 50126', 'ISO 26262']
  },

  'rams-management': {
    title: 'RAMS Management',
    titleAr: 'إدارة RAMS',
    icon: TrendingUp,
    color: '#4A8AB5',
    description: 'Reliability, Availability, Maintainability, and Safety engineering',
    descriptionAr: 'هندسة الموثوقية والتوافر وقابلية الصيانة والسلامة',
    longDescription: `Our RAMS management services ensure your railway systems are reliable, available, maintainable, and safe throughout their entire lifecycle. We apply proven methodologies to optimize performance and reduce lifecycle costs.`,
    longDescriptionAr: `تضمن خدمات إدارة RAMS لدينا أن تكون أنظمة السكك الحديدية الخاصة بك موثوقة ومتاحة وقابلة للصيانة وآمنة طوال دورة حياتها بالكامل.`,
    features: [
      'Reliability Analysis (FMEA/FTA)',
      'Availability Modeling',
      'Maintainability Engineering',
      'Safety Analysis',
      'Lifecycle Cost Analysis',
      'RAMS Program Management'
    ],
    featuresAr: [
      'تحليل الموثوقية (FMEA/FTA)',
      'نمذجة التوافر',
      'هندسة قابلية الصيانة',
      'تحليل السلامة',
      'تحليل تكاليف دورة الحياة',
      'إدارة برنامج RAMS'
    ],
    benefits: [
      'Increased system availability',
      'Reduced lifecycle costs',
      'Improved maintenance efficiency',
      'Enhanced safety performance'
    ],
    benefitsAr: [
      'زيادة توافر الأنظمة',
      'تخفيض تكاليف دورة الحياة',
      'تحسين كفاءة الصيانة',
      'تعزيز أداء السلامة'
    ],
    standards: ['EN 50126', 'IEC 60300', 'MIL-STD-882', 'BS EN 13306']
  },

  'cybersecurity': {
    title: 'Cybersecurity Consulting',
    titleAr: 'استشارات الأمن السيبراني',
    icon: Server,
    color: '#5A9AC5',
    description: 'Protecting critical railway infrastructure from evolving cyber threats',
    descriptionAr: 'حماية البنية التحتية الحرجة للسكك الحديدية من التهديدات السيبرانية المتطورة',
    longDescription: `Our cybersecurity experts help you protect your railway systems from evolving cyber threats, ensuring operational continuity and data integrity. We follow a defense-in-depth approach aligned with IEC 62443 and NIS2 requirements.`,
    longDescriptionAr: `يساعدك خبراء الأمن السيبراني لدينا في حماية أنظمة السكك الحديدية من التهديدات المتطورة، مما يضمن استمرارية العمليات وسلامة البيانات.`,
    features: [
      'Cybersecurity Risk Assessment',
      'Security Architecture Design',
      'Penetration Testing & Red Team',
      'Incident Response Planning',
      'Security Awareness Training',
      'NIS2 Compliance Audits'
    ],
    featuresAr: [
      'تقييم مخاطر الأمن السيبراني',
      'تصميم هندسة الأمان',
      'اختبار الاختراق والفريق الأحمر',
      'تخطيط الاستجابة للحوادث',
      'التدريب على الوعي الأمني',
      'تدقيقات امتثال NIS2'
    ],
    benefits: [
      'Protection against cyber attacks',
      'NIS2 & IEC 62443 compliance',
      'Business continuity assurance',
      'Data and IP protection'
    ],
    benefitsAr: [
      'الحماية من الهجمات السيبرانية',
      'الامتثال لـ NIS2 وIEC 62443',
      'ضمان استمرارية الأعمال',
      'حماية البيانات والملكية الفكرية'
    ],
    standards: ['IEC 62443', 'NIST CSF', 'ISO 27001', 'NIS2 Directive']
  },

  'training': {
    title: 'Training & Certification',
    titleAr: 'التدريب والتأهيل',
    icon: Users,
    color: '#6AB0D5',
    description: 'Professional development and certification programs for railway safety',
    descriptionAr: 'برامج التطوير المهني والتأهيل في سلامة السكك الحديدية',
    longDescription: `Our training programs equip your team with the knowledge and skills needed to excel in railway safety and cybersecurity. We offer customized workshops, e-learning modules, and professional certification pathways.`,
    longDescriptionAr: `تزود برامجنا التدريبية فريقك بالمعرفة والمهارات اللازمة للتميز في سلامة السكك الحديدية والأمن السيبراني، بما في ذلك ورش عمل مخصصة ومسارات للشهادات المهنية.`,
    features: [
      'Functional Safety Training (IEC 61508)',
      'RAMS Engineering Courses',
      'Cybersecurity Awareness Programs',
      'CENELEC Standards Workshops',
      'Customized On-site Training',
      'Professional Certification Support'
    ],
    featuresAr: [
      'تدريب السلامة الوظيفية (IEC 61508)',
      'دورات هندسة RAMS',
      'برامج توعية الأمن السيبراني',
      'ورش عمل معايير CENELEC',
      'تدريب مخصص في الموقع',
      'دعم الشهادات المهنية'
    ],
    benefits: [
      'Skilled and certified workforce',
      'Increased team productivity',
      'Reduced human error',
      'Professional career growth'
    ],
    benefitsAr: [
      'قوى عاملة ماهرة ومؤهلة',
      'زيادة إنتاجية الفريق',
      'تقليل الأخطاء البشرية',
      'النمو المهني للموظفين'
    ],
    standards: ['IEC 61508', 'EN 50126', 'ISO 27001', 'CENELEC']
  },

  'software': {
    title: 'Software Development',
    titleAr: 'تطوير البرمجيات',
    icon: CircuitBoard,
    color: '#7AC0E5',
    description: 'Custom safety-critical software solutions for railway monitoring systems',
    descriptionAr: 'حلول برمجية مخصصة حرجة للسلامة لأنظمة مراقبة السكك الحديدية',
    longDescription: `Our software development team creates custom solutions for railway safety monitoring, risk assessment, and operational management. All software is developed following EN 50128 safety integrity requirements.`,
    longDescriptionAr: `يقوم فريق تطوير البرمجيات لدينا بإنشاء حلول مخصصة لمراقبة سلامة السكك الحديدية وتقييم المخاطر وإدارة العمليات، وفق متطلبات سلامة EN 50128.`,
    features: [
      'Safety Monitoring Systems',
      'Risk Assessment Dashboards',
      'RAMS Data Management Tools',
      'Real-time Analytics & Reporting',
      'Legacy System Modernization',
      'System Integration Services'
    ],
    featuresAr: [
      'أنظمة مراقبة السلامة',
      'لوحات تحكم تقييم المخاطر',
      'أدوات إدارة بيانات RAMS',
      'التحليلات والتقارير الفورية',
      'تحديث الأنظمة القديمة',
      'خدمات تكامل الأنظمة'
    ],
    benefits: [
      'Automated safety processes',
      'Real-time risk monitoring',
      'Improved decision making',
      'Reduced manual effort'
    ],
    benefitsAr: [
      'أتمتة عمليات السلامة',
      'مراقبة المخاطر في الوقت الفعلي',
      'تحسين اتخاذ القرار',
      'تقليل الجهد اليدوي'
    ],
    standards: ['EN 50128', 'IEC 62304', 'ISO 9001', 'MISRA C']
  }
}

export default servicesData
