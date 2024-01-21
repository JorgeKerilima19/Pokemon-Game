import Sprites from "./classes/Sprites";

const root = document.getElementById("root");

const canvas = document.createElement("canvas");

const ctx = canvas.getContext("2d");

const draw = () => {
  const sky = Sprites.images.sky;
  if (sky.isLoaded) {
    ctx?.drawImage(sky.img, 0, 0);
  }
};

setInterval(() => {
  draw();
});

root?.appendChild(canvas);
