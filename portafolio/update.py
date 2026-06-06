import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Extract Tecnologias and Proyectos sections
tech_match = re.search(r'(<section id="tecnologias" class="tecnologias">.*?</section>)', html, re.DOTALL)
proj_match = re.search(r'(<section class="projects-section" id="proyectos">.*?</section>)', html, re.DOTALL)

tech_html = tech_match.group(1)
proj_html = proj_match.group(1)

# 2. Modify Tecnologias
# Add AI Tools
ai_tools = """
        <div class="tech-card">
            <i class="devicon-mongodb-plain colored" style="visibility:hidden; height:0; margin:0;"></i> <!-- placeholder to keep alignment or just an AI icon -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:4rem;height:4rem;margin:0 auto 15px;display:block;color:#38bdf8;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <p>Herramientas IA</p>
        </div>
"""
# Replace MySQL with an AI card as well or just append it.
# Let's just append it before the last </div> of tech-grid
tech_html = tech_html.replace('    </div>\n</section>', ai_tools + '    </div>\n</section>')
# Let's fix the SVG to be an actual robot/AI icon instead of a generic one.
ai_svg = """        <div class="tech-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 15px;display:block;"><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            <p>Herramientas IA</p>
        </div>"""
tech_html = re.sub(r'<div class="tech-card">\s*<i class="devicon-mongodb-plain.*?</div>', '', tech_html, flags=re.DOTALL) # remove old placeholder if it matched
tech_html = tech_html.replace('    </div>\n</section>', ai_svg + '\n    </div>\n</section>')

