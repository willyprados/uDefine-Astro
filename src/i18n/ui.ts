// src/i18n/ui.ts

export const languages = {
  en: { label: "English", flag: "🇺🇸", path: "en" },
  es: { label: "Español", flag: "🇪🇸", path: "es" },
  de: { label: "Deutsch", flag: "🇩🇪", path: "de" },
  it: { label: "Italiano", flag: "🇮🇹", path: "it" },
  pt: { label: "Português", flag: "🇵🇹", path: "pt" },
};

export const defaultLang = "es";

export const ui = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    footer: {
      description:
        "Expert SAP Fiori development and strategic consulting for the modern digital enterprise.",
      headers: {
        services: "Services",
        company: "Company",
        contact: "Contact",
      },
      servicesLinks: [
        { label: "Fiori Development", href: "/services" },
        { label: "S/4HANA Migration", href: "/services" },
        { label: "System Integration", href: "/services" },
        { label: "UX Strategy", href: "/services" },
      ],
      companyLinks: [
        { label: "About Us", href: "/about" },
        { label: "Success Stories", href: "/#success-stories" }, // Ancla en la home
        { label: "Careers", href: "/about#careers" },
        { label: "Contact", href: "/contact" },
      ],
      contactInfo: {
        address: "Avenida de Roma, 119,<br/>Barcelona, Catalonia 08011, ES",
        email: "hello@udefine.net",
        phone: "+34 (600) 123-4567",
      },
      legal: {
        copyright: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    home: {
      hero: {
        badge: "Premium SAP Consulting",
        titlePre: "Redefining",
        titleHighlight: "SAP Excellence",
        subtitle:
          "Expert Fiori Development & Strategic Consulting bridging the gap between complex backends and beautiful user experiences.",
        cta: "Start Transformation",
      },
      about: {
        subTitle: "About Us",
        title: "Bridging Logic and Experience",
        features: [
          {
            icon: "psychology",
            title: "Design-Led Thinking",
            description: "Prioritizing end-user experience.",
          },
          {
            icon: "terminal",
            title: "Technical Mastery",
            description: "Deep expertise in ABAP, Fiori, UI5.",
          },
        ],
      },
      expertise: {
        subTitle: "Our Expertise",
        title: "Specialized Services",
        services: [
          {
            icon: "palette",
            title: "SAP Fiori Design",
            description: "Intuitive UX/UI and custom apps.",
          },
          {
            icon: "lightbulb",
            title: "Strategic Consulting",
            description: "S/4HANA migration roadmaps.",
          },
          {
            icon: "hub",
            title: "System Integration",
            description: "Seamless connectivity.",
          },
        ],
      },
      caseStudies: {
        subTitle: "Case Studies",
        title: "Transforming Global Enterprises",
        studies: [
          {
            title: "Global Retailer Transformation",
            category: "Retail",
            description: "Custom Fiori apps reducing processing time by 40%.",
            image: "...",
            link: "#",
          },
          {
            title: "Manufacturing Efficiency",
            category: "Industrial",
            description:
              "Streamlined production line reporting with a unified dashboard.",
            image: "...",
            link: "#",
          },
          {
            title: "Logistics UX Overhaul",
            category: "Logistics",
            description:
              "Real-time inventory tracking system replacing spreadsheets.",
            image: "...",
            link: "#",
          },
        ],
      },
      testimonials: {
        subTitle: "Testimonials",
        title: "What Our Clients Say",
        items: [
          {
            quote:
              "The logistical optimization achieved with uDefine has been remarkable. Their team ensured a successful integration across our disparate systems.",
            author: "Cervezas Alhambra",
            role: "Strategic Partner",
            initials: "CA",
          },
          {
            quote:
              "Implementing electronic invoicing in Brazil involves navigating a highly complex regulatory environment. uDefine handled the challenge with expertise.",
            author: "Paulo",
            role: "Finance Manager, MedTech Brasil",
            initials: "PM",
          },
        ],
      },
      cta: {
        title: "Ready to upgrade your workflow?",
        subtitle:
          "Join the forward-thinking companies that have redefined their SAP experience with uDefine.",
        btnPrimary: "Get a Free Consultation",
        btnSecondary: "Contact Sales",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    footer: {
      description:
        "Desarrollo experto en SAP Fiori y consultoría estratégica para la empresa digital moderna.",
      headers: {
        services: "Servicios",
        company: "Compañía",
        contact: "Contacto",
      },
      servicesLinks: [
        { label: "Desarrollo Fiori", href: "/services" },
        { label: "Migración S/4HANA", href: "/services" },
        { label: "Integración de Sistemas", href: "/services" },
        { label: "Estrategia UX", href: "/services" },
      ],
      companyLinks: [
        { label: "Nosotros", href: "/about" },
        { label: "Casos de Éxito", href: "/#success-stories" },
        { label: "Carreras", href: "/about#careers" },
        { label: "Contacto", href: "/contact" },
      ],
      contactInfo: {
        address: "Avenida de Roma, 119,<br/>Barcelona, Cataluña 08011, ES",
        email: "hola@udefine.net",
        phone: "+34 (600) 123-4567",
      },
      legal: {
        copyright: "Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
    home: {
      hero: {
        badge: "Consultoría SAP Premium",
        titlePre: "Redefiniendo la",
        titleHighlight: "Excelencia SAP",
        subtitle:
          "Desarrollo Fiori experto y consultoría estratégica que une la brecha entre backends complejos y experiencias de usuario hermosas.",
        cta: "Empezar Transformación",
      },
      about: {
        subTitle: "Nosotros",
        title: "Uniendo Lógica y Experiencia",
        features: [
          {
            icon: "psychology",
            title: "Pensamiento de Diseño",
            description: "Priorizamos la experiencia del usuario final.",
          },
          {
            icon: "terminal",
            title: "Maestría Técnica",
            description: "Experiencia profunda en ABAP, Fiori, UI5.",
          },
        ],
      },
      expertise: {
        subTitle: "Experiencia",
        title: "Servicios Especializados",
        services: [
          {
            icon: "palette",
            title: "Diseño SAP Fiori",
            description: "UX/UI intuitivo y apps a medida.",
          },
          {
            icon: "lightbulb",
            title: "Consultoría Estratégica",
            description: "Hojas de ruta para migración S/4HANA.",
          },
          {
            icon: "hub",
            title: "Integración de Sistemas",
            description: "Conectividad fluida empresarial.",
          },
        ],
      },
      caseStudies: {
        subTitle: "Casos de Éxito",
        title: "Transformando Empresas Globales",
        studies: [
          {
            title: "Transformación Minorista Global",
            category: "Retail",
            description:
              "Apps Fiori personalizadas reduciendo tiempos en un 40%.",
            image: "...",
            link: "#",
          },
          {
            title: "Eficiencia en Manufactura",
            category: "Industrial",
            description:
              "Reportes de línea de producción unificados en tiempo real.",
            image: "...",
            link: "#",
          },
          {
            title: "Mejora UX en Logística",
            category: "Logística",
            description: "Sistema de rastreo de inventario en tiempo real.",
            image: "...",
            link: "#",
          },
        ],
      },
      testimonials: {
        subTitle: "Testimonios",
        title: "Lo que dicen nuestros clientes",
        items: [
          {
            quote:
              "La optimización logística lograda con uDefine ha sido notable. Su equipo aseguró una integración exitosa a través de nuestros sistemas dispares.",
            author: "Cervezas Alhambra",
            role: "Socio Estratégico",
            initials: "CA",
          },
          {
            quote:
              "Implementar la facturación electrónica en Brasil implica navegar un entorno regulatorio complejo. uDefine manejó el desafío con experiencia.",
            author: "Paulo",
            role: "Gerente Financiero, MedTech Brasil",
            initials: "PM",
          },
        ],
      },
      cta: {
        title: "¿Listo para mejorar tu flujo de trabajo?",
        subtitle:
          "Únete a las empresas visionarias que han redefinido su experiencia SAP con uDefine.",
        btnPrimary: "Consulta Gratuita",
        btnSecondary: "Contactar Ventas",
      },
    },
  },
  // ... (Puedes rellenar DE, IT, PT siguiendo el mismo patrón)
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      contact: "Kontakt",
    },
    hero: {
      badge: "Premium SAP Beratung",
      titlePre: "Neudefinition von",
      titleHighlight: "SAP Exzellenz",
      subtitle: "Expertenentwicklung für Fiori.",
      cta: "Starten",
    },
    about: {
      subTitle: "Über uns",
      title: "Logik und Erfahrung verbinden",
      features: [],
    }, // Rellenar
    expertise: {
      subTitle: "Unsere Expertise",
      title: "Spezialisierte Dienste",
      services: [],
    }, // Rellenar
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi Siamo",
      services: "Servizi",
      contact: "Contatto",
    },
    hero: {
      badge: "Consulenza SAP Premium",
      titlePre: "Ridefinire",
      titleHighlight: "L'Eccellenza SAP",
      subtitle: "Sviluppo esperto Fiori.",
      cta: "Inizio",
    },
    about: {
      subTitle: "Chi Siamo",
      title: "Unire Logica ed Esperienza",
      features: [],
    },
    expertise: {
      subTitle: "Competenza",
      title: "Servizi Specializzati",
      services: [],
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      badge: "Consultoria SAP Premium",
      titlePre: "Redefinindo a",
      titleHighlight: "Excelência SAP",
      subtitle: "Desenvolvimento especialista Fiori.",
      cta: "Começar",
    },
    about: {
      subTitle: "Sobre",
      title: "Unindo Lógica e Experiência",
      features: [],
    },
    expertise: {
      subTitle: "Experiência",
      title: "Serviços Especializados",
      services: [],
    },
  },
} as const;
