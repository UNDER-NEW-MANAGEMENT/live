import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

import GradientCanvas from '../gradients/GradientCanvas';

export default function UNMBackground() {
  return (
    <UNM>
      <div className="marquee">
        <span className="new-management">NEW MANAGEMENT</span>
        <GradientCanvas />
      </div>
    </UNM>
  );
}

const UNM = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    // background: red;
    background: #0C0A25;
    &.new-management {
      height: 100%;
      overflow-x: scroll;
    }
  }
  span.new-management {
    font-size: 100vh;
    letter-spacing: -40px;
    white-space: nowrap;
    width: auto;
    // color: ${darken(0.1, 'red')};
    // font-style: italic;
    // COLORFUL
    color: white;
    mix-blend-mode: difference;
    // BLOOD
    // color: white;
    // mix-blend-mode: overlay;
  }

  .marquee {
    overflow: hidden;
    position: relative;
  }
  .marquee > span {
    position: absolute;
    margin: 0;
    margin-top: -15vh;
    -moz-transform: translateX(60%);
    -webkit-transform: translateX(55%);
    transform: translateX(55%);
    -moz-animation: scroll-left 2s linear infinite;
    -webkit-animation: scroll-left 2s linear infinite;
    animation: scroll-left 50s linear infinite;
  }
  @-moz-keyframes scroll-left {
    0% {
      -moz-transform: translateX(60%);
    }
    100% {
      -moz-transform: translateX(-62%);
    }
  }
  @-webkit-keyframes scroll-left {
    0% {
      -webkit-transform: translateX(60%);
    }
    100% {
      -webkit-transform: translateX(-62%);
    }
  }
  @keyframes scroll-left {
    0% {
      -moz-transform: translateX(60%);
      -webkit-transform: translateX(60%);
      transform: translateX(60%);
    }
    100% {
      -moz-transform: translateX(-62%);
      -webkit-transform: translateX(-62%);
      transform: translateX(-62%);
    }
  }
`;
