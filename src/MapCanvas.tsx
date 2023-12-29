import React, { useEffect, useRef } from "react";
import { Sprites } from "./Sprites";

const MapCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = canvasRef.current?.getContext("2d");

  const draw = () => {
    if (canvasRef.current) {
      const canvasWidth = canvasRef?.current.width;
      const canvasHeight = canvasRef?.current.height;

      const sky = Sprites.images.sky;
      if (sky.isLoaded) {
        ctx?.drawImage(sky.image, 0, 0, canvasWidth, canvasHeight);
      }
      const ground = Sprites.images.ground;
      if (ground.isLoaded) {
        ctx?.drawImage(
          ground.image,
          0,
          0,
          canvasWidth / 1.2,
          canvasHeight / 1.2
        );
      }
    }
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default MapCanvas;
