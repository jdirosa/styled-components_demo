import styled, { css } from "styled-components";
import { invertRGB } from "../../../helpers";

interface IColorBoxProps {
  rgb: number[];
}

/** ColorBox used to show a color palette */
const BaseColorBox = styled.div<IColorBoxProps>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 3px solid white;
`;

// Shows how to extend a style
export const RedBox = styled(BaseColorBox)`
  ${({ rgb }) =>
    css`
      background-color: rgb(${rgb[0]}, 0, 0);
    `}
`;
export const GreenBox = styled(BaseColorBox)`
  ${({ rgb }) =>
    css`
      background-color: rgb(0, ${rgb[1]}, 0);
    `}
`;
export const BlueBox = styled(BaseColorBox)`
  ${({ rgb }) =>
    css`
      background-color: rgb(0, 0, ${rgb[2]});
    `}
`;

export const Display = styled.div<IColorBoxProps>`
  width: 120px;
  font-size: 40px;
  opacity: 0.75;
  ${({ rgb }) => {
    const color = invertRGB(rgb);
    return css`
      color: rgb(${color[0]}, ${color[1]}, ${color[2]});
    `;
  }}
`;
