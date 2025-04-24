// Controles de acessibilidade
const fontIncreaseBtn = document.getElementById('fontIncreaseBtn');
const fontDecreaseBtn = document.getElementById('fontDecreaseBtn');
const contrasteBtn = document.getElementById('contrasteBtn');

// Aumentar fonte
fontIncreaseBtn.addEventListener('click', () => {
    if (document.body.classList.contains('body-texto-grande')) {
        document.body.classList.remove('body-texto-grande');
        document.body.classList.add('body-texto-muito-grande');
    } else {
        document.body.classList.add('body-texto-grande');
    }
});

// Diminuir fonte
fontDecreaseBtn.addEventListener('click', () => {
    if (document.body.classList.contains('body-texto-muito-grande')) {
        document.body.classList.remove('body-texto-muito-grande');
        document.body.classList.add('body-texto-grande');
    } else if (document.body.classList.contains('body-texto-grande')) {
        document.body.classList.remove('body-texto-grande');
    }
});

// Alto contraste
contrasteBtn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// Modal de adoção
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.adotar-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.gato-card');
        const imgSrc = card.querySelector('.gato-img').src;
        const nome = card.querySelector('h3').textContent;
        const infos = card.querySelectorAll('li');

        modalImg.src = imgSrc;
        modalImg.alt = `Foto de ${nome}`;
        modalNome.textContent = nome;
        modalInfo.innerHTML = '';

        infos.forEach(info => {
            const li = document.createElement('li');
            li.textContent = info.textContent;
            modalInfo.appendChild(li);
        });

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
