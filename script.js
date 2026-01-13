// Actualizar año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú Móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Cerrar menú al hacer click en un enlace (Móvil)
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Efecto Navbar al hacer scroll (Opcional: agrega sombra al bajar)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// --- Lógica de Servicios (Modal) ---
const serviceDetails = {
    "web": {
        title: "Desarrollo Web Profesional",
        content: `
            <div class="space-y-4 text-justify">
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Qué es lo que hacemos?</p>
                    <p class="text-slate-600 text-sm">Diseñamos y programamos tu presencia digital desde cero, enfocándonos en la velocidad y la experiencia del usuario. No entregamos una simple página; construimos una herramienta comercial activa que representa la calidad de tu marca.</p>
                    <ul class="list-disc list-inside mt-2 text-sm text-slate-500">
                        <li>Landing Pages & Sitios Corporativos: Estructuras optimizadas para vender productos o servicios.</li>
                        <li>Diseño Adaptable: Tu web se verá y funcionará perfecto en celulares, tablets y computadoras.</li>
                        <li>SEO & Optimización: Configuramos la base técnica para que Google te encuentre y tu página cargue en tiempo récord.</li>
                    </ul>
                </div>
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Por qué te conviene?</p>
                    <p class="text-slate-600 text-sm">Tu sitio web es tu vendedor 24/7. Un sitio lento o mal diseñado ahuyenta al 80% de los clientes potenciales. Nosotros nos aseguramos de que cada visita tenga una experiencia fluida que genere confianza inmediata y facilite el contacto.</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p class="text-blue-600 font-semibold text-sm">💡 Dato clave: Las webs optimizadas venden hasta un 40% más.</p>
                </div>
            </div>
        `
    },
    "app": {
        title: "Aplicaciones Web de Alto Rendimiento",
        content: `
            <div class="space-y-4 text-justify">
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Qué es lo que hacemos?</p>
                    <p class="text-slate-600 text-sm">Desarrollamos herramientas digitales personalizadas que funcionan directamente en el navegador. No son simples páginas, son sistemas inteligentes diseñados para resolver necesidades específicas de tu operación diaria.</p>
                    <ul class="list-disc list-inside mt-2 text-sm text-slate-500">
                        <li>Dashboards y Paneles de Control: Visualiza tus datos en tiempo real.</li>
                        <li>Sistemas Internos: Gestión de inventarios, clientes (CRM) o procesos propios.</li>
                        <li>Integración Total: Conectamos tu aplicación con otras herramientas vía API.</li>
                    </ul>
                </div>
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Por qué te conviene?</p>
                    <p class="text-slate-600 text-sm">Excel no es una base de datos. Un sistema a medida centraliza tu información, reduce errores operativos y te permite escalar sin caos. Ten el control total de tu negocio en tiempo real.</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p class="text-blue-600 font-semibold text-sm">💡 Beneficio: Las empresas que digitalizan sus procesos internos aumentan su productividad hasta en un 35%.</p>
                </div>
            </div>
        `
    },
    "ia": {
        title: "Automatización e Inteligencia Artificial",
        content: `
            <div class="space-y-4 text-justify">
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Qué es lo que hacemos?</p>
                    <p class="text-slate-600 text-sm">Implementamos "robots" de software que conectan tus aplicaciones (WhatsApp, Gmail, Excel) para realizar tareas repetitivas automáticamente.</p>
                    <ul class="list-disc list-inside mt-2 text-sm text-slate-500">
                        <li>Chatbots de atención al cliente 24/7.</li>
                        <li>Procesamiento automático de facturas.</li>
                        <li>Notificaciones y alertas inteligentes.</li>
                    </ul>
                </div>
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Por qué te conviene?</p>
                    <p class="text-slate-600 text-sm">El recurso más valioso es tu tiempo. Al automatizar lo rutinario, tú y tu equipo pueden enfocarse en la estrategia y las ventas, dejando que la tecnología se encargue del trabajo pesado.</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p class="text-blue-600 font-semibold text-sm">💡 Dato clave: La automatización de tareas puede reducir los costos operativos hasta en un 30% desde el primer mes.</p>
                </div>
            </div>
        `
    },
    "marketing": {
        title: "Marketing Tech & Embudos",
        content: `
            <div class="space-y-4 text-justify">
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Qué es lo que hacemos?</p>
                    <p class="text-slate-600 text-sm">Configuramos la infraestructura técnica para que tus ventas no dependan de tu memoria. Sistemas que captan y nutren prospectos automáticamente.</p>
                    <ul class="list-disc list-inside mt-2 text-sm text-slate-500">
                        <li>Automatización de Email Marketing.</li>
                        <li>Integración de formularios con CRM.</li>
                        <li>Embudos de venta (Funnels).</li>
                    </ul>
                </div>
                <div>
                    <p class="font-bold text-slate-900 mb-1">¿Por qué te conviene?</p>
                    <p class="text-slate-600 text-sm">Los clientes se enfrían rápido. Nuestros sistemas aseguran un seguimiento inmediato y personalizado a cada interesado, aumentando drásticamente tus tasas de conversión.</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p class="text-blue-600 font-semibold text-sm">💡 Resultado: Convierte visitantes en clientes incluso mientras duermes.</p>
                </div>
            </div>
        `
    }
};

