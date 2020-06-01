import styled, { keyframes, css } from "styled-components";
import { invertRGB } from "../helpers";

export const AppWraper = styled.div`
  text-align: center;
`;

interface IRGBProps {
  rgb: number[];
}

/** Styled component for the application Title */
export const Title = styled.div<IRGBProps>`
  font-size: 72px;
  ${({ rgb }) => {
    const invertedColor = invertRGB(rgb);
    return css`
      color: rgb(${invertedColor[0]}, ${invertedColor[1]}, ${invertedColor[2]});
    `;
  }}
`;

/** Wrapper / styling for the general app */
export const AppBody = styled.div<IRGBProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white !important;

  ${({ rgb }) =>
    css`
      background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]});
    `}
`;

/** Standard link */
export const Link = styled.a<IRGBProps>`
  font-size: 12px;
  transition: 0.25s;
  line-height: 40px;
  :hover {
    font-size: 30px;
  }
  ${(props) => {
    const color = invertRGB(props.rgb);
    return css`
      color: rgb(${color[0]}, ${color[1]}, ${color[2]});
    `;
  }}
`;

/** Animation effect that causes a spint */
const AppLogoSpin = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface ILogoProps {
  speed?: number;
}

/** We could even pass in different animation types as a prop if we didn't want to spin */
export const AppLogo = styled.img<ILogoProps>`
  height: 40vmin;
  pointer-events: none;
  user-select: none;
  cursor: pointer;
  pointer-events: all;
  animation: ${AppLogoSpin} infinite 20s linear;
  ${(props) =>
    css`
      animation: ${AppLogoSpin} infinite ${props.speed}s linear;
    `}
`;

/** Center divs */
export const AppContent = styled.div`
  margin: 0 auto;
`;

/** hyperlink styled as a button. Defaults to the inverted RGB color */
export const Button = styled.a<IRGBProps>`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 40px;
  cursor: pointer;
  transition: 0.25s;
  ${({ rgb }) => {
    const invertedColor = invertRGB(rgb);
    return css`
      border: 3px solid
        rgb(${invertedColor[0]}, ${invertedColor[1]}, ${invertedColor[2]});
      background-color: rgb(
        ${invertedColor[0]},
        ${invertedColor[1]},
        ${invertedColor[2]}
      );
      color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]});
      :hover {
        border: 3px solid
          rgb(${invertedColor[0]}, ${invertedColor[1]}, ${invertedColor[2]});
        background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]});
        color: rgb(
          ${invertedColor[0]},
          ${invertedColor[1]},
          ${invertedColor[2]}
        );
      }
    `;
  }};
`;
