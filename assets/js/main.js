/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

// 1. Tu lista de datos (Como el Dataset en Android)
const certificados = [
    { titulo: "Algoritmos con Python", archivo: "diploma-algoritmos-python.pdf", subtitulo: "Lógica de Programación" },
    { titulo: "Backend", archivo: "diploma-backend.pdf", subtitulo: "Desarrollo del Lado del Servidor" },
    { titulo: "DB SQL 2024", archivo: "diploma-dbsql-2024.pdf", subtitulo: "Bases de Datos" },
    { titulo: "Deploying con Python", archivo: "diploma-deploying-python.pdf", subtitulo: "DevOps & Despliegue" },
    { titulo: "Django", archivo: "diploma-django.pdf", subtitulo: "Framework Web Python" },
    { titulo: "Expresiones Regulares", archivo: "diploma-expresiones-regulares.pdf", subtitulo: "Procesamiento de Texto" },
    { titulo: "Fundamentos Ingeniería Datos", archivo: "diploma-fundamentos-ingenieria-datos.pdf", subtitulo: "Arquitectura de Datos" },
    { titulo: "Fundamentos de Python", archivo: "diploma-fundamentos-python.pdf", subtitulo: "Bases del Lenguaje" },
    { titulo: "Linux", archivo: "diploma-linux.pdf", subtitulo: "Sistema Operativo" },
    { titulo: "PostgreSQL Datos", archivo: "diploma-postgresql-datos.pdf", subtitulo: "Bases de Datos Avanzadas" },
    { titulo: "PostgreSQL", archivo: "diploma-postgresql.pdf", subtitulo: "Manejo de Consultas" },
    { titulo: "Python Avanzado", archivo: "diploma-python-avanzado.pdf", subtitulo: "Dominio de Lenguaje" },
    { titulo: "Python Entornos Virtuales", archivo: "diploma-python-entornos-virtuales.pdf", subtitulo: "Gestión de Proyectos" },
    { titulo: "Python Funciones", archivo: "diploma-python-funciones.pdf", subtitulo: "Modularización de Código" },
    { titulo: "Python Pip", archivo: "diploma-python-pip.pdf", subtitulo: "Gestión de Paquetes" },
    { titulo: "Python POO", archivo: "diploma-python-poo.pdf", subtitulo: "Programación Orientada a Objetos" },
    { titulo: "Servidores Linux", archivo: "diploma-servidores-linux.pdf", subtitulo: "Administración de Servidores" },
    { titulo: "Terminal", archivo: "diploma-terminal.pdf", subtitulo: "Línea de Comandos" }
];

