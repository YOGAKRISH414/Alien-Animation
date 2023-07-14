

const canvas=document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT= canvas.height= 600;

const PlayerImage=new Image();
PlayerImage.src='Alian.png';
const imagewidth = 93.4;
const imageheight= 250;

let gameframe=0;
const stagerframe=5;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position=Math.floor(gameframe/stagerframe)%8;
    let frameX=imagewidth*position;
    let frameY=0;
    ctx.drawImage(PlayerImage, frameX, frameY*imageheight, imagewidth, imageheight,
         450, 300, 150, 300);
    ctx.drawImage(PlayerImage, frameX, frameY*imageheight, imagewidth, imageheight,
        0, 300, 150, 300);
    ctx.drawImage(PlayerImage, frameX, frameY*imageheight, imagewidth, imageheight,
        450,-100, 150, 300);
    ctx.drawImage(PlayerImage, frameX, frameY*imageheight, imagewidth, imageheight,
        0,-100, 150, 300);
    ctx.drawImage(PlayerImage, frameX, frameY*imageheight, imagewidth, imageheight,
        225,70, 150, 300);

    gameframe++
    requestAnimationFrame(animate)
    
}
animate()
