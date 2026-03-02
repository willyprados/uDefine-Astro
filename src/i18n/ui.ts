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
            title: "Logistics UX Overhaul 1",
            category: "Logistics",
            description:
              "Real-time inventory tracking system replacing spreadsheets.",
            image: "...",
            link: "#",
          },
          {
            title: "Logistics UX Overhaul 2",
            category: "Logistics",
            description:
              "Real-time inventory tracking system replacing spreadsheets.",
            image: "...",
            link: "#",
          },
          {
            title: "Logistics UX Overhaul 3",
            category: "Logistics",
            description:
              "Real-time inventory tracking system replacing spreadsheets.",
            image: "...",
            link: "#",
          },
          {
            title: "Logistics UX Overhaul 4",
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
    contact: {
      badge: "Ready to Start?",
      hero: {
        title1: "Let's Build the Future of",
        titleHighlight: "Your Business",
        subtitle:
          "Start your SAP transformation journey today. Whether you need expert consulting, Fiori development, or operational support, we are here to guide you.",
      },
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Corporate Email",
        company: "Company",
        service: "Service of Interest",
        servicePlaceholder: "Select a service...",
        serviceOpt1: "SAP Consulting",
        serviceOpt2: "Fiori Development",
        serviceOpt3: "Operations & Support",
        serviceOpt4: "Other",
        message: "Message",
        send: "Send Message",
      },
      info: {
        badge: "Get in Touch",
        title: "We help you grow",
        desc: "Our global team of experts is ready to assist you. Reach out to one of our regional offices or send us an email directly.",
        location: "Barcelona, Spain",
        phone: "Phone Us",
        email: "Email Us",
        social: "Follow us on social media",
      },
    },
    about: {
      hero: {
        title: "About Us",
        subtitle: "We are ready! Let's create something awesome...",
      },
      teamIntro: {
        title: "Experience and Expertise",
        subtitle: "...meet Our Team of Highly-Qualified Consultants...",
        description:
          "Our team of consultants has an average of over 10 years of working experience and is highly qualified to provide exceptional services to our customers. At uDefine, we prioritize building strong relationships, not only with our customers but also within our uDefine family.",
      },
      languageExpertise: {
        title: "We speak your Language",
        features: [
          {
            icon: "public",
            title: "International Expertise Local Understanding",
            description:
              "Our SAP consultants bring international expertise tailored to local nuances, ensuring your projects succeed everywhere.",
          },
          {
            icon: "chat_bubble",
            title: "We Speak SAP! And We Speak Your Language",
            description:
              "Get the best of both worlds – technical proficiency and effective communication. Our multilingual team is fluent in SAP solutions and your language.",
          },
        ],
      },
      evolution: {
        title: "We reinvent ourselves just like you",
        description:
          "Our transformation reflects our commitment to your digital growth. We evolve to be the change your business needs.",
      },
      careers: {
        title: "Want to join our Team?",
        description:
          "Attention all job seekers! Our company is growing and we are on the lookout for talented individuals to join our team. If you are a hardworking, motivated professional with a passion for excellence, we want to hear from you! We offer a challenging and rewarding work environment, competitive compensation packages, and opportunities for growth.",
        checklist: ["Already a SAP Professional?", "Motivated Graduate?"],
        ctaText: "Want to know more?",
        ctaLink: "/contact",
      },
      alliances: {
        title: "Our Alliances",
        items: [
          { name: "SAP Member", icon: "verified" },
          { name: "VENTURESOUQ" },
          { name: "ONAPSIS", icon: "security", colorClass: "text-orange-500" },
          { name: "CyberSafe", icon: "shield", colorClass: "text-red-500" },
          { name: "VOQUZ Labs" },
          { name: "SNP", icon: "flight" },
          { name: "Panaya", icon: "circle", colorClass: "text-cyan-400" },
          { name: "kgs", fontClass: "font-bold text-xl italic" },
        ],
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
            title: "Mejora UX en Logística 1",
            category: "Logística",
            description: "Sistema de rastreo de inventario en tiempo real.",
            image: "...",
            link: "#",
          },
          {
            title: "Mejora UX en Logística 2",
            category: "Logística",
            description: "Sistema de rastreo de inventario en tiempo real.",
            image: "...",
            link: "#",
          },
          {
            title: "Mejora UX en Logística 3",
            category: "Logística",
            description: "Sistema de rastreo de inventario en tiempo real.",
            image: "...",
            link: "#",
          },
          {
            title: "Mejora UX en Logística 4",
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
    contact: {
      badge: "¿Listo para empezar?",
      hero: {
        title1: "Construyamos el futuro de",
        titleHighlight: "Tu Negocio",
        subtitle:
          "Comienza tu viaje de transformación SAP hoy. Ya sea que necesites consultoría experta, desarrollo Fiori o soporte operativo, estamos aquí para guiarte.",
      },
      form: {
        title: "Envíanos un mensaje",
        name: "Nombre Completo",
        email: "Correo Corporativo",
        company: "Empresa",
        service: "Servicio de Interés",
        servicePlaceholder: "Selecciona un servicio...",
        serviceOpt1: "Consultoría SAP",
        serviceOpt2: "Desarrollo Fiori",
        serviceOpt3: "Operaciones y Soporte",
        serviceOpt4: "Otro",
        message: "Mensaje",
        send: "Enviar Mensaje",
      },
      info: {
        badge: "Contáctanos",
        title: "Te ayudamos a crecer",
        desc: "Nuestro equipo global de expertos está listo para asistirte. Ponte en contacto con una de nuestras oficinas regionales o envíanos un correo directamente.",
        location: "Barcelona, España",
        phone: "Llámanos",
        email: "Escríbenos",
        social: "Síguenos en redes sociales",
      },
    },
    about: {
      hero: {
        title: "Nosotros",
        subtitle: "¡Estamos listos! Creemos algo increíble...",
      },
      teamIntro: {
        title: "Experiencia y Conocimiento",
        subtitle:
          "...conoce a nuestro equipo de consultores altamente cualificados...",
        description:
          "Nuestro equipo de consultores tiene un promedio de más de 10 años de experiencia laboral y está altamente calificado para brindar servicios excepcionales a nuestros clientes. En uDefine, priorizamos la construcción de relaciones sólidas, no solo con nuestros clientes, sino también dentro de nuestra familia uDefine.",
      },
      languageExpertise: {
        title: "Hablamos tu Idioma",
        features: [
          {
            icon: "public",
            title: "Experiencia Internacional, Entendimiento Local",
            description:
              "Nuestros consultores SAP aportan experiencia internacional adaptada a los matices locales, asegurando el éxito de tus proyectos en cualquier lugar.",
          },
          {
            icon: "chat_bubble",
            title: "¡Hablamos SAP! Y hablamos tu idioma",
            description:
              "Obtén lo mejor de ambos mundos: competencia técnica y comunicación efectiva. Nuestro equipo multilingüe domina las soluciones SAP y tu idioma.",
          },
        ],
      },
      evolution: {
        title: "Nos reinventamos al igual que tú",
        description:
          "Nuestra transformación refleja nuestro compromiso con tu crecimiento digital. Evolucionamos para ser el cambio que tu negocio necesita.",
      },
      careers: {
        title: "¿Quieres unirte a nuestro equipo?",
        description:
          "¡Atención a todos los buscadores de empleo! Nuestra empresa está creciendo y buscamos personas talentosas para unirse a nuestro equipo. Si eres un profesional trabajador, motivado y con pasión por la excelencia, ¡queremos conocerte! Ofrecemos un entorno de trabajo desafiante y gratificante, paquetes de compensación competitivos y oportunidades de crecimiento.",
        checklist: ["¿Ya eres profesional SAP?", "¿Graduado motivado?"],
        ctaText: "¿Quieres saber más?",
        ctaLink: "/contact",
      },
      alliances: {
        title: "Nuestras Alianzas",
        items: [
          { name: "Miembro SAP", icon: "verified" },
          { name: "VENTURESOUQ" },
          { name: "ONAPSIS", icon: "security", colorClass: "text-orange-500" },
          { name: "CyberSafe", icon: "shield", colorClass: "text-red-500" },
          { name: "VOQUZ Labs" },
          { name: "SNP", icon: "flight" },
          { name: "Panaya", icon: "circle", colorClass: "text-cyan-400" },
          { name: "kgs", fontClass: "font-bold text-xl italic" },
        ],
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      contact: "Kontakt",
    },
    footer: {
      description:
        "Experten für SAP-Fiori-Entwicklung und strategische Beratung für das moderne digitale Unternehmen.",
      headers: {
        services: "Dienstleistungen",
        company: "Unternehmen",
        contact: "Kontakt",
      },
      servicesLinks: [
        { label: "Fiori-Entwicklung", href: "/services" },
        { label: "S/4HANA Migration", href: "/services" },
        { label: "Systemintegration", href: "/services" },
        { label: "UX-Strategie", href: "/services" },
      ],
      companyLinks: [
        { label: "Über uns", href: "/about" },
        { label: "Erfolgsgeschichten", href: "/#success-stories" },
        { label: "Karriere", href: "/about#careers" },
        { label: "Kontakt", href: "/contact" },
      ],
      contactInfo: {
        address: "Avenida de Roma, 119,<br/>Barcelona, Katalonien 08011, ES",
        email: "hello@udefine.net",
        phone: "+34 (600) 123-4567",
      },
      legal: {
        copyright: "Alle Rechte vorbehalten.",
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen",
      },
    },
    home: {
      hero: {
        badge: "Premium SAP Beratung",
        titlePre: "Neudefinition von",
        titleHighlight: "SAP Exzellenz",
        subtitle:
          "Experten für Fiori-Entwicklung und strategische Beratung, die die Lücke zwischen komplexen Backends und großartigen Nutzererlebnissen schließen.",
        cta: "Transformation starten",
      },
      about: {
        subTitle: "Über uns",
        title: "Logik und Erlebnis verbinden",
        features: [
          {
            icon: "psychology",
            title: "Designorientiertes Denken",
            description: "Priorisierung der Endnutzererfahrung.",
          },
          {
            icon: "terminal",
            title: "Technische Meisterschaft",
            description: "Tiefgehende Expertise in ABAP, Fiori, UI5.",
          },
        ],
      },
      expertise: {
        subTitle: "Unsere Expertise",
        title: "Spezialisierte Dienstleistungen",
        services: [
          {
            icon: "palette",
            title: "SAP Fiori Design",
            description: "Intuitive UX/UI und individuelle Apps.",
          },
          {
            icon: "lightbulb",
            title: "Strategische Beratung",
            description: "S/4HANA-Migrations-Roadmaps.",
          },
          {
            icon: "hub",
            title: "Systemintegration",
            description: "Nahtlose Konnektivität.",
          },
        ],
      },
      caseStudies: {
        subTitle: "Fallstudien",
        title: "Transformation globaler Unternehmen",
        studies: [
          {
            title: "Transformation eines globalen Einzelhändlers",
            category: "Einzelhandel",
            description:
              "Individuelle Fiori-Apps reduzierten die Bearbeitungszeit um 40 %.",
            image: "...",
            link: "#",
          },
          {
            title: "Fertigungseffizienz",
            category: "Industrie",
            description:
              "Optimierte Berichterstattung der Produktionslinie mit einem einheitlichen Dashboard.",
            image: "...",
            link: "#",
          },
          {
            title: "Logistik UX-Überarbeitung",
            category: "Logistik",
            description:
              "Echtzeit-Inventarverfolgungssystem ersetzt Tabellenkalkulationen.",
            image: "...",
            link: "#",
          },
        ],
      },
      testimonials: {
        subTitle: "Referenzen",
        title: "Was unsere Kunden sagen",
        items: [
          {
            quote:
              "Die mit uDefine erreichte logistische Optimierung war bemerkenswert. Ihr Team sorgte für eine erfolgreiche Integration unserer unterschiedlichen Systeme.",
            author: "Cervezas Alhambra",
            role: "Strategischer Partner",
            initials: "CA",
          },
          {
            quote:
              "Die Implementierung elektronischer Rechnungsstellung in Brasilien erfordert die Navigation durch ein hochkomplexes regulatorisches Umfeld. uDefine meisterte die Herausforderung mit Expertise.",
            author: "Paulo",
            role: "Finanzmanager, MedTech Brasil",
            initials: "PM",
          },
        ],
      },
      cta: {
        title: "Bereit, Ihren Workflow zu verbessern?",
        subtitle:
          "Schließen Sie sich zukunftsorientierten Unternehmen an, die ihre SAP-Erfahrung mit uDefine neu definiert haben.",
        btnPrimary: "Kostenlose Beratung erhalten",
        btnSecondary: "Vertrieb kontaktieren",
      },
    },
    contact: {
      badge: "Bereit anzufangen?",
      hero: {
        title1: "Bauen wir die Zukunft",
        titleHighlight: "Ihres Unternehmens",
        subtitle:
          "Beginnen Sie noch heute Ihre SAP-Transformationsreise. Ob Sie kompetente Beratung, Fiori-Entwicklung oder operative Unterstützung benötigen, wir sind hier, um Sie zu leiten.",
      },
      form: {
        title: "Senden Sie uns eine Nachricht",
        name: "Vollständiger Name",
        email: "Geschäftliche E-Mail",
        company: "Unternehmen",
        service: "Gewünschter Service",
        servicePlaceholder: "Service auswählen...",
        serviceOpt1: "SAP-Beratung",
        serviceOpt2: "Fiori-Entwicklung",
        serviceOpt3: "Betrieb & Support",
        serviceOpt4: "Sonstiges",
        message: "Nachricht",
        send: "Nachricht senden",
      },
      info: {
        badge: "Kontaktieren Sie uns",
        title: "Wir helfen Ihnen beim Wachsen",
        desc: "Unser globales Expertenteam steht bereit, um Ihnen zu helfen. Wenden Sie sich an unsere regionalen Büros oder senden Sie uns direkt eine E-Mail.",
        location: "Barcelona, Spain",
        phone: "Rufen Sie uns an",
        email: "Schreiben Sie uns",
        social: "Folgen Sie uns auf Social Media",
      },
    },
    about: {
      hero: {
        title: "Über uns",
        subtitle: "Wir sind bereit! Lass uns etwas Großartiges erschaffen...",
      },
      teamIntro: {
        title: "Erfahrung und Expertise",
        subtitle:
          "...lernen Sie unser Team hochqualifizierter Berater kennen...",
        description:
          "Unser Beraterteam verfügt über durchschnittlich mehr als 10 Jahre Berufserfahrung und ist hochqualifiziert, um unseren Kunden außergewöhnliche Dienstleistungen zu bieten. Bei uDefine legen wir großen Wert auf den Aufbau starker Beziehungen, nicht nur zu unseren Kunden, sondern auch innerhalb unserer uDefine-Familie.",
      },
      languageExpertise: {
        title: "Wir sprechen Ihre Sprache",
        features: [
          {
            icon: "public",
            title: "Internationale Expertise, lokales Verständnis",
            description:
              "Unsere SAP-Berater bringen internationale Expertise mit, die auf lokale Gegebenheiten zugeschnitten ist, und stellen so sicher, dass Ihre Projekte überall erfolgreich sind.",
          },
          {
            icon: "chat_bubble",
            title: "Wir sprechen SAP! Und wir sprechen Ihre Sprache",
            description:
              "Holen Sie sich das Beste aus beiden Welten: technische Kompetenz und effektive Kommunikation. Unser mehrsprachiges Team beherrscht SAP-Lösungen und Ihre Sprache fließend.",
          },
        ],
      },
      evolution: {
        title: "Wir erfinden uns neu, genau wie Sie",
        description:
          "Unsere Transformation spiegelt unser Engagement für Ihr digitales Wachstum wider. Wir entwickeln uns weiter, um die Veränderung zu sein, die Ihr Unternehmen braucht.",
      },
      careers: {
        title: "Möchten Sie Teil unseres Teams werden?",
        description:
          "Achtung an alle Arbeitssuchenden! Unser Unternehmen wächst und wir suchen talentierte Personen, die unser Team verstärken. Wenn Sie ein hart arbeitender, motivierter Profi mit einer Leidenschaft für Exzellenz sind, möchten wir von Ihnen hören! Wir bieten ein herausforderndes und lohnendes Arbeitsumfeld, wettbewerbsfähige Vergütungspakete und Wachstumsmöglichkeiten.",
        checklist: ["Bereits SAP-Profi?", "Motivierter Absolvent?"],
        ctaText: "Möchten Sie mehr erfahren?",
        ctaLink: "/contact",
      },
      alliances: {
        title: "Unsere Allianzen",
        items: [
          { name: "SAP-Mitglied", icon: "verified" },
          { name: "VENTURESOUQ" },
          { name: "ONAPSIS", icon: "security", colorClass: "text-orange-500" },
          { name: "CyberSafe", icon: "shield", colorClass: "text-red-500" },
          { name: "VOQUZ Labs" },
          { name: "SNP", icon: "flight" },
          { name: "Panaya", icon: "circle", colorClass: "text-cyan-400" },
          { name: "kgs", fontClass: "font-bold text-xl italic" },
        ],
      },
    },
  },

  it: {
    nav: {
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      contact: "Contatto",
    },
    footer: {
      description:
        "Sviluppo SAP Fiori e consulenza strategica esperta per l'impresa digitale moderna.",
      headers: {
        services: "Servizi",
        company: "Azienda",
        contact: "Contatto",
      },
      servicesLinks: [
        { label: "Sviluppo Fiori", href: "/services" },
        { label: "Migrazione S/4HANA", href: "/services" },
        { label: "Integrazione di sistema", href: "/services" },
        { label: "Strategia UX", href: "/services" },
      ],
      companyLinks: [
        { label: "Chi siamo", href: "/about" },
        { label: "Casi di successo", href: "/#success-stories" },
        { label: "Carriere", href: "/about#careers" },
        { label: "Contatto", href: "/contact" },
      ],
      contactInfo: {
        address: "Avenida de Roma, 119,<br/>Barcellona, Catalogna 08011, ES",
        email: "hello@udefine.net",
        phone: "+34 (600) 123-4567",
      },
      legal: {
        copyright: "Tutti i diritti riservati.",
        privacy: "Informativa sulla privacy",
        terms: "Termini di servizio",
      },
    },
    home: {
      hero: {
        badge: "Consulenza SAP Premium",
        titlePre: "Ridefinire",
        titleHighlight: "l'Eccellenza SAP",
        subtitle:
          "Sviluppo Fiori esperto e consulenza strategica che colmano il divario tra backend complessi ed esperienze utente eccellenti.",
        cta: "Avvia trasformazione",
      },
      about: {
        subTitle: "Chi siamo",
        title: "Collegare logica ed esperienza",
        features: [
          {
            icon: "psychology",
            title: "Pensiero guidato dal design",
            description: "Priorità all’esperienza dell’utente finale.",
          },
          {
            icon: "terminal",
            title: "Maestria tecnica",
            description: "Profonda competenza in ABAP, Fiori, UI5.",
          },
        ],
      },
      expertise: {
        subTitle: "Le nostre competenze",
        title: "Servizi specializzati",
        services: [
          {
            icon: "palette",
            title: "Design SAP Fiori",
            description: "UX/UI intuitive e app personalizzate.",
          },
          {
            icon: "lightbulb",
            title: "Consulenza strategica",
            description: "Roadmap di migrazione S/4HANA.",
          },
          {
            icon: "hub",
            title: "Integrazione di sistema",
            description: "Connettività senza interruzioni.",
          },
        ],
      },
      caseStudies: {
        subTitle: "Casi studio",
        title: "Trasformare imprese globali",
        studies: [
          {
            title: "Trasformazione di un retailer globale",
            category: "Retail",
            description:
              "App Fiori personalizzate che riducono i tempi di elaborazione del 40%.",
            image: "...",
            link: "#",
          },
          {
            title: "Efficienza produttiva",
            category: "Industriale",
            description:
              "Reportistica della linea di produzione semplificata con dashboard unificata.",
            image: "...",
            link: "#",
          },
          {
            title: "Revisione UX logistica",
            category: "Logistica",
            description:
              "Sistema di monitoraggio inventario in tempo reale che sostituisce i fogli di calcolo.",
            image: "...",
            link: "#",
          },
        ],
      },
      testimonials: {
        subTitle: "Testimonianze",
        title: "Cosa dicono i nostri clienti",
        items: [
          {
            quote:
              "L’ottimizzazione logistica ottenuta con uDefine è stata notevole. Il loro team ha garantito un’integrazione di successo tra i nostri sistemi eterogenei.",
            author: "Cervezas Alhambra",
            role: "Partner strategico",
            initials: "CA",
          },
          {
            quote:
              "Implementare la fatturazione elettronica in Brasile significa affrontare un ambiente normativo altamente complesso. uDefine ha gestito la sfida con competenza.",
            author: "Paulo",
            role: "Responsabile finanziario, MedTech Brasil",
            initials: "PM",
          },
        ],
      },
      cta: {
        title: "Pronto ad aggiornare il tuo flusso di lavoro?",
        subtitle:
          "Unisciti alle aziende innovative che hanno ridefinito la loro esperienza SAP con uDefine.",
        btnPrimary: "Ottieni una consulenza gratuita",
        btnSecondary: "Contatta vendite",
      },
    },
    contact: {
      badge: "Pronto per iniziare?",
      hero: {
        title1: "Costruiamo il futuro del",
        titleHighlight: "Tuo Business",
        subtitle:
          "Inizia oggi il tuo viaggio di trasformazione SAP. Che tu abbia bisogno di consulenza esperta, sviluppo Fiori o supporto operativo, siamo qui per guidarti.",
      },
      form: {
        title: "Inviaci un messaggio",
        name: "Nome Completo",
        email: "Email Aziendale",
        company: "Azienda",
        service: "Servizio di Interesse",
        servicePlaceholder: "Seleziona un servizio...",
        serviceOpt1: "Consulenza SAP",
        serviceOpt2: "Sviluppo Fiori",
        serviceOpt3: "Operazioni e Supporto",
        serviceOpt4: "Altro",
        message: "Messaggio",
        send: "Inviare Messaggio",
      },
      info: {
        badge: "Contattaci",
        title: "Ti aiutiamo a crescere",
        desc: "Il nostro team globale di esperti è pronto ad assisterti. Contatta uno dei nostri uffici regionali o inviaci direttamente un\'e-mail.",
        location: "Barcellona, Spagna",
        phone: "Chiamaci",
        email: "Scrivici",
        social: "Seguici sui social media",
      },
    },
    about: {
      hero: {
        title: "Chi Siamo",
        subtitle: "Siamo pronti! Creiamo qualcosa di incredibile...",
      },
      teamIntro: {
        title: "Esperienza e Competenza",
        subtitle:
          "...incontra il nostro team di consulenti altamente qualificati...",
        description:
          "Il nostro team di consulenti ha in media oltre 10 anni di esperienza lavorativa ed è altamente qualificato per fornire servizi eccezionali ai nostri clienti. In uDefine, diamo priorità alla costruzione di relazioni solide, non solo con i nostri clienti, ma anche all'interno della nostra famiglia uDefine.",
      },
      languageExpertise: {
        title: "Parliamo la tua Lingua",
        features: [
          {
            icon: "public",
            title: "Esperienza Internazionale, Comprensione Locale",
            description:
              "I nostri consulenti SAP offrono un'esperienza internazionale adattata alle sfumature locali, garantendo il successo dei tuoi progetti ovunque.",
          },
          {
            icon: "chat_bubble",
            title: "Parliamo SAP! E parliamo la tua lingua",
            description:
              "Ottieni il meglio di entrambi i mondi: competenza tecnica e comunicazione efficace. Il nostro team multilingue padroneggia le soluzioni SAP e la tua lingua.",
          },
        ],
      },
      evolution: {
        title: "Ci reinventiamo proprio come te",
        description:
          "La nostra trasformazione riflette il nostro impegno per la tua crescita digitale. Ci evolviamo per essere il cambiamento di cui il tuo business ha bisogno.",
      },
      careers: {
        title: "Vuoi unirti al nostro team?",
        description:
          "Attenzione a chi cerca lavoro! La nostra azienda sta crescendo e cerchiamo persone di talento per unirsi al nostro team. Se sei una professionista lavoratrice, motivata e con la passione per l'eccellenza, vogliamo conoscerti! Offriamo un ambiente di lavoro stimolante e gratificante, pacchetti retributivi competitivi e opportunità di crescita.",
        checklist: ["Sei già una professionista SAP?", "Neolaureata motivata?"],
        ctaText: "Vuoi saperne di più?",
        ctaLink: "/contact",
      },
      alliances: {
        title: "Le Nostre Alleanze",
        items: [
          { name: "Membro SAP", icon: "verified" },
          { name: "VENTURESOUQ" },
          { name: "ONAPSIS", icon: "security", colorClass: "text-orange-500" },
          { name: "CyberSafe", icon: "shield", colorClass: "text-red-500" },
          { name: "VOQUZ Labs" },
          { name: "SNP", icon: "flight" },
          { name: "Panaya", icon: "circle", colorClass: "text-cyan-400" },
          { name: "kgs", fontClass: "font-bold text-xl italic" },
        ],
      },
    },
  },

  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato",
    },
    footer: {
      description:
        "Desenvolvimento SAP Fiori especializado e consultoria estratégica para a empresa digital moderna.",
      headers: {
        services: "Serviços",
        company: "Empresa",
        contact: "Contato",
      },
      servicesLinks: [
        { label: "Desenvolvimento Fiori", href: "/services" },
        { label: "Migração S/4HANA", href: "/services" },
        { label: "Integração de sistemas", href: "/services" },
        { label: "Estratégia UX", href: "/services" },
      ],
      companyLinks: [
        { label: "Sobre nós", href: "/about" },
        { label: "Casos de sucesso", href: "/#success-stories" },
        { label: "Carreiras", href: "/about#careers" },
        { label: "Contato", href: "/contact" },
      ],
      contactInfo: {
        address: "Avenida de Roma, 119,<br/>Barcelona, Catalunha 08011, ES",
        email: "hello@udefine.net",
        phone: "+34 (600) 123-4567",
      },
      legal: {
        copyright: "Todos os direitos reservados.",
        privacy: "Política de privacidade",
        terms: "Termos de serviço",
      },
    },
    home: {
      hero: {
        badge: "Consultoria SAP Premium",
        titlePre: "Redefinindo",
        titleHighlight: "Excelência SAP",
        subtitle:
          "Desenvolvimento Fiori especializado e consultoria estratégica conectando backends complexos a belas experiências de usuário.",
        cta: "Iniciar transformação",
      },
      about: {
        subTitle: "Sobre nós",
        title: "Conectando lógica e experiência",
        features: [
          {
            icon: "psychology",
            title: "Pensamento guiado por design",
            description: "Priorizando a experiência do usuário final.",
          },
          {
            icon: "terminal",
            title: "Domínio técnico",
            description: "Profunda expertise em ABAP, Fiori, UI5.",
          },
        ],
      },
      expertise: {
        subTitle: "Nossa expertise",
        title: "Serviços especializados",
        services: [
          {
            icon: "palette",
            title: "Design SAP Fiori",
            description: "UX/UI intuitivas e apps personalizados.",
          },
          {
            icon: "lightbulb",
            title: "Consultoria estratégica",
            description: "Roadmaps de migração S/4HANA.",
          },
          {
            icon: "hub",
            title: "Integração de sistemas",
            description: "Conectividade perfeita.",
          },
        ],
      },
      caseStudies: {
        subTitle: "Estudos de caso",
        title: "Transformando empresas globais",
        studies: [
          {
            title: "Transformação de varejista global",
            category: "Varejo",
            description:
              "Apps Fiori personalizados reduzindo o tempo de processamento em 40%.",
            image: "...",
            link: "#",
          },
          {
            title: "Eficiência de manufatura",
            category: "Industrial",
            description:
              "Relatórios de linha de produção otimizados com dashboard unificado.",
            image: "...",
            link: "#",
          },
          {
            title: "Reformulação UX logística",
            category: "Logística",
            description:
              "Sistema de rastreamento de inventário em tempo real substituindo planilhas.",
            image: "...",
            link: "#",
          },
        ],
      },
      testimonials: {
        subTitle: "Depoimentos",
        title: "O que nossos clientes dizem",
        items: [
          {
            quote:
              "A otimização logística alcançada com a uDefine foi notável. A equipe garantiu uma integração bem-sucedida entre nossos sistemas distintos.",
            author: "Cervezas Alhambra",
            role: "Parceiro estratégico",
            initials: "CA",
          },
          {
            quote:
              "Implementar faturamento eletrônico no Brasil envolve um ambiente regulatório altamente complexo. A uDefine lidou com o desafio com expertise.",
            author: "Paulo",
            role: "Gerente financeiro, MedTech Brasil",
            initials: "PM",
          },
        ],
      },
      cta: {
        title: "Pronto para melhorar seu fluxo de trabalho?",
        subtitle:
          "Junte-se às empresas inovadoras que redefiniram sua experiência SAP com a uDefine.",
        btnPrimary: "Obter consulta gratuita",
        btnSecondary: "Falar com vendas",
      },
    },
    contact: {
      badge: "Pronto para começar?",
      hero: {
        title1: "Vamos construir o futuro do",
        titleHighlight: "Seu Negócio",
        subtitle:
          "Comece sua jornada de transformação SAP hoje. Se você precisa de consultoria especializada, desenvolvimento Fiori ou suporte operacional, estamos aqui para orientá-lo.",
      },
      form: {
        title: "Envie-nos uma mensagem",
        name: "Nome completo",
        email: "E-mail corporativo",
        company: "Empresa",
        service: "Serviço de interesse",
        servicePlaceholder: "Selecione um serviço...",
        serviceOpt1: "SAP Consulting",
        serviceOpt2: "Fiori Development",
        serviceOpt3: "Operations & Support",
        serviceOpt4: "Outro",
        message: "Mensagem",
        send: "Enviar Mensagem",
      },
      info: {
        badge: "Entre em Contato",
        title: "Ajudamos você a crescer",
        desc: "Nossa equipe global de especialistas está pronta para ajudá-lo. Entre em contato com um de nossos escritórios regionais ou envie-nos um e-mail diretamente.",
        location: "Barcelona, Espanha",
        phone: "Ligue para nós",
        email: "Envie um E-mail",
        social: "Siga-nos nas redes sociais",
      },
    },
    about: {
      hero: {
        title: "Sobre Nós",
        subtitle: "Estamos prontos! Vamos criar algo incrível...",
      },
      teamIntro: {
        title: "Experiência e Especialização",
        subtitle:
          "...conheça nossa equipe de consultores altamente qualificados...",
        description:
          "Nossa equipe de consultores tem uma média de mais de 10 anos de experiência profissional e é altamente qualificada para fornecer serviços excepcionais aos nossos clientes. Na uDefine, priorizamos a construção de relacionamentos fortes, não apenas com nossos clientes, mas também dentro da nossa família uDefine.",
      },
      languageExpertise: {
        title: "Falamos o seu Idioma",
        features: [
          {
            icon: "public",
            title: "Experiência Internacional, Compreensão Local",
            description:
              "Nossos consultores SAP trazem experiência internacional adaptada às nuances locais, garantindo o sucesso de seus projetos em qualquer lugar.",
          },
          {
            icon: "chat_bubble",
            title: "Falamos SAP! E falamos o seu idioma",
            description:
              "Obtenha o melhor dos dois mundos: competência técnica e comunicação eficaz. Nossa equipe multilíngue domina as soluções SAP e o seu idioma.",
          },
        ],
      },
      evolution: {
        title: "Nós nos reinventamos assim como você",
        description:
          "Nossa transformação reflete nosso compromisso com o seu crescimento digital. Evoluímos para ser a mudança que o seu negócio precisa.",
      },
      careers: {
        title: "Quer se juntar à nossa equipe?",
        description:
          "Atenção a todos os candidatos a emprego! Nossa empresa está crescendo e procuramos pessoas talentosas para se juntarem à nossa equipe. Se você é uma profissional dedicada, motivada e com paixão pela excelência, queremos ouvir você! Oferecemos um ambiente de trabalho desafiador e recompensador, pacotes de remuneração competitivos e oportunidades de crescimento.",
        checklist: ["Já é profissional SAP?", "Recém-formada motivada?"],
        ctaText: "Quer saber mais?",
        ctaLink: "/contact",
      },
      alliances: {
        title: "Nossas Alianças",
        items: [
          { name: "Membro SAP", icon: "verified" },
          { name: "VENTURESOUQ" },
          { name: "ONAPSIS", icon: "security", colorClass: "text-orange-500" },
          { name: "CyberSafe", icon: "shield", colorClass: "text-red-500" },
          { name: "VOQUZ Labs" },
          { name: "SNP", icon: "flight" },
          { name: "Panaya", icon: "circle", colorClass: "text-cyan-400" },
          { name: "kgs", fontClass: "font-bold text-xl italic" },
        ],
      },
    },
  },
} as const;