// 2. Función para renderizar (Como el onBindViewHolder)
/*=============== CARGAR CERTIFICADOS ===============*/
function cargarCertificados() {
    const contenedor = document.getElementById('certf');
    if (!contenedor) return; // Seguridad: si no existe el ID, no hace nada

    certificados.forEach(cert => {
        const article = document.createElement('article');
        article.className = 'projects__card';

        article.innerHTML = `
            <h3 class="projects__description">${cert.titulo}</h3>

            <div class="projects__pdf-ratio-container">
                <iframe src="https://docs.google.com/viewer?url=https://montdroud52469.github.io/ricardodmj.github.io/assets/certificados/${cert.archivo}&embedded=true"
                    class="projects__pdf-embed" frameborder="0" scrolling="no">
                </iframe>
            </div>

            <div class="projects__modal">
                <div>
                    <span class="projects__subtitle">${cert.subtitulo}</span>
                    <p class="projects__subtitle">Certificación oficial de Platzi cubriendo los conocimientos de ${cert.titulo.toLowerCase()}.</p>
                    <span class="projects__subtitle">Plataforma: Platzi</span>

                    <div class="projects__buttons">
                        <a href="./assets/certificados/${cert.archivo}" target="_blank"
                            class="projects__button button button__small">
                            <i class="ri-fullscreen-line"></i>
                        </a>
                        <a href="./assets/certificados/${cert.archivo}" download
                            class="projects__button button button__small">
                            <i class="ri-download-2-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(article);
    });
}

/*=============== DATA DE PROYECTOS ===============*/
const proyectos = [
    {
        "titulo": "Dulce Tentación: Catálogo Digital de Alta Disponibilidad 2",
        "imagen": "assets/img/dulce_tentacion_preview.png", 
        "tecnologias": "Android Studio (Kotlin), Jetpack Compose, Retrofit 2.11, OkHttp3",
        "descripcion": "Sistema de gestión de inventarios con arquitectura MVVM moderna. Implementación de UI declarativa con Compose, navegación Type-Safe con Serialización y consumo de API REST con interceptores de logging y manejo dinámico de imágenes Base64.",
        "empresa": "Proyecto Independiente / Desarrollo Profesional",
        "link": "https://github.com/Montdroud52468/DulceTen.git" 
    },
    {
        titulo: "Dulce Tentación: Arquitectura y Consumo REST",
        imagen: "assets/img/dulce_tentacion_preview1.png", 
        tecnologias: "Android SDK (XML), Kotlin, MVVM, ViewBinding, Retrofit",
        descripcion: "Proyecto enfocado en la implementación sólida de la arquitectura MVVM. Practiqué la separación de capas mediante el uso de LiveData y ViewBinding, optimizando la comunicación con el servidor a través de Retrofit y el mapeo de modelos JSON.",
        empresa: "Proyecto de Especialización Técnica",
        link: "https://github.com/Montdroud52468/MyCurse.git" 
    },

    {
        titulo: "Inventory API: Engine de Dulce Tentación",
        imagen: "assets/img/project_server.png", 
        tecnologias: "Python (Flask), SQLite3, REST API, Render (Deployment)",
        descripcion: "Infraestructura Backend robusta diseñada para la gestión de inventarios a gran escala. Implementé una arquitectura de microservicios mediante Blueprints, un sistema de manejo de errores centralizado y persistencia de datos relacional con SQLite. El servidor soporta transferencias de imágenes optimizadas en Base64 y una lógica de búsqueda avanzada con filtrado dinámico de stock.",
        empresa: "Proyecto Independiente / Fullstack Development",
        link: "https://github.com/Montdroud52468/MyCurseServer.git"
    },
    {
        "titulo": "Solución Fintech: Ecosistema de Pagos y Lealtad",
        "imagen": "assets/img/project_preview.png",
        "tecnologias": "Android SDK (Java/Kotlin), Retrofit 2, OkHttp3, XML, ConstraintLayout.",
        "descripcion": "Desarrollo de una aplicación financiera (Fintech) orientada al sector retail y farmacéutico. Implementación de arquitectura MVVM para la gestión de transacciones bancarias y monedero electrónico. Optimización de red mediante Retrofit y persistencia temporal de datos con Singletons para la gestión de sesión. Publicada exitosamente en Google Play Store bajo metodologías ágiles (SCRUM).",
        "empresa": "IDS Comercial (Consultoría para Sector Retail/Bancario)",
        "link": "" 
    },
    {
        titulo: "GeoLocator: Visualización de Datos Geográficos",
        imagen: "assets/img/project_maps.png", 
        tecnologias: "Kotlin, OSMDroid, Retrofit (JSON Parsing), MVVM",
        descripcion: "Desarrollé un sistema capaz de procesar archivos JSON para representar puntos de interés dinámicos sobre un mapa. Implementé lógica de filtrado por proximidad y visualización detallada mediante InfoWindows personalizadas. La app interpreta metadatos de cada ubicación (como disponibilidad de servicios o horarios) para adaptar la interfaz y los marcadores en tiempo real.",
        empresa: "Proyecto de Especialización Técnica",
        link: "https://github.com/Montdroud52468/Mapas-Android.git"
    },
    {
        titulo: "Plataforma de Gestión de Activos (Retail)",
        imagen: "assets/img/no_image.png",
        tecnologias: "Android Studio (Kotlin)",
        descripcion: "Colaboré en el desarrollo desde cero de una aplicación orientada a la economía circular y optimización de recursos para un cliente líder en Retail. Implementé arquitectura MVP para asegurar un código desacoplado, integrando Dagger Hilt para inyección de dependencias y Retrofit para el consumo de APIs REST eficientes.",
        empresa: "IDS Comercial (Consultora)",
        link: "" // Mantener vacío por acuerdos de confidencialidad (NDA)
    },
    {
        titulo: "IDS: Modernización y Ecosistema Mobile",
        imagen: "assets/img/logo-ids.webp",
        tecnologias: "Android Nativo (Kotlin/Java) & Flutter",
        descripcion: "Participé activamente en la reestructuración de la capa de datos, ejecutando la migración a Retrofit y optimizando el patrón Repository bajo supervisión técnica. Me encargué de la refactorización de lógica de negocio y la limpieza de deuda técnica en modelos de datos. Asimismo, me integré al desarrollo multiplataforma con Flutter, profesionalizando mi flujo de trabajo en equipos Scrum.",
        empresa: "IDS Comercial (Proyectos Internos)",
        link: "" 
    },
    {
        titulo: "MedIme: Mi Primer Paso en Android",
        imagen: "assets/img/no_image.png", 
        tecnologias: "Java, Android SDK (Native)",
        descripcion: "Mi primer acercamiento al desarrollo móvil hace 3 años. Un proyecto fundamental que representa el inicio de mi carrera, donde exploré el manejo de Activities y componentes básicos de Android. Aunque carece de las arquitecturas limpias que utilizo hoy (como MVVM o MVP), es el testimonio de mi evolución técnica y mi capacidad de aprendizaje autodidacta.",
        empresa: "Iniciación",
        link: "https://github.com/Montdroud52468/MedIme.git"
    },
];

/*=============== CARGAR PROYECTOS ===============*/
function cargarProyectos() {
    const projectsContainer = document.getElementById('projects');
    if (!projectsContainer) return;

    proyectos.forEach(proj => {
        const article = document.createElement('article');
        article.className = 'projects__card';

        // Lógica del botón: Si no hay link, el botón no se muestra
        const linkButton = proj.link 
            ? `<a href="${proj.link}" target="_blank" class="projects__button button button__small">
                   <i class="ri-link"></i> Ver Código
               </a>`
            : `<span class="projects__button button button__small" style="opacity: 0.5; cursor: not-allowed; filter: grayscale(1);">
                   <i class="ri-lock-line"></i> Privado
               </span>`;

        article.innerHTML = `
            <h3 class="projects__description">${proj.titulo}</h3>
            <img src="${proj.imagen}" alt="${proj.titulo}" class="projects__img">
            
            <div class="projects__modal">
                <div>
                    <span class="projects__subtitle">${proj.tecnologias}</span>
                    <p class="projects__subtitle">${proj.descripcion}</p>
                    <span class="projects__subtitle"><b>Origen:</b> ${proj.empresa}</span>
                    <div style="margin-top: 1rem;">
                        ${linkButton}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(article);
    });
}

// Asegúrate de llamar a la función al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    cargarCertificados();
    cargarProyectos();
});

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarCertificados);

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', cargarCertificados);

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, { delay: 500 })
sr.reveal(`.profile__profession`, { delay: 600 })
sr.reveal(`.profile__social`, { delay: 700 })
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 })
sr.reveal(`.profile__buttons`, { delay: 800 })
sr.reveal(`.filters__content`, { delay: 900 })
sr.reveal(`.filters`, { delay: 1000 })