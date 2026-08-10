document.addEventListener("DOMContentLoaded", () => {
    // === GALERÍA MODAL LOGIC ===
    const viewButtons = document.querySelectorAll('.view-btn');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image-display');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.getElementById('modal-indicators');
    
    let currentImages = [];
    let currentIndex = 0;

    const openModal = (images) => {
        currentImages = images;
        currentIndex = 0;
        updateModalContent();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        if (currentImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    };

    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            if(!modal.classList.contains('show')) document.body.style.overflow = 'auto';
        }, 300);
    };

    const updateModalContent = () => {
        modalImage.src = currentImages[currentIndex];
        
        indicatorsContainer.innerHTML = '';
        if (currentImages.length > 1) {
            currentImages.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.classList.add('indicator');
                if (idx === currentIndex) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = idx;
                    updateModalContent();
                });
                indicatorsContainer.appendChild(dot);
            });
        }
    };

    const nextImage = () => {
        if (currentImages.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateModalContent();
    };

    const prevImage = () => {
        if (currentImages.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateModalContent();
    };

    if (viewButtons.length > 0 && modal) {
        viewButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const images = JSON.parse(btn.getAttribute('data-images'));
                if (images && images.length > 0) {
                    openModal(images);
                }
            });
        });

        closeBtn.addEventListener('click', closeModal);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content') || e.target.classList.contains('modal-image-container')) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('show')) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    }

    // Email Copy Logic
    const copyEmailBtn = document.getElementById('copy-email');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'martinbellandi2000@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                alert(`¡Email copiado al portapapeles!\n${email}`);
            }).catch(err => {
                console.error('Error al copiar: ', err);
                alert(`Mi email es: ${email}`);
            });
        });
    }

    // === LANGUAGE SWITCHER LOGIC ===
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Sobre mí",
            "nav-projects": "Proyectos",
            "nav-tech": "Tecnologías",
            "hero-hi": "Hola, soy",
            "hero-role": "Estudiante de Desarrollo de Software en el último año",
            "hero-desc": "Desarrollo aplicaciones web, sistemas de gestión y soluciones digitales combinando frontend, backend y bases de datos. Tengo experiencia en tecnologías como Python, Django, Flask, React y SQL. Disfruto trabajar en equipo, aprender nuevas tecnologías y utilizar herramientas de IA para acelerar el desarrollo, para crear interfaces modernas y mejorar los resultados.",
            "hero-btn": "Ver proyectos",
            "about-title": "Sobre mí",
            "about-desc": "Soy estudiante de Desarrollo de Software con interés en desarrollo web, bases de datos, automatización e inteligencia artificial.<br><br>He desarrollado proyectos utilizando Python (Django y Flask), JavaScript (React y Next.js) y bases de datos como MySQL, creando aplicaciones web, APIs REST y soluciones personalizadas.<br><br>Me gusta aprender nuevas tecnologías, trabajar en equipo y participar en proyectos que me permitan seguir creciendo profesionalmente.",
            "about-subtitle": "Áreas de formación",
            "form-web": "Desarrollo Web",
            "form-db": "Bases de Datos",
            "form-ui": "UI / UX",
            "form-qa": "Calidad de Software",
            "form-net": "Redes y Sistemas",
            "form-ia": "IA y Automatización",
            "proj-title": "Proyectos",
            "proj-subtitle": "Algunos siguen en desarrollo y otros están finalizados, pero sigo trabajando en ellos y en más proyectos.",
            "status-dev": "En desarrollo",
            "status-done": "Finalizado",
            "btn-view": "Ver",
            "proj1-title": "Analizador de cv con IA",
            "proj1-desc": "Sistema de análisis automático de currículums desarrollado con n8n y Google Gemini. Permite cargar un CV en PDF, extraer su contenido, generar una evaluación mediante IA y enviar un informe profesional en formato HTML por correo electrónico con fortalezas, oportunidades de mejora y recomendaciones personalizadas.",
            "proj2-title": "Rocket Pizza (Frontend)",
            "proj2-desc": "Aplicación web simulando una pizzería online, enfocada en UI/UX y rendimiento. Implementación de Server-Side Rendering (SSR) y ruteo dinámico con Next.js, junto a un diseño full responsive con Tailwind. contiene un carrito de compras, página de contacto y un blog con artículos sobre pizzas traidas desde una API externa.",
            "proj3-title": "Rocket Pizza (Backend)",
            "proj3-desc": "Sistema de gestión backend utilizando el patrón MVT (Model-View-Template). Incluye un panel administrativo completo, operaciones CRUD para productos y categorías, y autenticación de usuarios.",
            "proj4-title": "Tienda de Videojuegos",
            "proj4-desc": "Aplicación web desarrollada con Django que simula una tienda de videojuegos. El sistema permite a los usuarios explorar un catálogo organizado por categorías, consultar información detallada de cada juego y administrar el contenido mediante un panel de administración. Cuenta con autenticación de usuarios, gestión de videojuegos y categorías mediante operaciones CRUD, carrito, historial de compras, etc.",
            "proj5-title": "Sistema SQL & Dashboard",
            "proj5-desc": "Diseño de modelo relacional robusto para gestión de ventas. Elaboración de consultas complejas (JOINs, subconsultas, agregaciones) para análisis de datos, visualizados en un dashboard de métricas clave.",
            "proj6-title": "Mesa de control de básquet",
            "proj6-desc": "Plataforma integral para la gestión en tiempo real de partidos de básquet. Arquitectura unificada usando Reflex (Python) para frontend y backend, con control de reloj, faltas y estadísticas avanzadas almacenadas en base de datos.",
            "proj7-title": "PokeAPI Frontend",
            "proj7-desc": "Aplicación web interactiva que consume la API RESTful de PokeAPI. Implementación de estado global, paginación, llamadas asíncronas (fetch/axios) y diseño de componentes reutilizables con PrimeReact.",
            "tech-title": "Tecnologías"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About me",
            "nav-projects": "Projects",
            "nav-tech": "Technologies",
            "hero-hi": "Hi, I'm",
            "hero-role": "Final year Software Development Student",
            "hero-desc": "I develop web applications, management systems, and digital solutions by combining frontend, backend, and databases. I have experience in technologies such as Python, Django, Flask, React, and SQL. I enjoy working in teams, learning new technologies, and using AI tools to accelerate development, create modern interfaces, and improve results.",
            "hero-btn": "View projects",
            "about-title": "About me",
            "about-desc": "I am a Software Development student with an interest in web development, databases, automation, and artificial intelligence.<br><br>I have developed projects using Python (Django and Flask), JavaScript (React and Next.js) and databases like MySQL, creating web applications, REST APIs, and custom solutions.<br><br>I like to learn new technologies, work in a team, and participate in projects that allow me to continue growing professionally.",
            "about-subtitle": "Training areas",
            "form-web": "Web Development",
            "form-db": "Databases",
            "form-ui": "UI / UX",
            "form-qa": "Software Quality",
            "form-net": "Networks & Systems",
            "form-ia": "AI & Automation",
            "proj-title": "Projects",
            "proj-subtitle": "Some are still in development and others are finished, but I keep working on them and more projects.",
            "status-dev": "In development",
            "status-done": "Finished",
            "btn-view": "View",
            "proj1-title": "AI Resume Analyzer",
            "proj1-desc": "Automatic resume analysis system developed with n8n and Google Gemini. Allows uploading a PDF resume, extracting its content, generating an AI evaluation, and sending a professional HTML report via email with strengths, improvement opportunities, and personalized recommendations.",
            "proj2-title": "Rocket Pizza (Frontend)",
            "proj2-desc": "Web application simulating an online pizzeria, focused on UI/UX and performance. Implementation of Server-Side Rendering (SSR) and dynamic routing with Next.js, along with a full responsive design using Tailwind. Includes a shopping cart, contact page, and a blog with pizza articles fetched from an external API.",
            "proj3-title": "Rocket Pizza (Backend)",
            "proj3-desc": "Backend management system using the MVT (Model-View-Template) pattern. Includes a complete administrative panel, CRUD operations for products and categories, and user authentication.",
            "proj4-title": "Video Game Store",
            "proj4-desc": "Web application developed with Django that simulates a video game store. The system allows users to explore a catalog organized by categories, consult detailed information for each game, and manage content through an admin panel. Features user authentication, game and category management via CRUD operations, shopping cart, purchase history, etc.",
            "proj5-title": "SQL System & Dashboard",
            "proj5-desc": "Robust relational model design for sales management. Development of complex queries (JOINs, subqueries, aggregations) for data analysis, visualized in a key metrics dashboard.",
            "proj6-title": "Basketball Control Table",
            "proj6-desc": "Comprehensive platform for real-time basketball game management. Unified architecture using Reflex (Python) for frontend and backend, featuring clock control, fouls, and advanced statistics stored in a database.",
            "proj7-title": "PokeAPI Frontend",
            "proj7-desc": "Interactive web application that consumes the PokeAPI RESTful API. Implementation of global state, pagination, asynchronous calls (fetch/axios), and reusable component design with PrimeReact.",
            "tech-title": "Technologies"
        }
    };

    const langBtnEn = document.getElementById('lang-en');
    const langBtnEs = document.getElementById('lang-es');

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (lang === 'en') {
            langBtnEn.classList.add('active');
            langBtnEs.classList.remove('active');
        } else {
            langBtnEs.classList.add('active');
            langBtnEn.classList.remove('active');
        }

        localStorage.setItem('portfolio-lang', lang);
    };

    if (langBtnEn && langBtnEs) {
        langBtnEn.addEventListener('click', () => updateLanguage('en'));
        langBtnEs.addEventListener('click', () => updateLanguage('es'));
        
        // Cargar preferencia o predeterminar español
        const savedLang = localStorage.getItem('portfolio-lang') || 'es';
        updateLanguage(savedLang);
    }
});
