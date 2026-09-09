const translations = {
    en: {
        "Sobre mí": "About me",
        "Proyectos": "Projects",
        "Trabajos": "Work",
        "Habilidades": "Skills",
        "Contacto": "Contact",
        "PROGRAMADORA DE VIDEOJUEGOS": "GAME PROGRAMMER",
        "HOLA, SOY": "HI, I AM",
        "Programación • Videojuegos • Tecnología • Creatividad": "Programming • Games • Technology • Creativity",
        "Estudiante de Desarrollo y Producción de Videojuegos, apasionada por la programación, la tecnología y la creación de experiencias nuevas.": "Game Development and Production student, passionate about programming, technology and creating new experiences.",
        "SOBRE MÍ": "ABOUT ME",
        "CONTACTO": "CONTACT",
        "PROYECTOS": "PROJECTS",
        "VER PROYECTO >": "VIEW PROJECT >",
        "TRABAJOS Y CLIENTES": "WORK AND CLIENTS",
        "LO QUE PUEDO HACER": "WHAT I CAN DO",
        "PROGRAMACIÓN": "PROGRAMMING",
        "VIDEOJUEGOS": "VIDEO GAMES",
        "TECNOLOGÍA": "TECHNOLOGY",
        "CREATIVIDAD": "CREATIVITY",
        "UNITY": "UNITY",
        "JUEGO 3D": "3D GAME",
        "ASISTENTE VIRTUAL CON IA": "AI VIRTUAL ASSISTANT",
        "Ayudante artificial creado para facilitar y aportar ayuda a proyectos estilo JARVIS.": "Artificial assistant created to support JARVIS-style projects.",
        "DISEÑO Y DESARROLLO WEB": "WEB DESIGN AND DEVELOPMENT",
        "Diseño y desarrollo de sitio web moderno y responsivo para blog de cocina y recetas personalizadas.": "Design and development of a modern, responsive website for a cooking and custom recipes blog.",
        "TECNOLOGÍAS": "TECHNOLOGIES",
        "Desarrollo de lógica, sistemas y funcionalidades.": "Development of logic, systems and features.",
        "DESARROLLO DE VIDEOJUEGOS": "VIDEO GAME DEVELOPMENT",
        "Creación y programación de proyectos en Unity.": "Creation and programming of Unity projects.",
        "MODELADO 3D": "3D MODELING",
        "Creación de Objetos y personajes con retopología.": "Creation of objects and characters with retopology.",
        "Programación y Desarrollo de herramientas.": "Programming and tool development.",
        "EDICIÓN DE VIDEOS": "VIDEO EDITING",
        "Edición para reels, Tiktok y Youtube Shorts.": "Editing for reels, TikTok and YouTube Shorts.",
        "DISEÑO Y CREATIVIDAD": "DESIGN AND CREATIVITY",
        "Combinación de programación y elementos visuales.": "Combination of programming and visual elements.",
        "CONTACTAME": "CONTACT ME",
        "¿TENÉS UN PROYECTO EN MENTE?": "DO YOU HAVE A PROJECT IN MIND?",
        "Estoy abierta a nuevas oportunidades, proyectos y colaboraciones. No dudes en escribirme.": "I am open to new opportunities, projects and collaborations. Feel free to contact me.",
        "// NOMBRE": "// NAME",
        "Tu Nombre": "Your name",
        "// EMAIL": "// EMAIL",
        "// MENSAJE": "// MESSAGE",
        "Contame sobre tu proyecto...": "Tell me about your project...",
        "ENVIAR": "SEND",
        "Soy Daniela Pino, estudiante de Programación y Producción de Videojuegos en la UTN de Buenos Aires, Argentina. Soy muy interesada y apasionada por la tecnología y en la creación de nuevas experiencias.": "I am Daniela Pino, a Programming and Video Game Production student at UTN in Buenos Aires, Argentina. I am deeply interested in and passionate about technology and creating new experiences.",
        "Busco combinar creatividad y código para construir mundos y experiencias digitales que generen impacto real.": "I seek to combine creativity and code to build worlds and digital experiences that create a real impact.",
        "EXPEDIENTE // TERROR & SUSPENSO": "CASE FILE // HORROR & SUSPENSE",
        "PROTOCOLO // IA & AUTOMATIZACIÓN": "PROTOCOL // AI & AUTOMATION",
        "CLIENTE // DESARROLLO WEB Y UI/UX": "CLIENT // WEB DEVELOPMENT AND UI/UX",
        "Descripción Profunda": "In-depth Description",
        "Juego de cartas estilo blackjack donde te enfrentas a un demonio al que debes saldar una deuda en la que puedes escapar o quedarte para siempre.": "A blackjack-style card game where you face a demon and must pay a debt, with the choice to escape or stay forever.",
        "Motor:": "Engine:",
        "Rol:": "Role:",
        "Retos:": "Challenges:",
        "Líder de Equipo y Diseñadora 3D": "Team Lead and 3D Designer",
        "Organización del trabajo en equipo y realización de los modelos de los personajes.": "Teamwork organization and creation of the character models.",
        "// ARCHIVOS Y AVANCES DEL PROYECTO": "// PROJECT FILES AND PROGRESS",
        "📂 VER CARPETA DE AVANCES (FOTOS Y VIDEOS) >": "📂 VIEW PROGRESS FOLDER (PHOTOS AND VIDEOS) >",
        "Arquitectura del Sistema": "System Architecture",
        "Ayudante artificial creado para facilitar y aportar ayuda a proyectos estilo JARVIS, procesando comandos y automatizando tareas de desarrollo.": "Artificial assistant created to support JARVIS-style projects by processing commands and automating development tasks.",
        "Tecnologías:": "Technologies:",
        "Enfoque:": "Focus:",
        "Utilidad y optimización de flujos de trabajo.": "Utility and workflow optimization.",
        "Detalles del Encargo": "Project Details",
        "Desarrollo web completo enfocado en la experiencia de usuario (UI/UX) y diseño responsivo para facilitar la lectura de recetas y la navegación fluida de los visitantes.": "Full web development focused on user experience (UI/UX) and responsive design for easy recipe reading and smooth visitor navigation.",
        "Servicios:": "Services:",
        "Diseño de interfaz, estructura web y maquetación.": "Interface design, web structure and layout.",
        "Objetivo:": "Goal:",
        "// VISITA DE LA PAGINA WEB": "// VISIT THE WEBSITE",
        "🌐 VISITAR SITIO WEB / CARPETA >": "🌐 VISIT WEBSITE / FOLDER >"
    }
};

