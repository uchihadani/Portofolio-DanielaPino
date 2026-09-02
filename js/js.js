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

const clickSound = document.getElementById('sound-click');
const successSound = document.getElementById('sound-success');

if (clickSound) clickSound.volume = 0.35;
if (successSound) successSound.volume = 0.4;

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.play().catch(error => {
            console.log("Audio prevenido por políticas del navegador:", error);
        });
    }
}

const interactiveButtons = document.querySelectorAll('.btn, .social-btn, .btn-modal-trigger, .folder-link-btn, .nav-links a');
interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        playSound(clickSound);
    });
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
                playSound(successSound);
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