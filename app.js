let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// ctx.fillStyle = "red"
// ctx.fillRect(50, 50, 200, 100);

// ctx.strokeStyle = "yellow";
// ctx.strokeRect(50, 50, 200, 100);

// ctx.beginPath();

// ctx.moveTo(200, 200);
// ctx.lineTo(400, 400);
// ctx.lineTo(0, 400);
// ctx.lineTo(200, 200);
// ctx.stroke();
// ctx.fill();

// ctx.closePath();

// ctx.font = "50px sans-serif";
// ctx.fillStyle = "blue";
// ctx.fillText('UPMANYU', 100, 100);


//SNAKE GAME
let cellSize = 50;
let matrix = [[0, 0]];
let boardW = 1000;
let boardH = 600;
let direction = 'right';

document.addEventListener('keydown', (e) => {

    if(e.key === "ArrowDown") {direction = 'down'}
    else if(e.key === "ArrowUp") {direction = 'up'}
    else if(e.key === "ArrowLeft") {direction = 'left'}
    else {direction = 'right'}
})

function draw() {

    if(gameOver === true) {
        clearInterval(clearSnake)
        return
    }

    ctx.clearRect(0, 0, boardW, boardH);
    for(let cell of matrix) {
        ctx.fillStyle = "red";
        ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
    }    

}

function update() {
    let headX = matrix[matrix.length - 1][0];
    let headY = matrix[matrix.length - 1][1];

    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;

    let newHeadX;
    let newHeadY;
 
    let gameOver = false;

    if(direction === 'down') {
        newHeadX = headX;
        newHeadY = headY + cellSize;

        if(newHeadY === boardH) {
            gameOver = true;
        }
    }
    else if(direction === 'up') {
        newHeadX = headX;
        newHeadY = headY - cellSize;
    
        if(newHeadY < 0) {
            gameOver = true;
        }
    }
    else if(direction === 'left') {
        newHeadX = headX - cellSize;
        newHeadY = headY;
        
        if(newHeadX < 0) {
            gameOver = true;
        }
    }
    else {
        newHeadX = headX + cellSize;
        newHeadY = headY;
    
        if(newHeadX === boardW) {
            gameOver = true;
        }
    }


    matrix.push([newHeadX, newHeadY]);
    matrix.shift();


}

let clearSnake = setInterval(() => {
    
    update();
    draw();

}, 100)


