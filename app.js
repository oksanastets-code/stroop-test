const colors = [
    '#000000', //black
    '#EC2D01', //tomato
    '#FF9F00', //orange
    '#FFDF22', //yellow
    '#51B73B', //green
    '#02CCFE', //light blue
    '#0C1793', //blue
    '#5B0099', //violet
    '#FC0FC0', //pink
];
console.log(colors);
const text = ['Чорний', 'Червоний', 'Помаранчевий', 'Жовтий', 'Зелений', 'Голубий', 'Синій', 'Фіолетовий', 'Рожевий',]
console.log(text);

const controlPanel = document.querySelector('#controls');
const inputValueEl = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

inputValueEl.addEventListener('input', onInputValue);
function onInputValue(event) {
};

renderBtn.addEventListener('click', onRenderBtnClick);
function onRenderBtnClick() {
    const amount = inputValueEl.value;
    createBoxes(amount);
};

destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick() {
    inputValueEl.value = '';
    boxesContainer.innerHTML = '';
    console.log(boxesContainer);
}

function random() {
    return Math.round(Math.random() * 256);
}

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.height = '300px';
        box.style.width = '300px';
        box.style.marginRight = '10px';
        box.style.marginTop = '10px';
        box.style.outline = '1px solid black';
        // box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        // box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const colorText = document.createElement('p');
        colorText.textContent = text[Math.floor(Math.random()*text.length)];
        colorText.style.color = colors[Math.floor(Math.random() * colors.length)];
        colorText.style.fontSize = '40px';
        box.append(colorText);
        boxes.push(box);
    }
    boxesContainer.innerHTML = '';
    boxesContainer.append(...boxes);
    boxesContainer.style.display = 'flex';
    boxesContainer.style.flexWrap = 'wrap';
    console.log(boxesContainer);
}