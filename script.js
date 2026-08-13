/* =====================================================
   CASA MOHR
   JAVASCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   AÑO AUTOMÁTICO DEL FOOTER
===================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================================
   NAVBAR AL HACER SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);


/* Ejecutar al cargar */

updateNavbar();



/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* Las tarjetas aparecen en secuencia para dar una lectura más natural. */
/* =====================================================
   CERRAR MENÚ MÓVIL AL HACER CLICK
===================================================== */

const navbarLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarCollapse = document.querySelector(
    ".navbar-collapse"
);


navbarLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            }

        }

    });

});



/* =====================================================
   NAVEGACIÓN SUAVE
===================================================== */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);


internalLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {

            return;

        }


        const target = document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});



/* =====================================================
   ACTUALIZAR LINK ACTIVO DEL NAVBAR
===================================================== */

const sections = document.querySelectorAll(
    "header[id], section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);


const activeSectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");


                navLinks.forEach((link) => {

                    link.classList.remove("active");


                    const linkTarget =
                        link.getAttribute("href");


                    if (
                        linkTarget === `#${currentId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach((section) => {

    activeSectionObserver.observe(section);

});



/* =====================================================
   MENSAJE DE CARGA
===================================================== */

console.log(
    "Casa Mohr Interiores - Página cargada correctamente."
);

/* ==================================================
   VISOR DE IMÁGENES
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imageModalImg");
    const modalCaption = document.getElementById("imageModalCaption");
    const closeBtn = document.getElementById("imageModalClose");
    const prevBtn = document.getElementById("imageModalPrev");
    const nextBtn = document.getElementById("imageModalNext");

    const galleryImages = Array.from(
        document.querySelectorAll(".product-image img, .project-image img")
    );

    if (!modal || !modalImg || galleryImages.length === 0) return;

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + galleryImages.length) % galleryImages.length;

        const image = galleryImages[currentIndex];

        modalImg.src = image.currentSrc || image.src;
        modalImg.alt = image.alt || "Imagen Casa Mohr";

        const card = image.closest(".product-card, .project-card");
        const title = card?.querySelector("h3")?.textContent?.trim();
        const projectLabel = card?.querySelector(".project-image span")?.textContent?.trim();
        const number = card?.querySelector(".card-number")?.textContent?.trim();

        modalCaption.textContent = projectLabel || title || (number ? `Casa Mohr · ${number}` : "");
    }

    function openModal(index) {
        showImage(index);
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("image-modal-open");
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("image-modal-open");
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            openModal(index);
        });
    });

    closeBtn.addEventListener("click", closeModal);

    prevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showImage(currentIndex + 1);
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("active")) return;

        if (event.key === "Escape") closeModal();
        if (event.key === "ArrowLeft") showImage(currentIndex - 1);
        if (event.key === "ArrowRight") showImage(currentIndex + 1);
    });

});


/* =====================================================
   FORMULARIO DE PRESUPUESTO -> WHATSAPP
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const quoteForm = document.getElementById("quoteForm");
    const WHATSAPP_NUMBER = "595986120909";

    if (quoteForm) {
        quoteForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!quoteForm.checkValidity()) {
                quoteForm.classList.add("was-validated");
                quoteForm.querySelector(":invalid")?.focus();
                return;
            }

            const name = document.getElementById("quoteName").value.trim();
            const phone = document.getElementById("quotePhone").value.trim();
            const city = document.getElementById("quoteCity").value.trim();
            const service = document.getElementById("quoteService").value;
            const space = document.getElementById("quoteSpace").value;
            const start = document.getElementById("quoteStart").value;
            const message = document.getElementById("quoteMessage").value.trim();

            let text =
                `Hola, Casa Mohr.%0A%0A` +
                `Mi nombre es ${name}.%0A` +
                `Mi teléfono / WhatsApp es ${phone}.%0A` +
                `Ciudad: ${city}.%0A` +
                `Servicio de interés: ${service}.%0A` +
                `Tipo de espacio: ${space}.%0A`;

            if (start) text += `Me gustaría comenzar: ${start}.%0A`;
            text += `%0ADetalles de mi proyecto:%0A${message}`;

            window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
                "_blank",
                "noopener,noreferrer"
            );
        });
    }

    /* =====================================================
       WHATSAPP FLOTANTE INTELIGENTE
    ===================================================== */
    const floatingWhatsApp = document.getElementById("whatsappFloat");

    function getWhatsAppMessage(source = "") {
        const s = source.toLowerCase();

        if (s.includes("iluminación") || s.includes("iluminacion"))
            return "Hola, Casa Mohr. Estoy interesado en Iluminación y ambientación y quisiera recibir más información.";
        if (s.includes("muebles personalizados"))
            return "Hola, Casa Mohr. Estoy interesado en Muebles personalizados y quisiera recibir más información.";
        if (s.includes("quartzstone") || s.includes("laminatto") || s.includes("granito"))
            return "Hola, Casa Mohr. Estoy interesado en Quartzstone, Laminatto y Granito y quisiera recibir más información.";
        if (s.includes("diseño de interiores") || s.includes("diseños de interiores"))
            return "Hola, Casa Mohr. Estoy interesado en Diseño de interiores y quisiera recibir más información.";
        if (s.includes("soluciones personalizadas"))
            return "Hola, Casa Mohr. Estoy interesado en Soluciones personalizadas y quisiera recibir más información.";
        if (s.includes("muebles y acabados"))
            return "Hola, Casa Mohr. Estoy interesado en Muebles y acabados y quisiera recibir más información.";
        if (s.includes("trabajos"))
            return "Hola, Casa Mohr. Estuve viendo sus trabajos y quisiera recibir más información sobre sus servicios.";
        if (s.includes("proyectos"))
            return "Hola, Casa Mohr. Estuve viendo sus proyectos y me gustaría consultar sobre un proyecto para mi espacio.";

        return "Hola, Casa Mohr. Estuve viendo su página y me gustaría recibir más información sobre sus servicios.";
    }

    function updateWhatsAppLink(link, source = "") {
        if (!link) return;
        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(source))}`;
    }

    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
        link.addEventListener("click", () => {
            const card = link.closest(".product-card");
            const section = link.closest("section");
            updateWhatsAppLink(link, card?.querySelector("h3")?.textContent || section?.id || "");
        });
    });

    if (floatingWhatsApp) {
        function updateFloatingWhatsApp() {
            let current = "inicio";

            document.querySelectorAll("header[id], section[id]").forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * .45 && rect.bottom >= window.innerHeight * .45) {
                    current = section.id;
                }
            });

            updateWhatsAppLink(floatingWhatsApp, current);
        }

        window.addEventListener("scroll", updateFloatingWhatsApp, { passive: true });
        updateFloatingWhatsApp();
    }
});
