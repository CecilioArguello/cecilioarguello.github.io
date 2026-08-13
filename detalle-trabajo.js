const works = {
    interiores: {
        number: "01",
        title: "Diseños de interiores",
        image: "productos/trabajo1.jpeg",
        alt: "Diseño de interiores de Casa Mohr",
        lead: "Proyectos residenciales y comerciales pensados para crear espacios únicos, funcionales y con identidad propia.",
        description: "Cada espacio comienza con una conversación: cómo se vive, qué se necesita y qué sensación se quiere transmitir. A partir de allí definimos una propuesta integral que combina distribución, iluminación, materiales y mobiliario.",
        type: "Residencial y comercial",
        focus: "Distribución, estética y funcionalidad",
        process: "Relevamiento, propuesta y acompañamiento",
        tips: [
            ["01", "Definí cómo vivís el espacio", "Antes de elegir colores o muebles, pensá en las actividades cotidianas y en las personas que lo usan."],
            ["02", "Priorizá la luz", "La iluminación natural y artificial cambia por completo la percepción, el confort y la funcionalidad."],
            ["03", "Elegí una base duradera", "Una buena distribución y materiales nobles permiten que el espacio se mantenga vigente con el tiempo."]
        ]
    },
    materiales: {
        number: "02",
        title: "Quartzstone · Laminatto · Granito",
        image: "productos/trabajo2.jpeg",
        alt: "Materiales y acabados de Casa Mohr",
        lead: "Materiales que combinan elegancia, resistencia y funcionalidad para acompañar el ritmo de cada ambiente.",
        description: "Seleccionamos superficies y acabados considerando tanto su presencia visual como su desempeño diario. Te ayudamos a encontrar combinaciones que dialoguen con la luz, el mobiliario y la personalidad del proyecto.",
        type: "Superficies y acabados",
        focus: "Resistencia, textura y armonía visual",
        process: "Asesoramiento y selección de material",
        tips: [
            ["01", "Pensá en el uso real", "En cocinas, baños y zonas de alto tránsito, elegí superficies apropiadas para el desgaste y la humedad."],
            ["02", "Mirá las muestras con luz natural", "El mismo material puede verse diferente según la hora del día y la iluminación del ambiente."],
            ["03", "Equilibrá texturas", "Combinar una superficie protagonista con terminaciones más serenas genera espacios cálidos y equilibrados."]
        ]
    },
    muebles: {
        number: "03",
        title: "Muebles personalizados",
        image: "productos/trabajo3.jpeg",
        alt: "Muebles personalizados de Casa Mohr",
        lead: "Soluciones pensadas especialmente para cada espacio, necesidad y forma de vivir.",
        description: "El mobiliario a medida aprovecha cada centímetro y permite resolver guardado, circulación y estilo en una sola pieza. Diseñamos soluciones funcionales que se integran naturalmente al ambiente.",
        type: "Mobiliario a medida",
        focus: "Guardado, proporción y detalle",
        process: "Diseño, definición técnica y fabricación",
        tips: [
            ["01", "Medí antes de imaginar", "La medida real del espacio es la base para lograr una pieza cómoda, proporcionada y funcional."],
            ["02", "Planificá el guardado", "Pensar desde el inicio qué debe guardar cada mueble ayuda a definir interiores mucho más útiles."],
            ["03", "Cuidá los herrajes", "Bisagras, correderas y tiradores de calidad hacen una gran diferencia en el uso diario y la duración."]
        ]
    }
};

const workId = new URLSearchParams(window.location.search).get("id");
const work = works[workId] || works.interiores;
const workDetail = document.getElementById("workDetail");
const gallery = [
    { src: work.image, alt: work.alt },
    { src: "", alt: "Espacio para segunda foto" },
    { src: "", alt: "Espacio para tercera foto" }
];
let currentGalleryIndex = 0;

document.title = `${work.title} | Casa Mohr`;

