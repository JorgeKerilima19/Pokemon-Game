export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";

export default class InputMove {
  heldDirection: string[];

  constructor() {
    this.heldDirection = [];

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onKeyPressed(UP);
      }
      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onKeyPressed(DOWN);
      }
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onKeyPressed(LEFT);
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onKeyPressed(RIGHT);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onKeyReleased(UP);
      }
      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onKeyReleased(DOWN);
      }
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onKeyReleased(LEFT);
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onKeyReleased(RIGHT);
      }
    });
  }

  get direction() {
    return this.heldDirection[0];
  }

  onKeyPressed(heldDirection: string) {
    if (this.heldDirection.indexOf(heldDirection) === -1) {
      this.heldDirection.unshift(heldDirection);
    }
  }
  onKeyReleased(direction: string) {
    const index = this.heldDirection.indexOf(direction);

    if (index === -1) {
      return;
    }

    this.heldDirection.splice(index, 1);
  }
}
