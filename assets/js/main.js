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
            <h3 class="projects__title">${cert.titulo}</h3>

            <div class="projects__pdf-ratio-container">
                <iframe src="./assets/certificados/diploma-algoritmos-python.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                    class="projects__pdf-embed" frameborder="0" scrolling="no">
                </iframe>
            </div>

            <div class="projects__modal">
                <div>
                    <span class="projects__subtitle">${cert.subtitulo}</span>
                    <p class="projects__description">Certificación oficial de Platzi cubriendo los conocimientos de ${cert.titulo.toLowerCase()}.</p>
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