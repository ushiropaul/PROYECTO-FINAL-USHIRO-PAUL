document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".contenedor-reglas .reglas div");

    // Función para mostrar los div uno por uno
    function showDivsWithDelay() {
        divs.forEach((div, index) => {
            setTimeout(() => {
                div.style.display = "block"; // Mostrar el div
                div.classList.add("show-animation"); // Agregar clase de animación
                showSpansWithTypingEffect(div); // Mostrar los span dentro de este div con efecto de escritura
            }, index * 4000); // Retraso entre cada div (6 segundos)
        });
    }

    // Función para mostrar los span dentro de los h5 con efecto de escritura
    function showSpansWithTypingEffect(div) {
        const spans = div.querySelectorAll("span");

        spans.forEach(span => {
            const chars = span.textContent.split("");
            span.textContent = ""; // Vaciar el contenido inicial del span

            chars.forEach((char, charIndex) => {
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                charSpan.style.animationDelay = `${charIndex * 50}ms`; // Delay para mostrar cada caracter
                span.appendChild(charSpan);
            });

            span.style.display = "inline"; // Mostrar el span
            span.classList.add("show-animation"); // Agregar clase de animación
        });
    }

    // Mostrar los div uno por uno
    showDivsWithDelay();
});
