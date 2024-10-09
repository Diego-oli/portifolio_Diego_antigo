const botaoFixo = document.querySelector('.botao-fixo');

let isDragging = false;
let offsetX, offsetY;
botaoFixo.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - botaoFixo.getBoundingClientRect().left;
    offsetY = e.clientY - botaoFixo.getBoundingClientRect().top;
    botaoFixo.style.transition = 'none';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    botaoFixo.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const mouseX = e.clientX - offsetX;
        const mouseY = e.clientY - offsetY;

        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - botaoFixo.offsetWidth;
        const maxY = window.innerHeight - botaoFixo.offsetHeight;

        const newX = Math.min(Math.max(mouseX, minX), maxX);
        const newY = Math.min(Math.max(mouseY, minY), maxY);

        botaoFixo.style.left = `${newX}px`;
        botaoFixo.style.top = `${newY}px`;
    }
});
