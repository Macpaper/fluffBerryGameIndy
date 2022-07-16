import Game from '/src/game.js';

const canvas = document.querySelector("#gameScreen");
const c = canvas.getContext("2d");

const GAME_WIDTH = canvas.width = window.innerWidth;
const GAME_HEIGHT = canvas.height = window.innerHeight;

let game = new Game(GAME_WIDTH,GAME_HEIGHT);

function gameLoop() {
  c.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  c.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  c.fillStyle = 'black';
  game.update();
  game.draw(c);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);