function translatePage(language) {
    const dictionary = translations[language] || {};

    document.querySelectorAll('body *').forEach(element => {
        element.childNodes.forEach(node => {
            if (node.nodeType !== Node.TEXT_NODE) return;

            const originalText = node.nodeValue.trim();
            if (!originalText || !dictionary[originalText]) return;

            node.nodeValue = node.nodeValue.replace(originalText, dictionary[originalText]);
        });
    });

    document.querySelectorAll('[placeholder]').forEach(element => {
        if (dictionary[element.placeholder]) element.placeholder = dictionary[element.placeholder];
    });

    document.documentElement.lang = language;
}

const savedLanguage = localStorage.getItem('portfolio-language');
const browserLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
const currentLanguage = savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : browserLanguage;
const languageSelector = document.getElementById('language-selector');

if (languageSelector) {
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener('change', event => {
        localStorage.setItem('portfolio-language', event.target.value);
        window.location.reload();
    });
}

if (currentLanguage === 'en') translatePage(currentLanguage);

const modalTriggers = document.querySelectorAll('.btn-modal-trigger');
    
modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeModals = document.querySelectorAll('.modal-close, .modal-backdrop');
    
closeModals.forEach(element => {
    element.addEventListener('click', () => {
        const modal = element.closest('.project-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        }
    });
});

const fileInputs = document.querySelectorAll('.real-file-input');
fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        const files = e.target.files;
        const previewGrid = input.closest('.modal-advances-section').querySelector('.media-preview-grid');
            
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const item = document.createElement('div');
                item.classList.add('media-preview-item');
                item.innerHTML = `
                    <img src="${event.target.result}" alt="Preview">
                    <span>${file.name}</span>
                `;
                previewGrid.appendChild(item);
            }
            reader.readAsDataURL(file);
        }
    });
});


    const soundSobremi = document.getElementById('sound-sobremi');
    const soundProyectos = document.getElementById('sound-proyectos');
    const soundTrabajos = document.getElementById('sound-trabajos');
    const soundHabilidades = document.getElementById('sound-habilidades');
    const soundContacto = document.getElementById('sound-contacto');
    const soundClick = document.getElementById('sound-click'); 
    const soundSuccess = document.getElementById('sound-success');

    if (soundSobremi) soundSobremi.volume = 0.4;
    if (soundProyectos) soundProyectos.volume = 0.35;
    if (soundTrabajos) soundTrabajos.volume = 0.35;
    if (soundHabilidades) soundHabilidades.volume = 0.3;
    if (soundContacto) soundContacto.volume = 0.35;
    if (soundClick) soundClick.volume = 0.35;
    if (soundSuccess) soundSuccess.volume = 0.4;

    function playSound(audioElement) {
        if (audioElement) {
            audioElement.currentTime = 0; 
            audioElement.play().catch(error => {
                console.log("Audio prevenido por políticas del navegador:", error);
            });
        }
    }

    const btnSobreMi = document.querySelector('.nav-sound-sobremi');
    if (btnSobreMi) btnSobreMi.addEventListener('click', () => playSound(soundSobremi));

    const btnProyectosNav = document.querySelector('.nav-sound-proyectos');
    if (btnProyectosNav) btnProyectosNav.addEventListener('click', () => playSound(soundProyectos));

    const btnTrabajosNav = document.querySelector('.nav-sound-trabajos');
    if (btnTrabajosNav) btnTrabajosNav.addEventListener('click', () => playSound(soundTrabajos));

    const btnHabilidades = document.querySelector('.nav-sound-habilidades');
    if (btnHabilidades) btnHabilidades.addEventListener('click', () => playSound(soundHabilidades));

    const btnContacto = document.querySelector('.nav-sound-contacto');
    if (btnContacto) btnContacto.addEventListener('click', () => playSound(soundContacto));

    const btnModalTriggers = document.querySelectorAll('.btn-modal-trigger');
    btnModalTriggers.forEach(btn => {
        btn.addEventListener('click', () => playSound(soundClick));
    });

    const otherButtons = document.querySelectorAll('.social-btn, .folder-link-btn, .hero-buttons .btn');
    otherButtons.forEach(btn => {
        btn.addEventListener('click', () => playSound(soundClick));
    });

    const contactForm = document.querySelector('.cyber-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    playSound(soundSuccess);
                    showHudMessage("¡MENSAJE ENVIADO CON ÉXITO! // TRANSMISIÓN COMPLETADA");
                    contactForm.reset();
                } else {
                    showHudMessage("ERROR EN LA TRANSMISIÓN. INTENTA NUEVAMENTE.");
                }
            } catch (error) {
                showHudMessage("ERROR DE RED. VERIFICA TU CONEXIÓN.");
            }
        });
    }


    function showHudMessage(text) {
        const existingAlert = document.querySelector('.hud-alert-box');
        if (existingAlert) existingAlert.remove();

        const alertBox = document.createElement('div');
        alertBox.className = 'hud-alert-box';
        alertBox.innerHTML = `
            <div class="hud-alert-content">
                <span class="hud-alert-tag">SYSTEM // NOTIFICATION</span>
                <p>${text}</p>
            </div>
        `;
        document.body.appendChild(alertBox);

        setTimeout(() => alertBox.classList.add('show'), 100);
        setTimeout(() => {
            alertBox.classList.remove('show');
            setTimeout(() => alertBox.remove(), 300);
        }, 4000);
    }