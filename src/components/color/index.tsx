import React from "react";
import { RedBox, BlueBox, GreenBox } from "./styled";
import { Slider, Grid } from "@material-ui/core";
import { ColorRow } from "../ColorRow";

interface IProps {
  rgb: number[];
  onChange: (rgb: number[]) => void;
}
export const ColorSliders: React.FC<IProps> = ({ rgb, onChange }) => {
  const handleChange = (color: "r" | "g" | "b") => (val: number) => {
    const rgbCopy = [...rgb];
    if (color === "r") {
      rgbCopy[0] = val as number;
    }
    if (color === "g") {
      rgbCopy[1] = val as number;
    }
    if (color === "b") {
      rgbCopy[2] = val as number;
    }

    onChange(rgbCopy);
  };

  // Array destructuring -- bonus!
  const [red, green, blue] = rgb;
  return (
    <>
      <ColorRow value={red} onChange={handleChange("r")} rgb={rgb}>
        <RedBox rgb={rgb} />
      </ColorRow>
      <ColorRow value={green} onChange={handleChange("g")} rgb={rgb}>
        <GreenBox rgb={rgb} />
      </ColorRow>
      <ColorRow value={blue} onChange={handleChange("b")} rgb={rgb}>
        <BlueBox rgb={rgb} />
      </ColorRow>
    </>
  );
};
