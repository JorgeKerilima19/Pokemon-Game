class GameLoop {
  update: any;
  render: any;

  lastFrameTime: number;
  timeAccumulated: number;
  timeStep: number;

  rafId: number; //reques animation frame id
  isRunning: boolean;

  constructor(update: () => void, render: () => void) {
    this.update = update;
    this.render = render;

    this.lastFrameTime = 0;
    this.timeAccumulated = 0;
    this.timeStep = 1000 / 60;

    this.rafId = 0;
    this.isRunning = false;

    this.mainLoop = this.mainLoop.bind(this);
  }

  mainLoop(timeStamp: number) {
    if (!this.isRunning) return;

    let deltaTime = timeStamp - this.lastFrameTime;
    this.lastFrameTime = timeStamp;

    this.timeAccumulated += deltaTime;

    while (this.timeAccumulated >= this.timeStep) {
      this.update();
      this.timeAccumulated -= this.timeStep;
    }

    this.render();

    this.rafId = requestAnimationFrame(this.mainLoop);
  }

  start = () => {
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this.mainLoop);
    }
  };
  stop = () => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunning = false;
  };
}

export default GameLoop;
