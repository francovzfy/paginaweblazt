function showStudioMessage() {

    const message = document.getElementById("studio-message");

    const texts = [

        "Sistema analizado: setup optimizado para grabación vocal profesional.",

        "Shure SM7dB detectado: respuesta cálida y detallada para voces emocionales.",

        "Focusrite Scarlett conectada: baja latencia y conversión limpia.",

        "Entorno creativo cargado: cinematic textures + alternative pop aesthetics.",

        "Proyecto activo: LaZt — emotional digital experience."
    ];

    const randomText =
        texts[Math.floor(Math.random() * texts.length)];

    message.innerHTML = randomText;
}

/* PARALLAX GLOW EFFECT */

document.addEventListener("mousemove", (e) => {

    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    glow1.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;

    glow2.style.transform =
        `translate(${-x * 40}px, ${-y * 40}px)`;
});

/* RANDOM TITLE EFFECT */

const title = document.querySelector("nav h2");

setInterval(() => {

    title.style.letterSpacing =
        Math.random() * 10 + 5 + "px";

}, 1200);