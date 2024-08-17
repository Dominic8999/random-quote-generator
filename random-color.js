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

        // Darken the color by reducing the RGB values
        const darkerR = Math.max(0, Math.floor(0.8 * parseInt(rgba.split(',')[0].slice(5))));
        const darkerG = Math.max(0, Math.floor(0.8 * parseInt(rgba.split(',')[1])));
        const darkerB = Math.max(0, Math.floor(0.8 * parseInt(rgba.split(',')[2])));
        const darkerColor = `rgba(${darkerR},${darkerG},${darkerB},0.9)`;
    
        document.getElementById('btn-el').style.backgroundColor = darkerColor;
        document.getElementById('prev').style.backgroundColor = darkerColor;
        document.getElementById('next').style.backgroundColor = darkerColor;
}

// Call the function to change the background color
ChangeBackgroundColor();
