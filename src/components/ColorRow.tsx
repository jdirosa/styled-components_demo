import React from "react";
import styled from "styled-components";
import { Grid, Slider } from "@material-ui/core";
import { Display } from "./color/styled";

interface IProps {
  value: number;
  onChange: (val: number) => void;
  rgb: number[];
}
export const ColorRow: React.FC<IProps> = ({
  value,
  onChange,
  children,
  rgb,
}) => {
  const handleChange = (e: any, val: number | number[]) => {
    onChange(val as number);
  };

  return (
    <Grid container justify={"center"} spacing={5}>
      <Grid item>{children}</Grid>
      <Grid item>
        <SliderWrapper>
          <Slider
            step={5}
            value={value}
            min={0}
            max={255}
            onChange={handleChange}
          />
        </SliderWrapper>
      </Grid>
      <Grid item>
        <Display rgb={rgb}>{value.toString().padStart(3, "0")}</Display>
      </Grid>
    </Grid>
  );
};

const SliderWrapper = styled.div`
  width: 500px;
  margin-top: 8px;
`;
