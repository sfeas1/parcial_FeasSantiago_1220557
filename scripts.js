const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
const cuerpo = document.body;
const CLASE_OSCURA = 'modo-oscuro';
const LOCAL_STORAGE_KEY = 'tema';

function aplicarModo(esOscuro) {
    if (esOscuro) {
        cuerpo.classList.add(CLASE_OSCURA);
        modoOscuroBtn.textContent = 'Modo Claro';
    } else {
        cuerpo.classList.remove(CLASE_OSCURA);
        modoOscuroBtn.textContent = 'Modo Oscuro';
    }
}

function alternarModoOscuro() {
    const actualmenteOscuro = cuerpo.classList.contains(CLASE_OSCURA);
    aplicarModo(!actualmenteOscuro);
    localStorage.setItem(LOCAL_STORAGE_KEY, !actualmenteOscuro ? 'oscuro' : 'claro');
}

document.addEventListener('DOMContentLoaded', () => {
    const preferenciaGuardada = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (preferenciaGuardada === 'oscuro') {
        aplicarModo(true);
    } else {
        aplicarModo(false);
    }
});

modoOscuroBtn.addEventListener('click', alternarModoOscuro);