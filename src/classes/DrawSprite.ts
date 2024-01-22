import Vectors from "./Vector";

export default class DrawSprite {
  sprite: { img: HTMLImageElement; isLoaded: boolean };
  framesize: Vectors;
  Hframes: number;
  Vframes: number;
  frame: number;
  frameMap: Map<number, Vectors>;
  scale: number;
  position: Vectors;

  constructor({
    sprite,
    framesize,
    Hframes,
    Vframes,
    frame,
    scale,
    position,
  }: {
    sprite: { img: HTMLImageElement; isLoaded: boolean };
    framesize: Vectors;
    Hframes?: number;
    Vframes?: number;
    frame?: number;
    scale?: number;
    position?: { x: number; y: number };
  }) {
    this.sprite = sprite;
    this.framesize = framesize ?? new Vectors(16, 16);
    this.Hframes = Hframes ?? 1;
    this.Vframes = Vframes ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map<number, Vectors>();
    this.scale = scale ?? 1;
    this.position = position || new Vectors(0, 0);
    this.buildFrame();
  }

  buildFrame() {
    let frameCount = 0;

    for (let v = 0; v < this.Vframes; v++) {
      for (let h = 0; h < this.Hframes; h++) {
        this.frameMap.set(
          frameCount,
          new Vectors(this.framesize.x * h, this.framesize.y * v)
        );
        frameCount++;
      }
    }
  }

  drawImage(ctx: CanvasRenderingContext2D, x: number, y: number) {
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);

    if (frame) {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.framesize.x;
    const frameSizeY = this.framesize.y;

    ctx.drawImage(
      this.sprite.img,
      frameCoordX,
      frameCoordY,
      frameSizeX,
      frameSizeY,
      x,
      y,
      frameSizeX * this.scale,
      frameSizeY * this.scale
    );
  }
}
