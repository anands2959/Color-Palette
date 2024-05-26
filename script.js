// document.addEventListener('DOMContentLoaded', (event) => {
//     const redSlider = document.getElementById('red');
//     const greenSlider = document.getElementById('green');
//     const blueSlider = document.getElementById('blue');
    
//     const redValue = document.getElementById('red-value');
//     const greenValue = document.getElementById('green-value');
//     const blueValue = document.getElementById('blue-value');
    
//     const colorBox = document.getElementById('color-box');
//     const hexValue = document.getElementById('hex-value');

//     function componentToHex(c) {
//         const hex = c.toString(16);
//         return hex.length == 1 ? "0" + hex : hex;
//     }

//     function rgbToHex(r, g, b) {
//         return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//     }

//     function updateColor() {
//         const r = redSlider.value;
//         const g = greenSlider.value;
//         const b = blueSlider.value;
        
//         redValue.textContent = r;
//         greenValue.textContent = g;
//         blueValue.textContent = b;
        
//         const hexColor = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
//         colorBox.style.backgroundColor = hexColor;
//         hexValue.textContent = hexColor;
//     }

//     redSlider.addEventListener('input', updateColor);
//     greenSlider.addEventListener('input', updateColor);
//     blueSlider.addEventListener('input', updateColor);
// });



document.addEventListener('DOMContentLoaded',(e)=>{
    const redslider = document.querySelector('#red');
    const greenSlider = document.querySelector('#green');
    const blueSlider = document.querySelector('#blue');


    const redValue = document.querySelector('#red-value');
    const greenValue = document.querySelector('#green-value');
    const blueValue = document.querySelector('#blue-value');

    const colorBox = document.querySelector('#color-box');
    const hexValue = document.querySelector('#hex-value');




    function componentToHex(c){
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r,g,b){
        return '#'+componentToHex(r)+componentToHex(g)+componentToHex(b)
    }

    function updateColor(){
        const r = redslider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;

        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;

        const hexColor = rgbToHex(parseInt(r), parseInt(g),parseInt(b));
        colorBox.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }

    redslider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);


})