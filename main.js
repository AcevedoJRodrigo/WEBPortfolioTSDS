function copyText() {
    navigator.clipboard.writeText("javieracevedotm@hotmail.com");
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.style.opacity = 1;
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 500);
    }, 2000);
}

function slowScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const top = section.offsetTop;
    const duration = 2000; // Duración del desplazamiento en milisegundos (2 segundos)

    smoothScrollTo(top, duration);
}

function smoothScrollTo(endY, duration) {
    const startY = window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    function scroll() {
        const currentTime = new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Función de easing para un desplazamiento suave y natural
        const easing = easeInOutQuad(progress);

        window.scrollTo(0, startY + distanceY * easing);

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scroll);
}

function openEasterEgg() {
    const url = "https://www.youtube.com/watch?v=OlrPjZr2ToY";
    window.open(url, "_blank");
}