const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalBackdrop = document.getElementById('modal-backdrop');

if (modal) {
    // Abrir modal al hacer click en una tarjeta
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            const data = serviceDetails[serviceKey];
            if (data) {
                modalTitle.textContent = data.title;
                modalContent.innerHTML = data.content;
                modal.classList.remove('hidden');
            }
        });
    });

    // Cerrar modal
    const closeModal = () => modal.classList.add('hidden');
    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
}

// --- Formulario a WhatsApp ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Formato del mensaje para WhatsApp
        const text = `Hola RobTechh, mi nombre es *${name}*.\nMi correo es: ${email}\n\n*Mensaje:*\n${message}`;
        
        // Abrir WhatsApp (Web o App)
        const phone = "529513423998"; // ¡REEMPLAZA ESTO CON TU NÚMERO!
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    });
}

// --- Formulario de Reseñas ---
const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('review-name').value;
        const rating = document.getElementById('review-rating').value;
        const message = document.getElementById('review-message').value;
        
        // --- FILTRO DE MODERACIÓN ---
        // Lista de palabras prohibidas o dañinas
        const forbiddenWords = [
            'estafa', 'fraude', 'pésimo', 'pesimo', 'horrible', 'basura', 'inútil', 'inutil', 
            'ladrón', 'ladron', 'ladrones', 'falso', 'engaño', 'terrible', 'asqueroso', 'no sirve', 
            'mal servicio', 'mierda', 'peor servicio', 'caca', 'idiota', 'estúpido', 'estupido','mala', 'mala empresa',
            'incompetente', 'lento', 'no funciona', 'no lo recomiendo', 'arrepentido', 'pérdida de tiempo', 
            'perdida de tiempo', 'asco', 'vergüenza', 'verguenza', 'decepción', 'decepcion', 'fatal', 
            'malísimo', 'malisimo', 'timo', 'timadores', 'mentira', 'mentirosos', 'robaron', 'robado'
        ];
        const lowerMessage = message.toLowerCase();

        if (forbiddenWords.some(word => lowerMessage.includes(word))) {
            alert('Lo sentimos, tu comentario no cumple con nuestras normas de comunidad. Si tuviste algún inconveniente con el servicio, por favor contáctanos directamente por WhatsApp para resolverlo de inmediato.');
            return; // Detiene la publicación
        }

        // Crear elemento visual de la reseña
        const reviewCard = document.createElement('div');
        reviewCard.className = 'bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow';
        
        const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
        
        reviewCard.innerHTML = `
            <div class="flex text-yellow-400 mb-4 text-sm">${stars}</div>
            <p class="text-slate-700 mb-6 italic leading-relaxed">"${message}"</p>
            <div>
                <div class="font-bold text-slate-900">${name}</div>
                <div class="text-xs text-slate-500 uppercase tracking-wide">Cliente Verificado</div>
            </div>
        `;
        
        // Insertar la nueva reseña al principio de la lista
        if (reviewsContainer) {
            reviewsContainer.prepend(reviewCard);
        }
        
        // Limpiar formulario
        reviewForm.reset();
        showToast('¡Gracias! Tu comentario se ha registrado con éxito.');
    });
}

// --- Función para mostrar notificaciones bonitas (Toast) ---
function showToast(message) {
    // Crear el elemento
    const toast = document.createElement('div');
    
    // Clases de Tailwind para diseño flotante, moderno y animado
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-[100] transition-all duration-500 opacity-0 translate-y-10 border border-slate-700/50 backdrop-blur-sm';
    
    toast.innerHTML = `
        <div class="bg-green-500 rounded-full p-1 flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span class="font-medium text-sm md:text-base">${message}</span>
    `;

    document.body.appendChild(toast);

    // Animación de entrada (pequeño delay para que el navegador procese el DOM)
    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-10');
    });

    // Animación de salida después de 4 segundos
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-10');
        setTimeout(() => {
            toast.remove();
        }, 500); // Esperar a que termine la transición CSS
    }, 4000);
}
