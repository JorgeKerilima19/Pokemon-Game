class Sprite {
  load: {
    sky: string;
    ground: string;
    hero: string;
    shadow: string;
  };

  images: { [key: string]: { image: HTMLImageElement; isLoaded: boolean } };

  constructor() {
    this.load = {
      sky: "/sprites/sky.png",
      ground: "/sprites/ground.png",
      hero: "/sprites/hero.png",
      shadow: "/sprites/shadow.png",
    };

    this.images = {};

    const loadImage = (key: string) => {
      const img = new Image();
      img.src = this.load[key as keyof typeof this.load];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };

      img.onload = () => {
        this.images[key].isLoaded = true;
      };
    };

    Object.keys(this.load).forEach((key) => {
      loadImage(key);
    });
  }
}

export const Sprites = new Sprite();
