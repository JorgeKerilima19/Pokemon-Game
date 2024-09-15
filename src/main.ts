import GameLoop from "./classes/Gameloop";

import Sprites from "./classes/Sprites";
import DrawSprite from "./classes/DrawSprite";
import Vectors from "./classes/Vector";

import InputMove, { DOWN, LEFT, RIGHT, UP } from "./classes/InputMove";

const root = document.getElementById("root");

const canvas = document.createElement("canvas");

const ctx = canvas.getContext("2d");

const skySprite = new DrawSprite({
  sprite: Sprites.images.sky,
  framesize: new Vectors(320, 180),
});

const groundSprite = new DrawSprite({
  sprite: Sprites.images.ground,
  framesize: new Vectors(320, 180),
});

const heroShadow = new DrawSprite({
  sprite: Sprites.images.shadow,
  framesize: new Vectors(320, 180),
});

const hero = new DrawSprite({
  sprite: Sprites.images.hero,
  framesize: new Vectors(32, 32),
  Hframes: 3,
  Vframes: 8,
  frame: 1,
});

const heroPos = new Vectors(16 * 5, 16 * 5);
const inputMove = new InputMove();

const draw = () => {
  //Hero On grid

  const heroOffset = new Vectors(8, -21);
  const heroPostX = heroPos.x + heroOffset.x;
  const heroPostY = heroPos.y + heroOffset.y;

  if (ctx) {
    skySprite.drawImage(ctx, 0, 0);
    groundSprite.drawImage(ctx, 0, 0);

    heroShadow.drawImage(ctx, heroPostX, heroPostY);
    hero.drawImage(ctx, heroPostX, heroPostY);
  }
};

const update = () => {
  if (inputMove.direction === UP) {
    heroPos.y -= 1;
    hero.frame = 6;
  }
  if (inputMove.direction === DOWN) {
    heroPos.y += 1;
    hero.frame = 0;
  }
  if (inputMove.direction === LEFT) {
    heroPos.x -= 1;
    hero.frame = 9;
  }
  if (inputMove.direction === RIGHT) {
    heroPos.x += 1;
    hero.frame = 3;
  }
};

const game = new GameLoop(update, draw);

game.start();

root?.appendChild(canvas);
