function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function GenerateRandomRGBA(min, max, alpha) {
    const r = randomNumber(min, max);
    const g = randomNumber(min, max);
    const b = randomNumber(min, max);
    return `rgba(${r},${g},${b},${alpha})`;
}

async function ChangeBackgroundColor() {
    const rgba = GenerateRandomRGBA(50, 200, 0.9);
    document.body.style.backgroundColor = rgba;
}

async function ChangeBackgroundButtons(params) {
    
}

// Call the function to change the background color
ChangeBackgroundColor();
