import React from "react";

import Slider from "components/slider/Slider";
import FilterButton from "components/common/button/FilterButton";
import DrawerContentLayout from "components/drawer/drawer/DrawerContentLayout";

import { uesGlobalDrawer } from "recoil/atom/globalDrawer";

interface Props {}

const Test = () => {
  return (
    <DrawerContentLayout>
      <Slider min={2022} max={2024} />
    </DrawerContentLayout>
  );
};

const DateFilter: React.FC<Props> = () => {
  const { openGlobalDrawer } = uesGlobalDrawer();

  const handleClick = () => {
    openGlobalDrawer({
      handleClose: () => {},
      component: Test,
    });
  };

  return (
    <div>
      <FilterButton onClick={handleClick} />
    </div>
  );
};

export default DateFilter;
