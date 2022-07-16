import FluffBerry from "/src/fluffBerry.js";
import InputHandler from "/src/inputController.js";
export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.mouseX = 0;
    this.mouseY = 0;

    this.gameObjects = [];
    this.fluff = new FluffBerry(this);
    this.gameObjects.push(this.fluff);
    new InputHandler(this.fluff, this);
    this.start();
  }
  update() {
    this.gameObjects.forEach((e) => {
      e.update();
    });
  }
  draw(c) {
    this.gameObjects.forEach((e) => {
      e.draw(c);
    });
  }
  start() {
    document.addEventListener("mousemove", e => {
      console.log(e.clientX)
      console.log(e.clientY)
    })
    console.log("I");
  }
}
