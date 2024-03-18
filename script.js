let grid = document.getElementById("square-container"); 

for (let i = 0; i < 800; i++) 
   { 
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', function () {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;
    });

    square.addEventListener('mouseout', function () {
        setTimeout(function () {
            square.style.backgroundColor = 'rgb(29, 29, 29)';
        }, 1000);
    });

    grid.appendChild(square); 
}

function getRandomColor() {
    const letters = '1234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