# 3. Modify Proyectos
# Update Rocket Pizza
proj_html = proj_html.replace(
'''                    <h3>Rocket Pizza</h3>

                    <p>
                        Aplicación web realizada con Next.js y Tailwind CSS simulando una pizzería online.
                    </p>

                    <div class="project-tags">
                        <span>Next.js</span>
                        <span>React</span>
                        <span>Tailwind</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>Rocket Pizza</h3>

                    <p>
                        Aplicación web simulando una pizzería online, enfocada en UI/UX y rendimiento. Implementación de Server-Side Rendering (SSR) y ruteo dinámico con Next.js, junto a un diseño full responsive con Tailwind.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-nextjs-line"></i> Next.js</span>
                        <span><i class="devicon-react-original"></i> React</span>
                        <span><i class="devicon-tailwindcss-plain"></i> Tailwind</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update Django Pizza
proj_html = proj_html.replace(
'''                    <h3>Rocket Pizza Django</h3>

                    <p>
                        Proyecto Django con panel admin, CRUD, categorías y carga de pizzas.
                    </p>

                    <div class="project-tags">
                        <span>Django</span>
                        <span>Python</span>
                        <span>SQLite</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>Rocket Pizza Django</h3>

                    <p>
                        Sistema de gestión backend utilizando el patrón MVT (Model-View-Template). Incluye un panel administrativo completo, operaciones CRUD para productos y categorías, y autenticación de usuarios.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-django-plain"></i> Django</span>
                        <span><i class="devicon-python-plain"></i> Python</span>
                        <span><i class="devicon-sqlite-plain"></i> SQLite</span>
                        <span><i class="devicon-html5-plain"></i> HTML/CSS</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update Flask API
proj_html = proj_html.replace(
'''                    <h3>API REST Flask</h3>

                    <p>
                        API REST con JWT, autenticación y sistema de roles.
                    </p>

                    <div class="project-tags">
                        <span>Flask</span>
                        <span>JWT</span>
                        <span>MySQL</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>API REST Flask</h3>

                    <p>
                        Desarrollo de una API RESTful escalable. Implementa seguridad mediante tokens JWT, autenticación de usuarios, gestión de permisos por roles y operaciones eficientes en base de datos.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-flask-original"></i> Flask</span>
                        <span><i class="devicon-python-plain"></i> Python</span>
                        <span><i class="devicon-mysql-plain"></i> MySQL</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update PIPICUCU
proj_html = proj_html.replace(
'''                    <h3>PIPICUCU Linux</h3>

                    <p>
                        Distribución Linux personalizada creada con Cubic basada en Linux Mint.
                    </p>

                    <div class="project-tags">
                        <span>Linux</span>
                        <span>Cubic</span>
                        <span>VirtualBox</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>PIPICUCU Linux</h3>

                    <p>
                        Sistema operativo personalizado basado en Linux Mint y creado con Cubic. Incluye configuraciones predeterminadas orientadas a la productividad, paquetes preinstalados y personalización del entorno de escritorio.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-linux-plain"></i> Linux</span>
                        <span><i class="devicon-ubuntu-plain"></i> Ubuntu Base</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update SQL
proj_html = proj_html.replace(
'''                    <h3>Sistema SQL</h3>

                    <p>
                        Sistema relacional completo consultas avanzadas en un Dashboard de ventas.
                    </p>

                    <div class="project-tags">
                        <span>SQL</span>
                        <span>MySQL</span>
                        <span>DBeaver</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>Sistema SQL & Dashboard</h3>

                    <p>
                        Diseño de modelo relacional robusto para gestión de ventas. Elaboración de consultas complejas (JOINs, subconsultas, agregaciones) para análisis de datos, visualizados en un dashboard de métricas clave.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-mysql-plain"></i> MySQL</span>
                        <span><i class="devicon-dbeaver-plain"></i> DBeaver</span>
                        <span><i class="devicon-html5-plain"></i> HTML/CSS</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update Mesa Basket
proj_html = proj_html.replace(
'''                    <h3>Mesa de control de básquet</h3>

                    <p>
                        Sistema frontend-backend para control de partidos de básquet y estadísticas de jugadores.
                    </p>

                    <div class="project-tags">
                        <span>Python</span>
                        <span>Reflex</span>
                        <span>CSS</span>
                        <span>MySQL</span>
                    </div>''',
'''                    <h3>Mesa de control de básquet</h3>

                    <p>
                        Plataforma integral para la gestión en tiempo real de partidos de básquet. Arquitectura unificada usando Reflex (Python) para frontend y backend, con control de reloj, faltas y estadísticas avanzadas almacenadas en base de datos.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-python-plain"></i> Python</span>
                        <span><i class="devicon-react-original"></i> Reflex</span>
                        <span><i class="devicon-mysql-plain"></i> MySQL</span>
                        <span><i class="devicon-css3-plain"></i> CSS</span>
                    </div>
                    
                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)

# Update PokeAPI
proj_html = proj_html.replace(
'''                    <h3>PokeAPI Frontend</h3>

                    <p>
                        Frontend realizado en React consumiendo endpoints de Pokémon y habilidades.
                    </p>

                    <div class="project-tags">
                        <span>React</span>
                        <span>API</span>
                        <span>PrimeReact</span>
                    </div>

                    <a href="#" class="github-btn">
                        GitHub
                    </a>''',
'''                    <h3>PokeAPI Frontend</h3>

                    <p>
                        Aplicación web interactiva que consume la API RESTful de PokeAPI. Implementación de estado global, paginación, llamadas asíncronas (fetch/axios) y diseño de componentes reutilizables con PrimeReact.
                    </p>

                    <div class="project-tags">
                        <span><i class="devicon-react-original"></i> React</span>
                        <span><i class="devicon-javascript-plain"></i> JS</span>
                        <span><i class="devicon-css3-plain"></i> PrimeReact</span>
                    </div>

                    <a href="#" class="github-btn">
                        <i class="devicon-github-original"></i> GitHub
                    </a>'''
)


# 4. Reconstruct HTML
# Find where the original sections were
start_idx = html.find(tech_match.group(1))
end_idx = html.find(proj_match.group(1)) + len(proj_match.group(1))

# Note: In the original, Tecnologias comes before Proyectos.
# We want to swap them.
new_html = html[:start_idx] + proj_html + '\n\n' + tech_html + html[end_idx:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html updated successfully!")
