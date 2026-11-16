document.addEventListener("DOMContentLoaded", () => {
    const EMAIL = 'martinbellandi2000@gmail.com';
    let currentLang = 'es';

    // === TRADUCCIONES ===
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-services": "Servicios",
            "nav-projects": "Proyectos",
            "nav-tech": "Tecnologías",
            "nav-contact": "Contacto",
            "hero-badge": "Disponible para proyectos freelance",
            "hero-hi": "Hola, soy",
            "hero-role": "Desarrollador de Software",
            "hero-desc": "Desarrollo sistemas web, APIs e integraciones para negocios: desde una página o un sistema de turnos hasta conectar tu sistema de gestión con otras herramientas. Trabajo con Python, Django, Next.js, React y SQL, y uso IA para entregar más rápido y con mejores resultados.",
            "hero-btn": "Ver proyectos",
            "hero-btn2": "Contactame",
            "about-title": "Sobre mí",
            "about-desc": "Terminé la carrera de Desarrollo de Software en el ITEC y hoy desarrollo soluciones para negocios: aplicaciones web, APIs REST, paneles de gestión e integraciones entre sistemas.<br><br>Trabajo de punta a punta: diseño de la base de datos, backend con Django y Django REST Framework, frontend con Next.js, React y TypeScript, pruebas y despliegue. También integro sistemas de gestión como Odoo y armo automatizaciones con IA.<br><br>Me gusta entender el problema del negocio antes de escribir código, trabajar en equipo y entregar cosas que se usen de verdad.",
            "about-subtitle": "Áreas de trabajo",
            "form-web": "Desarrollo Web",
            "form-web-list": "<li>Next.js, React y TypeScript.</li><li>Tailwind CSS y diseño responsive.</li><li>Formularios con React Hook Form y Zod.</li><li>Git, GitHub y despliegue en Vercel.</li>",
            "form-back": "Backend y APIs",
            "form-back-list": "<li>Python con Django, DRF y Flask.</li><li>APIs REST con autenticación JWT.</li><li>Documentación con Swagger / OpenAPI.</li><li>Contenedores con Docker.</li>",
            "form-db": "Bases de Datos",
            "form-db-list": "<li>Modelado relacional.</li><li>SQL: MySQL, SQLite y Firebird.</li><li>Consultas complejas y reportes.</li><li>Migración y sincronización de datos.</li>",
            "form-ia": "Integraciones e IA",
            "form-ia-list": "<li>Integración con el ERP Odoo por API.</li><li>Automatizaciones con n8n.</li><li>IA aplicada con la API de Gemini.</li><li>Scripts de automatización con Python y PowerShell.</li>",
            "form-ui": "UI / UX",
            "form-ui-list": "<li>Wireframes y prototipos.</li><li>Sistemas de diseño.</li><li>Diseño mobile-first.</li><li>Accesibilidad (WCAG).</li>",
            "form-qa": "Calidad de Software",
            "form-qa-list": "<li>Casos de prueba y planes de testing.</li><li>Gestión de pruebas con TestMonitor.</li><li>Tests automatizados con Vitest.</li><li>Validación y verificación.</li>",
            "services-title": "Servicios",
            "services-subtitle": "Lo que puedo hacer por tu negocio.",
            "srv1-title": "Sistemas web a medida",
            "srv1-desc": "Turnos online, paneles de gestión, catálogos con stock y lo que tu negocio necesite para dejar de trabajar con planillas.",
            "srv2-title": "Páginas web",
            "srv2-desc": "Sitios rápidos, responsive y fáciles de mantener para presentar tu negocio y que te encuentren.",
            "srv3-title": "APIs e integraciones",
            "srv3-desc": "Conecto tus sistemas entre sí: ERP como Odoo, tienda online, bases de datos y planillas, para que la información esté siempre al día.",
            "srv4-title": "Automatizaciones con IA",
            "srv4-desc": "Flujos con n8n e IA que resuelven solas las tareas repetitivas: procesar documentos, generar informes y enviar avisos.",
            "proj-title": "Proyectos",
            "proj-subtitle": "Proyectos finales de la carrera, trabajos en equipo y desarrollos propios. Tocá la imagen para ver las capturas.",
            "status-dev": "En desarrollo",
            "status-done": "Finalizado",
            "btn-view": "Ver capturas",
            "btn-demo": "Ver demo",
            "kind-efi": "Proyecto final (EFI) · Full Stack",
            "kind-efi-ux": "Proyecto final (EFI) · UI/UX",
            "kind-real": "Proyecto real · Integración",
            "kind-personal": "Proyecto propio · IA",
            "kind-qa": "Proyecto académico · Testing",
            "kind-academic": "Proyecto académico",
            "pinf-title": "Inmobiliaria Riri (Frontend)",
            "pinf-desc": "Sitio web de una inmobiliaria con catálogo público, filtros por operación, tipo, barrio y precio, ficha de cada propiedad y modo claro/oscuro. Incluye un panel privado con login JWT para crear, editar y eliminar propiedades, formularios validados con React Hook Form y Zod, y tests con Vitest. Consume la API REST hecha en Django.",
            "pinb-title": "Inmobiliaria Riri (API REST)",
            "pinb-desc": "API REST con Django REST Framework para gestionar propiedades, clientes, visitas y contratos: 10 modelos en 4 apps, autenticación con JWT, filtros y búsqueda con django-filter, documentación automática con Swagger y Redoc, y panel de administración. Lista para levantar con Docker.",
            "pbar-title": "BarberíaRiri: turnos online",
            "pbar-desc": "App web mobile-first para reservar turnos en una barbería en menos de un minuto: el cliente elige servicio, barbero y horario, y asegura su lugar con una seña. Tiene lista de espera, historial y tarjeta de sellos para el cliente, y una agenda para los barberos. Diseñada con un sistema de diseño propio, modo oscuro y criterios de accesibilidad WCAG.",
            "podoo-title": "Sincronización de stock con Odoo",
            "podoo-desc": "Integración para una empresa de distribución que sincroniza el stock de su sistema de gestión (base de datos Firebird) con el ERP Odoo. Detecta los movimientos de stock, compara ambos sistemas y actualiza o da de alta los productos en Odoo a través de su API, con un modo simulación para revisar los cambios antes de aplicarlos.",
            "proj1-title": "Analizador de CV con IA",
            "proj1-desc": "Sistema de análisis automático de currículums desarrollado con n8n y Google Gemini. Permite cargar un CV en PDF, extraer su contenido, generar una evaluación mediante IA y enviar un informe profesional en HTML por correo electrónico con fortalezas, oportunidades de mejora y recomendaciones personalizadas.",
            "ptest-title": "Plan de pruebas de OrangeHRM",
            "ptest-desc": "Diseño de casos de prueba para OrangeHRM, un sistema de recursos humanos, gestionados en TestMonitor. Los casos están organizados por módulo (login, gestión de empleados, administración y dashboard) e incluyen pasos, datos de prueba y resultados esperados.",
            "proj2-title": "Rocket Pizza (Frontend)",
            "proj2-desc": "Aplicación web que simula una pizzería online, enfocada en UI/UX y rendimiento. Usa Server-Side Rendering (SSR) y ruteo dinámico con Next.js, con un diseño full responsive en Tailwind. Tiene carrito de compras, página de contacto y un blog con artículos sobre pizzas traídos desde una API externa.",
            "proj3-title": "Rocket Pizza (Backend)",
            "proj3-desc": "Sistema de gestión backend con el patrón MVT (Model-View-Template). Incluye un panel administrativo completo, operaciones CRUD para productos y categorías, y autenticación de usuarios.",
            "proj4-title": "Tienda de Videojuegos",
            "proj4-desc": "Aplicación web con Django que simula una tienda de videojuegos. Los usuarios exploran un catálogo por categorías, ven el detalle de cada juego, usan el carrito y consultan su historial de compras. Tiene autenticación de usuarios y un panel de administración con CRUD de juegos y categorías.",
            "proj5-title": "Sistema SQL y Dashboard",
            "proj5-desc": "Modelo relacional para la gestión de ventas de un negocio de ropa. Consultas complejas (JOINs, subconsultas y agregaciones) para analizar los datos, visualizados en un dashboard con las métricas clave.",
            "proj6-title": "Mesa de control de básquet",
            "proj6-desc": "Plataforma para gestionar partidos de básquet en tiempo real. Usa Reflex (Python) para frontend y backend en una sola arquitectura, con control de reloj, faltas y estadísticas guardadas en base de datos.",
            "proj7-title": "PokeAPI Frontend",
            "proj7-desc": "Aplicación web interactiva que consume la API REST de PokeAPI. Estado global, paginación, llamadas asíncronas (fetch/axios) y componentes reutilizables con PrimeReact.",
            "tech-title": "Tecnologías",
            "tech-front": "Frontend",
            "tech-back": "Backend y bases de datos",
            "tech-int": "Integraciones e IA",
            "tech-tools": "Herramientas y testing",
            "contact-title": "¿Tenés un proyecto en mente?",
            "contact-desc": "Contame qué necesitás y te respondo con una propuesta y un presupuesto.",
            "contact-email": "Escribime un email",
            "footer": "Desarrollador de Software",
            "toast-copied": "Email copiado: ",
            "toast-error": "Mi email es: "
        },
        en: {
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-projects": "Projects",
            "nav-tech": "Technologies",
            "nav-contact": "Contact",
            "hero-badge": "Available for freelance projects",
            "hero-hi": "Hi, I'm",
            "hero-role": "Software Developer",
            "hero-desc": "I build web systems, APIs and integrations for businesses: from a website or an online booking system to connecting your management software with other tools. I work with Python, Django, Next.js, React and SQL, and I use AI to deliver faster and with better results.",
            "hero-btn": "View projects",
            "hero-btn2": "Contact me",
            "about-title": "About me",
            "about-desc": "I graduated in Software Development at ITEC, and today I build solutions for businesses: web applications, REST APIs, management dashboards and integrations between systems.<br><br>I work end to end: database design, backend with Django and Django REST Framework, frontend with Next.js, React and TypeScript, testing and deployment. I also integrate management systems like Odoo and build AI-powered automations.<br><br>I like to understand the business problem before writing code, work as part of a team and ship things that people actually use.",
            "about-subtitle": "What I work on",
            "form-web": "Web Development",
            "form-web-list": "<li>Next.js, React and TypeScript.</li><li>Tailwind CSS and responsive design.</li><li>Forms with React Hook Form and Zod.</li><li>Git, GitHub and deployment on Vercel.</li>",
            "form-back": "Backend & APIs",
            "form-back-list": "<li>Python with Django, DRF and Flask.</li><li>REST APIs with JWT authentication.</li><li>Documentation with Swagger / OpenAPI.</li><li>Containers with Docker.</li>",
            "form-db": "Databases",
            "form-db-list": "<li>Relational modeling.</li><li>SQL: MySQL, SQLite and Firebird.</li><li>Complex queries and reports.</li><li>Data migration and synchronization.</li>",
            "form-ia": "Integrations & AI",
            "form-ia-list": "<li>Integration with the Odoo ERP through its API.</li><li>Automations with n8n.</li><li>Applied AI with the Gemini API.</li><li>Automation scripts with Python and PowerShell.</li>",
            "form-ui": "UI / UX",
            "form-ui-list": "<li>Wireframes and prototypes.</li><li>Design systems.</li><li>Mobile-first design.</li><li>Accessibility (WCAG).</li>",
            "form-qa": "Software Quality",
            "form-qa-list": "<li>Test cases and test plans.</li><li>Test management with TestMonitor.</li><li>Automated tests with Vitest.</li><li>Validation and verification.</li>",
            "services-title": "Services",
            "services-subtitle": "What I can do for your business.",
            "srv1-title": "Custom web systems",
            "srv1-desc": "Online booking, management dashboards, catalogs with live stock and whatever your business needs to stop working with spreadsheets.",
            "srv2-title": "Websites",
            "srv2-desc": "Fast, responsive and easy-to-maintain websites to present your business and help customers find you.",
            "srv3-title": "APIs & integrations",
            "srv3-desc": "I connect your systems: ERPs like Odoo, online stores, databases and spreadsheets, so your information is always up to date.",
            "srv4-title": "AI automations",
            "srv4-desc": "Workflows with n8n and AI that handle repetitive tasks on their own: processing documents, generating reports and sending notifications.",
            "proj-title": "Projects",
            "proj-subtitle": "Capstone projects, team work and personal builds. Click an image to see the screenshots.",
            "status-dev": "In development",
            "status-done": "Finished",
            "btn-view": "Screenshots",
            "btn-demo": "Live demo",
            "kind-efi": "Capstone project · Full Stack",
            "kind-efi-ux": "Capstone project · UI/UX",
            "kind-real": "Real-world project · Integration",
            "kind-personal": "Personal project · AI",
            "kind-qa": "Academic project · Testing",
            "kind-academic": "Academic project",
            "pinf-title": "Inmobiliaria Riri (Frontend)",
            "pinf-desc": "Real estate website with a public catalog, filters by operation, type, neighborhood and price, a detail page for each property and light/dark mode. It includes a private dashboard with JWT login to create, edit and delete properties, forms validated with React Hook Form and Zod, and tests with Vitest. It consumes the REST API built with Django.",
            "pinb-title": "Inmobiliaria Riri (REST API)",
            "pinb-desc": "REST API built with Django REST Framework to manage properties, clients, visits and contracts: 10 models across 4 apps, JWT authentication, filtering and search with django-filter, automatic documentation with Swagger and Redoc, and an admin panel. Ready to run with Docker.",
            "pbar-title": "BarberíaRiri: online booking",
            "pbar-desc": "Mobile-first web app to book a barbershop appointment in under a minute: customers pick a service, barber and time slot, and secure it with a deposit. It has a waiting list, booking history and a loyalty stamp card for customers, plus a schedule for barbers. Built on its own design system, with dark mode and WCAG accessibility criteria.",
            "podoo-title": "Stock sync with Odoo",
            "podoo-desc": "Integration for a distribution company that syncs the stock from its management system (Firebird database) to the Odoo ERP. It detects stock movements, compares both systems and updates or creates products in Odoo through its API, with a simulation mode to review changes before applying them.",
            "proj1-title": "AI Resume Analyzer",
            "proj1-desc": "Automatic resume analysis system built with n8n and Google Gemini. You upload a PDF resume, it extracts the content, generates an AI evaluation and emails a professional HTML report with strengths, areas for improvement and personalized recommendations.",
            "ptest-title": "OrangeHRM test plan",
            "ptest-desc": "Test case design for OrangeHRM, a human resources system, managed in TestMonitor. The cases are organized by module (login, employee management, administration and dashboard) and include steps, test data and expected results.",
            "proj2-title": "Rocket Pizza (Frontend)",
            "proj2-desc": "Web application simulating an online pizzeria, focused on UI/UX and performance. It uses Server-Side Rendering (SSR) and dynamic routing with Next.js, with a fully responsive Tailwind design. It has a shopping cart, a contact page and a blog with pizza articles fetched from an external API.",
            "proj3-title": "Rocket Pizza (Backend)",
            "proj3-desc": "Backend management system using the MVT (Model-View-Template) pattern. It includes a complete admin panel, CRUD operations for products and categories, and user authentication.",
            "proj4-title": "Video Game Store",
            "proj4-desc": "Django web application simulating a video game store. Users browse a catalog by category, view each game's details, use the cart and check their purchase history. It has user authentication and an admin panel with CRUD for games and categories.",
            "proj5-title": "SQL System & Dashboard",
            "proj5-desc": "Relational model for managing the sales of a clothing business. Complex queries (JOINs, subqueries and aggregations) to analyze the data, shown in a dashboard with the key metrics.",
            "proj6-title": "Basketball Scoring Table",
            "proj6-desc": "Platform to manage basketball games in real time. It uses Reflex (Python) for both frontend and backend in a single architecture, with clock control, fouls and statistics stored in a database.",
            "proj7-title": "PokeAPI Frontend",
            "proj7-desc": "Interactive web application that consumes the PokeAPI REST API. Global state, pagination, asynchronous calls (fetch/axios) and reusable components with PrimeReact.",
            "tech-title": "Technologies",
            "tech-front": "Frontend",
            "tech-back": "Backend & databases",
            "tech-int": "Integrations & AI",
            "tech-tools": "Tools & testing",
            "contact-title": "Got a project in mind?",
            "contact-desc": "Tell me what you need and I'll get back to you with a proposal and a quote.",
            "contact-email": "Send me an email",
            "footer": "Software Developer",
            "toast-copied": "Email copied: ",
            "toast-error": "My email is: "
        }
    };

    // === AVISO (TOAST) ===
    const toast = document.getElementById('toast');
    let toastTimer;
    const showToast = (msg) => {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    };

    // === COPIAR EMAIL ===
    document.querySelectorAll('.copy-email').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const t = translations[currentLang];
            if (navigator.clipboard) {
                navigator.clipboard.writeText(EMAIL)
                    .then(() => showToast(t['toast-copied'] + EMAIL))
                    .catch(() => showToast(t['toast-error'] + EMAIL));
            } else {
                showToast(t['toast-error'] + EMAIL);
            }
        });
    });

    // === GALERÍA MODAL ===
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image-display');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.getElementById('modal-indicators');

    let currentImages = [];
    let currentIndex = 0;
    let lastFocus = null;

    const updateModalContent = () => {
        modalImage.src = currentImages[currentIndex];
        indicatorsContainer.innerHTML = '';
        if (currentImages.length > 1) {
            currentImages.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.className = 'indicator' + (idx === currentIndex ? ' active' : '');
                dot.setAttribute('aria-label', `${idx + 1} / ${currentImages.length}`);
                dot.addEventListener('click', () => {
                    currentIndex = idx;
                    updateModalContent();
                });
                indicatorsContainer.appendChild(dot);
            });
        }
    };

    const openModal = (images) => {
        currentImages = images;
        currentIndex = 0;
        lastFocus = document.activeElement;
        updateModalContent();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        const multiple = currentImages.length > 1;
        prevBtn.style.display = multiple ? 'flex' : 'none';
        nextBtn.style.display = multiple ? 'flex' : 'none';
        closeBtn.focus();
    };

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
    };

    const step = (dir) => {
        if (currentImages.length <= 1) return;
        currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
        updateModalContent();
    };

    if (modal) {
        document.querySelectorAll('[data-images]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const images = JSON.parse(btn.getAttribute('data-images'));
                if (images && images.length > 0) openModal(images);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        nextBtn.addEventListener('click', () => step(1));
        prevBtn.addEventListener('click', () => step(-1));

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content') || e.target.classList.contains('modal-image-container')) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('show')) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        });

        // Deslizar con el dedo en el celular
        let touchX = null;
        modal.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
        modal.addEventListener('touchend', (e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX = null;
        });
    }

    // === APARICIÓN AL HACER SCROLL ===
    const revealEls = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !reduceMotion) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    // === HEADER Y LINK ACTIVO ===
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const sections = [...navLinks]
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    const onScroll = () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
        let current = sections[0];
        sections.forEach(sec => {
            if (sec.getBoundingClientRect().top <= 120) current = sec;
        });
        navLinks.forEach(a => a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // === IDIOMA ===
    const langBtnEn = document.getElementById('lang-en');
    const langBtnEs = document.getElementById('lang-es');

    const updateLanguage = (lang) => {
        if (!translations[lang]) lang = 'es';
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = translations[lang][el.getAttribute('data-i18n')];
            if (value) el.innerHTML = value;
        });
        langBtnEn.classList.toggle('active', lang === 'en');
        langBtnEs.classList.toggle('active', lang === 'es');
        try { localStorage.setItem('portfolio-lang', lang); } catch (e) { /* sin almacenamiento */ }
    };

    if (langBtnEn && langBtnEs) {
        langBtnEn.addEventListener('click', () => updateLanguage('en'));
        langBtnEs.addEventListener('click', () => updateLanguage('es'));
        let savedLang = 'es';
        try { savedLang = localStorage.getItem('portfolio-lang') || 'es'; } catch (e) { /* sin almacenamiento */ }
        updateLanguage(savedLang);
    }
});
