

export default class FluffBerry {
  constructor(game) {
    this.image = document.querySelector("#fluffBerry");
    this.game = game;
    this.width = 100;
    this.height = 180;
    this.hitPoints = 100;
    this.maxSpeed = 7;
    this.position = {
      x: 100,
      y: 100
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.accel = {
      x: 0,
      y: 0
    };

  }
  shoot() {
    let mX = this.game.mouseX;
    let pX = this.position.x;
    let mY = this.game.mouseY;
    let pY = this.position.y;
    let pMX = pX + this.width / 2;
    let pMY = pY + this.height / 2;

    let pelletSpeed = 10;
    let theta = Math.atan2((mY-pMY)/(mX-pMX));
    let velPelletX = pelletSpeed * Math.cos(theta);
    let velPelletY = pelletSpeed * Math.sin(theta);
    let bullet = new Projectile(this.game, pMX, pMY, velPelletX, velPelletY);
    this.game.gameObjects.push(bullet);
  }
  moveUp() {
    this.vel.y = -this.maxSpeed;
  }
  moveLeft() {
    this.vel.x = -this.maxSpeed;
  }
  moveDown() {
    this.vel.y = this.maxSpeed;
  }
  moveStop() {
    this.vel.x = 0;
    this.vel.y = 0;
  }
  moveRight() {
    this.vel.x = this.maxSpeed;
  }
  update() {
    this.accel.x = Math.round(this.accel.x);
    this.accel.y = Math.round(this.accel.y);
    if (this.accel.x > 0) {
      this.accel.x--;
    }
    if (this.accel.y > 0) {
      this.accel.y--;
    }
    if (this.accel.x < 0) {
      this.accel.x++;
    }
    if (this.accel.y < 0) {
      this.accel.y++;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x > this.game.width - this.width) {
      this.position.x = this.game.width - this.width;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    if (this.position.y > this.game.height - this.height) {
      this.position.y = this.game.height - this.height;
    }

    this.position.x += this.vel.x + this.accel.x;
    this.position.y += this.vel.y + this.accel.y;
  }
  draw(c) {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}