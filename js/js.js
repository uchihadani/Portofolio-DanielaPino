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