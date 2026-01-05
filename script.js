const items = document.querySelectorAll('.item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function showItem(i) {
    items.forEach(item => item.classList.remove('active'));
    items[i].classList.add('active');
}

// Botão NEXT
next.addEventListener('click', () => {
    index++;
    if (index >= items.length) {
        index = 0;
    }
    showItem(index);
});

// Botão PREV
prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = items.length - 1;
    }
    showItem(index);
});
