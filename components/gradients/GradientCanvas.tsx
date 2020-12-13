import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import Gradient from './Gradient';

interface IGradientCanvasProps {
  gradientTheme?: string;
};

export default function GradientCanvas(props: IGradientCanvasProps) {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <GlobalCanvasCSS />
      <canvas id="gradient-canvas" {...props} />
    </>
  );
}

const GlobalCanvasCSS = createGlobalStyle`
  #gradient-canvas {
    ${() => {
      // TODO: Other themes
      // COLORFUL
      return `
        --gradient-color-1: #FF3049;
        --gradient-color-2: #9300C6;
        --gradient-color-3: #FFD130;
        --gradient-color-4: #3221EA;
        --gradient-color-5: #67FF80;
      `;
    }}
    height: 100vh;
    width: 100vw;
  }
  html {
    background: #FF3049;
  }
`;
