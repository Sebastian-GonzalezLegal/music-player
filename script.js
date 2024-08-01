document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const audio2 = document.getElementById('audio2');
    const playBtn = document.getElementById('play-btn');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const playBtn2 = document.getElementById('play-btn2');
    const leftBtn2 = document.getElementById('left-btn2');
    const rightBtn2 = document.getElementById('right-btn2');
    const playSvg = document.getElementById('play-svg')
    const pauseSvg = document.getElementById('pause-svg')
    const playSvg2 = document.getElementById('play-svg2')
    const pauseSvg2 = document.getElementById('pause-svg2')
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const progress2 = document.getElementById('progress2');
    const currentTimeEl2 = document.getElementById('current-time2');
    const durationEl2 = document.getElementById('duration2');
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    

    // Mostrar la duración del audio una vez que está listo
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Actualizar el progreso de la reproducción
    audio.addEventListener('timeupdate', () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Alternar entre reproducir y pausar
    playBtn.addEventListener('click', () => {
        if (audio.paused || audio.ended) {
            audio.play();
            pauseSvg.style.display = 'block'
            playSvg.style.display = 'none'
        } else {
            audio.pause();
            playSvg.style.display = 'block'
            pauseSvg.style.display = 'none'
        }
    });

    leftBtn.addEventListener('click', () => {
        audio.currentTime = 0;  // Reinicia el tiempo de reproducción
        progress.style.width = '0%';
        currentTimeEl.textContent = formatTime(0);
    });

    rightBtn.addEventListener('click', () =>{
        audio.pause();
        audio.currentTime = 0;  // Reinicia el tiempo de reproducción
        progress.style.width = '0%';
        currentTimeEl.textContent = formatTime(0);

        pauseSvg.style.display = 'none'
        playSvg.style.display = 'block'

        container1.classList.remove('active');
        container2.classList.add('active');
    });

        // Mostrar la duración del audio una vez que está listo
    audio2.addEventListener('loadedmetadata', () => {
        durationEl2.textContent = formatTime(audio2.duration);
    });

    // Actualizar el progreso de la reproducción
    audio2.addEventListener('timeupdate', () => {
        const progressPercent = (audio2.currentTime / audio2.duration) * 100;
        progress2.style.width = `${progressPercent}%`;
        currentTimeEl2.textContent = formatTime(audio2.currentTime);
    });

    playBtn2.addEventListener('click', () => {
        if (audio2.paused || audio2.ended) {
            audio2.play();
            pauseSvg2.style.display = 'block'
            playSvg2.style.display = 'none'
        } else {
            audio2.pause();
            playSvg2.style.display = 'block'
            pauseSvg2.style.display = 'none'
        }
    });

    leftBtn2.addEventListener('click', () => {
        audio2.currentTime = 0;  // Reinicia el tiempo de reproducción
        progress2.style.width = '0%';
        currentTimeEl2.textContent = formatTime(0);
    });

    rightBtn2.addEventListener('click', () =>{
        audio2.pause();
        audio2.currentTime = 0;  // Reinicia el tiempo de reproducción
        progress2.style.width = '0%';
        currentTimeEl2.textContent = formatTime(0);

        pauseSvg2.style.display = 'none'
        playSvg2.style.display = 'block'

        container2.classList.remove('active');
        container1.classList.add('active');
    });

    // Función para formatear el tiempo de reproducción en minutos y segundos
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
