import React from "react";

import Slider from "components/common/slider/Slider";
import FilterButton from "components/common/button/FilterButton";

interface Props {}

const DateFilter: React.FC<Props> = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <Slider min={2022} max={2024} />
      <FilterButton onClick={handleClick} />
    </div>
  );
};

export default DateFilter;
