import React from "react";
import BaseSlider from "@mui/material/Slider";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 300px;
`;

interface Props {
  min: number;
  max: number;
}

const Slider: React.FC<Props> = ({ min, max }) => {
  const [value, setValue] = React.useState<number[]>([min, max]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue);
    setValue(newValue as number[]);
  };

  return (
    <Wrapper>
      <BaseSlider min={min} max={max} value={value} onChange={handleChange} valueLabelDisplay="auto" />
    </Wrapper>
  );
};

export default Slider;
