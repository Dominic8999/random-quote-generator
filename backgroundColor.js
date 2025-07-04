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
    document.getElementById("btn-select").style.backgroundColor = darkerColor;
}

const select = document.getElementById('btn-select');

select.addEventListener('change', () => {

    function changeColor(color2, color2) {
        document.body.style.backgroundColor = color2;
        
        document.getElementById('btn-el').style.backgroundColor = color2;
        document.getElementById('prev').style.backgroundColor = color2;
        document.getElementById('next').style.backgroundColor = color2;
        document.getElementById("btn-select").style.backgroundColor = color2;
        document.querySelectorAll('option').style.backgroundColor = color2;
    }

    switch (select.value) {
        case 'random':
            ChangeBackgroundColor();
            break;
        case 'red':
            changeColor('rgba(172, 8, 23, 0.75)', 'rgba(195, 39, 54, 0.85)'); // example colors
            break;
        case 'green':
            changeColor('rgba(78, 140, 36, 0.75)', 'rgba(88, 148, 47, 0.75)');
            break;
        case 'blue':
            changeColor('rgba(46, 139, 192, 1)', 'rgba(52, 123, 163, 0.75)');
            break;
        case 'default':
            document.body.style.backgroundColor = '#00A9A5';
        
            document.getElementById('btn-el').style.backgroundColor = '#008886';
            document.getElementById('prev').style.backgroundColor = '#008886';
            document.getElementById('next').style.backgroundColor = '#008886';
            document.getElementById("btn-select").style.backgroundColor = '#008886';
            break;
    }
});
