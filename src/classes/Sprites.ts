class Resources {
  toLoad: Record<string, string> = {
    sky: "./sprites/sky.png",
    ground: "./sprites/ground.png",
    hero: "./sprites/hero.png",
    shadow: "./sprites/shadow.png",
  };

  // Image Collection
  images: { [key: string]: { img: HTMLImageElement; isLoaded: boolean } } = {};

  constructor() {
    Object.keys(this.toLoad).forEach((imgKey) => {
      const img = new Image();
      img.src = this.toLoad[imgKey];

      this.images[imgKey] = {
        img: img,
        isLoaded: false,
      };

      img.onload = () => {
        this.images[imgKey].isLoaded = true;
      };
    });
  }
}

// Example usage:
const Sprites = new Resources();

export default Sprites;