workDetail.innerHTML = `
    <section class="detail-hero">
        <div class="container">
            <a class="detail-back" href="index.html#trabajos"><i class="bi bi-arrow-left"></i> Volver a trabajos</a>
            <p class="detail-eyebrow">TRABAJO ${work.number}</p>
            <h1 class="detail-title">${work.title}</h1>
            <p class="detail-lead">${work.lead}</p>
        </div>
    </section>
    <section class="detail-showcase">
        <div class="container"><div class="detail-image-wrap" aria-label="Galeria de fotos del trabajo">
            <div id="gallerySlide"></div>
            <button class="gallery-arrow gallery-arrow-prev" id="galleryPrev" type="button" aria-label="Foto anterior"><i class="bi bi-chevron-left"></i></button>
            <button class="gallery-arrow gallery-arrow-next" id="galleryNext" type="button" aria-label="Foto siguiente"><i class="bi bi-chevron-right"></i></button>
            <span class="gallery-count" id="galleryCount"></span>
        </div></div>
    </section>
    <div class="detail-lightbox" id="detailLightbox" aria-hidden="true" role="dialog" aria-label="Foto en pantalla completa">
        <button class="detail-lightbox-close" id="detailLightboxClose" type="button" aria-label="Cerrar pantalla completa"><i class="bi bi-x-lg"></i></button>
        <img id="detailLightboxImage" src="" alt="">
    </div>
    <section class="detail-body">
        <div class="container"><div class="row g-5 align-items-start">
            <div class="col-lg-7 detail-copy"><p class="detail-kicker">EL TRABAJO</p><h2>Diseñado para acompañar tu día a día.</h2><p>${work.description}</p></div>
            <div class="col-lg-5"><dl class="detail-list"><div><dt>Tipo</dt><dd>${work.type}</dd></div><div><dt>Enfoque</dt><dd>${work.focus}</dd></div><div><dt>Proceso</dt><dd>${work.process}</dd></div></dl></div>
        </div></div>
    </section>
    <section class="detail-tips"><div class="container">
        <p class="detail-kicker">RECOMENDACIONES</p><h2>Claves para tu proyecto</h2>
        <div class="row g-4">${work.tips.map(([number, title, text]) => `<div class="col-md-4"><article class="tip-card"><span class="tip-number">${number}</span><h3>${title}</h3><p>${text}</p></article></div>`).join("")}</div>
    </div></section>
    <section class="detail-cta"><div class="container"><h2>¿Querés llevar esta idea a tu espacio?</h2><p>Contanos qué necesitás y te acompañamos a crear una propuesta pensada para vos.</p><a class="btn btn-light" href="https://wa.me/595986120909?text=Hola%2C%20Casa%20Mohr.%20Quisiera%20consultar%20por%20${encodeURIComponent(work.title)}." target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></div></section>
`;

document.getElementById("currentYear").textContent = new Date().getFullYear();

const gallerySlide = document.getElementById("gallerySlide");
const galleryCount = document.getElementById("galleryCount");

function renderGallery() {
    const image = gallery[currentGalleryIndex];

    if (image.src) {
        gallerySlide.innerHTML = `<img src="${image.src}" alt="${image.alt}" tabindex="0" role="button" aria-label="Abrir foto en pantalla completa">`;
    } else {
        gallerySlide.innerHTML = `
            <div class="detail-gallery-placeholder">
                <i class="bi bi-image"></i>
                <strong>Espacio para foto ${currentGalleryIndex + 1}</strong>
                <span>Agregá aquí una nueva imagen del trabajo.</span>
            </div>`;
    }

    galleryCount.textContent = `${currentGalleryIndex + 1} / ${gallery.length}`;
}

function changeGallery(direction) {
    currentGalleryIndex = (currentGalleryIndex + direction + gallery.length) % gallery.length;
    renderGallery();
}

document.getElementById("galleryPrev").addEventListener("click", () => changeGallery(-1));
document.getElementById("galleryNext").addEventListener("click", () => changeGallery(1));
renderGallery();

const detailLightbox = document.getElementById("detailLightbox");
const detailLightboxImage = document.getElementById("detailLightboxImage");
const detailLightboxClose = document.getElementById("detailLightboxClose");

function openLightbox() {
    const image = gallery[currentGalleryIndex];
    if (!image.src) return;

    detailLightboxImage.src = image.src;
    detailLightboxImage.alt = image.alt;
    detailLightbox.classList.add("is-open");
    detailLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    detailLightboxClose.focus();
}

function closeLightbox() {
    detailLightbox.classList.remove("is-open");
    detailLightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

gallerySlide.addEventListener("click", openLightbox);
gallerySlide.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox();
    }
});
detailLightboxClose.addEventListener("click", closeLightbox);
detailLightbox.addEventListener("click", (event) => {
    if (event.target === detailLightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && detailLightbox.classList.contains("is-open")) {
        closeLightbox();
    }
});
