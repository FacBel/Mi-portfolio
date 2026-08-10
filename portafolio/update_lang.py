import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Nav
html = html.replace('<a href="#inicio">Inicio</a>', '<a href="#inicio" data-i18n="nav-home">Inicio</a>')
html = html.replace('<a href="#sobre-mi">Sobre mí</a>', '<a href="#sobre-mi" data-i18n="nav-about">Sobre mí</a>')
html = html.replace('<a href="#proyectos">Proyectos</a>', '<a href="#proyectos" data-i18n="nav-projects">Proyectos</a>')
html = html.replace('<a href="#tecnologias">Tecnologías</a>', '<a href="#tecnologias" data-i18n="nav-tech">Tecnologías</a>')

# Lang switch
nav_end = '</nav>'
lang_switch = """
            <div class="lang-switch" style="display: flex; gap: 10px; margin-left: 20px;">
                <button id="lang-en" title="English" style="background:none; border:none; font-size: 1.5rem; cursor: pointer; opacity: 0.5; transition: 0.3s;" onmouseover="this.style.opacity=1" onmouseout="if(!this.classList.contains('active')) this.style.opacity=0.5">🇬🇧</button>
                <button id="lang-es" class="active" title="Español" style="background:none; border:none; font-size: 1.5rem; cursor: pointer; opacity: 1; transition: 0.3s;" onmouseover="this.style.opacity=1" onmouseout="if(!this.classList.contains('active')) this.style.opacity=0.5">🇪🇸</button>
            </div>
        </nav>"""
html = html.replace(nav_end, lang_switch)

# Hero
html = html.replace('<h1>\n                Hola, soy <span>Facundo Bellandi</span>\n            </h1>', '<h1>\n                <span data-i18n="hero-hi">Hola, soy</span> <span>Facundo Bellandi</span>\n            </h1>')
html = html.replace('<h2>\n                Estudiante de Desarrollo de Software en el último año\n            </h2>', '<h2 data-i18n="hero-role">\n                Estudiante de Desarrollo de Software en el último año\n            </h2>')
html = html.replace('<p>\n                Desarrollo aplicaciones web', '<p data-i18n="hero-desc">\n                Desarrollo aplicaciones web')
html = html.replace('Ver proyectos\n                </a>', '<span data-i18n="hero-btn">Ver proyectos</span>\n                </a>')
html = html.replace('class="hero-btn">\n                    Ver proyectos', 'class="hero-btn" data-i18n="hero-btn">\n                    Ver proyectos')

# Sobre mi
html = html.replace('<h2 class="section-title">Sobre mí</h2>', '<h2 class="section-title" data-i18n="about-title">Sobre mí</h2>')
html = html.replace('<p>\n                 Soy estudiante de Desarrollo de Software', '<p data-i18n="about-desc">\n                 Soy estudiante de Desarrollo de Software')
html = html.replace('<h3 class="sobre-mi-subtitle">Áreas de formación</h3>', '<h3 class="sobre-mi-subtitle" data-i18n="about-subtitle">Áreas de formación</h3>')

html = html.replace('<h4>Desarrollo Web</h4>', '<h4 data-i18n="form-web">Desarrollo Web</h4>')
html = html.replace('<h4>Bases de Datos</h4>', '<h4 data-i18n="form-db">Bases de Datos</h4>')
html = html.replace('<h4>UI / UX</h4>', '<h4 data-i18n="form-ui">UI / UX</h4>')
html = html.replace('<h4>Calidad de Software</h4>', '<h4 data-i18n="form-qa">Calidad de Software</h4>')
html = html.replace('<h4>Redes y Sistemas</h4>', '<h4 data-i18n="form-net">Redes y Sistemas</h4>')
html = html.replace('<h4>IA y Automatización</h4>', '<h4 data-i18n="form-ia">IA y Automatización</h4>')

# Proyectos
html = html.replace('<h2 class="section-title">\n        Proyectos\n    </h2>', '<h2 class="section-title" data-i18n="proj-title">\n        Proyectos\n    </h2>')
html = html.replace('<h3 class="projects-subtitle">Algunos siguen en desarrollo', '<h3 class="projects-subtitle" data-i18n="proj-subtitle">Algunos siguen en desarrollo')

html = html.replace('class="card-status en-desarrollo">En desarrollo</div>', 'class="card-status en-desarrollo" data-i18n="status-dev">En desarrollo</div>')
html = html.replace('class="card-status finalizado">Finalizado</div>', 'class="card-status finalizado" data-i18n="status-done">Finalizado</div>')

html = html.replace('<h3>Analizador de cv con IA</h3>', '<h3 data-i18n="proj1-title">Analizador de cv con IA</h3>')
html = html.replace('<p>\n                       Sistema de análisis automático', '<p data-i18n="proj1-desc">\n                       Sistema de análisis automático')

html = html.replace('<h3>Rocket Pizza (Frontend)</h3>', '<h3 data-i18n="proj2-title">Rocket Pizza (Frontend)</h3>')
html = html.replace('<p>\n                        Aplicación web simulando', '<p data-i18n="proj2-desc">\n                        Aplicación web simulando')

html = html.replace('<h3>Rocket Pizza (Backend)</h3>', '<h3 data-i18n="proj3-title">Rocket Pizza (Backend)</h3>')
html = html.replace('<p>\n                        Sistema de gestión backend', '<p data-i18n="proj3-desc">\n                        Sistema de gestión backend')

html = html.replace('<h3>Tienda de Videojuegos</h3>', '<h3 data-i18n="proj4-title">Tienda de Videojuegos</h3>')
html = html.replace('<p>\n                       Aplicación web desarrollada', '<p data-i18n="proj4-desc">\n                       Aplicación web desarrollada')

html = html.replace('<h3>Sistema SQL & Dashboard</h3>', '<h3 data-i18n="proj5-title">Sistema SQL & Dashboard</h3>')
html = html.replace('<p>\n                        Diseño de modelo relacional', '<p data-i18n="proj5-desc">\n                        Diseño de modelo relacional')

html = html.replace('<h3>Mesa de control de básquet</h3>', '<h3 data-i18n="proj6-title">Mesa de control de básquet</h3>')
html = html.replace('<p>\n                        Plataforma integral para', '<p data-i18n="proj6-desc">\n                        Plataforma integral para')

html = html.replace('<h3>PokeAPI Frontend</h3>', '<h3 data-i18n="proj7-title">PokeAPI Frontend</h3>')
html = html.replace('<p>\n                        Aplicación web interactiva', '<p data-i18n="proj7-desc">\n                        Aplicación web interactiva')

# Ver button
html = html.replace('</svg> Ver\n                        </button>', '</svg> <span data-i18n="btn-view">Ver</span>\n                        </button>')

# Tecnologias
html = html.replace('<h2>Tecnologías</h2>', '<h2 data-i18n="tech-title">Tecnologías</h2>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Done")
