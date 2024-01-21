import Sprites from "./classes/Sprites";
import SpriteCharacter from "./classes/SpriteCharacter";

const root = document.getElementById("root");

const canvas = document.createElement("canvas");

const ctx = canvas.getContext("2d");

const draw = () => {
  const sky = Sprites.images.sky;
  if (sky.isLoaded) {
    ctx?.drawImage(sky.img, 0, 0);
  }
  const ground = Sprites.images.ground;
  if (sky.isLoaded) {
    ctx?.drawImage(ground.img, 0, 0);
  }
};

const character = SpriteCharacter;

setInterval(() => {
  draw();
}, 300);

root?.appendChild(canvas);
