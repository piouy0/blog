import React from "react";

import Slider from "components/slider/Slider";
import FilterButton from "components/common/button/FilterButton";
import DrawerContentsLayout from "components/drawer/drawer/DrawerContentsLayout";

import { uesGlobalDrawer } from "recoil/atom/globalDrawer";

interface Props {}

const Test = () => {
  return (
    <DrawerContentsLayout title={"연도"}>
      <Slider min={2022} max={2024} />
    </DrawerContentsLayout>
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
