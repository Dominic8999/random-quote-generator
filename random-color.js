function randomNumber(min, max){
    return min + Math.floor(Math.random() * (min - max + 1));
}
let r, g, b = randomNumber(0, 255);
const rgb = 'rgb(${r},${g},${b})';