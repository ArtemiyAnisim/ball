const field = document.querySelector('.field');
const ball = document.querySelector('.ball');
const ballSize = ball.offsetWidth;

field.addEventListener('click', (event) => {
    const fieldRect = field.getBoundingClientRect();
    const fieldLeft = fieldRect.left + window.pageXOffset;
    const fieldTop = fieldRect.top + window.pageYOffset;

    const mouseX = event.clientX - fieldLeft;
    const mouseY = event.clientY - fieldTop;

    const clampedX = Math.min(Math.max(0, mouseX - ballSize / 2), field.offsetWidth - ballSize);
    const clampedY = Math.min(Math.max(0, mouseY - ballSize / 2), field.offsetHeight - ballSize);

    ball.style.left = `${clampedX}px`;
    ball.style.top = `${clampedY}px`;
});
