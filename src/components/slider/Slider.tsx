import React from "react";
import BaseSlider from "@mui/material/Slider";
import styled from "@emotion/styled";
import { themedPalette } from "styles/theme";

const SliderStyle = () => ({
  color: themedPalette.primaryColor,
});

const Wrapper = styled.div`
  padding: 0 12px;
`;

interface Props {
  min: number;
  max: number;
  value: number[];
  onChange: (event: Event, newValue: number | number[]) => void;
}

const Slider: React.FC<Props> = ({ min, max, value, onChange }) => {
  return (
    <Wrapper>
      <BaseSlider min={min} max={max} value={value} onChange={onChange} sx={SliderStyle} valueLabelDisplay="auto" />
    </Wrapper>
  );
};

export default Slider;
